<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadCalendar
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadCalendar - Min/Max/Selected Date</h2>

    <% Html.Telerik()
           .Calendar()
           .Name("Calendar1")
           .MinDate(DateTime.Today.AddDays(-3))
           .MaxDate(DateTime.Today.AddDays(3))
           .Value(DateTime.Today)
           .Render(); %>   

    <br /><br />

    <%= Html.ActionLink("Return", "Index", "Calendar") %>

</asp:Content>
