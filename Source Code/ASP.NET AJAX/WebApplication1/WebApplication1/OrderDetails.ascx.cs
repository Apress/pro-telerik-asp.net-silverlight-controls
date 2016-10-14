using System;
using System.Web.UI;

namespace WebApplication1
{
    public partial class OrderDetails : UserControl
    {
        public int OrderID { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            OrderDetailsDataSource.SelectParameters[0].DefaultValue = OrderID.ToString();
            RadGrid1.DataBind();
        }
    }
}