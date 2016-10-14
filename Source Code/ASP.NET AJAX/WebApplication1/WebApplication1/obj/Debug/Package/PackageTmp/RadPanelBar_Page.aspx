<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadPanelBar_Page.aspx.cs" Inherits="WebApplication1.RadPanelBar_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Simple Navigation</h1>
    <telerik:RadPanelBar ID="RadPanelBar1" runat="server" 
        DataSourceID="RadSiteMapDataSource1" DataFieldID="Title" 
        DataNavigateUrlField="Url" DataTextField="Title" DataValueField="Title" 
        ExpandMode="SingleExpandedItem">
    </telerik:RadPanelBar>
    <telerik:RadSiteMapDataSource ID="RadSiteMapDataSource1" runat="server"
        SiteMapFile="Web.Sitemap" ShowStartingNode="false" />
    <br /><br />
    <h1>Data Binding to Database</h1>
    <telerik:RadPanelBar ID="RadPanelBar2" runat="server" 
        DataSourceID="SqlDataSource1" DataFieldID="ID" DataFieldParentID="parentID" 
        DataTextField="Name" DataValueField="ID" ExpandMode="SingleExpandedItem">
    </telerik:RadPanelBar>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
    SelectCommand="select ProductID as ID, ProductName as Name, UnitPrice, CategoryID+1000 as parentID
                    from Products p
                    union all
                    select CategoryID+1000 as ID, CategoryName as Name, 0 as UnitPrice, null as parentID
                    from Categories">
    </asp:SqlDataSource>
    <br /><br />
    <h1>Automatic Hierarchy</h1>
    <telerik:RadPanelBar ID="RadPanelBar3" runat="server" 
        DataSourceID="SqlDataSource2" DataFieldID="ID" DataFieldParentID="ParentID" 
        DataTextField="Name" DataValueField="ID">
    </telerik:RadPanelBar>

    <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT [EmployeeID] AS ID, [LastName] + ',' + [FirstName] as Name, NULL AS ParentID FROM [Employees] WHERE ReportsTo = 2
                        UNION ALL
                        SELECT o.OrderID AS ID, 'Order: ' + CAST(o.OrderID AS VARCHAR) + ' - Date: ' + CONVERT(VARCHAR, o.OrderDate, 101) AS NAME, CAST(o.EmployeeID AS BIGINT) AS ParentID
                        FROM dbo.Orders o 
                        WHERE o.EmployeeID IN (SELECT [EmployeeID] FROM [Employees] WHERE ReportsTo=2)
                        UNION ALL
                        SELECT ROW_NUMBER() OVER (ORDER BY d.OrderID, d.ProductID) + 20000 AS ID, 'Product: ' + d.ProductName, CAST(d.OrderID AS BIGINT) AS ParentID
                        FROM dbo.[Order Details Extended] d
                        WHERE d.OrderID IN (SELECT o.OrderID FROM dbo.Orders o 
                        WHERE o.EmployeeID IN (SELECT [EmployeeID] FROM [Employees] WHERE ReportsTo=2))">
    </asp:SqlDataSource>
    <br /><br />
    <h1>Templates</h1>
        <telerik:RadPanelBar ID="RadPanelBar4" runat="server" Width="500px">
        <Items>
            <telerik:RadPanelItem Text="Search Engines" Expanded="true">
                <Items>
                    <telerik:RadPanelItem>
                        <ItemTemplate>
                            <table>
                                <tr>
                                    <td style="width:100px; text-align:center; vertical-align:bottom">
                                            <img src="http://www.sciencetext.com/images/bing-logo.jpg" width="50px" alt="Bing" />
                                            <br />
                                            <a href="http://www.bing.com/" target="_blank">Bing</a>
                                    </td>
                                    <td style="width:100px; text-align:center; vertical-align:bottom">
                                            <img src="http://www.ask-kalena.com/images/google-logo-lge.jpg" width="50px" alt="Google" />
                                            <br />
                                            <a href="http://www.google.com/" target="_blank">Google</a>
                                    </td>
                                    <td style="width:100px; text-align:center; vertical-align:bottom">
                                            <img src="http://sbraidley.files.wordpress.com/2009/06/yahoo-logo.jpg" width="50px" alt="Yahoo!" />
                                            <br />
                                            <a href="http://www.yahoo.com/" target="_blank">Yahoo!</a>
                                    </td>
                                </tr>
                            </table>
                        </ItemTemplate>
                    </telerik:RadPanelItem>
                </Items>
            </telerik:RadPanelItem>
            <telerik:RadPanelItem Text="Software Companies">
                <Items>
                    <telerik:RadPanelItem>
                        <ItemTemplate>
                            <table>
                                <tr>
                                    <td style="width:120px; text-align:center; vertical-align:bottom">
                                            <img src="http://www.telerik.com/Libraries/Company/TelerikLogoPreview.sflb?Download=true" alt="Telerik" />
                                            <br />
                                            <a href="http://www.telerik.com/" target="_blank">Telerik</a>
                                    </td>
                                    <td style="width:120px; text-align:center; vertical-align:bottom">
                                            <img src="http://internetsafelist.com/news/microsoft_logo_small.jpg" width="100px" alt="Microsoft" />
                                            <br />
                                            <a href="http://www.microsoft.com/" target="_blank">Microsoft</a>
                                    </td>
                                    <td style="width:120px; text-align:center; vertical-align:bottom">
                                            <img src="http://www.cswsolutions.com/Portals/0/logo.gif" alt="CSW Solutions" />
                                            <br />
                                            <a href="http://www.cswsolutions.com/" target="_blank">CSW Solutions</a>
                                    </td>
                                </tr>
                            </table>
                        </ItemTemplate>
                    </telerik:RadPanelItem>
                </Items>
            </telerik:RadPanelItem>
        </Items>
        </telerik:RadPanelBar>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />    
</asp:Content>
