using System;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadSplitter_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnLoadData_Command(object sender, CommandEventArgs e)
        {
            using (var cnn = new SqlConnection(WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString))
            {
                cnn.Open();
                string sSql = "";
                switch (e.CommandName)
                {
                    case "Employees":
                        sSql = string.Format("SELECT [EmployeeID], [FirstName] + ' ' + [LastName] as [Name] FROM [Employees]");
                        break;
                    case "Customers":
                        sSql = string.Format("SELECT [CustomerID], [CompanyName], [ContactName] FROM [Customers]");
                        break;
                    case "Products":
                        sSql = string.Format("SELECT [ProductID], [ProductName] FROM [Products]");
                        break;
                    case "Categories":
                        sSql = string.Format("SELECT [CategoryID], [CategoryName] FROM [Categories]");
                        break;
                }
                var cmd = new SqlCommand(sSql, cnn);
                RadGrid1.DataSource = cmd.ExecuteReader();
                RadGrid1.DataBind();
                cnn.Close();
            }
        }
    }
}