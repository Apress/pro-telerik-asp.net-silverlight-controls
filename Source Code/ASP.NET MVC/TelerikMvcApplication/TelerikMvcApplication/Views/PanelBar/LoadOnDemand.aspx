<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadPanelBar
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadPanelBar - Load On Demand</h2>

    <div style="width:400px">
            <%
            Html.Telerik().PanelBar()
                .Name("myPanelBar")
                .ExpandMode(PanelBarExpandMode.Single)
                .Items(p =>
                           {
                               p.Add()
                                   .Text("Login")
                                   .LoadContentFrom("AjaxLogin", "PanelBar");
                               p.Add()
                                   .Text("Google Search")
                                   .LoadContentFrom("AjaxGoogle", "PanelBar");
                           }).Render();
         %>
    </div>
    <br /><br />
    <%= Html.ActionLink("Return", "Index", "PanelBar") %>

</asp:Content>
