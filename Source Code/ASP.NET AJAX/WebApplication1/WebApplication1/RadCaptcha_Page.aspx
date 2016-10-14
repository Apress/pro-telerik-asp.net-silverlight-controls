<%@ Page Title="RadCaptcha" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadCaptcha_Page.aspx.cs" Inherits="WebApplication1.RadCaptcha_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>RadCaptcha - Captcha Image</h1>
    <table width="350px">
        <tr>
            <td width="150px">Name:</td>
            <td width="200px">
                <telerik:RadTextBox ID="txtName" runat="server"></telerik:RadTextBox>
                <asp:RequiredFieldValidator ID="RequiredfieldValidator1" runat="server"
                                            ControlToValidate="txtName"
                                            Display="Dynamic"
                                            ValidationGroup="Captcha1" 
                                            Text="*"
                                            ErrorMessage="Name is required" 
                                            EnableClientScript="False">
                </asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td width="150px">Email:</td>
            <td width="200px">
                <telerik:RadTextBox ID="txtEmail" runat="server"></telerik:RadTextBox>
                <asp:RequiredFieldValidator ID="RequiredfieldValidator2" runat="server"
                                            ControlToValidate="txtEmail"
                                            Display="Dynamic"
                                            EnableClientScript="false"
                                            ValidationGroup="Captcha1" 
                                            Text="*"
                                            ErrorMessage="Email is required">
                </asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" 
                    Display="Dynamic" 
                    Text="Invalid Email" 
                    ErrorMessage="Email should be like: foo@bar.com"
                    ControlToValidate="txtEmail"
                    EnableClientScript="false"
                    ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" 
                    ValidationGroup="Captcha1">
                 </asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td width="150px" valign="top">Validation Code:</td>
            <td width="200px">
                <telerik:RadCaptcha ID="RadCaptcha1" runat="server" 
                    EnableRefreshImage="True" 
                    ErrorMessage="Invalid validation code" 
                    ValidationGroup="Captcha1" 
                    CaptchaTextBoxLabel="&lt;br /&gt;Type the code from the image">
                    <CaptchaImage BackgroundNoise="Medium" 
                                  LineNoise="Low" 
                                  FontWarp="High"
                                  EnableCaptchaAudio="true"
                                  TextChars="LettersAndNumbers" />
                </telerik:RadCaptcha>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <asp:Button ID="btnSubmit" runat="server" 
                            Text="Submit" 
                            CausesValidation="true" 
                            ValidationGroup="Captcha1" />
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <asp:ValidationSummary ID="ValidationSummary1" runat="server" 
                                       ValidationGroup="Captcha1" />
            </td>
        </tr>
    </table>
    <br /><br />
    <h1>RadCaptcha - Invisible TextBox</h1>
    <table width="350px">
        <tr>
            <td width="150px">Name:</td>
            <td width="200px">
                <telerik:RadTextBox ID="txtName1" runat="server"></telerik:RadTextBox>
                <asp:RequiredFieldValidator ID="RequiredfieldValidator11" runat="server"
                                            ControlToValidate="txtName1"
                                            Display="Dynamic"
                                            ValidationGroup="Captcha2" 
                                            Text="*"
                                            ErrorMessage="Name is required" 
                                            EnableClientScript="False">
                </asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td width="150px">Email:</td>
            <td width="200px">
                <telerik:RadTextBox ID="txtEmail1" runat="server"></telerik:RadTextBox>
                <asp:RequiredFieldValidator ID="RequiredfieldValidator3" runat="server"
                                            ControlToValidate="txtEmail1"
                                            Display="Dynamic"
                                            EnableClientScript="false"
                                            ValidationGroup="Captcha2" 
                                            Text="*"
                                            ErrorMessage="Email is required">
                </asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="RegularExpressionValidator2" runat="server" 
                    Display="Dynamic" 
                    Text="Invalid Email" 
                    ErrorMessage="Email should be like: foo@bar.com"
                    ControlToValidate="txtEmail1"
                    EnableClientScript="false"
                    ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" 
                    ValidationGroup="Captcha2">
                 </asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td width="150px" valign="top"><asp:CheckBox ID="chkFill" runat="server" Text="Fill Invisible Textbox" onclick="FillInvisible(this);" /></td>
            <td width="200px">
                <telerik:RadCaptcha ID="RadCaptcha2" runat="server" 
                    EnableRefreshImage="True" 
                    ErrorMessage="Oops! Robot detected" 
                    ValidationGroup="Captcha2" 
                    CaptchaTextBoxLabel="&lt;br /&gt;Type the code from the image" 
                    ProtectionMode="InvisibleTextBox">
                </telerik:RadCaptcha>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <asp:Button ID="btnSubmit1" runat="server" 
                            Text="Submit" 
                            CausesValidation="true" 
                            ValidationGroup="Captcha2" />
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <asp:ValidationSummary ID="ValidationSummary2" runat="server" 
                                       ValidationGroup="Captcha2" />
            </td>
        </tr>
    </table>
    <script type="text/javascript">
        function FillInvisible(chk) {
            var invisibleTextBox = $get("ctl00_MainContent_RadCaptcha2_InvisibleTextBox");

            if (chk.checked) {
                invisibleTextBox.value = "something";
            }
            else {
                invisibleTextBox.value = "";
            }
        }
    </script>
    <br /><br />
    <h1>RadCaptcha - Captcha Image</h1>
    <table width="350px">
        <tr>
            <td width="150px">Name:</td>
            <td width="200px">
                <telerik:RadTextBox ID="txtName2" runat="server"></telerik:RadTextBox>
                <asp:RequiredFieldValidator ID="RequiredfieldValidator4" runat="server"
                                            ControlToValidate="txtName2"
                                            Display="Dynamic"
                                            ValidationGroup="Captcha3" 
                                            Text="*"
                                            ErrorMessage="Name is required" 
                                            EnableClientScript="False">
                </asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td width="150px">Email:</td>
            <td width="200px">
                <telerik:RadTextBox ID="txtEmail2" runat="server"></telerik:RadTextBox>
                <asp:RequiredFieldValidator ID="RequiredfieldValidator5" runat="server"
                                            ControlToValidate="txtEmail2"
                                            Display="Dynamic"
                                            EnableClientScript="false"
                                            ValidationGroup="Captcha3" 
                                            Text="*"
                                            ErrorMessage="Email is required">
                </asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="RegularExpressionValidator3" runat="server" 
                    Display="Dynamic" 
                    Text="Invalid Email" 
                    ErrorMessage="Email should be like: foo@bar.com"
                    ControlToValidate="txtEmail2"
                    EnableClientScript="false"
                    ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" 
                    ValidationGroup="Captcha3">
                 </asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td width="150px" valign="top">&nbsp;</td>
            <td width="200px">
                <telerik:RadCaptcha ID="RadCaptcha3" runat="server" 
                    EnableRefreshImage="True" 
                    ErrorMessage="Form submitted too fast!" 
                    ValidationGroup="Captcha3" 
                    CaptchaTextBoxLabel="&lt;br /&gt;Type the code from the image" 
                    MinTimeout="5" 
                    ProtectionMode="MinimumTimeout">
                </telerik:RadCaptcha>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <asp:Button ID="Button1" runat="server" 
                            Text="Submit" 
                            CausesValidation="true" 
                            ValidationGroup="Captcha3" />
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <asp:ValidationSummary ID="ValidationSummary3" runat="server" 
                                       ValidationGroup="Captcha3" />
            </td>
        </tr>
    </table>
</asp:Content>
