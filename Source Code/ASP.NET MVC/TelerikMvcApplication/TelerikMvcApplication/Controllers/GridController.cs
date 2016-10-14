using System;
using System.Collections.Generic;
using System.Data.Linq;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Web.Mvc;
using Telerik.Web.Mvc.Extensions;
using TelerikMvcApplication.Models;

namespace TelerikMvcApplication.Controllers
{
    public class GridController : Controller
    {
        //
        // GET: /Grid/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ServerBinding()
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            DataLoadOptions loadOptions = new DataLoadOptions();
            loadOptions.LoadWith<Product>(p => p.Category);
            nwd.LoadOptions = loadOptions;
            return View(nwd.Products);
        }

        public ActionResult ServerEditing()
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            return View(nwd.Categories);
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult ServerInsert()
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            Category cat = new Category();
            if (TryUpdateModel(cat))
            {
                nwd.Categories.InsertOnSubmit(cat);
                nwd.SubmitChanges();
                return RedirectToAction("ServerEditing", this.GridRouteValues());
            }

            return View("ServerEditing", nwd.Categories);
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult ServerUpdate(int id)
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            Category cat = nwd.Categories.Single(p => p.CategoryID == id);
            if (TryUpdateModel(cat))
            {
                nwd.SubmitChanges();
                return RedirectToAction("ServerEditing", this.GridRouteValues());
            }

            return View("ServerEditing", nwd.Categories);
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult ServerDelete(int id)
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            Category cat = nwd.Categories.Single(p => p.CategoryID == id);
            if (TryUpdateModel(cat))
            {
                nwd.Categories.DeleteOnSubmit(cat);
                nwd.SubmitChanges();
                return RedirectToAction("ServerEditing", this.GridRouteValues());
            }

            return View("ServerEditing", nwd.Categories);
        }

        public ActionResult AjaxBinding()
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            var model = from regs in nwd.Regions
                        select new RegionViewModel
                                   {
                                       RegionID = regs.RegionID,
                                       RegionDescription = regs.RegionDescription
                                   };
            return View(model);
        }

        [GridAction]
        public ActionResult _AjaxBinding()
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            var model = from regs in nwd.Regions
                        select new RegionViewModel
                        {
                            RegionID = regs.RegionID,
                            RegionDescription = regs.RegionDescription
                        };
            return View(new GridModel
                            {
                                Data = model
                            });
        }

        [GridAction]
        public ActionResult AjaxEditing()
        {
            return View(new GridModel
            {
                Data = RegionRepository.GetAll()
            });
        }

        [GridAction]
        public ActionResult _AjaxSelect()
        {
            return View(new GridModel
            {
                Data = RegionRepository.GetAll()
            });
        }

        [AcceptVerbs(HttpVerbs.Post)]
        [GridAction]
        public ActionResult _AjaxInsert()
        {
            RegionViewModel reg = new RegionViewModel();
            if (TryUpdateModel(reg))
            {
                RegionRepository.Insert(reg);
            }

            return View(new GridModel(RegionRepository.GetAll()));
        }

        [AcceptVerbs(HttpVerbs.Post)]
        [GridAction]
        public ActionResult _AjaxUpdate(int id)
        {
            RegionViewModel reg = new RegionViewModel();
            if (TryUpdateModel(reg))
            {
                RegionRepository.Update(reg);
            }

            return View(new GridModel(RegionRepository.GetAll()));
        }

        [AcceptVerbs(HttpVerbs.Post)]
        [GridAction]
        public ActionResult _AjaxDelete(int id)
        {
            RegionViewModel reg = new RegionViewModel();
            if (TryUpdateModel(reg))
            {
                RegionRepository.Delete(reg);
            }

            return View(new GridModel(RegionRepository.GetAll()));
        }

        public ActionResult WebServiceBinding()
        {
            return View();
        }


        public ActionResult WebServiceEditing()
        {
            return View(new GridModel
            {
                Data = RegionRepository.GetAll()
            });

        }


        public ActionResult GridOperations()
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            DataLoadOptions loadOptions = new DataLoadOptions();
            loadOptions.LoadWith<Product>(p => p.Category);
            nwd.LoadOptions = loadOptions;
            return View(nwd.Products);
        }

        public ActionResult Templates()
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            return View(nwd.Employees);
        }

        public ActionResult ClientAPI()
        {
            return View();
        }

    }
}
