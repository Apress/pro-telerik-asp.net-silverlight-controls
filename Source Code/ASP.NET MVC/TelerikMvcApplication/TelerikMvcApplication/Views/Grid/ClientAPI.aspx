<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>
<%@ Import Namespace="TelerikMvcApplication.Models" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Grid's Client API
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Grid's Client API</h2>

    <input type="button" value="Go to Page 3" onclick="gotoPage(3);" />
    <input type="button" value="Sort by Product ID ASC" onclick="sortAsc();" />
    <input type="button" value="Show only products with ID lower than 10" onclick="filter10();" />
    <input type="button" value="Reset Grid" onclick="reset();" />

    <%
        Html.Telerik().Grid<ProductViewModel>()
            .Name("wsBindedGrid")
            .Columns(c =>
                         {
                             c.Bound(p => p.ProductID);
                             c.Bound(p => p.ProductName);
                         })
            .DataBinding(b => b.WebService().Select("~/Models/WS_Products.asmx/ListProducts"))
            .ClientEvents(e=>e
                .OnLoad("onLoad")
                .OnDataBinding("onDataBinding")
                .OnRowDataBound("onRowDataBound")
                .OnRowSelected("onRowSelected")
                .OnDataBound("onDataBound")
                )
            .Pageable()
            .Sortable()
            .Selectable()
            .Filterable()
            .Render();
         %>

    <br /><br />
    <%= Html.ActionLink("Return", "Index", "Grid") %>
    <br /><br />

    <div id="logChanges">
    </div>

        <script type="text/javascript">

            function gotoPage(page) {
                var grid = $('#wsBindedGrid').data('tGrid');
                grid.pageTo(page);
                var lbl = document.getElementById("logChanges");
                lbl.innerHTML = lbl.innerHTML + "<br />";
                lbl.innerHTML = lbl.innerHTML + "Navigated to page 3";
            }

            function sortAsc() {
                var grid = $('#wsBindedGrid').data('tGrid');
                grid.sort('ProductID-asc');
                var lbl = document.getElementById("logChanges");
                lbl.innerHTML = lbl.innerHTML + "<br />";
                lbl.innerHTML = lbl.innerHTML + "Sorted grid by ProductID ASC";
            }

            function filter10() {
                var grid = $('#wsBindedGrid').data('tGrid');
                grid.filter('ProductID~lt~10');
                var lbl = document.getElementById("logChanges");
                lbl.innerHTML = lbl.innerHTML + "<br />";
                lbl.innerHTML = lbl.innerHTML + "Filtered products with ProductID lower than 10";
            }

            function reset() {
                var grid = $('#wsBindedGrid').data('tGrid');
                grid.rebind();
                var lbl = document.getElementById("logChanges");
                lbl.innerHTML = lbl.innerHTML + "<br />";
                lbl.innerHTML = lbl.innerHTML + "Grid rebinded";
            }

            function onLoad(sender) {
                var lbl = document.getElementById("logChanges");
                lbl.innerHTML = "Event: onLoad [Grid loaded succesfully]";
            }

            function onDataBinding(sender) {
                var lbl = document.getElementById("logChanges");
                lbl.innerHTML = lbl.innerHTML + "<br />";
                lbl.innerHTML = lbl.innerHTML + "Event: onDataBinding [Grid binding]";
            }

            function onDataBound(sender) {
                var lbl = document.getElementById("logChanges");
                lbl.innerHTML = lbl.innerHTML + "<br />";
                lbl.innerHTML = lbl.innerHTML + "Event: onDataBound [Grid bound succesfully]";
            }

            function onRowDataBound(sender) {
                var lbl = document.getElementById("logChanges");
                var dataItem = sender.dataItem;
                lbl.innerHTML = lbl.innerHTML + "<br />";
                lbl.innerHTML = lbl.innerHTML + "Event: onRowDataBound [Product ID: " + dataItem.ProductID + "]";
            }
            function onRowSelected(sender) {
                var lbl = document.getElementById("logChanges");
                var row = sender.row;
                lbl.innerHTML = lbl.innerHTML + "<br />";
                lbl.innerHTML = lbl.innerHTML + "Event: onRowSelected [Product ID: " + row.cells[0].innerHTML + "]";
            }

        
    </script>
</asp:Content>
