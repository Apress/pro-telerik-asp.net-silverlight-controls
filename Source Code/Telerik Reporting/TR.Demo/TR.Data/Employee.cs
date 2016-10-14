using System;
using System.Collections.Generic;

namespace TRData
{
    // Generated by Telerik OpenAccess
    // Used template: c:\program files (x86)\telerik\openaccess orm\sdk\IDEIntegrations\templates\PCClassGeneration\cs\templates\classgen\class\partialuserdefault.vm
    // NOTE: Field declarations and 'Object ID' class implementation are added to the 'designer' file.
    //       Changes made to the 'designer' file will be overwritten by the wizard.  	
    public partial class Employee
    {
        //The 'no-args' constructor required by OpenAccess. 
        public Employee()
        {
        }

        [Telerik.OpenAccess.FieldAlias("employeeID")]
        public int EmployeeID
        {
            get { return employeeID; }
            set { this.employeeID = value; }
        }

        [Telerik.OpenAccess.FieldAlias("address")]
        public string Address
        {
            get { return address; }
            set { this.address = value; }
        }

        [Telerik.OpenAccess.FieldAlias("birthDate")]
        public DateTime? BirthDate
        {
            get { return birthDate; }
            set { this.birthDate = value; }
        }

        [Telerik.OpenAccess.FieldAlias("city")]
        public string City
        {
            get { return city; }
            set { this.city = value; }
        }

        [Telerik.OpenAccess.FieldAlias("country")]
        public string Country
        {
            get { return country; }
            set { this.country = value; }
        }

        [Telerik.OpenAccess.FieldAlias("extension")]
        public string Extension
        {
            get { return extension; }
            set { this.extension = value; }
        }

        [Telerik.OpenAccess.FieldAlias("firstName")]
        public string FirstName
        {
            get { return firstName; }
            set { this.firstName = value; }
        }

        [Telerik.OpenAccess.FieldAlias("hireDate")]
        public DateTime? HireDate
        {
            get { return hireDate; }
            set { this.hireDate = value; }
        }

        [Telerik.OpenAccess.FieldAlias("homePhone")]
        public string HomePhone
        {
            get { return homePhone; }
            set { this.homePhone = value; }
        }

        [Telerik.OpenAccess.FieldAlias("lastName")]
        public string LastName
        {
            get { return lastName; }
            set { this.lastName = value; }
        }

        [Telerik.OpenAccess.FieldAlias("notes")]
        public string Notes
        {
            get { return notes; }
            set { this.notes = value; }
        }

        [Telerik.OpenAccess.FieldAlias("photo")]
        public byte[] Photo
        {
            get { return photo; }
            set { this.photo = value; }
        }

        [Telerik.OpenAccess.FieldAlias("photoPath")]
        public string PhotoPath
        {
            get { return photoPath; }
            set { this.photoPath = value; }
        }

        [Telerik.OpenAccess.FieldAlias("postalCode")]
        public string PostalCode
        {
            get { return postalCode; }
            set { this.postalCode = value; }
        }

        [Telerik.OpenAccess.FieldAlias("region")]
        public string Region
        {
            get { return region; }
            set { this.region = value; }
        }

        [Telerik.OpenAccess.FieldAlias("reportsTo")]
        public int? ReportsTo
        {
            get { return reportsTo; }
            set { this.reportsTo = value; }
        }

        [Telerik.OpenAccess.FieldAlias("title")]
        public string Title
        {
            get { return title; }
            set { this.title = value; }
        }

        [Telerik.OpenAccess.FieldAlias("titleOfCourtesy")]
        public string TitleOfCourtesy
        {
            get { return titleOfCourtesy; }
            set { this.titleOfCourtesy = value; }
        }

        [Telerik.OpenAccess.FieldAlias("employee1")]
        public Employee Employee1
        {
            get { return employee1; }
            set { this.employee1 = value; }
        }

        [Telerik.OpenAccess.FieldAlias("employeeTerritories")]
        public IList<Territory> EmployeeTerritories
        {
            get { return employeeTerritories; }
        }


    }
}
