<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="radchart_ImageMaps.aspx.cs" Inherits="WebApplication1.radchart_ImageMaps" %>

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
    <div style="width:100%; height:100%; overflow:hidden">
        <telerik:RadSplitter ID="RadSplitter1" runat="server" Width="100%" Height="100%" FullScreenMode="True">
            <telerik:RadPane ID="RadPane3" runat="server" Width="100%" Height="100%" Scrolling="None">

                <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" 
                    GridLines="None" Width="100%" Height="100%">
                    <ClientSettings>
                        <Scrolling AllowScroll="True" UseStaticHeaders="True" />
                    </ClientSettings>
                        <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID" 
                                    DataSourceID="SqlDataSource1">
                        <RowIndicatorColumn>
                        <HeaderStyle Width="20px"></HeaderStyle>
                        </RowIndicatorColumn>

                        <ExpandCollapseColumn>
                        <HeaderStyle Width="20px"></HeaderStyle>
                        </ExpandCollapseColumn>
                        <Columns>
                            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32" 
                                HeaderText="OrderID" ReadOnly="True" SortExpression="OrderID" 
                                UniqueName="OrderID">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="CustomerID" HeaderText="CustomerID" 
                                SortExpression="CustomerID" UniqueName="CustomerID">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="EmployeeID" DataType="System.Int32" 
                                HeaderText="EmployeeID" SortExpression="EmployeeID" UniqueName="EmployeeID">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="OrderDate" DataType="System.DateTime" 
                                HeaderText="OrderDate" SortExpression="OrderDate" UniqueName="OrderDate">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="RequiredDate" DataType="System.DateTime" 
                                HeaderText="RequiredDate" SortExpression="RequiredDate" 
                                UniqueName="RequiredDate">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="ShippedDate" DataType="System.DateTime" 
                                HeaderText="ShippedDate" SortExpression="ShippedDate" UniqueName="ShippedDate">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="ShipVia" DataType="System.Int32" 
                                HeaderText="ShipVia" SortExpression="ShipVia" UniqueName="ShipVia">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="Freight" DataType="System.Decimal" 
                                HeaderText="Freight" SortExpression="Freight" UniqueName="Freight">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="ShipName" HeaderText="ShipName" 
                                SortExpression="ShipName" UniqueName="ShipName">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="ShipAddress" HeaderText="ShipAddress" 
                                SortExpression="ShipAddress" UniqueName="ShipAddress">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="ShipCity" HeaderText="ShipCity" 
                                SortExpression="ShipCity" UniqueName="ShipCity">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="ShipRegion" HeaderText="ShipRegion" 
                                SortExpression="ShipRegion" UniqueName="ShipRegion">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="ShipPostalCode" HeaderText="ShipPostalCode" 
                                SortExpression="ShipPostalCode" UniqueName="ShipPostalCode">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="ShipCountry" HeaderText="ShipCountry" 
                                SortExpression="ShipCountry" UniqueName="ShipCountry">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="CompanyName" HeaderText="CompanyName" 
                                SortExpression="CompanyName" UniqueName="CompanyName">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="Address" HeaderText="Address" 
                                SortExpression="Address" UniqueName="Address">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="City" HeaderText="City" 
                                SortExpression="City" UniqueName="City">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="Region" HeaderText="Region" 
                                SortExpression="Region" UniqueName="Region">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="PostalCode" HeaderText="PostalCode" 
                                SortExpression="PostalCode" UniqueName="PostalCode">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="Country" HeaderText="Country" 
                                SortExpression="Country" UniqueName="Country">
                            </telerik:GridBoundColumn>
                        </Columns>
                    </MasterTableView>
                </telerik:RadGrid>
                <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" SelectCommand="SELECT * FROM dbo.[Orders Qry] WHERE Country = @country">
                    <SelectParameters>
                        <asp:QueryStringParameter Name="country" QueryStringField="country" />
                    </SelectParameters>
                </asp:SqlDataSource>
            </telerik:RadPane>
        </telerik:RadSplitter>
        </div>  
    </form>
</body>
</html>
