using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public class FakeProduct
    {
        public FakeProduct(int id, string name)
        {
            ProductID = id;
            ProductName = name;
        }

        public int ProductID { get; set; }
        public string ProductName { get; set; }
    }

    public partial class RadComboBox_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            RadComboBox9.DataSource = LoadFakeProducts();
            if (Page.IsPostBack) return;
            RadComboBox8.DataBind();
            Label lbl = (Label)RadComboBox8.Footer.FindControl("lblFooter");
            lbl.Text = string.Format("{0} Products", RadComboBox8.Items.Count);
        }

        private List<FakeProduct> LoadFakeProducts()
        {
            List<FakeProduct> listOfProducts = new List<FakeProduct>();
            for (int i = 0; i < 1000; i++)
            {
                FakeProduct fp = new FakeProduct(i, string.Format("Product{0}",i));
                listOfProducts.Add(fp);
            }
            return listOfProducts;
        }

        protected void btnPostBack_Click(object sender, EventArgs e)
        {
            foreach (var operation in RadComboBox3.ClientChanges)
            {
                var item = operation.Item;
                var message = "";

                switch (operation.Type)
                {
                    case ClientOperationType.Insert:
                        message = "Added item: \"" + item.Text + "\"";
                        break;
                    case ClientOperationType.Remove:
                        message = "Removed item: \"" + item.Text + "\"";
                        break;
                    case ClientOperationType.Update:
                        var update = operation as UpdateClientOperation<RadComboBoxItem>;
                        if (update != null)
                            message = "Updated item: \"" + item.Text + "\". Property updated: " + update.PropertyName;
                        break;
                }

                listChanges.Items.Add(message);
            }
        }

        protected void RadComboBox4_ItemsRequested(object o, RadComboBoxItemsRequestedEventArgs e)
        {
            var combo = (RadComboBox)o;
            var sql = "SELECT * from Products WHERE ProductName LIKE '" + e.Text + "%'";
            var data = new DataTable();

            using (SqlConnection cnn = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString))
            {
                using (SqlDataAdapter adapter = new SqlDataAdapter(sql, cnn))
                {
                    try
                    {
                        cnn.Open();
                        adapter.Fill(data);
                    }
                    catch (Exception ex)
                    {
                        // write error handling logic here
                    }
                }
            }

            try
            {
                const int itemsPerRequest = 20;
                int itemOffset = e.NumberOfItems;
                int endOffset = itemOffset + itemsPerRequest;
                if (endOffset > data.Rows.Count)
                {
                    endOffset = data.Rows.Count;
                }
                for (int i = itemOffset; i < endOffset; i++)
                {
                    string productName = data.Rows[i]["ProductName"].ToString();
                    RadComboBoxItem comboItem = new RadComboBoxItem(productName);
                    combo.Items.Add(comboItem);
                }
                e.Message = data.Rows.Count > 0 ? String.Format("Items <b>1</b>-<b>{0}</b> out of <b>{1}</b>", endOffset, data.Rows.Count) : "No matches";
            }
            catch
            {
                e.Message = "No matches";
            }

        }

        protected void RadComboBox7_ItemsRequested(object o, RadComboBoxItemsRequestedEventArgs e)
        {
            var combo = (RadComboBox)o;
            var sql = "SELECT * from Products WHERE ProductName LIKE '" + e.Text + "%'";
            var data = new DataTable();

            using (SqlConnection cnn = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString))
            {
                using (SqlDataAdapter adapter = new SqlDataAdapter(sql, cnn))
                {
                    try
                    {
                        cnn.Open();
                        adapter.Fill(data);
                    }
                    catch (Exception ex)
                    {
                        // write error handling logic here
                    }
                }
            }

            try
            {
                const int itemsPerRequest = 20;
                int itemOffset = e.NumberOfItems;
                int endOffset = itemOffset + itemsPerRequest;
                if (endOffset > data.Rows.Count)
                {
                    endOffset = data.Rows.Count;
                }
                for (int i = itemOffset; i < endOffset; i++)
                {
                    string productName = data.Rows[i]["ProductName"].ToString();
                    RadComboBoxItem comboItem = new RadComboBoxItem(productName);
                    combo.Items.Add(comboItem);
                }
                e.Message = data.Rows.Count > 0 ? String.Format("Items <b>1</b>-<b>{0}</b> out of <b>{1}</b>", endOffset, data.Rows.Count) : "No matches";
            }
            catch
            {
                e.Message = "No matches";
            }

        }
    }
}