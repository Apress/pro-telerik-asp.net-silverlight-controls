<%@ Page Title="RadDock" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadDock_Page.aspx.cs" Inherits="WebApplication1.RadDock_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>RadDock, RadDockZone and RadDockLayout</h1>
    <telerik:RadDockLayout ID="RadDockLayout1" runat="server">
        <table style="width:600px" cellspacing="5" cellpadding="5">
            <tr>
                <td style="width:50%">
                    <telerik:RadDockZone ID="RadDockZone1" runat="server" Height="300px" Width="100%">
                        <telerik:RadDock ID="RadDock1" runat="server" Title="Calendar Dock" EnableAnimation="true" EnableRoundedCorners="true" DockMode="Docked">
                        <ContentTemplate>
                            <telerik:RadCalendar ID="RadCalendar1" runat="server">
                            </telerik:RadCalendar>
                        </ContentTemplate>
                        </telerik:RadDock>
                        <telerik:RadDock ID="RadDock2" runat="server" Title="Text Dock" EnableAnimation="true" EnableRoundedCorners="true" DockMode="Docked">
                        <ContentTemplate>
                            This is a simple text.
                        </ContentTemplate>
                        </telerik:RadDock>
                    </telerik:RadDockZone>
                </td>
                <td style="width:50%">
                    <telerik:RadDockZone ID="RadDockZone2" runat="server" Height="300px" Width="100%">
                        <telerik:RadDock ID="RadDock3" runat="server" Title="Pin/UnPin Dock" EnableAnimation="true" EnableRoundedCorners="true" DefaultCommands="All">
                        <ContentTemplate>
                            This dock is floating enabled. Just drag it outside any area to enable the pin command.
                            <br /><br />
                            Pin the dock and verify that you can't move it.
                        </ContentTemplate>
                        </telerik:RadDock>
                    </telerik:RadDockZone>
                </td>
            </tr>
        </table>
    </telerik:RadDockLayout>
    <br /><br />
    <h1>Custom Commands</h1>
    <telerik:RadDockLayout ID="RadDockLayout2" runat="server">
    <table width="300px" cellspacing="5" cellpadding="5">
        <tr>
            <td style="width:100%">
                <telerik:RadDockZone ID="RadDockZone3" runat="server" Height="300px" Width="100%">
                    <telerik:RadDock ID="RadDock4" runat="server" Title="Calendar Dock" 
                                     EnableAnimation="true" EnableRoundedCorners="true" 
                                     DockMode="Docked">
                    <ContentTemplate>
                        <telerik:RadCalendar ID="RadCalendar2" runat="server">
                        </telerik:RadCalendar>
                    </ContentTemplate>
                    <Commands>
                        <telerik:DockCommand Text="Set Today's Date" OnClientCommand="SetToday" Name="SetTodayDate" />
                        <telerik:DockCloseCommand />
                        <telerik:DockExpandCollapseCommand />
                    </Commands>
                    </telerik:RadDock>
                </telerik:RadDockZone>
            </td>
        </tr>
    </table>
    </telerik:RadDockLayout>
    <script type="text/javascript" language="javascript">
        function SetToday(sender, eventArgs) {
            var calendar = $find("<%=RadCalendar2.ClientID %>");
            var todaysDate = new Date();
            var todayTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
            calendar.selectDate(todayTriplet, true);
        }
    </script>
    <br /><br />
    <h1>Dynamically Created RadDocks</h1>
        <telerik:RadComboBox ID="rcbContent" runat="server">
            <Items>
                <telerik:RadComboBoxItem Text="Login Box" Value="login.ascx" Selected="true" />
                <telerik:RadComboBoxItem Text="Sales Chart" Value="Chart.ascx" />
            </Items>
        </telerik:RadComboBox>
       <asp:Button ID="Button1" runat="server" Text="Add Dock" OnClick="Button1_Click" />
       <br />
        <asp:UpdatePanel runat="server" ID="UpdatePanel2" ChildrenAsTriggers="false" UpdateMode="Conditional">
            <ContentTemplate>
               <telerik:RadDockLayout ID="RadDockLayout3" runat="server" 
                                      OnSaveDockLayout="RadDockLayout3_SaveDockLayout"
                                      OnLoadDockLayout="RadDockLayout3_LoadDockLayout">
                <table style="width:600px" cellspacing="5" cellpadding="5">
                    <tr>
                        <td style="width:50%">
                             <telerik:RadDockZone ID="RadDockZone4" runat="server"  Width="100%" Height="200px">
                             </telerik:RadDockZone>
                        </td>
                        <td style="width:50%">
                             <telerik:RadDockZone ID="RadDockZone5" runat="server" Width="100%" Height="200px">
                             </telerik:RadDockZone>
                        </td>
                    </tr>
                </table>
              </telerik:RadDockLayout>
        </ContentTemplate>
        <Triggers>
            <asp:AsyncPostBackTrigger ControlID="Button1" EventName="Click" />
        </Triggers>
    </asp:UpdatePanel>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</asp:Content>
