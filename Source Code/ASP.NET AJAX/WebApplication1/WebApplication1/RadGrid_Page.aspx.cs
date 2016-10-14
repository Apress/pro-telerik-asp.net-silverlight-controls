using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Linq;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;
using WebApplication1.MyClasses;

namespace WebApplication1
{
    public partial class RadGrid_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
            Initialize();
        }

        private void Initialize()
        {
            // Simple Databinding example
            RadGrid0.DataSource = GetProductsDataTable();
            RadGrid0.DataBind();

            // sorting example
            chkNatural.Checked = RadGrid4.MasterTableView.AllowNaturalSort;

            // paging example
            foreach (GridPagerPosition position in Enum.GetValues(typeof(GridPagerPosition)))
            {
                rcbPagerPosition.Items.Add(new RadComboBoxItem(position.ToString()));
            }
            foreach (GridPagerMode mode in Enum.GetValues(typeof(GridPagerMode)))
            {
                rcbPagerMode.Items.Add(new RadComboBoxItem(mode.ToString()));
            }
        }

        private DataTable GetProductsDataTable()
        {
            string ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
            string query = "SELECT * FROM Products";
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

        #region Advanced Databinding

        private DataTable GetOrdersDetails()
        {
            string ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
            string query = "SELECT * FROM [Order Details]";
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

        protected void RadGrid2_NeedDataSource(object source, GridNeedDataSourceEventArgs e)
        {
            RadGrid2.DataSource = GetOrdersDetails();
        }

        #endregion

        #region Other

        protected void chkMultiColumn_CheckedChanged(object sender, EventArgs e)
        {
            RadGrid4.MasterTableView.AllowMultiColumnSorting = chkMultiColumn.Checked;
        }

        protected void chkNatural_CheckedChanged(object sender, EventArgs e)
        {
            RadGrid4.MasterTableView.AllowNaturalSort = chkNatural.Checked;
        }

        protected void rcbPagerPosition_SelectedIndexChanged(object o, RadComboBoxSelectedIndexChangedEventArgs e)
        {
            GridPagerPosition position;
            if (Enum.TryParse(e.Text, true, out position))
                RadGrid5.PagerStyle.Position = position;
        }

        protected void rcbPagerMode_SelectedIndexChanged(object o, RadComboBoxSelectedIndexChangedEventArgs e)
        {
            GridPagerMode mode;
            if (Enum.TryParse(e.Text, true, out mode))
                RadGrid5.PagerStyle.Mode = mode;
        }

        protected void chkScroll_CheckedChanged(object sender, EventArgs e)
        {
            RadGrid6.ClientSettings.Scrolling.AllowScroll = chkScroll.Checked;
        }

        protected void chkStaticHeaders_CheckedChanged(object sender, EventArgs e)
        {
            RadGrid6.ClientSettings.Scrolling.UseStaticHeaders = chkStaticHeaders.Checked;
        }

        protected void chkFreeze_CheckedChanged(object sender, EventArgs e)
        {
            RadGrid6.ClientSettings.Scrolling.FrozenColumnsCount = chkFreeze.Checked ? 2 : 0;
        }

        protected void chkVirtualScroll_CheckedChanged(object sender, EventArgs e)
        {
            RadGrid6.ClientSettings.Scrolling.EnableVirtualScrollPaging = chkVirtualScroll.Checked;
        }

        #endregion

        #region PageMethods Client DataBinding

        [WebMethod]
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

        [WebMethod]
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

        #endregion

        protected void chkGrouping_CheckedChanged(object sender, EventArgs e)
        {
            RadGrid7.ShowGroupPanel = chkGrouping.Checked;
            RadGrid7.ClientSettings.AllowDragToGroup = chkGrouping.Checked;
        }

        protected void chkClientGroupLoad_CheckedChanged(object sender, EventArgs e)
        {
            RadGrid7.MasterTableView.GroupLoadMode = chkClientGroupLoad.Checked
                                                         ? GridGroupLoadMode.Client
                                                         : GridGroupLoadMode.Server;
            RadGrid7.ClientSettings.AllowGroupExpandCollapse = true;
        }

        protected void chkGroupFooter_CheckedChanged(object sender, EventArgs e)
        {
            RadGrid7.MasterTableView.ShowGroupFooter = chkGroupFooter.Checked;
            RadGrid7.GroupingSettings.RetainGroupFootersVisibility = chkGroupFooter.Checked;
        }

        protected void chkGroupBySupplier_CheckedChanged(object sender, EventArgs e)
        {
            chkGrouping.Checked = true;
            RadGrid7.ShowGroupPanel = true;
            RadGrid7.ClientSettings.AllowDragToGroup = true;

            GridGroupByExpression groupExpression = new GridGroupByExpression();
            GridGroupByField gridSelectField = new GridGroupByField();
            GridGroupByField gridGroupByField = new GridGroupByField();
            gridSelectField = new GridGroupByField();
            gridSelectField.FieldName = "SupplierName";
            gridSelectField.FieldAlias = "Supplier";
            gridSelectField.HeaderText = "Supplier";
            gridSelectField.HeaderValueSeparator = " for current group: ";
            gridSelectField.FormatString = "<strong>{0}</strong>";
            groupExpression.SelectFields.Add(gridSelectField);

            gridGroupByField = new GridGroupByField();
            gridGroupByField.FieldName = "SupplierName";
            gridGroupByField.FieldAlias = "Supplier";
            groupExpression.GroupByFields.Add(gridGroupByField);

            RadGrid7.MasterTableView.GroupByExpressions.Add(groupExpression); 
        }

        private List<MyCategory> ListOfCategories
        {
            get
            {
                List<MyCategory> categories;
                if (Session["ListOfCategories"] == null)
                {
                    categories = MyCategoryController.GetAll();
                    Session["ListOfCategories"] = categories;
                }
                else
                    categories = (List<MyCategory>) Session["ListOfCategories"];

                return categories;
            }
            set
            {
                Session["ListOfCategories"] = value;
            }
        }

        protected void RadGrid12_NeedDataSource(object source, GridNeedDataSourceEventArgs e)
        {
            RadGrid12.DataSource = ListOfCategories;
        }

        protected void RadGrid12_InsertCommand(object source, GridCommandEventArgs e)
        {
            GridEditableItem editedItem = e.Item as GridEditableItem;
            UserControl userControl = (UserControl)e.Item.FindControl(GridEditFormItem.EditFormUserControlID);
            List<MyCategory> categories = ListOfCategories;

            //Create new row in the DataSource
            MyCategory newCategory = new MyCategory();

            //Insert new values
            Hashtable newValues = new Hashtable();
            newValues["CategoryName"] = (userControl.FindControl("txtName") as TextBox).Text;
            newValues["Description"] = (userControl.FindControl("txtDescription") as TextBox).Text;

            try
            {
                newCategory.CategoryName = newValues["CategoryName"].ToString();
                newCategory.Description = newValues["Description"].ToString();
                newCategory.Insert();
                categories.Add(newCategory);
                ListOfCategories = categories;
            }
            catch (Exception ex)
            {
                Label lblError = new Label();
                lblError.Text = "Unable to insert category. Reason: " + ex.Message;
                lblError.ForeColor = System.Drawing.Color.Red;
                RadGrid12.Controls.Add(lblError);

                e.Canceled = true;
            }
        }

        protected void RadGrid12_UpdateCommand(object source, GridCommandEventArgs e)
        {
            GridEditableItem editedItem = e.Item as GridEditableItem;
            UserControl userControl = (UserControl)e.Item.FindControl(GridEditFormItem.EditFormUserControlID);
            List<MyCategory> categories = ListOfCategories;
            //Prepare new row to add it in the DataSource
            string Id = editedItem.OwnerTableView.DataKeyValues[editedItem.ItemIndex]["CategoryID"].ToString();
            IEnumerable<MyCategory> changedCategories = categories.Where(c => c.CategoryID == int.Parse(Id));

            if (changedCategories.Count() != 1)
            {
                RadGrid1.Controls.Add(new LiteralControl("Unable to locate the category for updating."));
                e.Canceled = true;
                return;
            }

            //Update new values
            Hashtable newValues = new Hashtable();
            newValues["CategoryName"] = (userControl.FindControl("txtName") as TextBox).Text;
            newValues["Description"] = (userControl.FindControl("txtDescription") as TextBox).Text;

            try
            {
                MyCategory cat = changedCategories.SingleOrDefault(c => c.CategoryID == int.Parse(Id));
                cat.CategoryName = newValues["CategoryName"].ToString();
                cat.Description = newValues["Description"].ToString();
                cat.Update();
                ListOfCategories = categories;
            }
            catch (Exception ex)
            {
                Label lblError = new Label();
                lblError.Text = "Unable to update category. Reason: " + ex.Message;
                lblError.ForeColor = System.Drawing.Color.Red;
                RadGrid12.Controls.Add(lblError);

                e.Canceled = true;
            }
        }

        protected void RadGrid12_DeleteCommand(object source, GridCommandEventArgs e)
        {
            string Id = (e.Item as GridDataItem).OwnerTableView.DataKeyValues[e.Item.ItemIndex]["CategoryID"].ToString();
            List<MyCategory> categories = ListOfCategories;
            MyCategory cat = categories.SingleOrDefault(c => c.CategoryID == int.Parse(Id));
            if (cat != null)
            {
                cat.Delete();
                categories.Remove(cat);
            }
            ListOfCategories = categories;
        }

        protected void RadGrid13_CreateColumnEditor(object sender, GridCreateColumnEditorEventArgs e)
        {
            if (!(e.Column is GridDropDownColumn)) return;
            if (((GridDropDownColumn) e.Column).DataField == "CategoryID")
            {
                e.ColumnEditor = new CategoryColumnEditor();
            }
        }



        [WebMethod]
        public static List<MyCategory> GetCategories(int startRowIndex, int maximumRows, string sortExpression, string filterExpression)
        {
            List<MyCategory> categoriesList = new List<MyCategory>();

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
            sqlBuilder.AppendLine(string.Format("SELECT CategoryID, CategoryName, Description, ROW_NUMBER() OVER (ORDER BY {0}) [RowNum]", (!string.IsNullOrEmpty(sortExpression) ? sortExpression : "CategoryID")));
            sqlBuilder.AppendLine("INTO #TempCategories");
            sqlBuilder.AppendLine("FROM Categories");
            if (!string.IsNullOrEmpty(where))
                sqlBuilder.AppendLine(string.Format("WHERE {0}", where));
            sqlBuilder.AppendLine(string.Format("ORDER BY {0}", (!string.IsNullOrEmpty(sortExpression) ? sortExpression : "CategoryID")));
            sqlBuilder.AppendLine("SET ROWCOUNT @sIndex");
            sqlBuilder.AppendLine("SELECT @first_id = RowNum");
            sqlBuilder.AppendLine("FROM #TempCategories ");
            sqlBuilder.AppendLine("ORDER BY RowNum");
            sqlBuilder.AppendLine("SET ROWCOUNT @maximumRows");
            sqlBuilder.AppendLine("SELECT c.*");
            sqlBuilder.AppendLine("FROM #TempCategories c");
            sqlBuilder.AppendLine("WHERE RowNum >= @first_id");
            if (!string.IsNullOrEmpty(where))
                sqlBuilder.AppendLine(string.Format(" AND {0}", where));
            sqlBuilder.AppendLine(string.Format("ORDER BY {0}", (!string.IsNullOrEmpty(sortExpression) ? sortExpression : "CategoryID")));
            sqlBuilder.AppendLine("DROP TABLE #TempCategories");

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
                                var cat = new MyCategory();
                                cat.CategoryID = int.Parse(rd[0].ToString());
                                cat.CategoryName = rd[1].ToString();
                                cat.Description = rd[2].ToString();
                                categoriesList.Add(cat);
                            }
                        }
                        catch (Exception ex)
                        {
                            // error handling logic here
                        }
                    }

                }
            }
            return categoriesList;
        }

        [WebMethod]
        public static int GetCatCount(string filterExpressions)
        {
            string sql = string.Format("SELECT COUNT(*) from Categories {0}",
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

        [WebMethod]
        public static string AddCategory(string name, string description)
        {
            string result = "OK";

            try
            {
                MyCategory cat = new MyCategory();
                cat.CategoryName = name;
                cat.Description = description;
                cat.Insert();
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }

        [WebMethod]
        public static string UpdateCategory(string id, string name, string description)
        {
            string result = "OK";

            try
            {
                MyCategory cat = new MyCategory(int.Parse(id));
                cat.CategoryName = name;
                cat.Description = description;
                cat.Update();
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }

        [WebMethod]
        public static string DeleteCategory(string id)
        {
            string result = "OK";

            try
            {
                MyCategory cat = new MyCategory(int.Parse(id));
                cat.Delete();
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }

    
    }
    
}