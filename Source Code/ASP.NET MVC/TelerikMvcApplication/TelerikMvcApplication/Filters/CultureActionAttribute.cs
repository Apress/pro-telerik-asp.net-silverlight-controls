namespace TelerikMvcApplication.Filters
{
    using System.Globalization;
    using System.Threading;
    using System.Web.Mvc;
    
    public class CultureActionAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(filterContext);

            if (!string.IsNullOrEmpty(filterContext.HttpContext.Request["culture"]))
            {
                string newCulture = filterContext.HttpContext.Request["culture"];
                CultureInfo newCI = new CultureInfo(newCulture);
                Thread.CurrentThread.CurrentCulture = newCI;
                Thread.CurrentThread.CurrentUICulture = newCI;
            }
        }
    }
}
