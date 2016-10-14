<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadNumericTextBox
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>RadNumericTextBox - Globalization</h2>
    
    <% Html.BeginForm("Globalization", "NumericTextBox", FormMethod.Get); %>
    
    <table>
        <tr>
            <td>Culture</td>
            <td>
                <select id="culture" name="culture">
                     <option value="en-US">English</option>
                     <option value="fr-FR">Francais</option>
                     <option value="de-DE">Deutsch</option>
                     <option value="bg-BG">Български</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>Number</td>
            <td>
                <%=
                    Html.Telerik().NumericTextBox()
                        .Name("numericNumber")
                        .Value(11)
                     %>
            </td>
        </tr>
        <tr>
            <td>Currency</td>
            <td>
                <%=
                    Html.Telerik().CurrencyTextBox()
                        .Name("numericCurrency")
                        .Value(10)
                     %>
            </td>
        </tr>
        <tr>
            <td>Percentage</td>
            <td>
                <%=
                    Html.Telerik().PercentTextBox()
                        .Name("numericPercentage")
                        .Value(74.5)
                     %>
            </td>
        </tr>
    </table>
    
    <input type="submit" value="Submit" />
    
    <% Html.EndForm(); %>
    
    <br /><br />
    
    <%= Html.ActionLink("Return", "Index", "NumericTextBox")%>


    <% Html.Telerik().ScriptRegistrar().Globalization(true); %>

</asp:Content>
