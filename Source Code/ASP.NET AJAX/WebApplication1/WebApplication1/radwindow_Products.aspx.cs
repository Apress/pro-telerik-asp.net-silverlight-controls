using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class radwindow_Products : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
            if (!string.IsNullOrEmpty(Request.QueryString["cat"]))
                LoadProducts(Request.QueryString["cat"]);
        }

        private void LoadProducts(string cat)
        {
            lstProducts.Items.Clear();
            using (var cnn = new SqlConnection(WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString))
            {
                cnn.Open();
                var sSql = string.Format("SELECT CategoryName FROM Categories WHERE CategoryID = {0}", cat);
                var cmd = new SqlCommand(sSql, cnn);
                var result = cmd.ExecuteScalar().ToString();
                lblCategory.Text = string.Format("Select products from category: {0}", result);
                sSql = string.Format("SELECT ProductName FROM Products WHERE CategoryID = {0}", cat);
                cmd = new SqlCommand(sSql, cnn);
                using (var rd = cmd.ExecuteReader())
                {
                    if (rd != null)
                        while (rd.Read())
                        {
                            lstProducts.Items.Add(rd["ProductName"].ToString());
                        }
                    lstProducts.DataBind();
                }
                cnn.Close();
            }
        }
    }
}