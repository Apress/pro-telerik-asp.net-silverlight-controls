<%@ Page Title="RadComboBox" MaintainScrollPositionOnPostback="true" Language="C#" AutoEventWireup="true" MasterPageFile="~/Site.Master" CodeBehind="RadComboBox_Page.aspx.cs" Inherits="WebApplication1.RadComboBox_Page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Databinding to Database</h1>
    <telerik:RadComboBox ID="RadComboBox1" Runat="server" 
            DataSourceID="SqlDataSource1" 
        	DataTextField="CategoryName" 
            DataValueField="CategoryID">
    </telerik:RadComboBox>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT [CategoryID], [CategoryName] FROM [Categories]">
    </asp:SqlDataSource>
    <br /><br />
    <h1>Client Side API</h1>
    <table>
        <tr>
            <td><input type="button" value="Add Item" onclick="javascript:AddNewItem();" /></td>
            <td><input type="button" value="Remove Item" onclick="javascript:RemoveItem();" /></td>
            <td><input type="button" value="Disable Item" onclick="javascript:DisableItem();" /></td>
            <td><input type="button" value="Enable Item" onclick="javascript:EnableItem();" /></td>
        </tr>
    </table>
    <telerik:RadComboBox ID="RadComboBox2" Runat="server" >
    <Items>
        <telerik:RadComboBoxItem Text="Item1" Value="Item1"></telerik:RadComboBoxItem>
        <telerik:RadComboBoxItem Text="Item2" Value="Item2"></telerik:RadComboBoxItem>
        <telerik:RadComboBoxItem Text="Item3" Value="Item3"></telerik:RadComboBoxItem>
        <telerik:RadComboBoxItem Text="Item4" Value="Item4"></telerik:RadComboBoxItem>
        <telerik:RadComboBoxItem Text="Item5" Value="Item5"></telerik:RadComboBoxItem>
    </Items>
    </telerik:RadComboBox>

    <script type="text/javascript" language="javascript">
        function AddNewItem() {
            var combo = $find("<%= RadComboBox2.ClientID %>");
            var index = combo.get_items().get_count() + 1;
            var comboItem = new Telerik.Web.UI.RadComboBoxItem();
            comboItem.set_text("Item" + index);
            combo.get_items().add(comboItem);
            comboItem.select();
        }

        function RemoveItem() {
            var combo = $find("<%= RadComboBox2.ClientID %>");
            var comboItem = combo.get_selectedItem();
            if (comboItem) {
                combo.get_items().remove(comboItem);
            }
        }

        function DisableItem() {
            var combo = $find("<%= RadComboBox2.ClientID %>");
            var comboItem = combo.get_selectedItem();
            if (comboItem) {
                comboItem.disable();
            }
        }

        function EnableItem() {
            var combo = $find("<%= RadComboBox2.ClientID %>");
            var comboItem = combo.get_selectedItem();
            if (comboItem && !comboItem.get_enabled()) {
                comboItem.enable();
            }
        }
    </script>
    <br /><br />
    <h1>Accesing Client Operations Code Behind</h1>
    <table>
        <tr>
            <td><input type="button" value="Add Item" onclick="javascript:AddNewItem2();" /></td>
            <td><input type="button" value="Remove Item" onclick="javascript:RemoveItem2();" /></td>
            <td><input type="button" value="Disable Item" onclick="javascript:DisableItem2();" /></td>
            <td><input type="button" value="Enable Item" onclick="javascript:EnableItem2();" /></td>
            <td><asp:Button ID="btnPostBack" runat="server" Text="Do PostBack" OnClick="btnPostBack_Click" /></td>
        </tr>
    </table>
    <telerik:RadComboBox ID="RadComboBox3" Runat="server" >
    <Items>
        <telerik:RadComboBoxItem Text="Item1" Value="Item1"></telerik:RadComboBoxItem>
        <telerik:RadComboBoxItem Text="Item2" Value="Item2"></telerik:RadComboBoxItem>
        <telerik:RadComboBoxItem Text="Item3" Value="Item3"></telerik:RadComboBoxItem>
        <telerik:RadComboBoxItem Text="Item4" Value="Item4"></telerik:RadComboBoxItem>
        <telerik:RadComboBoxItem Text="Item5" Value="Item5"></telerik:RadComboBoxItem>
    </Items>
    </telerik:RadComboBox>
    <br />
    <asp:ListBox ID="listChanges" runat="server" Width="400px" Height="100px">
    </asp:ListBox>
    <script type="text/javascript" language="javascript">
        function AddNewItem2() {
            var combo = $find("<%= RadComboBox3.ClientID %>");
            var index = combo.get_items().get_count() + 1;
            var comboItem = new Telerik.Web.UI.RadComboBoxItem();
            comboItem.set_text("Item" + index);
            combo.trackChanges();
            combo.get_items().add(comboItem);
            combo.commitChanges();
            comboItem.select();
        }

        function RemoveItem2() {
            var combo = $find("<%= RadComboBox3.ClientID %>");
            var comboItem = combo.get_selectedItem();
            if (comboItem) {
                combo.trackChanges();
                combo.get_items().remove(comboItem);
                combo.commitChanges();
            }
        }

        function DisableItem2() {
            var combo = $find("<%= RadComboBox3.ClientID %>");
            var comboItem = combo.get_selectedItem();
            if (comboItem) {
                combo.trackChanges();
                comboItem.disable();
                combo.commitChanges();
            }
        }

        function EnableItem2() {
            var combo = $find("<%= RadComboBox3.ClientID %>");
            var comboItem = combo.get_selectedItem();
            if (comboItem && !comboItem.get_enabled()) {
                combo.trackChanges();
                comboItem.enable();
                combo.commitChanges();
            }
        }
    </script>
    <br /><br />
    <h1>Load On Demand on Server Side</h1>
    <telerik:RadComboBox ID="RadComboBox4" Runat="server" 
                    EnableLoadOnDemand="True" 
                	MaxHeight="300px" 
                    DropDownWidth="250px"
                	OnItemsRequested="RadComboBox4_ItemsRequested">
    </telerik:RadComboBox>
    <br /><br />
    <h1>Load On Demand with Web Service</h1>
    <telerik:RadComboBox ID="RadComboBox5" runat="server" 
        EnableLoadOnDemand="True" 
        MaxHeight="300px" 
        OnClientItemsRequesting="OnClientItemsRequesting" 
        DropDownWidth="250px">
        <WebServiceSettings 
            Method="GetProducts" 
            Path="~/WebServices/RadComboBox_Products.asmx" />
    </telerik:RadComboBox>
    <script type="text/javascript">
        function OnClientItemsRequesting(sender, eventArgs) {
            var context = eventArgs.get_context();
            context["FilterString"] = eventArgs.get_text();
        }
    </script>
    <br /><br />
    <h1>Load On Demand with Caching</h1>
    <telerik:RadComboBox ID="RadComboBox6" Runat="server" 
                         EnableLoadOnDemand="True" 
                         MaxHeight="300px" 
                         OnClientItemsRequesting="OnClientItemsRequesting" 
                         DropDownWidth="250px" 
                         EnableItemCaching="true">
        <WebServiceSettings Method="GetProducts" Path="RadComboBox_WCFProductsService.svc"  />
    </telerik:RadComboBox>
    <br /><br />
    <h1>Load On Demand with ShowMoreResultsBox and EnableVirtualScrolling</h1>
    <telerik:RadComboBox ID="RadComboBox7" Runat="server" 
                         EnableLoadOnDemand="True"    
                         MaxHeight="300px" 
                         OnItemsRequested="RadComboBox7_ItemsRequested" 
                         DropDownWidth="250px" 
                         ShowMoreResultsBox="true" 
                         EnableVirtualScrolling="true" >
    </telerik:RadComboBox>
    <br /><br />
    <h1>Automatic Load On Demand with ShowMoreResultsBox and EnableVirtualScrolling</h1>
    <telerik:RadComboBox ID="RadComboBox9" Runat="server" 
                         MaxHeight="300px" 
                         DropDownWidth="250px" 
                         DataTextField="ProductName"
                         DataValueField="ProductID"
                         EnableAutomaticLoadOnDemand="true"
                         ItemsPerRequest="10"
                         ShowMoreResultsBox="true" 
                         EnableVirtualScrolling="true" >
    </telerik:RadComboBox>
    <asp:SqlDataSource ID="SqlDataSource3" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT [ProductID], [ProductName] FROM [Products]">
    </asp:SqlDataSource>
    <br /><br />
    <h1>RadComboBox with Templates</h1>
    <telerik:RadComboBox ID="RadComboBox8" Runat="server" 
                         EnableLoadOnDemand="True" 
                         MaxHeight="300px"
                         DropDownWidth="300px" 
                         DataSourceID="SqlDataSource2" 
                         HighlightTemplatedItems="True"
                         DataTextField="ProductName" 
                         DataValueField="ProductID" >
        <HeaderTemplate>
          <table style="width: 250px; text-align: left">
            <tr>
               <td style="width: 250px;">Product Name</td>
            </tr>
          </table>
        </HeaderTemplate>
        <ItemTemplate>
            <asp:CheckBox ID="chkProduct" runat="server" 
                          onclick="ProductClick(this)"
                          Text='<%# DataBinder.Eval(Container.DataItem, "ProductName") %>' />
        </ItemTemplate>
        <FooterTemplate>
          <table style="width: 250px; text-align: left">
            <tr>
               <td style="width: 250px;"><asp:Label ID="lblFooter" runat="server"></asp:Label></td>
            </tr>
          </table>
        </FooterTemplate>
    </telerik:RadComboBox>

        
    <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT [ProductID], [ProductName] FROM [Products] ORDER BY [ProductName]">
    </asp:SqlDataSource>



    <script type="text/javascript" language="javascript">
        function ProductClick(chk) {
            var combo = $find("<%= RadComboBox8.ClientID %>");
            var text = "";
            var items = combo.get_items();

            for (var i = 0; i < items.get_count(); i++) {
                var item = items.getItem(i);
                //get the checkbox element of the current item
                var chk1 = $get(combo.get_id() + "_i" + i + "_chkProduct");
                if (chk1.checked) 
                    text += item.get_text() + ",";
            }
            text = text.replace(/,$/, "");

            if (text.length > 0) 
                combo.set_text(text);
            else
                combo.set_text("");
        }

    </script>
        
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</asp:Content>