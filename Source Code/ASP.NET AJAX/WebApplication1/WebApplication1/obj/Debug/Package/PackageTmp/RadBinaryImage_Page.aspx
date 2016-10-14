<%@ Page Title="RadbinaryImage" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadBinaryImage_Page.aspx.cs" Inherits="WebApplication1.RadBinaryImage_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>RadBinaryImage in ASP.NET Repeater</h1>
    <asp:Repeater ID="Repeater1" runat="server" DataSourceID="SqlDataSource1">
    <HeaderTemplate>
        <table width="100%" border="1" cellpadding="3" cellspacing="3">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Photo</th>
            </tr>
    </HeaderTemplate>
    <ItemTemplate> 
            <tr>
                <td><asp:Label ID="lblID" runat="server" Text='<%# Eval("EmployeeID") %>'></asp:Label> </td>
                <td><asp:Label ID="lblName" runat="server" Text='<%# Eval("Name") %>'></asp:Label> </td>
                <td>
                    <telerik:RadBinaryImage ID="RadBinaryImage1" runat="server" DataValue='<%# Eval("Photo") %>' 
                                            ToolTip='<%# "Photo of " + Eval("Name") %>'
                                            AlternateText='<%# "Photo of " + Eval("Name") %>'
                                            SavedImageName='<%# "Employee_" + Eval("EmployeeID") %>' />
                </td>
            </tr>
    </ItemTemplate>
    <FooterTemplate>
        </table>
    </FooterTemplate>
    </asp:Repeater>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT [EmployeeID], [LastName] + ' ' + [FirstName] AS [Name], [Photo] FROM [Employees]">
    </asp:SqlDataSource>
    <br /><br />
    <h1>RadBinaryImage in RadGrid</h1>
    <telerik:RadGrid ID="RadGrid1" runat="server" AutoGenerateColumns="False" 
        DataSourceID="SqlDataSource2" GridLines="None">
        <ClientSettings>
            <Scrolling AllowScroll="True" UseStaticHeaders="True" />
        </ClientSettings>
        <MasterTableView DataKeyNames="EmployeeID" DataSourceID="SqlDataSource2" EditMode="PopUp">
        
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>

        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            <Columns>
                <telerik:GridEditCommandColumn ButtonType="ImageButton">
                    <HeaderStyle Width="10px" />
                    <ItemStyle Width="10px" />
                </telerik:GridEditCommandColumn>
                <telerik:GridButtonColumn Text="Delete" CommandName="Delete" ButtonType="ImageButton">
                    <HeaderStyle Width="10px" />
                    <ItemStyle Width="10px" />
                </telerik:GridButtonColumn>
                <telerik:GridBoundColumn DataField="EmployeeID" DataType="System.Int32" 
                    HeaderText="ID" ReadOnly="True" SortExpression="EmployeeID" 
                    UniqueName="EmployeeID">
                    <HeaderStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="30px" />
                    <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="30px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="LastName" HeaderText="Last Name" 
                    SortExpression="LastName" UniqueName="LastName">
                    <HeaderStyle HorizontalAlign="Left" VerticalAlign="Middle" Width="50px" />
                    <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" Width="50px" />
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="FirstName" HeaderText="First Name" 
                    SortExpression="FirstName" UniqueName="FirstName">
                    <HeaderStyle HorizontalAlign="Left" VerticalAlign="Middle" Width="50px" />
                    <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" Width="50px" />
                </telerik:GridBoundColumn>
                <telerik:GridBinaryImageColumn DataField="Photo" HeaderText="Photo" 
                    ImageHeight="" ImageWidth="" SortExpression="Photo" UniqueName="Photo">
                    <HeaderStyle Width="100px" />
                    <ItemStyle Width="100px" />
                </telerik:GridBinaryImageColumn>
            </Columns>
            <EditFormSettings>
                    <EditColumn ButtonType="ImageButton" />
            </EditFormSettings>
        </MasterTableView>
    </telerik:RadGrid>
    <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT [EmployeeID], [LastName], [FirstName], [Photo] FROM [Employees]">
    </asp:SqlDataSource>
</asp:Content>
