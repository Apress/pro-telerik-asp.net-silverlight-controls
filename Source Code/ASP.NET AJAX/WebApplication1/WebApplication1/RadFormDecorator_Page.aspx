<%@ Page Title="RadFormDecorator" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadFormDecorator_Page.aspx.cs" Inherits="WebApplication1.RadFormDecorator_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        .formRow
        {
            float: left;
            border-right: solid 1px #cbcbcb;
            height: 220px;
            padding-left: 16px;
        }
        /* ie 7 does not use same size as other browsers */
        h5
        {
            font-size: 10px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>RadFormDecorator for controls</h1> 
    <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server"
                          ClientEvents-OnRequestStart="RequestStart">
        <telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" 
                                  DecoratedControls="all"
                                  DecorationZoneID="panelDecoratedControls">
        </telerik:RadFormDecorator>
        <div style="width:250px; float:left;">
        <fieldset>
            <legend>DecoratedControls Options</legend>
                <telerik:RadComboBox ID="rcbSkin" runat="server"
                                     AutoPostBack="true"
                                     ClientIDMode="Static"
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
                <asp:RadioButtonList ID="DecoratedControlsRadioList" runat="server" 
                                     AutoPostBack="true"
                                     OnSelectedIndexChanged="DecoratedControlsRadioList_SelectedIndexChanged">
                    <asp:ListItem Text="All" Value="All" Selected="true">
                    </asp:ListItem>
                    <asp:ListItem Text="Default" Value="Default">
                    </asp:ListItem>
                    <asp:ListItem Text="None" Value="None">
                    </asp:ListItem>
                    <asp:ListItem Text="GridFormDetailsViews" Value="Grid">
                    </asp:ListItem>
                </asp:RadioButtonList>
                <asp:CheckBoxList ID="DecoratedControlsCheckBoxList" runat="server" 
                                  AutoPostBack="True"
                                  OnSelectedIndexChanged="DecoratedControlsCheckBoxList_SelectedIndexChanged">
                    <asp:ListItem Text="Buttons" Value="Buttons">
                    </asp:ListItem>
                    <asp:ListItem Text="CheckBoxes" Value="CheckBoxes">
                    </asp:ListItem>
                    <asp:ListItem Text="Fieldset" Value="Fieldset">
                    </asp:ListItem>
                    <asp:ListItem Text="Headings (H4,H5,H6)" Value="H4H5H6">
                    </asp:ListItem>
                    <asp:ListItem Text="HTML Label" Value="Label">
                    </asp:ListItem>
                    <asp:ListItem Text="RadioButtons" Value="RadioButtons">
                    </asp:ListItem>
                    <asp:ListItem Text="Scrollbars" Value="Scrollbars">
                    </asp:ListItem>
                    <asp:ListItem Text="Textarea" Value="Textarea">
                    </asp:ListItem>
                    <asp:ListItem Text="Textbox" Value="Textbox">
                    </asp:ListItem>
                    <asp:ListItem Text="Select" Value="Select">
                    </asp:ListItem>
                    <asp:ListItem Text="GridFormDetailsViews" Value="GridFormDetailsViews">
                    </asp:ListItem>
                </asp:CheckBoxList>
        </fieldset>
        </div>
        <div style="width:25px; float:left;">&nbsp;</div>
        <div id="panelDecoratedControls" style="width:450px; float:left;">
            <fieldset style="width:450px;">
                <legend>Preview</legend>
                <input type="text" />
                <input type="button" value="Button" />
                <asp:CheckBoxList ID="CheckBoxList1" runat="server">
                    <asp:ListItem Text="Check 1" />
                    <asp:ListItem Text="Check 2" />
                </asp:CheckBoxList>
                <asp:RadioButtonList ID="RadioButtonList1" runat="server">
                    <asp:ListItem Text="Radio 1" />
                    <asp:ListItem Text="Radio 2" />
                </asp:RadioButtonList>
                <select>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </select>
                <asp:ListBox ID="ListBox1" runat="server">
                    <asp:ListItem Text="Option 1" />
                    <asp:ListItem Text="Option 2" />
                </asp:ListBox>
                <textarea rows="3" cols="10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                </textarea>
                <h4>GridView (h4)</h4>
                <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
                    AutoGenerateColumns="False" DataKeyNames="ProductID" 
                    DataSourceID="SqlDataSource1">
                    <Columns>
                        <asp:BoundField DataField="ProductID" HeaderText="ProductID" ReadOnly="True" 
                            SortExpression="ProductID" />
                        <asp:BoundField DataField="ProductName" HeaderText="ProductName" 
                            SortExpression="ProductName" />
                    </Columns>
                </asp:GridView>
                <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
                    SelectCommand="SELECT [ProductID], [ProductName] FROM [Alphabetical list of products]">
                </asp:SqlDataSource>
                <h5>ListView (h5)</h5>
                <asp:ListView ID="ListView1" runat="server" DataKeyNames="ProductID" 
                    DataSourceID="SqlDataSource1">
                    <AlternatingItemTemplate>
                        <tr style="">
                            <td>
                                <asp:Label ID="ProductIDLabel" runat="server" Text='<%# Eval("ProductID") %>' />
                            </td>
                            <td>
                                <asp:Label ID="ProductNameLabel" runat="server" 
                                    Text='<%# Eval("ProductName") %>' />
                            </td>
                        </tr>
                    </AlternatingItemTemplate>
                    <EditItemTemplate>
                        <tr style="">
                            <td>
                                <asp:Button ID="UpdateButton" runat="server" CommandName="Update" 
                                    Text="Update" />
                                <asp:Button ID="CancelButton" runat="server" CommandName="Cancel" 
                                    Text="Cancel" />
                            </td>
                            <td>
                                <asp:Label ID="ProductIDLabel1" runat="server" 
                                    Text='<%# Eval("ProductID") %>' />
                            </td>
                            <td>
                                <asp:TextBox ID="ProductNameTextBox" runat="server" 
                                    Text='<%# Bind("ProductName") %>' />
                            </td>
                        </tr>
                    </EditItemTemplate>
                    <EmptyDataTemplate>
                        <table runat="server" style="">
                            <tr>
                                <td>
                                    No data was returned.</td>
                            </tr>
                        </table>
                    </EmptyDataTemplate>
                    <InsertItemTemplate>
                        <tr style="">
                            <td>
                                <asp:Button ID="InsertButton" runat="server" CommandName="Insert" 
                                    Text="Insert" />
                                <asp:Button ID="CancelButton" runat="server" CommandName="Cancel" 
                                    Text="Clear" />
                            </td>
                            <td>
                                <asp:TextBox ID="ProductIDTextBox" runat="server" 
                                    Text='<%# Bind("ProductID") %>' />
                            </td>
                            <td>
                                <asp:TextBox ID="ProductNameTextBox" runat="server" 
                                    Text='<%# Bind("ProductName") %>' />
                            </td>
                        </tr>
                    </InsertItemTemplate>
                    <ItemTemplate>
                        <tr style="">
                            <td>
                                <asp:Label ID="ProductIDLabel" runat="server" Text='<%# Eval("ProductID") %>' />
                            </td>
                            <td>
                                <asp:Label ID="ProductNameLabel" runat="server" 
                                    Text='<%# Eval("ProductName") %>' />
                            </td>
                        </tr>
                    </ItemTemplate>
                    <LayoutTemplate>
                        <table runat="server">
                            <tr runat="server">
                                <td runat="server">
                                    <table ID="itemPlaceholderContainer" runat="server" border="0" style="">
                                        <tr runat="server" style="">
                                            <th runat="server">
                                                ProductID</th>
                                            <th runat="server">
                                                ProductName</th>
                                        </tr>
                                        <tr ID="itemPlaceholder" runat="server">
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr runat="server">
                                <td runat="server" style="">
                                    <asp:DataPager ID="DataPager1" runat="server">
                                        <Fields>
                                            <asp:NextPreviousPagerField ButtonType="Button" ShowFirstPageButton="True" 
                                                ShowLastPageButton="True" />
                                        </Fields>
                                    </asp:DataPager>
                                </td>
                            </tr>
                        </table>
                    </LayoutTemplate>
                    <SelectedItemTemplate>
                        <tr style="">
                            <td>
                                <asp:Label ID="ProductIDLabel" runat="server" Text='<%# Eval("ProductID") %>' />
                            </td>
                            <td>
                                <asp:Label ID="ProductNameLabel" runat="server" 
                                    Text='<%# Eval("ProductName") %>' />
                            </td>
                        </tr>
                    </SelectedItemTemplate>
                </asp:ListView>
                <h6>DetailsView (h6)</h6>
                <asp:DetailsView ID="DetailsView1" runat="server" AllowPaging="True" 
                    AutoGenerateRows="False" DataKeyNames="ProductID" DataSourceID="SqlDataSource1">
                    <Fields>
                        <asp:BoundField DataField="ProductID" HeaderText="ProductID" ReadOnly="True" 
                            SortExpression="ProductID" />
                        <asp:BoundField DataField="ProductName" HeaderText="ProductName" 
                            SortExpression="ProductName" />
                    </Fields>
                </asp:DetailsView>
            </fieldset>
        </div>
    </telerik:RadAjaxPanel>
    <script type="text/javascript">
        function RequestStart(sender, eventArgs) {
            var target = eventArgs.get_eventTarget();
            if (target == "rcbSkin")
                eventArgs.set_enableAjax(false);
        }
    </script>
</asp:Content>
