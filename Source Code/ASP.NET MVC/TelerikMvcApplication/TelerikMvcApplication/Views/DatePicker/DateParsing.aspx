<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadDatePicker
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadDatePicker - Date Parsing</h2>
    
    <%= Html.Telerik().DatePicker()
            .Name("pickDate")
            .Value(DateTime.Today)
                %>

    <br /><br />
    
    Try typing one of the predefined words for date parsing:
    <ul>
        <li>today</li>
        <li>tomorrow</li>
        <li>yesterday</li>
        <li>the name of one of the week days (example: saturday)</li>
        <li>"next" with the name of one of the week days (example: next monday)</li>
        <li>"next" with with either "day", "week", "month" or "year" (example: next month)</li>
        <li>"last" with the name of one of the week days (example: last sunday)</li>
        <li>"last" with with either "day", "week", "month" or "year" (example: next year)</li>
    </ul>
    
    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "DatePicker") %>
    

</asp:Content>
