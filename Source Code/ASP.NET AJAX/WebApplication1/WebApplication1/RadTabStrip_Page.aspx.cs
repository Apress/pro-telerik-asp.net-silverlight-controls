using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadTabStrip_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void RadTabStrip4_ItemDataBound(object sender, RadTabStripEventArgs e)
        {
            var combo = (RadComboBox)e.Tab.FindControl("comboProducts");
            var sqlds = (SqlDataSource) e.Tab.FindControl("SqlDataSource3");
            sqlds.SelectParameters[0].DefaultValue = e.Tab.Value;
            combo.DataSource = sqlds;
            combo.DataBind();
        }

        protected void RadTabStrip4_TabClick(object sender, RadTabStripEventArgs e)
        {
            var combo = (RadComboBox)e.Tab.FindControl("comboProducts");
            lblCatProd.Text = string.Format("Category: {0} - Product: {1}", e.Tab.Text, combo.SelectedItem.Text);
        }

        protected void comboProducts_SelectedIndexChanged(object o, RadComboBoxSelectedIndexChangedEventArgs e)
        {
            var combo = (RadComboBox) o;
            var tab = (RadTab) combo.Parent;
            tab.Selected = true;
            lblCatProd.Text = string.Format("Category: {0} - Product: {1}", tab.Text, e.Text);
        }
    }
}