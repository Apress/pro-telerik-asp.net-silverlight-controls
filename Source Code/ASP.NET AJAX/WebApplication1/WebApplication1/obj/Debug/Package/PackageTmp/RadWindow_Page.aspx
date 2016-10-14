<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadWindow_Page.aspx.cs" Inherits="WebApplication1.RadWindow_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <telerik:RadWindowManager ID="RadWindowManager1" runat="server">
    </telerik:RadWindowManager>
    <h1>Open a RadWindow With External Content</h1>
    <asp:Button ID="btnOpenRadWindow1" runat="server" Text="Open a RadWindow" OnClientClick="javascript:ShowRadWindow1();return false;" />
    <telerik:RadWindow ID="RadWindow1" runat="server" Title="RadWindow with external content" Width="600px" Height="450px" style="z-index:20000">
    </telerik:RadWindow>
    <script language="javascript" type="text/javascript">
        function ShowRadWindow1() {
            var wnd = $find("<%=RadWindow1.ClientID %>");
            wnd.setUrl("http://www.cswsolutions.com");
            wnd.show();
        }
    </script>
    <br /><br />
    <h1>RadWindow Behaviors</h1>
    <asp:Button ID="btnOpenRadWindow2" runat="server" Text="Open a RadWindow that can only be moved and closed" OnClientClick="javascript:ShowRadWindow2();return false;" />
    <telerik:RadWindow ID="RadWindow2" runat="server" Width="600px" Height="450px" Behaviors="Close, Move" style="z-index:20000">
    </telerik:RadWindow>
    <script language="javascript" type="text/javascript">
        function ShowRadWindow2() {
            var wnd = $find("<%=RadWindow2.ClientID %>");
            wnd.setUrl("http://www.cswsolutions.com");
            wnd.show();
        }
    </script>
    <br /><br />
    <h1>Modal RadWindow</h1>
    <asp:Button ID="btnOpenRadWindow3" runat="server" Text="Open a Modal RadWindow" OnClientClick="javascript:ShowModalRadWindow();return false;" />
    <telerik:RadWindow ID="RadWindow3" runat="server" Width="600px" Height="450px" style="z-index:20000">
    </telerik:RadWindow>
    <script language="javascript" type="text/javascript">
        function ShowModalRadWindow() {
            var wnd = $find("<%=RadWindow3.ClientID %>");
            wnd.setUrl("http://www.cswsolutions.com");
            wnd.set_modal(true);
            wnd.show();
        }
    </script>
    <br /><br />
    <h1>Communication between RadWindows</h1>
    <a href="javascript:OpenProductsRadWindow();">Select a Product</a>
    <telerik:RadWindow ID="ProductsRadWindow" runat="server" Width="600px" Height="450px" 
                       OnClientClose="ProductSelected" style="z-index:20000" Title="Products">
    </telerik:RadWindow>
    <asp:Label ID="lblProductSelected" runat="server"></asp:Label>
    <script language="javascript" type="text/javascript">
        function OpenProductsRadWindow() {
            var wnd = $find("<%=ProductsRadWindow.ClientID %>");
            wnd.setUrl("radwindow_Products.aspx");
            wnd.show();
        }

        function ProductSelected(sender, eventArgs) {
            var arg = eventArgs.get_argument();

            if (arg) {
                var lbl = $get("<%=lblProductSelected.ClientID %>");
                lbl.innerHTML = "You selected the product: " + arg.ProductName;
            }
        }
    </script>
    <br /><br />
    <h1>MDI with Minimized Zone</h1>
    <asp:Button ID="btnMinimizedZone" runat="server" Text="Open a RadWindow with Minimized Zones" OnClientClick="javascript:ShowRadWindowM();return false;" />
    <telerik:RadWindow ID="RadWindow4" runat="server" Width="600px" Height="450px" style="z-index:20000">
    </telerik:RadWindow>
    <script language="javascript" type="text/javascript">
        function ShowRadWindowM() {
            var wnd = $find("<%=RadWindow4.ClientID %>");
            wnd.setUrl("radwindow_MinimizeZone.aspx");
            wnd.show();
            wnd.maximize();
        }
    </script>
    <br /><br />
    <h1>RadAlert, RadConfirm and RadPrompt</h1>
    <asp:Button ID="btnRadAlert" runat="server" Text="RadAlert" OnClientClick="javascript:ShowRadAlert();return false;" />
    <asp:Button ID="btnRadConfirm" runat="server" Text="RadConfirm" OnClientClick="javascript:ShowRadConfirm();return false;" />
    <asp:Button ID="btnRadPrompt" runat="server" Text="RadPrompt" OnClientClick="javascript:ShowRadPrompt();return false;" />
    <br />
    <asp:Label ID="lblResponse" runat="server"></asp:Label>
    <script language="javascript" type="text/javascript">
        function ShowRadAlert() {
            radalert('This is an alert! <br /><br />See how I can add <b>a lot</b> of content here.<br /><br /><i>Nice! Isn\'t it?</i>', 350, 250, 'RadAlert');
        }
        function ShowRadConfirm() {
            radconfirm('Do you like it?', RadConfirmCallBack, 300, 100, null, 'RadConfirm');
        }
        function RadConfirmCallBack(args) {
            $get("<%=lblResponse.ClientID %>").innerHTML = "You clicked on: " + (args ? "OK" : "Cancel");
        }
        function ShowRadPrompt() {
            radprompt('Enter some text', RadPromptCallBack, 300, 200, null, 'RadPrompt', 'text');
        }
        function RadPromptCallBack(args) {
            $get("<%=lblResponse.ClientID %>").innerHTML = "You entered: " + args;
        }
    </script>
</asp:Content>
