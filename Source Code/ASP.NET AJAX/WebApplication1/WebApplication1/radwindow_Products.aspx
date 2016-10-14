<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="radwindow_Products.aspx.cs" Inherits="WebApplication1.radwindow_Products" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
        <asp:Button ID="btnCategories" runat="server" OnClientClick="javascript:OpenCategoriesWindow();return false;" Text="Load products from category" />
        <br />
        <asp:Label ID="lblCategory" runat="server"></asp:Label><br />
        <asp:ListBox ID="lstProducts" runat="server" Height="200px" Width="300px">
        </asp:ListBox>
        <telerik:RadWindow ID="CategoriesRadWindow" runat="server" Width="300px" Height="300px" Title="Categories"
                           OnClientClose="CategorySelected" Modal="true">
        </telerik:RadWindow>
        <br /><br />
        <asp:Button ID="btnClose" runat="server" OnClientClick="javascript:CloseWindow();return false;" Text="Close" />
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
            var lst = document.getElementById("<%=lstProducts.ClientID %>");
            arg.ProductName = lst.options[lst.selectedIndex].text;
            var wnd = GetRadWindow();
            wnd.close(arg);
        }

        function OpenCategoriesWindow() {
            var wnd = $find("<%=CategoriesRadWindow.ClientID %>");
            wnd.setUrl("radwindow_Categories.aspx");
            wnd.show();
        }

        function CategorySelected(sender, eventArgs) {
            var arg = eventArgs.get_argument();

            if (arg) {
                $get("<%=lblCategory.ClientID %>").innerHTML = "Select products from category: " + arg.CategoryName;
                window.location = "radwindow_Products.aspx?cat=" + arg.CategoryID;
            }
        }
        
    </script>

    </form>
</body>
</html>
