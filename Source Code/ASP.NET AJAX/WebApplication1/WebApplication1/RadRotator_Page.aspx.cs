using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadRotator_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
            LoadRotatorOptions();
        }

        private void LoadRotatorOptions()
        {
            rblRotationType.Items.Clear();
            foreach (string type in Enum.GetNames(typeof(RotatorType)))
            {
                rblRotationType.Items.Add(type);
                if (RadRotator1.RotatorType == (RotatorType)Enum.Parse(typeof(RotatorType), type))
                    rblRotationType.Items[rblRotationType.Items.Count - 1].Selected = true;
            }

        }

        protected void rblRotationType_SelectedIndexChanged(object sender, EventArgs e)
        {
            RadRotator1.RotatorType = (RotatorType)Enum.Parse(typeof(RotatorType), rblRotationType.SelectedValue);

            switch (RadRotator1.RotatorType)
            {
                case RotatorType.SlideShow:
                    RadRotator1.Width = Unit.Pixel(202);
                    break;
                case RotatorType.SlideShowButtons:
                case RotatorType.ButtonsOver:
                case RotatorType.Buttons:
                    // 20px for every button
                    RadRotator1.Width = Unit.Pixel(242);
                    break;
                default:
                    RadRotator1.Width = Unit.Pixel(202);
                    break;
            }

        }
    }
}