using ProTelerikDemo.Web.Services;
using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;
using Telerik.Windows.Controls;
using Telerik.Windows.Controls.GridView;

namespace ProTelerikDemo.Views
{
    public partial class Categories : Page
    {
        private NorthwindDomainContext nwd = null;

        public Categories()
        {
            InitializeComponent();
            nwd = new NorthwindDomainContext();
            LoadGridData();
        }

        private void LoadGridData()
        {
            // Load the data
            this.categoriesGridView.ItemsSource = nwd.Categories;
            this.categoriesGridView.IsBusy = true;
            nwd.Load(nwd.GetCategoriesQuery(),
                result =>
                    {
                        this.categoriesGridView.IsBusy = false;
                    }, null);
        }

        // Executes when the user navigates to this page.
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
        }

        private void categoriesGridView_AddingNewDataItem(object sender, GridViewAddingNewEventArgs e)
        {
            e.NewObject = new ProTelerikDemo.Web.Category();
        }

        private void categoriesGridView_RowEditEnded(object sender, GridViewRowEditEndedEventArgs e)
        {
            switch (e.EditOperationType)
            {
                case GridViewEditOperationType.Edit:
                    nwd.SubmitChanges();
                    break;
                case GridViewEditOperationType.Insert:
                    ProTelerikDemo.Web.Category cat = e.NewData as ProTelerikDemo.Web.Category;
                    if (cat != null)
                    {
                        nwd.Categories.Add(cat);
                        nwd.SubmitChanges();
                    }
                    break;
                default:
                    break;
            }
            this.categoriesGridView.CancelEdit();
            nwd.Load(nwd.GetCategoriesQuery());
        }

        private void gridContextMenu_Opened(object sender, RoutedEventArgs e)
        {
            RadContextMenu menu = (RadContextMenu)sender;
            GridViewRow row = menu.GetClickedElement<GridViewRow>();

            if (row != null)
            {
                row.IsSelected = row.IsCurrent = true;
            }

        }

        private void gridContextMenu_ItemClick(object sender, Telerik.Windows.RadRoutedEventArgs e)
        {
            RadContextMenu menu = (RadContextMenu)sender;
            RadMenuItem clickedItem = e.OriginalSource as RadMenuItem;

            if (clickedItem != null)
            {
                string header = Convert.ToString(clickedItem.Header);

                switch (header)
                {
                    case "Add":
                        this.categoriesGridView.BeginInsert();
                        break;
                    case "Delete":
                        GridViewRow row = menu.GetClickedElement<GridViewRow>();
                        if (row != null)
                        {
                            ProTelerikDemo.Web.Category cat = row.DataContext as ProTelerikDemo.Web.Category;
                            if (cat != null)
                            {
                                nwd.Categories.Remove(cat);
                                nwd.SubmitChanges();
                                categoriesGridView.Rebind();
                            }
                        }
                        break;
                    default:
                        break;
                }
            }

        }

    }
}
