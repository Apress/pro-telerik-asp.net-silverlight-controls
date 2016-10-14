using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadSlider_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void rbOrientation_SelectedIndexChanged(object sender, EventArgs e)
        {
            RadSlider1.Orientation = (rbOrientation.SelectedValue == "Horizontal")
                                         ? Orientation.Horizontal
                                         : Orientation.Vertical;
            RadSlider1.Width = (rbOrientation.SelectedValue == "Horizontal") ? Unit.Pixel(500) : Unit.Pixel(70);
            RadSlider1.Height = (rbOrientation.SelectedValue == "Horizontal") ? Unit.Pixel(70) : Unit.Pixel(500);
        }

        protected void chkReverseDirection_CheckedChanged(object sender, EventArgs e)
        {
            RadSlider1.IsDirectionReversed = chkReverseDirection.Checked;
        }

        protected void rbTrackPosition_SelectedIndexChanged(object sender, EventArgs e)
        {
            RadSlider1.TrackPosition =
                (SliderTrackPosition) Enum.Parse(typeof (SliderTrackPosition), rbTrackPosition.SelectedValue);
        }

        protected void chkRange_CheckedChanged(object sender, EventArgs e)
        {
            RadSlider1.IsSelectionRangeEnabled = chkRange.Checked;
            if (!chkRange.Checked) return;
            RadSlider1.SelectionStart = 20;
            RadSlider1.SelectionEnd = 80;
        }

        protected void chkEnableServerSideRendering_CheckedChanged(object sender, EventArgs e)
        {
            RadSlider1.EnableServerSideRendering = chkEnableServerSideRendering.Checked;
        }

        protected void btnSetValueRange_Click(object sender, EventArgs e)
        {
            RadSlider1.MinimumValue = Convert.ToInt32(txtMinValue.Value);
            RadSlider1.MaximumValue = Convert.ToInt32(txtMaxValue.Value);
        }

        protected void chkDragHandle_CheckedChanged(object sender, EventArgs e)
        {
            RadSlider1.ShowDragHandle = chkDragHandle.Checked;
        }

        protected void chkIncreaseDecrease_CheckedChanged(object sender, EventArgs e)
        {
            RadSlider1.ShowIncreaseHandle = chkShowIncrease.Checked;
            RadSlider1.ShowDecreaseHandle = chkShowDecrease.Checked;
        }

        protected void RadSlider1_ValueChanged(object sender, EventArgs e)
        {
            txtSelectedValue.Value = RadSlider1.Value;
        }

    }
}