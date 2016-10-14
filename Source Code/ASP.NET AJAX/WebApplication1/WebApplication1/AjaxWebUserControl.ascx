<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="AjaxWebUserControl.ascx.cs" Inherits="WebApplication1.AjaxWebUserControl" %>

<asp:Button ID="btnDoPostBack" runat="server" Text="Do PostBack" OnClick="btnDoPostBack_Click" />
<asp:TextBox ID="txtResult" runat="server"></asp:TextBox>

<telerik:RadAjaxManagerProxy ID="RadAjaxManagerProxy1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="btnDoPostBack">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="txtResult" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManagerProxy>
