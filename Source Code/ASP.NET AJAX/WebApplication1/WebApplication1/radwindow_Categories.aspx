<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="radwindow_Categories.aspx.cs" Inherits="WebApplication1.radwindow_Categories" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:ListBox ID="lstCategories" runat="server" DataSourceID="SqlDataSource1" 
            DataTextField="CategoryName" DataValueField="CategoryID" Height="150px" 
            Width="250px"></asp:ListBox>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
            SelectCommand="SELECT [CategoryID], [CategoryName] FROM [Categories]">
        </asp:SqlDataSource>
        <br /><br />
        <asp:Button ID="btnClose" runat="server" OnClientClick="javascript:CloseWindow();return false;" Text="Close" />
        <script language="javascript" type="text/javascript">
            function GetRadWindow() {
                var oWindow = null;
                if (window.radWindow) oWindow = window.radWindow;
                else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
                return oWindow;
            }

            function CloseWindow() {
                var arg = new Object();
                var lst = document.getElementById("<%=lstCategories.ClientID %>");
                arg.CategoryID = lst.options[lst.selectedIndex].value;
                arg.CategoryName = lst.options[lst.selectedIndex].text;
                var wnd = GetRadWindow();
                wnd.close(arg);
            }
        </script>
    </div>
    </form>
</body>
</html>
