<%@ Page Title="RadCalendar" Language="C#" MasterPageFile="~/Site.Master" MaintainScrollPositionOnPostback="true" AutoEventWireup="true" CodeBehind="RadCalendar_Page.aspx.cs" Inherits="WebApplication1.RadCalendar_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Single View Mode and Multi View Mode</h1>
    <telerik:RadCalendar ID="RadCalendar1" runat="server"></telerik:RadCalendar>
    <br />
    <telerik:RadCalendar ID="RadCalendar2" runat="server" MultiViewColumns="3" 
        AutoPostBack="True" CssClass="RadCalendarMultiView_Default" MultiViewRows="2"
        EnableMultiSelect="False" SelectedDate="" ViewSelectorText="x">
    </telerik:RadCalendar>
    <br /><br />
    <h1>Special Days & DayTemplates</h1>
<telerik:RadCalendar ID="RadCalendar3" runat="server" AutoPostBack="true">
    <SpecialDays>
        <telerik:RadCalendarDay IsToday="true" Repeatable="Today">
            <ItemStyle BorderColor="Red" BorderStyle="Solid" Font-Bold="true" />
        </telerik:RadCalendarDay>
        <telerik:RadCalendarDay Date="2010/01/25" Repeatable="DayAndMonth" IsSelectable="false">
            <ItemStyle CssClass="disabled_date" />
        </telerik:RadCalendarDay>
        <telerik:RadCalendarDay Date="2010/01/26" Repeatable="DayAndMonth" IsSelectable="false" >
            <ItemStyle CssClass="disabled_date" />
        </telerik:RadCalendarDay>
        <telerik:RadCalendarDay Date="2010/01/27" Repeatable="DayAndMonth" IsSelectable="false" >
            <ItemStyle CssClass="disabled_date" />
        </telerik:RadCalendarDay>
        <telerik:RadCalendarDay Date="2010/01/28" Repeatable="DayAndMonth" IsSelectable="false" >
            <ItemStyle CssClass="disabled_date" />
        </telerik:RadCalendarDay>
        <telerik:RadCalendarDay Date="2010/01/29" Repeatable="DayAndMonth" IsSelectable="false" >
            <ItemStyle CssClass="disabled_date" />
        </telerik:RadCalendarDay>
        <telerik:RadCalendarDay Date="2010/02/01" Repeatable="DayAndMonth" IsSelectable="false" TemplateID="VisitDoctor" />
    </SpecialDays>
    <CalendarDayTemplates>
        <telerik:DayTemplate ID="VisitDoctor" runat="server">
            <Content>
                <div>D</div>
            </Content>
        </telerik:DayTemplate>
    </CalendarDayTemplates>
</telerik:RadCalendar>
    <br /><br />
    <h1>Localization and Globalization</h1>
    <table cellspacing="10">
        <tr>
            <td>
    <telerik:RadCalendar ID="RadCalendar4" runat="server" CultureInfo="fr-FR" 
        DayNameFormat="Short" >
    </telerik:RadCalendar>
    </td>
    <td>
    <telerik:RadCalendar ID="RadCalendar41" runat="server" CultureInfo="he-IL" 
        DayNameFormat="Short">
    </telerik:RadCalendar>
            </td>
        </tr>
    </table>
        <br /><br />
    <h1>Handling the DayRender Event</h1>
    <telerik:RadCalendar ID="RadCalendar5" runat="server" AutoPostBack="true" OnDayRender="RadCalendar5_DayRender">
    </telerik:RadCalendar>
    <br />
    <telerik:RadCalendar ID="RadCalendar6" runat="server" AutoPostBack="false">
    <ClientEvents OnDayRender="ClientDayRender" />
    </telerik:RadCalendar>

    <script language="javascript" type="text/javascript">
        function ClientDayRender(sender, eventArgs) {
            var cell = eventArgs.get_cell();
            var day = eventArgs.get_renderDay();
            if (day) {
                if (eventArgs.get_date()[2] == 1) {
                    cell.style.backgroundColor = "Yellow";
                    cell.style.borderColor = "Red";
                    cell.style.borderStyle = "solid";
                    cell.style.borderWidth = "1px";
                }
            }
        }
    </script>
        <br /><br />
    <h1>RadDatePicker Allowed Date Range</h1>
    <telerik:RadDatePicker ID="RadDatePicker1" runat="server" MinDate="2010/01/15" MaxDate="2010/01/31">
    </telerik:RadDatePicker>
        <br /><br />
    <h1>RadDatePicker Shared Calendars</h1>
    <telerik:RadDatePicker ID="RadDatePicker2" runat="server" SharedCalendarID="RadCalendar7">
    </telerik:RadDatePicker>
    <telerik:RadDatePicker ID="RadDatePicker3" runat="server" SharedCalendarID="RadCalendar7">
    </telerik:RadDatePicker>
    <telerik:RadCalendar ID="RadCalendar7" runat="server"></telerik:RadCalendar>    
        <br /><br />
    <h1>RadDatePicker Catching the Selected Date</h1>
    <telerik:RadDatePicker ID="RadDatePicker4" runat="server" AutoPostBack="true" OnSelectedDateChanged="RadDatePicker4_SelectedDateChanged">
    </telerik:RadDatePicker>
    <br />
    <asp:Label ID="lblSelectedDate" runat="server"></asp:Label>
    <br />
    <telerik:RadDatePicker ID="RadDatePicker5" runat="server">
    <ClientEvents OnDateSelected="ClientDateSelected" />
    </telerik:RadDatePicker>
    <br />
    <asp:Label ID="lblClientSelectedDate" runat="server"></asp:Label>
    <br />
    <script language="javascript" type="text/javascript">
        function ClientDateSelected(sender, eventArgs) {
            $get("<%=lblClientSelectedDate.ClientID %>").innerHTML = "You selected '" + eventArgs.get_newDate().getMonth()+1 + '/' + eventArgs.get_newDate().getDate() + '/' + eventArgs.get_newDate().getFullYear() + "' from the client";
        }
    </script>
        <br /><br />
    <h1>RadTimePicker & RadDateTimePicker</h1>
    <telerik:RadTimePicker ID="RadTimePicker1" runat="server">
    </telerik:RadTimePicker>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <telerik:RadDateTimePicker ID="RadDateTimePicker1" runat="server">
    </telerik:RadDateTimePicker>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</asp:Content>
