
namespace ProTelerikDemo.Web
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.Data.Objects.DataClasses;
    using System.Linq;
    using System.ServiceModel.DomainServices.Hosting;
    using System.ServiceModel.DomainServices.Server;


    // The MetadataTypeAttribute identifies AppointmentMetadata as the class
    // that carries additional metadata for the Appointment class.
    [MetadataTypeAttribute(typeof(Appointment.AppointmentMetadata))]
    public partial class Appointment
    {

        // This class allows you to attach custom attributes to properties
        // of the Appointment class.
        //
        // For example, the following marks the Xyz property as a
        // required property and specifies the format for valid values:
        //    [Required]
        //    [RegularExpression("[A-Z][A-Za-z0-9]*")]
        //    [StringLength(32)]
        //    public string Xyz { get; set; }
        internal sealed class AppointmentMetadata
        {

            // Metadata classes are not meant to be instantiated.
            private AppointmentMetadata()
            {
            }

            public string Annotations { get; set; }

            public Appointment Appointment1 { get; set; }

            public EntityCollection<Appointment> Appointments1 { get; set; }

            public string Description { get; set; }

            public DateTime End { get; set; }

            public int ID { get; set; }

            public Nullable<int> RecurrenceParentID { get; set; }

            public string RecurrenceRule { get; set; }

            public DateTime Start { get; set; }

            public string Subject { get; set; }
        }
    }

    // The MetadataTypeAttribute identifies CategoryMetadata as the class
    // that carries additional metadata for the Category class.
    [MetadataTypeAttribute(typeof(Category.CategoryMetadata))]
    public partial class Category
    {

        // This class allows you to attach custom attributes to properties
        // of the Category class.
        //
        // For example, the following marks the Xyz property as a
        // required property and specifies the format for valid values:
        //    [Required]
        //    [RegularExpression("[A-Z][A-Za-z0-9]*")]
        //    [StringLength(32)]
        //    public string Xyz { get; set; }
        internal sealed class CategoryMetadata
        {

            // Metadata classes are not meant to be instantiated.
            private CategoryMetadata()
            {
            }

            public int CategoryID { get; set; }

            public string CategoryName { get; set; }

            public string Description { get; set; }

            public byte[] Picture { get; set; }

            public EntityCollection<Product> Products { get; set; }
        }
    }

    // The MetadataTypeAttribute identifies CustomerMetadata as the class
    // that carries additional metadata for the Customer class.
    [MetadataTypeAttribute(typeof(Customer.CustomerMetadata))]
    public partial class Customer
    {

        // This class allows you to attach custom attributes to properties
        // of the Customer class.
        //
        // For example, the following marks the Xyz property as a
        // required property and specifies the format for valid values:
        //    [Required]
        //    [RegularExpression("[A-Z][A-Za-z0-9]*")]
        //    [StringLength(32)]
        //    public string Xyz { get; set; }
        internal sealed class CustomerMetadata
        {

            // Metadata classes are not meant to be instantiated.
            private CustomerMetadata()
            {
            }

            public string Address { get; set; }

            public string City { get; set; }

            public string CompanyName { get; set; }

            public string ContactName { get; set; }

            public string ContactTitle { get; set; }

            public string Country { get; set; }

            public EntityCollection<CustomerDemographic> CustomerDemographics { get; set; }

            public string CustomerID { get; set; }

            public string Fax { get; set; }

            public EntityCollection<Order> Orders { get; set; }

            public string Phone { get; set; }

            public string PostalCode { get; set; }

            public string Region { get; set; }
        }
    }

    // The MetadataTypeAttribute identifies CustomerDemographicMetadata as the class
    // that carries additional metadata for the CustomerDemographic class.
    [MetadataTypeAttribute(typeof(CustomerDemographic.CustomerDemographicMetadata))]
    public partial class CustomerDemographic
    {

        // This class allows you to attach custom attributes to properties
        // of the CustomerDemographic class.
        //
        // For example, the following marks the Xyz property as a
        // required property and specifies the format for valid values:
        //    [Required]
        //    [RegularExpression("[A-Z][A-Za-z0-9]*")]
        //    [StringLength(32)]
        //    public string Xyz { get; set; }
        internal sealed class CustomerDemographicMetadata
        {

            // Metadata classes are not meant to be instantiated.
            private CustomerDemographicMetadata()
            {
            }

            public string CustomerDesc { get; set; }

            public EntityCollection<Customer> Customers { get; set; }

            public string CustomerTypeID { get; set; }
        }
    }

    // The MetadataTypeAttribute identifies EmployeeMetadata as the class
    // that carries additional metadata for the Employee class.
    [MetadataTypeAttribute(typeof(Employee.EmployeeMetadata))]
    public partial class Employee
    {

        // This class allows you to attach custom attributes to properties
        // of the Employee class.
        //
        // For example, the following marks the Xyz property as a
        // required property and specifies the format for valid values:
        //    [Required]
        //    [RegularExpression("[A-Z][A-Za-z0-9]*")]
        //    [StringLength(32)]
        //    public string Xyz { get; set; }
        internal sealed class EmployeeMetadata
        {

            // Metadata classes are not meant to be instantiated.
            private EmployeeMetadata()
            {
            }

            public string Address { get; set; }

            public Nullable<DateTime> BirthDate { get; set; }

            public string City { get; set; }

            public string Country { get; set; }

            public Employee Employee1 { get; set; }

            public int EmployeeID { get; set; }

            public EntityCollection<Employee> Employees1 { get; set; }

            public string Extension { get; set; }

            public string FirstName { get; set; }

            public Nullable<DateTime> HireDate { get; set; }

            public string HomePhone { get; set; }

            public string LastName { get; set; }

            public string Notes { get; set; }

            public EntityCollection<Order> Orders { get; set; }

            public byte[] Photo { get; set; }

            public string PhotoPath { get; set; }

            public string PostalCode { get; set; }

            public string Region { get; set; }

            public Nullable<int> ReportsTo { get; set; }

            public EntityCollection<Territory> Territories { get; set; }

            public string Title { get; set; }

            public string TitleOfCourtesy { get; set; }
        }
    }

    // The MetadataTypeAttribute identifies OrderMetadata as the class
    // that carries additional metadata for the Order class.
    [MetadataTypeAttribute(typeof(Order.OrderMetadata))]
    public partial class Order
    {

        // This class allows you to attach custom attributes to properties
        // of the Order class.
        //
        // For example, the following marks the Xyz property as a
        // required property and specifies the format for valid values:
        //    [Required]
        //    [RegularExpression("[A-Z][A-Za-z0-9]*")]
        //    [StringLength(32)]
        //    public string Xyz { get; set; }
        internal sealed class OrderMetadata
        {

            // Metadata classes are not meant to be instantiated.
            private OrderMetadata()
            {
            }

            public Customer Customer { get; set; }

            public string CustomerID { get; set; }

            public Employee Employee { get; set; }

            public Nullable<int> EmployeeID { get; set; }

            public Nullable<decimal> Freight { get; set; }

            public EntityCollection<Order_Detail> Order_Details { get; set; }

            public Nullable<DateTime> OrderDate { get; set; }

            public int OrderID { get; set; }

            public Nullable<DateTime> RequiredDate { get; set; }

            public string ShipAddress { get; set; }

            public string ShipCity { get; set; }

            public string ShipCountry { get; set; }

            public string ShipName { get; set; }

            public Nullable<DateTime> ShippedDate { get; set; }

            public Shipper Shipper { get; set; }

            public string ShipPostalCode { get; set; }

            public string ShipRegion { get; set; }

            public Nullable<int> ShipVia { get; set; }
        }
    }

    // The MetadataTypeAttribute identifies Order_DetailMetadata as the class
    // that carries additional metadata for the Order_Detail class.
    [MetadataTypeAttribute(typeof(Order_Detail.Order_DetailMetadata))]
    public partial class Order_Detail
    {

        // This class allows you to attach custom attributes to properties
        // of the Order_Detail class.
        //
        // For example, the following marks the Xyz property as a
        // required property and specifies the format for valid values:
        //    [Required]
        //    [RegularExpression("[A-Z][A-Za-z0-9]*")]
        //    [StringLength(32)]
        //    public string Xyz { get; set; }
        internal sealed class Order_DetailMetadata
        {

            // Metadata classes are not meant to be instantiated.
            private Order_DetailMetadata()
            {
            }

            public float Discount { get; set; }

            public Order Order { get; set; }

            public int OrderID { get; set; }

            public Product Product { get; set; }

            public int ProductID { get; set; }

            public short Quantity { get; set; }

            public decimal UnitPrice { get; set; }
        }
    }

    // The MetadataTypeAttribute identifies ProductMetadata as the class
    // that carries additional metadata for the Product class.
    [MetadataTypeAttribute(typeof(Product.ProductMetadata))]
    public partial class Product
    {

        // This class allows you to attach custom attributes to properties
        // of the Product class.
        //
        // For example, the following marks the Xyz property as a
        // required property and specifies the format for valid values:
        //    [Required]
        //    [RegularExpression("[A-Z][A-Za-z0-9]*")]
        //    [StringLength(32)]
        //    public string Xyz { get; set; }
        internal sealed class ProductMetadata
        {

            // Metadata classes are not meant to be instantiated.
            private ProductMetadata()
            {
            }

            public Category Category { get; set; }

            public Nullable<int> CategoryID { get; set; }

            public bool Discontinued { get; set; }

            public EntityCollection<Order_Detail> Order_Details { get; set; }

            public int ProductID { get; set; }

            public string ProductName { get; set; }

            public string QuantityPerUnit { get; set; }

            public Nullable<short> ReorderLevel { get; set; }

            public Supplier Supplier { get; set; }

            public Nullable<int> SupplierID { get; set; }

            public Nullable<decimal> UnitPrice { get; set; }

            public Nullable<short> UnitsInStock { get; set; }

            public Nullable<short> UnitsOnOrder { get; set; }
        }
    }

    // The MetadataTypeAttribute identifies RegionMetadata as the class
    // that carries additional metadata for the Region class.
    [MetadataTypeAttribute(typeof(Region.RegionMetadata))]
    public partial class Region
    {

        // This class allows you to attach custom attributes to properties
        // of the Region class.
        //
        // For example, the following marks the Xyz property as a
        // required property and specifies the format for valid values:
        //    [Required]
        //    [RegularExpression("[A-Z][A-Za-z0-9]*")]
        //    [StringLength(32)]
        //    public string Xyz { get; set; }
        internal sealed class RegionMetadata
        {

            // Metadata classes are not meant to be instantiated.
            private RegionMetadata()
            {
            }

            public string RegionDescription { get; set; }

            public int RegionID { get; set; }

            public EntityCollection<Territory> Territories { get; set; }
        }
    }

    // The MetadataTypeAttribute identifies ShipperMetadata as the class
    // that carries additional metadata for the Shipper class.
    [MetadataTypeAttribute(typeof(Shipper.ShipperMetadata))]
    public partial class Shipper
    {

        // This class allows you to attach custom attributes to properties
        // of the Shipper class.
        //
        // For example, the following marks the Xyz property as a
        // required property and specifies the format for valid values:
        //    [Required]
        //    [RegularExpression("[A-Z][A-Za-z0-9]*")]
        //    [StringLength(32)]
        //    public string Xyz { get; set; }
        internal sealed class ShipperMetadata
        {

            // Metadata classes are not meant to be instantiated.
            private ShipperMetadata()
            {
            }

            public string CompanyName { get; set; }

            public EntityCollection<Order> Orders { get; set; }

            public string Phone { get; set; }

            public int ShipperID { get; set; }
        }
    }

    // The MetadataTypeAttribute identifies SupplierMetadata as the class
    // that carries additional metadata for the Supplier class.
    [MetadataTypeAttribute(typeof(Supplier.SupplierMetadata))]
    public partial class Supplier
    {

        // This class allows you to attach custom attributes to properties
        // of the Supplier class.
        //
        // For example, the following marks the Xyz property as a
        // required property and specifies the format for valid values:
        //    [Required]
        //    [RegularExpression("[A-Z][A-Za-z0-9]*")]
        //    [StringLength(32)]
        //    public string Xyz { get; set; }
        internal sealed class SupplierMetadata
        {

            // Metadata classes are not meant to be instantiated.
            private SupplierMetadata()
            {
            }

            public string Address { get; set; }

            public string City { get; set; }

            public string CompanyName { get; set; }

            public string ContactName { get; set; }

            public string ContactTitle { get; set; }

            public string Country { get; set; }

            public string Fax { get; set; }

            public string HomePage { get; set; }

            public string Phone { get; set; }

            public string PostalCode { get; set; }

            public EntityCollection<Product> Products { get; set; }

            public string Region { get; set; }

            public int SupplierID { get; set; }
        }
    }

    // The MetadataTypeAttribute identifies TerritoryMetadata as the class
    // that carries additional metadata for the Territory class.
    [MetadataTypeAttribute(typeof(Territory.TerritoryMetadata))]
    public partial class Territory
    {

        // This class allows you to attach custom attributes to properties
        // of the Territory class.
        //
        // For example, the following marks the Xyz property as a
        // required property and specifies the format for valid values:
        //    [Required]
        //    [RegularExpression("[A-Z][A-Za-z0-9]*")]
        //    [StringLength(32)]
        //    public string Xyz { get; set; }
        internal sealed class TerritoryMetadata
        {

            // Metadata classes are not meant to be instantiated.
            private TerritoryMetadata()
            {
            }

            public EntityCollection<Employee> Employees { get; set; }

            public Region Region { get; set; }

            public int RegionID { get; set; }

            public string TerritoryDescription { get; set; }

            public string TerritoryID { get; set; }
        }
    }
}
