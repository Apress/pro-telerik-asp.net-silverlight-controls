using System;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.UI;

namespace WebApplication1
{
    public partial class radgrid_editform : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
            string id = Request.QueryString["id"];
            if (!string.IsNullOrEmpty(id))
                LoadData(id);
        }

        private void LoadData(string id)
        {
            string ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
            string query = "SELECT * FROM Categories WHERE CategoryID = @categoryID";
            using (SqlConnection conn = new SqlConnection(ConnString))
            {
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.Add(new SqlParameter("categoryID", id));
                conn.Open();
                using (SqlDataReader rd = cmd.ExecuteReader())
                {
                    if (rd != null)
                        if (rd.Read())
                        {
                            txtName.Text = rd["CategoryName"].ToString();
                            txtDescription.Text = rd["Description"].ToString();
                        }
                }
                conn.Close();
            }

        }
    }
}