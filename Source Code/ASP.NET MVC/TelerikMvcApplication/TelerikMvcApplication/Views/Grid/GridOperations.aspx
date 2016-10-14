<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<TelerikMvcApplication.Models.Product>>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	GridOperations
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadGrid - Paging/Sorting/Filtering/Grouping/Scrolling</h2>
    
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
            .Groupable(g=>g.Enabled(true))
            .Pageable(p=>p.Enabled(true)
                            .PageSize(10)
                            .Position(GridPagerPosition.Both)
                            .Style(GridPagerStyles.NextPreviousAndNumeric | GridPagerStyles.PageInput))
            .Sortable(s=>s.Enabled(true)
                        .SortMode(GridSortMode.MultipleColumn))
            .Filterable(f=>f.Enabled(true))
            .Scrollable(s=>s.Enabled(true)
                            .Height(200))
            .Render(); 
         %>

    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "Grid") %>

</asp:Content>
