using System;
using System.Web.Mvc;
using TelerikMvcApplication.Filters;

namespace TelerikMvcApplication.Controllers
{
    public class CalendarController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult MinMaxDates()
        {
            return View();
        }

        public ActionResult SelectAction(CalModel model)
        {
            model.selectedDate = model.selectedDate ?? DateTime.Today;
            return View(model);
        }

        [CultureAction]
        public ActionResult Globalization()
        {
            return View();
        }

        public ActionResult ClientAPI()
        {
            return View();
        }
    }

    public class CalModel
    {
        public DateTime? selectedDate { get; set; }
    }
}
