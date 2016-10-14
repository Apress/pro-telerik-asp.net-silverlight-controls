<%@ Page Title="RadSplitter" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadSplitter_Page.aspx.cs" Inherits="WebApplication1.RadSplitter_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Splitting the page</h1>
    <telerik:RadSplitter ID="RadSplitter1" runat="server" Width="100%" Height="300px" Orientation="Horizontal">
        <telerik:RadPane ID="RadPane1" Runat="server" Width="100%" Height="50%">
            <telerik:RadSplitter ID="RadSplitter2" runat="server" Orientation="Vertical" Width="100%" Height="100%">
                <telerik:RadPane ID="RadPane3" runat="server" Width="50%" Height="100%" ContentUrl="http://www.telerik.com">
                </telerik:RadPane>
                <telerik:RadSplitBar ID="RadSplitBar2" runat="server" />
                <telerik:RadPane ID="RadPane4" runat="server" Width="50%" Height="100%" ContentUrl="http://www.microsoft.com">
                </telerik:RadPane>
            </telerik:RadSplitter>
        </telerik:RadPane>
        <telerik:RadSplitBar ID="RadSplitBar1" Runat="server" Width="100%" EnableResize="true" />
        <telerik:RadPane ID="RadPane2" Runat="server" Width="100%" Height="50%" ContentUrl="http://www.cswsolutions.com">
        </telerik:RadPane>
    </telerik:RadSplitter>
    <br /><br />
    <h1>Collapsible Panes</h1>
    <telerik:RadSplitter ID="RadSplitter3" runat="server" Width="100%" Height="300px" Orientation="Horizontal">
        <telerik:RadPane ID="RadPane5" Runat="server" Width="100%" Height="50%">
            <telerik:RadSplitter ID="RadSplitter4" runat="server" Orientation="Vertical" Width="100%" Height="100%">
                <telerik:RadPane ID="RadPane6" runat="server" Width="33%" Height="100%" ContentUrl="http://www.telerik.com">
                </telerik:RadPane>
                <telerik:RadSplitBar ID="RadSplitBar3" runat="server" CollapseMode="Backward" />
                <telerik:RadPane ID="RadPane7" runat="server" Width="34%" Height="100%" ContentUrl="http://www.microsoft.com">
                </telerik:RadPane>
                <telerik:RadSplitBar ID="RadSplitBar5" runat="server" CollapseMode="Forward" />
                <telerik:RadPane ID="RadPane9" runat="server" Width="33%" Height="100%" ContentUrl="http://www.google.com">
                </telerik:RadPane>
            </telerik:RadSplitter>
        </telerik:RadPane>
        <telerik:RadSplitBar ID="RadSplitBar4" Runat="server" Width="100%" EnableResize="true" CollapseMode="Both" />
        <telerik:RadPane ID="RadPane8" Runat="server" Width="100%" Height="50%" ContentUrl="http://www.cswsolutions.com">
        </telerik:RadPane>
    </telerik:RadSplitter>
    <br /><br />
    <h1>Window Resize</h1>
    <asp:Button ID="btnResizeWindow" runat="server" Text="Open Window" OnClientClick="javscript:ShowRadWindow1();return false;" />
    <telerik:RadWindow ID="RadWindow1" runat="server" Title="RadSplitter in RadWindow" Width="600px" Height="450px" style="z-index:20000">
    </telerik:RadWindow>
    <script language="javascript" type="text/javascript">
        function ShowRadWindow1() {
            var wnd = $find("<%=RadWindow1.ClientID %>");
            wnd.setUrl("radsplitter_FullWindow.aspx");
            wnd.show();
        }
    </script>
    <br /><br />
    <h1>Sliding Panes</h1>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>
        <telerik:RadSplitter ID="RadSplitter5" runat="server" Width="700" Height="500">
            <telerik:RadPane ID="LeftPane" runat="server" Width="22px" Scrolling="none">
                <telerik:RadSlidingZone ID="SlidingZone1" runat="server" Width="22px" SlideDirection="Right">
                    <telerik:RadSlidingPane ID="RadSlidingPane1" Title="Employees" runat="server" Width="250px">
                        <asp:Button ID="Button1" runat="server" Text="Load Employees" OnCommand="btnLoadData_Command" CommandName="Employees" />
                    </telerik:RadSlidingPane>
                </telerik:RadSlidingZone>
            </telerik:RadPane>
            <telerik:RadSplitBar ID="Radsplitbar6" runat="server" EnableResize="false"></telerik:RadSplitBar>
            <telerik:RadPane ID="MiddlePane1" runat="server" Scrolling="None">
                <telerik:RadSplitter ID="RadSplitter6" runat="server" Orientation="Horizontal">
                    <telerik:RadPane ID="RadPane10" runat="server" Height="22px">
                        <telerik:RadSlidingZone ID="RadSlidingZone2" runat="server" Height="22px" Width="100%" SlideDirection="Bottom">
                            <telerik:RadSlidingPane ID="Radslidingpane3" Title="Products" runat="server" Width="250px">
                                <asp:Button ID="Button3" runat="server" Text="Load Products" OnCommand="btnLoadData_Command" CommandName="Products" />
                            </telerik:RadSlidingPane>
                        </telerik:RadSlidingZone>
                    </telerik:RadPane>
                    <telerik:RadSplitBar ID="Radsplitbar9" runat="server" EnableResize="false"></telerik:RadSplitBar>
                    <telerik:RadPane ID="RadPane11" runat="server" Width="100%">
                        <telerik:RadGrid ID="RadGrid1" runat="server">
                        <ClientSettings>
                            <Scrolling UseStaticHeaders="true" />
                        </ClientSettings>
                        </telerik:RadGrid>
                    </telerik:RadPane>
                    <telerik:RadSplitBar ID="Radsplitbar8" runat="server" EnableResize="false"></telerik:RadSplitBar>
                    <telerik:RadPane ID="RadPane12" runat="server" Height="22px">
                        <telerik:RadSlidingZone ID="RadSlidingZone3" runat="server" Height="22px" Width="100%" SlideDirection="Top">
                            <telerik:RadSlidingPane ID="Radslidingpane4" Title="Categories" runat="server" Width="250px">
                                <asp:Button ID="Button4" runat="server" Text="Load Categories" OnCommand="btnLoadData_Command" CommandName="Categories" />
                            </telerik:RadSlidingPane>
                        </telerik:RadSlidingZone>
                    </telerik:RadPane>
                </telerik:RadSplitter>
            </telerik:RadPane>
            <telerik:RadSplitBar ID="Radsplitbar7" runat="server" EnableResize="false"></telerik:RadSplitBar>
            <telerik:RadPane ID="RightPane" runat="server" Width="22px" Scrolling="None">
                <telerik:RadSlidingZone ID="RadSlidingZone1" runat="server" Width="22px" SlideDirection="Left">
                    <telerik:RadSlidingPane ID="Radslidingpane2" Title="Customers" runat="server" Width="250px">
                        <asp:Button ID="Button2" runat="server" Text="Load Customers" OnCommand="btnLoadData_Command" CommandName="Customers" />
                    </telerik:RadSlidingPane>
                </telerik:RadSlidingZone>
            </telerik:RadPane>
        </telerik:RadSplitter>
    </ContentTemplate>
    </asp:UpdatePanel>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</asp:Content>
