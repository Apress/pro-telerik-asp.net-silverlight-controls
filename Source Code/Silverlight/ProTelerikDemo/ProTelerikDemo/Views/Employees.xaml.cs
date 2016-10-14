using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using System.Windows.Navigation;
using Telerik.Windows.Controls;
using ProTelerikDemo.Web;
using ProTelerikDemo.Web.Services;
using System.ServiceModel.DomainServices.Client;
using Telerik.Windows;
using Telerik.Windows.Controls.Map;
using System.Windows.Media.Imaging;

namespace ProTelerikDemo.Views
{
    public partial class Employees : Page
    {
        // This Bing Key is for use with the address
        // http://localhost:12345. Please make sure
        // you use this specific port when running
        // this sample application
        private string BingMapKey = "Aoz1sqSFDj6wtUjgGGH7PLsc09W8nL81Fexx_lPK7_W4mq3k9WYkxpoqWIXqkH6p";

        public Employees()
        {
            InitializeComponent();
            LoadRegions();
        }

        private void LoadRegions()
        {
            NorthwindDomainContext nwd = new NorthwindDomainContext();
            treeLocations.ItemsSource = nwd.Regions;
            nwd.Load(nwd.GetRegionsQuery());
        }

        // Executes when the user navigates to this page.
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
        }

        private void treeLocations_LoadOnDemand(object sender, RadRoutedEventArgs e)
        {
            RadTreeViewItem item = e.OriginalSource as RadTreeViewItem;

            Region r = item.Item as Region;
            if (r != null)
            {
                NorthwindDomainContext nwd = new NorthwindDomainContext();
                item.ItemsSource = nwd.Territories;
                nwd.Load(nwd.GetTerritoriesByRegionQuery(r.RegionID), TerritoriesLoaded, item);
            }
            else
            {
                item.IsLoadOnDemandEnabled = false;
            }

        }

        private void TerritoriesLoaded(LoadOperation operation)
        {
            if (!operation.HasError)
                ((RadTreeViewItem)operation.UserState).IsExpanded = true;
        }

        private void treeLocations_ItemPrepared(object sender, RadTreeViewItemPreparedEventArgs e)
        {
            RadTreeViewItem item = e.PreparedItem;
            if (item.Item is Territory)
            {
                item.IsLoadOnDemandEnabled = false;
            }
        }

        private void treeLocations_Selected(object sender, Telerik.Windows.RadRoutedEventArgs e)
        {
            RadTreeViewItem item = e.OriginalSource as RadTreeViewItem;
            Territory t = item.Item as Territory;
            if (t != null)
            {
                NorthwindDomainContext nwd = new NorthwindDomainContext();
                gridEmployees.IsBusy = true;
                gridEmployees.ItemsSource = nwd.Employees;
                nwd.Load(nwd.GetEmployeesByTerritoryQuery(t.TerritoryID), result =>
                {
                    gridEmployees.IsBusy = false;
                }, null);
            }
        }

        private void gridEmployees_SelectionChanged(object sender, SelectionChangeEventArgs e)
        {
            Employee employee = gridEmployees.SelectedItem as Employee;
            if (employee != null)
            {
                NorthwindDomainContext nwd = new NorthwindDomainContext();
                gridOrders.IsBusy = true;
                gridOrders.ItemsSource = nwd.Orders;
                nwd.Load(nwd.GetEmployeeOrdersQuery(employee.EmployeeID), result =>
                {
                    gridOrders.IsBusy = false;
                }, null);
            }
        }

        private void gridOrders_SelectionChanged(object sender, SelectionChangeEventArgs e)
        {
            Order order = gridOrders.SelectedItem as Order;
            if (order != null)
            {
                RadMap1.Provider = new BingMapProvider(MapMode.Aerial, true, BingMapKey);
                RadMap1.ZoomLevel = 12;
                BingGeocodeProvider geocodeProvider = new BingGeocodeProvider();
                geocodeProvider.ApplicationId = BingMapKey;
                geocodeProvider.MapControl = RadMap1;
                Address adr = new Address();
                adr.AddressLine = order.ShipAddress;
                adr.PostalCode = order.ShipPostalCode;
                adr.PostalTown = order.ShipCity;
                adr.AdminDistrict = order.ShipRegion;
                adr.CountryRegion = order.ShipCountry;
                GeocodeRequest request = new GeocodeRequest { Address = adr };
                geocodeProvider.GeocodeCompleted += geocodeProvider_GeocodeCompleted;
                geocodeProvider.GeocodeAsync(request);
            }

        }

        private void geocodeProvider_GeocodeCompleted(object sender, GeocodeCompletedEventArgs e)
        {
            GeocodeResponse response = e.Response;
            InformationLayer.Items.Clear();
            if (response.Results.Count == 0) return;
            var result = response.Results.First();
            if (result.Locations.Count == 0) return;
            Location l = result.Locations.First();
            MapPinPoint pinPoint = new MapPinPoint()
            {
                Background = new SolidColorBrush(Colors.White),
                Foreground = new SolidColorBrush(Colors.Red),
                FontSize = 10,
                ImageSource = new BitmapImage(new Uri("/Telerik.Silverlight.RadMap;component/Resources/PinPoint.png", UriKind.Relative)),
                Text = result.Address.FormattedAddress
            };
            Location loc = new Location(l.Latitude, l.Longitude);
            RadMap1.Center = loc;
            MapLayer.SetLocation(pinPoint, loc);
            InformationLayer.Items.Add(pinPoint);
        }


    }
}
