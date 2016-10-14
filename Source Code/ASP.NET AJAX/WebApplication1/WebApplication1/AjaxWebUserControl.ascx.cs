using System;
using System.Web.UI;

namespace WebApplication1
{
    public partial class AjaxWebUserControl : UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
        }

        protected void btnDoPostBack_Click(object sender, EventArgs e)
        {
            txtResult.Text = "Go RadAjax!";
        }
    }
}