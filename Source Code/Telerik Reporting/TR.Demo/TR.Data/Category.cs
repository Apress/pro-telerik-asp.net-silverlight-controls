using System;
using System.Collections.Generic;

namespace TRData
{
    // Generated by Telerik OpenAccess
    // Used template: c:\program files (x86)\telerik\openaccess orm\sdk\IDEIntegrations\templates\PCClassGeneration\cs\templates\classgen\class\partialuserdefault.vm
    // NOTE: Field declarations and 'Object ID' class implementation are added to the 'designer' file.
    //       Changes made to the 'designer' file will be overwritten by the wizard.  	
    public partial class Category
    {
        //The 'no-args' constructor required by OpenAccess. 
        public Category()
        {
        }

        [Telerik.OpenAccess.FieldAlias("categoryID")]
        public int CategoryID
        {
            get { return categoryID; }
            set { this.categoryID = value; }
        }

        [Telerik.OpenAccess.FieldAlias("categoryName")]
        public string CategoryName
        {
            get { return categoryName; }
            set { this.categoryName = value; }
        }

        [Telerik.OpenAccess.FieldAlias("description")]
        public string Description
        {
            get { return description; }
            set { this.description = value; }
        }

        [Telerik.OpenAccess.FieldAlias("displayOrder")]
        public int? DisplayOrder
        {
            get { return displayOrder; }
            set { this.displayOrder = value; }
        }

        [Telerik.OpenAccess.FieldAlias("picture")]
        public byte[] Picture
        {
            get { return picture; }
            set { this.picture = value; }
        }


    }
}
