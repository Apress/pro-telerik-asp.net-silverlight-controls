<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Telerik.Web.Mvc.UI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	RadTreeView

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <style type="text/css">        
    	.dropArea        
    	{            
        	border-width: 1px;            
        	border-style: solid;  
        	border-color:Navy;          
        	width: 24em;            
    		height: 8em;            
    		overflow: auto;     
    		margin-bottom: 1em;            
    		padding: .70em;        
    	}        
    	
    	fieldset
    	{
    		width:26em;
    		height:12em;
    	}
    	
    </style>

    <h2>RadTreeView - Drag And Drop</h2>
    
    
    <%
        Html.Telerik().TreeView()
            .Name("myTreeView")
            .DragAndDrop(d=>d
                    .Enabled(true)
                    .DropTargets(".dropArea"))
            .ClientEvents(e=>e
                .OnNodeDrop("onNodeDrop"))
            .Items(t =>
                       {
                           t.Add()
                               .Text("File")
                               .Items(i =>
                                          {
                                              i.Add().Text("New");
                                              i.Add().Text("Open");
                                              i.Add().Text("Save");
                                          });
                           t.Add()
                               .Text("Edit")
                               .Items(i =>
                                          {
                                              i.Add().Text("Cut");
                                              i.Add().Text("Copy");
                                              i.Add().Text("Paste");
                                          });
                           t.Add()
                               .Text("Window")
                               .Items(i =>
                                          {
                                              i.Add().Text("Tile");
                                              i.Add().Text("Floating");
                                              i.Add().Text("Cascade");
                                          });
                       }).Render();
         %>

    <script type="text/javascript">
        function onNodeDrop(e) {
            var dropContainer = $(e.dropTarget).closest('.dropArea');
            if (dropContainer.length > 0) {
                $('<div><strong>' + $(e.item).text() + '</strong></div>')
                            .hide()
                            .appendTo(dropContainer)
                            .slideDown('fast');
                            
                e.preventDefault();
            }
        }
    </script>

    <fieldset>
        <legend>Drop items here</legend>
        <div class="dropArea">
        </div>
    </fieldset>

    <br /><br />
    <%= Html.ActionLink("Return", "Index", "TreeView") %>


</asp:Content>
