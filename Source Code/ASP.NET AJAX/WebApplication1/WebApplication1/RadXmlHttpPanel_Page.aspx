<%@ Page Title="RadXmlHttpPanel" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadXmlHttpPanel_Page.aspx.cs" Inherits="WebApplication1.RadXmlHttpPanel_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>RadXmlHttpPanel Callback</h1>
    <telerik:RadComboBox ID="rcbEmployee" runat="server"
                         OnClientSelectedIndexChanged="LoadEmployee"
                         AppendDataBoundItems="true">
        <Items>
            <telerik:RadComboBoxItem Text="-- Select Employee --" Value="-1" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadXmlHttpPanel ID="RadXmlHttpPanel1" runat="server" ClientIDMode="Static"
                             OnServiceRequest="RadXmlHttpPanel1_ServiceRequest">
                             
        <asp:Panel ID="panelData" runat="server" Visible="false">
            <fieldset>
            <legend>Employee Details</legend>
            <table>
                <tr>
                    <td>
                        <asp:Image ID="employeePic" runat="server" 
                                   width="100px">
                        </asp:Image>
                        <br />
                    </td>
                    <td>
                        <asp:Label ID="lblEmployeeName" runat="server"
                                   Font-Bold="true" Font-Size="14px">
                        </asp:Label>
                        <br />
                        <asp:Label ID="lblTitle" runat="server">
                        </asp:Label>
                        <hr />
                        <asp:Label ID="lblNotes" runat="server">
                        </asp:Label>
                    </td>
                </tr>
            </table>
        </fieldset>
        </asp:Panel>
    </telerik:RadXmlHttpPanel>
    <script type="text/javascript">
        function LoadEmployee(sender, eventArgs) {
            var item = eventArgs.get_item();
            var value = item.get_value();
            var panel = $find("RadXmlHttpPanel1");

            panel.set_value(value);
        }
    </script>
    <br /><br />
    <h1>RadXmlHttpPanel WebService</h1>
    <telerik:RadComboBox ID="rcbEmployee1" runat="server"
                         OnClientSelectedIndexChanged="LoadEmployee1"
                         AppendDataBoundItems="true">
        <Items>
            <telerik:RadComboBoxItem Text="-- Select Employee --" Value="-1" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadXmlHttpPanel ID="RadXmlHttpPanel2" runat="server" ClientIDMode="Static"
                             WebMethodPath="RadXmlHttpPanel_Employee.asmx"
                             WebMethodName="LoadEmployeeData" RegisterWithScriptManager="true">
    </telerik:RadXmlHttpPanel>
    <script type="text/javascript">
        function LoadEmployee1(sender, eventArgs) {
            var item = eventArgs.get_item();
            var value = item.get_value();
            var panel = $find("RadXmlHttpPanel2");

            panel.set_value(value);
        }
    </script>
</asp:Content>
