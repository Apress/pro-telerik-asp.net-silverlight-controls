<%@ Page Title="RadFileExplorer" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadFileExplorer_Page.aspx.cs" Inherits="WebApplication1.RadFileExplorer_Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>RadFileExplorer</h1>
    <telerik:RadFileExplorer ID="RadFileExplorer1" runat="server" 
        InitialPath="~/Images">
        <Configuration SearchPatterns="*.*" 
                       DeletePaths="~/Images" 
                       UploadPaths="~/Images" 
                       ViewPaths="~/Images">
        </Configuration>
    </telerik:RadFileExplorer>
</asp:Content>
