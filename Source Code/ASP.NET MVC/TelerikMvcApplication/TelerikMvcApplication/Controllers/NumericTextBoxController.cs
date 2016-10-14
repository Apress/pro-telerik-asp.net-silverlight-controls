using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using TelerikMvcApplication.Filters;

namespace TelerikMvcApplication.Controllers
{
    public class NumericTextBoxController : Controller
    {
        //
        // GET: /NumericTextBox/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult MinMaxValues(NTBModel model)
        {
            model.showSpinner = model.showSpinner ?? true;
            return View(model);
        }

        public ActionResult ServerValidation(NTBModel model)
        {
            model.value = model.value ?? 0;
            return View(model);
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult ServerValidation(double? numericTextBox, NTBModel model)
        {
            if (!numericTextBox.HasValue)
            {
                ModelState.AddModelError("numericTextBox", "Required");
            }
            else
            {
                if (numericTextBox.Value < 0 || numericTextBox.Value > 10)
                {
                    ModelState.AddModelError("numericTextBox", "Value out of range");
                }
            }

            return View(model);
        }

        public ActionResult ClientValidation()
        {
            var model = new NTBModel();
            model.numericTextBox = model.numericTextBox ?? 0;
            return View(model);
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult ClientValidation(NTBModel model)
        {
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

    public class NTBModel
    {
        public bool? showSpinner { get; set; }
        public double? value { get; set; }

        [Range(0, 10)]
        public double? numericTextBox { get; set; }
    }
}
