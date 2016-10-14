<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>
<%@ Import Namespace="TelerikMvcApplication.Models" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	WebServiceEditing
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadGrid - Ajax Editing</h2>
    
    <%
        Html.Telerik().Grid<RegionViewModel>()
            .Name("wsEditingGrid")
            .DataKeys(k => k.Add(p => p.RegionID))
            .ToolBar(t => t.Insert())
            .Columns(c =>
                         {
                             c.Bound(p => p.RegionID).ReadOnly(true);
                             c.Bound(p => p.RegionDescription);
                             c.Command(cmd =>
                                           {
                                               cmd.Edit();
                                               cmd.Delete();
                                           });
                         })
            .DataBinding(b => b.WebService()
                              .Select("~/Models/WS_Regions.asmx/Select")
                              .Insert("~/Models/WS_Regions.asmx/Insert")
                              .Update("~/Models/WS_Regions.asmx/Update")
                              .Delete("~/Models/WS_Regions.asmx/Delete"))
            .Pageable()
            .Sortable()
            .Render();
         %>

    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "Grid") %>

</asp:Content>
