using System;
using System.Web.UI;

namespace WebApplication1
{
    public partial class SiteMaster : MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
            RadMenu1.LoadContentFile("~/App_Data/Content.xml");
        }
    }
}
