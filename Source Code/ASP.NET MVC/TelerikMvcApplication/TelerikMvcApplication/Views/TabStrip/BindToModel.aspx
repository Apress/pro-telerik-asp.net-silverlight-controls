<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<TelerikMvcApplication.Models.Region>>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadTabStrip
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadTabStrip - Bind To Model</h2>

    <% Html.Telerik().TabStrip()        
        .Name("myTabs")
            .BindTo(Model, 
                (item, region)=>
                    {
                        item.Text = region.RegionDescription;
                    })
            .Render(); 
                                   %>
    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "TabStrip") %>

</asp:Content>
