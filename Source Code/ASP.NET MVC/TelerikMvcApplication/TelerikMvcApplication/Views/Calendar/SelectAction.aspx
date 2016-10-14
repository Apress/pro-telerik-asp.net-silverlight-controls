<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<TelerikMvcApplication.Controllers.CalModel>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadCalendar
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<h2>RadCalendar - Select Action</h2>

<table border="0">
    <tr>
        <th>Some dates can be selected</th>
        <td>&nbsp;&nbsp;</td>
        <th>All dates can be selected</th>
    </tr>
    <tr>
        <td>
            <% 
                Html.Telerik()
                    .Calendar()
                    .Name("Calendar2")
                    .Selection(s=>
                            s.Action("SelectAction", new { selectedDate = "{0}" })
                             .Dates(new List<DateTime>
                                        {
                                            DateTime.Today.AddDays(-5),
                                            DateTime.Today.AddDays(-1),
                                            DateTime.Today.AddDays(4),
                                            DateTime.Today.AddDays(10)
                                        })
                             )
                        .Value(Model.selectedDate.Value == null ? DateTime.Today : Model.selectedDate.Value)
                        .Render();
            %>
        </td>
        <td>&nbsp;&nbsp;</td>
        <td>
            <% 
                Html.Telerik()
                    .Calendar()
                    .Name("Calendar3")
                    .Selection(s=> s.Action("SelectAction", new { selectedDate = "{0}" }))
                    .Value(Model.selectedDate.Value == null ? DateTime.Today : Model.selectedDate.Value)
                    .Render();
            %>
        </td>
    </tr>
</table>

<% if (Model.selectedDate != null)
  {
  %> 
            <p>The selected date was: <%= Model.selectedDate.Value.ToShortDateString() %>    </p>    
 <%
  }
%>


    <br /><br />

    <%= Html.ActionLink("Return", "Index", "Calendar") %>


</asp:Content>
