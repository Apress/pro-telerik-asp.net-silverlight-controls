using System.Collections.Generic;
using System.Linq;
using TelerikMvcApplication.Models;

public static class RegionRepository
{
    public static List<RegionViewModel> GetAll()
    {
        NorthwindDataContext nwd = new NorthwindDataContext();
        var model = from regs in nwd.Regions
                    select new RegionViewModel
                    {
                        RegionID = regs.RegionID,
                        RegionDescription = regs.RegionDescription
                    };

        return model.ToList();
    }

    public static void Insert(RegionViewModel region)
    {
        var regions = from regs in GetAll()
                      orderby regs.RegionID descending 
                      select regs;
        if (regions.Count() > 0)
        {
            var id = regions.First().RegionID + 1;
            region.RegionID = id;
        }
        else
        {
            region.RegionID = 1;
        }

        NorthwindDataContext nwd = new NorthwindDataContext();
        Region r = new Region();
        r.RegionID = region.RegionID;
        r.RegionDescription = region.RegionDescription;
        nwd.Regions.InsertOnSubmit(r);
        nwd.SubmitChanges();
    }

    public static void Update(RegionViewModel region)
    {
        NorthwindDataContext nwd = new NorthwindDataContext();
        Region r = nwd.Regions.Single(reg => reg.RegionID == region.RegionID);
        r.RegionDescription = region.RegionDescription;
        nwd.SubmitChanges();
    }

    public static void Delete(RegionViewModel region)
    {
        NorthwindDataContext nwd = new NorthwindDataContext();
        Region r = nwd.Regions.Single(reg => reg.RegionID == region.RegionID);
        nwd.Regions.DeleteOnSubmit(r);
        nwd.SubmitChanges();
    }

}