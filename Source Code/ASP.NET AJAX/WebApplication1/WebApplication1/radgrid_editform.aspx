<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="radgrid_editform.aspx.cs" Inherits="WebApplication1.radgrid_editform" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <table>
        <tr>
            <th colspan="2">Category Details</th>
        </tr>
        <tr>
            <td>Name:</td>
            <td>
                <asp:TextBox ID="txtName" runat="server" 
                             MaxLength="15">
                </asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                                            ErrorMessage="*"
                                            ControlToValidate="txtName"
                                            Display="Dynamic">
                </asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>
                <asp:TextBox ID="txtDescription" runat="server" 
                             Columns="35"
                             Rows="7"
                             TextMode="MultiLine">
                </asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                                            ErrorMessage="*"
                                            ControlToValidate="txtDescription"
                                            Display="Dynamic">
                </asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td colspan="2">&nbsp;</td>
        </tr>
        <tr>
            <td colspan="2">
    			<asp:button id="btnUpdate" runat="server" 
                            text="Save"
                            OnClientClick="javascript:Save();return false;">
                </asp:button>
    			&nbsp;
    			<asp:button id="btnCancel" runat="server"
                            text="Cancel" 
                            causesvalidation="False"
                            OnClientClick="javascript:Cancel();return false;">
                </asp:button>
            </td>
        </tr>
    </table>
    <script language="javascript" type="text/javascript">
        function GetRadWindow() {
            var oWindow = null;
            if (window.radWindow) oWindow = window.radWindow;
            else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
            return oWindow;
        }

        function Save() {
            var arg = new Object();
            var txtn = document.getElementById("txtName");
            var txtd = document.getElementById("txtDescription");
            arg.id = '<%=Request.QueryString["id"] %>';
            arg.Name = txtn.value;
            arg.Description = txtd.value;
            var wnd = GetRadWindow();
            wnd.close(arg);
        }

        function Cancel() {
            var wnd = GetRadWindow();
            wnd.close();
        }

    </script>
    </form>
</body>
</html>
