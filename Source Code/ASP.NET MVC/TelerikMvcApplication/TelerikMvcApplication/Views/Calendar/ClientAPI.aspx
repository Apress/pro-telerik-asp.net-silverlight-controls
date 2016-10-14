<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadCalendar
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadCalendar - Client Side API</h2>
    
    <%= Html.Telerik().DatePicker()
            .Name("pickDate")
            .Value(DateTime.Today) %>
            
    <input type="button" value="Set New Date" onclick="setNewDate();" />
    <br /><br />
    
    <%= Html.Telerik().Calendar()
            .Name("MyCalendar")
            .ClientEvents(e=>e
                    .OnChange("onChange")
                    .OnLoad("onLoad"))
    %>

    <br /><br />
    <%= Html.ActionLink("Return", "Index", "Calendar") %>
    <br /><br />
    
    <div id="logChanges">
    </div>

    <script type="text/javascript">
        function onLoad(sender) {
            var lbl = document.getElementById("logChanges");
            lbl.innerHTML = "Event: onLoad [Calendar loaded succesfully]";
        }

        function onChange(sender) {
            var lbl = document.getElementById("logChanges");
            var newDate = $.telerik.formatString('{0:MM/dd/yyyy}', sender.date);
            var prevDate = $.telerik.formatString('{0:MM/dd/yyyy}', sender.previousDate);
            lbl.innerHTML = lbl.innerHTML + "<br />";
            lbl.innerHTML = lbl.innerHTML + "Event: onChange [New Date: " + newDate + "] [Previous Date: " + prevDate + "]";
        }

        function setNewDate() {
            var picker = $("#pickDate").data("tDatePicker");
            var newDate = picker.value();
            var calendar = $("#MyCalendar").data("tCalendar");
            calendar.value(newDate);
            var newDateFormated = $.telerik.formatString('{0:MM/dd/yyyy}', newDate);
            var lbl = document.getElementById("logChanges");
            lbl.innerHTML = lbl.innerHTML + "<br />";
            lbl.innerHTML = lbl.innerHTML + "Changed Date To: " + newDateFormated;
        }
        
    </script>


</asp:Content>
