using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Services;
using System.Web.Services;
using Telerik.Web.UI;

namespace WebApplication1
{
    /// <summary>
    /// Summary description for RadTreeWebService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [ScriptService]
    public class RadTreeWebService : WebService
    {

        [WebMethod]
        public RadTreeNodeData[] GetProducts(RadTreeNodeData node, object context)
        {
            var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
            var selectCommand = new SqlCommand(@" SELECT ProductID, ProductName from Products WHERE CategoryID = " + node.Value, connection);
            var adapter = new SqlDataAdapter(selectCommand);
            var products = new DataTable();
            adapter.Fill(products);
            var result = new List<RadTreeNodeData>();

            foreach (DataRow row in products.Rows)
            {
                var itemData = new RadTreeNodeData
                                   {
                                       Text = row["ProductName"].ToString(),
                                       Value = row["ProductID"].ToString()
                                   };
                result.Add(itemData);
            }
            return result.ToArray();
        }

        // methods for updating values
        public static void UpdateCategoryName(int ID, string name)
        {
            var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
            connection.Open();
            var updateCommand = new SqlCommand(string.Format(" UPDATE Categories SET CategoryName = '{0}' WHERE CategoryID = {1}", name, ID), connection);
            updateCommand.ExecuteNonQuery();
            connection.Close();
        }

        public static void UpdateProductName(int ID, string name)
        {
            var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
            connection.Open();
            var updateCommand = new SqlCommand(string.Format(" UPDATE Products SET ProductName = '{0}' WHERE ProductID = {1}", name, ID), connection);
            updateCommand.ExecuteNonQuery();
            connection.Close();
        }

        public static void UpdateProductCategory(int ID, int catid)
        {
            var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
            connection.Open();
            var updateCommand = new SqlCommand(string.Format(" UPDATE Products SET CategoryID = '{0}' WHERE ProductID = {1}", catid, ID), connection);
            updateCommand.ExecuteNonQuery();
            connection.Close();
        }
    }
}
