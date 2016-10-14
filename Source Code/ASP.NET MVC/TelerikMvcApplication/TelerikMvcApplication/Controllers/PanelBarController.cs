using System.Threading;
using System.Web.Mvc;
using Telerik.Web.Mvc.UI;
using TelerikMvcApplication.Models;

namespace TelerikMvcApplication.Controllers
{
    public class PanelBarController : Controller
    {
        //
        // GET: /PanelBar/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DeclarativeItems()
        {
            PBModel model = new PBModel
                                {
                                    ExpandMode = PanelBarExpandMode.Single,
                                    radioExpandMode = "OnePanel",
                                    checkedOnePanel = "checked",
                                    checkedMultiplePanels = ""
                                };

            return View(model);
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult DeclarativeItems(PBModel model)
        {

            model.checkedOnePanel = model.radioExpandMode == "OnePanel"
                                        ? "checked"
                                        : string.Empty;
            model.checkedMultiplePanels = model.radioExpandMode == "MultiplePanels"
                                        ? "checked"
                                        : string.Empty;
            model.ExpandMode = model.radioExpandMode == "OnePanel"
                                        ? PanelBarExpandMode.Single
                                        : PanelBarExpandMode.Multiple;
            return View(model);
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

        public ActionResult AjaxGoogle()
        {
            Thread.Sleep(2000);
            return PartialView();
        }

        public ActionResult ClientAPI()
        {
            return View();
        }

    }

    public class PBModel
    {
        public PanelBarExpandMode ExpandMode { get; set; }
        public string radioExpandMode { get; set; }
        public string checkedOnePanel { get; set; }
        public string checkedMultiplePanels { get; set; }
    }
}
