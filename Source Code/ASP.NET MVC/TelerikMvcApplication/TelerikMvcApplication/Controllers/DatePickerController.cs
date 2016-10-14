using System.Web.Mvc;
using TelerikMvcApplication.Filters;

namespace TelerikMvcApplication.Controllers
{
    public class DatePickerController : Controller
    {
        //
        // GET: /DatePicker/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult MinMaxDate(DPModel model)
        {
            model.showDropDown = model.showDropDown ?? true;
            return View(model);
        }

        public ActionResult DateParsing()
        {
            return View();
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

    public class DPModel
    {
        public DPModel()
        {
            showDropDown = true;
        }
        public bool? showDropDown { get; set; }
    }
}
