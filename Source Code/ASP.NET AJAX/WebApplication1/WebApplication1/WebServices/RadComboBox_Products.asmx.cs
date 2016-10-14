using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Services;
using System.Web.Services;

namespace WebApplication1.WebServices
{
    /// <summary>
    /// Summary description for RadComboBox_Products
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [ScriptService]
    public class RadComboBox_Products : WebService
    {

        [WebMethod]
        public MyComboBoxItemData[] GetProducts(object context)
        {
            // create the dictionary object to hold the context information that comes from the RadComboBox
            IDictionary<string, object> contextDictionary = (IDictionary<string, object>)context;

            // get the items from database
            string filterString = ((string)contextDictionary["FilterString"]).ToLower();
            string sql = "SELECT ProductName from Products WHERE ProductName LIKE '" + filterString + "%'";
            DataTable products = new DataTable();
            using (SqlConnection connection = new SqlConnection(ConfigurationManager
                                                                        .ConnectionStrings["NorthwindConnectionString"]
                                                                        .ConnectionString))
            {
                using (SqlCommand selectCommand = new SqlCommand(sql, connection))
                {
                    using (SqlDataAdapter adapter = new SqlDataAdapter(selectCommand))
                    {
                        try
                        {
                            adapter.Fill(products);
                        }
                        catch (Exception ex)
                        {
                            // error handling logic here
                        }
                    }
                    
                }
            }

            // build the list of items
            List<MyComboBoxItemData> result = new List<MyComboBoxItemData>(products.Rows.Count);
            foreach (DataRow row in products.Rows)
            {
                MyComboBoxItemData itemData = new MyComboBoxItemData();
                itemData.Text = row["ProductName"].ToString();
                itemData.Value = row["ProductName"].ToString();
                result.Add(itemData);
            }
            return result.ToArray();
        }
    }
}
