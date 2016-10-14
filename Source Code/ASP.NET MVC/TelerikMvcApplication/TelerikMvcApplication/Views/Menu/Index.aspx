<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadMenu
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadMenu - Declarative Items</h2>
    
    <%= Html.ActionLink("Run Example", "DeclarativeItems", "Menu") %>

    <h2>RadMenu - Bingind To Model</h2>
    
    <%= Html.ActionLink("Run Example", "BindToModel", "Menu") %>

    <h2>RadMenu - Templates</h2>
    
    <%= Html.ActionLink("Run Example", "Templates", "Menu") %>

    <h2>RadMenu - Client API</h2>
    
    <%= Html.ActionLink("Run Example", "ClientAPI", "Menu") %>

</asp:Content>
