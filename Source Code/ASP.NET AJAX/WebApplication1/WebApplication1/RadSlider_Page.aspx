<%@ Page Title="RadSlider" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadSlider_Page.aspx.cs" Inherits="WebApplication1.RadSlider_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server">
    </telerik:RadAjaxLoadingPanel>
    <telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" />


    <h1>RadSlider Features</h1>
    <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" LoadingPanelID="RadAjaxLoadingPanel1">
    <table>
        <tr>
            <td>Range of values</td>
            <td>
                <table>
                    <tr>
                        <td>
                            <telerik:RadNumericTextBox ID="txtMinValue" runat="server" 
                                                       Value="-50"
                                                       Width="100px"
                                                       Label="Min">
                                <NumberFormat DecimalDigits="0" />
                                <EnabledStyle HorizontalAlign="Center" />
                            </telerik:RadNumericTextBox>
                        </td>
                        <td>
                            <telerik:RadNumericTextBox ID="txtMaxValue" runat="server" 
                                                       Value="50"
                                                       Width="100px"
                                                       Label="Max">
                                <NumberFormat DecimalDigits="0" />
                                <EnabledStyle HorizontalAlign="Center" />
                            </telerik:RadNumericTextBox>
                        </td>
                        <td>
                            <asp:Button ID="btnSetValueRange" runat="server" Text="Apply" OnClick="btnSetValueRange_Click" />
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>Orientation</td>
            <td>
                <asp:RadioButtonList ID="rbOrientation" runat="server"
                                     RepeatDirection="Horizontal"
                                     AutoPostBack="true"
                                     OnSelectedIndexChanged="rbOrientation_SelectedIndexChanged">
                    <asp:ListItem Text="Horizontal" Value="Horizontal" Selected="True"></asp:ListItem>
                    <asp:ListItem Text="Vertical" Value="Vertical"></asp:ListItem>
                </asp:RadioButtonList>
            </td>
        </tr>
        <tr>
            <td>Track Position</td>
            <td>
                <asp:RadioButtonList ID="rbTrackPosition" runat="server"
                                     RepeatDirection="Horizontal"
                                     AutoPostBack="true"
                                     OnSelectedIndexChanged="rbTrackPosition_SelectedIndexChanged">
                    <asp:ListItem Text="Center" Value="Center" Selected="True"></asp:ListItem>
                    <asp:ListItem Text="TopLeft" Value="TopLeft"></asp:ListItem>
                    <asp:ListItem Text="BottomRight" Value="BottomRight"></asp:ListItem>
                </asp:RadioButtonList>
            </td>
        </tr>
    </table>
    <table>
        <tr>
            <td>Reverse Direction</td>
            <td>
                <asp:CheckBox ID="chkReverseDirection" runat="server" 
                              AutoPostBack="true"
                              OnCheckedChanged="chkReverseDirection_CheckedChanged" />
            </td>
            <td>&nbsp;</td>
            <td>Make it a Range RadSlider</td>
            <td>
                <asp:CheckBox ID="chkRange" runat="server" 
                              AutoPostBack="true"
                              OnCheckedChanged="chkRange_CheckedChanged" />
            </td>
            <td>&nbsp;</td>
            <td>Enable Server-Side Rendering</td>
            <td>
                <asp:CheckBox ID="chkEnableServerSideRendering" runat="server" 
                              AutoPostBack="true"
                              OnCheckedChanged="chkEnableServerSideRendering_CheckedChanged" />
            </td>
         </tr>
         <tr>
            <td>Enable Drag Handle</td>
            <td>
                <asp:CheckBox ID="chkDragHandle" runat="server" 
                              Checked="true"
                              AutoPostBack="true"
                              OnCheckedChanged="chkDragHandle_CheckedChanged" />
            </td>
            <td>&nbsp;</td>
            <td>Show Increase Handle</td>
            <td>
                <asp:CheckBox ID="chkShowIncrease" runat="server" 
                              Checked="true"
                              AutoPostBack="true"
                              OnCheckedChanged="chkIncreaseDecrease_CheckedChanged" />
            </td>
            <td>&nbsp;</td>
            <td>Show Decrease Handle</td>
            <td>
                <asp:CheckBox ID="chkShowDecrease" runat="server" 
                              Checked="true"
                              AutoPostBack="true"
                              OnCheckedChanged="chkIncreaseDecrease_CheckedChanged" />
            </td>
        </tr>
    </table>
    <br />
    <telerik:RadSlider ID="RadSlider1" runat="server"
                       Orientation="Horizontal" 
                       MinimumValue="-50" 
                       MaximumValue="50" 
                       Value="0"
                       SmallChange="5" 
                       LargeChange="10" 
                       ItemType="tick"
                       OnValueChanged="RadSlider1_ValueChanged"
                       AutoPostBack="true"
                       Width="500px" 
                       Height="70px">
    </telerik:RadSlider>
    <telerik:RadNumericTextBox ID="txtSelectedValue" runat="server"
                               Label="Selected Value"
                               Value="0">
        <NumberFormat DecimalDigits="0" />
    </telerik:RadNumericTextBox>

    </telerik:RadAjaxPanel>
    <br /><br />
    <h1>RadSlider Items</h1>
    <telerik:RadSlider ID="RadSlider2" runat="server"
                       Orientation="Horizontal" 
                       Value="0"
                       SmallChange="5" 
                       LargeChange="10" 
                       ItemType="Item"
                       Width="500px" 
                       Height="70px">
        <Items>
            <telerik:RadSliderItem Text="Poor" Value="1" />
            <telerik:RadSliderItem Text="Needs Improvement" Value="2" />
            <telerik:RadSliderItem Text="Fair" Value="3" />
            <telerik:RadSliderItem Text="Good" Value="4" />
            <telerik:RadSliderItem Text="Excellent" Value="5" />
        </Items>
    </telerik:RadSlider>
    <br /><br />
    <h1>Client Side API</h1>
    <table>
        <tr>
            <td>Range of values</td>
            <td>
                <table>
                    <tr>
                        <td>
                            <telerik:RadNumericTextBox ID="txtClientMinValue" runat="server" 
                                                       Value="-50"
                                                       Width="100px"
                                                       Label="Min">
                                <NumberFormat DecimalDigits="0" />
                                <EnabledStyle HorizontalAlign="Center" />
                            </telerik:RadNumericTextBox>
                        </td>
                        <td>
                            <telerik:RadNumericTextBox ID="txtClientMaxValue" runat="server" 
                                                       Value="50"
                                                       Width="100px"
                                                       Label="Max">
                                <NumberFormat DecimalDigits="0" />
                                <EnabledStyle HorizontalAlign="Center" />
                            </telerik:RadNumericTextBox>
                        </td>
                        <td>
                            <asp:Button ID="btnSetClientValueRange" runat="server" Text="Apply" OnClientClick="SetValueRange();return false;" />
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>Orientation</td>
            <td>
                <telerik:RadSlider ID="sldOrientation" runat="server"
                                   ItemType="Item"
                                   Value="0"
                                   OnClientValueChanged="sldOrientation_ClientValueChanged"
                                   Height="70px">
                    <Items>
                        <telerik:RadSliderItem Text="Horizontal" Value="0" />
                        <telerik:RadSliderItem Text="Vertical" Value="1" />
                    </Items>
                </telerik:RadSlider>
            </td>
        </tr>
        <tr>
            <td>Track Position</td>
            <td>
                <telerik:RadSlider ID="sldTrackPosition" runat="server"
                                   ItemType="Item"
                                   Value="0"
                                   OnClientValueChanged="sldTrackPosition_ClientValueChanged"
                                   Height="70px"
                                   Width="300px">
                    <Items>
                        <telerik:RadSliderItem Text="Center" Value="0" />
                        <telerik:RadSliderItem Text="TopLeft" Value="1" />
                        <telerik:RadSliderItem Text="BottomRight" Value="2" />
                    </Items>
                </telerik:RadSlider>
            </td>
        </tr>
    </table>
    <table>
        <tr>
            <td>Reverse Direction</td>
            <td>
                <asp:CheckBox ID="chkClientReverseDirection" runat="server"
                              onclick="ChangeDirection();" />
            </td>
            <td>&nbsp;</td>
            <td>Make it a Range RadSlider</td>
            <td>
                <asp:CheckBox ID="chkClientRange" runat="server"
                              onclick="ChangeRange();" />
            </td>
            <td>&nbsp;</td>
            <td>Track MouseWheel</td>
            <td>
                <asp:CheckBox ID="chkClientMouseWheel" runat="server"
                              Checked="true"
                              onclick="TrackMouseWheel();" />
            </td>
         </tr>
         <tr>
            <td>Enable Drag Handle</td>
            <td>
                <asp:CheckBox ID="CheckBox4" runat="server" 
                              Checked="true"
                              onclick="EnableDragHandle();" />
            </td>
            <td>&nbsp;</td>
            <td>Show Increase Handle</td>
            <td>
                <asp:CheckBox ID="CheckBox5" runat="server" 
                              Checked="true"
                              onclick="ShowIncreaseHandle();" />
            </td>
            <td>&nbsp;</td>
            <td>Show Decrease Handle</td>
            <td>
                <asp:CheckBox ID="CheckBox6" runat="server" 
                              Checked="true"
                              onclick="ShowDecreaseHandle();" />
            </td>
        </tr>
    </table>
    <br />
    <telerik:RadSlider ID="RadSlider3" runat="server"
                       Orientation="Horizontal" 
                       MinimumValue="-50" 
                       MaximumValue="50" 
                       Value="0"
                       SmallChange="5" 
                       LargeChange="10" 
                       ItemType="tick"
                       OnClientValueChanged="RadSlider3_ClientValueChanged"
                       Width="500px" 
                       Height="70px">
    </telerik:RadSlider>
    <telerik:RadNumericTextBox ID="txtClientValue" runat="server"
                               Label="Selected Value"
                               Value="0">
        <NumberFormat DecimalDigits="0" />
    </telerik:RadNumericTextBox>
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function SetValueRange() {
            var slider = $telerik.findSlider("<%=RadSlider3.ClientID %>", null);
            var txtMin = $telerik.findNumericTextBox("<%=txtClientMinValue.ClientID %>", null);
            var txtMax = $telerik.findNumericTextBox("<%=txtClientMaxValue.ClientID %>", null);
            slider.set_minimumValue(txtMin.get_value());
            slider.set_maximumValue(txtMax.get_value());
        }

        function sldOrientation_ClientValueChanged(sender, eventArgs) {
            var sldOrientation = $telerik.toSlider(sender);
            var slider = $telerik.findSlider("<%=RadSlider3.ClientID %>", null);
            if (sldOrientation.get_selectedItem().get_value() == "0") {
                slider.set_orientation(Telerik.Web.UI.Orientation.Horizontal);
                slider.set_width(500);
                slider.set_height(70);
            }
            else {
                slider.set_orientation(Telerik.Web.UI.Orientation.Vertical);
                slider.set_width(70);
                slider.set_height(500);
            }
        }

        function sldTrackPosition_ClientValueChanged(sender, eventArgs) {
            var sldTrackPosition = $telerik.toSlider(sender);
            var slider = $telerik.findSlider("<%=RadSlider3.ClientID %>", null);
            if (sldTrackPosition.get_selectedItem().get_value() == "0") {
                slider.set_trackPosition(Telerik.Web.UI.SliderTrackPosition.Center);
            }
            else {
                if (sldTrackPosition.get_selectedItem().get_value() == "1") {
                    slider.set_trackPosition(Telerik.Web.UI.SliderTrackPosition.TopLeft);
                }
                else {
                    slider.set_trackPosition(Telerik.Web.UI.SliderTrackPosition.BottomRight);
                }
            }
        }

        function ChangeDirection() {
            var slider = $telerik.findSlider("<%=RadSlider3.ClientID %>", null);
            slider.set_isDirectionReversed(!slider.get_isDirectionReversed());
        }

        function ChangeRange() {
            var slider = $telerik.findSlider("<%=RadSlider3.ClientID %>", null);
            slider.set_isSelectionRangeEnabled(!slider.get_isSelectionRangeEnabled());
            var txtMin = $telerik.findNumericTextBox("<%=txtClientMinValue.ClientID %>", null);
            var txtMax = $telerik.findNumericTextBox("<%=txtClientMaxValue.ClientID %>", null);
            if (slider.get_isSelectionRangeEnabled()) {
                slider.set_selectionStart(txtMin.get_value() + 10);
                slider.set_selectionEnd(txtMax.get_value() - 10);
            }
            else {
                slider.set_selectionStart(0);
                slider.set_selectionEnd(0);
                slider.set_value(0);
            }
        }

        function TrackMouseWheel() {
            var slider = $telerik.findSlider("<%=RadSlider3.ClientID %>", null);
            slider.set_trackMouseWheel(!slider.get_trackMouseWheel());
        }

        function EnableDragHandle() {
            var slider = $telerik.findSlider("<%=RadSlider3.ClientID %>", null);
            slider.set_showDragHandle(!slider.get_showDragHandle());
        }

        function ShowIncreaseHandle() {
            var slider = $telerik.findSlider("<%=RadSlider3.ClientID %>", null);
            slider.set_showIncreaseHandle(!slider.get_showIncreaseHandle());
        }

        function ShowDecreaseHandle() {
            var slider = $telerik.findSlider("<%=RadSlider3.ClientID %>", null);
            slider.set_showDecreaseHandle(!slider.get_showDecreaseHandle());
        }

        function RadSlider3_ClientValueChanged(sender, eventArgs) {
            var slider = $telerik.toSlider(sender);
            var txt = $telerik.findNumericTextBox("<%=txtClientValue.ClientID %>", null);
            txt.set_value(slider.get_value());
        }

    </script>
    </telerik:RadCodeBlock>
</asp:Content>
