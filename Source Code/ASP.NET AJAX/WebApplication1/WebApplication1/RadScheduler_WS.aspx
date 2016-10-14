<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RadScheduler_WS.aspx.cs" Inherits="WebApplication1.RadScheduler_WS" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <telerik:RadScriptManager ID="RadScriptManager1" runat="server" OutputCompression="Forced">
    </telerik:RadScriptManager>
    <telerik:RadScheduler ID="RadScheduler1" runat="server" 
        DataDescriptionField="Description" 
        DataEndField="End" 
        DataKeyField="ID" 
        DataRecurrenceField="RecurrenceRule"
        DataRecurrenceParentKeyField="RecurrenceParentID" 
        DataStartField="Start" 
        DataSubjectField="Subject" 
        Width="800px" SelectedView="MonthView">
        <WebServiceSettings Path="SchedulerWebService.asmx" />
    </telerik:RadScheduler>
    </form>
</body>
</html>
