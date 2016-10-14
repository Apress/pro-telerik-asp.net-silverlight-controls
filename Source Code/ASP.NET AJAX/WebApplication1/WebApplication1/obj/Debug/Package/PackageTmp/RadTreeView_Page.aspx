<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Site.Master" CodeBehind="RadTreeView_Page.aspx.cs" Inherits="WebApplication1.RadTreeView_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
        <telerik:RadTreeView ID="RadTreeView1" runat="server" Skin="Web20" EnableDragAndDrop="true" 
            EnableDragAndDropBetweenNodes="true" DataSourceID="SqlDataSource1" OnNodeDrop="RadTreeView1_NodeDrop"
            DataFieldID="ID" DataFieldParentID="parentID" DataTextField="Name" DataValueField="ID">
        </telerik:RadTreeView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="select ProductID as ID, ProductName as Name, UnitPrice, CategoryID+1000 as parentID
                        from Products p
                        union all
                        select CategoryID+1000 as ID, CategoryName as Name, 0 as UnitPrice, null as parentID
                        from Categories">
        </asp:SqlDataSource>
        <telerik:RadTreeView ID="RadTreeView6" runat="server" Skin="Web20" EnableDragAndDrop="true" 
            EnableDragAndDropBetweenNodes="false" DataSourceID="SqlDataSource1" OnNodeDrop="RadTreeView6_NodeDrop"
            DataFieldID="ID" DataFieldParentID="parentID" DataTextField="Name" DataValueField="ID">
        </telerik:RadTreeView>
        <asp:ListBox ID="listProducts" runat="server" Width="200px" Height="100px">
        </asp:ListBox>
        <br /><br />
        <telerik:RadTreeView ID="RadTreeView2" runat="server" Skin="Web20" CheckBoxes="true" 
            DataFieldID="ID" DataFieldParentID="parentID" DataSourceID="SqlDataSource1" 
            DataTextField="Name" DataValueField="ID">
            <DataBindings>
                <telerik:RadTreeNodeBinding Depth="0" Checkable="false" />
            </DataBindings>
        </telerik:RadTreeView>
        <telerik:RadTreeView ID="RadTreeView21" runat="server" Skin="Web20" CheckBoxes="true" 
            DataFieldID="ID" DataFieldParentID="parentID" DataSourceID="SqlDataSource1" 
            DataTextField="Name" DataValueField="ID" TriStateCheckBoxes="true">
        </telerik:RadTreeView>
        <br /><br />
        <telerik:RadTreeView ID="RadTreeView3" runat="server" Skin="Web20" 
            DataFieldID="CategoryID" DataSourceID="SqlDataSource2" 
            DataTextField="CategoryName" DataValueField="CategoryID">
            <DataBindings>
                <telerik:RadTreeNodeBinding Depth="0" ExpandMode="WebService" />
            </DataBindings>
            <WebServiceSettings Path="RadTreeWebService.asmx" Method="GetProducts" />
        </telerik:RadTreeView>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="select CategoryID, CategoryName from Categories">
        </asp:SqlDataSource>
        <br /><br />
        <telerik:RadTreeView ID="RadTreeView4" runat="server" Skin="Web20"
            DataFieldID="ID" DataFieldParentID="parentID" DataSourceID="SqlDataSource1" 
            DataTextField="Name" DataValueField="ID" AllowNodeEditing="true"
            OnNodeEdit="RadTreeView4_NodeEdit">
        </telerik:RadTreeView>

        <br /><br />
        <telerik:RadTreeView ID="RadTreeView5" runat="server" Skin="Web20"
            DataFieldID="ID" DataFieldParentID="parentID" DataSourceID="SqlDataSource1" 
            DataTextField="Name" DataValueField="ID" OnNodeDataBound="RadTreeView5_NodeDataBound">
            <NodeTemplate>
                <div id="divElement" runat="server">
                    <asp:Label ID="lblNodeText" runat="server"></asp:Label>
                    <asp:Label ID="lblPrice" runat="server"></asp:Label>
                </div>
            </NodeTemplate>
        </telerik:RadTreeView>

        <br /><br />

        <telerik:RadTreeView ID="RadTreeView11" runat="server" Skin="Web20">
        <Nodes>
            <telerik:RadTreeNode Text="Products" NavigateUrl="Products/Default.aspx">
                <Nodes>
                    <telerik:RadTreeNode Text="Bread" NavigateUrl="Products/Bread.aspx"></telerik:RadTreeNode>
                    <telerik:RadTreeNode Text="Butter" NavigateUrl="Products/Butter.aspx"></telerik:RadTreeNode>
                    <telerik:RadTreeNode Text="Milk" NavigateUrl="Products/Milk.aspx"></telerik:RadTreeNode>
                    <telerik:RadTreeNode Text="Ham" NavigateUrl="Products/Ham.aspx"></telerik:RadTreeNode>
                </Nodes>
            </telerik:RadTreeNode>
            <telerik:RadTreeNode Text="Stores" NavigateUrl="Stores/Default.aspx">
                <Nodes>
                    <telerik:RadTreeNode Text="HQ" NavigateUrl="Stores/hq.aspx"></telerik:RadTreeNode>
                    <telerik:RadTreeNode Text="North" NavigateUrl="Stores/North.aspx"></telerik:RadTreeNode>
                    <telerik:RadTreeNode Text="South" NavigateUrl="Stores/South.aspx"></telerik:RadTreeNode>
                </Nodes>
            </telerik:RadTreeNode>
        </Nodes>
        </telerik:RadTreeView>


    </div>
</asp:Content>