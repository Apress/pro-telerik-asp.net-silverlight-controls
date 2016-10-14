<%@ Page Title="RadListBox" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadListBox_Page.aspx.cs" Inherits="WebApplication1.RadListBox_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Declarative Databinding</h1>
    <telerik:RadListBox ID="RadListBox1" runat="server" 
        DataKeyField="ProductID" 
        DataSourceID="ProductsLinqDataSource" 
        DataTextField="ProductName" 
        DataValueField="ProductID" 
        Height="150px" Width="200px">
    </telerik:RadListBox>
    <asp:LinqDataSource ID="ProductsLinqDataSource" runat="server" 
        ContextTypeName="WebApplication1.NorthwindDataContext" EntityTypeName="" 
        OrderBy="ProductName" Select="new (ProductID, ProductName)" 
        TableName="Products">
    </asp:LinqDataSource>
    <br /><br />
    <h1>Reorder</h1>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>
        <telerik:RadListBox ID="RadListBox2" runat="server" 
            DataKeyField="CategoryID" 
            DataSourceID="CategoriesSqlDataSource" 
            DataTextField="CategoryName" 
            DataValueField="CategoryID" 
            AllowReorder="True"
            AllowAutomaticUpdates="True"
            AutoPostBackOnReorder="True"
            DataSortField="DisplayOrder"
            Height="150px" Width="200px" >
        </telerik:RadListBox>
        <asp:SqlDataSource ID="CategoriesSqlDataSource" runat="server" 
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
            DeleteCommand="DELETE FROM [Categories] WHERE [CategoryID] = @CategoryID" 
            InsertCommand="INSERT INTO [Categories] ([CategoryName], [DisplayOrder]) VALUES (@CategoryName, @DisplayOrder)" 
            SelectCommand="SELECT [CategoryID], [CategoryName], [DisplayOrder] FROM [Categories] ORDER BY [DisplayOrder]" 
            UpdateCommand="UPDATE [Categories] SET [CategoryName] = @CategoryName, [DisplayOrder] = @DisplayOrder WHERE [CategoryID] = @CategoryID">
            <DeleteParameters>
                <asp:Parameter Name="CategoryID" Type="Int32" />
            </DeleteParameters>
            <InsertParameters>
                <asp:Parameter Name="CategoryName" Type="String" />
                <asp:Parameter Name="DisplayOrder" Type="Int32" />
            </InsertParameters>
            <UpdateParameters>
                <asp:Parameter Name="CategoryName" Type="String" />
                <asp:Parameter Name="DisplayOrder" Type="Int32" />
                <asp:Parameter Name="CategoryID" Type="Int32" />
            </UpdateParameters>
        </asp:SqlDataSource>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Transfer</h1>
    <asp:UpdatePanel ID="UpdatePanel2" runat="server">
    <ContentTemplate>
        <telerik:RadListBox ID="RadListBox3" runat="server" 
            DataKeyField="CategoryID" 
            DataSourceID="CategoriesLinqDataSource" 
            DataTextField="CategoryName" 
            DataValueField="CategoryID" 
            AllowTransfer="true"
            AllowTransferOnDoubleClick="true"
            TransferToID="RadListBox4"
            Height="150px" Width="200px">
        </telerik:RadListBox>
        <telerik:RadListBox ID="RadListBox4" runat="server"
            Height="150px" Width="200px">
        </telerik:RadListBox>
        <asp:LinqDataSource ID="CategoriesLinqDataSource" runat="server" 
            ContextTypeName="WebApplication1.NorthwindDataContext" 
            EntityTypeName="" 
            OrderBy="CategoryName" 
            Select="new (CategoryID, CategoryName)" 
            TableName="Categories">
        </asp:LinqDataSource>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Images & Checkboxes</h1>
    <telerik:RadListBox ID="RadListBox5" runat="server" 
        CheckBoxes="True" 
        Height="150px" Width="200px">
        <Items>
            <telerik:RadListBoxItem runat="server" 
                        ImageUrl="~/Images/icons/action_add.png" 
                        ListBox="RadListBox5" 
                        Text="Add" />
            <telerik:RadListBoxItem runat="server" 
                        Checkable="False" 
                        ImageUrl="~/Images/icons/action_check.png" 
                        ListBox="RadListBox5" 
                        Text="Check" />
            <telerik:RadListBoxItem runat="server" 
                        ImageUrl="~/Images/icons/action_delete.png" 
                        ListBox="RadListBox5" 
                        Text="Delete" />
            <telerik:RadListBoxItem runat="server" 
                        ImageUrl="~/Images/icons/application.png" 
                        ListBox="RadListBox5" 
                        Text="Application" />
            <telerik:RadListBoxItem runat="server" 
                        ImageUrl="~/Images/icons/arrow_back.png" 
                        ListBox="RadListBox5" 
                        Text="Back" />
            <telerik:RadListBoxItem runat="server" 
                        ImageUrl="~/Images/icons/question.gif" 
                        ListBox="RadListBox5" 
                        Text="Question" />
        </Items>
    </telerik:RadListBox>
    <br /><br />
    <h1>Item Templates</h1>
    <telerik:RadListBox ID="RadListBox6" runat="server" 
        DataKeyField="EmployeeID" 
        DataSourceID="EmployeesDataSource" 
        DataTextField="EmployeeID" 
        DataValueField="EmployeeID"
        Width="600px" Height="400px">
        <ItemTemplate>
            <table>
                <tr>
                    <td>
                        <asp:Image ID="employeePic" runat="server" 
                                   ImageUrl='<%# "~/images/employees/" + Eval("EmployeeID") + ".jpg" %>' 
                                   width="100px">
                        </asp:Image>
                        <br />
                        Rate me
                        <telerik:RadRating ID="EmployeeRating" runat="server" Precision="Half">
                        </telerik:RadRating>
                    </td>
                    <td>
                        <asp:Label ID="lblEmployeeName" runat="server"
                                   Font-Bold="true" Font-Size="14px"
                                   Text='<%# Eval("FirstName") + " " + Eval("LastName") %>'>
                        </asp:Label>
                        <br />
                        <asp:Label ID="lblTitle" runat="server"
                                   Text='<%# Eval("Title") %>'>
                        </asp:Label>
                        <hr />
                        <asp:Label ID="lblNotes" runat="server"
                                   Text='<%# Eval("Notes") %>'>
                        </asp:Label>
                    </td>
                </tr>
            </table>
        </ItemTemplate>
    </telerik:RadListBox>
    <asp:LinqDataSource ID="EmployeesDataSource" runat="server" 
        ContextTypeName="WebApplication1.NorthwindDataContext" EntityTypeName="" 
        TableName="Employees">
    </asp:LinqDataSource>
</asp:Content>
