using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Reflection;
using System.Web;
using System.Web.Configuration;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;

namespace WebApplication1.WebServices
{
    /// <summary>
    /// Summary description for RadToolTip_Service
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [ScriptService]
    public class RadToolTip_Service : WebService
    {

        [WebMethod]
        public string GetAppointmentData(object context)
        {
            IDictionary<string, object> contextDictionary = (IDictionary<string, object>)context;
            string elementID = ((string)contextDictionary["Value"]);

            if (elementID == string.Empty)
            {
                throw new Exception("No argument specified.");
            }

            DataTable information = new DataTable();

            using (SqlConnection conn = new SqlConnection(WebConfigurationManager
                                                    .ConnectionStrings["NorthwindConnectionString"]
                                                    .ConnectionString))
            {
                try
                {
                    conn.Open();

                    SqlDataAdapter adapter = new SqlDataAdapter();

                    string Sql = "SELECT [Description], [Start], [End] ";
                    Sql += " FROM [Appointments] WHERE ID = @id";
                    adapter.SelectCommand = new SqlCommand(Sql, conn);
                    adapter.SelectCommand.Parameters.AddWithValue("@id", elementID);
                    adapter.Fill(information);
                }
                catch (Exception ex)
                {
                    
                }
            }

            Page pageHolder = new Page();
            UserControl viewControl = (UserControl)pageHolder.LoadControl("~/AppointmentInfo.ascx");

            Type viewControlType = viewControl.GetType();
            FieldInfo field = viewControlType.GetField("Data");

            if (field != null)
            {
                field.SetValue(viewControl, information);
            }

            pageHolder.Controls.Add(viewControl);
            StringWriter output = new StringWriter();
            HttpContext.Current.Server.Execute(pageHolder, output, false);

            return output.ToString();
        }
    }
}
