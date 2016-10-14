<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadTabStrip
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadTabStrip - Declarative Items</h2>
    
    <%= Html.ActionLink("Run Example", "DeclarativeItems", "TabStrip") %>

    <h2>RadTabStrip - Bingind To Model</h2>
    
    <%= Html.ActionLink("Run Example", "BindToModel", "TabStrip") %>

    <h2>RadTabStrip - Content</h2>
    
    <%= Html.ActionLink("Run Example", "Templates", "TabStrip") %>

    <h2>RadTabStrip - Load On Demand</h2>
    
    <%= Html.ActionLink("Run Example", "LoadOnDemand", "TabStrip") %>

    <h2>RadTabStrip - Client API</h2>
    
    <%= Html.ActionLink("Run Example", "ClientAPI", "TabStrip") %>

</asp:Content>
