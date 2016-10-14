<%@ Page Title="RadAjaxPage" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadAjaxPanel_Page.aspx.cs" Inherits="WebApplication1.RadAjaxPanel_Page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>RadAjaxPanel</h1>
 
    <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" 
                        LoadingPanelID="RadAjaxLoadingPanel1"
                        Width="450px" Height="400px">

        <telerik:RadGrid ID="RadGrid1" runat="server" 
                        AllowFilteringByColumn="True" 
                        AutoGenerateColumns="true" 
                        AllowPaging="True" 
                        AllowSorting="True" 
                        DataSourceID="ProductsSqlDataSource" 
                        GridLines="None" 
                        Width="450px" Height="400px">
            <ClientSettings AllowDragToGroup="True">
                <Selecting AllowRowSelect="True" />
                <Scrolling AllowScroll="True" UseStaticHeaders="True" />
            </ClientSettings>
            <MasterTableView AutoGenerateColumns="False" 
                            DataKeyNames="ProductID" 
                            DataSourceID="ProductsSqlDataSource">
            <RowIndicatorColumn>
            <HeaderStyle Width="20px"></HeaderStyle>
            </RowIndicatorColumn>
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
    </telerik:RadAjaxPanel>
    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" Runat="server" 
        AnimationDuration="1000">
    </telerik:RadAjaxLoadingPanel>
    <br /><br />
    <h1>Force an AJAX Update</h1>
    <asp:Button ID="btnForceAJAX" runat="server" Text="Force an AJAX Update" OnClientClick="DoForceAJAXUpdate();return false;" />

    <telerik:RadAjaxPanel ID="RadAjaxPanel2" runat="server" 
                        LoadingPanelID="RadAjaxLoadingPanel1"
                        Width="450px" Height="100px">
        <telerik:RadTextBox ID="txtTest" runat="server" Label="Now is:" Width="300px"></telerik:RadTextBox>
    </telerik:RadAjaxPanel>    

    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function DoForceAJAXUpdate() {
            $find("<%=RadAjaxPanel2.ClientID %>")
                    .ajaxRequestWithTarget("<%=RadAjaxPanel2.UniqueID %>", "ForceAJAXUpdate");
        }
    </script>
    </telerik:RadCodeBlock>

</asp:Content>
