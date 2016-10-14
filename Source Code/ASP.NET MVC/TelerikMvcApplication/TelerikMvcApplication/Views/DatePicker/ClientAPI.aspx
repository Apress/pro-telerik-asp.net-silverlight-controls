<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadDatePicker
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadDatePicker - Client Side API</h2>

    <input type="button" value="Show Selected Date" onclick="showDate();" />
    <input type="button" value="Set Date to Tomorrow" onclick="setTomorrow();" />
    <input type="button" value="Open DatePicker" onclick="showDatePicker(event);" />
    <input type="button" value="Close DatePicker" onclick="hideDatePicker(event);" />
    <br /><br />

    <%= Html.Telerik().DatePicker()
            .Name("pickDate")
                .Value(DateTime.Today)
                .ClientEvents(e=>e
                    .OnChange("onChange")
                    .OnLoad("onLoad")
                    .OnOpen("onOpen")
                    .OnClose("onClose"))
            %>


    <br /><br />
    <%= Html.ActionLink("Return", "Index", "DatePicker") %>
    <br /><br />
        
    <div id="logChanges">
    </div>
    
    <script type="text/javascript">

        function showDate() {
            var picker = $("#pickDate").data("tDatePicker");
            var date = picker.value();
            var lbl = document.getElementById("logChanges");
            lbl.innerHTML = lbl.innerHTML + "<br />";
            lbl.innerHTML = lbl.innerHTML + "Selected Date: " + date;

            alert("Selected Date: " + date);
        }

        function setTomorrow() {
            var picker = $("#pickDate").data("tDatePicker");
            picker.value("tomorrow");
            var date = picker.value();
            var lbl = document.getElementById("logChanges");
            lbl.innerHTML = lbl.innerHTML + "<br />";
            lbl.innerHTML = lbl.innerHTML + "Changed Date to: " + date;

            alert("Changed Date to: " + date);
        }

        function showDatePicker(e) {
            var picker = $("#pickDate").data("tDatePicker");
            picker.showPopup();
            if (e.stopPropagation) 
                e.stopPropagation();
            e.cancelBubble = true;

            var lbl = document.getElementById("logChanges");
            lbl.innerHTML = lbl.innerHTML + "<br />";
            lbl.innerHTML = lbl.innerHTML + "DatePicker opened progrmamatically";
        }

        function hideDatePicker(e) {
            var picker = $("#pickDate").data("tDatePicker");
            picker.hidePopup();
            if (e.stopPropagation)
                e.stopPropagation();
            e.cancelBubble = true;
            var lbl = document.getElementById("logChanges");
            lbl.innerHTML = lbl.innerHTML + "<br />";
            lbl.innerHTML = lbl.innerHTML + "DatePicker closed programmatically";
        }
    
        function onLoad(sender) {
            var lbl = document.getElementById("logChanges");
            lbl.innerHTML = "Event: onLoad [DatePicker loaded succesfully]";
        }

        function onChange(sender) {
            var lbl = document.getElementById("logChanges");
            var newDate = $.telerik.formatString('{0:MM/dd/yyyy}', sender.date);
            var prevDate = $.telerik.formatString('{0:MM/dd/yyyy}', sender.previousDate);
            lbl.innerHTML = lbl.innerHTML + "<br />";
            lbl.innerHTML = lbl.innerHTML + "Event: onChange [New Date: " + newDate + "] [Previous Date: " + prevDate + "]";
        }


        function onOpen(sender) {
            var lbl = document.getElementById("logChanges");
            lbl.innerHTML = lbl.innerHTML + "<br />";
            lbl.innerHTML = lbl.innerHTML + "Event: onOpen [DatePicker opened]";
        }

        function onClose(sender) {
            var lbl = document.getElementById("logChanges");
            lbl.innerHTML = lbl.innerHTML + "<br />";
            lbl.innerHTML = lbl.innerHTML + "Event: onClose [DatePicker closed]";
        }

    </script>

</asp:Content>
