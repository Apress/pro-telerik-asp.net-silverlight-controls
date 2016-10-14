<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadPanelBar
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadPanelBar - Client API</h2>

    <input type="button" value="Open PanelBar: File" onclick="openFile();" />
    <input type="button" value="Close PanelBar: File" onclick="closeFile();" />
    <input type="button" value="Disable PanelBar: Edit" onclick="disableEdit();" />
    <input type="button" value="Enable PanelBar: Edit" onclick="enableEdit();" />
    
    <br />
    
    <%=
        Html.Telerik().PanelBar()
            .Name("myPanelBar")
            .ClientEvents(e=>e
                .OnLoad("onLoad")
                .OnExpand("onExpand")
                .OnCollapse("onCollapse")
                .OnSelect("onSelect"))
            .Items(p =>
                       {
                           p.Add()
                               .Text("File")
                               .Items(i =>
                                          {
                                              i.Add().Text("New");
                                              i.Add().Text("Open");
                                              i.Add().Text("Save");
                                          });
                           p.Add()
                               .Text("Edit")
                               .Items(i =>
                                          {
                                              i.Add().Text("Cut");
                                              i.Add().Text("Copy");
                                              i.Add().Text("Paste");
                                          });
                       })
         %>
         
    <br /><br />
    <%= Html.ActionLink("Return", "Index", "PanelBar") %>
    <br /><br />

     <div id="logChanges"></div>
     
     <script type="text/javascript">
         function onLoad(sender) {
             var log = document.getElementById("logChanges");
             log.innerHTML = "Event: onLoad [PanelBar loaded succesfully]";
         }

         function onExpand(sender) {
             var item = $(sender.item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Event: onExpand [PanelBar item " + item.find("> .t-link").text() + " expanded]";
         }

         function onCollapse(sender) {
             var item = $(sender.item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Event: onCollapse [PanelBar item " + item.find("> .t-link").text() + " collapsed]";
         }

         function onSelect(sender) {
             var item = $(sender.item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Event: onSelect [PanelBar " + item.find("> .t-link").text() + " selected]";
         }

         function openFile() {
             var pb = $("#myPanelBar").data("tPanelBar");
             var item = $("> li", pb.element)[0];

             pb.expand(item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Opened PanelBar item File from client API";
         }

         function closeFile() {
             var pb = $("#myPanelBar").data("tPanelBar");
             var item = $("> li", pb.element)[0];

             pb.collapse(item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Closed PanelBar item File from client API";
         }

         function disableEdit() {
             var pb = $("#myPanelBar").data("tPanelBar");
             var item = $("> li", pb.element)[1];

             pb.disable(item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Disabled PanelBar item Edit from client API";
         }

         function enableEdit() {
             var pb = $("#myPanelBar").data("tPanelBar");
             var item = $("> li", pb.element)[1];

             pb.enable(item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Enabled PanelBar item Edit from client API";
         }
         
     </script>

</asp:Content>
