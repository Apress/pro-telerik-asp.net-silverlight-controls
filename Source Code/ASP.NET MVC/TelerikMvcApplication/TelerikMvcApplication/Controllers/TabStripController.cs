using System.Threading;
using System.Web.Mvc;
using TelerikMvcApplication.Models;

namespace TelerikMvcApplication.Controllers
{
    public class TabStripController : Controller
    {
        //
        // GET: /TabStrip/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DeclarativeItems()
        {
            return View();
        }

        public ActionResult BindToModel()
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            return View(nwd.Regions);
        }

        public ActionResult Templates()
        {
            return View();
        }

        public ActionResult LoadOnDemand()
        {
            return View();
        }

        public ActionResult AjaxLogin()
        {
            Thread.Sleep(2000);
            return PartialView();
        }

        public ActionResult AjaxWeather()
        {
            Thread.Sleep(2000);
            return PartialView();
        }

        public ActionResult ClientAPI()
        {
            return View();
        }


    }
}
