<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Site.Master" CodeBehind="RadMenu_Page.aspx.cs" Inherits="WebApplication1.RadMenu_Page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div>
        <telerik:RadMenu ID="RadMenu11" runat="server" Skin="Sunset">
            <Items>
                <telerik:RadMenuItem runat="server" Text="File">
                    <Items>
                        <telerik:RadMenuItem runat="server" Text="New" ImageUrl="~/Images/icons/file.png">
                        </telerik:RadMenuItem>
                        <telerik:RadMenuItem runat="server" Text="Open" ImageUrl="~/Images/icons/folder_open.png">
                        </telerik:RadMenuItem>
                        <telerik:RadMenuItem runat="server" IsSeparator="true">
                        </telerik:RadMenuItem>
                        <telerik:RadMenuItem runat="server" Text="Save" ImageUrl="~/Images/icons/save.png">
                        </telerik:RadMenuItem>
                    </Items>
                </telerik:RadMenuItem>
            </Items>
        </telerik:RadMenu>
        <br />

        <telerik:RadMenu ID="RadMenu1" runat="server" DataFieldID="EmployeeID" 
            DataFieldParentID="ReportsTo" DataSourceID="SqlDataSource1" 
            DataTextField="Name" DataValueField="EmployeeID" Skin="Windows7">
        </telerik:RadMenu>

        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
            SelectCommand="SELECT [EmployeeID], [LastName] + ', ' + [FirstName] AS [Name], [ReportsTo] FROM [Employees]">
        </asp:SqlDataSource>
        
        
        <br /><br />

<telerik:RadMenu ID="RadMenu2" runat="server" DataFieldID="ID" 
    DataFieldParentID="parentID" DataSourceID="SqlDataSource2" 
    DataTextField="Name" DataValueField="ID" Skin="Windows7"
    OnItemClick="RadMenu2_ItemClick" OnClientItemClicked="RadMenu2_ClientItemClicked">
    <DefaultGroupSettings RepeatColumns="2" RepeatDirection="Horizontal" />
</telerik:RadMenu>
<br /><br />
<asp:Label ID="lblMenuItem" runat="server" Visible="false"></asp:Label>

<asp:SqlDataSource ID="SqlDataSource2" runat="server" 
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
    SelectCommand="select ProductID as ID, ProductName as Name, UnitPrice, CategoryID+1000 as parentID
                    from Products p
                    union all
                    select CategoryID+1000 as ID, CategoryName as Name, 0 as UnitPrice, null as parentID
                    from Categories">
</asp:SqlDataSource>

        <br /><br />
        
        <telerik:RadMenu ID="RadMenu3" runat="server" DataFieldID="ID" 
                         DataFieldParentID="parentID" DataSourceID="SqlDataSource2" 
                         OnItemDataBound="RadMenu3_ItemDataBound"
                         DataTextField="Name" DataValueField="ID" Skin="Windows7">
                         <ItemTemplate>
                            <asp:CheckBox ID="chkProduct" runat="server" Visible='<%# int.Parse(DataBinder.Eval(Container.DataItem, "ID").ToString()) < 1000 %>' />
                            <asp:Label ID="lblProduct" runat="server" Text='<%# DataBinder.Eval(Container.DataItem, "Name") %>' />
                         </ItemTemplate>
        </telerik:RadMenu>
        
        
        <br /><br />
        
        <telerik:RadMenu ID="RadMenu4" runat="server" DataFieldID="ID" 
                         DataFieldParentID="parentID" DataSourceID="SqlDataSource2" 
                         OnItemDataBound="RadMenu4_ItemDataBound"
                         OnClientItemClicked="RadMenu4_ClientItemClicked"
                         DataTextField="Name" DataValueField="ID" Skin="Windows7">
        </telerik:RadMenu>
        
        
        <br /><br />
        <telerik:RadContextMenu ID="RadContextMenu1" Runat="server" 
            style="right: 740px; z-index: 15000">
            <Targets>
                <telerik:ContextMenuControlTarget ControlID="RadMenu1" />
            </Targets>
            <Items>
                <telerik:RadMenuItem runat="server" Text="Root RadMenuItem1">
                </telerik:RadMenuItem>
            </Items>
        </telerik:RadContextMenu>
        <br /><br />
        
    </div>
    
    
<script type="text/javascript" language="javascript">
    function RadMenu2_ClientItemClicked(sender, args) {
        alert(args.get_item().get_text());
    }
    function RadMenu4_ClientItemClicked(sender, args) {
        alert("Unit Price: " + args.get_item().get_attributes().getAttribute("UnitPrice"));
    }
</script>
</asp:Content>