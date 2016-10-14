using System;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadFormDecorator_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
            SetDecorationType();
        }

        protected void DecoratedControlsRadioList_SelectedIndexChanged(object sender, EventArgs e)
        {
            string selectedValue = DecoratedControlsRadioList.SelectedValue;
            switch (selectedValue)
            {
                case "All":
                    RadFormDecorator1.DecoratedControls = FormDecoratorDecoratedControls.All;
                    break;
                case "None":
                    RadFormDecorator1.DecoratedControls = FormDecoratorDecoratedControls.None;
                    break;
                case "Grid":
                    RadFormDecorator1.DecoratedControls = FormDecoratorDecoratedControls.GridFormDetailsViews;
                    break;
                default:
                    RadFormDecorator1.DecoratedControls = FormDecoratorDecoratedControls.Default;
                    break;
            }
            SetDecorationType();
        }

        protected void DecoratedControlsCheckBoxList_SelectedIndexChanged(object sender, EventArgs e)
        {
            ConfigureDecorator();
        }

        private void ConfigureDecorator()
        {
            RadFormDecorator1.DecoratedControls = FormDecoratorDecoratedControls.None;
            foreach (ListItem chk in DecoratedControlsCheckBoxList.Items.Cast<ListItem>().Where(x => x.Selected))
            {
                RadFormDecorator1.DecoratedControls |= 
                    (FormDecoratorDecoratedControls)Enum.Parse(typeof(FormDecoratorDecoratedControls), chk.Value);
            }
        }

        private void SetDecorationType()
        {
            DecoratedControlsCheckBoxList.ClearSelection();

            foreach (ListItem chk in DecoratedControlsCheckBoxList.Items)
            {
                FormDecoratorDecoratedControls decoratedcontrols = 
                       (FormDecoratorDecoratedControls)Enum.Parse(typeof(FormDecoratorDecoratedControls), chk.Value);
                chk.Selected = (RadFormDecorator1.DecoratedControls & decoratedcontrols) > 0;
            }
        }

        protected void rcbSkin_SelectedIndexChanged(object o, RadComboBoxSelectedIndexChangedEventArgs e)
        {
            RadFormDecorator1.Skin = e.Text;
            SetDecorationType();
        }
    }
}