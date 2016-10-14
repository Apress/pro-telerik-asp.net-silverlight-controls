<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Site.Master" CodeBehind="RadSiteMap_Page.aspx.cs" Inherits="WebApplication1.RadSiteMap_Page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div style="width:800px; margin-left:auto; margin-right:auto">
        <telerik:RadSiteMap ID="RadSiteMap1" runat="server"
            DataSourceID="RadSiteMapDataSource1" Skin="Forest">
            <LevelSettings>
                <telerik:SiteMapLevelSetting Level="0" Layout="List">
                    <ListLayout RepeatColumns="3" RepeatDirection="Horizontal" />
                </telerik:SiteMapLevelSetting>
                <telerik:SiteMapLevelSetting Level="1" Layout="Flow">
                </telerik:SiteMapLevelSetting>
            </LevelSettings>
        </telerik:RadSiteMap>
        
        <br /><br />
        
        <telerik:RadSiteMap ID="RadSiteMap2" runat="server" ShowNodeLines="true"
            DataSourceID="RadSiteMapDataSource1" Skin="Forest">
            <LevelSettings>
                <telerik:SiteMapLevelSetting Level="0" Layout="List">
                    <ListLayout RepeatColumns="3" RepeatDirection="Horizontal" />
                </telerik:SiteMapLevelSetting>
                <telerik:SiteMapLevelSetting Level="1" Layout="List">
                </telerik:SiteMapLevelSetting>
            </LevelSettings>
        </telerik:RadSiteMap>
        
        <br /><br />

        <telerik:RadSiteMap ID="RadSiteMap3" runat="server" ShowNodeLines="true"
            DataSourceID="RadSiteMapDataSource1" Skin="Forest">
            <LevelSettings>
                <telerik:SiteMapLevelSetting Level="0" Layout="List">
                    <ListLayout RepeatColumns="3" RepeatDirection="Horizontal" />
                    <NodeTemplate>
                        <h1><%# DataBinder.Eval(Container.DataItem, "title") %></h1>
                        <p><%# DataBinder.Eval(Container.DataItem, "description") %></p>
                    </NodeTemplate>
                </telerik:SiteMapLevelSetting>
                <telerik:SiteMapLevelSetting Level="1" Layout="List">
                </telerik:SiteMapLevelSetting>
            </LevelSettings>
        </telerik:RadSiteMap>
        
        <br /><br />
        
        
        <telerik:RadSiteMapDataSource ID="RadSiteMapDataSource1" runat="server" 
            SiteMapFile="~/Web.sitemap" ShowStartingNode="False" />
    </div>
    <div style="width:800px; margin-left:auto; margin-right:auto">
        <telerik:RadSiteMap ID="RadSiteMap4" runat="server" ShowNodeLines="true"
            DataSourceID="SqlDataSource1" Skin="Forest"
            DataFieldID="ID" DataFieldParentID="parentID" DataTextField="Name" DataValueField="ID">
            <LevelSettings>
                <telerik:SiteMapLevelSetting Level="0" Layout="List">
                    <ListLayout AlignRows="true" RepeatColumns="3" RepeatDirection="Horizontal" />
                </telerik:SiteMapLevelSetting>
                <telerik:SiteMapLevelSetting Level="1" Layout="List">
                </telerik:SiteMapLevelSetting>
            </LevelSettings>
        </telerik:RadSiteMap>

        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="select ProductID as ID, ProductName as Name, UnitPrice, CategoryID+1000 as parentID
                        from Products p
                        union all
                        select CategoryID+1000 as ID, CategoryName as Name, 0 as UnitPrice, null as parentID
                        from Categories">
        </asp:SqlDataSource>
        
        <br /><br />
    </div>
</asp:Content>