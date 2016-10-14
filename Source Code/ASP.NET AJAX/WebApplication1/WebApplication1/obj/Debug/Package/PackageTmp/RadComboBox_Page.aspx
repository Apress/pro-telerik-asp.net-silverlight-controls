<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Site.Master" CodeBehind="RadComboBox_Page.aspx.cs" Inherits="WebApplication1.RadComboBox_Page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
    
<telerik:RadComboBox ID="RadComboBox1" Runat="server" EnableLoadOnDemand="True" MaxHeight="300px"
                     DropDownWidth="300px" DataSourceID="SqlDataSource1" HighlightTemplatedItems="True"
                     OnItemDataBound="RadComboBox1_ItemDataBound" DataTextField="ProductName" DataValueField="ProductID" >
    <HeaderTemplate>
      <table style="width: 250px; text-align: left">
        <tr>
           <td style="width: 250px;">Product Name</td>
        </tr>
      </table>
    </HeaderTemplate>
    <ItemTemplate>
        <asp:CheckBox ID="chkProduct" runat="server" onclick="ProductClick(this)"
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

    
<asp:SqlDataSource ID="SqlDataSource1" runat="server" 
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
    SelectCommand="SELECT [ProductID], [ProductName] FROM [Products] ORDER BY [ProductName]">
</asp:SqlDataSource>



<script type="text/javascript" language="javascript">
    function ProductClick(chk) {
        var combo = $find("<%= RadComboBox1.ClientID %>");
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
    
    </div>
</asp:Content>