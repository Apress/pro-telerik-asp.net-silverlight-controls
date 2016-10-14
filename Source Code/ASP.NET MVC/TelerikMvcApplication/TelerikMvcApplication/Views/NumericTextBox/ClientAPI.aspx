<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadNumericTextBox
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadNumericTextBox - Client API</h2>
    
    <%= Html.TextBox("txtValue") %>
    <br />
    <input type="button" value="Change Value" onclick="setValue();" />
    <input type="button" value="Get Value" onclick="getValue();" />
    <br /><br />
    
    <%=
        Html.Telerik().NumericTextBox()
            .Name("numericTextBox")
            .ClientEvents(e=>e
                    .OnLoad("onLoad")
                    .OnChange("onChange")
                )
         %>
         
    <br /><br />
    <%= Html.ActionLink("Return", "Index", "NumericTextBox") %>
    <br /><br />
         
         
     <div id="logChanges"></div>
     
     <script type="text/javascript">
         function onLoad(sender) {
             var log = document.getElementById("logChanges");
             log.innerHTML = "Event: onLoad [NumericTextBox loaded succesfully]";
         }

         function onChange(sender) {
             var log = document.getElementById("logChanges");
             var newValue = sender.newValue;
             var oldValue = sender.oldValue;
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Event: onChange [New Value: " + newValue + "] [Previous Value: " + oldValue + "]";
         }

         function setValue() {
             var log = document.getElementById("logChanges");
             var txt = $("#txtValue");
             var newValue = txt.val();
             var nTxt = $("#numericTextBox").data("tTextBox");
             nTxt.value(newValue);
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Changed value to: " + newValue;
         }

         function getValue() {
             var log = document.getElementById("logChanges");
             var nTxt = $("#numericTextBox").data("tTextBox");
             var currentValue = nTxt.value();
             alert(currentValue);
             log.innerHTML = log.innerHTML + "<br />";
             log.innerHTML = log.innerHTML + "Get current value: " + currentValue;
         }
     </script>

</asp:Content>
