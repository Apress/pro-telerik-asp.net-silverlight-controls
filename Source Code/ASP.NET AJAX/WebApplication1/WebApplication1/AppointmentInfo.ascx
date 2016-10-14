<%@ Control Language="C#" 
            AutoEventWireup="true" 
            CodeBehind="AppointmentInfo.ascx.cs" 
            Inherits="WebApplication1.AppointmentInfo" %>

<table>
    <tr>
        <td>About: </td>
        <td>
            <asp:Label ID="lblDesc" runat="server"></asp:Label>
        </td>
    </tr>
    <tr>
        <td>Start: </td>
        <td>
            <asp:Label ID="lblStart" runat="server"></asp:Label>
        </td>
    </tr>
    <tr>
        <td>End: </td>
        <td>
            <asp:Label ID="lblEnd" runat="server"></asp:Label>
        </td>
    </tr>

</table>
