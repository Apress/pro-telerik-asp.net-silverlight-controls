using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using Telerik.Web.Mvc;
using Telerik.Web.Mvc.Extensions;

namespace TelerikMvcApplication.Models
{
    /// <summary>
    /// Summary description for WS_Products
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [ToolboxItem(false)]
    [ScriptService]
    public class WS_Products : WebService
    {

        [WebMethod]
        public GridModel GetProducts(GridState state)
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            return nwd.Products.ToGridModel(state);
        }

        [WebMethod]
        public GridModel ListProducts(GridState state)
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            var model = from prds in nwd.Products
                        select new ProductViewModel
                        {
                            ProductID = prds.ProductID,
                            ProductName = prds.ProductName
                        };
            return model.ToGridModel(state);
        }

    }
}
