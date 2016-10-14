<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<TelerikMvcApplication.Models.Category>>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadGrid
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadGrid - Server Editing</h2>
    
    <%=
        Html.Telerik().Grid(Model)
            .Name("serverEditingGrid")
            .DataKeys(k=>k.Add(p=>p.CategoryID))
            .ToolBar(t=>t.Insert())
            .Columns(c =>
                         {
                             c.Bound(p => p.CategoryID).ReadOnly(true).Width(100);
                             c.Bound(p => p.CategoryName).Width(200);
                             c.Bound(p => p.Description).Width(300);
                             c.Bound(p => p.DisplayOrder).Width(100);
                             c.Command(cmd =>
                                           {
                                               cmd.Edit();
                                               cmd.Delete();
                                           });
                         })
            .DataBinding(b=>b
                .Server()
                .Select("ServerEditing", "Grid")
                .Insert("ServerInsert", "Grid")
                .Update("ServerUpdate", "Grid")
                .Delete("ServerDelete", "Grid")
                    )
            .Pageable()
            .Sortable()
         %>

    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "Grid") %>

</asp:Content>
