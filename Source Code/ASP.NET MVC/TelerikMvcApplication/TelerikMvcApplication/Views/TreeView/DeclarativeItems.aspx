<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<TelerikMvcApplication.Controllers.TVModel>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadTreeView
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadTreeView - Declarative Items</h2>
    
    <% Html.BeginForm("DeclarativeItems", "TreeView"); %>
    
    <table>
        <tr>
            <th colspan="2">Checkboxes</th>
        </tr>
        <tr>
            <td>Enabled</td>
            <td>
                <%= Html.CheckBox("showCheckboxes", Model.showCheckboxes) %>
            </td>
        </tr>
    </table>
    <br />    
    <input type="submit" value="Change" />
    <br /><br />
    <%
        Html.Telerik().TreeView()
            .Name("myTreeView")
            .ShowCheckBox(Model.showCheckboxes.Value)
            .Items(t =>
                       {
                           t.Add()
                               .Text("File")
                               .Items(i =>
                                          {
                                              i.Add().Text("New");
                                              i.Add().Text("Open");
                                              i.Add().Text("Save");
                                          });
                           t.Add()
                               .Text("Edit")
                               .Items(i =>
                                          {
                                              i.Add().Text("Cut");
                                              i.Add().Text("Copy");
                                              i.Add().Text("Paste");
                                          });
                           t.Add()
                               .Text("Window")
                               .Items(i =>
                                          {
                                              i.Add().Text("Tile");
                                              i.Add().Text("Floating");
                                              i.Add().Text("Cascade");
                                          });
                       }).Render();
         %>

    <% Html.EndForm(); %>

    <br /><br />
    <%= Html.ActionLink("Return", "Index", "TreeView") %>


</asp:Content>
