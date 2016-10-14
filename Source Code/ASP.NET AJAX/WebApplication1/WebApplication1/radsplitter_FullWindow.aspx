<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="radsplitter_FullWindow.aspx.cs" Inherits="WebApplication1.radsplitter_FullWindow" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">  
    html, body, form  
    {  
        height: 100%;  
        margin: 0px;  
        padding: 0px;  
        overflow: hidden;  
    }  
    </style>  
</head>
<body>
    <form id="form1" runat="server">
        <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
        </telerik:RadScriptManager>
        <telerik:RadSplitter ID="RadSplitter1" runat="server" Width="100%" 
            Height="100%" FullScreenMode="True" SplitBarsSize="">
            <telerik:RadPane ID="RadPane3" runat="server" Width="100%" Height="100%" ContentUrl="http://www.telerik.com">
            </telerik:RadPane>
            <telerik:RadSplitBar ID="RadSplitBar2" runat="server" />
            <telerik:RadPane ID="RadPane4" runat="server" Width="100%" Height="100%" ContentUrl="http://www.microsoft.com">
            </telerik:RadPane>
        </telerik:RadSplitter>
    </form>
</body>
</html>
