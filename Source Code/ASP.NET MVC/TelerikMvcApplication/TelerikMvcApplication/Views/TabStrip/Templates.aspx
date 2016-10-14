<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<TelerikMvcApplication.Models.Region>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadTabStrip
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadTabStrip - Item Content</h2>

    <%
        Html.Telerik().TabStrip()
            .Name("myTabs")
            .Items(t =>
                       {
                           t.Add()
                               .Text("Login")
                               .Selected(true)
                               .Content(() =>
                                            {
                                        %>
                                           <table>
                                            <tr>
                                                <th colspan="2">Credentials</th>
                                            </tr>
                                                <tr>
                                                    <td>Username:</td>
                                                    <td>
                                                        <%=Html.TextBox("Username")%>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Password:</td>
                                                    <td>
                                                        <%=Html.Password("Password")%>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" align="center"><input type="button" value="Login" /></td>
                                                </tr>
                                           </table> 
                                        <%
                                            });
                           t.Add()
                               .Text("Google Search")
                               .Content(() =>
                                            {
                                        %>
    <div id="cse" style="width: 100%;">Loading</div>
    <script src="http://www.google.com/jsapi" 
    type="text/javascript">
    </script>
    <script type="text/javascript">
        google.load('search', '1', { language: 'en' });
        google.setOnLoadCallback(function () {
            var customSearchControl =
    new google
    .search
    .CustomSearchControl(
        '013497957494942316161:q9_vrpus8gk');
            customSearchControl
    .setResultSetSize(google
    .search
    .Search
    .LARGE_RESULTSET);
            customSearchControl.draw('cse');
        }, true);
    </script>
    <link rel="stylesheet" 
    href="http://www.google.com/cse/style/look/default.css" 
    type="text/css" />                                             <%
                                            });
                       }).Render();
     %>

    <br /><br />
    <%= Html.ActionLink("Return", "Index", "TabStrip") %>

</asp:Content>
