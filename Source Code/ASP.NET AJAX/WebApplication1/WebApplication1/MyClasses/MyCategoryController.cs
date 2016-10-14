using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Web.Configuration;

namespace WebApplication1
{
    public static class MyCategoryController
    {
        public static List<MyCategory> GetAll()
        {
            List<MyCategory> categories = new List<MyCategory>();
            string sqlInsert = "SELECT [CategoryID], [CategoryName], [Description] FROM [Categories]";
            using (SqlConnection cnn = new SqlConnection(WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand(sqlInsert, cnn))
                {
                    try
                    {
                        cnn.Open();
                        using (SqlDataReader rd = cmd.ExecuteReader())
                        {
                            if (rd != null)
                                while (rd.Read())
                                {
                                    MyCategory cat = new MyCategory();
                                    cat.CategoryID = int.Parse(rd["CategoryID"].ToString());
                                    cat.CategoryName = rd["CategoryName"].ToString();
                                    cat.Description = rd["Description"].ToString();
                                    categories.Add(cat);
                                }
                        }
                    }
                    catch (Exception ex)
                    {
                    }
                }
            }
            return categories;
        }
    }
}
