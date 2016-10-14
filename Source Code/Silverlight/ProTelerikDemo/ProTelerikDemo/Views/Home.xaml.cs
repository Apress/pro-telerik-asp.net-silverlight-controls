namespace ProTelerikDemo
{
    using System.Linq;
    using System.Windows.Controls;
    using System.Windows.Navigation;
    using Telerik.Windows.Controls;
    using ProTelerikDemo.Web.Services;
    using System.Collections.Generic;
    using System;
    using Telerik.Windows.Controls.Charting;
    using ProTelerikDemo.Web;

    /// <summary>
    /// Home page for the application.
    /// </summary>
    public partial class Home : Page
    {
        /// <summary>
        /// Creates a new <see cref="Home"/> instance.
        /// </summary>
        public Home()
        {
            InitializeComponent();

            this.Title = ApplicationStrings.HomePageTitle;

            LoadChartData();
            LoadGridData();
        }

        private void LoadGridData()
        {
            // Create the context object
            NorthwindDomainContext nwd = new NorthwindDomainContext();

            // load the data
            this.gridExpensiveProducts.IsBusy = true;
            this.largeGridExpensiveProducts.IsBusy = true;
            this.gridExpensiveProducts.ItemsSource = nwd.Products;
            this.largeGridExpensiveProducts.ItemsSource = nwd.Products;
            nwd.Load(nwd.GetMostExpensiveProductsQuery(), result => {
                this.gridExpensiveProducts.IsBusy = false;
                this.largeGridExpensiveProducts.IsBusy = false;
                if (result.Entities.Count() > 0)
                         {
                             this.mostExpensiveProduct.Text = result.Entities.First().ProductName;
                         }
            }, null);
        }

        private void LoadChartData()
        {
            // Create the context object
            NorthwindDomainContext nwd = new NorthwindDomainContext();

            // Set the mappings for the charts
            SetBarMappings(this.SalesByCountryNormal);
            SetPieMappings(this.SalesByCountryLarge);

            // Get the sales data
            this.SalesByCountryNormal.ItemsSource = nwd.MonthlySales;
            this.SalesByCountryLarge.ItemsSource = nwd.MonthlySales;
            
            nwd.Load(nwd.GetMonthlySalesQuery(), result =>
                    {
                        decimal total = 0;
                        result.Entities.ToList().ForEach(e =>
                                                        {
                                                            total += e.Sales;
                                                        });
                        totalSales.Text = string.Format("Total Sales: {0:c}", total);
                    }, null);
        }

        private void SetPieMappings(RadChart chart)
        {
            SeriesMapping seriesMapping = new SeriesMapping();
            seriesMapping.SeriesDefinition = new Pie3DSeriesDefinition();
            seriesMapping.SeriesDefinition.ItemLabelFormat = "#Y{C0}";
            ItemMapping itemMapping = new ItemMapping();
            itemMapping.DataPointMember = DataPointMember.YValue;
            itemMapping.FieldName = "Sales";
            seriesMapping.ItemMappings.Add(itemMapping);
            itemMapping = new ItemMapping();
            itemMapping.DataPointMember = DataPointMember.LegendLabel;
            itemMapping.FieldName = "MonthName";
            seriesMapping.ItemMappings.Add(itemMapping);
            chart.SeriesMappings.Add(seriesMapping);
            chart.DefaultView.ChartArea.Extensions.Add(new CameraExtension());
        }

        private void SetBarMappings(RadChart chart)
        {
            SeriesMapping seriesMapping = new SeriesMapping();
            seriesMapping.SeriesDefinition = new BarSeriesDefinition();
            seriesMapping.LegendLabel = "Sales";
            seriesMapping.SeriesDefinition.ItemLabelFormat = "#Y{C0}";
            ItemMapping itemMapping = new ItemMapping();
            itemMapping.DataPointMember = DataPointMember.YValue;
            itemMapping.FieldName = "Sales";
            seriesMapping.ItemMappings.Add(itemMapping);
            itemMapping = new ItemMapping();
            itemMapping.DataPointMember = DataPointMember.XCategory;
            itemMapping.FieldName = "MonthName";
            seriesMapping.ItemMappings.Add(itemMapping);
            chart.SeriesMappings.Add(seriesMapping);
        }

        /// <summary>
        /// Executes when the user navigates to this page.
        /// </summary>
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
        }

        private void DashboardRadTileView_TileStateChanged(object sender, 
                                                           Telerik.Windows.RadRoutedEventArgs e)
        {
            RadTileViewItem item = e.Source as RadTileViewItem;
            if (item != null)
            {
                RadFluidContentControl fluidControl = item.Content as RadFluidContentControl;
                if (fluidControl != null)
                {
                    switch (item.TileState)
                    {
                        case TileViewItemState.Maximized:
                            fluidControl.State = FluidContentControlState.Large;
                            break;
                        case TileViewItemState.Minimized:
                            fluidControl.State = FluidContentControlState.Small;
                            break;
                        case TileViewItemState.Restored:
                            fluidControl.State = FluidContentControlState.Normal;
                            break;
                    }
                }
            }
        }
    }
}