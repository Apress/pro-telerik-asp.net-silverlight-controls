<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<TelerikMvcApplication.Models.Region>>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>
<%@ Import Namespace="TelerikMvcApplication.Models" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadPanelBar
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadPanelBar - Bind To Model</h2>
    <div style="width:100px">
    <%= Html.Telerik().PanelBar()        
        .Name("MyPanelBar")        
            .ExpandMode(PanelBarExpandMode.Single)
            .BindTo(Model, mappings =>
                               {
                                   mappings.For<Region>(binding => binding                    
                                       .ItemDataBound((item, region) =>
                                                          {
                                                              item.Text = region.RegionDescription;
                                                          })                    .Children(region=>region.Territories));
                                   mappings.For<Territory>(binding => binding
                                                                  .ItemDataBound((item, territory) =>
                                                                         {
                                                                             item.Text = territory.TerritoryDescription;
                                                                         }));
                               })
                                   %>

    </div>
    
    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "PanelBar") %>
</asp:Content>
