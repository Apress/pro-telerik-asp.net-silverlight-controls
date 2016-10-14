<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadGrid
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadGrid - Server Binding</h2>
    
    <%= Html.ActionLink("Run Example", "ServerBinding", "Grid") %>
    
    <h2>RadGrid - Ajax Binding</h2>

    <%= Html.ActionLink("Run Example", "AjaxBinding", "Grid") %>

    <h2>RadGrid - Web Service Binding</h2>

    <%= Html.ActionLink("Run Example", "WebServiceBinding", "Grid") %>

    <h2>RadGrid - Paging/Sorting/Filtering/Grouping/Scrolling</h2>

    <%= Html.ActionLink("Run Example", "GridOperations", "Grid") %>

    <h2>RadGrid - Server Editing</h2>

    <%= Html.ActionLink("Run Example", "ServerEditing", "Grid") %>

    <h2>RadGrid - Ajax Editing</h2>

    <%= Html.ActionLink("Run Example", "AjaxEditing", "Grid") %>

    <h2>RadGrid - Web Service Editing</h2>

    <%= Html.ActionLink("Run Example", "WebServiceEditing", "Grid") %>

    <h2>RadGrid - Templates</h2>

    <%= Html.ActionLink("Run Example", "Templates", "Grid") %>

    <h2>RadGrid - Client API</h2>

    <%= Html.ActionLink("Run Example", "ClientAPI", "Grid") %>

</asp:Content>
