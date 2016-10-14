using System;
using System.Web.UI;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadEditor_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
            //RadEditor1.Localization.Tools.Copy = @"My Copy text";
            EditorTool tool = RadEditor1.FindTool("Copy");
            if (tool != null)
            {
                tool.Text = "My Copy Button";
            }
        }
    }
}