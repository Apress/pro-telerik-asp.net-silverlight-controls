<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<TelerikMvcApplication.Controllers.NTBModel>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadNumericTextBox
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadNumericTextBox - Min/Max Values</h2>
    
    <p>Min Value: 0 / Max Value: 10</p>
    <%
        Html.BeginForm("MinMaxValues", "NumericTextBox"); %>
    <p>
        <%= Html.CheckBox("showSpinner", Model.showSpinner.Value) %>
        <label for="showSpinner">Show Spin Buttons</label>
        <button type="submit">Apply</button>
    </p>
    
    <%=
        Html.Telerik().NumericTextBox()
            .Name("NumericTextBox1")
            .MinValue(0)
            .MaxValue(10)
            .Value(3)
            .Spinners(Model.showSpinner.Value)
         %>

    <%
        Html.EndForm(); %>
    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "NumericTextBox")%>

</asp:Content>
