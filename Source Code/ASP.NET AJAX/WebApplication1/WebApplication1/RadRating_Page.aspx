<%@ Page Title="RadRating" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadRating_Page.aspx.cs" Inherits="WebApplication1.RadRating_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Using RadRating to provide feedback</h1>
    <asp:Repeater ID="Repeater1" runat="server" DataSourceID="SqlDataSource1">
    <HeaderTemplate>
        <table width="100%" border="1" cellpadding="3" cellspacing="3">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Rate Our Service</th>
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
                <td>
                    <telerik:RadRating ID="RadRating1" runat="server" ItemCount="5"
                                       Precision="Half" OnClientRated="EmployeeRated" />
                    <br /><br />
                    <div id="feedback" runat="server"></div>
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
    <telerik:RadWindow ID="FeedbackRadWindow" runat="server" Width="400px" Height="400px" Title="Feedback"
                       OnClientClose="GetFeedback" Modal="true" style="z-index:20000">
    </telerik:RadWindow>
    <script type="text/javascript" language="javascript">
        function EmployeeRated(sender, eventArgs) {
            var empId = $get(sender.get_id().replace("RadRating1", "lblID"));
            var empName = $get(sender.get_id().replace("RadRating1", "lblName"));
            var fb = sender.get_id().replace("RadRating1", "feedback");
            var rating = sender.get_value();

            var wnd = $find("<%=FeedbackRadWindow.ClientID %>");
            wnd.setUrl("radrating_feedback.aspx?Id=" + empId.innerHTML + "&Name=" + empName.innerHTML + "&Rating=" + rating + "&fb=" + fb);
            wnd.show();
        }

        function GetFeedback(sender, eventArgs) {
            var arg = eventArgs.get_argument();

            if (arg) {
                var fbField = arg.fb;
                $get(fbField).innerHTML = "Rating: " + arg.rating + "<br /><br />Your feedback:<br /><br /><strong>" + arg.comments + "</strong><br /><br />Thank you!!";
                var rt = $find(fbField.replace("feedback", "RadRating1"));
                rt.set_readOnly(true);
            }

        }
    </script>
    <br /><br />
    <h1>RadRating in RadGrid</h1>
    <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" 
        AutoGenerateColumns="False" DataSourceID="SqlDataSource2" GridLines="None" 
        ShowGroupPanel="True">
        <ClientSettings AllowDragToGroup="True">
            <Scrolling AllowScroll="True" UseStaticHeaders="True" />
        </ClientSettings>
        <MasterTableView DataKeyNames="ProductID" DataSourceID="SqlDataSource2">
          <GroupByExpressions>
             <telerik:GridGroupByExpression>
               <SelectFields>
                  <telerik:GridGroupByField
                    FieldName="CategoryName"
                    HeaderText="Category"/>
               </SelectFields>
               <GroupByFields>
                  <telerik:GridGroupByField
                     FieldName="CategoryName"
                     SortOrder="Ascending" />
               </GroupByFields>
             </telerik:GridGroupByExpression>
           </GroupByExpressions>
        <RowIndicatorColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </RowIndicatorColumn>

        <ExpandCollapseColumn>
        <HeaderStyle Width="20px"></HeaderStyle>
        </ExpandCollapseColumn>
            <Columns>
                <telerik:GridBoundColumn DataField="ProductID" DataType="System.Int32" 
                    HeaderText="ProductID" ReadOnly="True" SortExpression="Product" 
                    UniqueName="ProductID">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="ProductName" HeaderText="Name" 
                    SortExpression="ProductName" UniqueName="ProductName">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="CategoryName" HeaderText="Category" 
                    SortExpression="CategoryName" UniqueName="CategoryName">
                </telerik:GridBoundColumn>
                <telerik:GridRatingColumn HeaderText="Rating" UniqueName="ratingColumn"
                                         Precision="Exact" AllowRatingInViewMode="true">
                </telerik:GridRatingColumn>
            </Columns>
        </MasterTableView>
    </telerik:RadGrid>
    <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT [ProductID], [ProductName], [CategoryName], 0.0 as [AverageRating] FROM [Alphabetical list of products]">
    </asp:SqlDataSource>
</asp:Content>
