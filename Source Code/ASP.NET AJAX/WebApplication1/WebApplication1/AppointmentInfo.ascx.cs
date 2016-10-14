using System;
using System.Data;
using System.Web.UI;

namespace WebApplication1
{
    public partial class AppointmentInfo : UserControl
    {
        public object Data;

        protected void Page_Load(object sender, EventArgs e)
        {
            var table = (DataTable) Data;
            lblDesc.Text = table.Rows[0]["Description"].ToString();
            lblStart.Text = DateTime.Parse(table.Rows[0]["Start"].ToString()).ToString();
            lblEnd.Text = DateTime.Parse(table.Rows[0]["End"].ToString()).ToString();
        }
    }
}