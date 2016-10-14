using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadScheduler_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void RadScheduler4_TimeSlotContextMenuItemClicking(object sender, TimeSlotContextMenuItemClickingEventArgs e)
        {
            if (e.MenuItem.Value == "EnableGrouping")
            {
                RadScheduler1.GroupBy = "Calendar";
            }
            else if (e.MenuItem.Value == "DisableGrouping")
            {
                RadScheduler1.GroupBy = "";
            }

        }

        private void WriteCalendar(string data)
        {
            HttpResponse response = Page.Response;
            response.Clear();
            response.Buffer = true;
            response.ContentType = "text/calendar";
            response.ContentEncoding = Encoding.UTF8;
            response.Charset = "utf-8";
            response.AddHeader("Content-Disposition", "attachment;filename=\"Appointment.ics\"");
            response.Write(data);
            response.End();
        }

        protected void RadScheduler7_AppointmentCommand(object sender, AppointmentCommandEventArgs e)
        {
            if (e.CommandName == "Export")
            {
                WriteCalendar(RadScheduler.ExportToICalendar(e.Container.Appointment));
            }
        }

        protected void btnExportCalendar_Click(object sender, EventArgs e)
        {
            WriteCalendar(RadScheduler.ExportToICalendar(RadScheduler7.Appointments));
        }
    }
}