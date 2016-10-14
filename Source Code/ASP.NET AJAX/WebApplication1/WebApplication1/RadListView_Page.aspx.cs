using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;
using WebApplication1.MyClasses;

namespace WebApplication1
{
    public partial class RadListView_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
            LoadDataForSimpleDatabind();
            ClearFilterAndSorting();
        }

        private void ClearFilterAndSorting()
        {
            RadListView9.FilterExpressions.Clear();
            RadListView9.SortExpressions.Clear();
        }

        private void LoadDataForSimpleDatabind()
        {
            RadListView2.DataSource = GetCategoriesDataTable();
            RadListView2.DataBind();
        }

        protected void RadListView_NeedDataSource(object sender, EventArgs e)
        {
            RadListView listView = (RadListView) sender;
            listView.DataSource = GetProductsDataTable();
        }

        private DataTable GetCategoriesDataTable()
        {
            string ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
            string query = "SELECT [CategoryID], [CategoryName]";
            query += "        FROM [Categories]";
            DataTable myDataTable = new DataTable();
            using (SqlConnection conn = new SqlConnection(ConnString))
            {
                using (SqlDataAdapter adapter = new SqlDataAdapter())
                {
                    adapter.SelectCommand = new SqlCommand(query, conn);

                    conn.Open();
                    try
                    {
                        adapter.Fill(myDataTable);
                    }
                    finally
                    {
                        conn.Close();
                    }
                }
            }
            return myDataTable;
        }
        private DataTable GetProductsDataTable()
        {
            string ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
            string query = "SELECT [ProductID], [ProductName], [QuantityPerUnit], [CategoryName],";
            query += "             [Products].[CategoryID], [Products].[Discontinued]";
            query += "        FROM [Products] INNER JOIN [Categories]";
            query += "          ON [Products].[CategoryID] = [Categories].[CategoryID]";
            DataTable myDataTable = new DataTable();
            using (SqlConnection conn = new SqlConnection(ConnString))
            {
                using (SqlDataAdapter adapter = new SqlDataAdapter())
                {
                    adapter.SelectCommand = new SqlCommand(query, conn);

                    conn.Open();
                    try
                    {
                        adapter.Fill(myDataTable);
                    }
                    finally
                    {
                        conn.Close();
                    }
                }
            }
            return myDataTable;
        }

        protected void RadListView4_ItemCommand(object sender, RadListViewCommandEventArgs e)
        {
            SqlCommand cmd = new SqlCommand();
            string sql = string.Empty;
            switch (e.CommandName)
            {
                case RadListView.UpdateCommandName:
                    {
                        RadListViewEditableItem editedItem = (RadListViewEditableItem)e.ListViewItem;
                        Hashtable newValues = new Hashtable();
                        editedItem.ExtractValues(newValues);
                        string productId = editedItem.GetDataKeyValue("ProductID").ToString();
                        sql = "UPDATE Products ";
                        sql += "  SET [ProductName] = @name, ";
                        sql += "      [CategoryID] = @category, ";
                        sql += "      [QuantityPerUnit] = @qty, ";
                        sql += "      [Discontinued] = @discontinued ";
                        sql += "WHERE [ProductID] = @productId ";
                        cmd.Parameters.Add(new SqlParameter("name", newValues["ProductName"]));
                        cmd.Parameters.Add(new SqlParameter("category", newValues["CategoryID"]));
                        cmd.Parameters.Add(new SqlParameter("qty", newValues["QuantityPerUnit"]));
                        cmd.Parameters.Add(new SqlParameter("discontinued", newValues["Discontinued"]));
                        cmd.Parameters.Add(new SqlParameter("productId", productId));
                        cmd.CommandText = sql;
                        ExecuteCommand(cmd);
                    }
                    break;
                case RadListView.PerformInsertCommandName:
                    {
                        RadListViewEditableItem insertedItem = (RadListViewEditableItem)e.ListViewItem;
                        Hashtable newValues = new Hashtable();
                        insertedItem.ExtractValues(newValues);
                        sql = "INSERT INTO Products (ProductName, CategoryID, QuantityPerUnit, Discontinued) ";
                        sql += " VALUES(@name, @category, @qty, @discontinued) ";
                        cmd.Parameters.Add(new SqlParameter("name", newValues["ProductName"]));
                        cmd.Parameters.Add(new SqlParameter("category", newValues["CategoryID"]));
                        cmd.Parameters.Add(new SqlParameter("qty", newValues["QuantityPerUnit"]));
                        cmd.Parameters.Add(new SqlParameter("discontinued", newValues["Discontinued"]));
                        cmd.CommandText = sql;
                        ExecuteCommand(cmd);
                        RadListView4.FindControl("btnInsert").Visible = true;
                    }
                    break;
                case RadListView.DeleteCommandName:
                    {
                        RadListViewDataItem insertedItem = (RadListViewDataItem)e.ListViewItem;
                        Hashtable newValues = new Hashtable();
                        insertedItem.ExtractValues(newValues);
                        string productId = insertedItem.GetDataKeyValue("ProductID").ToString();
                        sql = "DELETE FROM Products ";
                        sql += "WHERE [ProductID] = @productId ";
                        cmd.Parameters.Add(new SqlParameter("productId", productId));
                        cmd.CommandText = sql;
                        ExecuteCommand(cmd);
                    }
                    break;
                case RadListView.CancelCommandName:
                    RadListView4.InsertItemPosition = RadListViewInsertItemPosition.None;
                    RadListView4.FindControl("btnInsert").Visible = true;
                    break;
            }
        }

        private void ExecuteCommand(SqlCommand cmd)
        {

            string ConnString = ConfigurationManager
                                        .ConnectionStrings["NorthwindConnectionString"]
                                        .ConnectionString;
            using (SqlConnection conn = new SqlConnection(ConnString))
            {
                try
                {
                    conn.Open();
                    cmd.Connection = conn;
                    cmd.ExecuteNonQuery();
                }
                finally
                {
                    conn.Close();
                }
            }
        }

        protected void btnInsert_Click(object sender, EventArgs e)
        {
            RadListView4.InsertItemPosition = RadListViewInsertItemPosition.FirstItem;
            RadListView4.Rebind();
            (sender as Button).Visible = false;
        }

        protected void RadListView5_ItemCommand(object sender, EventArgs e)
        {
            
        }
        protected void btnInsert1_Click(object sender, EventArgs e)
        {
            RadListView5.ShowInsertItem(RadListViewInsertItemPosition.LastItem);
            (sender as Button).Visible = false;
        }

        protected void RadListView5_ItemCommand(object sender, RadListViewCommandEventArgs e)
        {
            if (e.CommandName == RadListView.CancelCommandName || e.CommandName == RadListView.PerformInsertCommandName)
            {
                RadListView5.FindControl("btnInsert1").Visible = true;
            }
        }


        protected void RadListView7_PageIndexChanged(object sender, RadListViewPageChangedEventArgs e)
        {
            RadListView listView = (RadListView)sender;
            listView.VirtualItemCount = GetCount("");
            int pageCount = Convert.ToInt32(Math.Ceiling(listView.VirtualItemCount/Convert.ToDecimal(10)));
            if (Session["NewPageIndex"] == null) Session["NewPageIndex"] = 0;
            switch (e.CommandArgument.ToString())
            {
                case "First":
                    Session["NewPageIndex"] = 0;
                    break;
                case "Prev":
                    if (int.Parse(Session["NewPageIndex"].ToString()) > 0)
                        Session["NewPageIndex"] = int.Parse(Session["NewPageIndex"].ToString()) - 1;
                    break;
                case "Next":
                    if (int.Parse(Session["NewPageIndex"].ToString()) < pageCount - 1)
                        Session["NewPageIndex"] = int.Parse(Session["NewPageIndex"].ToString()) + 1;
                    break;
                case "Last":
                    Session["NewPageIndex"] = pageCount - 1;
                    break;
            }
            int startIndex = int.Parse(Session["NewPageIndex"].ToString()) * listView.PageSize;
            listView.DataSource = GetProducts(startIndex, listView.PageSize, "", "");
        }

        protected void RadListView7_NeedDataSource(object sender, EventArgs e)
        {
            RadListView listView = (RadListView)sender;
            listView.DataSource = GetProducts(0, listView.PageSize, "", "");

        }

        public static int GetCount(string filterExpressions)
        {
            string sql = string.Format("SELECT COUNT(*) from Products {0}",
                                       (string.IsNullOrEmpty(filterExpressions)
                                            ? ""
                                            : string.Format(" WHERE {0}", filterExpressions)));
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

        public static List<MyProduct> GetProducts(int startRowIndex, int maximumRows, string sortExpression, string filterExpression)
        {
            List<MyProduct> productsList = new List<MyProduct>();

            string where = string.Empty;
            if (!string.IsNullOrEmpty(filterExpression))
            {
                where += filterExpression;
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
            sqlBuilder.AppendLine(string.Format("SELECT *, ROW_NUMBER() OVER (ORDER BY {0}) [RowNum]", (!string.IsNullOrEmpty(sortExpression) ? sortExpression : "ProductID")));
            sqlBuilder.AppendLine("INTO #TempProducts");
            sqlBuilder.AppendLine("FROM Products");
            if (!string.IsNullOrEmpty(where))
                sqlBuilder.AppendLine(string.Format("WHERE {0}", where));
            sqlBuilder.AppendLine(string.Format("ORDER BY {0}", (!string.IsNullOrEmpty(sortExpression) ? sortExpression : "ProductID")));
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
            sqlBuilder.AppendLine(string.Format("ORDER BY {0}", (!string.IsNullOrEmpty(sortExpression) ? sortExpression : "ProductID")));
            sqlBuilder.AppendLine("DROP TABLE #TempProducts");

            string sql = sqlBuilder.ToString();
            using (SqlConnection connection = new
                SqlConnection(ConfigurationManager
                                  .ConnectionStrings["NorthwindConnectionString"]
                                  .ConnectionString))
            {
                connection.Open();
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
            return productsList;
        }

        protected void btnApplyFilter_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtFilterValue.Text)) return;
            RadListView9.FilterExpressions.Clear();
            switch (rcbFilterBy.SelectedValue)
            {
                case "CategoryID":
                    int category = int.Parse(txtFilterValue.Text);
                    switch (rcbNumericFilter.SelectedValue)
                    {
                        case "EqualTo":
                            RadListView9.FilterExpressions.BuildExpression(ex => ex
                                .EqualTo("CategoryID", category)
                                .Build());
                            break;
                        case "NotEqualTo":
                            RadListView9.FilterExpressions.BuildExpression(ex => ex
                                .NotEqualTo("CategoryID", category)
                                .Build());
                            break;
                        case "GreaterThan":
                            RadListView9.FilterExpressions.BuildExpression(ex => ex
                                .GreaterThan("CategoryID", category)
                                .Build());
                            break;
                        case "LessThan":
                            RadListView9.FilterExpressions.BuildExpression(ex => ex
                                .LessThan("CategoryID", category)
                                .Build());
                            break;
                        case "GreaterThanOrEqualTo":
                            RadListView9.FilterExpressions.BuildExpression(ex => ex
                                .GreaterThanOrEqualTo("CategoryID", category)
                                .Build());
                            break;
                        case "LessThanOrEqualTo":
                            RadListView9.FilterExpressions.BuildExpression(ex => ex
                                .LessThanOrEqualTo("CategoryID", category)
                                .Build());
                            break;
                    }
                    break;
                case "ProductName":
                    switch (rcbStringFilter.SelectedValue)
                    {
                        case "EqualTo":
                            RadListView9.FilterExpressions.BuildExpression(ex => ex
                                .EqualTo("ProductName", txtFilterValue.Text)
                                .Build());
                            break;
                        case "Contains":
                            RadListView9.FilterExpressions.BuildExpression(ex => ex
                                .Contains("ProductName", txtFilterValue.Text)
                                .Build());
                            break;
                    }
                    break;
            }
            RadListView9.Rebind();
        }

        protected void btnApplySort_Click(object sender, EventArgs e)
        {
            RadListViewSortExpression sortExpression = new RadListViewSortExpression();
            sortExpression.FieldName = rcbSortBy.SelectedValue;
            switch (rcbSortOrder.SelectedValue)
            {
                case "Asc":
                    sortExpression.SortOrder = RadListViewSortOrder.Ascending;
                    break;
                case "Desc":
                    sortExpression.SortOrder = RadListViewSortOrder.Descending;
                    break;
                default:
                    sortExpression.SortOrder = RadListViewSortOrder.None;
                    break;
            }
            RadListView9.SortExpressions.AddSortExpression(sortExpression);
            RadListView9.Rebind();
        }
    }
}