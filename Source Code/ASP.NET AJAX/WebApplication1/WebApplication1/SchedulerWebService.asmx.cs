using System.Web.Script.Services;
using System.Web.Services;
using Telerik.Web.UI;
using System.Collections.Generic;

namespace WebApplication1
{
    /// <summary>
    /// Summary description for SchedulerWebService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [ScriptService]
    public class SchedulerWebService : WebService
    {

        private WebServiceAppointmentController controller;

        private WebServiceAppointmentController Controller
        {
            get
            {
                this.controller =
                    this.controller ?? new WebServiceAppointmentController("RadSchedulerDatabaseProvider");
                return this.controller;
            }
        }

        [WebMethod]
        public IEnumerable<AppointmentData> GetAppointments(SchedulerInfo schedulerInfo)
        {
            return Controller.GetAppointments(schedulerInfo);
        }

        [WebMethod]
        public IEnumerable<AppointmentData> InsertAppointment(
            SchedulerInfo schedulerInfo,
            AppointmentData appointmentData)
        {
            return Controller.InsertAppointment(schedulerInfo, appointmentData);
        }

        [WebMethod]
        public IEnumerable<AppointmentData> UpdateAppointment(
            SchedulerInfo schedulerInfo,
            AppointmentData appointmentData)
        {
            return Controller.UpdateAppointment(schedulerInfo, appointmentData);
        }

        [WebMethod]
        public IEnumerable<AppointmentData> CreateRecurrenceException(
            SchedulerInfo schedulerInfo,
            AppointmentData recurrenceExceptionData)
        {
            return Controller.CreateRecurrenceException(schedulerInfo, recurrenceExceptionData);
        }

        [WebMethod]
        public IEnumerable<AppointmentData> RemoveRecurrenceExceptions(
            SchedulerInfo schedulerInfo,
            AppointmentData masterAppointmentData)
        {
            return Controller.RemoveRecurrenceExceptions(schedulerInfo, masterAppointmentData);
        }
        [WebMethod]
        public IEnumerable<AppointmentData> DeleteAppointment(
            SchedulerInfo schedulerInfo,
            AppointmentData appointmentData,
            bool deleteSeries)
        {
            return Controller.DeleteAppointment(schedulerInfo, appointmentData, deleteSeries);
        }

        [WebMethod]
        public IEnumerable<ResourceData> GetResources(SchedulerInfo schedulerInfo)
        {
            return Controller.GetResources(schedulerInfo);
        }
    }
}
