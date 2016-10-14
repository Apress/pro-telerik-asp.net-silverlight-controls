using System;
using System.Collections;
using System.ComponentModel;
using System.Linq;
using System.Web.Script.Services;
using System.Web.Services;
using Telerik.Web.Mvc;
using Telerik.Web.Mvc.Extensions;
using Telerik.Web.Mvc.UI;


namespace TelerikMvcApplication.Models
{
    /// <summary>
    /// Summary description for WS_Regions
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [ToolboxItem(false)]
    [ScriptService]
    public class WS_Regions : WebService
    {

        [WebMethod]
        public IEnumerable LoadTerritories(TreeViewItemModel node)
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

            return nodes;
        }

        [WebMethod]
        public GridModel GetRegions(GridState state)
        {
            NorthwindDataContext nwd = new NorthwindDataContext();
            var model = from regs in nwd.Regions
                        select new RegionViewModel
                        {
                            RegionID = regs.RegionID,
                            RegionDescription = regs.RegionDescription
                        };

            return model.ToGridModel(state);
        }

        [WebMethod]
        public GridModel Select(GridState state)
        {
            return RegionRepository.GetAll().AsQueryable().ToGridModel(state);
        }

        [WebMethod]
        public GridModel Insert(RegionViewModel region, GridState state)
        {
            RegionRepository.Insert(region);

            return RegionRepository.GetAll().AsQueryable().ToGridModel(state);
        }

        [WebMethod]
        public GridModel Update(RegionViewModel region, GridState state)
        {
            RegionRepository.Update(region);

            return RegionRepository.GetAll().AsQueryable().ToGridModel(state);
        }

        [WebMethod]
        public GridModel Delete(RegionViewModel region, GridState state)
        {
            RegionRepository.Delete(region);

            return RegionRepository.GetAll().AsQueryable().ToGridModel(state);
        }
    }
}
