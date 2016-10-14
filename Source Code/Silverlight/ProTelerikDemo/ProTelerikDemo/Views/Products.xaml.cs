using ProTelerikDemo.Web.Services;
using System.Windows.Controls;
using System.Windows.Navigation;

namespace ProTelerikDemo.Views
{
    public partial class Products : Page
    {
        public Products()
        {
            InitializeComponent();
            LoadProducts();
        }

        public void LoadProducts()
        {
            NorthwindDomainContext nwd = new NorthwindDomainContext();
            Products_RadBook.ItemsSource = nwd.Products;
            nwd.Load(nwd.GetProductsQuery());
        }

        // Executes when the user navigates to this page.
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
        }

    }
}
