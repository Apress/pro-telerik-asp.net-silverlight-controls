using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadToolTip_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        #region Configuring RadToolTip

        protected void rbAnimation_SelectedIndexChanged(object sender, EventArgs e)
        {
            RadToolTip1.Animation = (ToolTipAnimation) Enum.Parse(typeof (ToolTipAnimation), rbAnimation.SelectedValue);
        }

        protected void rbPosition_SelectedIndexChanged(object sender, EventArgs e)
        {
            RadToolTip1.Position = (ToolTipPosition)Enum.Parse(typeof(ToolTipPosition), rbPosition.SelectedValue);
        }

        protected void rbRelativeTo_SelectedIndexChanged(object sender, EventArgs e)
        {
            RadToolTip1.RelativeTo = (ToolTipRelativeDisplay)Enum.Parse(typeof(ToolTipRelativeDisplay), rbRelativeTo.SelectedValue);
        }

        protected void rbShowEvent_SelectedIndexChanged(object sender, EventArgs e)
        {
            RadToolTip1.ShowEvent = (ToolTipShowEvent)Enum.Parse(typeof(ToolTipShowEvent), rbShowEvent.SelectedValue);
        }

        protected void rbHideEvent_SelectedIndexChanged(object sender, EventArgs e)
        {
            RadToolTip1.HideEvent = (ToolTipHideEvent)Enum.Parse(typeof(ToolTipHideEvent), rbHideEvent.SelectedValue);
        }

        protected void chkMouseTrailing_CheckedChanged(object sender, EventArgs e)
        {
            RadToolTip1.MouseTrailing = chkMouseTrailing.Checked;
        }

        protected void chkShowCallout_CheckedChanged(object sender, EventArgs e)
        {
            RadToolTip1.ShowCallout = chkShowCallout.Checked;
        }

        protected void chkModal_CheckedChanged(object sender, EventArgs e)
        {
            RadToolTip1.Modal = chkModal.Checked;
        }

        #endregion

        bool IsTooltify(RadToolTipManager manager, string ClientId)
        {
            return manager.TargetControls
                        .Cast<ToolTipTargetControl>()
                        .Any(item => item.TargetControlID == ClientId);
        }

        protected void RadGrid2_ItemDataBound(object sender, GridItemEventArgs e)
        {
            if ((e.Item.ItemType != GridItemType.Item && e.Item.ItemType != GridItemType.AlternatingItem) || !e.Item.Visible || IsTooltify(RadToolTipManager2, e.Item.ClientID)) return;
            var l = (Label)e.Item.FindControl("lblOrderID");
            RadToolTipManager2.TargetControls.Add(l.ClientID, l.Text, true);

        }
        protected void RadToolTipManager2_AjaxUpdate(object sender, ToolTipUpdateEventArgs e)
        {
            int value;
            if (!int.TryParse(e.Value, out value)) return;
            var control = (OrderDetails)LoadControl("OrderDetails.ascx");
            control.OrderID = value;
            e.UpdatePanel.ContentTemplateContainer.Controls.Add(control);

        }

        protected void RadScheduler1_ApplintmentCreated(object sender, AppointmentCreatedEventArgs e)
        {
            if (!IsTooltify(RadToolTipManager3, e.Appointment.ClientID))
                RadToolTipManager3.TargetControls.Add(e.Appointment.ClientID, e.Appointment.ID.ToString(), true);
        }
    }
}