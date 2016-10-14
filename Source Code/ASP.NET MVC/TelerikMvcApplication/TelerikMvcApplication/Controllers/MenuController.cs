using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Web.Mvc;
using Telerik.Web.Mvc.UI;
using TelerikMvcApplication.Filters;
using TelerikMvcApplication.Models;

namespace TelerikMvcApplication.Controllers
{
    public class MenuController : Controller
    {
        //
        // GET: /Menu/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DeclarativeItems()
        {
            var model = new MModel
                            {
                                menuOrientation = MenuOrientation.Horizontal,
                                checkedHorizontal = "checked",
                                checkedVertical = string.Empty
                            };
            return View(model);
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult DeclarativeItems(MModel model)
        {

            model.checkedHorizontal = model.radioOrientation == "Horizontal"
                                        ? "checked"
                                        : string.Empty;
            model.checkedVertical = model.radioOrientation == "Vertical"
                                        ? "checked"
                                        : string.Empty;
            model.menuOrientation = model.radioOrientation == "Horizontal"
                                        ? MenuOrientation.Horizontal
                                        : MenuOrientation.Vertical;
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

        public ActionResult ClientAPI()
        {
            return View();
        }

    }

    public class MModel
    {
        public MenuOrientation menuOrientation { get; set; }
        public string radioOrientation { get; set; }
        public string checkedHorizontal { get; set; }
        public string checkedVertical { get; set; }
    }
}
