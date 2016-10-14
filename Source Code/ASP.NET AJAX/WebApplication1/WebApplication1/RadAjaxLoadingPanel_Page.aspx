<%@ Page Title="RadAjaxLoadingPanel" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadAjaxLoadingPanel_Page.aspx.cs" Inherits="WebApplication1.RadAjaxLoadingPanel_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Properties</h1>
    <table>
        <tr>
            <td>Enable 30% Transparency</td>
            <td>    
                <asp:CheckBox ID="chkTransparency" runat="server"
                              AutoPostBack="true" 
                              OnCheckedChanged="chkTransparency_CheckedChanged" />
            </td>
        </tr>
        <tr>
            <td>Enable Custom Animation</td>
            <td>    
                <asp:CheckBox ID="chkAnimation" runat="server"
                              AutoPostBack="true" 
                              OnCheckedChanged="chkAnimation_CheckedChanged" />
            </td>
        </tr>
        <tr>
            <td>Change Skin</td>
            <td>    
                <telerik:RadComboBox ID="rcbSkin" runat="server" 
                                     AutoPostBack="true"
                                     OnSelectedIndexChanged="rcbSkin_SelectedIndexChanged">
                    <Items>
                        <telerik:RadComboBoxItem Text="Default" />
                        <telerik:RadComboBoxItem Text="Black" />
                        <telerik:RadComboBoxItem Text="Forest" />
                        <telerik:RadComboBoxItem Text="Hay" />
                        <telerik:RadComboBoxItem Text="Office2007" />
                        <telerik:RadComboBoxItem Text="Outlook" />
                        <telerik:RadComboBoxItem Text="Simple" />
                        <telerik:RadComboBoxItem Text="Sitefinity" />
                        <telerik:RadComboBoxItem Text="Sunset" />
                        <telerik:RadComboBoxItem Text="Telerik" />
                        <telerik:RadComboBoxItem Text="Vista" />
                        <telerik:RadComboBoxItem Text="Web20" />
                        <telerik:RadComboBoxItem Text="WebBlue" />
                        <telerik:RadComboBoxItem Text="Windows7" />
                    </Items>
                </telerik:RadComboBox>
            </td>
        </tr>
    </table>
    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
        <AjaxSettings>
            <telerik:AjaxSetting AjaxControlID="chkTransparency">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="RadAjaxLoadingPanel1" />
                </UpdatedControls>
            </telerik:AjaxSetting>
            <telerik:AjaxSetting AjaxControlID="Button1">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="Panel1" LoadingPanelID="RadAjaxLoadingPanel1" />
                </UpdatedControls>
            </telerik:AjaxSetting>
        </AjaxSettings>
    </telerik:RadAjaxManager>
    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server">
    </telerik:RadAjaxLoadingPanel>
    <asp:Button ID="Button1" runat="server" Text="Show RadAjaxLoadingPanel" OnClick="Button1_Click" />
    <asp:Panel id="Panel1" runat="server" style="width:300px; height: 200px">
    </asp:Panel>
    <telerik:RadCodeBlock ID="RadCodeBlock2" runat="server">
    <script type="text/javascript">
        function CustomShowing(sender, args) {
            args.set_cancelNativeDisplay(true);
            $telerik.$(args.get_loadingElement()).slideToggle("slow");
        }

        function CustomHiding(sender, args) {
            args.set_cancelNativeDisplay(true);
            $telerik.$(args.get_loadingElement()).slideToggle("slow");
        }
    </script>
    </telerik:RadCodeBlock>

    <br /><br />
    <h1>Explicit Show and Hide</h1>
    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel2" runat="server">
    </telerik:RadAjaxLoadingPanel>
    <div id="showLoadingPanel" style="width:300px; height: 200px">
    </div>
    <asp:Button ID="btnShow" runat="server" Text="Show RadAjaxLoadingPanel" OnClientClick="ExplicitShow();return false;" />
    <asp:Button ID="btnHide" runat="server" Text="Hide RadAjaxLoadingPanel" OnClientClick="ExplicitHide();return false;" />
    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function ExplicitShow() {
            var loadingPanel = $find("<%= RadAjaxLoadingPanel2.ClientID%>");
            var targetObject = "showLoadingPanel";
            loadingPanel.show(targetObject);
        }
        function ExplicitHide() {
            var loadingPanel = $find("<%= RadAjaxLoadingPanel2.ClientID%>");
            var targetObject = "showLoadingPanel";
            loadingPanel.hide(targetObject);
        }
    </script>
    </telerik:RadCodeBlock>
</asp:Content>
