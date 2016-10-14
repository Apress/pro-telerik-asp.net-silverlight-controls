using System;
using System.Web.UI;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadAjaxLoadingPanel_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void rcbSkin_SelectedIndexChanged(object o, RadComboBoxSelectedIndexChangedEventArgs e)
        {
            RadAjaxLoadingPanel1.Skin = e.Text;
        }

        protected void chkTransparency_CheckedChanged(object sender, EventArgs e)
        {
            RadAjaxLoadingPanel1.Transparency = chkTransparency.Checked ? 30 : 0;
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            System.Threading.Thread.Sleep(2000);
        }

        protected void chkAnimation_CheckedChanged(object sender, EventArgs e)
        {
            if (chkAnimation.Checked)
            {
                RadAjaxLoadingPanel1.OnClientShowing = "CustomShowing";
                RadAjaxLoadingPanel1.OnClientHiding = "CustomHiding";
            }
            else
            {
                RadAjaxLoadingPanel1.OnClientShowing = "";
                RadAjaxLoadingPanel1.OnClientHiding = "";
            }

        }
    }
}