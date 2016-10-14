<%@ Page Title="RadAjaxManagerProxy" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadAjaxManagerProxy_Page.aspx.cs" Inherits="WebApplication1.RadAjaxManagerProxy_Page" %>

<%@ Register Src="~/AjaxWebUserControl.ascx" TagPrefix="uc1" TagName="AjaxUserControl" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>RadAjaxManagerProxy</h1>
    <uc1:AjaxUserControl ID="UC1" runat="server" />
    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
    </telerik:RadAjaxManager>
    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server">
    </telerik:RadAjaxLoadingPanel>
</asp:Content>
