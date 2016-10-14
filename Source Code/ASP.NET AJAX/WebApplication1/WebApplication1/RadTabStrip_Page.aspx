<%@ Page Title="RadTabStrip" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadTabStrip_Page.aspx.cs" Inherits="WebApplication1.RadTabStrip_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Navigation with TabStrip</h1>
        <telerik:RadTabStrip ID="RadTabStrip1" runat="server" OnClientTabSelected="RadTabStrip1_ClientTabSelected">
            <Tabs>
                <telerik:RadTab Text="Telerik" Value="http://www.telerik.com"></telerik:RadTab>
                <telerik:RadTab Text="Google" Value="http://www.google.com"></telerik:RadTab>
                <telerik:RadTab Text="CSW Solutions" Value="http://www.cswsolutions.com"></telerik:RadTab>
            </Tabs>
        </telerik:RadTabStrip>
        <iframe id="tabFrame" width="800px" height="300px">
        </iframe>
        <script type="text/javascript" language="javascript">
            function RadTabStrip1_ClientTabSelected(sender, eventArgs) {
                var tab = eventArgs.get_tab();
                var frame = $get("tabFrame");
                frame.src = tab.get_value();
            }
        </script>
    <br /><br />
    <h1>Hierarchical TabStrip</h1>
    <telerik:RadTabStrip ID="RadTabStrip2" runat="server" 
        OnClientTabSelected="RadTabStrip2_ClientTabSelected" 
        DataSourceID="RadSiteMapDataSource1">
    </telerik:RadTabStrip>
    <telerik:RadSiteMapDataSource ID="RadSiteMapDataSource1" runat="server" ShowStartingNode="false" SiteMapFile="Web.sitemap" />
    <asp:Label ID="lblSelectedTab" runat="server"></asp:Label>
    <script type="text/javascript" language="javascript">
        function RadTabStrip2_ClientTabSelected(sender, eventArgs) {
            var tab = eventArgs.get_tab();
            var label = $get("<%=lblSelectedTab.ClientID %>");
            label.innerHTML = "You selected the tab: " + tab.get_text() + " on level " + tab.get_level();
        }
    </script>
    <br /><br />
    <h1>Binding TabStrip to a Database</h1>
    <telerik:RadTabStrip ID="RadTabStrip3" runat="server" DataFieldID="EmployeeID" 
        DataSourceID="SqlDataSource1" DataTextField="Name" DataValueField="EmployeeID"
        OnClientTabSelected="RadTabStrip3_ClientTabSelected" Orientation="VerticalLeft">
    </telerik:RadTabStrip>
    <img id="employeePic" runat="server" alt="" src="" />
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" SelectCommand="SELECT [EmployeeID], [LastName] + ',' + [FirstName] AS [Name] FROM [Employees]
    ORDER BY [LastName], [FirstName]"></asp:SqlDataSource>
    <script type="text/javascript" language="javascript">
        function RadTabStrip3_ClientTabSelected(sender, eventArgs) {
            var tab = eventArgs.get_tab();
            var img = $get("<%=employeePic.ClientID %>");
            img.src = "images/employees/" + tab.get_value() + ".jpg";
        }
    </script>
    <br /><br />
    <h1>TabStrip Templates And Scrolling</h1>
    <telerik:RadTabStrip ID="RadTabStrip4" runat="server" DataFieldID="CategoryID" 
        DataSourceID="SqlDataSource2" DataTextField="CategoryName" DataValueField="CategoryID"
        ScrollButtonsPosition="Right" ScrollChildren="true" PerTabScrolling="true"
        OnTabClick="RadTabStrip4_TabClick" OnTabDataBound="RadTabStrip4_ItemDataBound">
        <TabTemplate>
            <%# Eval("CategoryName") %>
            <telerik:RadComboBox ID="comboProducts" runat="server" DropDownWidth="250px"
                                 DataTextField="ProductName" DataValueField="ProductID" AutoPostBack="true"
                                 OnSelectedIndexChanged="comboProducts_SelectedIndexChanged">
            </telerik:RadComboBox>
            <asp:SqlDataSource ID="SqlDataSource3" runat="server" 
                ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
                SelectCommand="SELECT [ProductID], [ProductName] FROM [Products] WHERE ([CategoryID] = @CategoryID)">
                <SelectParameters>
                    <asp:Parameter Name="CategoryID" Type="Int32" />
                </SelectParameters>
            </asp:SqlDataSource>
        </TabTemplate>
    </telerik:RadTabStrip>
    <asp:Label ID="lblCatProd" runat="server"></asp:Label>
    <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT [CategoryID], [CategoryName] FROM [Categories]">
    </asp:SqlDataSource>
    <br /><br />
    <h1>TabStrip And MultiPage</h1>
    <telerik:RadTabStrip ID="RadTabStrip5" runat="server" 
        MultiPageID="RadMultiPage1" SelectedIndex="0">
        <Tabs>
            <telerik:RadTab runat="server" Text="RadEditor" PageViewID="RadPageView1" 
                Selected="True">
            </telerik:RadTab>
            <telerik:RadTab runat="server" Text="RadTreeView" PageViewID="RadPageView2">
            </telerik:RadTab>
            <telerik:RadTab runat="server" Text="RadScheduler" PageViewID="RadPageView3">
            </telerik:RadTab>
        </Tabs>
    </telerik:RadTabStrip>
    <telerik:RadMultiPage ID="RadMultiPage1" runat="server" SelectedIndex="0">
        <telerik:RadPageView ID="RadPageView1" runat="server">
            <telerik:RadEditor ID="RadEditor1" runat="server">
            </telerik:RadEditor>
            <asp:SqlDataSource ID="SqlDataSource3" runat="server" 
                ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
                SelectCommand="SELECT [EmployeeID], [LastName], [FirstName], [Photo] FROM [Employees]">
            </asp:SqlDataSource>
        </telerik:RadPageView>
        <telerik:RadPageView ID="RadPageView2" runat="server">
            <telerik:RadTreeView ID="RadTreeView1" runat="server" DataSourceID="SqlDataSource4" 
                DataFieldID="ID" DataFieldParentID="parentID" DataTextField="Name" DataValueField="ID">
            </telerik:RadTreeView>
            <asp:SqlDataSource ID="SqlDataSource4" runat="server" 
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
            SelectCommand="select ProductID as ID, ProductName as Name, UnitPrice, CategoryID+1000 as parentID
                            from Products p
                            union all
                            select CategoryID+1000 as ID, CategoryName as Name, 0 as UnitPrice, null as parentID
                            from Categories">
            </asp:SqlDataSource>
        </telerik:RadPageView>
        <telerik:RadPageView ID="RadPageView3" runat="server">
            <telerik:RadScheduler ID="RadScheduler1" runat="server" 
                DataDescriptionField="Description" DataEndField="End" DataKeyField="ID" 
                DataRecurrenceField="RecurrenceRule"
                DataRecurrenceParentKeyField="RecurrenceParentID" DataSourceID="SqlDataSource5" 
                DataStartField="Start" DataSubjectField="Subject">
            </telerik:RadScheduler>
            <asp:SqlDataSource ID="SqlDataSource5" runat="server" 
                ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
                DeleteCommand="DELETE FROM [Appointments] WHERE [ID] = @original_ID" 
                InsertCommand="INSERT INTO [Appointments] ([Subject], [Description], [Start], [End], [RoomID], [UserID], [RecurrenceRule], [RecurrenceParentID], [Annotations]) VALUES (@Subject, @Description, @Start, @End, @RoomID, @UserID, @RecurrenceRule, @RecurrenceParentID, @Annotations)" 
                OldValuesParameterFormatString="original_{0}" 
                SelectCommand="SELECT * FROM [Appointments]" 
                UpdateCommand="UPDATE [Appointments] SET [Subject] = @Subject, [Description] = @Description, [Start] = @Start, [End] = @End, [RoomID] = @RoomID, [UserID] = @UserID, [RecurrenceRule] = @RecurrenceRule, [RecurrenceParentID] = @RecurrenceParentID, [Annotations] = @Annotations WHERE [ID] = @original_ID">
                <DeleteParameters>
                    <asp:Parameter Name="original_ID" Type="Int32" />
                </DeleteParameters>
                <InsertParameters>
                    <asp:Parameter Name="Subject" Type="String" />
                    <asp:Parameter Name="Description" Type="String" />
                    <asp:Parameter Name="Start" Type="DateTime" />
                    <asp:Parameter Name="End" Type="DateTime" />
                    <asp:Parameter Name="RoomID" Type="Int32" />
                    <asp:Parameter Name="UserID" Type="Int32" />
                    <asp:Parameter Name="RecurrenceRule" Type="String" />
                    <asp:Parameter Name="RecurrenceParentID" Type="Int32" />
                    <asp:Parameter Name="Annotations" Type="String" />
                </InsertParameters>
                <UpdateParameters>
                    <asp:Parameter Name="Subject" Type="String" />
                    <asp:Parameter Name="Description" Type="String" />
                    <asp:Parameter Name="Start" Type="DateTime" />
                    <asp:Parameter Name="End" Type="DateTime" />
                    <asp:Parameter Name="RoomID" Type="Int32" />
                    <asp:Parameter Name="UserID" Type="Int32" />
                    <asp:Parameter Name="RecurrenceRule" Type="String" />
                    <asp:Parameter Name="RecurrenceParentID" Type="Int32" />
                    <asp:Parameter Name="Annotations" Type="String" />
                    <asp:Parameter Name="original_ID" Type="Int32" />
                </UpdateParameters>
            </asp:SqlDataSource>
        </telerik:RadPageView>
    </telerik:RadMultiPage>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />    
</asp:Content>
