<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<TelerikMvcApplication.Models.Employee>>" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadGrid
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadGrid - Templates</h2>

    <%
        Html.Telerik().Grid(Model)
            .Name("serverBindedGrid")
            .Columns(c =>
                         {
                             c.Bound(p => p.EmployeeID);
                             c.Template(x =>
                                            {
%>
                                            <table>
                                                <tr>
                                                    <td align="center"><%=x.FirstName + " " + x.LastName%></td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <img src="<%=
                                                    Url.Content("~/Images/Employees/" + x.EmployeeID + ".jpg")%>" 
                                                             alt="<%=x.EmployeeID%>"
                                                             width="100px" />
                                                    </td>
                                                </tr>
                                            </table>
                                            <%
                                            }).Title("Picture");
                             c.Bound(p => p.Title);
                             c.Template(x =>
                                            {
                                                %>
                                                    <%=x.Region + ", " + x.Country%>
                                                <%
                                            }).Title("Location");
                             c.Bound(p => p.HireDate).Format("{0:d}");
                         })
            .Pageable(x=>x.PageSize(2))
            .Sortable()
            .Render();
         %>

    <br /><br />

<%= Html.ActionLink("Return", "Index", "Grid") %>
</asp:Content>
