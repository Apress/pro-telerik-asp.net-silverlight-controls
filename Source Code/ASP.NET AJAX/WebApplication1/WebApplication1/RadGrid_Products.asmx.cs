using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Text;
using System.Web.Script.Services;
using System.Web.Services;
using Telerik.Web.UI;
using WebApplication1.MyClasses;

namespace WebApplication1
{
    /// <summary>
    /// Summary description for RadGrid_Products
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [ScriptService]
    public class RadGrid_Products : WebService
    {

        [WebMethod(EnableSession = true)]
        public ResultData GetData(int startRowIndex, int maximumRows, List<GridSortExpression> sortExpression, List<GridFilterExpression> filterExpression)
        {
            List<MyProduct> productsList = new List<MyProduct>();
            int rowCount;

            string where = string.Empty;
            if (filterExpression.Count > 0)
            {
                foreach (var gridFilterExpression in filterExpression)
                {
                    // Check that the filter is EqualTo or NotEqualTo
                    // other filters not implemented
                    if (gridFilterExpression.FilterFunction != "EqualTo" && gridFilterExpression.FilterFunction != "NotEqualTo")
                        continue;
                    where += string.IsNullOrEmpty(where)
                                 ? Filter(gridFilterExpression)
                                 : " AND " + Filter(gridFilterExpression);
                }
            }
            
            StringBuilder sqlBuilder = new StringBuilder();
            sqlBuilder.AppendLine("DECLARE @startRowIndex int");
            sqlBuilder.AppendLine("DECLARE @maximumRows int");
            sqlBuilder.AppendLine(String.Format("SET @startRowIndex = {0}", startRowIndex));
            sqlBuilder.AppendLine(String.Format("SET @maximumRows = {0}", maximumRows));
            sqlBuilder.AppendLine("DECLARE @first_id int, @startRow int ");
            sqlBuilder.AppendLine("DECLARE @sIndex INT");
            sqlBuilder.AppendLine("SET @sIndex = @startRowIndex + 1");
            sqlBuilder.AppendLine("SET ROWCOUNT 0");
            sqlBuilder.AppendLine(string.Format("SELECT *, ROW_NUMBER() OVER (ORDER BY {0}) [RowNum]", (sortExpression.Count > 0 ? sortExpression[0].ToString() : "ProductID")));
            sqlBuilder.AppendLine("INTO #TempProducts");
            sqlBuilder.AppendLine("FROM Products");
            if (!string.IsNullOrEmpty(where))
                sqlBuilder.AppendLine(string.Format("WHERE {0}", where));
            sqlBuilder.AppendLine(string.Format("ORDER BY {0}", (sortExpression.Count > 0 ? sortExpression[0].ToString() : "ProductID")));
            sqlBuilder.AppendLine("SET ROWCOUNT @sIndex");
            sqlBuilder.AppendLine("SELECT @first_id = RowNum");
            sqlBuilder.AppendLine("FROM #TempProducts ");
            sqlBuilder.AppendLine("ORDER BY RowNum");
            sqlBuilder.AppendLine("SET ROWCOUNT @maximumRows");
            sqlBuilder.AppendLine("SELECT p.*");
            sqlBuilder.AppendLine("FROM #TempProducts p");
            sqlBuilder.AppendLine("WHERE RowNum >= @first_id");
            if (!string.IsNullOrEmpty(where))
                sqlBuilder.AppendLine(string.Format(" AND {0}", where));
            sqlBuilder.AppendLine(string.Format("ORDER BY {0}", (sortExpression.Count > 0 ? sortExpression[0].ToString() : "ProductID")));
            sqlBuilder.AppendLine("DROP TABLE #TempProducts");

            string countSql = "SELECT COUNT(*) FROM Products ";
            if (!string.IsNullOrEmpty(where))
                countSql += string.Format("WHERE {0}", where);
            string sql = sqlBuilder.ToString();
            using (SqlConnection connection = new
                SqlConnection(ConfigurationManager
                                .ConnectionStrings["NorthwindConnectionString"]
                                .ConnectionString))
            {
                connection.Open();
                using (SqlCommand countCommand = new SqlCommand(countSql,connection))
                {
                    rowCount = int.Parse(countCommand.ExecuteScalar().ToString());
                }
                using (SqlCommand selectCommand = new SqlCommand(sql, connection))
                {
                    using (SqlDataReader rd = selectCommand.ExecuteReader())
                    {
                        try
                        {
                            while (rd.Read())
                            {
                                var pd = new MyProduct();
                                pd.ProductID = int.Parse(rd[0].ToString());
                                pd.ProductName = rd[1].ToString();

                                if (string.IsNullOrEmpty(rd[2].ToString()))
                                    pd.SupplierID = null;
                                else
                                    pd.SupplierID = int.Parse(rd[2].ToString());
                                if (string.IsNullOrEmpty(rd[3].ToString()))
                                    pd.CategoryID = null;
                                else
                                    pd.CategoryID = int.Parse(rd[3].ToString());

                                pd.QuantityPerUnit = rd[4].ToString();
                                if (string.IsNullOrEmpty(rd[5].ToString()))
                                    pd.UnitPrice = null;
                                else
                                    pd.UnitPrice = decimal.Parse(rd[5].ToString());
                                if (string.IsNullOrEmpty(rd[6].ToString()))
                                    pd.UnitsInStock = null;
                                else
                                    pd.UnitsInStock = short.Parse(rd[6].ToString());
                                if (string.IsNullOrEmpty(rd[7].ToString()))
                                    pd.UnitsOnOrder = null;
                                else
                                    pd.UnitsOnOrder = short.Parse(rd[7].ToString());
                                if (string.IsNullOrEmpty(rd[8].ToString()))
                                    pd.ReorderLevel = null;
                                else
                                    pd.ReorderLevel = short.Parse(rd[8].ToString());

                                pd.Discontinued = bool.Parse(rd[9].ToString());

                                productsList.Add(pd);
                            }
                        }
                        catch (Exception ex)
                        {
                            // error handling logic here
                        }
                    }

                }
            }
            ResultData results = new ResultData();
            results.Data = productsList;
            results.Count = rowCount;
            return results;
        }

        [WebMethod]
        public int GetCount(List<GridFilterExpression> filterExpressions)
        {
            string sql = "SELECT COUNT(*) from Products";
            int recordCount;

            using (SqlConnection connection = new
                SqlConnection(ConfigurationManager
                                .ConnectionStrings["NorthwindConnectionString"]
                                .ConnectionString))
            {
                connection.Open();
                using (SqlCommand selectCommand = new SqlCommand(sql, connection))
                {
                    recordCount = int.Parse(selectCommand.ExecuteScalar().ToString());
                }
            }

            return recordCount;
        }


        public string Filter(GridFilterExpression filterExpression)
        {
            var filter = string.Empty;
            switch (filterExpression.DataTypeName)
            {
                case "System.Int16":
                case "System.Int32":
                case "System.Int64":
                case "System.Short":
                    filter = string.Format("{0} {1} {2}", filterExpression.FieldName,
                                           GetFilterOperator(filterExpression.FilterFunction),
                                           filterExpression.FieldValue);
                    break;
                case "System.String":
                    filter = string.Format("{0} {1} '{2}'", filterExpression.FieldName,
                                           GetFilterOperator(filterExpression.FilterFunction),
                                           filterExpression.FieldValue);
                    break;
            }

            return filter;
        }

        private string GetFilterOperator(string filterFunction)
        {
            // This has been implemented only
            // for EqualTo and NotEqualTo
            var op = string.Empty;
            switch (filterFunction)
            {
                case "EqualTo":
                    op = "=";
                    break;
                case "NotEqualTo":
                    op = "<>";
                    break;
            }
            return op;
        }

    }

    public class ResultData
    {
        public int Count { get; set; }
        public List<MyProduct> Data { get; set; }
    }


}
