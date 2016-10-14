<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<TelerikMvcApplication.Controllers.NTBModel>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadNumericTextBox
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadNumericTextBox - Client Validation</h2>
    
    <% Html.BeginForm("ClientValidation", "NumericTextBox"); %>
    
    <%= 
        Html.Telerik().NumericTextBox()
            .Name("numericTextBox")
            .Value(Model.numericTextBox)
        %>
        
        <div class="error"><%= Html.ValidationMessageFor(x=>x.numericTextBox) %></div>
        
        <p>
            <input type="submit" value="Make Post" />
        </p>
    
    <% Html.EndForm(); %>
    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "NumericTextBox")%>

</asp:Content>
