using System.Collections.Generic;
using System.Data;
using System.Linq;
using Telerik.OpenAccess;
using TRData;

namespace TR.Reports
{
    public class DBData
    {
        public static List<ExpensiveProducts> TenMostExpensiveProducts()
        {
            var nwd = NorthwindScopeProvider.GetNewObjectScope();
            var products = StoredProcedure.TenMostExpensiveProducts(nwd).Cast<object[]>();
            var data = new List<ExpensiveProducts>();
            foreach (object[] p in products)
            {
                var pd = new ExpensiveProducts(p.ElementAt(0).ToString(), decimal.Parse(p.ElementAt(1).ToString()));
                data.Add(pd);
            }
            return data;
        }

        public List<Customer> GetCustomers()
        {
            var nwd = NorthwindScopeProvider.GetNewObjectScope();
            var q = from c in nwd.Extent<Customer>()
                    select c;
            return q.ToList();    
        } 

        public List<Customer> GetCustomers(string country)
        {
            var nwd = NorthwindScopeProvider.GetNewObjectScope();
            var q = from c in nwd.Extent<Customer>()
                    where c.Country == country
                    select c;

            return q.ToList();    
        }
    }
}
