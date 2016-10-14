<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadInput.aspx.cs" Inherits="WebApplication1.RadInput" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
<style type="text/css">
    .MyButtonClass 
    {
    	position: relative;
    	left: -20px;
    }
</style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
    <h1>RadTextBox Examples</h1>
    <telerik:RadTextBox ID="RadTextBox1" Runat="server" ClientIDMode="Static" 
            EmptyMessage="Please enter something..." Label="RadTextBox Label" 
            ToolTip="this is the tooltip" Width="336px" 
            AutoCompleteType="DisplayName">
    </telerik:RadTextBox>
    <br /><br />
    <telerik:RadTextBox ID="RadTextBox2" Runat="server" ClientIDMode="Static" Width="336px">
    </telerik:RadTextBox>
    <input type="button" value="Get Value" onclick="javascript:GetValue();" />
    <input type="button" value="Set Value" onclick="javascript:SetValue();" />
    <br /><br />
    <telerik:RadTextBox ID="RadTextBox3" Runat="server" ClientIDMode="Static"
            ShowButton="true" ButtonsPosition="Right" ButtonCssClass="MyButtonClass">
            <ClientEvents OnButtonClick="GetValueByButton" />
    </telerik:RadTextBox>
    <br /><br />
    <h1>RadNumericTextBox Examples</h1>
    <telerik:RadNumericTextBox ID="RadNumericTextBox1" runat="server" Type="Percent"
            Culture="en-US" Width="125px" MaxValue="100" MinValue="1" 
            ShowSpinButtons="True">
    </telerik:RadNumericTextBox>
    <br /><br />
    <telerik:RadNumericTextBox ID="RadNumericTextBox2" runat="server"
            Culture="en-GB" Width="125px" Type="Currency">
    </telerik:RadNumericTextBox>
    <br /><br />
    <h1>RadDateInput Examples</h1>
    <telerik:RadDateInput ID="RadDateInput1" runat="server" 
                DateFormat="MM/dd/yyyy" DisplayDateFormat="yyyy/MM/dd">
    </telerik:RadDateInput>
    <br /><br />
    <telerik:RadDateInput ID="RadDateInput2" runat="server" 
                MinDate="01/01/2010" MaxDate="01/31/2010">
    </telerik:RadDateInput>
    <br /><br />
    <h1>RadMaskexTextBox Examples</h1>
    <telerik:RadMaskedTextBox ID="RadMaskedTextBox2" runat="server" 
                Mask="(###) ###-####" Width="125px">
    </telerik:RadMaskedTextBox>
    <br /><br />
    <telerik:RadMaskedTextBox ID="RadMaskedTextBox1" runat="server" 
            Mask="&lt;Q1|Q2|Q3|Q4&gt;" Text="Q1" TextWithLiterals="Q1" Width="125px">
    </telerik:RadMaskedTextBox>
    
    <br /><br />
    <h1>RadInputManager Examples</h1>
    
<asp:TextBox ID="TextBox1" runat="server">
</asp:TextBox>

<telerik:RadInputManager ID="RadInputManager1" runat="server">
    <telerik:NumericTextBoxSetting MaxValue="10" MinValue="1">
        <TargetControls>
            <telerik:TargetInput ControlID="TextBox1" />
        </TargetControls>
    </telerik:NumericTextBoxSetting>
</telerik:RadInputManager>

    </div>
    
    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript" language="javascript">
        function GetValue() {
            var txtObj = $find("<%=RadTextBox2.ClientID %>");
            alert(txtObj.get_value());
        }

        function GetValueByButton() {
            var txtObj = $find("<%=RadTextBox3.ClientID %>");
            alert(txtObj.get_value());
        }

        function SetValue() {
            var txtObj = $find("<%=RadTextBox2.ClientID %>");
            txtObj.set_value("value set from client code");
        }
        
    </script>
    </telerik:RadCodeBlock>
    
    
</asp:Content>
