<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<TelerikMvcApplication.Controllers.PBModel>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadPanelBar
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadPanelBar - Declarative Items</h2>

    <% Html.BeginForm("DeclarativeItems", "PanelBar"); %>
    
    <table>
        <tr>
            <th colspan="2">Panel Behavior</th>
        </tr>
        <tr>
            <td>One panel opened at a time</td>
            <td><input type="radio" value="OnePanel" <%=Model.checkedOnePanel %> name="radioExpandMode" /></td>
        </tr>
        <tr>
            <td>Multiple panels opened at a time</td>
            <td><input type="radio" value="MultiplePanels" <%=Model.checkedMultiplePanels %> name="radioExpandMode" /></td>
        </tr>
    </table>
    <br />    
    <input type="submit" value="Change" />
    <br /><br />

    <div style="width:100px">
        <%
        Html.Telerik().PanelBar()
            .Name("myPanelBar")
            .ExpandMode(Model.ExpandMode)
            .Items(i =>
                       {
                           i.Add()
                               .Text("File")
                               .Items(subItem =>
                                          {
                                              subItem.Add().Text("New");
                                              subItem.Add().Text("Open");
                                              subItem.Add().Text("Save");
                                          });
                           i.Add()
                               .Text("Edit")
                               .Items(subItem =>
                                          {
                                              subItem.Add().Text("Cut");
                                              subItem.Add().Text("Copy");
                                              subItem.Add().Text("Past");
                                          });
                       }

            ).Render();
        
         %>

    </div>
    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "PanelBar")%>

</asp:Content>
