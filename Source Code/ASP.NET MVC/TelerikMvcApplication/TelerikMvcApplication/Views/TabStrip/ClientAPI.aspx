<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<TelerikMvcApplication.Models.Region>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadTabStrip
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadTabStrip - Client API</h2>

    <input type="button" value="Select Tab: File" onclick="openFile();" />
    <input type="button" value="Disable Tab: Edit" onclick="disableEdit();" />
    <input type="button" value="Enable Tab: Edit" onclick="enableEdit();" />
    
    <br />
    
    <%
        Html.Telerik().TabStrip()
            .Name("myTabs")
            .ClientEvents(e => e
                                   .OnLoad("onLoad")
                                   .OnSelect("onSelect"))
            .Items(t =>
                       {
                           t.Add().Text("File")
                               .Selected(true)
                               .Content(() =>
                                            {

                                            %>
                                                File content...
                                            <%
                                            });
                           t.Add().Text("Edit")
                               .Content(() =>
                                            {
                                            %>
                                                Edit content...
                                            <%
                                            });
                           t.Add().Text("Window")
                               .Content(() =>
                                            {
                                            %>
                                                Window content...
                                            <%
                                            });
                           t.Add().Text("View")
                               .Content(() =>
                                            {
                                            %>
                                                View content...
                                            <%
                                            });
                           t.Add().Text("Help")
                               .Content(() =>
                                            {
                                            %>
                                                Help content...
                                            <%
                                            });
                       }).Render();
         %>
         
    <br /><br />
    <%= Html.ActionLink("Return", "Index", "TabStrip") %>
    <br /><br />

     <div id="logChanges"></div>
     
     <script type="text/javascript">
         function onLoad(sender) {
             var log = document.getElementById("logChanges");
             log.innerHTML = "Event: onLoad [TabStrip loaded succesfully]";
         }

         function onSelect(sender) {
             var item = $(sender.item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Event: onSelect [Tab " + item.find("> .t-link").text() + " selected]";
         }

         function openFile() {
             var tab = $("#myTabs").data("tTabStrip");
             var item = $("li", tab.element)[0];

             tab.select(item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Selected Tab File from client API";
         }

         function disableEdit() {
             var tab = $("#myTabs").data("tTabStrip");
             var item = $("li", tab.element)[1];

             tab.disable(item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Disabled Tab Edit from client API";
         }

         function enableEdit() {
             var pb = $("#myTabs").data("tTabStrip");
             var item = $("li", pb.element)[1];

             pb.enable(item);
             var log = document.getElementById("logChanges");
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Enabled Tab Edit from client API";
         }
         
     </script>

</asp:Content>
