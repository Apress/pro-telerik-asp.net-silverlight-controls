<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadPanelBar
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadPanelBar - Declarative Items</h2>
    
    <%= Html.ActionLink("Run Example", "DeclarativeItems", "PanelBar") %>

    <h2>RadPanelBar - Bind To Model</h2>
    
    <%= Html.ActionLink("Run Example", "BindToModel", "PanelBar") %>

    <h2>RadPanelBar - Templates</h2>

    <%= Html.ActionLink("Run Example", "Templates", "PanelBar") %>
    
    <h2>RadPanelBar - Load On Demand</h2>

    <%= Html.ActionLink("Run Example", "LoadOnDemand", "PanelBar") %>
    
    <h2>RadPanelBar - Client API</h2>

    <%= Html.ActionLink("Run Example", "ClientAPI", "PanelBar") %>
    
</asp:Content>
