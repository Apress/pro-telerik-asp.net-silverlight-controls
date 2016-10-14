<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadNumericTextBox
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadNumericTextBox - Min/Max Values</h2>
    
    <%= Html.ActionLink("Run Example", "MinMaxValues", "NumericTextBox") %>

    <h2>RadNumericTextBox - Server Validation</h2>
    
    <%= Html.ActionLink("Run Example", "ServerValidation", "NumericTextBox") %>

    <h2>RadNumericTextBox - Client Validation</h2>
    
    <%= Html.ActionLink("Run Example", "ClientValidation", "NumericTextBox") %>

    <h2>RadNumericTextBox - Globalization</h2>
    
    <%= Html.ActionLink("Run Example", "Globalization", "NumericTextBox") %>

    <h2>RadNumericTextBox - Client API</h2>
    
    <%= Html.ActionLink("Run Example", "ClientAPI", "NumericTextBox") %>

</asp:Content>
