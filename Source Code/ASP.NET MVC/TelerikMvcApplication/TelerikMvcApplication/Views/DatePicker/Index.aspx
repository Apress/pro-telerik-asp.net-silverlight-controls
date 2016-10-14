<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadDatePicker
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadDatePicker - Min/Max/Selected Date</h2>
    
    <%= Html.ActionLink("Run Example", "MinMaxDate", "DatePicker") %>

    <h2>RadDatePicker - Date Parsing</h2>
    
    <%= Html.ActionLink("Run Example", "DateParsing", "DatePicker") %>

    <h2>RadDatePicker - Globalization</h2>
    
    <%= Html.ActionLink("Run Example", "Globalization", "DatePicker") %>

    <h2>RadDatePicker - Client API</h2>
    
    <%= Html.ActionLink("Run Example", "ClientAPI", "DatePicker") %>

</asp:Content>
