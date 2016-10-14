using System;
using System.Data;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Web.UI;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadXmlHttpPanel_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack || Page.IsCallback) return;
            Initialize();
        }

        private void Initialize()
        {
            rcbEmployee.DataSource = GetEmployeeSimpleDataTable();
            rcbEmployee.DataTextField = "Name";
            rcbEmployee.DataValueField = "EmployeeID";
            rcbEmployee.DataBind();

            rcbEmployee1.DataSource = GetEmployeeSimpleDataTable();
            rcbEmployee1.DataTextField = "Name";
            rcbEmployee1.DataValueField = "EmployeeID";
            rcbEmployee1.DataBind();
        }

        private DataTable GetEmployeeSimpleDataTable()
        {
            string ConnString = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
            string query = "SELECT [EmployeeID], [FirstName] + ' ' + [LastName] As [Name]";
            query += "        FROM [Employees]";
            DataTable myDataTable = new DataTable();
            using (SqlConnection conn = new SqlConnection(ConnString))
            {
                using (SqlDataAdapter adapter = new SqlDataAdapter())
                {
                    try
                    {
                        adapter.SelectCommand = new SqlCommand(query, conn);
                        conn.Open();
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

        private DataTable GetEmployeeDataTable(string id)
        {
            string ConnString = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
            string query = "SELECT [EmployeeID], [FirstName] + ' ' + [LastName] As [Name], [Title], [Notes]";
            query += "        FROM [Employees]";
            query += "       WHERE [EmployeeID] = @id";
            DataTable myDataTable = new DataTable();
            using (SqlConnection conn = new SqlConnection(ConnString))
            {
                using (SqlDataAdapter adapter = new SqlDataAdapter())
                {
                    try
                    {
                        var cmd = new SqlCommand(query, conn);
                        var param = new SqlParameter("id", id);
                        cmd.Parameters.Add(param);
                        adapter.SelectCommand = cmd;
                        conn.Open();
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


        protected void RadXmlHttpPanel1_ServiceRequest(object sender, RadXmlHttpPanelEventArgs e)
        {
            LoadEmployeeData(e.Value);
        }

        private void LoadEmployeeData(string strId)
        {
            var employeeDT = GetEmployeeDataTable(strId);
            if (employeeDT.Rows.Count == 0)
            {
                panelData.Visible = false;
                employeePic.ImageUrl = string.Empty;
                lblEmployeeName.Text = string.Empty;
                lblTitle.Text = string.Empty;
                lblNotes.Text = string.Empty;
            }
            else
            {
                panelData.Visible = true;
                string photo = string.Format("~/Images/employees/{0}.jpg", strId); 
                employeePic.ImageUrl = Page.ResolveUrl(photo);
                lblEmployeeName.Text = employeeDT.Rows[0]["Name"].ToString();
                lblTitle.Text = employeeDT.Rows[0]["Title"].ToString();
                lblNotes.Text = employeeDT.Rows[0]["Notes"].ToString();
            }
        }
    }
}