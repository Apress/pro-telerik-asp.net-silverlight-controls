<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<TelerikMvcApplication.Controllers.DPModel>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadDatePicker
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadDatePicker - Min/Max/Selected Date</h2>
    
    <% Html.BeginForm("MinMaxDate", "DatePicker"); %>   
    <p>
        <%= Html.CheckBox("showDropDown", Model.showDropDown.Value) %>
            <label for="showDropDown">Show the dropdown button</label>
            <button type="submit">Apply</button>
    </p>
    
    <%= Html.Telerik().DatePicker()
            .Name("pickDate")
            .MinDate(DateTime.Today.AddDays(-3))
            .MaxDate(DateTime.Today.AddDays(3))
            .Value(DateTime.Today)
            .ShowButton(Model.showDropDown.Value)%>

    <% Html.EndForm(); %>
    
    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "DatePicker") %>
    
    

</asp:Content>
