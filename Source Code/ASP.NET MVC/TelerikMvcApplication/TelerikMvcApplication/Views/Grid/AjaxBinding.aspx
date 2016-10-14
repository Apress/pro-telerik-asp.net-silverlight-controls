<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>
<%@ Import Namespace="TelerikMvcApplication.Models" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadGrid
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadGrid - Ajax Binding</h2>

    <%
        Html.Telerik().Grid<RegionViewModel>()
            .Name("ajaxBindedGrid")
            .Columns(c =>
                         {
                             c.Bound(p => p.RegionID);
                             c.Bound(p => p.RegionDescription);
                         })
            .DataBinding(b => b.Ajax().Select("_AjaxBinding", "Grid"))
            .Groupable()
            .Pageable()
            .Sortable()
            .Filterable()
            .Render();
         %>

    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "Grid") %>

</asp:Content>
