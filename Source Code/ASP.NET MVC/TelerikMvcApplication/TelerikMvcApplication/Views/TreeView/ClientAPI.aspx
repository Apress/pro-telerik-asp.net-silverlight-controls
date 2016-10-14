<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadTreeView
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadTreeView - Client Events</h2>

    <%
        Html.Telerik().TreeView()
            .Name("myTreeView")
            .DragAndDrop(d=>d
                    .Enabled(true))
            .ClientEvents(e=>e
                        .OnLoad("onLoad")                        
                        .OnSelect("onSelect")                        
                        .OnCollapse("onCollapse")                        
                        .OnExpand("onExpand")                                                
                        .OnNodeDragStart("onNodeDragStart")                        
                        .OnNodeDrop("onNodeDrop")                        
                        .OnNodeDropped("onNodeDropped")                        
                        .OnNodeDragCancelled("onNodeDragCancelled")
                        )
            .Items(t =>
                       {
                           t.Add()
                               .Text("File")
                               .Items(i =>
                                          {
                                              i.Add().Text("New");
                                              i.Add().Text("Open");
                                              i.Add().Text("Save");
                                          });
                           t.Add()
                               .Text("Edit")
                               .Items(i =>
                                          {
                                              i.Add().Text("Cut");
                                              i.Add().Text("Copy");
                                              i.Add().Text("Paste");
                                          });
                           t.Add()
                               .Text("Window")
                               .Items(i =>
                                          {
                                              i.Add().Text("Tile");
                                              i.Add().Text("Floating");
                                              i.Add().Text("Cascade");
                                          });
                       }).Render();
         %>

    <br /><br />

    <div id="logChanges"></div>

    <script type="text/javascript">
        function onLoad(sender) {
            var log = document.getElementById("logChanges");
            log.innerHTML = "Event: onLoad [TreeView loaded succesfully]";
        }
        function onExpand(sender) {
            var item = $(sender.item);
            var log = document.getElementById("logChanges");
            log.innerHTML = log.innerHTML + "<br />";
            log.innerHTML = log.innerHTML + "Event: onExpand [TreeView node " + item.text() + " expanded]";
        }

        function onCollapse(sender) {
            var item = $(sender.item);
            var log = document.getElementById("logChanges");
            log.innerHTML = log.innerHTML + "<br />";
            log.innerHTML = log.innerHTML + "Event: onCollapse [TreeView node " + item.text() + " collapsed]";
        }

        function onSelect(sender) {
            var item = $(sender.item);
            var log = document.getElementById("logChanges");
            log.innerHTML = log.innerHTML + "<br />";
            log.innerHTML = log.innerHTML + "Event: onSelect [TreeView node " + item.text() + " selected]";
        }

        function onNodeDragStart(sender) {
            var item = $(sender.item);
            var log = document.getElementById("logChanges");
            log.innerHTML = log.innerHTML + "<br />";
            log.innerHTML = log.innerHTML + "Event: onNodeDragStart [TreeView node " + item.text() + "]";
        }
        
        function onNodeDragCancelled(sender) {
            var item = $(sender.item);
            var log = document.getElementById("logChanges");
            log.innerHTML = log.innerHTML + "<br />";
            log.innerHTML = log.innerHTML + "Event: onNodeDragCancelled [TreeView node " + item.text() + "]";
        }
        
        function onNodeDrop(sender) {
            var item = $(sender.item);
            var log = document.getElementById("logChanges");
            log.innerHTML = log.innerHTML + "<br />";
            log.innerHTML = log.innerHTML + "Event: onNodeDrop [TreeView node " + item.text() + "]";
        }
        
        function onNodeDropped(sender) {
            var item = $(sender.item);
            var log = document.getElementById("logChanges");
            log.innerHTML = log.innerHTML + "<br />";
            log.innerHTML = log.innerHTML + "Event: onNodeDropped [TreeView node " + item.text() + "]";
        }
    </script>

    <h2>RadTreeView - Client Events</h2>

            <%=
                Html.Telerik().TreeView()
                    .Name("treeView_ClientBind")
                    .ClientEvents(e=>e.OnDataBinding("onDataBinding"))
        
         %>

    <script type="text/javascript">
        function onDataBinding(sender) {
            var treeview = $('#treeView_ClientBind').data('tTreeView');

            var jsonObject = [{ Value: "1", Text: "Product 1", Expanded: true, Items: [{ Value: "4", Text: "Product 4", Expanded: true, Items: [{ Value: "6", Text: "Product 6" }, { Value: "7", Text: "Product 7"}] }, { Value: "5", Text: "Product 5"}] }, { Value: "2", Text: "Product 2 (unavailable)", Enabled: false }, { Value: "3", Text: "Product 3"}]; 
            treeview.bindTo(jsonObject);
        }
    </script>

    <br /><br />
    <%= Html.ActionLink("Return", "Index", "PanelBar") %>


</asp:Content>
