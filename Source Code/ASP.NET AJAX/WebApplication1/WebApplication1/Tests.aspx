<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Tests.aspx.cs" Inherits="WebApplication1.Tests" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <title>RadSplitter</title>
    </head>
    <body>
        <form id="form1" runat="server">
            <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
            </telerik:RadScriptManager>
    <telerik:RadSplitter ID="RadSplitter3" runat="server" Width="100%" Height="500px" Orientation="Horizontal">
        <telerik:RadPane ID="RadPane5" Runat="server" Width="100%" Height="50%" Scrolling="None">
            <telerik:RadSplitter ID="RadSplitter4" runat="server" Orientation="Vertical" Width="100%" Height="100%">
                <telerik:RadPane ID="RadPane6" runat="server" Width="33%" Height="100%" Scrolling="None" ContentUrl="http://www.telerik.com">
                </telerik:RadPane>
                <telerik:RadSplitBar ID="RadSplitBar3" runat="server" CollapseMode="Backward" />
                <telerik:RadPane ID="RadPane7" runat="server" Width="34%" Height="100%" Scrolling="None" ContentUrl="http://www.microsoft.com">
                </telerik:RadPane>
                <telerik:RadSplitBar ID="RadSplitBar5" runat="server" CollapseMode="Forward" />
                <telerik:RadPane ID="RadPane9" runat="server" Width="33%" Height="100%" Scrolling="None" ContentUrl="http://www.google.com">
                </telerik:RadPane>
            </telerik:RadSplitter>
        </telerik:RadPane>
        <telerik:RadSplitBar ID="RadSplitBar4" Runat="server" Width="100%" EnableResize="true" CollapseMode=" />
        <telerik:RadPane ID="RadPane8" Runat="server" Width="100%" Height="50%" Scrolling="None" ContentUrl="http://www.cswsolutions.com">
        </telerik:RadPane>
    </telerik:RadSplitter>

        </form>
    </body>
</html>
