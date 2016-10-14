<%@ Page Title="RadColorPicker" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadColorPicker_Page.aspx.cs" Inherits="WebApplication1.RadColorPicker_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Configuration And Color Palettes</h1>
        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
        <table>
            <tr>
                <td>Show As DropDown:</td>
                <td>
                    <asp:CheckBox ID="chkIcon" runat="server" AutoPostBack="true"
                                  OnCheckedChanged="chkIcon_CheckedChanged">
                    </asp:CheckBox>
                </td>
            </tr>
            <tr>
                <td>Preview Color:</td>
                <td>
                    <asp:CheckBox ID="chkPreview" runat="server" AutoPostBack="true" Checked="true"
                                  OnCheckedChanged="chkPreview_CheckedChanged">
                    </asp:CheckBox>
                </td>
            </tr>
            <tr>
                <td>Show No Empty Color:</td>
                <td>
                    <asp:CheckBox ID="chkNoColor" runat="server" AutoPostBack="true" Checked="true"
                                  OnCheckedChanged="chkNoColor_CheckedChanged">
                    </asp:CheckBox>
                </td>
            </tr>
            <tr>
                <td>Palette Mode:</td>
                <td>
                    <asp:CheckBoxList ID="chkPaletteMode" runat="server" RepeatDirection="Horizontal" AutoPostBack="true"
                                      OnSelectedIndexChanged="chkPaletteMode_SelectedIndexChanged">
                                <asp:ListItem Value="WebPalette" Selected="True">WebPalette</asp:ListItem>
                                <asp:ListItem Value="RGBSliders" Selected="True">RGBSliders</asp:ListItem>
                                <asp:ListItem Value="HSB" Selected="True">HSB</asp:ListItem>
                                <asp:ListItem Value="HSV" Selected="True">HSV</asp:ListItem>
                    </asp:CheckBoxList>
                </td>
            </tr>
            <tr>
                <td>Select the palette: </td>
                <td>
                    <telerik:RadComboBox ID="rcbPalette" runat="server" AutoPostBack="true"
                                         OnSelectedIndexChanged="rcbPalette_SelectedIndexChanged">
                    </telerik:RadComboBox>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <telerik:RadColorPicker ID="RadColorPicker1" runat="server" PaletteModes="All">
                    </telerik:RadColorPicker>
                </td>
            </tr>
        </table>
    </ContentTemplate>
    </asp:UpdatePanel>
    <h1>Custom Palette</h1>
    <table>
        <tr>
            <td valign="top">
                <telerik:RadColorPicker ID="RadColorPicker2" runat="server" 
                                        OnClientColorChange="ChangeColor" ShowEmptyColor="false" PreviewColor="false">
                </telerik:RadColorPicker>
            </td>
            <td valign="top">
                <div id="divColor" style="width:100px;height:100px; border:1px solid #000000"></div>
            </td>
        </tr>
    </table>
    <script language="javascript" type="text/javascript">
        function ChangeColor(sender, eventArgs) {
            var picker = $find("<%=RadColorPicker2.ClientID %>");
            var color = picker.get_selectedColor();
            $get("divColor").style.backgroundColor = color;
        }
    </script>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</asp:Content>
