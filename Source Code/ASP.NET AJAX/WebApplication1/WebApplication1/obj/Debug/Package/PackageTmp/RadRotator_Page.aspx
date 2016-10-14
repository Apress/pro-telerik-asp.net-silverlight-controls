<%@ Page Title="RadRotator" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadRotator_Page.aspx.cs" Inherits="WebApplication1.RadRotator_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
<style type="text/css">
    .idcard
    {
    	width:200px;
    	height:400px;
    	border:1px solid #000000;
    	text-align:center;
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
    <h1>Data Binding, Templates and Rotation Type</h1>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>
        <h3>Rotation Type</h3>
        <asp:RadioButtonList ID="rblRotationType" runat="server" AutoPostBack="true" 
                             RepeatDirection="Horizontal" RepeatColumns="3"
                             OnSelectedIndexChanged="rblRotationType_SelectedIndexChanged">
        </asp:RadioButtonList>
        <br />
        <telerik:RadRotator ID="RadRotator1" runat="server" DataSourceID="SqlDataSource1" Width="202px" Height="404px">
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
        </telerik:RadRotator>
    </ContentTemplate>
    </asp:UpdatePanel>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT [EmployeeID], [LastName], [FirstName], [Title], [HireDate], [ReportsTo], [City], [Country], [Extension] FROM [Employees]">
    </asp:SqlDataSource>
    <br /><br />
    <h1>Working with RadTicker</h1>
    <telerik:RadTicker ID="RadTicker1" runat="server" AutoStart="true" Loop="true" 
                       Width="450px" Height="50px" CssClass="TickerClass"
                       DataSourceID="SqlDataSource2" DataTextField="Name" AppendDataBoundItems="true">
    <Items>
        <telerik:RadTickerItem Text="Do you like our company?"></telerik:RadTickerItem>
        <telerik:RadTickerItem Text="Meet our team!"></telerik:RadTickerItem>
    </Items>
    </telerik:RadTicker>
    <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT [LastName] + ', ' + [FirstName] as [Name] FROM [Employees]">
    </asp:SqlDataSource>
    <br /><br />
    <h1>RadRotator with RadTicker</h1>
    <telerik:RadRotator ID="RadRotator2" runat="server" DataSourceID="SqlDataSource1" Width="202px" Height="404px">
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
                    <telerik:RadTicker ID="employeeNameTicker" runat="server">
                        <Items>
                            <telerik:RadTickerItem Text='<%# Eval("LastName") + ", " + Eval("FirstName") %>'></telerik:RadTickerItem>
                        </Items>
                    </telerik:RadTicker>
                </div>
                <div class="employeeTitle">
                    <telerik:RadTicker ID="employeeTitleTicker" runat="server">
                        <Items>
                            <telerik:RadTickerItem Text='<%# Eval("Title") %>'></telerik:RadTickerItem>
                        </Items>
                    </telerik:RadTicker>
                </div>
                <div class="employeeOffice">
                    <telerik:RadTicker ID="employeeOfficeTicker" runat="server">
                        <Items>
                            <telerik:RadTickerItem Text='<%# "Works in our office located on: " + Eval("City") + ", " + Eval("Country") %>'></telerik:RadTickerItem>
                        </Items>
                    </telerik:RadTicker>
                </div>
            </div>
        </div>
    </ItemTemplate>
    </telerik:RadRotator>
        
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</asp:Content>
