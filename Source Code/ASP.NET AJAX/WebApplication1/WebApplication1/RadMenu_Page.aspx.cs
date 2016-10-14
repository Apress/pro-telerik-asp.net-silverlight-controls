using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadMenu_Page : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void RadMenu2_ItemClick(object sender, RadMenuEventArgs e)
        {
            lblMenuItem.Text = string.Format("The selected item was: {0}", e.Item.Text);
        }

        protected void RadMenu3_ItemDataBound(object sender, RadMenuEventArgs e)
        {
            if (e.Item.Level != 1) return;
            e.Item.Width = Unit.Pixel(300);
        }

        protected void RadMenu4_ItemDataBound(object sender, RadMenuEventArgs e)
        {
            if (int.Parse(e.Item.Value) > 1000) return;
            var dataRow = (DataRowView)e.Item.DataItem;
            e.Item.Attributes["UnitPrice"] = string.Format("{0:c}", dataRow["UnitPrice"]);
        }
    }
}