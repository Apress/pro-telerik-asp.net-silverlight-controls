<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<TelerikMvcApplication.Controllers.NTBModel>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadNumericTextBox
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadNumericTextBox - Server Validation</h2>
    
    <p>A value is required and must be between 0 and 10</p>
    
    <% Html.BeginForm("ServerValidation", "NumericTextBox"); %>
    
    <%=
       Html.Telerik().NumericTextBox()
           .Name("numericTextBox")
           .Value(Model.value)
            %>
    <%= Html.ValidationMessage("numericTextBox") %>
    <p>
    <input type="submit" value="Make Post" />
    </p>
    <% Html.EndForm(); %>
    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "NumericTextBox")%>

</asp:Content>
