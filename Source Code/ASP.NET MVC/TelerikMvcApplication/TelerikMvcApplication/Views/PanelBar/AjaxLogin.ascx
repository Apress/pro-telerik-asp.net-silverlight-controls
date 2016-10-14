<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

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
