<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="MyCategory_RadGridCustomFormEditor.ascx.cs" Inherits="WebApplication1.MyCategory_RadGridCustomFormEditor" %>

<table>
    <tr>
        <th colspan="2">Category Details</th>
    </tr>
    <tr>
        <td>Name:</td>
        <td>
            <asp:TextBox ID="txtName" runat="server" 
                         Text='<%# DataBinder.Eval( Container, "DataItem.CategoryName" ) %>'
                         MaxLength="15">
            </asp:TextBox>
        </td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>
            <asp:TextBox ID="txtDescription" runat="server" 
                         Text='<%# DataBinder.Eval( Container, "DataItem.Description" ) %>'
                         Columns="35"
                         Rows="7"
                         TextMode="MultiLine">
            </asp:TextBox>
        </td>
    </tr>
    <tr>
        <td colspan="2">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="2">
			<asp:button id="btnUpdate" runat="server" 
                        text="Update" 
                        CommandName="Update" 
                        Visible='<%# !(DataItem is Telerik.Web.UI.GridInsertionObject) %>'>
            </asp:button>
			<asp:button id="btnInsert" runat="server"
                        text="Insert" 
                        CommandName="PerformInsert" 
                        Visible='<%# DataItem is Telerik.Web.UI.GridInsertionObject %>'>
            </asp:button>
			&nbsp;
			<asp:button id="btnCancel" runat="server"
                        text="Cancel" 
                        causesvalidation="False" 
                        commandname="Cancel">
            </asp:button>
        </td>
    </tr>
</table>