

using System;
using System.Collections.Generic;

namespace TRData
{
    // Generated by Telerik OpenAccess
    // Used template: c:\program files (x86)\telerik\openaccess orm\sdk\IDEIntegrations\templates\PCClassGeneration\cs\templates\classgen\class\partialdesignerdefault.vm
    [Telerik.OpenAccess.Persistent(IdentityField = "territoryID")]
    public partial class Territory
    {
        private string territoryID; // pk 

        private int regionID;

        private string territoryDescription;

        private Region region;





    }
}

#region main class file contents
/*


using System;
using System.Collections.Generic;

namespace TRData 
{
    //Generated by Telerik OpenAccess
    public partial class Territory 
    {
        //The 'no-args' constructor required by OpenAccess. 
        public Territory() 
        {
        }
    
        [Telerik.OpenAccess.FieldAlias("territoryID")]
        public string TerritoryID
        {
            get { return territoryID; }
            set { this.territoryID = value; }
        }
 
        [Telerik.OpenAccess.FieldAlias("regionID")]
        public int RegionID
        {
            get { return regionID; }
            set { this.regionID = value; }
        }
 
        [Telerik.OpenAccess.FieldAlias("territoryDescription")]
        public string TerritoryDescription
        {
            get { return territoryDescription; }
            set { this.territoryDescription = value; }
        }
 
        [Telerik.OpenAccess.FieldAlias("region")]
        public Region Region
        {
            get { return region; }
            set { this.region = value; }
        }
 

    }
}
*/
#endregion //main class file contents
