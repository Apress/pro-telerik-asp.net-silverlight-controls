<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="radwindow_MinimizeZone.aspx.cs" Inherits="WebApplication1.radwindow_MinimizeZone" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <asp:Panel id="panelMinimizedZone" runat="server" style="width:100%; height:30px; border: 1px solid #000000">
    </asp:Panel>
    
    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    </telerik:RadScriptManager>
    <telerik:RadWindowManager ID="RadWindowManager1" runat="server">
        <Windows>
            <telerik:RadWindow ID="windowGoogle" runat="server" Width="600px" Height="450px" Title="Google" MinimizeZoneID="panelMinimizedZone">
            </telerik:RadWindow>
            <telerik:RadWindow ID="windowMicrosoft" runat="server" Width="600px" Height="450px" Title="Microsoft" MinimizeZoneID="panelMinimizedZone">
            </telerik:RadWindow>
            <telerik:RadWindow ID="windowTelerik" runat="server" Width="600px" Height="450px" Title="Telerik" MinimizeZoneID="panelMinimizedZone">
            </telerik:RadWindow>
        </Windows>
    </telerik:RadWindowManager>
    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
        <script language="javascript" type="text/javascript">
            function pageLoad() {
                window.setTimeout(function () {
                    var manager = $find("<%=RadWindowManager1.ClientID %>");
                    manager.open("http://www.google.com", "windowGoogle");
                    manager.open("http://www.microsoft.com", "windowMicrosoft");
                    manager.open("http://www.telerik.com", "windowTelerik");
                    manager.cascade();
                }, 0);
            }
        </script>
    </telerik:RadCodeBlock>
    </form>
</body>
</html>
