<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadFilter_Page.aspx.cs" Inherits="WebApplication1.RadFilter_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
<style type="text/css">
    .idcard
    {
    	width:220px;
    	height:400px;
    	border:1px solid #000000;
    	text-align:center;
    	float:left;
    }
    
    .companyName
    {
    	font-family:Verdana;
    	font-size:20px;
    	text-align:center;
    	height:35px;
    }
    
    .picture
    {
    	width:150px;
    	height:220px;
    	text-align:center;
    	margin-left:auto;
    	margin-right:auto;
    }
    
    .employeeInfo
    {
    	border:1px solid #000000;
    	text-align:center;
    	height:130px;
    	width:150px;
    	margin-left:auto;
    	margin-right:auto;
    }
    
    .employeeName
    {
    	font-family:Verdana;
    	font-weight:bold;
    	font-size:12px;
    	height:30px;
    }
    
    .employeeTitle
    {
    	font-family:Verdana;
    	font-size:10px;
    	height:30px;
    }
    
    .employeeOffice
    {
    	font-family:Verdana;
    	font-size:10px;
    	height:30px;
    	vertical-align:middle;
    }
    
    .TickerClass
    {
    	width:450px;
    	height:50px;
    	background-color:Yellow;
    	font-family:Comic Sans MS;
    	font-size:20px;
    	color:Purple;
    	text-align:center;
    	vertical-align:middle;
    }
</style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Declarative Field Editors</h1>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>
    <telerik:RadFilter ID="RadFilter1" runat="server" OnApplyExpressions="RadFilter1_ApplyExpressions">
        <FieldEditors>
            <telerik:RadFilterTextFieldEditor FieldName="City" />
            <telerik:RadFilterTextFieldEditor FieldName="State" />
            <telerik:RadFilterNumericFieldEditor FieldName="Price" />
            <telerik:RadFilterBooleanFieldEditor DataType="System.Boolean" 
                FieldName="IsActive" />
            <telerik:RadFilterDateFieldEditor DataType="System.DateTime" 
                FieldName="ActivationDate" />
        </FieldEditors>
    </telerik:RadFilter>
    <br /><br />
    <asp:Label ID="lblExpression" runat="server"></asp:Label>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Add Filter Expressions Programmatically</h1>
    <asp:UpdatePanel ID="UpdatePanel2" runat="server">
    <ContentTemplate>
    <telerik:RadFilter ID="RadFilter2" runat="server">
        <FieldEditors>
            <telerik:RadFilterTextFieldEditor FieldName="City" />
            <telerik:RadFilterTextFieldEditor FieldName="State" />
            <telerik:RadFilterNumericFieldEditor FieldName="Price" />
            <telerik:RadFilterBooleanFieldEditor DataType="System.Boolean" 
                FieldName="IsActive" />
            <telerik:RadFilterDateFieldEditor DataType="System.DateTime" 
                FieldName="ActivationDate" />
        </FieldEditors>
    </telerik:RadFilter>
    <br /><br />
    <asp:Label ID="lblExpression1" runat="server"></asp:Label>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Integration with RadListView</h1>
    <asp:UpdatePanel ID="UpdatePanel3" runat="server">
    <ContentTemplate>
    <telerik:RadFilter ID="RadFilter3" runat="server" FilterContainerID="RadListView1">
    </telerik:RadFilter>
    <br /><br />
    <telerik:RadListView ID="RadListView1" runat="server" 
                         AllowPaging="True" 
                         DataKeyNames="EmployeeID" 
                         DataSourceID="SqlDataSource1"
                        
                         Skin="WebBlue">
        <LayoutTemplate>
             <div class="RadListView RadListViewFloated RadListView_Default">
                <div class="rlvFloated">
                    <div ID="itemPlaceholder" runat="server">
                    </div>
                </div>
            </div>
        </LayoutTemplate>
        <ItemTemplate>
            <div class="idcard">
                <div class="companyName">
                    My Company
                </div>
                <div class="picture">
                    <asp:Image ID="employeePhoto" Width="150" Height="200" ImageAlign="Middle" runat="server" ImageUrl='<%# "Images/employees/" + Eval("EmployeeID") + ".jpg" %>' />
                </div>
                <div class="employeeInfo">
                    <div class="employeeName">
                    <asp:Label ID="lblName" runat="server" Text='<%# Eval("LastName") + ", " + Eval("FirstName") %>'></asp:Label>
                    </div>
                    <div class="employeeTitle">
                    <asp:Label ID="lblTitle" runat="server" Text='<%# Eval("Title") %>'></asp:Label>
                    </div>
                    <div class="employeeOffice">
                    Works in our office located on: 
                    <asp:Label ID="lblOffice" runat="server" Text='<%# Eval("City") + ", " + Eval("Country") %>'></asp:Label>
                    </div>
                </div>
            </div>
        </ItemTemplate>
        <AlternatingItemTemplate>
            <div class="idcard">
                <div class="companyName">
                    My Company
                </div>
                <div class="picture">
                    <asp:Image ID="employeePhoto" Width="150" Height="200" ImageAlign="Middle" runat="server" ImageUrl='<%# "Images/employees/" + Eval("EmployeeID") + ".jpg" %>' />
                </div>
                <div class="employeeInfo">
                    <div class="employeeName">
                    <asp:Label ID="lblName" runat="server" Text='<%# Eval("LastName") + ", " + Eval("FirstName") %>'></asp:Label>
                    </div>
                    <div class="employeeTitle">
                    <asp:Label ID="lblTitle" runat="server" Text='<%# Eval("Title") %>'></asp:Label>
                    </div>
                    <div class="employeeOffice">
                    Works in our office located on: 
                    <asp:Label ID="lblOffice" runat="server" Text='<%# Eval("City") + ", " + Eval("Country") %>'></asp:Label>
                    </div>
                </div>
            </div>
        </AlternatingItemTemplate>
    </telerik:RadListView>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT [EmployeeID], [LastName], [FirstName], [Title], [HireDate], [ReportsTo], [City], [Country], [Extension] FROM [Employees]">
    </asp:SqlDataSource>
    </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
