using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace WebApplication1
{
    public class MyCategory
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }

        public MyCategory()
        {
            
        }

        public MyCategory(int id)
        {
            string sqlInsert = "SELECT [CategoryID], [CategoryName], [Description] ";
                sqlInsert += " FROM [Categories] WHERE [CategoryID] = @CategoryID";
            using (SqlConnection cnn = new SqlConnection(WebConfigurationManager
                                            .ConnectionStrings["NorthwindConnectionString"]
                                            .ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand(sqlInsert, cnn))
                {
                    try
                    {
                        cnn.Open();
                        cmd.Parameters.Add(new SqlParameter("CategoryID", id));
                        using (SqlDataReader rd = cmd.ExecuteReader())
                        {
                            if (rd != null)
                                while (rd.Read())
                                {
                                    CategoryID = id;
                                    CategoryName = rd["CategoryName"].ToString();
                                    Description = rd["Description"].ToString();
                                }
                        }
                    }
                    catch (Exception ex)
                    {
                        CategoryID = 0;
                    }
                }
            }

        }

        public void Insert ()
        {
            string sqlInsert = "INSERT INTO [Categories] ([CategoryName], [Description]) VALUES (@CategoryName, @Description); SELECT SCOPE_IDENTITY();";
            using (SqlConnection cnn = new SqlConnection(WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand(sqlInsert, cnn))
                {
                    cmd.Parameters.Add(new SqlParameter("CategoryName", CategoryName));
                    cmd.Parameters.Add(new SqlParameter("Description", Description));
                    try
                    {
                        cnn.Open();
                        CategoryID = int.Parse(cmd.ExecuteScalar().ToString());
                    }
                    catch (Exception ex)
                    {

                    }
                }
            }
        }

        public void Update ()
        {
            string sqlInsert = "UPDATE [Categories] SET [CategoryName] = @CategoryName, [Description] = @Description WHERE [CategoryID] = @original_CategoryID";
            using (SqlConnection cnn = new SqlConnection(WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand(sqlInsert, cnn))
                {
                    cmd.Parameters.Add(new SqlParameter("original_CategoryID", CategoryID));
                    cmd.Parameters.Add(new SqlParameter("CategoryName", CategoryName));
                    cmd.Parameters.Add(new SqlParameter("Description", Description));
                    try
                    {
                        cnn.Open();
                        cmd.ExecuteNonQuery();
                    }
                    catch (Exception ex)
                    {

                    }
                }
            }
        }

        public void Delete ()
        {
            string sqlInsert = "DELETE FROM [Categories] WHERE [CategoryID] = @original_CategoryID";
            using (SqlConnection cnn = new SqlConnection(WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand(sqlInsert, cnn))
                {
                    cmd.Parameters.Add(new SqlParameter("original_CategoryID", CategoryID));
                    try
                    {
                        cnn.Open();
                        cmd.ExecuteNonQuery();
                    }
                    catch (Exception ex)
                    {

                    }
                }
            }
        }
    }

    
}