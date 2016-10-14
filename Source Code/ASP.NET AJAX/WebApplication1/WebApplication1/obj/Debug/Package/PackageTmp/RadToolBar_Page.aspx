<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Site.Master" CodeBehind="RadToolBar_Page.aspx.cs" Inherits="WebApplication1.RadToolBar_Page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div>
    
        <telerik:RadToolBar ID="RadToolBar1" Runat="server" Skin="Windows7">
            <Items>
                <telerik:RadToolBarButton runat="server" ImageUrl="~/Images/icons/file.png" 
                    Text="New File">
                </telerik:RadToolBarButton>
                <telerik:RadToolBarDropDown runat="server" Text="Changes">
                    <Buttons>
                        <telerik:RadToolBarButton runat="server" 
                            ImageUrl="~/Images/icons/action_check.png" Text="Save them...">
                        </telerik:RadToolBarButton>
                        <telerik:RadToolBarButton runat="server" 
                            ImageUrl="~/Images/icons/action_delete.png" Text="Discard them...">
                        </telerik:RadToolBarButton>
                    </Buttons>
                </telerik:RadToolBarDropDown>
                <telerik:RadToolBarSplitButton runat="server" Text="Options">
                    <Buttons>
                        <telerik:RadToolBarButton runat="server" ImageUrl="~/Images/icons/letter.png" 
                            Text="Send by email">
                        </telerik:RadToolBarButton>
                        <telerik:RadToolBarButton runat="server" ImageUrl="~/Images/icons/comments.png" 
                            Text="Add comments">
                        </telerik:RadToolBarButton>
                        <telerik:RadToolBarButton runat="server" ImageUrl="~/Images/icons/search.png" 
                            Text="Search">
                        </telerik:RadToolBarButton>
                    </Buttons>
                </telerik:RadToolBarSplitButton>
            </Items>
        </telerik:RadToolBar>
        <br /><br />
<telerik:RadToolBar ID="RadToolBar2" Runat="server" Skin="Windows7">
    <Items>
        <telerik:RadToolBarButton runat="server" ImageUrl="~/Images/icons/file.png" 
            Text="Enable New Items" CheckOnClick="true" AllowSelfUnCheck="true">
        </telerik:RadToolBarButton>
        
        <telerik:RadToolBarButton IsSeparator="true"></telerik:RadToolBarButton>
        
        <telerik:RadToolBarButton ImageUrl="~/Images/left2.gif" Text="Left" Group="Align" CheckOnClick="true"></telerik:RadToolBarButton>
        <telerik:RadToolBarButton ImageUrl="~/Images/center.gif" Text="Center" Group="Align" CheckOnClick="true" Checked="true"></telerik:RadToolBarButton>
        <telerik:RadToolBarButton ImageUrl="~/Images/right2.gif" Text="Right" Group="Align" CheckOnClick="true"></telerik:RadToolBarButton>            </Items>
</telerik:RadToolBar>
    
    </div>
</asp:Content>