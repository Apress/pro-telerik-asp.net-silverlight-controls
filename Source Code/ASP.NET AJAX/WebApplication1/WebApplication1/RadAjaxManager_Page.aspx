<%@ Page Title="RadAjaxManager" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadAjaxManager_Page.aspx.cs" Inherits="WebApplication1.RadAjaxManager_Page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Ajaxify ASP.NET Controls</h1>
    <asp:Button ID="btnDoPostBack" runat="server" Text="Do PostBack" OnClick="btnDoPostBack_Click" />
    <asp:TextBox ID="txtResult" runat="server"></asp:TextBox>
    <br /><br />
    <h1>Ajaxified RadGrid with Export</h1>
    <telerik:RadGrid ID="RadGrid1" runat="server" 
                    AllowFilteringByColumn="True" 
                    AutoGenerateColumns="true" 
                    AllowPaging="True" 
                    AllowSorting="True" 
                    DataSourceID="ProductsSqlDataSource" 
                    GridLines="None" 
                    Width="450px" Height="400px">
        <ExportSettings ExportOnlyData="True" 
                        IgnorePaging="True" 
                        OpenInNewWindow="True">
            <Csv RowDelimiter="Comma" />
        </ExportSettings>
        <ClientSettings AllowDragToGroup="True">
            <Selecting AllowRowSelect="True" />
            <Scrolling AllowScroll="True" UseStaticHeaders="True" />
        </ClientSettings>
        <MasterTableView AutoGenerateColumns="False" 
                        DataKeyNames="ProductID" 
                        DataSourceID="ProductsSqlDataSource" 
                        CommandItemDisplay="Top">
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>
        <CommandItemSettings ShowExportToPdfButton="true" 
                             ShowAddNewRecordButton="False" 
                             ShowExportToCsvButton="True" 
                             ShowExportToExcelButton="True" 
                             ShowExportToWordButton="True" 
                             ShowRefreshButton="False" />
        
        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            
            <Columns>
                <telerik:GridBoundColumn DataField="ProductID" 
                                        DataType="System.Int32" 
                                        HeaderText="ID" 
                                        ReadOnly="True" 
                                        SortExpression="ProductID" 
                                        UniqueName="ProductID">
                    <ItemStyle Width="120px" HorizontalAlign="Center" />
                    <HeaderStyle Width="120px" HorizontalAlign="Center" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ProductName" 
                                        HeaderText="Name" 
                                        SortExpression="ProductName" 
                                        UniqueName="ProductName">
                </telerik:GridBoundColumn>

            </Columns>
            
        </MasterTableView>
    </telerik:RadGrid>
    <asp:SqlDataSource ID="ProductsSqlDataSource" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT ProductID, ProductName FROM [Products]">
     </asp:SqlDataSource>
     <script type="text/javascript">
         function onRequestStart(sender, eventArgs) {
             // get the control's UniqueID that initiated the 
             // request.
             var target = eventArgs.get_eventTarget();

             if (target.indexOf("ExportToExcelButton") >= 0 || 
                 target.indexOf("ExportToWordButton") >= 0 ||
                 target.indexOf("ExportToPdfButton") >= 0 ||
                 target.indexOf("ExportToCsvButton") >= 0) {

                 // if any of the export buttons is clicked
                 // perform a regular PostBack
                 eventArgs.set_enableAjax(false);
             }
         }
        </script>
    <br /><br />
    <h1>RadAjaxManager Client Side API</h1>
    <table>
        <tr>
            <td>
                <asp:Button ID="btnAjaxRequest" runat="server" Text="ajaxRequest" OnClientClick="RunGenericAjaxRequest();return false;" />
            </td>
            <td>
                <asp:Button ID="btnAjaxRequestWithTarget" runat="server" Text="ajaxRequest" OnClientClick="RunAjaxRequestWithTarget();return false;" />
            </td>
            <td>
                <asp:Button ID="btnServerCode" runat="server" Text="execute Server Code" OnClick="btnServerCode_Click" />
            </td>
        </tr>
        <tr>
            <td colspan="3">
                <asp:TextBox ID="txtClientAPI" runat="server"  Width="200px"></asp:TextBox>
            </td>
        </tr>
    </table>
    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function RunGenericAjaxRequest() {
            var ajaxManager = $find("<%=RadAjaxManager1.ClientID %>");
            ajaxManager.ajaxRequest("goAjaxRequest");
        }
        function RunAjaxRequestWithTarget() {
            var ajaxManager = $find("<%=RadAjaxManager1.ClientID %>");
            var targetUniqueID = "<%=btnServerCode.UniqueID %>";
            ajaxManager.ajaxRequestWithTarget(targetUniqueID, '');
        }
    </script>
    </telerik:RadCodeBlock>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server"
                            OnAjaxRequest="RadAjaxManager1_AjaxRequest" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
        <ClientEvents OnRequestStart="onRequestStart" />
        <AjaxSettings>
            <telerik:AjaxSetting AjaxControlID="btnDoPostBack">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="txtResult" 
                        LoadingPanelID="RadAjaxLoadingPanel1" />
                </UpdatedControls>
            </telerik:AjaxSetting>
            <telerik:AjaxSetting AjaxControlID="RadGrid1">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="RadGrid1" 
                        LoadingPanelID="RadAjaxLoadingPanel1" />
                </UpdatedControls>
            </telerik:AjaxSetting>
            <telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="txtClientAPI" 
                        LoadingPanelID="RadAjaxLoadingPanel1" />
                </UpdatedControls>
            </telerik:AjaxSetting>
            <telerik:AjaxSetting AjaxControlID="btnServerCode">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="txtClientAPI" 
                        LoadingPanelID="RadAjaxLoadingPanel1" />
                </UpdatedControls>
            </telerik:AjaxSetting>
        </AjaxSettings>
    </telerik:RadAjaxManager>
    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server">
    </telerik:RadAjaxLoadingPanel>
</asp:Content>
