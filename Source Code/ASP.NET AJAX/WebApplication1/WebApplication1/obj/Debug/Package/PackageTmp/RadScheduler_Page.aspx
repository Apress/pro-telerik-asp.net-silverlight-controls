<%@ Page Title="RadScheduler" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadScheduler_Page.aspx.cs" Inherits="WebApplication1.RadScheduler_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Declarative DataBinding to database</h1>
    <telerik:RadScheduler ID="RadScheduler1" runat="server" 
        DataDescriptionField="Description" DataEndField="End" DataKeyField="ID" 
        DataRecurrenceField="RecurrenceRule"
        DataRecurrenceParentKeyField="RecurrenceParentID" DataSourceID="SqlDataSource1" 
        DataStartField="Start" DataSubjectField="Subject">
    </telerik:RadScheduler>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
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
    <br /><br />
    <h1>Databinding to a WebService</h1>
    <telerik:RadScheduler ID="RadScheduler2" runat="server" 
        DataDescriptionField="Description" DataEndField="End" DataKeyField="ID" 
        DataRecurrenceField="RecurrenceRule"
        DataRecurrenceParentKeyField="RecurrenceParentID" 
        DataStartField="Start" DataSubjectField="Subject">
        <WebServiceSettings Path="SchedulerWebService.asmx" />
    </telerik:RadScheduler>
    <br /><br />
    <h1>Localization and Globalization using GlobalResources</h1>
    <telerik:RadScheduler ID="RadScheduler3" runat="server" 
        DataDescriptionField="Description" DataEndField="End" DataKeyField="ID" 
        DataRecurrenceField="RecurrenceRule" Culture="es-GT"
        DataRecurrenceParentKeyField="RecurrenceParentID" 
        DataStartField="Start" DataSubjectField="Subject">
        <WebServiceSettings Path="SchedulerWebService.asmx" />
    </telerik:RadScheduler>
    <br /><br />
    <h1>Default Context Menus</h1>
    <telerik:RadScheduler ID="RadScheduler4" runat="server" 
        DataDescriptionField="Description" DataEndField="End" DataKeyField="ID" 
        DataRecurrenceField="RecurrenceRule"
        DataRecurrenceParentKeyField="RecurrenceParentID"
        DataStartField="Start" DataSubjectField="Subject">
        <WebServiceSettings Path="SchedulerWebService.asmx" />
        <AppointmentContextMenuSettings EnableDefault="true" />
        <TimeSlotContextMenuSettings EnableDefault="true" />
    </telerik:RadScheduler>
    <br /><br />
    <h1>Custom Context Menus</h1>
    <telerik:RadScheduler ID="RadScheduler5" runat="server" 
        DataDescriptionField="Description" DataEndField="End" DataKeyField="ID" 
        DataRecurrenceField="RecurrenceRule"
        DataRecurrenceParentKeyField="RecurrenceParentID" 
        DataStartField="Start" DataSubjectField="Subject"
        OnClientAppointmentContextMenuItemClicked="RadScheduler5_ClientContextMenuItemClicked">
        <WebServiceSettings Path="SchedulerWebService.asmx" />
       <AppointmentContextMenus>
           <telerik:RadSchedulerContextMenu runat="server" ID="ContextMenu1">
               <Items>
                   <telerik:RadMenuItem Text="Edit" Value="CommandEdit" />
                   <telerik:RadMenuItem Text="Move 1 hour ahead" Value="MoveAhead" />
                   <telerik:RadMenuItem Text="Move 1 hour behind" Value="MoveBehind" />
                   <telerik:RadMenuItem IsSeparator="True" />
                   <telerik:RadMenuItem Text="Delete" Value="CommandDelete" />
               </Items>
           </telerik:RadSchedulerContextMenu>
       </AppointmentContextMenus>
    </telerik:RadScheduler>
    <script language="javascript" type="text/javascript">
        function RadScheduler5_ClientContextMenuItemClicked(sender, eventArgs) {
            // get the objects (appointment, menu item clicked and scheduler)
            var ap = eventArgs.get_appointment();
            var item = eventArgs.get_item();
            var scheduler = $find("<%= RadScheduler5.ClientID %>");
            
            // if the item is the one to move the appointment 1 hour ahead then do it
            if (item.get_value() == "MoveAhead") {
                // get the current start and end dates
                var st = ap.get_start();
                var en = ap.get_end();
                // move the start and end 1 hour ahead
                st.setHours(st.getHours() + 1);
                en.setHours(en.getHours() + 1);
                // update the appointment
                ap.set_start(st);
                ap.set_end(en);
                // update the scheduler
                scheduler.updateAppointment(ap, false);
            }

            // if the item is the one to move the appointment 1 hour behind then do it
            if (item.get_value() == "MoveBehind") {
                // get the current start and end dates
                var st = ap.get_start();
                var en = ap.get_end();
                // move the start and end 1 hour ahead
                st.setHours(st.getHours() - 1);
                en.setHours(en.getHours() - 1);
                // update the appointment
                ap.set_start(st);
                ap.set_end(en);
                // update the scheduler
                scheduler.updateAppointment(ap, false);
            }
        }
    </script>
    <br /><br />
    <h1>Templates</h1>
    <telerik:RadScheduler ID="RadScheduler6" runat="server" 
        DataDescriptionField="Description" DataEndField="End" DataKeyField="ID" 
        DataRecurrenceField="RecurrenceRule" EnableDescriptionField="true"
        DataRecurrenceParentKeyField="RecurrenceParentID" DataSourceID="SqlDataSource1"
        DataStartField="Start" DataSubjectField="Subject">
        <AppointmentTemplate>
            <div class="rsAptSubject">
                <%# Eval("Subject") %>
            </div>
            <hr />
            <div style="font-style:italic; background-color:Lime"><%# Eval("Description") %></div>
         </AppointmentTemplate>
    </telerik:RadScheduler>
    <br /><br />
    <h1>Export to iCal</h1>
    <asp:Button ID="btnExportCalendar" runat="server" Text="Export All Calendar to iCal" OnClick="btnExportCalendar_Click" />
    <telerik:RadScheduler ID="RadScheduler7" runat="server" 
        DataDescriptionField="Description" DataEndField="End" DataKeyField="ID" 
        DataRecurrenceField="RecurrenceRule" EnableDescriptionField="true"
        DataRecurrenceParentKeyField="RecurrenceParentID" DataSourceID="SqlDataSource1"
        DataStartField="Start" DataSubjectField="Subject"
        OnAppointmentCommand="RadScheduler7_AppointmentCommand">
        <AppointmentTemplate>
            <div class="rsAptSubject">
                <%# Eval("Subject") %>
            </div>
            <hr />
            <asp:Button ID="btnExport" runat="server" Text="Export to iCal" CommandName="Export" OnClientClick="Export(this, event); return false;" />
         </AppointmentTemplate>
    </telerik:RadScheduler>
    <br /><br />
    <h1>Resources</h1>
    <telerik:RadScheduler ID="RadScheduler8" runat="server" GroupBy="User" 
        DataDescriptionField="Description" DataEndField="End" DataKeyField="ID" 
        DataRecurrenceField="RecurrenceRule" EnableDescriptionField="true"
        DataRecurrenceParentKeyField="RecurrenceParentID" DataSourceID="SqlDataSource1"
        DataStartField="Start" DataSubjectField="Subject" SelectedView="WeekView">
        <ResourceTypes>
            <telerik:ResourceType KeyField="ID" Name="User" TextField="UserName" ForeignKeyField="UserID"
                DataSourceID="UsersDataSource" />
        </ResourceTypes>
    </telerik:RadScheduler>
    <asp:SqlDataSource ID="UsersDataSource" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
        SelectCommand="SELECT * FROM [Users]" >
    </asp:SqlDataSource>
</asp:Content>
