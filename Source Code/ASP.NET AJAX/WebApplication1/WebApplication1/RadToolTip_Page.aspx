<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadToolTip_Page.aspx.cs" Inherits="WebApplication1.RadToolTip_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>RadToolTip vs. ToolTip</h1>
<table width="350px">
    <tr>
        <td width="150px">Traditional ToolTip:</td>
        <td width="200px">
            <telerik:RadTextBox ID="txtName" runat="server" 
                                ClientIDMode="Static" 
                                Width="200px" 
                                ToolTip="Please enter your full name">
            </telerik:RadTextBox>
        </td>
    </tr>
    <tr>
        <td width="150px">RadToolTip:</td>
        <td width="200px">
            <telerik:RadTextBox ID="txtEmail" runat="server" 
                                Width="200px" 
                                ToolTip="Please enter your email in the form: foo@bar.com">
            </telerik:RadTextBox>
            <telerik:RadToolTip ID="tooltipEmail" runat="server"
                                TargetControlID="txtEmail"
                                IsClientID="false"
                                Animation="None"
                                ShowEvent="OnFocus"
                                AutoCloseDelay="10000"
                                RelativeTo="Element"
                                Position="MiddleRight">
            </telerik:RadToolTip>
        </td>
    </tr>
</table>
    <br /><br />
    <h1>Setting Properties of RadToolTip</h1>
    <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
    <table>
        <tr>
            <td>Animation:</td>
            <td>
                <asp:RadioButtonList ID="rbAnimation" runat="server"
                                     AutoPostBack="true"
                                     OnSelectedIndexChanged="rbAnimation_SelectedIndexChanged"
                                     RepeatDirection="Horizontal">
                    <asp:ListItem Text="Slide" Value="Slide"></asp:ListItem>
                    <asp:ListItem Text="FlyIn" Value="FlyIn"></asp:ListItem>
                    <asp:ListItem Text="Resize" Value="Resize"></asp:ListItem>
                    <asp:ListItem Text="Fade" Value="Fade"></asp:ListItem>
                    <asp:ListItem Text="None" Value="None" Selected="True"></asp:ListItem>
                </asp:RadioButtonList>
            </td>
        </tr>
        <tr>
            <td>Position:</td>
            <td>
                <asp:RadioButtonList ID="rbPosition" runat="server"
                                     AutoPostBack="true"
                                     OnSelectedIndexChanged="rbPosition_SelectedIndexChanged"
                                     RepeatDirection="Horizontal">
                    <asp:ListItem Text="BottomLeft" Value="BottomLeft"></asp:ListItem>
                    <asp:ListItem Text="BottomCenter" Value="BottomCenter" Selected="True"></asp:ListItem>
                    <asp:ListItem Text="BottomRight" Value="BottomRight"></asp:ListItem>
                    <asp:ListItem Text="Center" Value="Center"></asp:ListItem>
                    <asp:ListItem Text="MiddleLeft" Value="MiddleLeft"></asp:ListItem>
                    <asp:ListItem Text="MiddleRight" Value="MiddleRight"></asp:ListItem>
                    <asp:ListItem Text="TopLeft" Value="TopLeft"></asp:ListItem>
                    <asp:ListItem Text="TopCenter" Value="TopCenter"></asp:ListItem>
                    <asp:ListItem Text="TopRight" Value="TopRight"></asp:ListItem>
                </asp:RadioButtonList>
            </td>
        </tr>
        <tr>
            <td>RelativeTo:</td>
            <td>
                <asp:RadioButtonList ID="rbRelativeTo" runat="server"
                                     AutoPostBack="true"
                                     OnSelectedIndexChanged="rbRelativeTo_SelectedIndexChanged"
                                     RepeatDirection="Horizontal">
                    <asp:ListItem Text="BrowserWindow" Value="BrowserWindow"></asp:ListItem>
                    <asp:ListItem Text="Element" Value="Element"></asp:ListItem>
                    <asp:ListItem Text="Mouse" Value="Mouse" Selected="True"></asp:ListItem>
                </asp:RadioButtonList>
            </td>
        </tr>
        <tr>
            <td>ShowEvent:</td>
            <td>
                <asp:RadioButtonList ID="rbShowEvent" runat="server"
                                     AutoPostBack="true"
                                     OnSelectedIndexChanged="rbShowEvent_SelectedIndexChanged"
                                     RepeatDirection="Horizontal">
                    <asp:ListItem Text="OnMouseOver" Value="OnMouseOver" Selected="True"></asp:ListItem>
                    <asp:ListItem Text="OnClick" Value="OnClick"></asp:ListItem>
                    <asp:ListItem Text="OnRightClick" Value="OnRightClick"></asp:ListItem>
                    <asp:ListItem Text="OnFocus" Value="OnFocus"></asp:ListItem>
                </asp:RadioButtonList>
            </td>
        </tr>
        <tr>
            <td>HideEvent:</td>
            <td>
                <asp:RadioButtonList ID="rbHideEvent" runat="server"
                                     AutoPostBack="true"
                                     OnSelectedIndexChanged="rbHideEvent_SelectedIndexChanged"
                                     RepeatDirection="Horizontal">
                    <asp:ListItem Text="Default" Value="Default" Selected="True"></asp:ListItem>
                    <asp:ListItem Text="LeaveTargetAndToolTip" Value="LeaveTargetAndToolTip"></asp:ListItem>
                    <asp:ListItem Text="LeaveToolTip" Value="LeaveToolTip"></asp:ListItem>
                    <asp:ListItem Text="ManualClose" Value="ManualClose"></asp:ListItem>
                </asp:RadioButtonList>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <asp:CheckBox ID="chkMouseTrailing" runat="server" 
                              Text="MouseTrailing"
                              TextAlign="Left"
                              AutoPostBack="true"
                              OnCheckedChanged="chkMouseTrailing_CheckedChanged" />
                <asp:CheckBox ID="chkShowCallout" runat="server" 
                              Text="ShowCallout"
                              Checked="true"
                              TextAlign="Left"
                              AutoPostBack="true"
                              OnCheckedChanged="chkShowCallout_CheckedChanged" />
                <asp:CheckBox ID="chkModal" runat="server" 
                              Text="Modal"
                              TextAlign="Left"
                              AutoPostBack="true"
                              OnCheckedChanged="chkModal_CheckedChanged" />

            </td>
        </tr>
    </table>
    <img id="telerikLogo" src="Images/telerik_logo.png" alt="This is the logo of Telerik" />
    <telerik:RadToolTip ID="RadToolTip1" runat="server"
                        TargetControlID="telerikLogo"
                        IsClientID="true">
    </telerik:RadToolTip>
    </telerik:RadAjaxPanel>
    <br /><br />
    <h1>RadToolTipManager AutoTooltipify & ToolTipZoneID</h1>
    <telerik:RadGrid ID="RadGrid1" runat="server" 
                    AutoGenerateColumns="False" 
                    DataSourceID="EmployeesDataSource" 
                    GridLines="None">
        <MasterTableView DataKeyNames="EmployeeID" 
                        DataSourceID="EmployeesDataSource">
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>

        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            <Columns>
                <telerik:GridTemplateColumn HeaderText="ID" 
                    DataField="EmployeeID"
                    DataType="System.Int32" 
                    SortExpression="EmployeeID" 
                    UniqueName="EmployeeID">
                    <ItemTemplate>
                        <asp:Label ID="lblID" runat="server"
                                   Text='<%# Eval("EmployeeID") %>'
                                   ToolTip='<%#
                                    Eval("TitleOfCourtesy") + " " + Eval("FirstName") + " " + Eval("LastName")
                                    + "<br />"
                                    + "Hire on " + DateTime.Parse(Eval("HireDate").ToString()).ToShortDateString() + "<br />"
                                    + Eval("Address") + "<br />"
                                    + Eval("City") + " " + Eval("Region") + ", " + Eval("PostalCode") + "<br />"
                                    + Eval("Country") + "<br />"
                                    + "Home Phone " + Eval("HomePhone") + "<hr>" 
                                    + Eval("Notes")
                                    %>'>
                        </asp:Label>
                    </ItemTemplate>
                </telerik:GridTemplateColumn>
                <telerik:GridBoundColumn DataField="LastName" 
                    HeaderText="LastName" 
                    SortExpression="LastName" 
                    UniqueName="LastName">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="FirstName" 
                    HeaderText="FirstName" 
                    SortExpression="FirstName" 
                    UniqueName="FirstName">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="Title" 
                    HeaderText="Title" 
                    SortExpression="Title" 
                    UniqueName="Title">
                </telerik:GridBoundColumn>
            </Columns>
        </MasterTableView>
    </telerik:RadGrid>
    <asp:SqlDataSource ID="EmployeesDataSource" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT * FROM [Employees]">
    </asp:SqlDataSource>
    <telerik:RadToolTipManager ID="RadToolTipManager1" runat="server"
                               AutoTooltipify="true"
                               ToolTipZoneID="RadGrid1"
                               Position="TopRight"
                               Animation="Resize"
                               RelativeTo="Element"
                               Title="Employee Details"
                               HideEvent="ManualClose"
                               ShowCallout="false"
                               ContentScrolling="Auto"
                               Width="300px"
                               Height="200px">
    </telerik:RadToolTipManager>
    <br /><br />
    <h1>Load On Demand</h1>
    <telerik:RadGrid ID="RadGrid2" runat="server" 
            AllowFilteringByColumn="True" 
            AllowPaging="True" 
            AllowSorting="True" 
            AutoGenerateColumns="False" 
            DataSourceID="OrdersDataSource" 
            GridLines="None"
            OnItemDataBound="RadGrid2_ItemDataBound">
    <MasterTableView CellSpacing="-1" 
                     DataKeyNames="OrderID" 
                     DataSourceID="OrdersDataSource">
    <RowIndicatorColumn>
    <HeaderStyle Width="20px"></HeaderStyle>
    </RowIndicatorColumn>

    <ExpandCollapseColumn>
    <HeaderStyle Width="20px"></HeaderStyle>
    </ExpandCollapseColumn>
        <Columns>
            <telerik:GridTemplateColumn HeaderText="Order ID" 
                                        UniqueName="TemplateColumn">
                <ItemTemplate>
                    <asp:Label ID="lblOrderID" runat="server" 
                               Text='<%# Eval("OrderID") %>'>
                    </asp:Label>
                </ItemTemplate>
            </telerik:GridTemplateColumn>
            <telerik:GridBoundColumn DataField="CustomerID" 
                HeaderText="Customer ID" 
                SortExpression="CustomerID" 
                UniqueName="CustomerID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="OrderDate" 
                DataType="System.DateTime" 
                HeaderText="Order Date" 
                SortExpression="OrderDate" 
                UniqueName="OrderDate">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipName" 
                HeaderText="Ship Name" 
                SortExpression="ShipName" 
                UniqueName="ShipName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipCountry" 
                HeaderText="Ship Country" 
                SortExpression="ShipCountry" 
                UniqueName="ShipCountry">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
    <ClientSettings>
        <Selecting AllowRowSelect="True" />
        <Scrolling AllowScroll="True" UseStaticHeaders="True" />
    </ClientSettings>
    </telerik:RadGrid>
    <asp:SqlDataSource ID="OrdersDataSource" runat="server" 
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
    SelectCommand="SELECT * FROM [Orders]">
    </asp:SqlDataSource>

    <telerik:RadToolTipManager ID="RadToolTipManager2" runat="server" 
                                HideEvent="ManualClose" 
                                Animation="Resize"
                                Position="TopRight"
                                Width="600px" 
                                Height="250px"
                                ToolTipZoneID="RadGrid2"
                                OnAjaxUpdate="RadToolTipManager2_AjaxUpdate" 
                                Title="Order Details">
    </telerik:RadToolTipManager>

    <br /><br />
    <h1>Load On Demand With WebServices</h1>
    <telerik:RadScheduler ID="RadScheduler1" runat="server" 
        DataDescriptionField="Description" 
        DataEndField="End" 
        DataKeyField="ID" 
        DataRecurrenceField="RecurrenceRule"
        DataRecurrenceParentKeyField="RecurrenceParentID" 
        DataSourceID="SqlDataSource1" 
        DataStartField="Start" 
        DataSubjectField="Subject"
        OnAppointmentCreated="RadScheduler1_ApplintmentCreated"
        SelectedDate="2/1/2010">
    </telerik:RadScheduler>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT * FROM [Appointments]">
    </asp:SqlDataSource>
    <telerik:RadToolTipManager ID="RadToolTipManager3" runat="server" 
                                HideEvent="ManualClose" 
                                Animation="Resize"
                                Position="TopCenter"
                                Width="300px" 
                                Height="100px"
                                Title="Appointment Details">
        <WebServiceSettings Path="WebServices/RadToolTip_Service.asmx" Method="GetAppointmentData" />
    </telerik:RadToolTipManager>


    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" Runat="server">
    </telerik:RadAjaxLoadingPanel>
    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
        <AjaxSettings>
            <telerik:AjaxSetting AjaxControlID="RadGrid2">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="RadGrid2" LoadingPanelID="RadAjaxLoadingPanel1" />
                    <telerik:AjaxUpdatedControl ControlID="RadToolTipManager2" />
                </UpdatedControls>
            </telerik:AjaxSetting>
            <telerik:AjaxSetting AjaxControlID="RadScheduler1">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="RadScheduler1" LoadingPanelID="RadAjaxLoadingPanel1" />
                    <telerik:AjaxUpdatedControl ControlID="RadToolTipManager3" />
                </UpdatedControls>
            </telerik:AjaxSetting>
        </AjaxSettings>
    </telerik:RadAjaxManager>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div style="margin-left:100px">
    <asp:TextBox ID="txt" ClientIDMode="Static" runat="server"></asp:TextBox>
    </div>
    <telerik:RadToolTip ID="RadToolTip2" runat="server"
                        TargetControlID="txt"
                        Position="TopRight"
                        Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                        Title="Loren Ipsum"
                        Width="300px"
                        Height="100px"
                        MouseTrailing="true"
                        HideEvent="ManualClose"
                        RelativeTo="Mouse"
                        IsClientID="true">
    </telerik:RadToolTip>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

</asp:Content>
