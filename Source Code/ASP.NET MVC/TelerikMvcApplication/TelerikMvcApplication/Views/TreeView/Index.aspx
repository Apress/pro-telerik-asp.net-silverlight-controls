<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<TelerikMvcApplication.Models.Region>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadTreeView
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadTreeView - Declarative Items</h2>
    
    <%= Html.ActionLink("Run Example", "DeclarativeItems", "TreeView") %>

    <h2>RadTreeView - Drag & Drop</h2>
    
    <%= Html.ActionLink("Run Example", "DragAndDrop", "TreeView") %>

    <h2>RadTreeView - Bind To Model</h2>
    
    <%= Html.ActionLink("Run Example", "BindToModel", "TreeView") %>

    <h2>RadTreeView - Templates</h2>
    
    <%= Html.ActionLink("Run Example", "Templates", "TreeView") %>

    <h2>RadTreeView - Load On Demand</h2>
    
    <%= Html.ActionLink("Run Example", "LoadOnDemand", "TreeView") %>

    <h2>RadTreeView - Client API</h2>
    
    <%= Html.ActionLink("Run Example", "ClientAPI", "TreeView") %>

</asp:Content>
