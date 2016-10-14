using System.Collections;
using System.Data;
using System.Linq;
using TRData;
using System.Collections.Generic;

namespace TR.Reports
{
    public class ExpensiveProducts
    {
        public ExpensiveProducts()
        {
        }

        public ExpensiveProducts(string name, decimal price)
        {
            ProductName = name;
            UnitPrice = price;
        }

        public string ProductName { get; set; }

        public decimal UnitPrice { get; set; }
    }
}
