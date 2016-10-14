using System;
using System.Web.UI;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadAjaxManager_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
        }

        protected void btnDoPostBack_Click(object sender, EventArgs e)
        {
            txtResult.Text = "Hooray!";
        }

        protected void btnServerCode_Click(object sender, EventArgs e)
        {
            txtClientAPI.Text = "From ajaxRequestWithTarget()";
        }

        protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
        {
            if (e.Argument != "goAjaxRequest") return;
            txtClientAPI.Text = "From ajaxRequest()";
        }
    }
}