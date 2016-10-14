<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadCalendar
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadCalendar - Min/Max/Selected Dates</h2>

    <%= Html.ActionLink("Run Example", "MinMaxDates", "Calendar") %>

    <h2>RadCalendar - Select Action</h2>

    <%= Html.ActionLink("Run Example", "SelectAction", "Calendar") %>

    <h2>RadCalendar - Globalization</h2>

    <%= Html.ActionLink("Run Example", "Globalization", "Calendar") %>

    <h2>RadCalendar - Client Side API</h2>

    <%= Html.ActionLink("Run Example", "ClientAPI", "Calendar") %>

</asp:Content>
