using System;
using System.Collections.Generic;

namespace TRData
{
    // Generated by Telerik OpenAccess
    // Used template: c:\program files (x86)\telerik\openaccess orm\sdk\IDEIntegrations\templates\PCClassGeneration\cs\templates\classgen\class\partialuserdefault.vm
    // NOTE: Field declarations and 'Object ID' class implementation are added to the 'designer' file.
    //       Changes made to the 'designer' file will be overwritten by the wizard.  	
    public partial class Region
    {
        //The 'no-args' constructor required by OpenAccess. 
        public Region()
        {
        }

        [Telerik.OpenAccess.FieldAlias("regionID")]
        public int RegionID
        {
            get { return regionID; }
            set { this.regionID = value; }
        }

        [Telerik.OpenAccess.FieldAlias("regionDescription")]
        public string RegionDescription
        {
            get { return regionDescription; }
            set { this.regionDescription = value; }
        }


    }
}
