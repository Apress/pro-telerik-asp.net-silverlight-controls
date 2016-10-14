<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Site.Master" CodeBehind="RadEditor_Page.aspx.cs" Inherits="WebApplication1.RadEditor_Page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div>
   
<telerik:RadEditor ID="RadEditor1" Runat="server" Skin="Simple">
    <Modules>
        <telerik:EditorModule Name="MyModule" Enabled="true" Visible="true" />
        <telerik:EditorModule Name="RadEditorStatistics" Enabled="true" Visible="true" />
    </Modules>
    <Languages>
        <telerik:SpellCheckerLanguage Code="fr-FR" Title="French" />
    </Languages>
</telerik:RadEditor>
    
    </div>

<script type="text/javascript">
    MyModule = function (element) {
        MyModule.initializeBase(this, [element]);
    }
    MyModule.prototype =
{
    initialize: function () {
        MyModule.callBaseMethod(this, 'initialize');
        var selfPointer = this;
        this.get_editor().add_selectionChange(function () { selfPointer.doSomething(); });
        this.doSomething();
    },
    //A method that does the actual work - it is usually attached to the "selection changed" editor event
    doSomething: function () {
        var span = document.createElement("SPAN");
        span.innerHTML = this.get_editor().get_html();
        var liCount = span.getElementsByTagName("LI").length;
        var element = this.get_element();
        element.innerHTML = "<b>CUSTOM MODULE: Number of Bullets: " + liCount  + "</b>";
        element.style.border = "1px solid navy";
        element.style.backgroundColor = "#c6d9f0";
        element.style.color = "#e36c09";
    }
};
    MyModule.registerClass('MyModule', Telerik.Web.UI.Editor.Modules.ModuleBase);
</script>
    
</asp:Content>