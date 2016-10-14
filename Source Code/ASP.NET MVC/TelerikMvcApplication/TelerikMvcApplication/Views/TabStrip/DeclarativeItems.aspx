<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	TabStrip
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>TabStrip - DeclarativeItems</h2>

    <%
        Html.Telerik().TabStrip()
            .Name("myTab")
            .Items(t =>
                       {
                           t.Add().Text("File")
                               .Selected(true)
                               .Content(() =>
                                            {
                                            %>
                                                File content...
                                            <%
                                            });
                           t.Add().Text("Edit")
                               .Content(() =>
                                            {
                                            %>
                                                Edit content...
                                            <%
                                            });
                           t.Add().Text("Window")
                               .Content(() =>
                                            {
                                            %>
                                                Window content...
                                            <%
                                            });
                           t.Add().Text("View")
                               .Content(() =>
                                            {
                                            %>
                                                View content...
                                            <%
                                            });
                           t.Add().Text("Help")
                               .Content(() =>
                                            {
                                            %>
                                                Help content...
                                            <%
                                            });
                       }).Render();
         %>

    <br /><br />
    <%= Html.ActionLink("Return", "Index", "TabStrip") %>


</asp:Content>
