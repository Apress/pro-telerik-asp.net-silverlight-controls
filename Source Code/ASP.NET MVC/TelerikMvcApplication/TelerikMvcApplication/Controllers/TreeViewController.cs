using System;
using System.Collections;
using System.Linq;
using System.Web.Mvc;
using Telerik.Web.Mvc.UI;
using TelerikMvcApplication.Models;

namespace TelerikMvcApplication.Controllers
{
    public class TreeViewController : Controller
    {
        //
        // GET: /TreeView/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DeclarativeItems()
        {
            TVModel model = new TVModel();
            return View(model);
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult DeclarativeItems(TVModel model)
        {
            model.showCheckboxes = model.showCheckboxes ?? false;
            model.showChecked = model.showCheckboxes.Value ? "checked" : string.Empty;
            return View(model);
        }

        public ActionResult DragAndDrop()
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
            NorthwindDataContext nwd = new NorthwindDataContext(); 
            return View(nwd.Regions);
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult LoadTerritories_Ajax(TreeViewItemModel node)
        {
            NorthwindDataContext nwd = new NorthwindDataContext(); 
            int? parentId = !string.IsNullOrEmpty(node.Value) ? (int?)Convert.ToInt32(node.Value) : null;
            
            IEnumerable nodes = from item in nwd.Territories
                                where item.RegionID == parentId || parentId == null
                                select
                                    new TreeViewItemModel
                                        {
                                            Text = item.TerritoryDescription,
                                            Value = item.TerritoryID,
                                            Enabled = true
                                        };
            
            return new JsonResult {Data = nodes};
        }

        public ActionResult ClientAPI()
        {
            return View();
        }

    }

    public class TVModel
    {
        public TVModel()
        {
            showCheckboxes = false;
        }
        public bool? showCheckboxes { get; set; }
        public string showChecked { get; set; }
    }
}
