using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadDock_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        //Store the info about the added docks in the session.
        private List<DockState> CurrentDockStates
        {
            get
            {
                var _currentDockStates = (List<DockState>)Session["CurrentDockStates"];
                if (Object.Equals(_currentDockStates, null))
                {
                    _currentDockStates = new List<DockState>();
                    Session["CurrentDockStates"] = _currentDockStates;
                }
                return _currentDockStates;
            }
            set
            {
                Session["CurrentDockStates"] = value;
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            var dock = CreateRadDock();
            RadDockZone4.Controls.Add(dock);
            CreateSaveStateTrigger(dock);

            // Load the dock content
            dock.Tag = rcbContent.SelectedValue;
            dock.Title = rcbContent.SelectedItem.Text;
            LoadDockContent(dock);
        }

        protected void RadDockLayout3_SaveDockLayout(object sender, DockLayoutEventArgs e)
        {
            CurrentDockStates = RadDockLayout3.GetRegisteredDocksState();
        }

        protected void RadDockLayout3_LoadDockLayout(object sender, DockLayoutEventArgs e)
        {
            foreach (var state in CurrentDockStates)
            {
                e.Positions[state.UniqueName] = state.DockZoneID;
                e.Indices[state.UniqueName] = state.Index;
            }
        } 

        protected void Page_Init(object sender, EventArgs e)
        {
            foreach (var dock in from t in CurrentDockStates where t.Closed == false select CreateRadDockFromState(t))
            {
                RadDockLayout3.Controls.Add(dock);
                //Create a dock with state so on every action the app knows what to do
                CreateSaveStateTrigger(dock);
                //Load the dock content
                LoadDockContent(dock);
            }
        }

        private RadDock CreateRadDockFromState(DockState state)
        {
            var dock = new RadDock
                           {
                               DockMode = DockMode.Docked,
                               ID = string.Format("RadDock{0}", state.UniqueName),
                               EnableAnimation = true,
                               EnableRoundedCorners = true
                           };
            dock.ApplyState(state);
            dock.Commands.Add(new DockCloseCommand());
            dock.Commands.Add(new DockExpandCollapseCommand());

            return dock;
        }

        private RadDock CreateRadDock()
        {
            var dock = new RadDock
                           {
                               DockMode = DockMode.Docked,
                               UniqueName = Guid.NewGuid().ToString(),
                               EnableAnimation = true,
                               EnableRoundedCorners = true
                           };
            dock.ID = string.Format("RadDock{0}", dock.UniqueName);
            //dock.Title = "Dock";
            //dock.Text = string.Format("Added at {0}", DateTime.Now);
            dock.Width = Unit.Pixel(300);

            dock.Commands.Add(new DockCloseCommand());
            dock.Commands.Add(new DockExpandCollapseCommand());

            return dock;
        }

        private void CreateSaveStateTrigger(RadDock dock)
        {
            dock.AutoPostBack = true;
            dock.CommandsAutoPostBack = true;

            var saveStateTrigger = new AsyncPostBackTrigger {ControlID = dock.ID, EventName = "DockPositionChanged"};
            UpdatePanel2.Triggers.Add(saveStateTrigger);

            saveStateTrigger = new AsyncPostBackTrigger {ControlID = dock.ID, EventName = "Command"};
            UpdatePanel2.Triggers.Add(saveStateTrigger);
        }

        private void LoadDockContent(RadDock dock)
        {
            if (string.IsNullOrEmpty(dock.Tag)) return;
            var content = LoadControl(dock.Tag);
            dock.ContentContainer.Controls.Add(content);
        }


    }
    
}