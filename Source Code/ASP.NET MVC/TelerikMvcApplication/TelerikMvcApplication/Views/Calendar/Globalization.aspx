<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Globalization
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadCalendar - Globalization</h2>

<% Html.BeginForm("Globalization", "Calendar", FormMethod.Get); %>    
    <select id="culture" name="culture">
         <option value="en-US">English</option>
         <option value="fr-FR">Francais</option>
         <option value="de-DE">Deutsch</option>
         <option value="bg-BG">Български</option>
    </select>
    
    <br />
    <input type="submit" value="Submit" />
    <br /><br />
    
<%= Html.Telerik().Calendar()
        .Name("CalendarGlobalization")
        .HtmlAttributes(new { style = "width: 294px;" })
%>

<% Html.EndForm(); %>

<br /><br />

<%= Html.ActionLink("Return", "Index", "Calendar") %>


<% Html.Telerik().ScriptRegistrar().Globalization(true); %>

</asp:Content>
