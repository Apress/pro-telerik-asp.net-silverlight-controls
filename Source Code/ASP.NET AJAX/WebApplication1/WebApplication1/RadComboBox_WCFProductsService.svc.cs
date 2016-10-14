using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.ServiceModel;
using System.ServiceModel.Activation;
using Telerik.Web.UI;

namespace WebApplication1
{
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class RadComboBox_WCFProductsService
    {
        [OperationContract]
        public RadComboBoxData GetProducts(RadComboBoxContext context)
        {
            RadComboBoxData result = new RadComboBoxData();
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
            List<RadComboBoxItemData> items = new List<RadComboBoxItemData>();
            foreach (DataRow row in products.Rows)
            {
                RadComboBoxItemData itemData = new RadComboBoxItemData();
                itemData.Text = row["ProductName"].ToString();
                itemData.Value = row["ProductName"].ToString();
                items.Add(itemData);
            }
            result.Items = items.ToArray();
            return result;
        }

    }
}
