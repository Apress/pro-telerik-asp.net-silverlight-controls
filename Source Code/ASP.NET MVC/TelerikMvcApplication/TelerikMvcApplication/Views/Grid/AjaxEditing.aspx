<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>
<%@ Import Namespace="TelerikMvcApplication.Models" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadGrid
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadGrid - Ajax Editing</h2>
    
    <%=
        Html.Telerik().Grid<RegionViewModel>()
            .Name("ajaxEditingGrid")
            .DataKeys(k=>k.Add(p=>p.RegionID))
            .ToolBar(t=>t.Insert())
            .Columns(c =>
                         {
                             c.Bound(p => p.RegionID);
                             c.Bound(p => p.RegionDescription);
                             c.Command(cmd =>
                                           {
                                               cmd.Edit();
                                               cmd.Delete();
                                           });
                         })
            .DataBinding(b=>b
                .Ajax()
                .Select("AjaxEditing", "Grid")
                .Insert("_AjaxInsert", "Grid")
                .Update("_AjaxUpdate", "Grid")
                .Delete("_AjaxDelete", "Grid"))
            .Pageable()
            .Sortable()
         %>

    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "Grid") %>
</asp:Content>
