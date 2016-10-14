namespace ProTelerikDemo
{
    using System.Windows;
    using System.Windows.Controls;
    using System.Windows.Navigation;
    using ProTelerikDemo.LoginUI;
    using Telerik.Windows.Controls;

    /// <summary>
    /// <see cref="UserControl"/> class providing the main UI for the application.
    /// </summary>
    public partial class MainPage : UserControl
    {
        /// <summary>
        /// Creates a new <see cref="MainPage"/> instance.
        /// </summary>
        public MainPage()
        {
            InitializeComponent();
            this.loginContainer.Child = new LoginStatus();
        }

        /// <summary>
        /// After the Frame navigates, ensure the <see cref="HyperlinkButton"/> representing the current page is selected
        /// </summary>
        private void ContentFrame_Navigated(object sender, NavigationEventArgs e)
        {
            foreach (UIElement child in LinksStackPanel.Children)
            {
                HyperlinkButton hb = child as HyperlinkButton;
                if (hb != null && hb.NavigateUri != null)
                {
                    if (hb.NavigateUri.ToString().Equals(e.Uri.ToString()))
                    {
                        VisualStateManager.GoToState(hb, "ActiveLink", true);
                    }
                    else
                    {
                        VisualStateManager.GoToState(hb, "InactiveLink", true);
                    }
                }
            }
        }

        /// <summary>
        /// If an error occurs during navigation, show an error window
        /// </summary>
        private void ContentFrame_NavigationFailed(object sender, NavigationFailedEventArgs e)
        {
            e.Handled = true;
            ErrorWindow.CreateNew(e.Exception);
        }

        private void BusinessMenu_ItemClick(object sender, Telerik.Windows.RadRoutedEventArgs e)
        {
            RadMenuItem item = e.OriginalSource as RadMenuItem;
            if (item != null)
            {
                switch (item.Header.ToString())
                {
                    case "Categories":
                        this.ContentFrame
                            .Navigate(new 
                                System.Uri("/Categories", System.UriKind.Relative));
                        break;

                    case "Products":
                        this.ContentFrame
                            .Navigate(new 
                                System.Uri("/Products", System.UriKind.Relative));
                        break;

                    case "Employees and Orders":
                        this.ContentFrame
                            .Navigate(new 
                                System.Uri("/Employees", System.UriKind.Relative));
                        break;

                    case "About":
                        this.ContentFrame
                            .Navigate(new 
                                System.Uri("/About", System.UriKind.Relative));
                        break;

                    default:
                        this.ContentFrame
                            .Navigate(new 
                                System.Uri("/Home", System.UriKind.Relative));
                        break;
                }
            }
        }
    }
}