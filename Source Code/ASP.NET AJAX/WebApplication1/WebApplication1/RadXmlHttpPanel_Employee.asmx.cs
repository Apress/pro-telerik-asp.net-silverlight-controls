using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Web.Configuration;
using System.Web.Script.Services;
using System.Web.Services;

namespace WebApplication1
{
    /// <summary>
    /// Summary description for RadXmlHttpPanel_Employee
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [ScriptService]
    public class RadXmlHttpPanel_Employee : WebService
    {

        [WebMethod]
        public string LoadEmployeeData(object context)
        {
            IDictionary<string, object> contextDictionary = (IDictionary<string, object>)context;
            string id = ((string)contextDictionary["Value"]);
            var employeeDT = GetEmployeeDataTable(id);
            string photo = string.Format("Images/employees/{0}.jpg", id);
            string Img = string.Format("<img src=\"{0}\" width=\"100px\">", photo);
            string name = employeeDT.Rows[0]["Name"].ToString();
            string nameDiv = string.Format("<div style=\"font-weight:bold;font-size:14px\">{0}</div>", name);
            string title = employeeDT.Rows[0]["Title"].ToString();
            string titleDiv = string.Format("<div>{0}</div>", title);
            string notes = employeeDT.Rows[0]["Notes"].ToString();
            string notesDiv = string.Format("<div>{0}</div>", notes);

            StringBuilder sb = new StringBuilder();
            sb.AppendLine("<fieldset>");
            sb.AppendLine(" <legend>Employee Details</legend>");
            sb.AppendLine("<table>");
            sb.AppendLine("    <tr>");
            sb.AppendLine("<td>");
            sb.AppendLine(Img);
            sb.AppendLine("<br />");
            sb.AppendLine("</td>");
            sb.AppendLine("<td>");
            sb.AppendLine(nameDiv);
            sb.AppendLine("<br />");
            sb.AppendLine(titleDiv);
            sb.AppendLine("<hr />");
            sb.AppendLine(notesDiv);
            sb.AppendLine("</td>");
            sb.AppendLine("</tr>");
            sb.AppendLine("</table>");
            sb.AppendLine("</fieldset>");

            return sb.ToString();
        }

        private DataTable GetEmployeeDataTable(string id)
        {
            string ConnString = WebConfigurationManager
                                    .ConnectionStrings["NorthwindConnectionString"]
                                    .ConnectionString;
            string query = "SELECT [EmployeeID], [FirstName] + ' ' + [LastName] As [Name],";
            query += "             [Title], [Notes]";
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
    }
}
