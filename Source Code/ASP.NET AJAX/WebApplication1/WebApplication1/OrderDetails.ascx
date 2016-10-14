<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="OrderDetails.ascx.cs" Inherits="WebApplication1.OrderDetails" %>

<asp:Panel ID="panelDetails" runat="server" 
            Width="600px" 
            Height="250px" 
            ScrollBars="Auto">
<telerik:RadGrid ID="RadGrid1" runat="server" 
                DataSourceID="OrderDetailsDataSource" 
                GridLines="None">
    <MasterTableView autogeneratecolumns="False" 
            cellspacing="-1" 
            datakeynames="OrderID,ProductID" 
            datasourceid="OrderDetailsDataSource">
    <RowIndicatorColumn>
    <HeaderStyle Width="20px"></HeaderStyle>
    </RowIndicatorColumn>

    <ExpandCollapseColumn>
    <HeaderStyle Width="20px"></HeaderStyle>
    </ExpandCollapseColumn>
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" 
                DataType="System.Int32" 
                HeaderText="OrderID" 
                ReadOnly="True" 
                SortExpression="OrderID" 
                UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ProductID" 
                DataType="System.Int32" 
                HeaderText="ProductID" 
                ReadOnly="True" 
                SortExpression="ProductID" 
                UniqueName="ProductID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ProductName" 
                HeaderText="ProductName" 
                SortExpression="ProductName" 
                UniqueName="ProductName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="UnitPrice" 
                DataType="System.Decimal" 
                HeaderText="UnitPrice" 
                SortExpression="UnitPrice" 
                UniqueName="UnitPrice">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Quantity" 
                DataType="System.Int16" 
                HeaderText="Quantity" 
                SortExpression="Quantity" 
                UniqueName="Quantity">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Discount" 
                DataType="System.Single" 
                HeaderText="Discount" 
                SortExpression="Discount" 
                UniqueName="Discount">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ExtendedPrice" 
                DataType="System.Decimal" 
                HeaderText="ExtendedPrice" 
                ReadOnly="True" 
                SortExpression="ExtendedPrice" 
                UniqueName="ExtendedPrice">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
</asp:Panel>
<asp:SqlDataSource ID="OrderDetailsDataSource" runat="server" 
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
    SelectCommand="SELECT * FROM [Order Details Extended] WHERE ([OrderID] = @OrderID)">
    <SelectParameters>
        <asp:Parameter Name="OrderID" Type="Int32" />
    </SelectParameters>
</asp:SqlDataSource>

