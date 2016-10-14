<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<TelerikMvcApplication.Models.Product>>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadGrid
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadGrid - Server Binding</h2>
    
    <%
        Html.Telerik().Grid(Model)
            .Name("serverBindedGrid")
            .Columns(c =>
                         {
                             c.Bound(p => p.ProductID);
                             c.Bound(p => p.ProductName);
                             c.Bound(p => p.Category.CategoryName);
                             c.Bound(p => p.UnitPrice).Format("{0:c}");
                             c.Bound(p => p.Discontinued);
                         })
            .Groupable()
            .Pageable()
            .Sortable()
            .Filterable()
            .Render();
         %>

    <br /><br />

<%= Html.ActionLink("Return", "Index", "Grid") %>

</asp:Content>
