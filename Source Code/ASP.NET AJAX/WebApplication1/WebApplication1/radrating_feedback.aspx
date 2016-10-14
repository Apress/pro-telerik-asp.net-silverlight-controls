<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="radrating_feedback.aspx.cs" Inherits="WebApplication1.radrating_feedback" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <table>
            <tr>
                <td>Employee ID:</td>
                <td><%=Request.QueryString["Id"] %></td>
            </tr>
            <tr>
                <td>Employee Name:</td>
                <td><%=Request.QueryString["Name"] %></td>
            </tr>
            <tr>
                <td>Rating:</td>
                <td><%=Request.QueryString["Rating"] %></td>
            </tr>
            <tr>
                <td>Comments:</td>
                <td>
                    <asp:TextBox ID="txtComments" runat="server" TextMode="MultiLine" Columns="30" Rows="10">
                    </asp:TextBox>
                </td>
            </tr>
            <tr>
                <td colspan="2">&nbsp;</td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <asp:Button ID="btnClose" runat="server" OnClientClick="javascript:CloseWindow();return false;" Text="Close" />
                </td>
            </tr>
        </table>
    </div>
    <script language="javascript" type="text/javascript">
        function GetRadWindow() {
            var oWindow = null;
            if (window.radWindow) oWindow = window.radWindow;
            else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
            return oWindow;
        }

        function CloseWindow() {
            var arg = new Object();
            var txt = document.getElementById("<%=txtComments.ClientID %>");
            var fb = '<%=Request.QueryString["fb"] %>';
            var r = '<%=Request.QueryString["Rating"] %>';
            arg.comments = txt.value;
            arg.fb = fb;
            arg.rating = r;
            var wnd = GetRadWindow();
            wnd.close(arg);
        }
    </script>

    </form>
</body>
</html>
