<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

    <div id="cse" style="width: 100%;">Loading</div>
    <script src="http://www.google.com/jsapi" 
    type="text/javascript">
    </script>
    <script type="text/javascript">
        google.load('search', '1', { language: 'en' });
        google.setOnLoadCallback(function () {
            var customSearchControl =
    new google
    .search
    .CustomSearchControl(
        '013497957494942316161:q9_vrpus8gk');
            customSearchControl
    .setResultSetSize(google
    .search
    .Search
    .LARGE_RESULTSET);
            customSearchControl.draw('cse');
        }, true);
    </script>
    <link rel="stylesheet" 
    href="http://www.google.com/cse/style/look/default.css" 
    type="text/css" /> 