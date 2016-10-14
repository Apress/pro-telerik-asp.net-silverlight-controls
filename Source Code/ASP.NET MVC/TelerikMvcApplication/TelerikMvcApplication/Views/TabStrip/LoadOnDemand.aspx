<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<TelerikMvcApplication.Models.Region>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadTabStrip
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadTabStrip - LoadOnDemand</h2>

     <%
        Html.Telerik().TabStrip()
            .Name("myTabs")
            .Items(p =>
                       {
                           p.Add()
                               .Text("Login")
                               .LoadContentFrom("AjaxLogin", "TabStrip");
                           p.Add()
                               .Text("Google Search")
                               .LoadContentFrom("AjaxGoogle", "TabStrip");
                       }).Render();
     %>

    <br /><br />
    <%= Html.ActionLink("Return", "Index", "TabStrip") %>

</asp:Content>
