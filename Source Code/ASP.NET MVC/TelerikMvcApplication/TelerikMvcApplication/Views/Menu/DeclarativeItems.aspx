<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<TelerikMvcApplication.Controllers.MModel>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadMenu
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadMenu - Declarative Items</h2>
    
    <% Html.BeginForm("DeclarativeItems", "Menu"); %>
    
    <table>
        <tr>
            <th colspan="2">Change the Orientation</th>
        </tr>
        <tr>
            <td>Horizontal</td>
            <td><input type="radio" value="Horizontal" <%=Model.checkedHorizontal %> name="radioOrientation" /></td>
        </tr>
        <tr>
            <td>Vertical</td>
            <td><input type="radio" value="Vertical" <%=Model.checkedVertical %> name="radioOrientation" /></td>
        </tr>
    </table>
    <br />    
    <input type="submit" value="Change" />
    <br /><br />
    <div style="width:120px">
    <%=
        Html.Telerik().Menu()
            .Name("myMenu")
            .Orientation(Model.menuOrientation)
            .Items(menu =>
                       {
                           menu.Add()
                               .Text("File")
                               .Items(i =>
                                          {
                                              i.Add().Text("New");
                                              i.Add().Text("Open");
                                              i.Add().Text("Save");
                                          });
                           menu.Add()
                               .Text("Edit")
                               .Items(i =>
                                          {
                                              i.Add().Text("Cut");
                                              i.Add().Text("Copy");
                                              i.Add().Text("Paste");
                                          });
                       })
         %>
    </div>
    <% Html.EndForm(); %>

    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "Menu") %>

</asp:Content>
