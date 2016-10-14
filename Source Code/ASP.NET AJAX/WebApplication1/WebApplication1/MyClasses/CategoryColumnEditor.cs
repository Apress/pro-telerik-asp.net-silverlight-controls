using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1.MyClasses
{
    public class CategoryColumnEditor : GridDropDownColumnEditor 
    {
        private RadComboBox rcb = new RadComboBox();
        protected override void AddControlsToContainer()
        {
            RadComboBox combo = new RadComboBox();
            combo.DataTextField = "CategoryName";
            combo.DataValueField = "CategoryID";
            combo.DataSource = LoadCategories();
            combo.DropDownWidth = Unit.Pixel(200);
            ContainerControl.Controls.Add(combo);
        }

        private DataTable LoadCategories()
        {
            string ConnString = ConfigurationManager
                                    .ConnectionStrings["NorthwindConnectionString"]
                                    .ConnectionString;
            string query = "SELECT CategoryID, CategoryName FROM Categories";
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

        protected override void LoadControlsFromContainer()
        {
            rcb = ContainerControl.Controls[0] as RadComboBox;
        }

        public override void DataBind()
        {
            
        }

        public override int SelectedIndex
        {
            get { return rcb.SelectedIndex; }
            set { rcb.SelectedIndex = value; }
        }

        public override string SelectedValue
        {
            get { return rcb.SelectedValue; }
            set { rcb.SelectedValue = value; }
        }

        public override string SelectedText
        {
            get { return rcb.SelectedItem.Text; }
            set { rcb.SelectedItem.Text = value; }
        }
    }
}