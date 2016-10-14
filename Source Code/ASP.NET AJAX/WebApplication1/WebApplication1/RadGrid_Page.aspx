<%@ Page Title="RadGrid" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadGrid_Page.aspx.cs" Inherits="WebApplication1.RadGrid_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Simple Databinding</h1>
    <telerik:RadGrid ID="RadGrid0" runat="server" 
                     GridLines="None" 
                     >
    </telerik:RadGrid>
    <br /><br />
    <h1>Declarative Databinding</h1>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>
        <telerik:RadGrid ID="RadGrid1" runat="server" 
                         AllowPaging="True" 
                         AllowSorting="True" 
                         DataSourceID="ProductsDataSource" 
                         GridLines="None" 
                         >
            <ClientSettings>
                <Scrolling AllowScroll="True" UseStaticHeaders="True" />
            </ClientSettings>
            <MasterTableView DataKeyNames="ProductID" 
                        DataSourceID="ProductsDataSource">
            <RowIndicatorColumn>
            <HeaderStyle Width="20px"></HeaderStyle>
            </RowIndicatorColumn>

            <ExpandCollapseColumn>
            <HeaderStyle Width="20px"></HeaderStyle>
            </ExpandCollapseColumn>
                
            </MasterTableView>
        </telerik:RadGrid>
        <asp:LinqDataSource ID="ProductsDataSource" runat="server" 
            ContextTypeName="WebApplication1.NorthwindDataContext" EntityTypeName="" TableName="Products">
        </asp:LinqDataSource>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Advanced Databinding</h1>
    <asp:UpdatePanel ID="UpdatePanel2" runat="server">
    <ContentTemplate>
        <telerik:RadGrid ID="RadGrid2" runat="server" 
                         AllowPaging="True" 
                         AllowSorting="True"
                         GridLines="None" 
                          
                         OnNeedDataSource="RadGrid2_NeedDataSource">
            <ClientSettings>
                <Scrolling AllowScroll="True" UseStaticHeaders="True" />
            </ClientSettings>
            <PagerStyle AlwaysVisible="true" />
            <MasterTableView DataKeyNames="OrderID, ProductID">
            <RowIndicatorColumn>
            <HeaderStyle Width="20px"></HeaderStyle>
            </RowIndicatorColumn>
            <ExpandCollapseColumn>
            <HeaderStyle Width="20px"></HeaderStyle>
            </ExpandCollapseColumn>
            </MasterTableView>
        </telerik:RadGrid>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Declarative Client Side Databinding To WebService</h1>
    <telerik:RadGrid ID="RadGrid3" runat="server" 
                     AutoGenerateColumns="false"
                     AllowPaging="True" 
                     AllowSorting="True"
                     AllowFilteringByColumn="true"
                     GridLines="None" 
                      >
        <MasterTableView DataKeyNames="ProductID">
        <Columns>
            <telerik:GridBoundColumn DataField="ProductID" HeaderText="ProductID" SortExpression="ProductID" UniqueName="ProductID" DataType="System.Int32">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ProductName" HeaderText="ProductName" SortExpression="ProductName" UniqueName="ProductName" DataType="System.String">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="SupplierID" HeaderText="SupplierID" SortExpression="SupplierID" UniqueName="SupplierID" DataType="System.Int32">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="CategoryID" HeaderText="CategoryID" SortExpression="CategoryID" UniqueName="CategoryID" DataType="System.Int32">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="QuantityPerUnit" HeaderText="QuantityPerUnit" SortExpression="QuantityPerUnit" UniqueName="QuantityPerUnit" DataType="System.String">
            </telerik:GridBoundColumn>
        </Columns>
        </MasterTableView>
        <ClientSettings>
            <DataBinding Location="RadGrid_Products.asmx"
                         SelectMethod="GetData"  />
        </ClientSettings>
    </telerik:RadGrid>
    <br /><br />
    <h1>Programatic Client Side Databinding To PageMethods</h1>
    <telerik:RadGrid ID="RadGrid8" runat="server" 
                     AutoGenerateColumns="false"
                     AllowPaging="True" 
                     AllowSorting="True"
                     AllowFilteringByColumn="true"
                     GridLines="None" 
                      >
        <MasterTableView DataKeyNames="ProductID">
        <Columns>
            <telerik:GridBoundColumn DataField="ProductID" HeaderText="ProductID" SortExpression="ProductID" UniqueName="ProductID" DataType="System.Int32">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ProductName" HeaderText="ProductName" SortExpression="ProductName" UniqueName="ProductName" DataType="System.String">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="SupplierID" HeaderText="SupplierID" SortExpression="SupplierID" UniqueName="SupplierID" DataType="System.Int32">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="CategoryID" HeaderText="CategoryID" SortExpression="CategoryID" UniqueName="CategoryID" DataType="System.Int32">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="QuantityPerUnit" HeaderText="QuantityPerUnit" SortExpression="QuantityPerUnit" UniqueName="QuantityPerUnit" DataType="System.String">
            </telerik:GridBoundColumn>
        </Columns>
        </MasterTableView>
        <ClientSettings>
            <ClientEvents OnCommand="RadGrid8_Command" />
        </ClientSettings>
    </telerik:RadGrid>

    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">

    <script type="text/javascript">
        function pageLoad(sender, eventArgs) {
            var tableView = $find("<%= RadGrid8.ClientID %>").get_masterTableView();
            var pageSize = tableView.get_pageSize();
            var sortExpression = tableView.get_sortExpressions().toString();
            var filterExpression = tableView.get_filterExpressions().toString();

            PageMethods.GetProducts(0,
                                    pageSize,
                                    sortExpression, 
                                    filterExpression,
                                    BindGrid);

            PageMethods.GetCount(filterExpression, updateVirtualItemCount);

            var tableView = $find("<%= RadGrid14.ClientID %>").get_masterTableView();
            var pageSize = tableView.get_pageSize();
            var sortExpression = tableView.get_sortExpressions().toString();
            var filterExpression = tableView.get_filterExpressions().toString();

            PageMethods.GetCategories(0,
                                    pageSize,
                                    sortExpression,
                                    filterExpression,
                                    BindGrid2);

            PageMethods.GetCatCount(filterExpression, updateVirtualItemCount2);
        }

        function RadGrid8_Command(sender, args) {
            args.set_cancel(true);

            var tableView = $find("<%= RadGrid8.ClientID %>").get_masterTableView();
            var pageSize = tableView.get_pageSize();
            var sortExpression = tableView.get_sortExpressions().toString();
            var filterExpression = tableView.get_filterExpressions().toString();
            var currentPageIndex = sender.get_masterTableView().get_currentPageIndex();

            if (args.get_commandName() == "Filter")
                currentPageIndex = 0;

            PageMethods.GetProducts(currentPageIndex * pageSize,
                                    pageSize,
                                    sortExpression,
                                    filterExpression, 
                                    BindGrid);

            // we only need to count the items again if the filter changed
            if (args.get_commandName() == "Filter") {
                PageMethods.GetCount(filterExpression, updateVirtualItemCount);
            }
        }

        function BindGrid(result) {
            var tableView = $find("<%= RadGrid8.ClientID %>").get_masterTableView();
            tableView.set_dataSource(result);
            tableView.dataBind();
        }

        function updateVirtualItemCount(result) {
            var tableView = $find("<%= RadGrid8.ClientID %>").get_masterTableView();
            tableView.set_virtualItemCount(result);
        }

    </script>

    </telerik:RadCodeBlock>


    <br /><br />
    <h1>Sorting</h1>
        <table>
            <tr>
                <td>Multicolumn Sort:</td>
                <td>
                    <asp:CheckBox ID="chkMultiColumn" runat="server" AutoPostBack="true"
                                  OnCheckedChanged="chkMultiColumn_CheckedChanged">
                    </asp:CheckBox>
                </td>
                <td>Natural Sort:</td>
                <td>
                    <asp:CheckBox ID="chkNatural" runat="server" AutoPostBack="true"
                                  OnCheckedChanged="chkNatural_CheckedChanged">
                    </asp:CheckBox>
                </td>
            </tr>
        </table>
    <telerik:RadGrid ID="RadGrid4" runat="server" 
                     AllowPaging="True" 
                     AllowSorting="True" 
                     DataSourceID="ProductsDataSource2" 
                     GridLines="None" 
                     >
        <ClientSettings>
            <Scrolling AllowScroll="True" UseStaticHeaders="True" />
        </ClientSettings>
        <MasterTableView DataKeyNames="ProductID" 
                    DataSourceID="ProductsDataSource" AutoGenerateColumns="False">
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>

        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            
            <Columns>
                <telerik:GridBoundColumn DataField="ProductID" DataType="System.Int32" 
                    HeaderText="ProductID" ReadOnly="True" SortExpression="ProductID" 
                    UniqueName="ProductID">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ProductName" HeaderText="ProductName" 
                    SortExpression="ProductName" UniqueName="ProductName">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="SupplierID" DataType="System.Int32" 
                    HeaderText="SupplierID" SortExpression="SupplierID" UniqueName="SupplierID">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="CategoryID" DataType="System.Int32" 
                    HeaderText="CategoryID" SortExpression="CategoryID" UniqueName="CategoryID">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="QuantityPerUnit" 
                    HeaderText="QuantityPerUnit" SortExpression="QuantityPerUnit" 
                    UniqueName="QuantityPerUnit">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitPrice" DataType="System.Decimal" 
                    HeaderText="UnitPrice" SortExpression="UnitPrice" UniqueName="UnitPrice">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsInStock" DataType="System.Int16" 
                    HeaderText="UnitsInStock" SortExpression="UnitsInStock" 
                    UniqueName="UnitsInStock">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsOnOrder" DataType="System.Int16" 
                    HeaderText="UnitsOnOrder" SortExpression="UnitsOnOrder" 
                    UniqueName="UnitsOnOrder">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ReorderLevel" DataType="System.Int16" 
                    HeaderText="ReorderLevel" SortExpression="ReorderLevel" 
                    UniqueName="ReorderLevel">
                </telerik:GridBoundColumn>
                <telerik:GridTemplateColumn HeaderText="Discontinued" SortExpression="Discontinued">
                    <ItemTemplate>
                        <asp:CheckBox ID="chkDiscontinued" runat="server" Checked='<%#Eval("Discontinued") %>' />
                    </ItemTemplate>
                </telerik:GridTemplateColumn>
            </Columns>
            
        </MasterTableView>
    </telerik:RadGrid>
    <asp:SqlDataSource ID="ProductsDataSource2" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT * FROM [Products]">
    </asp:SqlDataSource>
    <br /><br />
    <h1>Paging</h1>
    <table>
        <tr>
            <td>Pager position:</td>
            <td>
                <telerik:RadComboBox ID="rcbPagerPosition" runat="server" 
                                     AutoPostBack="true" 
                                     OnSelectedIndexChanged="rcbPagerPosition_SelectedIndexChanged">
                </telerik:RadComboBox>
            </td>
            <td>Pager Mode:</td>
            <td>
                <telerik:RadComboBox ID="rcbPagerMode" runat="server" 
                                     AutoPostBack="true" 
                                     DropDownWidth="150px"
                                     OnSelectedIndexChanged="rcbPagerMode_SelectedIndexChanged">
                </telerik:RadComboBox>
            </td>
        </tr>
    </table>
    <telerik:RadGrid ID="RadGrid5" runat="server" 
                     AllowPaging="True" 
                     DataSourceID="ProductsDataSource3" 
                     GridLines="None" 
                     >
        <ClientSettings>
            <Scrolling AllowScroll="True" UseStaticHeaders="True" />
        </ClientSettings>
        <MasterTableView DataKeyNames="ProductID" 
                    DataSourceID="ProductsDataSource" AutoGenerateColumns="False">
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>

        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            
            <Columns>
                <telerik:GridBoundColumn DataField="ProductID" DataType="System.Int32" 
                    HeaderText="ProductID" ReadOnly="True" SortExpression="ProductID" 
                    UniqueName="ProductID">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ProductName" HeaderText="ProductName" 
                    SortExpression="ProductName" UniqueName="ProductName">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="SupplierID" DataType="System.Int32" 
                    HeaderText="SupplierID" SortExpression="SupplierID" UniqueName="SupplierID">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="CategoryID" DataType="System.Int32" 
                    HeaderText="CategoryID" SortExpression="CategoryID" UniqueName="CategoryID">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="QuantityPerUnit" 
                    HeaderText="QuantityPerUnit" SortExpression="QuantityPerUnit" 
                    UniqueName="QuantityPerUnit">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitPrice" DataType="System.Decimal" 
                    HeaderText="UnitPrice" SortExpression="UnitPrice" UniqueName="UnitPrice">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsInStock" DataType="System.Int16" 
                    HeaderText="UnitsInStock" SortExpression="UnitsInStock" 
                    UniqueName="UnitsInStock">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsOnOrder" DataType="System.Int16" 
                    HeaderText="UnitsOnOrder" SortExpression="UnitsOnOrder" 
                    UniqueName="UnitsOnOrder">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ReorderLevel" DataType="System.Int16" 
                    HeaderText="ReorderLevel" SortExpression="ReorderLevel" 
                    UniqueName="ReorderLevel">
                </telerik:GridBoundColumn>
            </Columns>
            
        </MasterTableView>
    </telerik:RadGrid>

    <asp:SqlDataSource ID="ProductsDataSource3" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        OldValuesParameterFormatString="original_{0}" 
        SelectCommand="SELECT * FROM [Products]">
    </asp:SqlDataSource>
    <br /><br />
    <h1>Scrolling</h1>
    <table>
        <tr>
            <td>Enable Scroll:</td>
            <td>
                <asp:CheckBox ID="chkScroll" runat="server" Checked="true" AutoPostBack="true" OnCheckedChanged="chkScroll_CheckedChanged" />
            </td>
        </tr>
        <tr>
            <td>Enable Virtual Scroll:</td>
            <td>
                <asp:CheckBox ID="chkVirtualScroll" runat="server" Checked="true" AutoPostBack="true" OnCheckedChanged="chkVirtualScroll_CheckedChanged" />
            </td>
        </tr>
        <tr>
            <td>Use Statick Headers:</td>
            <td>
                <asp:CheckBox ID="chkStaticHeaders" runat="server" Checked="true" AutoPostBack="true" OnCheckedChanged="chkStaticHeaders_CheckedChanged" />
            </td>
        </tr>
        <tr>
            <td>Freeze ProductID and ProductName:</td>
            <td>
                <asp:CheckBox ID="chkFreeze" runat="server" AutoPostBack="true" OnCheckedChanged="chkFreeze_CheckedChanged" />
            </td>
        </tr>
    </table>
    <telerik:RadGrid ID="RadGrid6" runat="server" 
                     AllowPaging="True" 
                     DataSourceID="ProductsDataSource4" 
                     GridLines="None" 
                     PageSize="20"
                     Width="450px"
                     >
        <ClientSettings>
            <Scrolling AllowScroll="True" UseStaticHeaders="True" EnableVirtualScrollPaging="true" />
        </ClientSettings>
        <MasterTableView DataKeyNames="ProductID" 
                    DataSourceID="ProductsDataSource4" AutoGenerateColumns="False">
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>

        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            <Columns>
                <telerik:GridBoundColumn DataField="ProductID" DataType="System.Int32" 
                    HeaderText="ProductID" ReadOnly="True" SortExpression="Product ID" 
                    UniqueName="ProductID">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ProductName" HeaderText="Product Name" 
                    SortExpression="ProductName" UniqueName="ProductName">
                    <ItemStyle Width="200px" />
                    <HeaderStyle Width="200px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="SupplierName" HeaderText="Supplier Name" 
                    SortExpression="SupplierName" UniqueName="SupplierName">
                    <ItemStyle Width="200px" />
                    <HeaderStyle Width="200px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="CategoryName" HeaderText="Category Name" 
                    SortExpression="CategoryName" UniqueName="CategoryName">
                    <ItemStyle Width="200px" />
                    <HeaderStyle Width="200px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="QuantityPerUnit" 
                    HeaderText="Quantity Per Unit" SortExpression="QuantityPerUnit" 
                    UniqueName="QuantityPerUnit">
                    <ItemStyle Width="150px" />
                    <HeaderStyle Width="150px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitPrice" DataType="System.Decimal" 
                    HeaderText="Unit Price" SortExpression="UnitPrice" UniqueName="UnitPrice" DataFormatString="{0:c}">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsInStock" DataType="System.Int16" 
                    HeaderText="Units In Stock" SortExpression="UnitsInStock" 
                    UniqueName="UnitsInStock">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsOnOrder" DataType="System.Int16" 
                    HeaderText="Units On Order" SortExpression="UnitsOnOrder" 
                    UniqueName="UnitsOnOrder">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ReorderLevel" DataType="System.Int16" 
                    HeaderText="Reorder Level" SortExpression="ReorderLevel" 
                    UniqueName="ReorderLevel">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
            </Columns>
            
        </MasterTableView>
    </telerik:RadGrid>

    <asp:SqlDataSource ID="ProductsDataSource4" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        OldValuesParameterFormatString="original_{0}" 
        SelectCommand="SELECT p.ProductID, p.ProductName, s.CompanyName SupplierName, c.CategoryName, p.QuantityPerUnit, p.UnitPrice, p.UnitsInStock, p.UnitsOnOrder, p.ReorderLevel, p.Discontinued FROM dbo.Products p INNER JOIN dbo.Suppliers s ON p.SupplierID = s.SupplierID INNER JOIN dbo.Categories c ON p.CategoryID = c.CategoryID"> 
    </asp:SqlDataSource>

    <br /><br />
    <h1>Basic and Programatic Grouping</h1>
    <table>
        <tr>
            <td>Enable Grouping:</td>
            <td>
                <asp:CheckBox ID="chkGrouping" runat="server" AutoPostBack="true" OnCheckedChanged="chkGrouping_CheckedChanged" />
            </td>
        </tr>
        <tr>
            <td>Enable Group Load on Client:</td>
            <td>
                <asp:CheckBox ID="chkClientGroupLoad" runat="server" AutoPostBack="true" OnCheckedChanged="chkClientGroupLoad_CheckedChanged" />
            </td>
        </tr>
        <tr>
            <td>Enable Group Footers:</td>
            <td>
                <asp:CheckBox ID="chkGroupFooter" runat="server" AutoPostBack="true" OnCheckedChanged="chkGroupFooter_CheckedChanged" />
            </td>
        </tr>
        <tr>
            <td>Add Grouping By Supplier:</td>
            <td>
                <asp:CheckBox ID="chkGroupBySupplier" runat="server" AutoPostBack="true" OnCheckedChanged="chkGroupBySupplier_CheckedChanged" />
            </td>
        </tr>
    </table>
    <telerik:RadGrid ID="RadGrid7" runat="server" 
                     AllowPaging="True" 
                     DataSourceID="ProductsDataSource5" 
                     GridLines="None" 
                     >
        <ClientSettings>
            <Scrolling AllowScroll="True" UseStaticHeaders="True" />
        </ClientSettings>
        <GroupingSettings ShowUnGroupButton="true" />
        <MasterTableView DataKeyNames="ProductID" GroupLoadMode="Client" 
                    DataSourceID="ProductsDataSource5" AutoGenerateColumns="False">
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>

        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            <Columns>
                <telerik:GridBoundColumn DataField="ProductID" DataType="System.Int32" 
                    HeaderText="ProductID" ReadOnly="True" SortExpression="Product ID" 
                    UniqueName="ProductID">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ProductName" HeaderText="Product Name" 
                    SortExpression="ProductName" UniqueName="ProductName" Aggregate="Count">
                    <ItemStyle Width="200px" />
                    <HeaderStyle Width="200px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="SupplierName" HeaderText="Supplier Name" 
                    SortExpression="SupplierName" UniqueName="SupplierName">
                    <ItemStyle Width="200px" />
                    <HeaderStyle Width="200px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="CategoryName" HeaderText="Category Name" 
                    SortExpression="CategoryName" UniqueName="CategoryName">
                    <ItemStyle Width="200px" />
                    <HeaderStyle Width="200px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="QuantityPerUnit" 
                    HeaderText="Quantity Per Unit" SortExpression="QuantityPerUnit" 
                    UniqueName="QuantityPerUnit">
                    <ItemStyle Width="150px" />
                    <HeaderStyle Width="150px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitPrice" DataType="System.Decimal" 
                    HeaderText="Unit Price" SortExpression="UnitPrice" UniqueName="UnitPrice" 
                    DataFormatString="{0:c}" Aggregate="Avg" FooterAggregateFormatString="Avg {0:c}">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsInStock" DataType="System.Int16" 
                    HeaderText="Units In Stock" SortExpression="UnitsInStock" 
                    UniqueName="UnitsInStock">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsOnOrder" DataType="System.Int16" 
                    HeaderText="Units On Order" SortExpression="UnitsOnOrder" 
                    UniqueName="UnitsOnOrder">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ReorderLevel" DataType="System.Int16" 
                    HeaderText="Reorder Level" SortExpression="ReorderLevel" 
                    UniqueName="ReorderLevel">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
            </Columns>
            
        </MasterTableView>
    </telerik:RadGrid>

    <asp:SqlDataSource ID="ProductsDataSource5" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT p.ProductID, p.ProductName, s.CompanyName SupplierName, 
                              c.CategoryName, p.QuantityPerUnit, p.UnitPrice, 
                              p.UnitsInStock, p.UnitsOnOrder, p.ReorderLevel, 
                              p.Discontinued 
                         FROM dbo.Products p INNER JOIN dbo.Suppliers s 
                            ON p.SupplierID = s.SupplierID INNER JOIN dbo.Categories c 
                            ON p.CategoryID = c.CategoryID"> 
    </asp:SqlDataSource>
    <br /><br />
    <h1>Declarative Grouping</h1>
    <telerik:RadGrid ID="RadGrid9" runat="server" 
                     AllowPaging="True" 
                     ShowGroupPanel="true"
                     DataSourceID="ProductsDataSource6" 
                     GridLines="None"
                     PageSize="20" 
                     >
        <ClientSettings AllowDragToGroup="true">
            <Scrolling AllowScroll="True" UseStaticHeaders="True" />
        </ClientSettings>

        <GroupingSettings ShowUnGroupButton="true" RetainGroupFootersVisibility="true" />
        <MasterTableView DataKeyNames="ProductID" GroupLoadMode="Client" ShowGroupFooter="true" 
                    DataSourceID="ProductsDataSource6" AutoGenerateColumns="False">
        <GroupByExpressions>
             <telerik:GridGroupByExpression>
               <SelectFields>
                 <telerik:GridGroupByField
                   FieldAlias="Category"
                   FieldName="CategoryName" />
               </SelectFields>
               <GroupByFields>
                 <telerik:GridGroupByField
                   FieldAlias="Category"
                   FieldName="CategoryName" />
               </GroupByFields>
            </telerik:GridGroupByExpression>
        </GroupByExpressions>
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>

        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            <Columns>
                <telerik:GridBoundColumn DataField="ProductID" DataType="System.Int32" 
                    HeaderText="ProductID" ReadOnly="True" SortExpression="Product ID" 
                    UniqueName="ProductID">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ProductName" HeaderText="Product Name" 
                    SortExpression="ProductName" UniqueName="ProductName" Aggregate="Count">
                    <ItemStyle Width="200px" />
                    <HeaderStyle Width="200px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="SupplierName" HeaderText="Supplier Name" 
                    SortExpression="SupplierName" UniqueName="SupplierName">
                    <ItemStyle Width="200px" />
                    <HeaderStyle Width="200px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="CategoryName" HeaderText="Category Name" 
                    SortExpression="CategoryName" UniqueName="CategoryName">
                    <ItemStyle Width="200px" />
                    <HeaderStyle Width="200px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="QuantityPerUnit" 
                    HeaderText="Quantity Per Unit" SortExpression="QuantityPerUnit" 
                    UniqueName="QuantityPerUnit">
                    <ItemStyle Width="150px" />
                    <HeaderStyle Width="150px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitPrice" DataType="System.Decimal" 
                    HeaderText="Unit Price" SortExpression="UnitPrice" UniqueName="UnitPrice" 
                    DataFormatString="{0:c}" Aggregate="Avg" FooterAggregateFormatString="Avg {0:c}">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsInStock" DataType="System.Int16" 
                    HeaderText="Units In Stock" SortExpression="UnitsInStock" 
                    UniqueName="UnitsInStock">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsOnOrder" DataType="System.Int16" 
                    HeaderText="Units On Order" SortExpression="UnitsOnOrder" 
                    UniqueName="UnitsOnOrder">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ReorderLevel" DataType="System.Int16" 
                    HeaderText="Reorder Level" SortExpression="ReorderLevel" 
                    UniqueName="ReorderLevel">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
            </Columns>
            
        </MasterTableView>
    </telerik:RadGrid>

    <asp:SqlDataSource ID="ProductsDataSource6" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT p.ProductID, p.ProductName, s.CompanyName SupplierName, 
                              c.CategoryName, p.QuantityPerUnit, p.UnitPrice, 
                              p.UnitsInStock, p.UnitsOnOrder, p.ReorderLevel, 
                              p.Discontinued 
                         FROM dbo.Products p INNER JOIN dbo.Suppliers s 
                            ON p.SupplierID = s.SupplierID INNER JOIN dbo.Categories c 
                            ON p.CategoryID = c.CategoryID"> 
    </asp:SqlDataSource>

    <br /><br />
    <h1>Basic Filtering</h1>
    <telerik:RadGrid ID="RadGrid10" runat="server" 
                     AllowPaging="True" 
                     AllowFilteringByColumn="true"
                     DataSourceID="ProductsDataSource7" 
                     GridLines="None"
                     PageSize="20">
        <ClientSettings>
            <Scrolling AllowScroll="True" UseStaticHeaders="True" />
        </ClientSettings>

        <MasterTableView DataKeyNames="ProductID" 
                    DataSourceID="ProductsDataSource7" AutoGenerateColumns="False">
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>

        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            <Columns>
                <telerik:GridBoundColumn DataField="ProductID" DataType="System.Int32" 
                    HeaderText="ProductID" ReadOnly="True" SortExpression="Product ID" 
                    UniqueName="ProductID">
                    <ItemStyle Width="80px" />
                    <HeaderStyle Width="80px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ProductName" HeaderText="Product Name" 
                    SortExpression="ProductName" UniqueName="ProductName" Aggregate="Count">
                    <ItemStyle Width="200px" />
                    <HeaderStyle Width="200px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="SupplierName" HeaderText="Supplier Name" 
                    SortExpression="SupplierName" UniqueName="SupplierName">
                    <ItemStyle Width="200px" />
                    <HeaderStyle Width="200px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="CategoryName" HeaderText="Category Name" 
                    SortExpression="CategoryName" UniqueName="CategoryName">
                    <ItemStyle Width="200px" />
                    <HeaderStyle Width="200px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="QuantityPerUnit" 
                    HeaderText="Quantity Per Unit" SortExpression="QuantityPerUnit" 
                    UniqueName="QuantityPerUnit">
                    <ItemStyle Width="150px" />
                    <HeaderStyle Width="150px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitPrice" DataType="System.Decimal" 
                    HeaderText="Unit Price" SortExpression="UnitPrice" UniqueName="UnitPrice" 
                    DataFormatString="{0:c}" Aggregate="Avg" FooterAggregateFormatString="Avg {0:c}">
                    <ItemStyle Width="120px" />
                    <HeaderStyle Width="120px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsInStock" DataType="System.Int16" 
                    HeaderText="Units In Stock" SortExpression="UnitsInStock" 
                    UniqueName="UnitsInStock">
                    <ItemStyle Width="120px" />
                    <HeaderStyle Width="120px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsOnOrder" DataType="System.Int16" 
                    HeaderText="Units On Order" SortExpression="UnitsOnOrder" 
                    UniqueName="UnitsOnOrder">
                    <ItemStyle Width="120px" />
                    <HeaderStyle Width="120px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ReorderLevel" DataType="System.Int16" 
                    HeaderText="Reorder Level" SortExpression="ReorderLevel" 
                    UniqueName="ReorderLevel">
                    <ItemStyle Width="120px" />
                    <HeaderStyle Width="120px" />
                </telerik:GridBoundColumn>
            </Columns>
            
        </MasterTableView>
    </telerik:RadGrid>

    <asp:SqlDataSource ID="ProductsDataSource7" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT p.ProductID, p.ProductName, s.CompanyName SupplierName, 
                              c.CategoryName, p.QuantityPerUnit, p.UnitPrice, 
                              p.UnitsInStock, p.UnitsOnOrder, p.ReorderLevel, 
                              p.Discontinued 
                         FROM dbo.Products p INNER JOIN dbo.Suppliers s 
                            ON p.SupplierID = s.SupplierID INNER JOIN dbo.Categories c 
                            ON p.CategoryID = c.CategoryID"> 
    </asp:SqlDataSource>
    <br /><br />
    <h1>Automatic Insert/Update/Delete</h1>
    <asp:UpdatePanel ID="UplatePanel11" runat="server">
    <ContentTemplate>
    <telerik:RadGrid ID="RadGrid11" runat="server" AllowAutomaticDeletes="True" 
        AllowAutomaticInserts="True" AllowAutomaticUpdates="True" 
        AutoGenerateColumns="False" AutoGenerateDeleteColumn="True" 
        AutoGenerateEditColumn="True" DataSourceID="SqlDataSource1" GridLines="None">
        <MasterTableView CommandItemDisplay="Top" DataKeyNames="CategoryID" 
                    DataSourceID="SqlDataSource1" EditMode="InPlace">
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>

        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            <Columns>
                <telerik:GridBoundColumn DataField="CategoryID" DataType="System.Int32" 
                    HeaderText="CategoryID" ReadOnly="True" SortExpression="CategoryID" 
                    UniqueName="CategoryID">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="CategoryName" HeaderText="CategoryName" 
                    SortExpression="CategoryName" UniqueName="CategoryName" 
                    DataType="System.String">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="Description" HeaderText="Description" 
                    SortExpression="Description" UniqueName="Description" DataType="System.String">
                </telerik:GridBoundColumn>
            </Columns>
            <EditFormSettings CaptionDataField="ID" CaptionFormatString="Category {0}">
            </EditFormSettings>
        </MasterTableView>
    </telerik:RadGrid>

    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        DeleteCommand="DELETE FROM [Categories] WHERE [CategoryID] = @original_CategoryID" 
        InsertCommand="INSERT INTO [Categories] ([CategoryName], [Description]) VALUES (@CategoryName, @Description)" 
        OldValuesParameterFormatString="original_{0}" 
        SelectCommand="SELECT [CategoryID], [CategoryName], [Description] FROM [Categories]" 
        
        UpdateCommand="UPDATE [Categories] SET [CategoryName] = @CategoryName, [Description] = @Description WHERE [CategoryID] = @original_CategoryID">
        <DeleteParameters>
            <asp:Parameter Name="original_CategoryID" Type="Int32" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="CategoryName" Type="String" />
            <asp:Parameter Name="Description" Type="String" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="CategoryName" Type="String" />
            <asp:Parameter Name="Description" Type="String" />
            <asp:Parameter Name="original_CategoryID" Type="Int32" />
        </UpdateParameters>
    </asp:SqlDataSource>

    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Insert/Update/Delete with a WebUserControl as Edit Form</h1>
    <telerik:RadGrid ID="RadGrid12" runat="server" 
        AutoGenerateColumns="False" AutoGenerateDeleteColumn="True" 
        AutoGenerateEditColumn="True" GridLines="None"
        OnNeedDataSource="RadGrid12_NeedDataSource"
        OnInsertCommand="RadGrid12_InsertCommand"
        OnUpdateCommand="RadGrid12_UpdateCommand"
        OnDeleteCommand="RadGrid12_DeleteCommand">
        <MasterTableView CommandItemDisplay="Top" DataKeyNames="CategoryID" EditMode="PopUp">
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>

        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            <Columns>
                <telerik:GridBoundColumn DataField="CategoryID" DataType="System.Int32" 
                    HeaderText="CategoryID" ReadOnly="True" SortExpression="CategoryID" 
                    UniqueName="CategoryID">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="CategoryName" HeaderText="CategoryName" 
                    SortExpression="CategoryName" UniqueName="CategoryName" 
                    DataType="System.String">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="Description" HeaderText="Description" 
                    SortExpression="Description" UniqueName="Description" DataType="System.String">
                </telerik:GridBoundColumn>
            </Columns>
            <EditFormSettings CaptionDataField="CategoryID" CaptionFormatString="Category {0}"
                              EditFormType="WebUserControl" UserControlName="MyCategory_RadGridCustomFormEditor.ascx">
            </EditFormSettings>
        </MasterTableView>
    </telerik:RadGrid>
    <br /><br />
    <h1>Custom Editors</h1>
    <asp:UpdatePanel ID="UpdatePanel13" runat="server">
    <ContentTemplate>
    <telerik:RadGrid ID="RadGrid13" runat="server" 
        AutoGenerateColumns="False" AutoGenerateDeleteColumn="True" 
        AllowPaging="True" DataSourceID="ProductsDataSource13"
        AllowAutomaticDeletes="True" AllowAutomaticInserts="True" AllowAutomaticUpdates="True"
        AutoGenerateEditColumn="True" GridLines="None"
        OnCreateColumnEditor="RadGrid13_CreateColumnEditor">
        <MasterTableView CommandItemDisplay="Top" DataKeyNames="ProductID" EditMode="PopUp">
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>
        
        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            <Columns>
                <telerik:GridBoundColumn DataField="ProductID" DataType="System.Int32" 
                    HeaderText="ProductID" ReadOnly="True" SortExpression="ProductID" 
                    UniqueName="ProductID">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ProductName" HeaderText="ProductName" 
                    SortExpression="ProductName" UniqueName="ProductName">
                </telerik:GridBoundColumn>
                <telerik:GridDropDownColumn DataField="SupplierID" DataType="System.Int32" 
                    HeaderText="Supplier" SortExpression="SupplierID" UniqueName="SupplierID"
                    DataSourceID="SuppliersDataSource" ListTextField="CompanyName" ListValueField="SupplierID">
                </telerik:GridDropDownColumn>
                <telerik:GridDropDownColumn DataField="CategoryID" DataType="System.Int32" 
                    HeaderText="CategoryID" SortExpression="CategoryID" UniqueName="CategoryID"
                    ListValueField="CategoryID" ListTextField="CategoryName">
                </telerik:GridDropDownColumn>
                <telerik:GridBoundColumn DataField="QuantityPerUnit" 
                    HeaderText="QuantityPerUnit" SortExpression="QuantityPerUnit" 
                    UniqueName="QuantityPerUnit">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitPrice" DataType="System.Decimal" 
                    HeaderText="UnitPrice" SortExpression="UnitPrice" UniqueName="UnitPrice">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsInStock" DataType="System.Int16" 
                    HeaderText="UnitsInStock" SortExpression="UnitsInStock" 
                    UniqueName="UnitsInStock">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsOnOrder" DataType="System.Int16" 
                    HeaderText="UnitsOnOrder" SortExpression="UnitsOnOrder" 
                    UniqueName="UnitsOnOrder">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ReorderLevel" DataType="System.Int16" 
                    HeaderText="ReorderLevel" SortExpression="ReorderLevel" ColumnEditorID="GridTextBoxColumnEditor1" 
                    UniqueName="ReorderLevel">
                </telerik:GridBoundColumn>
                <telerik:GridCheckBoxColumn DataField="Discontinued" DataType="System.Boolean"
                    HeaderText="Discontinued" SortExpression="Discontinued" UniqueName="Discontinued">
                </telerik:GridCheckBoxColumn>
            </Columns>
        </MasterTableView>
        <ClientSettings>
            <Scrolling AllowScroll="true" UseStaticHeaders="true" />
        </ClientSettings>
    </telerik:RadGrid>
        <telerik:GridTextBoxColumnEditor ID="GridTextBoxColumnEditor1" runat="server">
            <TextBoxStyle Font-Bold="true" Font-Italic="true" BackColor="Yellow" ForeColor="Red" />
        </telerik:GridTextBoxColumnEditor>
    <asp:SqlDataSource ID="CategoriesDataSource" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT CategoryID, CategoryName FROM [Categories]" >
    </asp:SqlDataSource>
    <asp:SqlDataSource ID="SuppliersDataSource" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT SupplierID, CompanyName FROM [Suppliers]" >
    </asp:SqlDataSource>
    <asp:SqlDataSource ID="ProductsDataSource13" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT * FROM [Products]" 
        DeleteCommand="DELETE FROM [Products] WHERE [ProductID] = @ProductID" 
        InsertCommand="INSERT INTO [Products] ([ProductName], [SupplierID], [CategoryID], [QuantityPerUnit], [UnitPrice], [UnitsInStock], [UnitsOnOrder], [ReorderLevel], [Discontinued]) VALUES (@ProductName, @SupplierID, @CategoryID, @QuantityPerUnit, @UnitPrice, @UnitsInStock, @UnitsOnOrder, @ReorderLevel, @Discontinued)" 
        UpdateCommand="UPDATE [Products] SET [ProductName] = @ProductName, [SupplierID] = @SupplierID, [CategoryID] = @CategoryID, [QuantityPerUnit] = @QuantityPerUnit, [UnitPrice] = @UnitPrice, [UnitsInStock] = @UnitsInStock, [UnitsOnOrder] = @UnitsOnOrder, [ReorderLevel] = @ReorderLevel, [Discontinued] = @Discontinued WHERE [ProductID] = @ProductID">
        <DeleteParameters>
            <asp:Parameter Name="ProductID" Type="Int32" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="ProductName" Type="String" />
            <asp:Parameter Name="SupplierID" Type="Int32" />
            <asp:Parameter Name="CategoryID" Type="Int32" />
            <asp:Parameter Name="QuantityPerUnit" Type="String" />
            <asp:Parameter Name="UnitPrice" Type="Decimal" />
            <asp:Parameter Name="UnitsInStock" Type="Int16" />
            <asp:Parameter Name="UnitsOnOrder" Type="Int16" />
            <asp:Parameter Name="ReorderLevel" Type="Int16" />
            <asp:Parameter Name="Discontinued" Type="Boolean" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="ProductName" Type="String" />
            <asp:Parameter Name="SupplierID" Type="Int32" />
            <asp:Parameter Name="CategoryID" Type="Int32" />
            <asp:Parameter Name="QuantityPerUnit" Type="String" />
            <asp:Parameter Name="UnitPrice" Type="Decimal" />
            <asp:Parameter Name="UnitsInStock" Type="Int16" />
            <asp:Parameter Name="UnitsOnOrder" Type="Int16" />
            <asp:Parameter Name="ReorderLevel" Type="Int16" />
            <asp:Parameter Name="Discontinued" Type="Boolean" />
            <asp:Parameter Name="ProductID" Type="Int32" />
        </UpdateParameters>
    </asp:SqlDataSource>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Client Side Insert/Update/Delete</h1>
    <telerik:RadWindowManager ID="RadWindowManager1" runat="server" 
                            DestroyOnClose="false"
                            VisibleStatusbar="false" 
                            Modal="true" 
                            Behaviors="Close"
                            ShowContentDuringLoad="false" 
                            ReloadOnShow="true"
                            style="z-index:20000">
    </telerik:RadWindowManager>
    <telerik:RadGrid ID="RadGrid14" runat="server" 
                     AutoGenerateColumns="false"
                     AllowPaging="True" 
                     AllowSorting="True"
                     AllowMultiRowSelection="false"
                     AllowFilteringByColumn="true"
                     GridLines="None">
        <MasterTableView DataKeyNames="CategoryID" ClientDataKeyNames="CategoryID" CommandItemDisplay="Top">
        <CommandItemTemplate>
               <asp:Button ID="btnAddNew" runat="server" Text="Add New" OnClientClick="javascript:AddNew();return false;" />
               &nbsp;
               <asp:Button ID="btnEdit" runat="server" Text="Edit Selected" OnClientClick="javascript:Edit();return false;" />
               &nbsp;
               <asp:Button ID="btnDelete" runat="server" Text="Delete Selected" OnClientClick="javascript:Delete();return false;" />
        </CommandItemTemplate>
        <Columns>
            <telerik:GridBoundColumn DataField="CategoryID" HeaderText="CategoryID" SortExpression="CategoryID" UniqueName="CategoryID" DataType="System.Int32">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="CategoryName" HeaderText="CategoryName" SortExpression="CategoryName" UniqueName="CategoryName" DataType="System.String">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Description" HeaderText="Description" SortExpression="Description" UniqueName="Description" DataType="System.String">
            </telerik:GridBoundColumn>
        </Columns>
        </MasterTableView>
        <ClientSettings>
            <Selecting AllowRowSelect="true" />
            <ClientEvents OnCommand="RadGrid14_Command" OnRowDblClick="RadGrid14_RowDblClick" />
        </ClientSettings>
    </telerik:RadGrid>

    <telerik:RadCodeBlock ID="RadCodeBlock2" runat="server">

    <script type="text/javascript">
        function GetRadWindow() {
            var oWindow = null;
            if (window.radWindow) oWindow = window.radWindow;
            else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
            return oWindow;
        }

        function RadGrid14_RowDblClick(sender, eventArgs) {
            Edit();
        }

        function ExportPDF() {
            var grid = $find("<%=RadGrid14.ClientID %>");
            var tableView = grid.get_masterTableView();
            tableView.exportToPdf();
        }

        function AddNew() {
            window.setTimeout(function () {
                var manager = GetRadWindowManager();
                var oWnd2 = manager.open("radgrid_editform.aspx", "RadWindow1");
                oWnd2.setSize(500, 400);
                oWnd2.center();
                oWnd2.set_title("Add New Category");
                oWnd2.set_modal(true);
                oWnd2.add_close(grid_add);
            }, 0)
        }

        function Edit() {
            var grid = $find("<%=RadGrid14.ClientID %>");
            if (grid.get_masterTableView().get_selectedItems().length == 0) {
                radalert("You must select a row to edit.");
                return;
            }
            var selected = grid.get_masterTableView().get_selectedItems()[0];
            var id = selected.getDataKeyValue("CategoryID");
            window.setTimeout(function () {
                var manager = GetRadWindowManager();
                var oWnd2 = manager.open("radgrid_editform.aspx?id=" + id, "RadWindow1");
                oWnd2.setSize(500, 400);
                oWnd2.center();
                oWnd2.set_title("Edit Category");
                oWnd2.set_modal(true);
                oWnd2.add_close(grid_update);
            }, 0)
        }

        function grid_add(sender, eventArgs) {
            var arg = eventArgs.get_argument();
            if (arg) {
                PageMethods.AddCategory(arg.Name, arg.Description, Reload, GetError);
            }
        }

        function grid_update(sender, eventArgs) {
            var arg = eventArgs.get_argument();
            if (arg) {
                PageMethods.UpdateCategory(arg.id, arg.Name, arg.Description, Reload, GetError);
            }
        }

        function GetError(result) {
            alert(result.get_message());
        }

        function Reload(result) {
            if (result != "OK") return;
            var grid = $find("<%= RadGrid14.ClientID %>");
            var tableView = grid.get_masterTableView();
            var pageSize = tableView.get_pageSize();
            var sortExpression = tableView.get_sortExpressions().toString();
            var filterExpression = tableView.get_filterExpressions().toString();
            var currentPageIndex = tableView.get_currentPageIndex();
            PageMethods.GetCategories(currentPageIndex * pageSize,
                                    pageSize,
                                    sortExpression,
                                    filterExpression,
                                    BindGrid2);

            PageMethods.GetCatCount(filterExpression, updateVirtualItemCount2);

            grid.clearSelectedItems();
        }

        function Delete() {
            var grid = $find("<%=RadGrid14.ClientID %>");
            if (grid.get_masterTableView().get_selectedItems().length == 0) {
                radalert("You must select a category to delete.");
                return;
            }
            var selected = grid.get_masterTableView().get_selectedItems()[0];
            var id = selected.getDataKeyValue("CategoryID");
            radconfirm("Are you sure you want to delete the category?", ConfirmDelete);
        }

        function ConfirmDelete(arg) {
            if (arg) {
                var grid = $find("<%=RadGrid14.ClientID %>");
                var selected = grid.get_masterTableView().get_selectedItems()[0];
                var id = selected.getDataKeyValue("CategoryID");
                PageMethods.DeleteCategory(id, Reload);
            }
        }

        function RadGrid14_Command(sender, args) {
            args.set_cancel(true);

            var tableView = $find("<%= RadGrid14.ClientID %>").get_masterTableView();
            var pageSize = tableView.get_pageSize();
            var sortExpression = tableView.get_sortExpressions().toString();
            var filterExpression = tableView.get_filterExpressions().toString();
            var currentPageIndex = sender.get_masterTableView().get_currentPageIndex();

            if (args.get_commandName() == "Filter")
                currentPageIndex = 0;

            PageMethods.GetCategories(currentPageIndex * pageSize,
                                    pageSize,
                                    sortExpression,
                                    filterExpression,
                                    BindGrid2);

            // we only need to count the items again if the filter changed
            if (args.get_commandName() == "Filter") {
                PageMethods.GetCatCount(filterExpression, updateVirtualItemCount2);
            }
        }

        function BindGrid2(result) {
            var grid = $find("<%= RadGrid14.ClientID %>");
            var tableView = grid.get_masterTableView();
            tableView.set_dataSource(result);
            tableView.dataBind();
            grid.clearSelectedItems();
        }

        function updateVirtualItemCount2(result) {
            var grid = $find("<%= RadGrid14.ClientID %>");
            var tableView = grid.get_masterTableView();
            tableView.set_virtualItemCount(result);
            grid.clearSelectedItems();
        }

    </script>

    </telerik:RadCodeBlock>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</asp:Content>
