using System;
using System.Collections.Generic;
using System.Web.UI;
using Telerik.Web.UI.Calendar;
using DayRenderEventArgs = Telerik.Web.UI.Calendar.DayRenderEventArgs;

namespace WebApplication1
{
    public partial class RadCalendar_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
            List<DateTime> hoursList = new List<DateTime>();
            hoursList.Add(new DateTime(2010,04,07,3,8,9));
            hoursList.Add(new DateTime(2010,04,07,4,8,9));
            hoursList.Add(new DateTime(2010,04,07,5,8,9));
            hoursList.Add(new DateTime(2010,04,07,6,8,9));
            hoursList.Add(new DateTime(2010,04,07,7,8,9));
            hoursList.Add(new DateTime(2010,04,07,8,8,9));
            RadTimePicker2.TimeView.DataList.DataSource = hoursList;
            RadTimePicker2.TimeView.DataList.DataBind();
            RadDateTimePicker2.TimeView.DataList.DataSource = hoursList;
            RadDateTimePicker2.TimeView.DataList.DataBind();
        }

        protected void RadCalendar5_DayRender(object sender, DayRenderEventArgs e)
        {
            if (e.Day.Date.Day != 1) return;
            e.Cell.Style["background-color"] = "Yellow";
            e.Cell.Style["border-style"] = "solid";
            e.Cell.Style["border-width"] = "1px";
            e.Cell.Style["border-color"] = "Red";
            e.Cell.Style["color"] = "White";
        }

        protected void RadDatePicker4_SelectedDateChanged(object sender, SelectedDateChangedEventArgs e)
        {
            if (e.NewDate.HasValue)
                lblSelectedDate.Text = string.Format("You selected '{0}' from the server", e.NewDate.Value.ToShortDateString());
        }
    }
}