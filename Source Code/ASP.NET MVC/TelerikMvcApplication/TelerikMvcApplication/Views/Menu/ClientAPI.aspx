<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadMenu
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadMenu - Client API</h2>
    
    <input type="button" value="Open Menu: File" onclick="openFile();" />
    <input type="button" value="Close Menu: File" onclick="closeFile();" />
    <input type="button" value="Disable Menu: Edit" onclick="disableEdit();" />
    <input type="button" value="Enable Menu: Edit" onclick="enableEdit();" />
    
    <br />
    
    <%=
        Html.Telerik().Menu()
            .Name("myMenu")
            .ClientEvents(e=>e
                .OnLoad("onLoad")
                .OnOpen("onOpen")
                .OnClose("onClose")
                .OnSelect("onSelect"))
            .Items(menu =>
                       {
                           menu.Add()
                               .Text("File")
                               .Items(i =>
                                          {
                                              i.Add().Text("New");
                                              i.Add().Text("Open");
                                              i.Add().Text("Save");
                                          });
                           menu.Add()
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
    <%= Html.ActionLink("Return", "Index", "Menu") %>
    <br /><br />

     <div id="logChanges"></div>
     
     <script type="text/javascript">
         function onLoad(sender) {
             var log = document.getElementById("logChanges");
             log.innerHTML = "Event: onLoad [Menu loaded succesfully]";
         }

         function onOpen(sender) {
             var item = $(sender.item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Event: onOpen [Menu item " + item.find("> .t-link").text() + " opened]";
         }

         function onClose(sender) {
             var item = $(sender.item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Event: onClose [Menu item " + item.find("> .t-link").text() + " closed]";
         }

         function onSelect(sender) {
             var item = $(sender.item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Event: onSelect [Item " + item.find("> .t-link").text() + " selected]";
         }

         function openFile() {
             var menu = $("#myMenu").data("tMenu");
             var item = $("> li", menu.element)[0];

             menu.open(item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Opened menu item File from client API";
         }

         function closeFile() {
             var menu = $("#myMenu").data("tMenu");
             var item = $("> li", menu.element)[0];

             menu.close(item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Closed menu item File from client API";
         }

         function disableEdit() {
             var menu = $("#myMenu").data("tMenu");
             var item = $("> li", menu.element)[1];

             menu.disable(item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Disabled menu item Edit from client API";
         }

         function enableEdit() {
             var menu = $("#myMenu").data("tMenu");
             var item = $("> li", menu.element)[1];

             menu.enable(item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Enabled menu item Edit from client API";
         }
         
     </script>
     
     
</asp:Content>
