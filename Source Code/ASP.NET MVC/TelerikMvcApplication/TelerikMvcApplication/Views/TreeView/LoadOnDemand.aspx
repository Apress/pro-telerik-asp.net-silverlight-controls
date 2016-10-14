<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<TelerikMvcApplication.Models.Region>>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>
<%@ Import Namespace="TelerikMvcApplication.Models" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadTreeView
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadTreeView - Load On Demand using Ajax Requests</h2>
    
            <%=
                Html.Telerik().TreeView()
                    .Name("treeView_LOD_Ajax")
                    .BindTo(Model, (item, region) =>
                                       {
                                           item.Text = region.RegionDescription;
                                           item.Value = region.RegionID.ToString();
                                           item.LoadOnDemand = region.Territories.Count > 0;
                                       })
                    .DataBinding(db => db.Ajax().Select("LoadTerritories_Ajax", "TreeView"))
        
         %>


    <br /><br />

    <h2>RadTreeView - Load On Demand using Web Services</h2>

            <%=
                Html.Telerik().TreeView()
                    .Name("treeView_LOD_WS")
                    .BindTo(Model, (item, region) =>
                                       {
                                           item.Text = region.RegionDescription;
                                           item.Value = region.RegionID.ToString();
                                           item.LoadOnDemand = region.Territories.Count > 0;
                                       })
                    .DataBinding(db => db.WebService().Select("~/Models/WS_Regions.asmx/LoadTerritories"))
        
         %>

    <br /><br />
    <%= Html.ActionLink("Return", "Index", "TreeView") %>


</asp:Content>
