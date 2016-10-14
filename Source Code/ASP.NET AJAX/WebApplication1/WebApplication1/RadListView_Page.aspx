<%@ Page Title="RadListView" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadListView_Page.aspx.cs" Inherits="WebApplication1.RadListView_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Declarative Databinding</h1>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>
        <telerik:RadListView ID="RadListView1" runat="server" DataKeyNames="ProductID" 
            DataSourceID="ProductsDataSource" ItemPlaceholderID="itemsContainer" AllowPaging="true" PageSize="10">
            <LayoutTemplate>
                <table border="1" cellpadding="3" cellspacing="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Qty Per Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <asp:Literal id="itemsContainer" runat="server">
                        
                        </asp:Literal>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4">
                                <telerik:RadDataPager ID="RadDataPager1" runat="server">
                                    <Fields>
                                        <telerik:RadDataPagerButtonField FieldType="First" />
                                        <telerik:RadDataPagerButtonField FieldType="Prev" />
                                        <telerik:RadDataPagerButtonField FieldType="Numeric" />
                                        <telerik:RadDataPagerButtonField FieldType="Next" />
                                        <telerik:RadDataPagerButtonField FieldType="Last" />
                                    </Fields>
                                </telerik:RadDataPager>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </LayoutTemplate>
            <AlternatingItemTemplate>
                <tr style="background-color:Teal; color:White">
                    <td><%# Eval("ProductID")%></td>
                    <td><%# Eval("ProductName") %></td>
                    <td><%# Eval("CategoryName") %></td>
                    <td><%# Eval("QuantityPerUnit")%></td>
                </tr>
            </AlternatingItemTemplate>
            <ItemTemplate>
                <tr style="color:Teal">
                    <td><%# Eval("ProductID")%></td>
                    <td><%# Eval("ProductName") %></td>
                    <td><%# Eval("CategoryName") %></td>
                    <td><%# Eval("QuantityPerUnit")%></td>
                </tr>
            </ItemTemplate>
        </telerik:RadListView>
        <asp:SqlDataSource ID="ProductsDataSource" runat="server" 
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
            SelectCommand="SELECT [ProductID], [ProductName], [QuantityPerUnit], [CategoryName] FROM [Products] INNER JOIN [Categories] ON [Products].[CategoryID] = [Categories].[CategoryID]">
        </asp:SqlDataSource>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Simple Databinding</h1>
    <telerik:RadListView ID="RadListView2" runat="server" 
                        DataKeyNames="CategoryID" 
                        ItemPlaceholderID="itemsContainer">
        <LayoutTemplate>
            <table border="1" cellpadding="3" cellspacing="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <asp:Literal id="itemsContainer" runat="server">
                    
                    </asp:Literal>
                </tbody>
            </table>
        </LayoutTemplate>
        <AlternatingItemTemplate>
            <tr style="background-color:Teal; color:White">
                <td><%# Eval("CategoryID")%></td>
                <td><%# Eval("CategoryName") %></td>
            </tr>
        </AlternatingItemTemplate>
        <ItemTemplate>
            <tr style="color:Teal">
                <td><%# Eval("CategoryID")%></td>
                <td><%# Eval("CategoryName") %></td>
            </tr>
        </ItemTemplate>
    </telerik:RadListView>
    <br /><br />
    <h1>Advanced Databinding</h1>
    <asp:UpdatePanel ID="UpdatePanel2" runat="server">
    <ContentTemplate>
        <telerik:RadListView ID="RadListView3" runat="server" 
                            DataKeyNames="ProductID" 
                            ItemPlaceholderID="itemsContainer" 
                            AllowPaging="true" 
                            PageSize="10"
                            OnNeedDataSource="RadListView_NeedDataSource">
            <LayoutTemplate>
                <table border="1" cellpadding="3" cellspacing="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Qty Per Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <asp:Literal id="itemsContainer" runat="server">
                        
                        </asp:Literal>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4">
                                <telerik:RadDataPager ID="RadDataPager1" runat="server">
                                    <Fields>
                                        <telerik:RadDataPagerButtonField FieldType="First" />
                                        <telerik:RadDataPagerButtonField FieldType="Prev" />
                                        <telerik:RadDataPagerButtonField FieldType="Numeric" />
                                        <telerik:RadDataPagerButtonField FieldType="Next" />
                                        <telerik:RadDataPagerButtonField FieldType="Last" />
                                    </Fields>
                                </telerik:RadDataPager>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </LayoutTemplate>
            <AlternatingItemTemplate>
                <tr style="background-color:Teal; color:White">
                    <td><%# Eval("ProductID")%></td>
                    <td><%# Eval("ProductName") %></td>
                    <td><%# Eval("CategoryName") %></td>
                    <td><%# Eval("QuantityPerUnit")%></td>
                </tr>
            </AlternatingItemTemplate>
            <ItemTemplate>
                <tr style="color:Teal">
                    <td><%# Eval("ProductID")%></td>
                    <td><%# Eval("ProductName") %></td>
                    <td><%# Eval("CategoryName") %></td>
                    <td><%# Eval("QuantityPerUnit")%></td>
                </tr>
            </ItemTemplate>
        </telerik:RadListView>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Manual Editing Operations</h1>
    <asp:UpdatePanel ID="UpdatePanel3" runat="server">
    <ContentTemplate>
        <telerik:RadListView ID="RadListView4" runat="server" 
                            DataKeyNames="ProductID, CategoryID" 
                            ItemPlaceholderID="itemsContainer" 
                            AllowPaging="true" 
                            PageSize="10"
                            OnNeedDataSource="RadListView_NeedDataSource"
                            OnItemCommand="RadListView4_ItemCommand">
            <LayoutTemplate>
                        <table border="1">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Qty Per Unit</th>
                            <th>Discontinued</th>
                            <th><asp:Button ID="btnInsert" runat="server" Text="Insert" OnClick="btnInsert_Click" /></th>
                        </tr>
                        </thead>
                        <tbody>
                            <asp:Literal id="itemsContainer" runat="server">
                            
                            </asp:Literal>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="6">
                                    <telerik:RadDataPager ID="RadDataPager1" runat="server">
                                        <Fields>
                                            <telerik:RadDataPagerButtonField FieldType="First" />
                                            <telerik:RadDataPagerButtonField FieldType="Prev" />
                                            <telerik:RadDataPagerButtonField FieldType="Numeric" />
                                            <telerik:RadDataPagerButtonField FieldType="Next" />
                                            <telerik:RadDataPagerButtonField FieldType="Last" />
                                        </Fields>
                                    </telerik:RadDataPager>
                                </td>
                            </tr>
                        </tfoot>
                        </table>
            </LayoutTemplate>
            <AlternatingItemTemplate>
                    <tr style="background-color:Teal; color:White">
                        <td><%# Eval("ProductID")%></td>
                        <td><%# Eval("ProductName") %></td>
                        <td><%# Eval("CategoryName") %></td>
                        <td><%# Eval("QuantityPerUnit")%></td>
                        <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="false" Checked='<%# Bind("Discontinued")%>' /></td>
                        <td>
                            <asp:Button ID="btnEdit" runat="server" Text="Edit" CommandName="Edit" />
                            <asp:Button ID="btnDelete" runat="server" Text="Delete" OnClientClick="javascript:return ConfirmDelete(this);" CommandName="Delete" />
                        </td>
                    </tr>
            </AlternatingItemTemplate>
            <ItemTemplate>
                    <tr style="color:Teal">
                        <td><%# Eval("ProductID")%></td>
                        <td><%# Eval("ProductName") %></td>
                        <td><%# Eval("CategoryName") %></td>
                        <td><%# Eval("QuantityPerUnit")%></td>
                        <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="false" Checked='<%# Bind("Discontinued")%>' /></td>
                        <td>
                            <asp:Button ID="btnEdit" runat="server" Text="Edit" CommandName="Edit" />
                            <asp:Button ID="btnDelete" runat="server" Text="Delete" OnClientClick="javascript:return ConfirmDelete(this);" CommandName="Delete" />
                        </td>
                    </tr>
            </ItemTemplate>
            <EditItemTemplate>
                    <tr>
                        <td><asp:Label ID="lblID" runat="server" Text='<%# Eval("ProductID")%>'></asp:Label></td>
                        <td><telerik:RadTextBox ID="txtName" runat="server" Text='<%# Bind("ProductName") %>'></telerik:RadTextBox> </td>
                        <td><telerik:RadComboBox ID="rcbCategory" runat="server" 
                                DataSourceID="CategoriesDataSource" DataTextField="CategoryName" 
                                DataValueField="CategoryID" SelectedValue='<%# Bind("CategoryID") %>'></telerik:RadComboBox> </td>
                        <td><telerik:RadTextBox ID="txtQuantity" runat="server" Text='<%# Bind("QuantityPerUnit")%>'></telerik:RadTextBox> </td>
                        <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="true" Checked='<%# Bind("Discontinued")%>' /></td>
                        <td>
                            <asp:Button ID="btnUpdate" runat="server" Text="Update" CommandName="Update" />
                            <asp:Button ID="btnCancel" runat="server" Text="Cancel" CommandName="Cancel" />
                        </td>
                    </tr>
            </EditItemTemplate>
            <InsertItemTemplate>
                    <tr>
                        <td><asp:Label ID="lblID" runat="server" Text='<%# Eval("ProductID")%>'></asp:Label></td>
                        <td><telerik:RadTextBox ID="txtName" runat="server" Text='<%# Bind("ProductName") %>'></telerik:RadTextBox> </td>
                        <td><telerik:RadComboBox ID="rcbCategory" runat="server" 
                                DataSourceID="CategoriesDataSource" DataTextField="CategoryName" 
                                DataValueField="CategoryID" SelectedValue='<%# Bind("CategoryID") %>'></telerik:RadComboBox> </td>
                        <td><telerik:RadTextBox ID="txtQuantity" runat="server" Text='<%# Bind("QuantityPerUnit")%>'></telerik:RadTextBox> </td>
                        <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="true" Checked='<%# Bind("Discontinued")%>' /></td>
                        <td>
                            <asp:Button ID="btnPerformInsert" runat="server" Text="Insert" CommandName="PerformInsert" />
                            <asp:Button ID="btnCancel" runat="server" Text="Cancel" CommandName="Cancel" />
                        </td>
                    </tr>
            </InsertItemTemplate>
        </telerik:RadListView>
        <asp:SqlDataSource ID="CategoriesDataSource" runat="server" 
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
            SelectCommand="SELECT * FROM Categories">
        </asp:SqlDataSource>
    </ContentTemplate>
    </asp:UpdatePanel>
    <telerik:RadWindowManager ID="RadWindowManager1" runat="server">
    </telerik:RadWindowManager>
        <script type="text/javascript">
            function ConfirmDelete(sender) {
                var callBackFn = function (args) {
                    if (args) __doPostBack(sender.id.replace('_', '$'), '');
                    else return false;
                }
                var callBackFn2 = function (args) {
                    return args;
                }
                radconfirm('Are you sure you want to delete this item?', callBackFn2);
            }
    </script>
    <br /><br />
    <h1>Automatic Editing Operations</h1>
    <asp:UpdatePanel ID="UpdatePanel4" runat="server">
    <ContentTemplate>
        <telerik:RadListView ID="RadListView5" runat="server" 
                            DataKeyNames="ProductID, CategoryID" 
                            ItemPlaceholderID="itemsContainer" 
                            AllowPaging="true" 
                            PageSize="10"
                            DataSourceID="LinqDataSource1"
                            OnItemCommand="RadListView5_ItemCommand">
            <LayoutTemplate>
                        <table border="1">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Qty Per Unit</th>
                            <th>Discontinued</th>
                            <th><asp:Button ID="btnInsert1" runat="server" Text="Insert" OnClick="btnInsert1_Click" /></th>
                        </tr>
                        </thead>
                        <tbody>
                            <asp:Literal id="itemsContainer" runat="server">
                            
                            </asp:Literal>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="6">
                                    <telerik:RadDataPager ID="RadDataPager1" runat="server">
                                        <Fields>
                                            <telerik:RadDataPagerButtonField FieldType="First" />
                                            <telerik:RadDataPagerButtonField FieldType="Prev" />
                                            <telerik:RadDataPagerButtonField FieldType="Numeric" />
                                            <telerik:RadDataPagerButtonField FieldType="Next" />
                                            <telerik:RadDataPagerButtonField FieldType="Last" />
                                        </Fields>
                                    </telerik:RadDataPager>
                                </td>
                            </tr>
                        </tfoot>
                        </table>
            </LayoutTemplate>
            <AlternatingItemTemplate>
                    <tr style="background-color:Teal; color:White">
                        <td><%# Eval("ProductID")%></td>
                        <td><%# Eval("ProductName") %></td>
                        <td><%# Eval("CategoryID") %></td>
                        <td><%# Eval("QuantityPerUnit")%></td>
                        <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="false" Checked='<%# Bind("Discontinued")%>' /></td>
                        <td>
                            <asp:Button ID="btnEdit" runat="server" Text="Edit" CommandName="Edit" />
                            <asp:Button ID="btnDelete" runat="server" Text="Delete" OnClientClick="javascript:return ConfirmDelete(this);" CommandName="Delete" />
                        </td>
                    </tr>
            </AlternatingItemTemplate>
            <ItemTemplate>
                    <tr style="color:Teal">
                        <td><%# Eval("ProductID")%></td>
                        <td><%# Eval("ProductName") %></td>
                        <td><%# Eval("CategoryID") %></td>
                        <td><%# Eval("QuantityPerUnit")%></td>
                        <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="false" Checked='<%# Bind("Discontinued")%>' /></td>
                        <td>
                            <asp:Button ID="btnEdit" runat="server" Text="Edit" CommandName="Edit" />
                            <asp:Button ID="btnDelete" runat="server" Text="Delete" OnClientClick="javascript:return ConfirmDelete(this);" CommandName="Delete" />
                        </td>
                    </tr>
            </ItemTemplate>
            <EditItemTemplate>
                    <tr style="color:Teal">
                        <td><asp:Label ID="lblID" runat="server" Text='<%# Eval("ProductID")%>'></asp:Label></td>
                        <td><telerik:RadTextBox ID="txtName" runat="server" Text='<%# Bind("ProductName") %>'></telerik:RadTextBox> </td>
                        <td><telerik:RadComboBox ID="rcbCategory" runat="server" 
                                DataSourceID="CategoriesDataSource" DataTextField="CategoryName" 
                                DataValueField="CategoryID" SelectedValue='<%# Bind("CategoryID") %>'></telerik:RadComboBox> </td>
                        <td><telerik:RadTextBox ID="txtQuantity" runat="server" Text='<%# Bind("QuantityPerUnit")%>'></telerik:RadTextBox> </td>
                        <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="true" Checked='<%# Bind("Discontinued")%>' /></td>
                        <td>
                            <asp:Button ID="btnUpdate" runat="server" Text="Update" CommandName="Update" />
                            <asp:Button ID="btnCancel" runat="server" Text="Cancel" CommandName="Cancel" />
                        </td>
                    </tr>
            </EditItemTemplate>
            <InsertItemTemplate>
                    <tr style="color:Teal">
                        <td><asp:Label ID="lblID" runat="server" Text='<%# Eval("ProductID")%>'></asp:Label></td>
                        <td><telerik:RadTextBox ID="txtName" runat="server" Text='<%# Bind("ProductName") %>'></telerik:RadTextBox> </td>
                        <td><telerik:RadComboBox ID="rcbCategory" runat="server" 
                                DataSourceID="CategoriesDataSource" DataTextField="CategoryName" 
                                DataValueField="CategoryID" SelectedValue='<%# Bind("CategoryID") %>'></telerik:RadComboBox> </td>
                        <td><telerik:RadTextBox ID="txtQuantity" runat="server" Text='<%# Bind("QuantityPerUnit")%>'></telerik:RadTextBox> </td>
                        <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="true" Checked='<%# Bind("Discontinued")%>' /></td>
                        <td>
                            <asp:Button ID="btnPerformInsert" runat="server" Text="Insert" CommandName="PerformInsert" />
                            <asp:Button ID="btnCancel" runat="server" Text="Cancel" CommandName="Cancel" />
                        </td>
                    </tr>
            </InsertItemTemplate>
        </telerik:RadListView>
    <asp:LinqDataSource ID="LinqDataSource1" runat="server" 
        ContextTypeName="WebApplication1.NorthwindDataContext" EnableDelete="True" 
        EnableInsert="True" EnableUpdate="True" EntityTypeName="" 
        TableName="Products">
    </asp:LinqDataSource>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Automatic Layout</h1>
    <asp:UpdatePanel ID="UpdatePanel5" runat="server">
    <ContentTemplate>
    <telerik:RadListView ID="RadListView6" runat="server" 
        DataKeyNames="ProductID" 
        DataSourceID="ProductsDataSource1" 
        AllowMultiItemSelection="true"
        AllowPaging="True" 
        InsertItemPosition="LastItem" 
        Skin="WebBlue">
        <LayoutTemplate>
            <div class="RadListView RadListView_WebBlue">
                <table cellspacing="0" style="width:100%;">
                    <thead>
                        <tr class="rlvHeader">
                            <th>&nbsp;</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Supplier</th>
                            <th>Category</th>
                            <th>Quantity Per Unit</th>
                            <th>Discontinued</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td colspan="7">
                                <telerik:RadDataPager ID="RadDataPager1" runat="server" Skin="WebBlue">
                                    <Fields>
                                        <telerik:RadDataPagerButtonField FieldType="FirstPrev" />
                                        <telerik:RadDataPagerButtonField FieldType="Numeric" />
                                        <telerik:RadDataPagerButtonField FieldType="NextLast" />
                                        <telerik:RadDataPagerGoToPageField />
                                        <telerik:RadDataPagerNumericPageSizeField />
                                    </Fields>
                                </telerik:RadDataPager>
                            </td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr ID="itemPlaceholder" runat="server">
                        </tr>
                    </tbody>
                </table>
            </div>
        </LayoutTemplate>
        <ItemTemplate>
            <tr class="rlvI">
                <td>
                    <asp:Button ID="SelectButton" runat="server" CommandName="Select" 
                        CssClass="rlvBSel" Text=" " />
                    <asp:Button ID="DeleteButton" runat="server" CommandName="Delete" 
                        CssClass="rlvBDel" Text=" " />
                    <asp:Button ID="EditButton" runat="server" CommandName="Edit" 
                        CssClass="rlvBEdit" Text=" " />
                </td>
                <td><%# Eval("ProductID")%></td>
                <td><%# Eval("ProductName") %></td>
                <td><%# Eval("SupplierID") %></td>
                <td><%# Eval("CategoryID") %></td>
                <td><%# Eval("QuantityPerUnit")%></td>
                <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="false" Checked='<%# Bind("Discontinued")%>' /></td>
            </tr>
        </ItemTemplate>
        <AlternatingItemTemplate>
            <tr class="rlvA">
                <td>
                    <asp:Button ID="SelectButton" runat="server" CommandName="Select" 
                        CssClass="rlvBSel" Text=" " />
                    <asp:Button ID="DeleteButton" runat="server" CommandName="Delete" 
                        CssClass="rlvBDel" Text=" " />
                    <asp:Button ID="EditButton" runat="server" CommandName="Edit" 
                        CssClass="rlvBEdit" Text=" " />
                </td>
                <td><%# Eval("ProductID")%></td>
                <td><%# Eval("ProductName") %></td>
                <td><%# Eval("SupplierID") %></td>
                <td><%# Eval("CategoryID") %></td>
                <td><%# Eval("QuantityPerUnit")%></td>
                <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="false" Checked='<%# Bind("Discontinued")%>' /></td>
            </tr>
        </AlternatingItemTemplate>
        <EditItemTemplate>
            <tr class="rlvIEdit">
                <td>
                    <table cellspacing="0" class="rlvEditTable">
                        <tr>
                            <td colspan="2">
                                <asp:Button ID="UpdateButton" runat="server" CommandName="Update" 
                                    CssClass="rlvBUpdate" Text=" " />
                                <asp:Button ID="CancelButton" runat="server" CausesValidation="False" 
                                    CommandName="Cancel" CssClass="rlvBCancel" Text=" " />
                            </td>
                        </tr>
                    </table>
                </td>
                <td><asp:Label ID="lblID" runat="server" Text='<%# Eval("ProductID")%>'></asp:Label></td>
                <td><telerik:RadTextBox ID="txtName" runat="server" Text='<%# Bind("ProductName") %>'></telerik:RadTextBox> </td>
                <td><telerik:RadComboBox ID="rcbCategory" runat="server" 
                        DataSourceID="CategoriesDataSource" DataTextField="CategoryName" 
                        DataValueField="CategoryID" SelectedValue='<%# Bind("CategoryID") %>'></telerik:RadComboBox> </td>
                <td><telerik:RadComboBox ID="rcbSupplier" runat="server" 
                        DataSourceID="SuppliersDataSource" DataTextField="CompanyName" 
                        DataValueField="SupplierID" SelectedValue='<%# Bind("SupplierID") %>'></telerik:RadComboBox> </td>
                <td><telerik:RadTextBox ID="txtQuantity" runat="server" Text='<%# Bind("QuantityPerUnit")%>'></telerik:RadTextBox> </td>
                <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="true" Checked='<%# Bind("Discontinued")%>' /></td>
            </tr>
        </EditItemTemplate>
        <InsertItemTemplate>
            <tr class="rlvIEdit">
                <td>
                    <table cellspacing="0" class="rlvEditTable">
                        <tr>
                            <td colspan="2">
                                <asp:Button ID="PerformInsertButton" runat="server" CommandName="PerformInsert" 
                                    CssClass="rlvBAdd" Text=" " />
                                <asp:Button ID="CancelButton" runat="server" CausesValidation="False" 
                                    CommandName="Cancel" CssClass="rlvBCancel" Text=" " />
                            </td>
                        </tr>
                    </table>
                </td>
                <td><asp:Label ID="lblID" runat="server" Text='<%# Eval("ProductID")%>'></asp:Label></td>
                <td><telerik:RadTextBox ID="txtName" runat="server" Text='<%# Bind("ProductName") %>'></telerik:RadTextBox> </td>
                <td><telerik:RadComboBox ID="rcbCategory" runat="server" 
                        DataSourceID="CategoriesDataSource" DataTextField="CategoryName" 
                        DataValueField="CategoryID" SelectedValue='<%# Bind("CategoryID") %>'></telerik:RadComboBox> </td>
                <td><telerik:RadComboBox ID="rcbSupplier" runat="server" 
                        DataSourceID="SuppliersDataSource" DataTextField="CompanyName" 
                        DataValueField="SupplierID" SelectedValue='<%# Bind("SupplierID") %>'></telerik:RadComboBox> </td>
                <td><telerik:RadTextBox ID="txtQuantity" runat="server" Text='<%# Bind("QuantityPerUnit")%>'></telerik:RadTextBox> </td>
                <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="true" Checked='<%# Bind("Discontinued")%>' /></td>
            </tr>
        </InsertItemTemplate>
        <EmptyDataTemplate>
            <div class="RadListView RadListView_WebBlue">
                <div class="rlvEmpty">
                    There are no items to be displayed.</div>
            </div>
        </EmptyDataTemplate>
        <SelectedItemTemplate>
            <tr class="rlvISel">
                <td>
                    <asp:Button ID="DeselectButton" runat="server" CommandName="Deselect" 
                        CssClass="rlvBSel" Text=" " />
                    <asp:Button ID="DeleteButton" runat="server" CommandName="Delete" 
                        CssClass="rlvBDel" Text=" " />
                    <asp:Button ID="EditButton" runat="server" CommandName="Edit" 
                        CssClass="rlvBEdit" Text=" " />
                </td>
                <td><%# Eval("ProductID")%></td>
                <td><%# Eval("ProductName") %></td>
                <td><%# Eval("SupplierID") %></td>
                <td><%# Eval("CategoryID") %></td>
                <td><%# Eval("QuantityPerUnit")%></td>
                <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="false" Checked='<%# Bind("Discontinued")%>' /></td>
            </tr>
        </SelectedItemTemplate>
        
    </telerik:RadListView>
    <asp:SqlDataSource ID="ProductsDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT * FROM Products">
    </asp:SqlDataSource>
    <asp:SqlDataSource ID="SuppliersDataSource" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT * FROM Suppliers">
    </asp:SqlDataSource>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Custom Paging</h1>
    <asp:UpdatePanel ID="UpdatePanel6" runat="server">
    <ContentTemplate>
    <telerik:RadListView ID="RadListView7" runat="server" 
        DataKeyNames="ProductID" 
        AllowPaging="True" 
        AllowCustomPaging="true"
        InsertItemPosition="LastItem" 
        Skin="WebBlue"
        OnNeedDataSource="RadListView7_NeedDataSource"
        OnPageIndexChanged="RadListView7_PageIndexChanged">
        <LayoutTemplate>
            <div class="RadListView RadListView_WebBlue">
                <table cellspacing="0" style="width:100%;">
                    <thead>
                        <tr class="rlvHeader">
                            <th>&nbsp;</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Supplier</th>
                            <th>Category</th>
                            <th>Quantity Per Unit</th>
                            <th>Discontinued</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td colspan="7">
                                <asp:Button ID="btnFirst" runat="server" Text="<< First" CommandName="Page" CommandArgument="First" />
                                <asp:Button ID="btnPrev" runat="server" Text="< Prev" CommandName="Page" CommandArgument="Prev" />
                                <asp:Button ID="btnNext" runat="server" Text="Next >" CommandName="Page" CommandArgument="Next" />
                                <asp:Button ID="btnLast" runat="server" Text="Last >>" CommandName="Page" CommandArgument="Last" />
                            </td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr ID="itemPlaceholder" runat="server">
                        </tr>
                    </tbody>
                </table>
            </div>
        </LayoutTemplate>
        <ItemTemplate>
            <tr class="rlvI">
                <td>
                    <asp:Button ID="SelectButton" runat="server" CommandName="Select" 
                        CssClass="rlvBSel" Text=" " />
                    <asp:Button ID="DeleteButton" runat="server" CommandName="Delete" 
                        CssClass="rlvBDel" Text=" " />
                    <asp:Button ID="EditButton" runat="server" CommandName="Edit" 
                        CssClass="rlvBEdit" Text=" " />
                </td>
                <td><%# Eval("ProductID")%></td>
                <td><%# Eval("ProductName") %></td>
                <td><%# Eval("SupplierID") %></td>
                <td><%# Eval("CategoryID") %></td>
                <td><%# Eval("QuantityPerUnit")%></td>
                <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="false" Checked='<%# Bind("Discontinued")%>' /></td>
            </tr>
        </ItemTemplate>
        <AlternatingItemTemplate>
            <tr class="rlvA">
                <td>
                    <asp:Button ID="SelectButton" runat="server" CommandName="Select" 
                        CssClass="rlvBSel" Text=" " />
                    <asp:Button ID="DeleteButton" runat="server" CommandName="Delete" 
                        CssClass="rlvBDel" Text=" " />
                    <asp:Button ID="EditButton" runat="server" CommandName="Edit" 
                        CssClass="rlvBEdit" Text=" " />
                </td>
                <td><%# Eval("ProductID")%></td>
                <td><%# Eval("ProductName") %></td>
                <td><%# Eval("SupplierID") %></td>
                <td><%# Eval("CategoryID") %></td>
                <td><%# Eval("QuantityPerUnit")%></td>
                <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="false" Checked='<%# Bind("Discontinued")%>' /></td>
            </tr>
        </AlternatingItemTemplate>
        <EditItemTemplate>
            <tr class="rlvIEdit">
                <td>
                    <table cellspacing="0" class="rlvEditTable">
                        <tr>
                            <td colspan="2">
                                <asp:Button ID="UpdateButton" runat="server" 
                                            CommandName="Update" 
                                            CssClass="rlvBUpdate" 
                                            Text=" " />
                                <asp:Button ID="CancelButton" runat="server" 
                                            CausesValidation="False" 
                                            CommandName="Cancel" 
                                            CssClass="rlvBCancel" 
                                            Text=" " />
                            </td>
                        </tr>
                    </table>
                </td>
                <td><asp:Label ID="lblID" runat="server" 
                            Text='<%# Eval("ProductID")%>'>
                     </asp:Label>
                 </td>
                <td><telerik:RadTextBox ID="txtName" runat="server" 
                            Text='<%# Bind("ProductName") %>'>
                     </telerik:RadTextBox> 
                </td>
                <td><telerik:RadComboBox ID="rcbCategory" runat="server" 
                        DataSourceID="CategoriesDataSource3" 
                        DataTextField="CategoryName" 
                        DataValueField="CategoryID" 
                        SelectedValue='<%# Bind("CategoryID") %>'>
                     </telerik:RadComboBox> 
                </td>
                <td><telerik:RadComboBox ID="rcbSupplier" runat="server" 
                        DataSourceID="SuppliersDataSource3" 
                        DataTextField="CompanyName" 
                        DataValueField="SupplierID" 
                        SelectedValue='<%# Bind("SupplierID") %>'>
                        </telerik:RadComboBox> 
                 </td>
                <td><telerik:RadTextBox ID="txtQuantity" runat="server" 
                            Text='<%# Bind("QuantityPerUnit")%>'>
                     </telerik:RadTextBox> 
                </td>
                <td><asp:CheckBox ID="chkDiscontinued" runat="server" 
                            Enabled="true" 
                            Checked='<%# Bind("Discontinued")%>' />
                </td>
            </tr>
        </EditItemTemplate>
        <InsertItemTemplate>
            <tr class="rlvIEdit">
                <td>
                    <table cellspacing="0" class="rlvEditTable">
                        <tr>
                            <td colspan="2">
                                <asp:Button ID="PerformInsertButton" runat="server" 
                                            CommandName="PerformInsert" 
                                            CssClass="rlvBAdd" 
                                            Text=" " />
                                <asp:Button ID="CancelButton" runat="server" 
                                            CausesValidation="False" 
                                            CommandName="Cancel" 
                                            CssClass="rlvBCancel" 
                                            Text=" " />
                            </td>
                        </tr>
                    </table>
                </td>
                <td><asp:Label ID="lblID" runat="server" 
                            Text='<%# Eval("ProductID")%>'>
                     </asp:Label>
                 </td>
                <td><telerik:RadTextBox ID="txtName" runat="server" 
                            Text='<%# Bind("ProductName") %>'>
                     </telerik:RadTextBox> 
                </td>
                <td><telerik:RadComboBox ID="rcbCategory" runat="server" 
                        DataSourceID="CategoriesDataSource3" 
                        DataTextField="CategoryName" 
                        DataValueField="CategoryID" 
                        SelectedValue='<%# Bind("CategoryID") %>'>
                     </telerik:RadComboBox> 
                </td>
                <td><telerik:RadComboBox ID="rcbSupplier" runat="server" 
                        DataSourceID="SuppliersDataSource3" 
                        DataTextField="CompanyName" 
                        DataValueField="SupplierID" 
                        SelectedValue='<%# Bind("SupplierID") %>'>
                        </telerik:RadComboBox> 
                 </td>
                <td><telerik:RadTextBox ID="txtQuantity" runat="server" 
                            Text='<%# Bind("QuantityPerUnit")%>'>
                     </telerik:RadTextBox> 
                </td>
                <td><asp:CheckBox ID="chkDiscontinued" runat="server" 
                            Enabled="true" 
                            Checked='<%# Bind("Discontinued")%>' />
                </td>
            </tr>
        </InsertItemTemplate>
        <EmptyDataTemplate>
            <div class="RadListView RadListView_WebBlue">
                <div class="rlvEmpty">
                    There are no items to be displayed.</div>
            </div>
        </EmptyDataTemplate>
        <SelectedItemTemplate>
            <tr class="rlvISel">
                <td>
                    <asp:Button ID="DeselectButton" runat="server" CommandName="Deselect" 
                        CssClass="rlvBSel" Text=" " />
                    <asp:Button ID="DeleteButton" runat="server" CommandName="Delete" 
                        CssClass="rlvBDel" Text=" " />
                    <asp:Button ID="EditButton" runat="server" CommandName="Edit" 
                        CssClass="rlvBEdit" Text=" " />
                </td>
                <td><%# Eval("ProductID")%></td>
                <td><%# Eval("ProductName") %></td>
                <td><%# Eval("SupplierID") %></td>
                <td><%# Eval("CategoryID") %></td>
                <td><%# Eval("QuantityPerUnit")%></td>
                <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="false" Checked='<%# Bind("Discontinued")%>' /></td>
            </tr>
        </SelectedItemTemplate>
        
    </telerik:RadListView>
    <asp:SqlDataSource ID="ProductsDataSource3" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT * FROM Products">
    </asp:SqlDataSource>
    <asp:SqlDataSource ID="SuppliersDataSource3" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT * FROM Suppliers">
    </asp:SqlDataSource>
    <asp:SqlDataSource ID="CategoriesDataSource3" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT * FROM Categories">
    </asp:SqlDataSource>
    </ContentTemplate>
    </asp:UpdatePanel>

    <br /><br />
    <h1>Grouping</h1>
    <telerik:RadListView ID="RadListView8" runat="server" 
        DataKeyNames="ProductID" 
        DataSourceID="ProductsDataSource1" 
        AllowMultiItemSelection="True"
        GroupPlaceholderID="GroupPlaceHolder"
        GroupItemCount="4"
        ItemPlaceholderID="ProductsPlaceholder"
        Skin="WebBlue">
        <GroupTemplate>
            <div class="RadListView RadListView_WebBlue">
                <div ID="ProductsPlaceholder" runat="server">
                </div>
            </div>
        </GroupTemplate>
        <GroupSeparatorTemplate>
            <div style="height:20px">&nbsp;</div>
        </GroupSeparatorTemplate>
        <LayoutTemplate>
            <asp:PlaceHolder ID="GroupPlaceHolder" runat="server" />
        </LayoutTemplate>
        <ItemTemplate>
            <div class="rlvI">
                <div><%# Eval("ProductName") %></div>
            </div>
        </ItemTemplate>
        <AlternatingItemTemplate>
            <div class="rlvA">
                <div><%# Eval("ProductName") %></div>
            </div>
        </AlternatingItemTemplate>
        <EmptyDataTemplate>
            <div class="RadListView RadListView_WebBlue">
                <div class="rlvEmpty">
                    There are no items to be displayed.</div>
            </div>
        </EmptyDataTemplate>
    </telerik:RadListView>
    <br /><br />
    <h1>Filtering & Sorting</h1>
    <asp:UpdatePanel ID="UpdatePanel7" runat="server">
    <ContentTemplate>
    <table>
        <tr>
            <td>Filter By</td>
            <td>
                <telerik:RadComboBox ID="rcbFilterBy" runat="server" 
                                OnClientSelectedIndexChanged="rcbFilterBy_ClientSelectedIndexChanged">
                    <Items>
                        <telerik:RadComboBoxItem Text="CategoryID" Value="CategoryID" />
                        <telerik:RadComboBoxItem Text="ProductName" Value="ProductName" />
                    </Items>
                </telerik:RadComboBox>
            </td>
            <td>&nbsp;</td>
            <td>
                <div id="numericFilter">
                <telerik:RadComboBox ID="rcbNumericFilter" runat="server">
                    <Items>
                        <telerik:RadComboBoxItem Text="EqualTo" Value="EqualTo"/>
                        <telerik:RadComboBoxItem Text="NotEqualTo" Value="NotEqualTo"/>
                        <telerik:RadComboBoxItem Text="GreaterThan" Value="GreaterThan"/>
                        <telerik:RadComboBoxItem Text="LessThan" Value="LessThan"/>
                        <telerik:RadComboBoxItem Text="GreaterThanOrEqualTo" Value="GreaterThanOrEqualTo"/>
                        <telerik:RadComboBoxItem Text="LessThanOrEqualTo" Value="LessThanOrEqualTo"/>
                    </Items>
                </telerik:RadComboBox>
                </div>
                <div id="stringFilter" style="display:none">
                    <telerik:RadComboBox ID="rcbStringFilter" runat="server">
                        <Items>
                            <telerik:RadComboBoxItem Text="EqualTo" Value="EqualTo"/>
                            <telerik:RadComboBoxItem Text="Contains" Value="Contains"/>
                        </Items>
                    </telerik:RadComboBox>
                </div>
            </td>
            <td>&nbsp;</td>
            <td>
                <telerik:RadTextBox ID="txtFilterValue" runat="server"></telerik:RadTextBox>
            </td>
            <td>
                <asp:Button ID="btnApplyFilter" runat="server" Text="Apply Filter" OnClick="btnApplyFilter_Click" />
            </td>
        </tr>
        <tr>
            <td>Sort By</td>
            <td>
                <telerik:RadComboBox ID="rcbSortBy" runat="server">
                    <Items>
                        <telerik:RadComboBoxItem Text="ProductID" Value="ProductID" />
                        <telerik:RadComboBoxItem Text="ProductName" Value="ProductName" />
                        <telerik:RadComboBoxItem Text="SupplierID" Value="SupplierID" />
                        <telerik:RadComboBoxItem Text="CategoryID" Value="CategoryID" />
                        <telerik:RadComboBoxItem Text="QuantityPerUnit" Value="QuantityPerUnit" />
                        <telerik:RadComboBoxItem Text="Discontinued" Value="Discontinued" />
                    </Items>
                </telerik:RadComboBox>
            </td>
            <td>&nbsp;</td>
            <td>
                <telerik:RadComboBox ID="rcbSortOrder" runat="server">
                    <Items>
                        <telerik:RadComboBoxItem Text="Ascending" Value="Asc"/>
                        <telerik:RadComboBoxItem Text="Descending" Value="Desc"/>
                        <telerik:RadComboBoxItem Text="None" Value="None" />
                    </Items>
                </telerik:RadComboBox>
            </td>
            <td colspan="3">
                <asp:Button ID="btnApplySort" runat="server" Text="Apply Sort" OnClick="btnApplySort_Click" />
            </td>
        </tr>
    </table>
    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function rcbFilterBy_ClientSelectedIndexChanged(sender, eventArgs) {
            var divStringFilter = $get("stringFilter");
            var divNumericFilter = $get("numericFilter");
            var item = eventArgs.get_item();
            var value = item.get_value();
            if (value == "CategoryID") {
                divStringFilter.style.display = "none";
                divNumericFilter.style.display = "block";
            }
            else {
                divStringFilter.style.display = "block";
                divNumericFilter.style.display = "none";
            }
        }
    </script>
    </telerik:RadCodeBlock>
    <telerik:RadListView ID="RadListView9" runat="server" 
                        DataKeyNames="ProductID" 
                        DataSourceID="ProductsDataSource1" 
                        AllowMultiItemSelection="true"
                        AllowPaging="True" 
                        Skin="WebBlue">
        <LayoutTemplate>
            <div class="RadListView RadListView_WebBlue">
                <table cellspacing="0" style="width:100%;">
                    <thead>
                        <tr class="rlvHeader">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Supplier</th>
                            <th>Category</th>
                            <th>Quantity Per Unit</th>
                            <th>Discontinued</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td colspan="6">
                                <telerik:RadDataPager ID="RadDataPager1" runat="server" Skin="WebBlue">
                                    <Fields>
                                        <telerik:RadDataPagerButtonField FieldType="FirstPrev" />
                                        <telerik:RadDataPagerButtonField FieldType="Numeric" />
                                        <telerik:RadDataPagerButtonField FieldType="NextLast" />
                                        <telerik:RadDataPagerGoToPageField />
                                        <telerik:RadDataPagerNumericPageSizeField />
                                    </Fields>
                                </telerik:RadDataPager>
                            </td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr ID="itemPlaceholder" runat="server">
                        </tr>
                    </tbody>
                </table>
            </div>
        </LayoutTemplate>
        <ItemTemplate>
            <tr class="rlvI">
                <td><%# Eval("ProductID")%></td>
                <td><%# Eval("ProductName") %></td>
                <td><%# Eval("SupplierID") %></td>
                <td><%# Eval("CategoryID") %></td>
                <td><%# Eval("QuantityPerUnit")%></td>
                <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="false" Checked='<%# Bind("Discontinued")%>' /></td>
            </tr>
        </ItemTemplate>
        <AlternatingItemTemplate>
            <tr class="rlvA">
                <td><%# Eval("ProductID")%></td>
                <td><%# Eval("ProductName") %></td>
                <td><%# Eval("SupplierID") %></td>
                <td><%# Eval("CategoryID") %></td>
                <td><%# Eval("QuantityPerUnit")%></td>
                <td><asp:CheckBox ID="chkDiscontinued" runat="server" Enabled="false" Checked='<%# Bind("Discontinued")%>' /></td>
            </tr>
        </AlternatingItemTemplate>
        <EmptyDataTemplate>
            <div class="RadListView RadListView_WebBlue">
                <div class="rlvEmpty">
                    There are no items to be displayed.</div>
            </div>
        </EmptyDataTemplate>
    </telerik:RadListView>
    </ContentTemplate>
    </asp:UpdatePanel>

</asp:Content>
