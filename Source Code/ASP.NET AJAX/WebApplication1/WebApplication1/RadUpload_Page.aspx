<%@ Page Title="RadUpload" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadUpload_Page.aspx.cs" Inherits="WebApplication1.RadUpload_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" DecoratedControls="Buttons" />
    <telerik:RadProgressManager ID="RadProgressManager1" runat="server" />

    <h1>RadUpload Features</h1>
<telerik:RadUpload ID="RadUpload1" runat="server" 
    TargetFolder="~/UploadedFiles" 
    AllowedFileExtensions=".pdf,.docx,.xlsx" 
    InitialFileInputsCount="3" 
    InputSize="40" 
    MaxFileInputsCount="5" 
    OverwriteExistingFiles="True" 
    ControlObjectsVisibility="All" 
    FocusOnLoad="True"
    Width="500px">
</telerik:RadUpload>
    <asp:Button ID="btnUpload" runat="server" Text="Upload" OnClick="btnUpload_Click" />
    <br />
    <asp:Repeater ID="uploadResults" runat="server">
        <HeaderTemplate>
            <table>
            <tr>
                <th colspan="2">Uploaded Files</th>
            </tr>
        </HeaderTemplate>
        <ItemTemplate>
            <tr>
                <td><%#DataBinder.Eval(Container.DataItem, "FileName")%></td>
                <td><%#DataBinder.Eval(Container.DataItem, "ContentLength") + " bytes"%></td>
            </tr>
        </ItemTemplate>
        <FooterTemplate>
            </table>
        </FooterTemplate>
    </asp:Repeater>
    <br /><br />
    <h1>Asynchronous Upload</h1>
    <telerik:RadAsyncUpload ID="RadAsyncUpload1" runat="server"
        TargetFolder="~/UploadedFiles" 
        AllowedFileExtensions=".pdf,.docx,.xlsx" 
        InputSize="40" 
        OverwriteExistingFiles="True" 
        ControlObjectsVisibility="Default" 
        FocusOnLoad="True"
        Width="500px">
    </telerik:RadAsyncUpload>
    <asp:Button ID="btnUpload2" runat="server" Text="Upload" />
    <br /><br />
    <h1>Monitoring Uploads</h1>
    <telerik:RadUpload ID="RadUpload2" runat="server" 
        TargetFolder="~/UploadedFiles" 
        InputSize="40" 
        OverwriteExistingFiles="True" 
        Width="500px">
    </telerik:RadUpload>
    <asp:Button ID="btnUpload3" runat="server" Text="Upload" />
    <telerik:RadProgressArea ID="RadProgressArea1" runat="server"
        DisplayCancelButton="True">
    </telerik:RadProgressArea>
    <br /><br />

    <h1>Monitoring Other processes with RadProgressArea</h1>
    <asp:Button ID="btnCustomProcess" runat="server" Text="Run Custom Process" OnClick="btnCustomProcess_Click" />
    <telerik:RadProgressArea ID="RadProgressArea2" runat="server"
            ProgressIndicators="FilesCountBar,
                                FilesCountPercent,
                                CurrentFileName,
                                TimeElapsed">
        <Localization UploadedFiles="Completed: " CurrentFileName="" TotalFiles="">
        </Localization>
    </telerik:RadProgressArea>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</asp:Content>
