Type.registerNamespace("Telerik.Web.UI");

window.$telerik = window.TelerikCommonScripts = Telerik.Web.CommonScripts = {};Telerik.Web.UI.RadAjaxControl = function() {
    /// <summary>Initializes a new instance of RadAjaxControl</summary>
};
Telerik.Web.UI.RadAjaxControl = function(element) {
    /// <summary>Initializes a new instance of RadAjaxControl</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadAjaxControl</param>
};
Telerik.Web.UI.RadAjaxControl.prototype = {
    initialize: function() {
        ///<summary>Initializes the client instance of RadAjaxControl</summary>
    },
    dispose: function() {
        ///<summary>Disposes the client instance of RadAjaxControl</summary>
    },

    get_enableAJAX: function() {
        ///<summary>Retuns a Boolean value indicating if the RadAjax ajax is enabled</summary>
        ///<value type='Boolean'></value>
    },
    set_enableAJAX: function(value) {
        ///<summary>Accepts a Boolean value indicating if the RadAjax ajax is enabled</summary>
        ///<param name='value' type='Boolean'></param>
    },
    get_enableHistory: function() {
        ///<summary>Retuns a Boolean value indicating if the RadAjax history is enabled</summary>
        ///<value type='Boolean'></value>
    },
    set_enableHistory: function(value) {
        ///<summary>Accepts a Boolean value indicating if the RadAjax ajax is enabled</summary>
        ///<param name='value' type='Boolean'></param>
    },
    get_clientEvents: function() {
        ///<summary>Returns the RadAjaxManager client-side events handler names. 
        ///Example: get_clientEvents().OnRequestStart - returns the name of the RadAjax OnRequestStart client-side event handler.
        ///get_clientEvents().OnResponseEnd - returns the name of the RadAjax OnResponseEnd client-side event handler.</summary>
        ///<value type='Object'></value>
    },
    set_clientEvents: function(value) {
        ///<summary>Sets the RadAjax client-side events handler names.</summary>
        ///<param name='value' type='Object'></param>
    },
    get_requestQueueSize: function() {
        ///<summary>Gets the size of the RadAjax ajax requests queue</summary>
        ///<value type='Number' integer='true'></value>
    },
    set_requestQueueSize: function(value) {
        ///<summary>Sets the size of the RadAjax ajax requests queue</summary>
        ///<param name='value' type='Number' integer='true'></param>
    },
    ajaxRequest: function(args) {
        ///<summary> Initiates a generic AJAX request through the RadAjax instance</summary>
        ///<param name='args' type='String'>The parameters, which the control had used when it raised the request</param>
    },
    ajaxRequestWithTarget: function(eventTarget, eventArgument) {
        ///<summary>Simulates a postback/AJAX request send by the control with the specified UniqueID and specified arguments</summary>
        ///<param name=eventTarget'' type='String'>The control which should raise postback event. You should always use the control's UniqueID</param>
        ///<param name='eventArgument' type='String'>This is optional argument for the event</param>
    }
};
Telerik.Web.UI.RadAjaxControl.registerClass('Telerik.Web.UI.RadAjaxControl', Sys.UI.Control);Telerik.Web.UI.RadAjaxLoadingPanel = function() {
    /// <summary>Initializes a new instance of RadAjaxLoadingPanel</summary>
};
$telerik.toAjaxLoadingPanel = function(object) {
    /// <summary>Casts an object to a RadAjaxLoadingPanel instance</summary>
    /// <returns type="Telerik.Web.UI.RadAjaxLoadingPanel">A RadAjaxLoadingPanel instance<returns>
};
$telerik.findAjaxLoadingPanel = function(id, parent) {
    /// <summary>Finds a RadAjaxLoadingPanel instance</summary>
    /// <param name='id'>A string that contains ID of the RadAjaxLoadingPanel to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadAjaxLoadingPanel to find</param>
    /// <returns type="Telerik.Web.UI.RadAjaxLoadingPanel">The RadAjaxLoadingPanel instance</returns>
};

Telerik.Web.UI.RadAjaxLoadingPanel = function(element) 
{
    /// <summary>Initializes a new instance of RadAjaxLoadingPanel</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadAjaxLoadingPanel</param>
};

Telerik.Web.UI.RadAjaxLoadingPanel.prototype =
{
    initialize: function() {
        /// <summary>Initializes the client instance of RadAjaxLoadingPanel</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadAjaxLoadingPanel</summary>
    },
    get_zIndex: function() {
        /// <summary>Gets the zIndex of the RadAjaxLoadingPanel</summary>
        /// <value type='Number' integer='true'></value>
    },
    set_zIndex: function(value) {
        /// <summary>Sets the zIndex of the RadAjaxLoadingPanel</summary>
        /// <param name='value' type='Number' integer='true'></param>
    },
    get_uniqueID: function() {
        /// <summary>Gets the unique id of the RadAjaxLoadingPanel</summary>
        /// <value type='String'></value>
    },
    set_uniqueID: function(value) {
        /// <summary>Sets the unique id of the RadAjaxLoadingPanel</summary>
        /// <param name='value' type='String'></param>
    },
    get_initialDelayTime: function() {
        /// <summary>Gets the initial delay time of the RadAjaxLoadingPanel</summary>
        /// <value type='Number' integer='true'></value>
    },
    set_initialDelayTime: function(value) {
        /// <summary>Sets the initial delay time of the RadAjaxLoadingPanel</summary>
        /// <param name='value' type='Number' integer='true'></param>
    },
    get_isSticky: function() {
        /// <summary>Gets the value of the IsSticky property of the RadAjaxLoadingPanel</summary>
        /// <value type='Boolean'></value>
    },
    set_isSticky: function(value) {
        /// <summary>Sets the value of the IsSticky property of the RadAjaxLoadingPanel</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_minDisplayTime: function() {
        /// <summary>Gets the minimum time in milliseconds that the RadAjaxLoadingPanel will last</summary>
        /// <value type='Number' mayBeNull='integer'></value>
    },
    set_minDisplayTime: function(value) {
        /// <summary>Sets the minimum time in milliseconds that the RadAjaxLoadingPanel will last</summary>
        /// <param name='value' type='Number' integer='true'></param>
    },
    get_transparency: function() {
        /// <summary>Gets the Transparency value of the RadAjaxLoadingPanel in percentage (values 0-100)</summary>
        /// <value type='Number' integer='true'></value>
    },
    set_transparency: function(value) {
        /// <summary>Sets the Transparency value of the RadAjaxLoadingPanel in percentage (values 0-100)</summary>
        /// <param name='value' type='Number' integer='true'></param>
    },
    get_animationDuration: function() {
        /// <summary>Gets the time in milliseconds of the animation duration of the RadAjaxLoadingPanel</summary>
        /// <value type='Number' integer='true'></value>
    },
    set_animationDuration: function(value) {
        /// <summary>Sets the time in milliseconds of the animation duration of the RadAjaxLoadingPanel</summary>
        /// <param name='value' type='Number' integer='true'></param>
    },
    show: function(updatedElementID) {
        /// <summary>Displays the loading panel over the element passed as a parameter</summary>
        /// <param name='updatedElementID' type='String'>The id of the updated element</param>
    },
    hide: function(updatedElementID) {
        /// <summary>Hides the loading panel which is displayed over the element passed as a parameter</summary>
        /// <param name='updatedElementID' type='String'>The id of the updated element</param>
    },
    cloneLoadingPanel: function(panelElement, updatedElementID) {
        /// <summary>Clones the loading panel element passed as first parameter and the clone is used to be displayed over the element specified by the second parameter</summary>
        /// <param name='panelElement' type='Object' domElement='true'>The DOM element of the RadAjaxLoadingPanel</param>
        /// <param name='updatedElementID' type='String'>The id of the updated element</param>
    },
    displayLoadingElement: function(loadingElement, updatedElement) {
        /// <summary>Displays the loading panel element over the updated element</summary>
        /// <param name='loadingElement' type='Object' domElement='true'>The DOM element of the RadAjaxLoadingPanel</param>
        /// <param name='updatedElement' type='Object' domElement='true'>The DOM element of the updated control</param>
    },
    getElementRectangle: function(element) {
        /// <summary>Gets the specified as a parameter element position and dimensions.
        /// Example: getElementRactangle(element).top - returns the top position of the element;
        /// getElementRactangle(element).left - returns the left position of the element;
        /// getElementRactangle(element).width - returns the width of the element;
        /// getElementRactangle(element).height - returns the height of the element.</summary>
        /// <param name='element' type='Object' domElement='true'>The DOM element which rectangles should be returned</param>
        /// <returns type='Object'></returns>
    }
};
Telerik.Web.UI.RadAjaxLoadingPanel.registerClass('Telerik.Web.UI.RadAjaxLoadingPanel', Sys.UI.Control);

Telerik.Web.UI.AjaxLoadingPanelEventArgs = function(loadingElement, updatedElement) 
{
		/// <summary></summary>
		/// <param name='loadingElement, updatedElement' type=''></param>
};
Telerik.Web.UI.AjaxLoadingPanelEventArgs.prototype =
{

    get_loadingElement: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_updatedElement: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_cancelNativeDisplay: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_cancelNativeDisplay: function(value) {
        /// <summary></summary>
        /// <param name='value' type=''></param>
    }
};
Telerik.Web.UI.AjaxLoadingPanelEventArgs.registerClass('Telerik.Web.UI.AjaxLoadingPanelEventArgs', Sys.EventArgs);Telerik.Web.UI.RadAjaxManager = function(element) {
    /// <summary>Initializes a new instance of RadAjaxManager</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadAjaxManager</param>
};
$telerik.toAjaxManager = function(object) {
    /// <summary>Casts an object to a RadAjaxManager instance</summary>
    /// <returns type="Telerik.Web.UI.RadAjaxManager">A RadAjaxManager instance<returns>
};
$telerik.findAjaxManager = function(id, parent) {
    /// <summary>Finds a RadAjaxManager instance</summary>
    /// <param name='id'>A string that contains ID of the RadAjaxManager to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadAjaxManager to find</param>
    /// <returns type="Telerik.Web.UI.RadAjaxManager">The RadAjaxManager instance</returns>
};

Telerik.Web.UI.RadAjaxManager.prototype = {
    initialize: function() {
        /// <summary>Initializes the client instance of RadAjaxManager</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadAjaxManager</summary>
    },
    get_ajaxSettings: function() {
        /// <summary>Gets the current ajax settings of the RadAjaxManager</summary>
        /// <value type='Array' elementType='Object' mayBeNull='true'></value>
    },
    set_ajaxSettings: function(value) {
        /// <summary>Sets the current ajax settings of the RadAjaxManager</summary>
        /// <param type='Array' elementType='Object' mayBeNull='true'></param>
    },
    get_defaultLoadingPanelID: function() {
        /// <summary>Gets the id of the default loading panel of the RadAjaxManager</summary>
        /// <value type='String'></value>
    },
    set_defaultLoadingPanelID: function(value) {
        /// <summary>Sets the id of the default loading panel of the RadAjaxManager</summary>
        /// <param type='String'></param>     
    },
    get_updatePanelsRenderMode: function() {
        /// <summary>Gets the current update panels render mode of the RadAjaxManager</summary>
        /// <value type='Number' integer='true'></value>
    },
    set_updatePanelsRenderMode: function(value) {
        /// <summary>Sets the current update panels render mode of the RadAjaxManager</summary>
        /// <param type='Number' integer='true'></param>
    },
    showLoadingPanels: function(id, ajaxSettings) {
        /// <summary>Shows loading panels over the updated controls from the ajax request initiator specified as a parameter</summary>
        /// <param name='id' type='String'>The id of the ajax request initiator control</param>
        /// <param name='ajaxSettings' type='Array'>The RadAjaxManager ajax settings</param>
    },
    updateElement: function(id, html) {
        /// <summary>Updates the html of the DOM element with the specified id</summary>
        /// <param name='id' type='String'>The id of the DOM element to update</param>
        /// <param name='html' type='String'>The html which is to be assigned to the specified DOM element</param>
    }    
};
Telerik.Web.UI.RadAjaxManager.registerClass('Telerik.Web.UI.RadAjaxManager', Telerik.Web.UI.RadAjaxControl);Telerik.Web.UI.RadAjaxPanel = function() {
    /// <summary>Initializes a new instance of RadAjaxPanel</summary>
};
$telerik.toAjaxPanel = function(object)
{
	/// <summary>Casts an object to a RadAjaxPanel instance</summary>
	/// <returns type="Telerik.Web.UI.RadAjaxPanel">A RadAjaxPanel instance</returns>
};
$telerik.findAjaxPanel = function(id, parent)
{
	/// <summary>Finds a RadAjaxPanel instance</summary>
	/// <param name='id'>A string that contains ID of the RadAjaxPanel to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadAjaxPanel to find</param>
	/// <returns type="Telerik.Web.UI.RadAjaxPanel">The RadAjaxPanel instance</returns>
};

Telerik.Web.UI.RadAjaxPanel = function(element) 
{
    /// <summary>Initializes a new instance of RadAjaxPanel</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadAjaxPanel</param>
};
Telerik.Web.UI.RadAjaxPanel.prototype =
{
    initialize: function() {
        /// <summary>Initializes the client instance of RadAjaxPanel</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadAjaxPanel</summary>
    },
    get_loadingPanelID: function() {
        /// <summary>Gets the id of the loading panel of the RadAjaxPanel</summary>
        /// <value type='String'></value>
    }
};
Telerik.Web.UI.RadAjaxPanel.registerClass('Telerik.Web.UI.RadAjaxPanel', Telerik.Web.UI.RadAjaxControl);/// <reference Name="MicrosoftAjax.js">
$telerik.toDateTimeFormatInfo = function(object) {
    /// <summary>Casts an object to a DateTimeFormatInfo instance</summary>
    /// <returns type="Telerik.Web.UI.DateTimeFormatInfo">A DateTimeFormatInfo instance</returns>
};

$telerik.findDateTimeFormatInfo = function(id, parent) {
    /// <summary>Finds a DateTimeFormatInfo instance</summary>
    /// <param name='id'>A string that contains ID of the DateTimeFormatInfo to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the DateTimeFormatInfo to find</param>
    /// <returns type="Telerik.Web.UI.DateTimeFormatInfo">The DateTimeFormatInfo instance</returns>
};

(function() {
    Type.registerNamespace("Telerik.Web.UI.Calendar");

    Telerik.Web.UI.Calendar.DateTimeFormatInfo = function(data) {
        /// <summary>The DateTimeFormatInfo object is used by the RadCalendar control for formatting date and time values so that they reflect the current culture</summary>
    };
    Telerik.Web.UI.Calendar.DateTimeFormatInfo.prototype =
{

    LeadZero: function(x) {
        /// <summary>Formats the integer, adding a leading zero if necessary so that the integer is a minimum of two digits.</summary>
        /// <param name='x' type='integer' domElement='' optional=''></param>
    },

    FormatDate: function(date, format) {
        /// <summary>Formats a date, using the specified date and format string. The format string uses the same abbreviations as in getDateFromFormat()</summary>
        /// <param name='date' type='Array (triplet)' domElement='' optional=''></param>
        /// <param name='format' type='string' domElement='' optional=''></param>
    }

};
    Telerik.Web.UI.Calendar.DateTimeFormatInfo.registerClass("Telerik.Web.UI.Calendar.DateTimeFormatInfo");
})();/// <reference Name="MicrosoftAjax.js">

$telerik.toCalendar = function(object) {
    /// <summary>Casts an object to a RadCalendar instance</summary>
    /// <returns type="Telerik.Web.UI.RadCalendar">A RadCalendar instance</returns>
};
$telerik.findCalendar = function(id, parent) {
    /// <summary>Finds a RadCalendar instance</summary>
    /// <param name='id'>A string that contains ID of the RadCalendar to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadCalendar to find</param>
    /// <returns type="Telerik.Web.UI.RadCalendar">The RadCalendar instance</returns>
};

(function() {

    Telerik.Web.UI.RadCalendar = function(element) {
        /// <summary></summary>
    };

    Telerik.Web.UI.RadCalendar.prototype =
    {

        initialize: function() {
        },

        dispose: function() {
        },
        selectDate: function(date, navigate) {
            /// <summary>Selects the date represented by the triplet that is the first parameter. If the second parameter is true, the calendar navigates to the view containing the newly selected date.</summary>
            /// <param name='date' type='Array(triplet)' domElement='' optional=''></param>
            /// <param name='navigate' type='boolean' domElement='' optional=''></param>
        },
        selectDates: function(dates, navigate) {
            /// <summary>Selects the set of dates in the first parameter, where each date is represented by triplet. If the second parameter is true, the calendar navigates to the view containing the newly selected dates.</summary>
            /// <param name='dates' type='Array(triplet)' domElement='' optional=''></param>
            /// <param name=' navigate' type='boolean' domElement='' optional=''></param>
        },
        unselectDate: function(date) {
            /// <summary>Un-selects the date represented by the parameter if it is currently selected.</summary>
            /// <param name='date' type='Array(triplet)' domElement='' optional=''></param>
        },
        unselectDates: function(dates) {
            /// <summary>Un-selects all the dates represented by triplets in the array if they are currently selected.</summary>
            /// <param name='dates' type='Array of triplets' domElement='' optional=''></param>
        },
        calculateDateFromStep: function(step) {
            /// <summary>Returns the triplet for the date that is offset by the specified number of days from the current month. If the parameter is positive, the days are offset from the last day of the month. If the parameter is negative, the days are offset from the first day of the month.</summary>
            /// <param name='step' type='integer' domElement='' optional=''></param>
        },
        navigateToDate: function(date) {
            /// <summary>Causes the calendar to switch to the view containing the specified date.</summary>
            /// <param name='date' type='Array(triplet)' domElement='' optional=''></param>
        },
        GetSelectedDates: function() {
            /// <summary>Returns an array of triplets that represent the selected dates in the calendar.</summary>
            /// <returns type='Array of triplets' mayBeNull=''></returns>
        },
        GetRangeMinDate: function() {
            /// <summary>Returns the triplet that represents the minimum date that can be selected.</summary>
            /// <returns type='Array(triplet)' mayBeNull=''></returns>
        },
        SetRangeMinDate: function(date) {
            /// <summary>Sets the minimum date that can be selected to the date that the array parameter represents.</summary>
            /// <param name='date' type='Array(triplet)' domElement='' optional=''></param>
        },
        GetRangeMaxDate: function() {
            /// <summary>Returns the triplet that represents the maximum date that can be selected.</summary>
            /// <returns type='Array(triplet)' mayBeNull=''></returns>
        },
        SetRangeMaxDate: function(date) {
            /// <summary>Sets the maximum date that can be selected to the date that the array parameter represents.</summary>
            /// <param name='date' type='Array(triplet)' domElement='' optional=''></param>
        },
        get_selectedDates: function() {
            /// <summary>Returns an array of triplets that represent the selected dates in the calendar.</summary>
            /// <returns type='Array of triplets' mayBeNull=''></returns>
        },
        get_rangeMinDate: function() {
            /// <summary>Returns the triplet that represents the minimum date that can be selected.</summary>
            /// <returns type='Array(triplet)' mayBeNull=''></returns>
        },
        set_rangeMinDate: function(date) {
            /// <summary>Sets the minimum date that can be selected to the date that the array parameter represents.</summary>
            /// <param name='date' type='Array(triplet)' domElement='' optional=''></param>
        },
        get_rangeMaxDate: function() {
            /// <summary>Returns the triplet that represents the maximum date that can be selected.</summary>
            /// <returns type='Array(triplet)' mayBeNull=''></returns>
        },
        set_rangeMaxDate: function(date) {
            /// <summary>Sets the maximum date that can be selected to the date that the array parameter represents.</summary>
            /// <param name='date' type='Array(triplet)' domElement='' optional=''></param>
        },
        get_focusedDate: function() {
            /// <summary>Returns the triplet that represents the currently focused date. The focused Date is the date that determines which view the calendar displays.</summary>
            /// <returns type='Array(triplet)' mayBeNull=''></returns>
        },
        set_focusedDate: function(date) {
            /// <summary>Sets the focused Date - it determines which view the calendar displays.</summary>
            /// <param name='date' type='Array(triplet)' domElement='' optional=''></param>
        },
        get_specialDaysArray: function() {
            /// <summary>Returns an array (0-offset)containing information about the special days that are defined. Each element in the array is an array (1-offset) with the following elements (in order): a triplet for the date, four elements that are not used client-side, an indicator of the repeatable status of the special day, another unused element, the tool tip for the day, and array with the style settings for the special day.</summary>
            /// <returns type='Array' mayBeNull=''></returns>
        },
        set_specialDaysArray: function(value) {
            /// <summary>Sets the special days. Each element in the array is an array (1-offset) with the following elements (in order): a triplet for the date, four elements that are not used client-side, an indicator of the repeatable status of the special day, another unused element, the tool tip for the day, and array with the style settings for the special day.</summary>
            /// <param name='value' type='Array' domElement='' optional=''></param>
        },
        get_enabled: function() {
            /// <summary>Returns true if the control is enabled.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_enabled: function(value) {
            /// <summary>Enables/disables the control</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_useColumnHeadersAsSelectors: function() {
            /// <summary>Returns whether the column selection is enabled.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_useColumnHeadersAsSelectors: function(value) {
            /// <summary>Enables/disables the column selection</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_useRowHeadersAsSelectors: function() {
            /// <summary>Returns whether the row selection is enabled.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_useRowHeadersAsSelectors: function(value) {
            /// <summary>Enables/disables the row selection</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_showOtherMonthsDays: function() {
            /// <summary>Returns true if the calendar displays days from months other than the focused month.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_showOtherMonthsDays: function(value) {
            /// <summary>Sets whether the calendar displays days from months other than the focused month.</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_enableMultiSelect: function() {
            /// <summary>Returns true if the calendar allows multiple dates to be selected.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_enableMultiSelect: function(value) {
            /// <summary>Sets whether the calendar allows multiple dates to be selected.</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_singleViewColumns: function() {
            /// <summary>Returns the number of columns in each month view.</summary>
            /// <returns type='integer' mayBeNull=''></returns>
        },
        set_singleViewColumns: function(value) {
            /// <summary>Sets the number of columns in each month view.</summary>
            /// <param name='value' type='integer' domElement='' optional=''></param>
        },
        get_singleViewRows: function() {
            /// <summary>Returns the number of rows in each month view.</summary>
            /// <returns type='integer' mayBeNull=''></returns>
        },
        set_singleViewRows: function(value) {
            /// <summary>Sets the number of rows in each month view.</summary>
            /// <param name='value' type='integer' domElement='' optional=''></param>
        },
        get_multiViewColumns: function() {
            /// <summary>Returns the number of columns when the calendar is in multi-view mode (the number of months in each row).</summary>
            /// <returns type='integer' mayBeNull=''></returns>
        },
        set_multiViewColumns: function(value) {
            /// <summary>Sets the number of columns when the calendar is in multi-view mode (the number of months in each row).</summary>
            /// <param name='value' type='integer' domElement='' optional=''></param>
        },
        get_multiViewRows: function() {
            /// <summary>Returns the number of rows when the calendar is in multi-view mode (the number of months in each column).</summary>
            /// <returns type='integer' mayBeNull=''></returns>
        },
        set_multiViewRows: function(value) {
            /// <summary>Sets the number of rows when the calendar is in multi-view mode (the number of months in each column).</summary>
            /// <param name='value' type='integer' domElement='' optional=''></param>
        },
        get_fastNavigationStep: function() {
            /// <summary>Returns the number of months by which the view changes when the user clicks the fast navigation buttons.</summary>
            /// <returns type='integer' mayBeNull=''></returns>
        },
        set_fastNavigationStep: function(value) {
            /// <summary>Sets the number of months by which the view changes when the user clicks the fast navigation buttons.</summary>
            /// <param name='value' type='integer' domElement='' optional=''></param>
        },
        get_skin: function() {
            /// <summary>Returns the name of the current skin</summary>
            /// <returns type='string' mayBeNull=''></returns>
        },
        set_skin: function(value) {
            /// <summary>Changes the current skin</summary>
            /// <param name='value' type='string' domElement='' optional=''></param>
        },
        get_enableNavigationAnimation: function() {
            /// <summary>Returns true if navigation animation is enabled.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_enableNavigationAnimation: function(value) {
            /// <summary>If set to true, this causes the RadCalendar control to display animated effects when the user changes the current month using the navigation controls in the title bar:</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_cellDayFormat: function() {
            /// <summary>Returns the cell date format</summary>
            /// <returns type='string' mayBeNull=''></returns>
        },
        set_cellDayFormat: function(value) {
            /// <summary>Sets the cell day format</summary>
            /// <param name='value' type='' domElement='' optional=''></param>
        },
        get_presentationType: function() {
            /// <summary>Returns the current presentation type (Interactive - 1, Preview - 2)</summary>
            /// <returns type='integer' mayBeNull=''></returns>
        },
        set_presentationType: function(value) {
            /// <summary>Sets the current presentation type (Interactive - 1, Preview - 2)</summary>
            /// <param name='value' type='integer' domElement='' optional=''></param>
        },
        get_orientation: function() {
            /// <summary>Returns 1 if the orientation is "RenderInRows", 2 if it is "RenderInColumns".</summary>
            /// <returns type='integer' mayBeNull=''></returns>
        },
        set_orientation: function(value) {
            /// <summary>Sets the orientation (1 - RenderInRows, 2 - RenderInColumns)</summary>
            /// <param name='value' type='integer' domElement='' optional=''></param>
        },
        get_titleFormat: function() {
            /// <summary>Returns the header (title) date format</summary>
            /// <returns type='string' mayBeNull=''></returns>
        },
        set_titleFormat: function(value) {
            /// <summary>Sets the headers (title) date format</summary>
            /// <param name='value' type='string' domElement='' optional=''></param>
        },
        get_dayCellToolTipFormat: function() {
            /// <summary>Get the format of the date that appears when the user hovers the mouse over a cell in the calendar.</summary>
            /// <returns type='string' mayBeNull=''></returns>
        },
        set_dayCellToolTipFormat: function(value) {
            /// <summary>Set the format of the date that appears when the user hovers the mouse over a cell in the calendar.</summary>
            /// <param name='value' type='string' domElement='' optional=''></param>
        },
        get_dateRangeSeparator: function() {
            /// <summary>Returns the separator string that will be put between start and end months in a multi view title.</summary>
            /// <returns type='string' mayBeNull=''></returns>
        },
        set_dateRangeSeparator: function(value) {
            /// <summary>Sets the separator string that will be put between start and end months in a multi view title.</summary>
            /// <param name='value' type='string' domElement='' optional=''></param>
        },
        get_autoPostBack: function() {
            /// <summary>Returns the value of the AutoPostBack property.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_autoPostBack: function(value) {
            /// <summary>Sets the value of the AutoPostBack property.</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_calendarEnableNavigation: function() {
            /// <summary>Returns whether the navigation buttons appear on the title bar.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_calendarEnableNavigation: function(value) {
            /// <summary>Returns whether the navigation buttons appear on the title bar. NOTE: Setting this property on the client has no effect.</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_calendarEnableMonthYearFastNavigation: function() {
            /// <summary>Returns whether the month/year navigation popup is enabled.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_calendarEnableMonthYearFastNavigation: function(value) {
            /// <summary>Sets whether the month/year navigation popup is enabled.</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_enableRepeatableDaysOnClient: function() {
            /// <summary>Returns true if the repeatable days are enabled</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_enableRepeatableDaysOnClient: function(value) {
            /// <summary>Enables/disabled the repeatable days</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_monthYearNavigationSettings: function() {
            /// <summary>Returns an array with the fast navigation settings. The settings are, in order, TodayButtonCaption, OkButtonCaption, CancelButtonCaption, DateIsOutOfRangeMessage, EnableTodayButtonSelection. </summary>
            /// <returns type='Array' mayBeNull=''></returns>
        },
        set_monthYearNavigationSettings: function(value) {
            /// <summary>Sets the fast navigation settings. The settings are, in order, TodayButtonCaption, OkButtonCaption, CancelButtonCaption, DateIsOutOfRangeMessage, EnableTodayButtonSelection. Changes you make to these settings have an effect only if you make them before the first time the month/year navigation popup is displayed.</summary>
            /// <param name='value' type='Array' domElement='' optional=''></param>
        },
        get_stylesHash: function() {
            /// <summary>Returns an array that specifies the CSS classes, set for the predefined styles. For example: CalendarTableStyle - rcMainTable</summary>
            /// <returns type='Array' mayBeNull=''></returns>
        },
        set_stylesHash: function(value) {
            /// <summary>Sets the predefined RadCalendar styles.</summary>
            /// <param name='value' type='Array' domElement='' optional=''></param>
        },
        get_culture: function() {
            /// <summary>Returns the RadCalendar culture name.</summary>
            /// <returns type='string' mayBeNull=''></returns>
        },
        get_enableViewSelector: function() {
            /// <summary>Returns true if the "view selector" is enabled</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        get__FormatInfoArray: function() {
            /// <summary>Returns the FormatInfo array</summary>
            /// <returns type='Array' mayBeNull=''></returns>
        },
        set__FormatInfoArray: function(value) {
            /// <summary>Sets the FormatInfo array</summary>
            /// <param name='value' type='Array' domElement='' optional=''></param>
        }
    };
    Telerik.Web.UI.RadCalendar.registerClass('Telerik.Web.UI.RadCalendar', Sys.UI.Control);
})();/// <reference Name="MicrosoftAjax.js">

$telerik.toCalendarEventArgs = function(object) {
    /// <summary>Casts an object to a RadCalendarEventArgs instance</summary>
    /// <returns type="Telerik.Web.UI.RadCalendarEventArgs">A RadCalendarEventArgs instance</returns>
};
$telerik.findCalendarEventArgs = function(id, parent) {
    /// <summary>Finds a RadCalendarEventArgs instance</summary>
    /// <param name='id'>A string that contains ID of the RadCalendarEventArgs to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadCalendarEventArgs to find</param>
    /// <returns type="Telerik.Web.UI.RadCalendarEventArgs">The RadCalendarEventArgs instance</returns>
};

(function() {
    Telerik.Web.UI.CalendarClickEventArgs = function(domElement, index) {
    };
    Telerik.Web.UI.CalendarClickEventArgs.prototype =
    {
        get_domElement: function() {
        },
        get_index: function() {
        }
    };
    Telerik.Web.UI.CalendarClickEventArgs.registerClass('Telerik.Web.UI.CalendarClickEventArgs', Sys.CancelEventArgs);

    Telerik.Web.UI.CalendarDayRenderEventArgs = function(cell, date, renderDay) {
        /// <summary>The OnDayRender client-side event handler is called for every calendar day cell when the calendar is rendered as a result of client-side navigation. This event mimics the server-side DayRender event, giving final control over the output of a specific calendar day cell. This event can be used to apply analogous changes to calendar cells when the user navigates that the server-side event handler applied to the cells in the initial view.</summary>
    };

    Telerik.Web.UI.CalendarDayRenderEventArgs.prototype =
    {
        get_cell: function() {
            /// <summary>Returns object for the cell being rendered.</summary>
            /// <returns type='TD' mayBeNull=''></returns>
        },
        get_date: function() {
            /// <summary>Returns the triplet for the date the cell represents.</summary>
            /// <returns type='Array' mayBeNull=''></returns>
        },
        get_renderDay: function() {
            /// <summary>Returns the client-side RenderDay object that represents the day being rendered. This value is null if the cell represents a value outside the range specified by RangeMinDate and RangeMaxDate.</summary>
            /// <returns type='object' mayBeNull=''></returns>
        }
    };
    Telerik.Web.UI.CalendarDayRenderEventArgs.registerClass('Telerik.Web.UI.CalendarDayRenderEventArgs', Sys.EventArgs);
    Telerik.Web.UI.CalendarDateClickEventArgs = function(domEvent, renderDay) {
        /// <summary>The OnDateClick client-side event handler is called when the user clicks on a date in the day matrix or presses the ENTER key while a date has focus. If the day is selectable, this event occurs before the OnDateSelecting  event. If the day is not selectable (but in the valid range), this event occurs, but not the OnDateSelecting event.</summary>
    };
    Telerik.Web.UI.CalendarDateClickEventArgs.prototype =
    {
        get_domEvent: function() {
            /// <summary>Returns the DOM event object for the mouse click event.</summary>
            /// <returns type='DOM event object' mayBeNull=''></returns>
        },

        get_renderDay: function() {
            /// <summary>Returns the client-side RenderDay object that represents the day that was just clicked.</summary>
            /// <returns type='object' mayBeNull=''></returns>
        }
    };
    Telerik.Web.UI.CalendarDateClickEventArgs.registerClass('Telerik.Web.UI.CalendarDateClickEventArgs', Sys.CancelEventArgs);

    Telerik.Web.UI.CalendarDateSelectingEventArgs = function(isSelecting, renderDay) {
        /// <summary>The OnDateSelecting client-side event handler is called immediately before the selected dates collection is updated to reflect the selection or de-selection of a date.</summary>
    };
    Telerik.Web.UI.CalendarDateSelectingEventArgs.prototype =
    {
        get_isSelecting: function() {
            /// <summary>Returns true if the day is about to be selected, false  if it is about to be unselected.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },

        get_renderDay: function() {
            /// <summary>Returns the client-side RenderDay object that represents the day being selected or unselected.</summary>
            /// <returns type='object' mayBeNull=''></returns>
        }
    };
    Telerik.Web.UI.CalendarDateSelectingEventArgs.registerClass('Telerik.Web.UI.CalendarDateSelectingEventArgs', Sys.CancelEventArgs);
    Telerik.Web.UI.CalendarDateSelectedEventArgs = function(renderDay) {
        /// <summary>The OnDateSelected client-side event handler is called immediately after the value of the control's selection has changed.</summary>
    };
    Telerik.Web.UI.CalendarDateSelectedEventArgs.prototype =
    {
        get_renderDay: function() {
            /// <summary>Returns the client-side RenderDay object for the day that was just selected or unselected.</summary>
            /// <returns type='object' mayBeNull=''></returns>
        }
    };
    Telerik.Web.UI.CalendarDateSelectedEventArgs.registerClass('Telerik.Web.UI.CalendarDateSelectedEventArgs', Sys.EventArgs);
    Telerik.Web.UI.CalendarViewChangingEventArgs = function(step) {
        /// <summary>The OnCalendarViewChanging client-side event handler is called when the calendar navigates to a new view, before the viewable area rendered by the calendar is changed.</summary>
    };
    Telerik.Web.UI.CalendarViewChangingEventArgs.prototype =
    {
        get_step: function() {
            /// <summary>Returns the number of views by which the calendar is about to change.</summary>
            /// <returns type='integer' mayBeNull=''></returns>
        }

    };
    Telerik.Web.UI.CalendarViewChangingEventArgs.registerClass('Telerik.Web.UI.CalendarViewChangingEventArgs', Sys.CancelEventArgs);
    Telerik.Web.UI.CalendarViewChangedEventArgs = function(step) {
        /// <summary>The OnCalendarViewChanged client-side event handler is called when the calendar navigates to a new view, after the calendar has been updated for the new view, but before it is rendered.</summary>
    };
    Telerik.Web.UI.CalendarViewChangedEventArgs.prototype =
    {
        get_step: function() {
            /// <summary>Returns the number of views by which the calendar has changed.</summary>
            /// <returns type='integer' mayBeNull=''></returns>
        }
    };
    Telerik.Web.UI.CalendarViewChangedEventArgs.registerClass('Telerik.Web.UI.CalendarViewChangedEventArgs', Sys.EventArgs);
    Telerik.Web.UI.DatePickerPopupOpeningEventArgs = function(popupControl, cancelCalendarSynchronization) {
        /// <summary>The OnPopupOpening client-side event handler is called immediately before a popup calendar or time view is initialized to the current selection in the input area and then displayed.</summary>
    };
    Telerik.Web.UI.DatePickerPopupOpeningEventArgs.prototype =
    {

        get_popupControl: function() {
            /// <summary>Returns the client object for the time view or calendar that is about to be displayed.</summary>
            /// <returns type='object' mayBeNull=''></returns>
        },

        get_cancelCalendarSynchronization: function() {
            /// <summary>Lets you prevent the popup control from synchronizing its value to the value in the input area.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },

        set_cancelCalendarSynchronization: function(value) {
            /// <summary>Lets you prevent the popup from appearing.</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        }
    };
    Telerik.Web.UI.DatePickerPopupOpeningEventArgs.registerClass('Telerik.Web.UI.DatePickerPopupOpeningEventArgs', Sys.CancelEventArgs);
    Telerik.Web.UI.DatePickerPopupClosingEventArgs = function(popupControl) {
        /// <summary>The OnPopupClosing client-side event handler is called immediately before a popup calendar or time view is closed.</summary>
    };
    Telerik.Web.UI.DatePickerPopupClosingEventArgs.prototype =
    {
        get_popupControl: function() {
            /// <summary>Returns the client object for the time view or calendar that is about to close.</summary>
            /// <returns type='object' mayBeNull=''></returns>
        }
    };
    Telerik.Web.UI.DatePickerPopupClosingEventArgs.registerClass('Telerik.Web.UI.DatePickerPopupClosingEventArgs', Sys.CancelEventArgs);
    Telerik.Web.UI.TimeViewSelectedEventArgs = function(newTime, oldTime) {
        /// <summary>The OnClientTimeSelected client-side event handler is called when the user selected a time cell in the time view control.</summary>
    };
    Telerik.Web.UI.TimeViewSelectedEventArgs.prototype =
    {

        get_newTime: function() {
            /// <summary>Returns the newly selected time value.</summary>
            /// <returns type='Date object' mayBeNull=''></returns>
        },

        get_oldTime: function() {
            /// <summary>Returns the time before the user selected a new time value.</summary>
            /// <returns type='Date object' mayBeNull=''></returns>
        }

    };
    Telerik.Web.UI.TimeViewSelectedEventArgs.registerClass('Telerik.Web.UI.TimeViewSelectedEventArgs', Sys.EventArgs);
    Telerik.Web.UI.TimeViewSelectingEventArgs = function(newTime, oldTime) {
        /// <summary>The OnClientTimeSelecting client-side event handler is called when the user selects a time cell in the time view control.</summary>
    };
    Telerik.Web.UI.TimeViewSelectingEventArgs.prototype =
    {
        get_newTime: function() {
            /// <summary>Returns the newly selected time value.</summary>
            /// <returns type='Date object' mayBeNull=''></returns>
        },

        get_oldTime: function() {
            /// <summary>Returns the time before the user selected a new time value.</summary>
            /// <returns type='Date object' mayBeNull=''></returns>
        }

    };
    Telerik.Web.UI.TimeViewSelectingEventArgs.registerClass('Telerik.Web.UI.TimeViewSelectingEventArgs', Sys.CancelEventArgs);
})();/// <reference Name="MicrosoftAjax.js">

$telerik.toDatePicker = function(object) {
    /// <summary>Casts an object to a RadDatePicker instance</summary>
    /// <returns type="Telerik.Web.UI.RadDatePicker">A RadDatePicker instance</returns>
};
$telerik.findDatePicker = function(id, parent) {
    /// <summary>Finds a RadDatePicker instance</summary>
    /// <param name='id'>A string that contains ID of the RadDatePicker to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadDatePicker to find</param>
    /// <returns type="Telerik.Web.UI.RadDatePicker">The RadDatePicker instance</returns>
};

(function() {

    Telerik.Web.UI.RadDatePicker = function(element) {
    };
    Telerik.Web.UI.RadDatePicker.prototype =
    {
        initialize: function() {
        },
        dispose: function() {
        },
        clear: function() {
            /// <summary>Clears the selection, leaving the value as unassigned.</summary>
        },
        togglePopup: function() {
            /// <summary>Toggles the visible state of the popup calendar.</summary>
        },
        isPopupVisible: function() {
            /// <summary>Returns whether the popup calendar is visible.</summary>
        },
        showPopup: function(x, y) {
            /// <summary>Displays the popup calendar at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.</summary>
            /// <param name='x' type='integer' domElement='' optional=''></param>
            /// <param name=' y' type='integer' domElement='' optional=''></param>
        },
        isEmpty: function() {
            /// <summary>Returns true if the value is unassigned.</summary>
        },
        hidePopup: function() {
            /// <summary>Hides the popup calendar if it is showing.</summary>
        },
        getElementDimensions: function(element) {
            /// <summary>Returns the dimensions of the specified child element.</summary>
            /// <param name='element' type='HTML element' domElement='' optional=''></param>
            /// <returns type='rectangle' mayBeNull=''></returns>
        },
        getElementPosition: function(el) {
            /// <summary>Returns the x and y coordinates of the specified child element.</summary>
            /// <param name='el' type='' domElement='' optional=''></param>
            /// <returns type='point' mayBeNull=''></returns>
        },
        get_calendar: function() {
            /// <summary>Returns a reference to the client object for the popup calendar. </summary>
            /// <returns type='RadCalendar object' mayBeNull=''></returns>
        },
        set_calendar: function(value) {
        },
        get_popupButton: function() {
            /// <summary>Returns the DOM element for the calendar popup button.</summary>
            /// <returns type='HTML element' mayBeNull=''></returns>
        },
        get_dateInput: function() {
            /// <summary>Returns a reference to the client object for the input area. For details on using this object, see the RadInput documentation.</summary>
            /// <returns type='RadDateInput object' mayBeNull=''></returns>
        },
        set_dateInput: function(value) {
        },
        get_textBox: function() {
            /// <summary>Returns the DOM element for the text box that implements the input area.</summary>
            /// <returns type='HTML element' mayBeNull=''></returns>
        },
        get_popupContainer: function() {
            /// <summary>Returns the DOM element for the <DIV> that contains the popup calendar.</summary>
            /// <returns type='HTML element' mayBeNull=''></returns>
        },
        get_enabled: function() {
            /// <summary>Returns true if the control is enabled</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_enabled: function(value) {
            /// <summary>Enables/disables the control</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_visible: function() {
            /// <summary>Returns whether the control is visible</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_visible: function(value) {
            /// <summary>Shows/hides the control</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_selectedDate: function() {
            /// <summary>Returns the selected date, or null if no date is selected.</summary>
            /// <returns type='Date' mayBeNull=''></returns>
        },
        set_selectedDate: function(newDate) {
            /// <summary>Assigns the value of the date picker.</summary>
            /// <param name='newDate' type='Date' domElement='' optional=''></param>
        },
        get_minDate: function() {
            /// <summary>Returns the earliest date the user can select.</summary>
            /// <returns type='Date' mayBeNull=''></returns>
        },
        set_minDate: function(value) {
            /// <summary>Sets the earliest date the user can select.</summary>
            /// <param name='value' type='Date' domElement='' optional=''></param>
        },
        get_minDateStr: function() {
            /// <summary>Returns the earliest date the user can select as string.</summary>
            /// <returns type='string' mayBeNull=''></returns>
        },
        get_maxDate: function() {
            /// <summary>Returns the latest date the user can select.</summary>
            /// <returns type='Date' mayBeNull=''></returns>
        },
        set_maxDate: function(value) {
            /// <summary>Sets the latest date the user can select.</summary>
            /// <param name='value' type='Date' domElement='' optional=''></param>
        },
        get_maxDateStr: function() {
            /// <summary>Returns the latest date the user can select as string.</summary>
            /// <returns type='string' mayBeNull=''></returns>
        },
        get_focusedDate: function() {
            /// <summary>Returns the date that determines the view the popup calendar uses when the value of the date picker is not assigned.</summary>
            /// <returns type='Date' mayBeNull=''></returns>
        },
        set_focusedDate: function(value) {
            /// <summary>Sets the date that determines the view the popup calendar uses when the value of the date picker is not assigned.</summary>
            /// <param name='value' type='Date' domElement='' optional=''></param>
        },
        get_showPopupOnFocus: function() {
            /// <summary>Returns whether the popup control (Calendar or TimeView) will be displayed when the DateInput textbox is focused.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_showPopupOnFocus: function(value) {
            /// <summary>Sets whether the popup control (Calendar or TimeView) will be displayed when the DateInput textbox is focused.</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        repaint: function() {
            /// <summary>Repaints the control</summary>
        },
        get_popupDirection: function() {
            /// <summary>Set the popup direction</summary>
            /// <returns type='string' mayBeNull=''></returns>
        },
        set_popupDirection: function(value) {
            /// <summary>Returns the popup direction</summary>
            /// <param name='value' type='string' domElement='' optional=''></param>
        },
        get_enableScreenBoundaryDetection: function() {
            /// <summary>Returns whether the screen boundary detection will be applied.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_enableScreenBoundaryDetection: function(value) {
            /// <summary>Sets whether the screen boundary detection will be applied.</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        saveClientState: function(additionalProps) {
        }
    };
    Telerik.Web.UI.RadDatePicker.registerClass('Telerik.Web.UI.RadDatePicker', Sys.UI.Control);
})();/// <reference Name="MicrosoftAjax.js">

$telerik.toDateTimePicker = function(object) {
    /// <summary>Casts an object to a RadDateTimePicker instance</summary>
    /// <returns type="Telerik.Web.UI.RadDateTimePicker">A RadDateTimePicker instance</returns>
};
$telerik.findDateTimePicker = function(id, parent) {
    /// <summary>Finds a RadDateTimePicker instance</summary>
    /// <param name='id'>A string that contains ID of the RadDateTimePicker to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadDateTimePicker to find</param>
    /// <returns type="Telerik.Web.UI.RadDateTimePicker">The RadDateTimePicker instance</returns>
};

(function() {

    Telerik.Web.UI.RadDateTimePicker = function(element) {
    };
    Telerik.Web.UI.RadDateTimePicker.prototype =
    {
        initialize: function() {
        },

        dispose: function() {
        },
        set_enabled: function(value) {
            /// <summary>Enables/disabled the control.</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_timeView: function() {
            /// <summary>Returns a reference to the client object for the popup time view.</summary>
            /// <returns type='RadTimeView object' mayBeNull=''></returns>
        },
        get_timePopupContainer: function() {
            /// <summary>Returns the DOM element for the <DIV> that contains the popup time view.</summary>
            /// <returns type='HTML element' mayBeNull=''></returns>
        },
        get_timePopupButton: function() {
            /// <summary>Returns the DOM element for the time popup button.</summary>
            /// <returns type='HTML element' mayBeNull=''></returns>
        },
        GetTimePopupContainer: function() {
            /// <summary>Returns the DOM element for the <DIV> that contains the popup time view.</summary>
            /// <returns type='HTML element' mayBeNull=''></returns>
        },
        toggleTimePopup: function() {
            /// <summary>Toggles the visible state of the popup time view.</summary>
        },
        isTimePopupVisible: function() {
            /// <summary>Returns whether the popup time view is visible.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        showTimePopup: function(x, y) {
            /// <summary>Displays the popup time view at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.</summary>
            /// <param name='x' type='integer' domElement='' optional=''></param>
            /// <param name=' y' type='integer' domElement='' optional=''></param>
        },
        hideTimePopup: function() {
            /// <summary>Hides the popup time view if it is showing.</summary>
        },
        get_timeView: function() {
            /// <summary>Returns a reference to the client object for the popup time view.</summary>
            /// <returns type='RadTimeView object' mayBeNull=''></returns>
        },
        set_timeView: function(value) {
        },
        get_autoPostBackControl: function() {
            /// <summary>Gets a value indicating whether a postback to the server automatically occurs when the user changes the list selection.</summary>
            /// <returns type='integer/enum' mayBeNull=''></returns>
        },
        set_autoPostBackControl: function(value) {
            /// <summary>Sets a value indicating whether a postback to the server automatically occurs when the user changes the list selection.</summary>
            /// <param name='value' type='integer/enum' domElement='' optional=''></param>
        }
    };
    Telerik.Web.UI.RadDateTimePicker.registerClass("Telerik.Web.UI.RadDateTimePicker", Sys.UI.Control);
})();/// <reference Name="MicrosoftAjax.js">

$telerik.toTimeView = function(object) {
    /// <summary>Casts an object to a RadTimeView instance</summary>
    /// <returns type="Telerik.Web.UI.RadTimeView">A RadTimeView instance</returns>
};
$telerik.findTimeView = function(id, parent) {
    /// <summary>Finds a RadTimeView instance</summary>
    /// <param name='id'>A string that contains ID of the RadTimeView to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadTimeView to find</param>
    /// <returns type="Telerik.Web.UI.RadTimeView">The RadTimeView instance</returns>
};

(function() {
    Telerik.Web.UI.RadTimeView = function(element) {
    };
    Telerik.Web.UI.RadTimeView.prototype =
    {
        initialize: function() {
        },
        dispose: function() {
        },
        getTime: function() {
            /// <summary>Returns the selected date and time, or null if no value is selected.</summary>
            /// <returns type='Date' mayBeNull=''></returns>
        },
        setTime: function(hours, minutes, seconds, datetime) {
            /// <summary>Assigns the value of the time view.</summary>
            /// <param name='hours' type='integer' domElement='' optional=''></param>
            /// <param name='minutes' type='integer' domElement='' optional=''></param>
            /// <param name='seconds' type='integer' domElement='' optional=''></param>
            /// <param name='datetime' type='Date' domElement='' optional=''></param>
        },
        get_itemStyles: function() {
            /// <summary>Returns an array that determines the classes used for the predined styles.</summary>
            /// <returns type='Array' mayBeNull=''></returns>
        },
        set_itemStyles: function(value) {
            /// <summary>Determines the classes used for the predined styles.</summary>
            /// <param name='value' type='Array' domElement='' optional=''></param>
        },
        get_columns: function() {
            /// <summary>Returns the number of columns used to lay out values in the time view.</summary>
            /// <returns type='integer' mayBeNull=''></returns>
        },
        set_columns: function(value) {
            /// <summary>Sets the number of columns used to lay out values in the time view.</summary>
            /// <param name='value' type='integer' domElement='' optional=''></param>
        },
        get_showFooter: function() {
            /// <summary>Returns whether the time view displays its footer.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_showFooter: function(value) {
            /// <summary>Determines whether the time view displays its footer.</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_showHeader: function() {
            /// <summary>Returns whether the time view displays its header.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        set_showHeader: function(value) {
            /// <summary>Shows/hides the time view header.</summary>
            /// <param name='value' type='boolean' domElement='' optional=''></param>
        },
        get_startTime: function() {
            /// <summary>Returns the earliest time that is displayed by the time view.</summary>
            /// <returns type='Date' mayBeNull=''></returns>
        },
        set_startTime: function(value) {
            /// <summary>Sets the earliest time that is displayed by the time view.</summary>
            /// <param name='value' type='Date' domElement='' optional=''></param>
        },
        get_endTime: function() {
            /// <summary>Returns the last time that can appear in the time view. The last time that actually appears is the latest time that is a whole number of intervals after the start time which is less than this time.</summary>
            /// <returns type='Date' mayBeNull=''></returns>
        },
        set_endTime: function(value) {
            /// <summary>Sets the last time that can appear in the time view. The last time that actually appears is the latest time that is a whole number of intervals after the start time which is less than this time.</summary>
            /// <param name='value' type='Date' domElement='' optional=''></param>
        },
        get_interval: function() {
            /// <summary>Returns the time interval between successive values in the time view.</summary>
            /// <returns type='Date' mayBeNull=''></returns>
        },
        set_interval: function(value) {
            /// <summary>Sets the time interval between successive values in the time view.</summary>
            /// <param name='value' type='Date' domElement='' optional=''></param>
        },
        get_culture: function() {
            /// <summary>Returns a string that contains the current culture</summary>
            /// <returns type='string' mayBeNull=''></returns>
        },
        get_timeFormat: function() {
            /// <summary>Returns the time format of the RadTimeView control.</summary>
            /// <returns type='string' mayBeNull=''></returns>
        }
    };
    Telerik.Web.UI.RadTimeView.registerClass('Telerik.Web.UI.RadTimeView', Sys.UI.Control);
})();(function() {
    Telerik.Web.UI.Calendar.RenderDay = function(data) {
    };
    Telerik.Web.UI.Calendar.RenderDay.prototype =
    {
        dispose: function() {
        },
        MouseOver: function() {
        },
        MouseOut: function() {
        },
        Click: function(e) {
            /// <summary>Simulates a mouse click on the day.</summary>
            /// <param name='e' type='' domElement='' optional=''></param>
        },
        Select: function(select, preventSubmit) {
            /// <summary>Selects or un-selects the day.</summary>
            /// <param name='select' type='boolean' domElement='' optional=''></param>
            /// <param name=' preventSubmit' type='boolean' domElement='' optional=''></param>
        },
        IsRecurring: function(compareDate, calendarView) {
            /// <summary>Indicates the recurrence patterns that include the day. The value is one of the following: 1: DayInMonth, 2: DayAndMonth, 4: Week, 8: WeekAndMonth, 16: Today, 32: None</summary>
            /// <param name='compareDate' type='Array(triplet)' domElement='' optional=''></param>
            /// <param name=' calendarView' type='integer' domElement='' optional=''></param>
        },
        get_date: function() {
            /// <summary>Returns the triplet for the day represented by the render day object.</summary>
            /// <returns type='Array(triplet)' mayBeNull=''></returns>
        },
        set_date: function(value) {
            /// <summary>Sets the date of the render day object to the date encoded by the triplet.</summary>
            /// <param name='value' type='Array(triplet)' domElement='' optional=''></param>
        },
        get_isSelectable: function() {
            /// <summary>Returns true if the day can be selected.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        get_isSelected: function() {
            /// <summary>returns true if the day is selected.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        get_isToday: function() {
            /// <summary>Returns true if the day has today's date</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        },
        get_isWeekend: function() {
            /// <summary>Returns true if the day falls on a weekend.</summary>
            /// <returns type='boolean' mayBeNull=''></returns>
        }
    };
    Telerik.Web.UI.Calendar.RenderDay.registerClass('Telerik.Web.UI.Calendar.RenderDay', null, Sys.IDisposable);
})();﻿/// <reference Name="MicrosoftAjax.js">

$telerik.toMenu = function(object) {
    /// <summary>Casts an object to a RadMenu instance</summary>
    /// <returns type="Telerik.Web.UI.RadMenu">A RadMenu instance<returns>
};

$telerik.findMenu = function (id, parent) {
    /// <summary>Finds a RadMenu instance</summary>
    /// <param name='id'>A string that contains ID of the RadMenu to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadMenu to find</param>
    /// <returns type="Telerik.Web.UI.RadMenu">The RadMenu instance</returns>
};

Telerik.Web.UI.RadMenu = function (element) {
    /// <summary>Initializes a new instance of RadMenu</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadMenu</param>    
};

Telerik.Web.UI.RadMenu.prototype = {
        repaint: function() {
        ///<summary></summary>
        },
        close: function() {
            ///<summary>Closes all opened items</summary>
        },
        disable: function() {
            ///<summary>Disables all items in the menu. Clicking on any item will no longer have effect, child items cannot be opened.</summary>
        },
        enable: function() {
            ///<summary>Enables all items in the menu.</summary>
        },
        disableEvents: function() {
            ///<summary>Disables the control client-side event emitting.</summary>
        },
        enableEvents: function() {
            ///<summary>Enables the control client-side event emitting. Events are enabled by default.</summary>
        },
        focus: function() {
            ///<summary>Brings the focus to the menu so that it can be controlled via the keyboard.</summary>
        },
        findItemByText: function(text) {
            ///<summary>Returns the first RadMenuItem object whose Text property is equal to the passed parameter.</summary>
            ///<param name='text' type='String'>Text of the Item</param>
            ///<returns type='Telerik.Web.UI.RadMenuItem'>The first RadMenuItem found</returns>
        },
        findItemByUrl: function(url) {
            ///<summary>Returns the first RadMenuItem object whose NavigateUrl property is equal to the passed parameter.</summary>
            ///<param name='url' type='String'>NavigateUrl of the Item</param>
            ///<returns type='Telerik.Web.UI.RadMenuItem'>The first RadMenuItem found</returns>
        },
        findItemByAbsoluteUrl: function(url) {
            ///<summary>
            ///Returns the first RadMenuItem object whose NavigateUrl property is equal to the passed parameter. Note that the parameter
            ///should end with '/' for example: var item = sender.findItemByAbsoluteUrl('http://www.test.com/');
            ///</summary>
            ///<param name='url' type='String'>NavigateUrl of the Item</param>
            ///<returns type='Telerik.Web.UI.RadMenuItem'>The first RadMenuItem found</returns>
        },
        findItemByValue: function(value) {
            ///<summary>Returns the first RadMenuItem object whose Value property is equal to the passed parameter.</summary>
            ///<param name='value' type='String'>Value of the Item</param>
            ///<returns type='Telerik.Web.UI.RadMenuItem'>The first RadMenuItem found</returns>
        },
        findItemByAttribute: function(attributeName, attributeValue) {
            ///<summary>Returns the first RadMenuItem object with a custom attribute of the specified name and value.</summary>
            ///<param name='attributeName' type='String'>The attribute name</param>
            ///<param name='attributeValue' type='String'>The attribute value</param>
            ///<returns type='Telerik.Web.UI.RadMenuItem'>The first RadMenuItem found</returns>
        },
        get_items: function() {
            ///<summary>Returns the collection of root level items.</summary>
            ///<returns type='Telerik.Web.UI.RadMenuItemCollection'>RadMenuItemCollection</returns>
        },
        get_enableScreenBoundaryDetection: function() {
            ///<summary>Returns a boolean value indicating whether screen boundary detection is enabled</summary>
            ///<returns type='Boolean'>Boolean indicating whether screen boundary detection is enabled</returns>
        },
        set_enableScreenBoundaryDetection: function(value) {
            ///<summary>Sets whether screen boundary detection is enabled</summary>
            ///<param name='value'>true if screen boundery detection should be enabled; false otherwise.</param>
        },
        get_enableAutoScroll: function() {
            ///<summary>Returns a boolean value indicating whether auto-scrolling is enabled</summary>
            ///<returns type='Boolean'>Boolean indicating whether auto-scrolling is enabled</returns>
        },
        set_enableAutoScroll: function(value) {
            ///<summary>Sets whether auto-scrolling is enabled</summary>
            ///<param name='value'>true if auto-scrolling should be enabled; false otherwise.</param>
        },
        get_enableSelection: function() {
            ///<summary>Returns a boolean value whether item selection is enabled</summary>
            ///<returns type='Boolean'>Boolean indicating whether item selection is enabled.</returns>
        },
        set_enableSelection: function(value) {
            ///<summary>Sets whether item selection is enabled</summary>
            ///<param name='value'>true to enable item selection or false to disable it.</param>
        },
        get_childListElement: function() {
            ///<summary>Returns the DOM element for the root list of items in the menu.</summary>
            ///<returns domElement='true'>DOM element for the root item list</returns>
        },
        set_enabled: function(value) {
            ///<summary>
            ///Disables or enables the entire RadMenu. Items will not open and 
            /// client events will not firee when the Menu is disabled
            ///</summary>
            ///<param name='value'>true to enable the Menu or false to disable it.</param>
        },
        get_focusedItem: function() {
        ///<summary>Returns the currently focused root level item. Returns null if no root item has focus.</summary>
        ///<returns type='Telerik.Web.UI.RadMenuItem'>The focused root item</returns>
        },
        get_openedItem: function() {
        ///<summary>Returns the currently opened root level item. If no item is opened at the root level the method will return null.</summary>
        ///<returns type='Telerik.Web.UI.RadMenuItem'>The opened root item</returns>
        },
        get_clickToOpen: function() {
        ///<summary></summary>
        },
        set_clickToOpen: function(value) {
        ///<summary></summary>
        },
        get_collapseDelay: function() {
        ///<summary></summary>
        },
        set_collapseDelay: function(value) {
        ///<summary></summary>
        },
        get_expandDelay: function() {
        ///<summary></summary>
        },
        set_expandDelay: function(value) {
        ///<summary></summary>
        },
        get_loadingTemplate: function() {
        ///<summary></summary>
        },
        set_loadingTemplate: function(value) {
        ///<summary></summary>
        },
        get_webServiceSettings: function() {
        ///<summary></summary>
        },
        set_webServiceSettings: function(value) {
        ///<summary></summary>
        },
        get_rightToLeft: function() {
        ///<summary></summary>
        },
        set_rightToLeft: function(value) {
        ///<summary></summary>
        },
        set_clicked: function(value) {
        ///<summary>Sets whether the user has clicked on a root menu item to expand it when ClickToOpen is True. See example here.</summary>
        ///<param  name='value' type='Boolean'>value</param>
        },
        get_clicked: function() {
        ///<summary>True if the user has clicked on a root menu item to expand it when ClickToOpen is True.</summary>
        ///<returns type='Telerik.Web.UIBoolean' >Boolean</returns>
        },
        get_enableRootItemScroll: function() {
        ///<summary></summary>
        },
        set_enableRootItemScroll: function(value) {
        ///<summary></summary>
        },
        get_selectedItem: function() {
        ///<summary>Returns the selected menu item. If no item is selected returns null.</summary>
        ///<returns type='Telerik.Web.UI.RadMenuItem' >RadMenuItem</returns>
        },
        get_allItems: function() {
        ///<summary>Gets a linear collection of all items. This includes all root and child items in the menu.</summary>
        ///<returns type='Telerik.Web.UIArray' >Array</returns>
        },
        get_persistLoadOnDemandItems: function() {
        ///<summary></summary>
        },
        set_persistLoadOnDemandItems: function(value) {
        ///<summary></summary>
        },
        get_enableOverlay: function() {
        ///<summary></summary>
        },
        set_enableOverlay: function(value) {
        ///<summary></summary>
        },
        add_mouseOver: function(handler) {
        ///<summary></summary>
        },
        remove_mouseOver: function(handler) {
        ///<summary></summary>
        },
        add_mouseOut: function(handler) {
        ///<summary></summary>
        },
        remove_mouseOut: function(handler) {
        ///<summary></summary>
        },
        add_itemFocus: function(handler) {
        ///<summary></summary>
        },
        remove_itemFocus: function(handler) {
        ///<summary></summary>
        },
        add_itemBlur: function(handler) {
        ///<summary></summary>
        },
        remove_itemBlur: function(handler) {
        ///<summary></summary>
        },
        add_itemClicking: function(handler) {
        ///<summary></summary>
        },
        remove_itemClicking: function(handler) {
        ///<summary></summary>
        },
        add_itemClicked: function(handler) {
        ///<summary></summary>
        },
        remove_itemClicked: function(handler) {
        ///<summary></summary>
        },
        add_itemOpening: function(handler) {
        ///<summary></summary>
        },
        remove_itemOpening: function(handler) {
        ///<summary></summary>
        },
        add_itemOpened: function(handler) {
        ///<summary></summary>
        },
        remove_itemOpened: function(handler) {
        ///<summary></summary>
        },
        add_itemClosing: function(handler) {
        ///<summary></summary>
        },
        remove_itemClosing: function(handler) {
        ///<summary></summary>
        },
        add_itemClosed: function(handler) {
        ///<summary></summary>
        },
        remove_itemClosed: function(handler) {
        ///<summary></summary>
        },
        add_load: function(handler) {
        ///<summary></summary>
        },
        remove_load: function(handler) {
        ///<summary></summary>
        },
        add_itemPopulating: function(handler) {
        ///<summary></summary>
        },
        remove_itemPopulating: function(handler) {
        ///<summary></summary>
        },
        add_itemPopulated: function(handler) {
        ///<summary></summary>
        },
        remove_itemPopulated: function(handler) {
        ///<summary></summary>
        },
        add_itemPopulationFailed: function(handler) {
        ///<summary></summary>
        },
        remove_itemPopulationFailed: function(handler) {
        ///<summary></summary>
        }
};

Telerik.Web.UI.RadMenuItemCollection = function () {};

Telerik.Web.UI.RadMenuItemCollection.prototype = {
    getItem : function(index) {
        /// <summary>Gets the item at a given index in the collection</summary>
        /// <param name="index" type="Number" integer="true">Index of the item to return</param>
        /// <returns type='Telerik.Web.UI.RadMenuItem'>Returns the item at the given index</returns>
    }
};

Telerik.Web.UI.RadMenu.registerClass('Telerik.Web.UI.RadMenu', Sys.UI.Control);﻿/// <reference Name="MicrosoftAjax.js">

$telerik.toRating = function(object)
{
	/// <summary>Casts an object to a RadRating instance</summary>
	/// <returns type="Telerik.Web.UI.RadRating">A RadRating instance</returns>
};

$telerik.findRating = function(id,parent)
{
	/// <summary>Finds a RadRating instance</summary>
	/// <param name='id'>A string that contains ID of the RadRating to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadRating to find</param>
	/// <returns type="Telerik.Web.UI.RadRating">The RadRating instance</returns>
};

Telerik.Web.UI.RatingPrecision = function()
{
	/// <summary>Specifies the possible values for the Precision property of the RadRating control</summary>
	/// <field name="Item" type="Number" integer="true" static="true">The user can select only the entire item (star)</field>
	/// <field name="Half" type="Number" integer="true" static="true">The user can select half an item (star) or the entire item (star)</field>
	/// <field name="Exact" type="Number" integer="true" static="true">The user can select any portion of an item (star)</field>
};
Telerik.Web.UI.RatingPrecision.prototype =
{
	Item: 0,
	Half: 1,
	Exact: 2
}
Telerik.Web.UI.RatingPrecision.registerEnum("Telerik.Web.UI.RatingPrecision");

Telerik.Web.UI.RatingSelectionMode = function()
{
	/// <summary>Specifies the possible values for the Precision property of the RadRating control</summary>
	/// <field name="Single" type="Number" integer="true" static="true">Only one item (star) is marked as selected - the currently selected item (star)</field>
	/// <field name="Continuous" type="Number" integer="true" static="true">Default behavior - all items (stars) from the first item (star) to the currently selected one are marked as selected</field>
};
Telerik.Web.UI.RatingSelectionMode.prototype =
{
	Single: 0,
	Continuous: 1
}
Telerik.Web.UI.RatingSelectionMode.registerEnum("Telerik.Web.UI.RatingSelectionMode");

Telerik.Web.UI.RadRating = function(element)
{
	/// <summary>Initializes a new instance of the Telerik.Web.UI.RadRating class</summary>
	/// <param name='element' type='Object' domElement='true'>The outermost DOM element of RadRating</param>
};

Telerik.Web.UI.RadRating.prototype =
{
	repaint: function()
	{
		/// <summary>Repaints the rating control and forces it to recalculate the size of its elements. Use this method when the 
		/// control is in an initially hidden element
		/// </summary>
	},

	add_load: function(handler)
	{
		/// <summary>Adds a handler for the load event</summary>
		/// <param name="handler" type="Function">The handler for the load event</param>
	},

	remove_load: function(handler)
	{
		/// <summary>Removes a handler for the load event</summary>
		/// <param name="handler" type="Function">The handler for the load event</param>
	},

	add_rating: function(handler)
	{
		/// <summary>Adds a handler for the rating event</summary>
		/// <param name="handler" type="Function">The handler for the rating event</param>
	},

	remove_rating: function(handler)
	{
		/// <summary>Removes a handler for the rating event</summary>
		/// <param name="handler" type="Function">The handler for the rating event</param>
	},

	add_rated: function(handler)
	{
		/// <summary>Adds a handler for the rated event</summary>
		/// <param name="handler" type="Function">The handler for the rated event</param>
	},

	remove_rated: function(handler)
	{
		/// <summary>Removes a handler for the rated event</summary>
		/// <param name="handler" type="Function">The handler for the rated event</param>
	},

	get_itemCount: function()
	{
		/// <summary>Gets the number of items (stars) in the rating control</summary>
		/// <returns type='Number'>The number of items (stars) in the rating control</returns>
	},

	get_value: function()
	{
		/// <summary>Gets the current value of the rating control</summary>
		/// <returns type='Number'>The current value of the rating control</returns>
	},

	set_value: function(value)
	{
		/// <summary>Sets the current value of the rating control</summary>
		/// <param name="value" type="Number">The new value for the rating control</param>
	},

	get_selectionMode: function()
	{
		/// <summary>Gets the selection mode of the rating control</summary>
		/// <returns type='Telerik.Web.UI.RatingSelectionMode'>The selection mode of the rating control</returns>
	},

	get_precision: function()
	{
		/// <summary>Gets the rate precision of the rating control</summary>
		/// <returns type='Telerik.Web.UI.RatingPrecision'>The rate precision of the rating control</returns>
	},

	get_orientation: function()
	{
		/// <summary>Gets the orientation of the rating control</summary>
		/// <returns type='Telerik.Web.UI.Orientation'>The orientation of the rating control</returns>
	},

	get_isDirectionReversed: function()
	{
		/// <summary>Returns a value, indicating whether the direction of the rating control is revered</summary>
		/// <returns type='Boolean'>A value, indicating whether the direction of the rating control is revered</returns>
	},

	get_enableToolTips: function()
	{
		/// <summary>Returns a value, indicating whether the rating control will display a browser toolip for its values</summary>
		/// <returns type='Boolean'>A value, indicating whether the rating control will display a browser toolip for its values</returns>
	},

	get_readOnly: function()
	{
		/// <summary>Returns a value, indicating whether the rating control is in read-only mode</summary>
		/// <returns type="Boolean" mayBeNull="false">A value, indicating whether the rating control is in read-only mode</returns>
	},

	set_readOnly: function(value)
	{
		/// <summary>Sets a value, indicating whether the rating control is in read-only mode</summary>
		/// <param name="value" type="Boolean">The new value for the ReadOnly property</param>
	},

	get_enabled: function()
	{
		/// <summary>Returns a value, indicating whether the rating control is enabled</summary>
		/// <returns type="Boolean" mayBeNull="false">The value of the Enabled property</returns>
	},

	set_enabled: function(value)
	{
		/// <summary>Sets whether the slider is enabled</summary>
		/// <param name="value" type="Boolean">The new value for the Enabled property</param>
	}
};
Telerik.Web.UI.RadRating.registerClass("Telerik.Web.UI.RadRating", Sys.UI.Control);$telerik.findScheduler = function (id, parent) {
    /// <summary>Finds a RadScheduler instance</summary>
    /// <param name='id'>A string that contains ID of the RadScheduler to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadScheduler to find</param>
    /// <returns type="Telerik.Web.UI.RadScheduler">The RadScheduler instance</returns>
};

$telerik.toScheduler = function(object) {
    /// <summary>Casts an object to a RadScheduler instance</summary>
    /// <returns type="Telerik.Web.UI.RadScheduler">A RadScheduler instance<returns>
};

Telerik.Web.UI.RadScheduler = function(element) {
    /// <summary>Initializes a new instance of RadScheduler</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadScheduler</param>    
};

Telerik.Web.UI.RadScheduler.prototype = {
        repaint: function() {
        /// <summary>
        /// Updates the control layout. Call this function after changing the size of the control.
        /// </summary>
        },
        showInlineInsertForm: function(timeSlot) {
        /// <summary>
        /// Shows the in-line insert form at the specified time slot. The formCreating client-side event will be fired.
        /// A postback will occur if a custom InlineInsertTemplate is in use.
        /// </summary>
        /// <param name="timeSlot" type="Telerik.Web.UI.ISchedulerTimeSlot" mayBeNull="false" optional="false">
        /// The time slot in which to place the insert form.
        /// </param>
        },
        showAllDayInlineInsertForm: function(date) {
        /// <summary>
        /// Shows the in-line insert form for an all-day appointment on the specified date. Applicable in Day/Week/MultiDay view.
        /// </summary>
        /// <param name="date" type="Date" mayBeNull="false" optional="false">
        /// The day for which to show the insert form.
        /// </param>
        },
        showInlineEditForm: function(appointment, editSeries) {
        /// <summary>
        /// Shows the in-line edit form for the specified appointment.
        /// A postback will occur if a custom InlineEditTemplate is in use.
        /// </summary>
        /// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" mayBeNull="false" optional="false">
        /// The appointment to edit.
        /// </param>
        /// <param name="editSeries" type="Boolean" mayBeNull="false" optional="true">
        /// For recurring appointments only.
		///	true if you want to edit the recurring series;
		///	false to edit only this occurrence.
        /// </param>
        },
        showAdvancedInsertForm: function(startDate) {
        /// <summary>
        /// Shows the advanced insert form populated with the specified appointment start date.
        /// </summary>
        /// <param name="startDate" type="Date" mayBeNull="false" optional="false">
        /// The start date for the appointment.
        /// </param>
        },
        showAllDayAdvancedInsertForm: function(date) {
        /// <summary>
        /// Shows the advanced insert form populated with the specified appointment start date.
        /// The appointment will be initially marked as all-day.
        /// </summary>
        /// <param name="startDate" type="Date" mayBeNull="false" optional="false">
        /// The start date for the appointment.
        /// </param>
        },
        showAdvancedEditForm: function(appointment, editSeries) {
        /// <summary>
        /// Shows the advanced edit form populated with the specified appointment.
        /// </summary>
        /// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" mayBeNull="false" optional="false">
        /// The appointment to edit.
        /// </param>
        /// <param name="editSeries" type="Boolean" mayBeNull="false" optional="true">
        /// For recurring appointments only.
		///	True if you want to edit the recurring series;
		///	False to edit only this occurrence.
        /// </param>
        },
        hideAdvancedForm: function() {
        /// <summary>
        /// Hides the currently shown modal advanced form.
        /// </summary>
        },
        hideInlineForm: function() {
        /// <summary>
        /// Hides the currently shown inline form.
        /// </summary>
        },
        editAppointmentWithConfirmation: function(appointment) {
        /// <summary>
        /// Starts editing the specified Appointment. This method is identical to editAppointment,
        /// but the user is presented with a confirmation dialog if the edited appointment is recurring.
        /// </summary>
        /// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" mayBeNull="false" optional="false">
        /// The appointment to edit.
        /// </param>
        },
        editAppointment: function(appointment, editSeries) {
        /// <summary>
        /// Starts editing the specified Appointment.
        /// </summary>
        /// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" mayBeNull="false" optional="false">
        /// The appointment to edit.
        /// </param>
        /// <param name="editSeries" type="Boolean" mayBeNull="false" optional="true">
        /// For recurring appointments only.
		///	True if you want to edit the recurring series;
		///	False to edit only this occurrence.
        /// </param>
        },
        insertAppointment: function(appointment) {
        /// <summary>
        /// Stores the specified Appointment. Postbacks if not bound to a web service.
        /// </summary>
        /// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" mayBeNull="false" optional="false">
        /// The appointment to insert.
        /// </param>
        },
        prepareToEdit: function(appointmentToEdit, editSeries) {
        /// <summary>
        /// Prepares the specified appointment for editing.
        /// If the specified appointment is not recurring, the method does nothing and returns the same appointment.
        /// If the appointment is recurring and editSeries is set to true the method returns the recurrence parent.
        /// Otherwise, the method clones the appointment and updates it state to recurrence exception.
        /// </summary>
        /// <param name="appointmentToEdit" type="Telerik.Web.UI.SchedulerAppointment" mayBeNull="false" optional="false">
        /// The appointment to prepare for editing.
        /// </param>
        /// <param name="editSeries" type="Boolean" mayBeNull="false" optional="true">
		///	True if you want to edit the recurring series;
		///	False to edit only this occurrence.
        /// </param>
        },
        updateAppointment: function(appointment, editSeries) {
        /// <summary>
        /// Updates the specified Appointment. Postbacks if not bound to a web service.
        /// </summary>
        /// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" mayBeNull="false" optional="false">
        /// The appointment to update.
        /// </param>
        /// <param name="editSeries" type="Boolean" mayBeNull="false" optional="true">
		///	True if you want to edit the recurring series;
		///	False to edit only this occurrence.
        /// </param>
        },
        deleteAppointmentWithConfirmation: function(appointment) {
        /// <summary>
        /// Deletes the specified Appointment. This method is identical to deleteAppointment,
        /// but the user is presented with a confirmation dialog if the deleted appointment is recurring.
        /// </summary>
        /// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" mayBeNull="false" optional="false">
        /// The appointment to delete.
        /// </param>
        },
        deleteAppointment: function(appointment, deleteSeries) {
        /// <summary>
        /// Deletes the specified Appointment. Postbacks if not bound to a web service.
        /// </summary>
        /// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" mayBeNull="false" optional="false">
        /// The appointment to delete.
        /// </param>
        /// <param name="deleteSeries" type="Boolean" mayBeNull="false" optional="true">
        /// For recurring appointments only.
		///	True if you want to delete the recurring series;
		///	False to delete only this occurrence.
        /// </param>
        },
        removeRecurrenceExceptions: function(master) {
        /// <summary>
        /// Web Service binding only. Removes the associated recurrence exceptions.
        /// </summary>
        /// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" mayBeNull="false" optional="false">
        /// The master appointment for the recurrence series.
        /// </param>
        },
        getAppointmentFromDomElement: function(element) {
        /// <summary>
        /// Gets the appointment that corresponds to the specified DOM element.
        /// </summary>
        /// <param name="element" domElement="true" optional="false" mayBeNull="false">
        /// The appointment DOM element
        /// </param>
        /// <returns type="Telerik.Web.UI.SchedulerAppointment">
        /// The corresponding appointment. Null if the element does not belong to an appointment.
        /// </returns>
        },
        displayToUtc: function(displayDate) {
        /// <summary>
        /// Converts a date time object from client date format to UTC using the timeZoneOffset property.
        /// </summary>
        /// <param name="displayDate" type="Date" mayBeNull="false" optional="false">
        /// The date to convert.
        /// </param>
        /// <returns type="Date">
        /// The date in UTC format which corresponds to the supplied client format date.
        /// </returns>
        },
        utcToDisplay: function(utcDate) {
        /// <summary>
        /// Converts a date time object from UTC to client date format using the timeZoneOffset property.
        /// </summary>
        /// <param name="utcDate" type="Date" mayBeNull="false" optional="false">
        /// The date to convert.
        /// </param>
        /// <returns type="Date">
        /// The date in client format which corresponds to the supplied UTC date.
        /// </returns>
        },
        rebind: function() {
        /// <summary>
        /// Web Service binding only. Rebinds the scheduler from the web service.
        /// </summary>
        },
        get_appointments: function() {
        /// <summary>
        /// Gets a collection of all loaded appointments.
        /// </summary>
        /// <returns type="Telerik.Web.UI.SchedulerAppointmentCollection">
        /// Collection of all loaded appointments.
        /// </returns>
        },
        get_resources: function() {
        /// <summary>
        /// Gets a collection of all loaded resources.
        /// </summary>
        /// <returns type="Telerik.Web.UI.SchedulerResourceCollection">
        /// Collection of all loaded resources.
        /// </returns>
        },
        get_resourceTypes: function() {
        /// <summary>
        /// Gets a collection of all loaded resource types.
        /// </summary>
        /// <returns type="Telerik.Web.UI.ResourceTypeCollection">
        /// Collection of all loaded resource types.
        /// </returns>
        },
        get_resourceStyles: function() {
        /// <summary>
        /// Gets a collection of all loaded resource style mappings.
        /// </summary>
        /// <returns type="Telerik.Web.UI.ResourceStyleMappingCollection">
        /// Collection of all loaded resource style mappings.
        /// </returns>
        },
        get_firstDayStart: function() {
        /// <summary>
        /// Gets the start date of the current view.
        /// In day view, this is the start of the visible day.
        /// </summary>
        /// <returns type="Date">
        /// The start date of the current view.
        /// </returns>
        },
        get_currentAppointment: function() {
        /// <summary>
        /// Gets the currently edited appointment.
        /// </summary>
        /// <returns type="Telerik.Web.UI.SchedulerAppointment">
        /// The currently edited appointment. Null if no appointment is edited at the moment.
        /// </returns>
        },
        get_displayDeleteConfirmation: function() {
        /// <summary>
        /// Gets a value indicating whether a delete confirmation dialog should be displayed when
        /// the user clicks the "delete" button of an appointment.
        /// </summary>
        /// <returns type="Boolean">
        /// true if the confirmation dialog should be displayed; false otherwise.
        /// The default value is true.
        /// </returns>
        },
        set_displayDeleteConfirmation: function(displayDeleteConfirmation) {
        /// <summary>
        /// Sets a value indicating whether a delete confirmation dialog should be displayed when
        /// the user clicks the "delete" button of an appointment.
        /// </summary>
        /// <param name="displayDeleteConfirmation" type="Boolean" mayBeNull="false" optional="false">
        /// true if the confirmation dialog should be displayed; false otherwise.
        /// </param>
        },
        get_displayRecurrenceActionDialogOnMove: function() {
        /// <summary>
        /// Gets a value indicating whether a a recurrence action dialog
        /// should be displayed on when moving recurring appointments.
        /// </summary>
        /// <returns type="Boolean">
        /// true if the confirmation dialog should be displayed; false otherwise.
        /// The default value is false.
        /// </returns>
        },
        set_displayRecurrenceActionDialogOnMove: function(value) {
        /// <summary>
        /// Sets a value indicating whether a delete confirmation dialog should be displayed when
        /// the user clicks the "delete" button of an appointment.
        /// </summary>
        /// <param name="displayDeleteConfirmation" type="Boolean" mayBeNull="false" optional="false">
        /// true if the confirmation dialog should be displayed; false otherwise.
        /// </param>
        },
        get_readOnly: function() {
        /// <summary>
        /// Gets a value indicating whether RadScheduler is in read-only mode.
        /// </summary>
        /// <returns type="Boolean">
        /// true if the scheduler is read-only; false otherwise.
        /// The default value is false.
        /// </returns>
        },
        set_readOnly: function(readOnly) {
        /// <summary>
        /// Sets a value indicating whether RadScheduler is in read-only mode.
        /// </summary>
        /// <param name="readOnly" type="Boolean" mayBeNull="false" optional="false">
        /// true if the scheduler is read-only; false otherwise.
        /// </param>
        },
        get_selectedView: function() {
        /// <summary>
        /// Gets the type of the currently selected view.
        /// </summary>
        /// <returns type="Telerik.Web.UI.SchedulerViewType">
        /// The currently selected view.
        /// </returns>
        },
        set_selectedView: function(selectedView, suppressNavigationComplete) {
        /// <summary>
        /// Web Service binding only. Sets the currently selected view type.
        /// </summary>
        /// <param name="selectedView" type="Telerik.Web.UI.SchedulerViewType" mayBeNull="false" optional="false">
        /// The view to switch to.
        /// </param>
        },
        get_minutesPerRow: function() {
        /// <summary>
        /// Gets the number of minutes which a single row represents.
        /// </summary>
        /// <returns type="Number">
        /// The number of minutes which a single row represents.
        /// </returns>
        },
        get_timeLabelRowSpan: function() {
        /// <summary>
        /// Gets the number of rows each time label spans.
        /// </summary>
        /// <returns type="Number">
        /// The number of rows each time label spans.
        /// </returns>
        },
        get_hoursPanelTimeFormat: function() {
        /// <summary>
        /// Gets the hours panel time format string.
        /// </summary>
        /// <returns type="String">
        /// The hours panel time format string.
        /// </returns>
        },
        get_allowEdit: function() {
        /// <summary>
        /// Gets a value indicating if the appointments can be edited.
        /// This includes moving and resizing.
        /// </summary>
        /// <returns type="Boolean">
        /// true if the appointment editing is allowed; false otherwise.
        /// The default value is true.
        /// </returns>
        },
        set_allowEdit: function(allowEdit) {
        /// <summary>
        /// Sets a value indicating if the appointments can be edited.
        /// </summary>
        /// <param name="allowEdit" type="Boolean" mayBeNull="false" optional="false">
        /// true if the appointment editing is allowed; false otherwise.
        /// </param>
        },
        get_allowDelete: function() {
        /// <summary>
        /// Gets a value indicating if the appointments can be deleted.
        /// </summary>
        /// <returns type="Boolean">
        /// true if the appointment deleting is allowed; false otherwise.
        /// </returns>
        },
        set_allowDelete: function(allowDelete) {
        /// <summary>
        /// Sets a value indicating if the appointments can be deleted.
        /// </summary>
        /// <param name="allowDelete" type="Boolean" mayBeNull="false" optional="false">
        /// true if the appointment deleting is allowed; false otherwise.
        /// </param>
        },
        get_allowInsert: function() {
        /// <summary>
        /// Gets a value indicating if the appointments can be inserted.
        /// </summary>
        /// <returns type="Boolean">
        /// true if the appointment inserting is allowed; false otherwise.
        /// </returns>
        },
        set_allowInsert: function(allowInsert) {
        /// <summary>
        /// Sets a value indicating if the appointments can be inserted.
        /// </summary>
        /// <param name="allowDelete" type="Boolean" mayBeNull="false" optional="false">
        /// true if the appointment inserting is allowed; false otherwise.
        /// </param>
        },
        get_attributes: function() {
        /// <summary>
        /// Gets a collection of all attributes of the scheduler.
        /// </summary>
        /// <returns type="Telerik.Web.UI.SchedulerAttributeCollection">
        /// Collection of all attributes of the scheduler.
        /// </returns>
        },
        get_activeModel: function() {
        /// <summary>
        /// Gets the model that represents the current view.
        /// The model is responsible for mapping time slots to DOM elements and appointments to time slots.
        /// </summary>
        /// <returns type="Telerik.Web.UI.ISchedulerModel">
        /// The model that represents the current view.
        /// </returns>
        },
        set_numberOfHoveredRows: function(value) {
        /// <summary>
        /// Sets the number of rows that are hovered when the mouse is over the appointment area.
        /// </summary>
        /// <param name="value" type="Number" mayBeNull="false" optional="false">
        /// The number of rows that are hovered when the mouse is over the appointment area.
        /// </param>
        },
        get_numberOfHoveredRows: function() {
        /// <summary>
        /// Gets the number of rows that are hovered when the mouse is over the appointment area.
        /// </summary>
        /// <returns type="Number">
        /// The number of rows that are hovered when the mouse is over the appointment area.
        /// </returns>
        },
        get_groupBy: function() {
        /// <summary>
        /// Gets the name of the resource to group by. Can also be in the format "Date,[Resource Name]" when grouping by date.
        /// </summary>
        /// <returns type="String">
        /// The name of the resource to group by.
        /// </returns>
        },
        get_rowHeight: function() {
        /// <summary>
        /// Gets the height of RadScheduler rows.
        /// </summary>
        /// <returns type="String">
        /// The height of RadScheduler rows.
        /// </returns>
        },
        get_height: function() {
        /// <summary>
        /// Gets the height of RadScheduler.
        /// </summary>
        /// <returns type="String">
        /// The height of RadScheduler.
        /// </returns>
        },
        set_height: function(value) {
        /// <summary>
        /// Sets the height of RadScheduler.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The height of RadScheduler.
        /// </param>
        },
        get_minimumInlineFormWidth: function() {
        /// <summary>
        /// Gets the minimum width of the inline insert/edit template in pixels.
        /// </summary>
        /// <returns type="Number">
        /// The minimum width of the inline insert/edit template in pixels.
        /// </returns>
        },
        set_minimumInlineFormWidth: function(value) {
        /// <summary>
        /// Sets the minimum width of the inline insert/edit template in pixels.
        /// </summary>
        /// <param name="value" type="Number" mayBeNull="false" optional="false">
        /// The minimum width of the inline insert/edit template in pixels.
        /// </param>
        },
        get_minimumInlineFormHeight: function() {
        /// <summary>
        /// Gets the minimum height of the inline insert/edit template in pixels.
        /// </summary>
        /// <returns type="Number">
        /// The minimum height of the inline insert/edit template in pixels.
        /// </returns>
        },
        set_minimumInlineFormHeight: function(value) {
        /// <summary>
        /// Sets the minimum height of the inline insert/edit template in pixels.
        /// </summary>
        /// <param name="value" type="Number" mayBeNull="false" optional="false">
        /// The minimum height of the inline insert/edit template in pixels.
        /// </param>
        },
        get_webServiceSettings: function() {
        /// <summary>
        /// The web service to be used for binding this instance of RadScheduler.
        /// </summary>
        /// <returns type="Telerik.Web.UI.SchedulerWebServiceSettings">
        /// The web service to be used for binding this instance of RadScheduler.
        /// </returns>
        },
        get_selectedDate: function() {
        /// <summary>
        /// Gets the currently selected date.
        /// </summary>
        /// <returns type="Date">
        /// the currently selected date.
        /// </returns>
        },
        set_selectedDate: function(value) {
        /// <summary>
        /// Web Service binding only. Sets the currently selected date.
        /// </summary>
        /// <param name="value" type="Date" mayBeNull="false" optional="false">
        /// The currently selected date.
        /// </param>
        },
        get_showFullTime: function() {
        /// <summary>
        /// Gets a value indicating whether to display the complete day (24-hour view) or the range between dayStartTime and dayEndTime.
        /// </summary>
        /// <returns type="Boolean">
        /// true if showing the complete day (24-hour view); otherwise, false.
        /// </returns>
        },
        set_showFullTime: function(value) {
        /// <summary>
        /// Web Service binding only. Sets a value indicating whether to display the complete day (24-hour view) or the range between dayStartTime and dayEndTime.
        /// </summary>
        /// <param name="value" type="Boolean" mayBeNull="false" optional="false">
        /// true if showing the complete day (24-hour view); otherwise, false.
        /// </param>
        }
};

Telerik.Web.UI.SchedulerAppointment = function() {
    /// <summary>Initializes a new instance of RadScheduler Appointment</summary>
}
Telerik.Web.UI.SchedulerAppointment.prototype = {
        edit: function() {
        /// <summary>
        /// Switches the scheduler into edit mode for this appointment. Same as calling editAppointment() on the scheduler instance.
        /// </summary>
        },
        remove: function() {
        /// <summary>
        /// Deletes this appointment. Same as calling deleteAppointment() on the scheduler instance.
        /// </summary>
        },
        clone: function() {
        /// <summary>
        /// Creates a shallow copy of this appointment.
        /// </summary>
        /// <returns type="Telerik.Web.UI.SchedulerAppointment">
        /// A shallow copy of this appointment.
        /// </returns>
        },
        get_id: function() {
        /// <summary>
        /// Gets the unique ID of this Appointment.
        /// </summary>
        /// <returns type="String">
        /// The unique ID of this Appointment.
        /// </returns>
        },
        get_internalID: function() {
        /// <summary>
        /// Gets the encoded unique ID of this Appointment. This includes the value as well as the type of the ID.
        /// </summary>
        /// <returns type="String">
        /// The encoded unique ID of this Appointment.
        /// </returns>
        },
        get_subject: function() {
        /// <summary>
        /// Gets the appointment subject.
        /// </summary>
        /// <returns type="String">
        /// The appointment subject.
        /// </returns>
        },
        set_subject: function(subject) {
        /// <summary>
        /// Sets the appointment subject.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The appointment subject.
        /// </param>
        },
        get_description: function() {
        /// <summary>
        /// Gets the appointment description.
        /// </summary>
        /// <returns type="String">
        /// The appointment description.
        /// </returns>
        },
        set_description: function(description) {
        /// <summary>
        /// Sets the appointment description.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The appointment description.
        /// </param>
        },
        get_start: function() {
        /// <summary>
        /// Gets the appointment start date.
        /// </summary>
        /// <returns type="Date">
        /// The appointment start date.
        /// </returns>
        },
        set_start: function(date) {
        /// <summary>
        /// Sets the appointment start date.
        /// </summary>
        /// <param name="value" type="Date" mayBeNull="false" optional="false">
        /// The appointment start date.
        /// </param>
        },
        get_end: function() {
        /// <summary>
        /// Gets the appointment end date.
        /// </summary>
        /// <returns type="Date">
        /// The appointment end date.
        /// </returns>
        },
        set_end: function(date) {
        /// <summary>
        /// Sets the appointment end date.
        /// </summary>
        /// <param name="value" type="Date" mayBeNull="false" optional="false">
        /// The appointment end date.
        /// </param>
        },
        get_duration: function() {
        /// <summary>
        /// Gets the duration of the appointment in milliseconds.
        /// </summary>
        /// <returns type="Number">
        /// The duration of the appointment in milliseconds.
        /// </returns>
        },
        get_durationInMinutes: function() {
        /// <summary>
        /// Gets the duration of the appointment in minutes.
        /// </summary>
        /// <returns type="Number">
        /// The duration of the appointment in minutes.
        /// </returns>
        },
        get_toolTip: function() {
        /// <summary>
        /// Gets the appointment tooltip.
        /// </summary>
        /// <returns type="String">
        /// The appointment tooltip.
        /// </returns>
        },
        set_toolTip: function(toolTip) {
        /// <summary>
        /// Sets the appointment tooltip.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The appointment tooltip.
        /// </param>
        },
        get_cssClass: function() {
        /// <summary>
        /// Gets the appointment CSS class.
        /// </summary>
        /// <returns type="String">
        /// The appointment CSS class.
        /// </returns>
        },
        set_cssClass: function(value) {
        /// <summary>
        /// Sets the appointment CSS class.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The appointment CSS class.
        /// </param>
        },
        get_backColor: function() {
        /// <summary>
        /// Gets the appointment background color.
        /// </summary>
        /// <returns type="String">
        /// The appointment background color.
        /// </returns>
        },
        set_backColor: function(color) {
        /// <summary>
        /// Sets the appointment background color.
        /// </summary>
        /// <param name="color" type="String" mayBeNull="false" optional="false">
        /// The appointment background color. For example "#b0c4de".
        /// </param>
        },
        get_borderStyle: function() {
        /// <summary>
        /// Gets the appointment border style.
        /// </summary>
        /// <returns type="String">
        /// The appointment border style.
        /// </returns>
        },
        set_borderStyle: function(style) {
        /// <summary>
        /// Sets the appointment border style.
        /// </summary>
        /// <param name="style" type="String" mayBeNull="false" optional="false">
        /// The appointment border style. For example "solid", "dashed".
        /// </param>
        },
        get_borderColor: function() {
        /// <summary>
        /// Gets the appointment border color.
        /// </summary>
        /// <returns type="String">
        /// The appointment border style.
        /// </returns>
        },
        set_borderColor: function(color) {
        /// <summary>
        /// Sets the appointment border color.
        /// </summary>
        /// <param name="color" type="String" mayBeNull="false" optional="false">
        /// The appointment border color. For example "#b0c4de".
        /// </param>
        },
        get_borderWidth: function() {
        /// <summary>
        /// Gets the appointment border width.
        /// </summary>
        /// <returns type="String">
        /// The appointment border width.
        /// </returns>
        },
        set_borderWidth: function(width) {
        /// <summary>
        /// Sets the appointment border width.
        /// </summary>
        /// <param name="color" type="String" mayBeNull="false" optional="false">
        /// The appointment border width. For example "1px".
        /// </param>
        },
        get_visible: function() {
        /// <summary>
        /// Gets a value indicating if the appointment is currently visible.
        /// </summary>
        /// <returns type="Boolean">
        /// true if the appointment is rendered; false otherwise.
        /// </returns>
        },
        get_owner: function() {
        /// <summary>
        /// Gets the owner scheduler.
        /// </summary>
        /// <returns type="Telerik.Web.UI.RadScheduler">
        /// The owner scheduler.
        /// </returns>
        },
        get_allowEdit: function() {
        /// <summary>
        /// Gets a value indicating if the appointment is editable.
        /// </summary>
        /// <returns type="Boolean">
        /// true if the appointment is editable; false otherwise.
        /// </returns>
        },
        set_allowEdit: function(value) {
        /// <summary>
        /// Sets a value indicating if the appointment is editable.
        /// </summary>
        /// <param name="value" type="Boolean" mayBeNull="false" optional="false">
        /// true if the appointment is editable; false otherwise.
        /// </param>
        },
        get_allowDelete: function() {
        /// <summary>
        /// Gets a value indicating if the appointment is deletable.
        /// </summary>
        /// <returns type="Boolean">
        /// true if the appointment is deletable; false otherwise.
        /// </returns>
        },
        set_allowDelete: function(value) {
        /// <summary>
        /// Sets a value indicating if the appointment is deletable.
        /// </summary>
        /// <param name="value" type="Boolean" mayBeNull="false" optional="false">
        /// true if the appointment is deletable; false otherwise.
        /// </param>
        },
        get_element: function() {
        /// <summary>
        /// Gets the DOM element representing the appointment.
        /// </summary>
        /// <returns domElement="true">
        /// The DOM element representing the appointment.
        /// </returns>
        },
        get_elements: function() {
        /// <summary>
        /// Gets the DOM elements representing the appointment. Appointments that span multiple days have multiple dom elements.
        /// </summary>
        /// <returns elementDomElement="true">
        /// The DOM elements representing the appointment.
        /// </returns>
        },
        get_timeSlot: function() {
        /// <summary>
        /// Gets the time slot that the appointment is in.
        /// </summary>
        /// <returns type="Telerik.Web.UI.ISchedulerTimeSlot">
        /// The time slot that the appointment is in.
        /// </returns>
        },
        get_attributes: function() {
        /// <summary>
        /// Gets a collection of all attributes of the appointment.
        /// </summary>
        /// <returns type="Telerik.Web.UI.SchedulerAttributeCollection">
        /// Collection of all attributes of the appointment.
        /// </returns>
        },
        get_recurrenceState: function() {
        /// <summary>
        /// Gets the recurrence state of the appointment.
        /// </summary>
        /// <returns type="Telerik.Web.UI.RecurrenceState">
        /// The recurrence state of the appointment as an enum value of type Telerik.Web.UI.RecurrenceState.
        /// </returns>
        },
        get_recurrenceRule: function() {
        /// <summary>
        /// Gets the recurrence rule of this appointment.
        /// </summary>
        /// <returns type="Telerik.Web.UI.RecurrenceState">
        /// The recurrence rule of the appointment.
        /// </returns>
        },
        set_recurrenceRule: function(value) {
        /// <summary>
        /// Sets the recurrence rule of this appointment.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// the recurrence rule of this appointment.
        /// </param>
        },
        get_recurrenceParentID: function() {
        /// <summary>
        /// Gets the ID of the parent appointment if the current appointment is a recurrence exception.
        /// </summary>
        /// <returns type="String">
        /// The ID of the parent appointment if the current appointment is a recurrence exception.
        /// </returns>
        },
        get_resources: function() {
        /// <summary>
        /// Gets a collection of the appointment resources.
        /// </summary>
        /// <returns type="Telerik.Web.UI.SchedulerResourceCollection">
        /// Collection of the appointment resources.
        /// </returns>
        },
        get_contextMenuID: function() {
        /// <summary>
        /// Gets the ID of the context menu associated with the appointment.
        /// </summary>
        /// <returns type="String">
        /// The ID of the context menu associated with the appointment.
        /// </returns>
        },
        set_contextMenuID: function(value) {
        /// <summary>
        /// Sets the ID of the context menu associated with the appointment.
        /// </summary>
        /// <param name="value" type="String">
        /// The ID of the context menu associated with the appointment.
        /// </param>
        }
};

Telerik.Web.UI.SchedulerAppointmentCollection = function(scheduler) {
    /// <summary>Initializes a new instance of RadScheduler appointment collection</summary>
}
Telerik.Web.UI.SchedulerAppointmentCollection.prototype = {
        add: function(appointment) {
			/// <summary>
			/// Adds the specified appointment to the collection.
			/// </summary>
			/// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" optional="false" mayBeNull="false">
			/// The appointment to add.
			/// </param>
        },
        insert: function(index, appointment) {
			/// <summary>
			/// Inserts the specified appointment at the specified index in the collection.
			/// </summary>
            /// <param name="index" type="Number">
            /// The index at which to insert the appointment
            /// </param>
			/// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" optional="false" mayBeNull="false">
			/// The appointment to add.
			/// </param>
        },
        remove: function(appointment, deleteSeries) {
			/// <summary>
			/// Removes the specified appointment from the collection.
			/// </summary>
			/// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" optional="false" mayBeNull="false">
			/// The appointment instance to remove.
			/// </param>
			/// <param name="deleteSeries" type="Boolean" mayBeNull="false" optional="true">
			/// For recurring appointments only.
			///	True if you want to delete the recurring series;
			///	False to delete only this occurrence.
			/// </param>
        },
        removeAt: function(index, deleteSeries) {
			/// <summary>
			/// Removes the appointment at the specified index from the collection.
			/// </summary>
            /// <param name="index" type="Number">
            /// The index from which to remove the appointment
            /// </param>
			/// <param name="deleteSeries" type="Boolean" mayBeNull="false" optional="true">
			/// For recurring appointments only.
			///	True if you want to delete the recurring series;
			///	False to delete only this occurrence.
			/// </param>
        },
        getAppointment: function(index) {
			/// <summary>
			/// Gets the appointment at the specified index in the collection.
			/// </summary>
			/// <param name="index" type="Number">
			/// The index from which to retrieve the appointment
			/// </param>
			/// <returns type="Telerik.Web.UI.SchedulerAppointment">
			/// The appointment at the specified index.
			/// </returns>
        },
        indexOf: function(appointment) {
			/// <summary>
			/// Gets the index of the specified appointment in the collection. Returns -1 if the resource is not in the collection.
			/// </summary>
			/// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment">
			/// The appointment for which to search in the collection
			/// </param>
			/// <returns type="Number">
			/// The index of the specified appointment in the collection; -1 if the Appointment is not in the collection
			/// </returns>
        },
        forEach: function(lambda) {
			/// <summary>
			/// Executes the specified function for each appointment in the collection.
			/// The appointment is passed as first argument to the function.
			/// </summary>
			/// <param name="lambda" type="Function">
			/// The function to execute for each appointment in the collection. For example function(apt) {  }
			/// </param>
        },
        getAppointmentsInRange: function(start, end) {
			/// <summary>
			/// Gets a collection of all appointments in the specified range.
			/// </summary>
			/// <param name="start" type="Date">
			/// Range start
			/// </param>
			/// <param name="end" type="Date">
			/// Range end
			/// </param>
			/// <returns type="Telerik.Web.UI.SchedulerAppointmentCollection">
			/// A collection of all appointments in the specified range
			/// </returns>
        },
        getAppointmentsStartingInRange: function(start, end) {
			/// <summary>
			/// Gets a collection of all appointments that start in the specified range.
			/// </summary>
			/// <param name="start" type="Date">
			/// Range start
			/// </param>
			/// <param name="end" type="Date">
			/// Range end
			/// </param>
			/// <returns type="Telerik.Web.UI.SchedulerAppointmentCollection">
			/// A collection of all appointments that start in the specified range
			/// </returns>
        },
        findAll: function(predicate) {
			/// <summary>
			/// Returns a collection of appointments that satisfy the specified predicate.
			/// The appointment is passed as first argument of the predicate.
			/// If the predicate returns true the appointment is included in the result collection.
			/// </summary>
			/// <param name="predicate" type="Function">
			/// The function to execute for each appointment in the collection. For example function(apt) { return true; }
			/// </param>
			/// <returns type="Telerik.Web.UI.SchedulerAppointmentCollection">
			/// A collection of all appointments matching the predicate
			/// </returns>
        },
        find: function(predicate) {
			/// <summary>
			/// Returns the first appointments that satisfies the specified predicate.
			/// The appointment is passed as first argument of the predicate.
			/// If the predicate returns true the appointment is returned.
			/// </summary>
			/// <param name="predicate" type="Function">
			/// The function to execute for each appointment in the collection. For example function(apt) { return true; }
			/// </param>
			/// <returns type="Telerik.Web.UI.SchedulerAppointment">
			/// An appointment that matches the predicate
			/// </returns>
        },
        findByID: function(id) {
			/// <summary>
			/// Gets the appointment with the specified ID.
			/// </summary>
			/// <param name="id" type="String">
			/// The ID of the appointment
			/// </param>
			/// <returns type="Telerik.Web.UI.SchedulerAppointment">
			/// The appointment with the specified ID; null if none is found.
			/// </returns>
        },
        findByResource: function(value) {
			/// <summary>
			/// Gets the first appointment that contains the specified resource.
			/// </summary>
			/// <param name="value" type="Telerik.Web.UI.SchedulerResource">
			/// The resource for which to search for
			/// </param>
			/// <returns type="Telerik.Web.UI.SchedulerAppointment">
			/// The first appointment that contains the specified appointment; null if none is found.
			/// </returns>
        },
        get_count: function() {
			/// <summary>
			/// Gets the number of appointments in the collection.
			/// </summary>
			/// <returns type="Number">
			/// The number of appointments in the collection.
			/// </returns>
        }
}

Telerik.Web.UI.SchedulerResource = function() {
    /// <summary>Initializes a new instance of RadScheduler resource</summary>
}
Telerik.Web.UI.SchedulerResource.prototype = {
        get_key: function() {
        /// <summary>
        /// Gets the unique key of this resource.
        /// </summary>
        /// <returns type="String">
        /// The unique key of this resource.
        /// </returns>
        },
        set_key: function(value) {
        /// <summary>
        /// Sets the resource key.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The resource key.
        /// </param>
        },
        get_type: function() {
        /// <summary>
        /// Gets the resource type.
        /// </summary>
        /// <returns type="String">
        /// The resource type.
        /// </returns>
        },
        set_type: function(value) {
        /// <summary>
        /// Sets the resource type.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The resource type.
        /// </param>
        },
        get_text: function() {
        /// <summary>
        /// Gets the resource text.
        /// </summary>
        /// <returns type="String">
        /// The resource text.
        /// </returns>
        },
        set_text: function(value) {
        /// <summary>
        /// Sets the resource text.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The resource text.
        /// </param>
        },
        get_available: function() {
        /// <summary>
        /// Gets a value indicating if the resource is available.
        /// </summary>
        /// <returns type="Boolean">
        /// true if the resource is available; false otherwise.
        /// </returns>
        },
        set_available: function(value) {
        /// <summary>
        /// Sets a value indicating if the resource is available.
        /// </summary>
        /// <param name="value" type="Boolean" mayBeNull="false" optional="false">
        /// true if the resource is available; false otherwise.
        /// </param>
        },
        get_cssClass: function() {
        /// <summary>
        /// Gets the CSS class name to be added to appointments that have this resource.
        /// </summary>
        /// <returns type="String">
        /// The CSS class name to be added to appointments that have this resource.
        /// </returns>
        },
        set_cssClass: function(value) {
        /// <summary>
        /// Sets the CSS class name to be added to appointments that have this resource.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The CSS class name to be added to appointments that have this resource.
        /// </param>
        },
        get_attributes: function() {
        /// <summary>
        /// Gets a collection of all attributes of the resource.
        /// </summary>
        /// <returns type="Telerik.Web.UI.SchedulerAttributeCollection">
        /// Collection of all attributes of the resource.
        /// </returns>
        }
}

Telerik.Web.UI.SchedulerResourceCollection = function() {
    /// <summary>Initializes a new instance of RadScheduler resource collection</summary>
}
Telerik.Web.UI.SchedulerResourceCollection.prototype = {
        add: function(resource) {
			/// <summary>
			/// Adds the specified resource to the collection.
			/// </summary>
			/// <param name="resource" type="Telerik.Web.UI.SchedulerResource" optional="false" mayBeNull="false">
			/// The resource to add.
			/// </param>
        },
        insert: function(index, resource) {
			/// <summary>
			/// Inserts the specified resource at the specified index in the collection.
			/// </summary>
            /// <param name="index" type="Number">
            /// The index at which to insert the resource
            /// </param>
			/// <param name="resource" type="Telerik.Web.UI.SchedulerResource" optional="false" mayBeNull="false">
			/// The resource to add.
			/// </param>
        },
        remove: function(resource) {
			/// <summary>
			/// Removes the specified resource from the collection.
			/// </summary>
			/// <param name="resource" type="Telerik.Web.UI.SchedulerResource" optional="false" mayBeNull="false">
			/// The resource instance to remove.
			/// </param>
        },
        removeAt: function(index) {
			/// <summary>
			/// Removes the resource at the specified index from the collection.
			/// </summary>
            /// <param name="index" type="Number">
            /// The index from which to remove the resource
            /// </param>
        },
        indexOf: function(resource) {
			/// <summary>
			/// Gets the index of the specified resource in the collection. Returns -1 if the resource is not in the collection.
			/// </summary>
			/// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment">
			/// The appointment for which to search in the collection
			/// </param>
			/// <returns type="Number">
			/// The index of the specified appointment in the collection; -1 if the Appointment is not in the collection
			/// </returns>
        },
        removeResourcesByType: function(resourceType) {
			/// <summary>
			/// Removes the resources with the specified type from the collection.
			/// </summary>
			/// <param name="resourceType" type="String" optional="false" mayBeNull="false">
			/// The resource type to remove.
			/// </param>
        },
        clear: function() {
			/// <summary>
			/// Clears the collection of all resources in it.
			/// </summary>
        },
        forEach: function(lambda) {
			/// <summary>
			/// Executes the specified function for each resource in the collection.
			/// The resource is passed as first argument to the function.
			/// </summary>
			/// <param name="lambda" type="Function">
			/// The function to execute for each resource in the collection. For example function(res) {  }
			/// </param>
        },
        getResource: function(index) {
			/// <summary>
			/// Gets the resource at the specified index in the collection.
			/// </summary>
			/// <param name="index" type="Number">
			/// The index from which to retrieve the resource
			/// </param>
			/// <returns type="Telerik.Web.UI.SchedulerResource">
			/// The resource at the specified index.
			/// </returns>
        },
        getResourcesByType: function(type) {
			/// <summary>
			/// Gets a collection of all resources of the specified type.
			/// </summary>
			/// <param name="type" type="String">
			/// The resource type for which to look for
			/// </param>
			/// <returns type="Telerik.Web.UI.SchedulerResourceCollection">
			/// A collection of all resources of the specified type
			/// </returns>
        },
        getResourceByType: function(type) {
			/// <summary>
			/// Gets the first resource of the specified type.
			/// </summary>
			/// <param name="type" type="String">
			/// The resource type for which to look for
			/// </param>
			/// <returns type="Telerik.Web.UI.SchedulerResource">
			/// The first resources of the specified type; null if none exists
			/// </returns>
        },
        findAll: function(predicate) {
			/// <summary>
			/// Returns a collection of resources that satisfy the specified predicate.
			/// The resource is passed as first argument of the predicate.
			/// If the predicate returns true the resource is included in the result collection.
			/// </summary>
			/// <param name="predicate" type="Function">
			/// The function to execute for each resource in the collection. For example function(res) { return true; }
			/// </param>
			/// <returns type="Telerik.Web.UI.SchedulerResourceCollection">
			/// A collection of all resources matching the predicate
			/// </returns>
        },
        getResourceByTypeAndKey: function(type, key) {
			/// <summary>
			/// Gets the resource of the specified type with the specified key.
			/// </summary>
			/// <param name="type" type="String">
			/// The resource type for which to look for
			/// </param>
			/// <param name="key" type="String">
			/// The resource key for which to look for
			/// </param>
			/// <returns type="Telerik.Web.UI.SchedulerResource">
			/// The resources of the specified type with the specified key; null if none exists
			/// </returns>
        },
        clone: function() {
			/// <summary>
			/// Creates a shallow copy of the collection
			/// </summary>
			/// <returns type="Telerik.Web.UI.SchedulerResourceCollection">
			/// A shallow copy of the current collection
			/// </returns>
        },
        get_count: function() {
			/// <summary>
			/// Gets the number of resources in the collection.
			/// </summary>
			/// <returns type="Number">
			/// The number of resources in the collection
			/// </returns>
        }
}

Telerik.Web.UI.ResourceType = function() {
    /// <summary>Initializes a new instance of RadScheduler resource type</summary>
}
Telerik.Web.UI.ResourceType.prototype = {
        get_name: function() {
			/// <summary>
			/// Gets the resource type name
			/// </summary>
			/// <returns type="String">
			/// The resource type name
			/// </returns>
        },
        set_name: function(value) {
			/// <summary>
			/// Sets the resource type name
			/// </summary>
			/// <param name="value" type="String">
			/// The resource type name
			/// </param>
        },
        get_allowMultipleValues: function() {
			/// <summary>
			/// Gets a value indicating if the resource type allows multiple resource values
			/// </summary>
			/// <returns type="Boolean">
			/// true if multiple resource values are allowed; false otherwise
			/// </returns>
        }
}

Telerik.Web.UI.ResourceTypeCollection = function() {
    /// <summary>Initializes a new instance of RadScheduler resource type collection</summary>
}
Telerik.Web.UI.ResourceTypeCollection.prototype = {
        add: function(resourceType) {
			/// <summary>
			/// Adds the specified resource type to the collection.
			/// </summary>
			/// <param name="resourceType" type="Telerik.Web.UI.ResourceType" optional="false" mayBeNull="false">
			/// The resource type to add.
			/// </param>
        },
        insert: function(index, resourceType) {
			/// <summary>
			/// Inserts the specified resource type at the specified index in the collection.
			/// </summary>
            /// <param name="index" type="Number">
            /// The index at which to insert the resource type
            /// </param>
			/// <param name="resourceType" type="Telerik.Web.UI.ResourceType" optional="false" mayBeNull="false">
			/// The resource type to add.
			/// </param>
        },
        remove: function(resourceType) {
			/// <summary>
			/// Removes the specified resource type from the collection.
			/// </summary>
			/// <param name="resourceType" type="Telerik.Web.UI.ResourceType" optional="false" mayBeNull="false">
			/// The resource type instance to remove.
			/// </param>
        },
        removeAt: function(index) {
			/// <summary>
			/// Removes the resource type at the specified index from the collection.
			/// </summary>
            /// <param name="index" type="Number">
            /// The index from which to remove the resource type
            /// </param>
        },
        clear: function() {
			/// <summary>
			/// Clears the collection of all resource types in it.
			/// </summary>
        },
        forEach: function(lambda) {
			/// <summary>
			/// Executes the specified function for each resource type in the collection.
			/// The resource type is passed as first argument to the function.
			/// </summary>
			/// <param name="lambda" type="Function">
			/// The function to execute for each resource type in the collection. For example function(resType) {  }
			/// </param>
        },
        getResourceType: function(index) {
			/// <summary>
			/// Gets the resource type at the specified index in the collection.
			/// </summary>
			/// <param name="index" type="Number">
			/// The index from which to retrieve the resource type
			/// </param>
			/// <returns type="Telerik.Web.UI.ResourceType">
			/// The resource type at the specified index.
			/// </returns>
        },
        getResourceTypeByName: function(name) {
			/// <summary>
			/// Gets the resource type with the specified name.
			/// </summary>
			/// <param name="name" type="String">
			/// The resource type name to look for
			/// </param>
			/// <returns type="Telerik.Web.UI.ResourceType">
			/// The resource type with the specified name; null if none is found.
			/// </returns>
        },
        findAll: function(predicate) {
			/// <summary>
			/// Returns a collection of resource types that satisfy the specified predicate.
			/// The resource type is passed as first argument of the predicate.
			/// If the predicate returns true the resource type is included in the result collection.
			/// </summary>
			/// <param name="predicate" type="Function">
			/// The function to execute for each resource type in the collection. For example function(resType) { return true; }
			/// </param>
			/// <returns type="Telerik.Web.UI.ResourceTypeCollection">
			/// A collection of all resource types matching the predicate
			/// </returns>
        },
        get_count: function() {
			/// <summary>
			/// Gets the number of resources in the collection.
			/// </summary>
			/// <returns type="Number">
			/// The number of resource types in the collection
			/// </returns>
        }
}

Telerik.Web.UI.SchedulerAttributeCollection = function() {
    /// <summary>Initializes a new instance of RadScheduler attribute collection</summary>
}
Telerik.Web.UI.SchedulerAttributeCollection.prototype = {
        getAttribute: function(key) {
			/// <summary>
			/// Gets the attribute value for the specified key.
			/// </summary>
			/// <param name="key" type="String">
			/// The key to search for
			/// </param>
			/// <returns type="String">
			/// The attribute value for the specified key; null if none is found.
			/// </returns>
        },
        setAttribute: function(key, value) {
			/// <summary>
			/// Sets the attribute value for the specified key.
			/// </summary>
			/// <param name="key" type="String">
			/// The attribute key
			/// </param>
			/// <param name="value" type="String">
			/// The attribute value
			/// </param>
        },
        forEach: function(lambda) {
			/// <summary>
			/// Executes the specified function for each attribute in the collection.
			/// The attribute key is passed as first argument to the function and the value as a second.
			/// </summary>
			/// <param name="lambda" type="Function">
			/// The function to execute for each attribute in the collection. For example function(key, value) {  }
			/// </param>
        },
        removeAttribute: function(key) {
			/// <summary>
			/// Removes the specified attribute from the collection.
			/// </summary>
			/// <param name="key" type="String" optional="false" mayBeNull="false">
			/// The attribute key to remove.
			/// </param>
        },
        clear: function() {
			/// <summary>
			/// Clears the collection of all attributes in it.
			/// </summary>
        },
        clone: function() {
			/// <summary>
			/// Creates a copy of the collection
			/// </summary>
			/// <returns type="Telerik.Web.UI.SchedulerAttributeCollection">
			/// A copy of the current collection
			/// </returns>
        },
        get_count: function() {
			/// <summary>
			/// Gets the number of attributes in the collection.
			/// </summary>
			/// <returns type="Number">
			/// The number of attributes in the collection
			/// </returns>
        }
}


Telerik.Web.UI.ResourceStyleMapping = function(data) {
    /// <summary>Initializes a new instance of RadScheduler resource style mapping</summary>
}
Telerik.Web.UI.ResourceStyleMapping.prototype = {
        get_key: function() {
			/// <summary>
			/// Gets the unique key of the resource to match.
			/// </summary>
			/// <returns type="String">
			/// The unique key of the resource to match.
			/// </returns>
        },
        set_key: function(value) {
			/// <summary>
			/// Sets the unique key of the resource to match.
			/// </summary>
			/// <param name="value" type="String" mayBeNull="false" optional="false">
			/// The unique key of the resource to match.
			/// </param>
        },
        get_text: function() {
			/// <summary>
			/// Gets the resource text to match.
			/// </summary>
			/// <returns type="String">
			/// The resource text to match.
			/// </returns>
        },
        set_text: function(value) {
			/// <summary>
			/// Sets the resource text to match.
			/// </summary>
			/// <param name="value" type="String" mayBeNull="false" optional="false">
			/// The resource text to match.
			/// </param>
        },
        get_type: function() {
			/// <summary>
			/// Gets the resource type to match.
			/// </summary>
			/// <returns type="String">
			/// The resource type to match.
			/// </returns>
        },
        set_type: function(type) {
			/// <summary>
			/// Sets the resource type to match.
			/// </summary>
			/// <param name="type" type="String" mayBeNull="false" optional="false">
			/// The resource type to match.
			/// </param>
        },
        get_applyCssClass: function() {
			/// <summary>
			/// Gets the cascading style sheet (CSS) class to render for appointments that use the matching resource
			/// </summary>
			/// <returns type="String">
			/// The cascading style sheet (CSS) class to render for appointments that use the matching resource.
			/// </returns>
        },
        set_applyCssClass: function(applyCssClass) {
			/// <summary>
			/// Sets the cascading style sheet (CSS) class to render for appointments that use the matching resource.
			/// </summary>
			/// <param name="applyCssClass" type="String" mayBeNull="false" optional="false">
			/// The cascading style sheet (CSS) class to render for appointments that use the matching resource.
			/// </param>
        }
}

Telerik.Web.UI.ResourceStyleMappingCollection = function() {
    /// <summary>Initializes a new instance of RadScheduler resource style mapping collection</summary>
}
Telerik.Web.UI.ResourceStyleMappingCollection.prototype = {
        add: function(mapping) {
			/// <summary>
			/// Adds the specified resource style mapping to the collection.
			/// </summary>
			/// <param name="mapping" type="Telerik.Web.UI.ResourceStyleMapping" optional="false" mayBeNull="false">
			/// The resource style mapping to add.
			/// </param>
        },
        getStyleMapping: function(index) {
			/// <summary>
			/// Gets the resource style mapping at the specified index in the collection.
			/// </summary>
			/// <param name="index" type="Number">
			/// The index from which to retrieve the resource style mapping
			/// </param>
			/// <returns type="Telerik.Web.UI.ResourceStyleMapping">
			/// The resource style mapping at the specified index.
			/// </returns>
        },
        getMatchingClasses: function(resource) {
			/// <summary>
			/// Gets a collection of all resource style mapping matching the specified resource.
			/// </summary>
			/// <param name="resource" type="Telerik.Web.UI.SchedulerResource">
			/// The resource to look for
			/// </param>
			/// <returns elementType="Telerik.Web.UI.ResourceStyleMapping">
			/// An array of all matching resource style mappings
			/// </returns>
        },
        forEach: function(lambda) {
			/// <summary>
			/// Executes the specified function for each resource style mapping in the collection.
			/// The resource style mapping is passed as first argument to the function.
			/// </summary>
			/// <param name="lambda" type="Function">
			/// The function to execute for each resource style mapping in the collection. For example function(resStyleMapping) {  }
			/// </param>
        },
        get_count: function() {
			/// <summary>
			/// Gets the number of resource style mappings in the collection.
			/// </summary>
			/// <returns type="Number">
			/// The number of resource style mappings in the collection.
			/// </returns>
        }
}

// ---------- Telerik.Web.UI.ISchedulerModel Interface ----------
Telerik.Web.UI.ISchedulerModel = function() { }
Telerik.Web.UI.ISchedulerModel.prototype =
{
	getTimeSlotFromDomElement: function(domElement)
	{
		/// <summary>
		/// Gets the time slot associated with the specified DOM element.
		/// </summary>
		/// <param name="domElement" domElement="true" optional="false" mayBeNull="false">
		/// The time slot DOM element
		/// </param>
		/// <returns type="Telerik.Web.UI.ISchedulerTimeSlot">
		/// The time slot instance associated with the specified DOM element.
		/// </returns>
	},
	
	getTimeSlotForAppointment: function(appointment)
	{
		/// <summary>
		/// Gets the time slot that will contain the specified appointment if it's added to the scheduler.
		/// </summary>
		/// <param name="appointment" type="Telerik.Web.UI.SchedulerAppointment" optional="false" mayBeNull="false">
		/// The appointment for which to find the time slot.
		/// </param>
		/// <returns type="Telerik.Web.UI.ISchedulerTimeSlot">
		/// The time slot instance associated with the specified DOM element.
		/// </returns>
	},
	
	get_visibleRangeStart : function()
	{
		/// <summary>
		/// Gets the first visible date of the current view.
		/// </summary>
		/// <returns type="Date">
		/// The first visible date of the current view.
		/// </returns>
	},
	
	get_visibleRangeEnd : function()
	{
		/// <summary>
		/// Gets the last visible date of the current view.
		/// </summary>
		/// <returns type="Date">
		/// The last visible date of the current view.
		/// </returns>
	}
}

// ---------- Telerik.Web.UI.ISchedulerTimeSlot Interface ----------
Telerik.Web.UI.ISchedulerTimeSlot = function() { }
Telerik.Web.UI.ISchedulerTimeSlot.prototype =
{	
	get_index: function()
	{
		/// <summary>
		/// Gets the hierarchical index of the time slot.
		/// </summary>
		/// <returns type="String">
		/// The hierarchical index of the time slot.
		/// </returns>
	},
	
	get_isAllDay: function()
	{
		/// <summary>
		/// Gets a value indicating if the time slot is an all-day or not.
		/// </summary>
		/// <returns type="Boolean">
		/// true if this is an all-day time slot; false otherwise.
		/// </returns>
	},
	
	get_startTime: function()
	{
		/// <summary>
		/// Gets the start time of the time slot.
		/// </summary>
		/// <returns type="Date">
		/// The start time of the time slot.
		/// </returns>
	},
	
	get_endTime: function()
	{
		/// <summary>
		/// Gets the end time of the time slot.
		/// </summary>
		/// <returns type="Date">
		/// The end time of the time slot.
		/// </returns>
	},
	
	get_duration: function()
	{
		/// <summary>
		/// Gets the duration of the time slot in milliseconds.
		/// </summary>
		/// <returns type="Number">
		/// The duration of the time slot in milliseconds.
		/// </returns>
	},
	
	get_durationInMinutes: function()
	{
		/// <summary>
		/// Gets the duration of the time slot in minutes.
		/// </summary>
		/// <returns type="Number">
		/// The duration of the time slot in minutes.
		/// </returns>
	},
	
	get_domElement: function()
	{
		/// <summary>
		/// Gets the DOM elment of this time slot.
		/// </summary>
		/// <returns domElement="true">
		/// The DOM elment of this time slot.
		/// </returns>
	}
}

Telerik.Web.UI.SchedulerViewType = function()
{
    /// <summary>
    /// Specifies the view mode of a RadScheduler control.
    /// </summary>
    /// <field name="DayView" type="Number" integer="true" static="true">
    /// A view that spans a single day. All day-events are displayed in a separate row on top.
    /// </field>
    /// <field name="WeekView" type="Number" integer="true" static="true">
    /// A view that spans seven days. Each day is displayed as in DayView mode and the current date is highlighted.
    /// </field>
    /// <field name="MonthView" type="Number" integer="true" static="true">
    /// A view that spans a whole month. The current date is highlighted.
    /// </field>
    /// <field name="TimelineView" type="Number" integer="true" static="true">
    /// The Timeline view spans an arbitrary time period. It is divided in slots with user selectable duration.
    /// </field>
    /// <field name="MultiDayView" type="Number" integer="true" static="true">
    /// Similar to WeekView, but shows a fixed number of days and does not observe week boundaries.
    /// </field>
};
Telerik.Web.UI.SchedulerViewType.prototype = { 
	DayView: 0,
	WeekView: 1,
	MonthView: 2,
	ResourceView: 3,
    TimelineView: 4,
    MultiDayView: 5
};
Telerik.Web.UI.SchedulerViewType.registerEnum("Telerik.Web.UI.SchedulerViewType");

Telerik.Web.UI.RecurrenceState = function()
{
    /// <summary>
    /// Specifies the recurrence state of the appointment.
    /// </summary>
    /// <field name="NotRecurring" type="Number" integer="true" static="true">
    /// The appointment does not recur.
    /// </field>
    /// <field name="Master" type="Number" integer="true" static="true">
    /// The appointment recurs and this is the original appointment that was used to create the recurrence.
    /// </field>
    /// <field name="Occurrence" type="Number" integer="true" static="true">
    /// The appointment recurs and this is a single occurrence from the recurrence series.
    /// </field>
    /// <field name="Exception" type="Number" integer="true" static="true">
    /// This appointment was part of recurrence series, but was later modified.
    /// </field>
};
Telerik.Web.UI.RecurrenceState.prototype =
{
	NotRecurring : 0,
	Master : 1,
	Occurrence : 2,
	Exception : 3
};
Telerik.Web.UI.RecurrenceState.registerEnum("Telerik.Web.UI.RecurrenceState");

Telerik.Web.UI.SchedulerNavigationCommand = function ()
{
    /// <summary>
    /// Specifies the type of navigation commands that are supported by RadScheduler.
    /// </summary>
    /// <field name="SwitchToDayView" type="Number" integer="true" static="true">
    /// Indicates that RadScheduler is about to switch to Day View as a result of user interaction.
    /// </field>
    /// <field name="SwitchToWeekView" type="Number" integer="true" static="true">
    /// Indicates that RadScheduler is about to switch to Week View as a result of user interaction.
    /// </field>
    /// <field name="SwitchToMonthView" type="Number" integer="true" static="true">
    /// Indicates that RadScheduler is about to switch to Month View as a result of user interaction.
    /// </field>
    /// <field name="SwitchToTimelineView" type="Number" integer="true" static="true">
    /// Indicates that RadScheduler is about to switch to Timeline View as a result of user interaction.
    /// </field>
    /// <field name="SwitchToMultiDayView" type="Number" integer="true" static="true">
    /// Indicates that RadScheduler is about to switch to Multi-day View as a result of user interaction.
    /// </field>
    /// <field name="NavigateToNextPeriod" type="Number" integer="true" static="true">
    /// Indicates that RadScheduler is about to switch to the next time period as a result of user interaction.
    /// </field>
    /// <field name="NavigateToPreviousPeriod" type="Number" integer="true" static="true">
    /// Indicates that RadScheduler is about to switch to the previous time period as a result of user interaction.
    /// </field>
    /// <field name="SwitchToSelectedDay" type="Number" integer="true" static="true">
    /// Indicates that RadScheduler is about to switch to a given date.
    /// </field>
    /// <field name="SwitchFullTime" type="Number" integer="true" static="true">
    /// Indicates that RadScheduler is about to switch from/to 24-hour view as a result of user interaction.
    /// </field>
    /// <field name="DisplayNextAppointmentSegment" type="Number" integer="true" static="true">
    /// Indicates that RadScheduler is about to adjust its visible range, so the next appointment segment becomes visible.
    /// </field>
    /// <field name="DisplayPreviousAppointmentSegment" type="Number" integer="true" static="true">
    /// Indicates that RadScheduler is about to adjust its visible range, so the previous appointment segment becomes visible.
    /// </field>
    /// <field name="NavigateToSelectedDate" type="Number" integer="true" static="true">
    /// Indicates that RadScheduler is about to switch to a different date that the user has selected from the integrated date picker.
    /// </field>
    
};
Telerik.Web.UI.SchedulerNavigationCommand.prototype = {
	SwitchToDayView: 0,
    SwitchToWeekView: 1,
    SwitchToMonthView: 2,
    SwitchToTimelineView: 3,
    SwitchToMultiDayView: 4,
    NavigateToNextPeriod: 5,
    NavigateToPreviousPeriod: 6,
    SwitchToSelectedDay: 7,
    SwitchFullTime: 8,
    DisplayNextAppointmentSegment: 9,
    DisplayPreviousAppointmentSegment: 10,
    NavigateToSelectedDate: 11
};
Telerik.Web.UI.SchedulerNavigationCommand.registerEnum("Telerik.Web.UI.SchedulerNavigationCommand");
    
Telerik.Web.UI.DayOfWeek = function ()
{
    /// <summary>
    /// Specifies the day of week.
    /// </summary>
    /// <field name="Sunday" type="Number" integer="true" static="true">
    /// Sunday.
    /// </field>
    /// <field name="Monday" type="Number" integer="true" static="true">
    /// Monday.
    /// </field>
    /// <field name="Tuesday" type="Number" integer="true" static="true">
    /// Tuesday.
    /// </field>
    /// <field name="Wednesday" type="Number" integer="true" static="true">
    /// Wednesday.
    /// </field>
    /// <field name="Thursday" type="Number" integer="true" static="true">
    /// Thursday.
    /// </field>
    /// <field name="Friday" type="Number" integer="true" static="true">
    /// Friday.
    /// </field>
    /// <field name="Saturday" type="Number" integer="true" static="true">
    /// Saturday.
    /// </field>
};
Telerik.Web.UI.DayOfWeek.prototype = {
	Sunday: 0,
	Monday: 1,
	Tuesday: 2,
	Wednesday: 3,
	Thursday: 4,
	Friday: 5,
	Saturday: 6
};
Telerik.Web.UI.DayOfWeek.registerEnum("Telerik.Web.UI.DayOfWeek");

Telerik.Web.UI.SchedulerFormMode = function ()
{
    /// <summary>
    /// Specifies the type of RadScheduler edit/insert form.
    /// </summary>
    /// <field name="Hidden" type="Number" integer="true" static="true">
    /// Default value, not used.
    /// </field>
    /// <field name="Insert" type="Number" integer="true" static="true">
    /// Inline insert form.
    /// </field>
    /// <field name="Edit" type="Number" integer="true" static="true">
    /// Inline edit form.
    /// </field>
    /// <field name="AdvancedInsert" type="Number" integer="true" static="true">
    /// Advanced insert form.
    /// </field>
    /// <field name="AdvancedEdit" type="Number" integer="true" static="true">
    /// Advanced edit form.
    /// </field>
};
Telerik.Web.UI.SchedulerFormMode.prototype = {
	Hidden: 0,
	Insert: 1,
	Edit: 2,
	AdvancedInsert: 3,
	AdvancedEdit: 4
};
Telerik.Web.UI.SchedulerFormMode.registerEnum("Telerik.Web.UI.SchedulerFormMode");
$telerik.toDataPager = function(object)
{
    /// <summary>Casts an object to a RadDataPager instance.</summary>
    /// <returns type="Telerik.Web.UI.RadDataPager">A RadDataPager instance.</returns>
};
$telerik.findDataPager = function(id, parent)
{
    /// <summary>Finds a RadDataPager instance</summary>
    /// <param name='id'>A string that contains ID of the RadDataPager to find.</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadDataPager to find.</param>
    /// <returns type="Telerik.Web.UI.RadDataPager">The RadDataPager instance.</returns>
};

(function()
{

    Telerik.Web.UI.RadDataPager = function(element)
    {

        /// <summary>Initializes a new instance of RadDataPager.</summary>
        /// <param name='element' domElement='true'>The outermost DOM element of RadDataPager.</param>
    };
    
    Telerik.Web.UI.RadDataPager.prototype = {

        initialize: function()
        {
            /// <summary>Initializes the client instance of RadDataPager.</summary>
        },

        dispose: function()
        {
            /// <summary>Disposes the client instance of RadDataPager.</summary>
        },

        get_uniqueID: function()
        {
            /// <summary>Gets the unique id of RadDataPager's container.</summary>
            /// <value type='String'></value>
        },

        get_pageCount: function()
        {
            /// <summary>Gets the page count for the RadDatePager control.</summary>
            /// <value type='Number' integer='true' mayBeNull='false'></value>
        },

        get_startRowIndex: function()
        {
            /// <summary>Gets the index of the first record that is displayed on a page of data.</summary>
            /// <value type='Number' integer='true' mayBeNull='false'></value>
        },

        get_pageSize: function()
        {
            /// <summary>Gets the page size for the RadDataPager control.</summary>
            /// <value type='Number' integer='true' mayBeNull='false'></value>
        },

        get_totalRowCount: function()
        {
            /// <summary>Gets the total number of records that are displayed in the underlying data source.</summary>
            ///<value type='Number' integer='true' mayBeNull='false'></value>
        },

        get_currentPageIndex: function()
        {
            /// <summary>Gets the current page index for the RadDataPager control.</summary>
            ///<value type='Number' integer='true' mayBeNull='false'></value>
        },

        set_currentPageIndex: function(index)
        {
            /// <summary>Sets the current page index for the RadDataPager control.</summary>
            /// <param type='Number' name='index' integer='true'>The 0-based index of a page that will be set as current page.</param>
        },

        set_pageSize: function(size)
        {
            /// <summary>Sets the page size for the RadDataPager control.</summary>
            /// <param type='Number' integer='true' name='size'>The page size that will be set to the RadDataPager control.</param>
        },

        fireCommand: function(commandName, commandArgument)
        {
            ///<summary>Fires command with command name and command argument specified as arguments</summary>
            ///<param name='commandName' type='String'>The name of the command that will be executed. Possible values are listed here: http://www.telerik.com/help/aspnet-ajax/datapager-getting-familiar-with-client-side-api.html </param>
            ///<param name='commandArgument' type='String'>The command argument with which the command will be executed. Possible values are listed here: http://www.telerik.com/help/aspnet-ajax/datapager-getting-familiar-with-client-side-api.html </param>
        }

    };
    
    Telerik.Web.UI.DataPagerPageIndexChangingEventArgs = function(oldPageIndex, newPageIndex)
    {

        /// <summary>Initializes a new instance of DataPagerPageIndexChangingEventArgs.</summary>
        /// <param name='oldPageIndex'  type='Number' integer='true'>The 0-based index of the old page.</param>
        /// <param name='newPageIndex'  type='Number' integer='true'>The 0-based index of the new page.</param>
    };
    Telerik.Web.UI.DataPagerPageIndexChangingEventArgs.prototype =
    {

        get_oldPageIndex: function()
        {
            /// <summary>Returns the old page index for the RadDataPager control when paging.</summary>
            /// <value type='Number' integer='true' mayBeNull='false'></value>
        },

        get_newPageIndex: function()
        {
            /// <summary>Returns the new page index for the RadDataPager control when paging.</summary>
            /// <value type='Number' integer='true' mayBeNull='false'></value>
        },

        set_newPageIndex: function(index)
        {
            /// <summary>Sets the new page index for the RadDataPager control when paging.</summary>
            /// <param type='Number' integer='true' name='index'></param>
        }

    };
    
    Telerik.Web.UI.DataPagerPageSizeChangingEventArgs = function(oldPageSize, newPageSize)
    {
        /// <summary>Initializes a new instance of DataPagerPageSizeChangingEventArgs.</summary>
        /// <param name='oldPageSize'  type='Number' integer='true'>The old page size of the RadDataPager control.</param>
        /// <param name='newPageSize'  type='Number' integer='true'>The new page size of the RadDataPager control.</param>
    };
    Telerik.Web.UI.DataPagerPageSizeChangingEventArgs.prototype =
    {
        get_oldPageSize: function()
        {
            /// <summary>Returns the old page size for the RadDataPager control when paging.</summary>
            /// <value type='Number' integer='true' mayBeNull='false'></value>
        },

        get_newPageSize: function()
        {
            /// <summary>Returns the new page size for the RadDataPager control when paging.</summary>
            ///<value type='Number' integer='true' mayBeNull='false'></value>
        },

        set_newPageSize: function(size)
        {
            /// <summary>Sets the new page size for the RadDataPager control when paging.</summary>
            ///<param type='Number' integer='true' name='size'></param>
        }

    };
    
})();Telerik.Web.UI.RadListView = function() {
    /// <summary>Initializes a new instance of RadListView</summary>
};
Telerik.Web.UI.RadListView = function(element) {
    /// <summary>Initializes a new instance of RadListView</summary>
    // <param name='element' domElement='true'>The outermost DOM element of RadListView</param>    
};
$telerik.findListView = function(id, parent) {
    /// <summary>Finds a RadListView instance</summary>
    /// <param name='id'>A string that contains ID of the RadListView to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadListView to find</param>
    /// <returns type="Telerik.Web.UI.RadListView">The RadListView instance</returns>
};
$telerik.toListView = function(object) {
    /// <summary>Casts an object to a RadListView instance</summary>
    /// <returns type="Telerik.Web.UI.RadListView">A RadListView instance<returns>
};

Telerik.Web.UI.RadListView.prototype = {
    initialize: function() {
        ///<summary>Initializes the client instance of RadListView</summary>
    },
    dispose: function() {
        ///<summary><Disposes the client instance of RadListView/summary>
    },
    rebind: function() {
        ///<summary>Rebinds RadListView to its given data source</summary>
    },
    editItem: function(itemIndex) {
        ///<summary>Switches RadListView item into edit mode (with index specified as an argument)</summary>
        ///<param name='itemIndex' type='Number' integer='true'>Index of the item that will be edited</param>
    },
    updateItem: function(itemIndex) {
        ///<summary>Updates RadListView item (with index specified as an argument)</summary>
        ///<param name='itemIndex' type='Number' integer='true'>Index of the edited item that will be updated</param>
    },
    deleteItem: function(itemIndex) {
        ///<summary>Deletes RadListView item with index specified as an argument</summary>
        ///<param name='itemIndex' type='Number' integer='true'>Index of the item that will be deleted</param>
    },
    cancelUpdate: function(itemIndex) {
        ///<summary>Cancels RadListView item update (with index specified as an argument)</summary>
        ///<param name='itemIndex' type='Number' integer='true'>Index of the edited item for which update operation will be aborted</param>
    },
    showInsertItem: function(insertItemPosition) {
        ///<summary>Displays RadListView's insertion form</summary>
        ///<param name='insertItemPosition' type='String' optional='true'></param>
    },
    insertItem: function() {
        ///<summary>Inserts a new item in RadListView with values taken from its insertion form</summary>
    },
    cancelInsert: function() {
        ///<summary>Cancels insert operation and hides RadListView's insertion form</summary>
    },
    selectItem: function(itemIndex) {
        ///<summary>Selects RadListView item with index specified as an argument</summary>
        ///<param name='itemIndex' type='Number' integer='true'>Index of the item that will be selected</param>
    },
    deselectItem: function(itemIndex) {
        ///<summary>Deselects RadListView item with index specified as an argument</summary>
        ///<param name='itemIndex' type='Number' integer='true'>Index of the item that will be deselected</param>
    },
    page: function(command) {
        ///<summary>Navigates RadListView to the page specified as an argument. RadDataPager should be used for page navigation</summary>
        ///<param name='command' type='String'>The actual page to which the user will be navigated. Possible values are 'First', 'Prev', 'Next', 'Last' and numeric values</param>
    },
    fireCommand: function(commandName, commandArgument) {
        ///<summary>Fires command with command name and command argument specified as arguments</summary>
        ///<param name='commandName' type='String'>The name of the command that will be executed. Possible values are listed here: http://www.telerik.com/help/aspnet-ajax/firecommand.html </param>
        ///<param name='commandArgument' type='String'>The command argument with which the command will be executed. Possible values are listed here: http://www.telerik.com/help/aspnet-ajax/firecommand.html </param>
    },
    get_clientDataKeyValue: function() {
        ///<value type='Array' elementType='String' mayBeNull='true'>Gets two-dimensional array of client key values. Item indices and names stored in ClientDataKeyNames on the server can be used as array indices. 
        ///Example: get_clientDataKeyValue[0]["CustomerID"] - returnes the CustomerID ClientDataKeyValue for the first RadListView item</value>
    },
    get_pageCount: function() {
        ///<value type='Number' integer='true' mayBeNull='true'>Gets the page count in case paging for RadListView is enabled</value>
    },
    get_pageSize: function() {
        ///<value type='Number' integer='true' mayBeNull='true'>Gets the page size in case paging for RadListView is enabled</value>
    },
    set_pageSize: function(value) {
    },
    get_currentPageIndex: function() {
        ///<value type='Number' integer='true' mayBeNull='true'>Gets the current page index in case paging for RadListView is enabled</value>
    },
    set_currentPageIndex: function(value, doNotCallPage) {
    },
    get_uniqueID: function() {
        ///<value type='String'>Gets the unique id of RadListView's container</value>
    },
    get_clientSettings: function() {
        ///<value>Gets the current client settings applied for RadListView</value>
    },
    add_listViewCreating: function(handler) {
        /// <summary>Adds a handler for the listViewCreating event</summary>
        /// <param name="handler" type="Function">The handler for the listViewCreating event</param>
    },
    remove_listViewCreating: function(handler) {
    },
    add_listViewCreated: function(handler) {
        /// <summary>Adds a handler for the listViewCreated event</summary>
        /// <param name="handler" type="Function">The handler for the listViewCreated event</param>
    },
    remove_listViewCreated: function(handler) {
    },
    add_listViewDestroying: function(handler) {
        /// <summary>Adds a handler for the listViewDestroying event</summary>
        /// <param name="handler" type="Function">The handler for the listViewDestroying event</param>
    },
    remove_listViewDestroying: function(handler) {
    }
};

Telerik.Web.UI.RadListView.registerClass('Telerik.Web.UI.RadListView', Sys.UI.Control);

Telerik.Web.UI.RadListViewInsertItemPosition = function() {
    ///<summary>RadListViewInsertItemPosition enumeration</summary>
    /// <field name="None" type="Number" integer="true"/>
    /// <field name="FirstItem" type="Number" integer="true"/>
    /// <field name="LastItem" type="Number" integer="true"/>
};
Telerik.Web.UI.RadListViewInsertItemPosition.prototype =
{
    None: 0,
    FirstItem: 1,
    LastItem: 2
};
Telerik.Web.UI.RadListViewInsertItemPosition.registerEnum('Telerik.Web.UI.RadListViewInsertItemPosition');/// <reference Name="MicrosoftAjax.js">

$telerik.toDock = function(object)
{
	/// <summary>Casts an object to a RadDock instance.</summary>
	/// <returns type="Telerik.Web.UI.RadDock">A RadDock instance.<returns>
};
$telerik.findDock = function(id, parent)
{
	/// <summary>Finds a RadDock instance.</summary>
	/// <param name='id'>A string that contains ID of the RadDock to find.</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadDock to find.</param>
	/// <returns type="Telerik.Web.UI.RadDock">The RadDock instance.</returns>
};

(function()
{

	Telerik.Web.UI.RadDock = function(element)
	{
		/// <summary>Initializes a new instance of the Telerik.Web.UI.RadDock class.</summary>
		/// <param name='element' domElement='true'>The outermost DOM element of RadDock.</param>
	};
	Telerik.Web.UI.RadDock.prototype =
{

	get_dockZones: function()
	{
		/// <summary>Returns an array which contains all dock zones.</summary>
		/// <returns type='Telerik.Web.UI.RadDockZone[]'></returns>
	},

	/*dockingZoneHitTest: function(e)
	{
	/// <summary>Visits all dock zones and checks whether the dragged dock is over one of them.
	/// Returns the dock zone over which the dragged dock is poisitioned,null otherwise.
	///</summary>
	/// <param name='e'>ownerEvent</param>
	/// <returns type='Telerik.Web.UI.RadDockZone'>Returns the dock zone over
	/// which the dragged dock is poisitioned,null otherwise.</returns>
	},

	canDrop: function()
	{
	/// <summary>Checks whether the dock can be dropped outside a zone.</summary>
	/// <returns>Bool value indicating whether the dock can be dropped outside a zone.</returns>
	},
	drop: function()
	{
	/// <summary>Drops the dock outside a zone.</summary>
	},*/


	clone: function(id)
	{
		/// <summary>Clones the current Telerik.Web.UI.RadDock object.</summary>
		/// <param name='id' type='string' optional='true'>The string that will be set to the UniqueId of the cloned object.</param>
		/// <returns type='Telerik.Web.UI.RadDock'>The cloned Telerik.Web.UI.RadDock object.</returns>
	},

	getCommand: function(name)
	{
		/// <summary>Gets the command by the name specified.</summary>
		/// <param name='name' type='string' optional='false'>The name of the command.</param>
		/// <returns type='Telerik.Web.UI.DockCommand' mayBeNull='true'>The command with the given name.</returns>
	},

	get_handle: function()
	{
		/// <summary>Gets the current handle by which the dock can be dragged.</summary>
		/// <returns type='Object' mayBeNull='true' domElement='true'>The handle by which the dock can be dragged.</returns>
	},

	set_handle: function(element)
	{
		/// <summary>Sets a drag handle to the element passed as a parameter.</summary>
		/// <param name='element' type='Object' domElement='true' optional='false'></param>
	},

	/*getInvisibleParent: function(parent)
	{
	/// <summary>Gets the first invisible (dislay: none) parent element of dock's element, if there is such.</summary>
	/// <param name='parent' type='' domElement='true' optional='false'>The dock's parent element.</param>
	/// <returns type='' mayBeNull='true' domElement='true'>The invisible (display: none) parent element.</returns>
	},

	subtractPoints: function(p1, p2)
	{
	/// <summary></summary>
	/// <param name='p1' type='' domElement='' optional=''></param>
	/// <param name=' p2' type='' domElement='' optional=''></param>
	},

	addPoints: function(p1, p2)
	{
	/// <summary></summary>
	/// <param name='p1' type='' domElement='' optional=''></param>
	/// <param name=' p2' type='' domElement='' optional=''></param>
	},

	initialize: function()
	{
	/// <summary>Initialize the dock object.</summary>
	},*/

	undock: function()
	{
		/// <summary>
		/// Undocks the RadDock control from its containing zone.
		/// </summary>
	},

	get_contentContainer: function()
	{
		/// <summary>Gets a reference to the element of the dock's content container.</summary>
		/// <returns type='Object' mayBeNull='true' domElement='true'>The element of the dock's content container.</returns>
	},

	get_titleBar: function()
	{
		/// <summary>Gets a reference to the element of the dock's TitleBar template.</summary>
		/// <returns type='Object' mayBeNull='true' domElement='true'>The element of the dock's TitleBar.</returns>
	},

	get_commandsContainer: function()
	{
		/// <summary>Gets a reference to the element container of the dock's commands.</summary>
		/// <returns type='Object' mayBeNull='true' domElement='true'>The element containing dock's commands.</returns>
	},

	get_titleElement: function()
	{
		/// <summary>Gets the element containing the title text of the dock (the EM element).</summary>
		/// <returns type='Object' mayBeNull='true' domElement='true'>The element that contains the dock's title text.</returns>
	},

	/*get_innerDivElement: function(num)
	{
	/// <summary></summary>
	/// <param name='num' type='' domElement='' optional=''></param>
	/// <returns type='Object' mayBeNull=''></returns>
	},*/

	saveClientState: function()
	{
		/// <summary>
		/// Gets the serialized client state of the dock control.</summary>
		/// <returns type='' mayBeNull='false'>The JSON string representing the client state of the dock.</returns>
	},

	conditionalPostback: function(parameter)
	{
		/// <summary>
		/// Performs a postback if the dock has AutoPostBack enabled.
		/// </summary>
		/// <param name='parameter' type='' optional='true'>The parameter passed to the server
		/// when postback is performed.</param>
	},

	doPostBack: function(parameter)
	{
		/// <summary>
		/// Calls the _doPostBack global function, passing the 
		/// UniqueID of the control as event target paramenter.
		/// </summary>
		/// <param name='parameter' optional='true'The parameter passed to the server
		/// when postback is performed.></param>
	},

	add_command: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientCommand event. The OnClientCommand client-side event
		/// occurs when the user clicks on a command in the RadDock title bar.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientCommand event.
		/// </param>
	},

	remove_command: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientCommand event. The OnClientCommand client-side event
		/// occurs when the user clicks on a command in the RadDock title bar.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientCommand event.
		/// </param>
	},

	/*raise_command: function(args)
	{
	/// <summary>
	/// Raises the OnClientCommand event.
	/// </summary>
	/// <param name='args' type='' domElement='' optional=''></param>
	},*/

	add_dragStart: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientDragStart event. The OnClientDragStart client-side event
		/// occurs when the user begins to drag the RadDock control from its current position.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientDragStart event.
		/// </param>
	},

	remove_dragStart: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientDragStart event. The OnClientDragStart client-side event
		/// occurs when the user begins to drag the RadDock control from its current position.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientDragStart event.
		/// </param>
	},

	/*raise_dragStart: function(args)
	{
	/// <summary>
	/// Raises the OnClientDragStart event.
	/// </summary>
	/// <param name='args' type='' domElement='' optional=''></param>
	},*/

	add_drag: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientDrag event. The OnClientDrag client-side event
		/// occurs when the user moves the mouse while dragging a RadDock control.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientDrag event.
		/// </param>
	},

	remove_drag: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientDrag event. The OnClientDrag client-side event
		/// occurs when the user moves the mouse while dragging a RadDock control.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientDrag event.
		/// </param>
	},

	/*raise_drag: function(args)
	{
	/// <summary>
	/// Raises the OnClientDrag event.
	/// </summary>
	/// <param name='args' type='' domElement='' optional=''></param>
	},*/

	add_dragEnd: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientDragEnd event. The OnClientDragEnd client-side event
		/// occurs when the user drops a RadDock control after a drag operation. This event 
		/// occurs after the OnClientDockPositionChanged event.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientDragEnd event.
		/// </param>
	},

	remove_dragEnd: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientDragEnd event. The OnClientDragEnd client-side event
		/// occurs when the user drops a RadDock control after a drag operation. This event 
		/// occurs after the OnClientDockPositionChanged event.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientDragEnd event.
		/// </param>
	},

	/*raise_dragEnd: function(args)
	{
	/// <summary>
	/// Raises the OnClientDragEnd event.
	/// </summary>
	/// <param name='args' type='' domElement='' optional=''></param>
	},*/

	add_dockPositionChanged: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientDockPositionChanged event. The OnClientDockPositionChanged client-side event
		/// occurs when the user has just changed the position of a RadDock control by dragging it to a new location.
		/// This event occurs before the server-side OnDockPositionChanged event or client-side OnClientDragEnd event.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientDockPositionChanged event.
		/// </param>
	},

	remove_dockPositionChanged: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientDockPositionChanged event.  The OnClientDockPositionChanged client-side event
		/// occurs when the user has just changed the position of a RadDock control by dragging it to a new location.
		/// This event occurs before the server-side OnDockPositionChanged event or client-side OnClientDragEnd event.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientDockPositionChanged event.
		/// </param>
	},

	/*raise_dockPositionChanged: function(args)
	{
	/// <summary>
	/// Raises the OnClientDockPositionChanged event.
	/// </summary>
	/// <param name='args' type='' domElement='' optional=''></param>
	},*/

	add_dockPositionChanging: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientDockPositionChanging event. The OnClientDockPositionChanging client-side event
		/// occurs when the user tries to drop the RadDock control in a new location.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientDockPositionChanged event.
		/// </param>
	},

	remove_dockPositionChanging: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientDockPositionChanging event. The OnClientDockPositionChanging client-side event
		/// occurs when the user tries to drop the RadDock control in a new location.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientDockPositionChanged event.
		/// </param>
	},

	/*raise_dockPositionChanging: function(cancelArgs)
	{
	/// <summary>
	/// Raises the OnClientDockPositionChanged event.
	/// </summary>
	/// <param name='cancelArgs' type='' domElement='' optional=''></param>
	},*/

	add_initialize: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientInitialize event. The OnClientInitialize client-side event
		/// occurs when when the client-side object for the RadDock control is initialized.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientInitialize event.
		/// </param>
	},

	remove_initialize: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientInitialize event. The OnClientInitialize client-side event
		/// occurs when when the client-side object for the RadDock control is initialized.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientInitialize event.
		/// </param>
	},

	/*raise_initialize: function(args)
	{
	/// <summary>
	/// Raises the OnClientInitialize event.
	/// </summary>
	/// <param name='args' type='' domElement='' optional=''></param>
	},*/

	add_resizeStart: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientResizeStart event. The OnClientResizeStart client-side event
		/// ocurrs when the user starts to resize the RadDock control.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientResizeStart event.
		/// </param>
	},

	remove_resizeStart: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientResizeStart event. The OnClientResizeStart client-side event
		/// ocurrs when the user starts to resize the RadDock control.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientResizeStart event.
		/// </param>
	},

	/*raise_resizeStart: function(args)
	{
	/// <summary>
	/// Raises the OnClientResizeStart event.
	/// </summary>
	/// <param name='args' type='' domElement='' optional=''></param>
	},*/

	add_resizeEnd: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientResizeEnd event. The OnClientResizeEnd client-side event
		/// ocurrs when the user finishes resizing the RadDock control.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientResizeStart event.
		/// </param>
	},

	remove_resizeEnd: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientResizeEnd event. The OnClientResizeEnd client-side event
		/// ocurrs when the user finishes resizing the RadDock control.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientResizeStart event.
		/// </param>
	},

	/*raise_resizeEnd: function(args)
	{
	/// <summary>
	/// Raises the OnClientResizeEnd event.
	/// </summary>
	/// <param name='args' type='' domElement='' optional=''></param>
	},*/

	get_top: function()
	{
		/// <summary>Gets the Y-coordinate of the dock (relative to the top-left corner of the browser window).</summary>
		/// <returns type='' mayBeNull='false'>The number indicating the Y-coordinate.</returns>
	},

	set_top: function(value)
	{
		/// <summary>Sets a Y-coordinate to the dock (relative to the top-left corner of the browser window).</summary>
		/// <param name='value' type='Number' optional='true'>The value set to the Y-coordinate.</param>
	},

	get_left: function()
	{
		/// <summary>Gets the X-coordinate of the dock (relative to the top-left corner of the browser window).</summary>
		/// <returns type='' mayBeNull='false'>The number indicating the X-coordinate.</returns>
	},

	set_left: function(value)
	{
		/// <summary>Sets a X-coordinate to the dock (relative to the top-left corner of the browser window).</summary>
		/// <param name='value' type='Number' optional='true'>The value set to the X-coordinate.</param>
	},

	get_closed: function()
	{
		/// <summary>Gets the value indicating whether the dock is closed or not.</summary>
		/// <returns type='Boolean' mayBeNull='false'>Bool value indicating whether the dock is closed or not.</returns>
	},

	set_closed: function(value, playAnimation)
	{
		/// <summary>Closes/Opens the RadDock control.</summary>
		/// <param name='value' type='Boolean' optional='false'>The value indicating whether the dock will be opened or closed.</param>
		/// <param name='playAnimation' type='Boolean' optional='true'>Whether or not animation should be played.</param>
	},

	get_collapsed: function()
	{
		/// <summary>Gets the bool value indicating whether the dock is collapsed or not.</summary>
		/// <returns type='Boolean' mayBeNull='false'>Bool value indicating whether the dock is collapsed or not.</returns>
	},

	set_collapsed: function(value, playAnimation)
	{
		/// <summary>Collapses/Expands the RadDock control.</summary>
		/// <param name='value' type='Boolean' optional='false'>The value indicating whether the dock is collapsed or expanded.</param>
		/// <param name=' playAnimation' type='Boolean' optional='true'>Whether or not animation should be played.</param>
	},

	get_autoPostBack: function()
	{
		/// <summary>Gets the bool value indicating whether the dock will perform postback.</summary>
		/// <returns type='Boolean' mayBeNull='false'>The bool value indicating whether the dock will perform postback.</returns>
	},

	set_autoPostBack: function(value)
	{
		/// <summary>Sets a bool value indicating whether the dock will perform postback.</summary>
		/// <param name='value' type='Boolean' domElement='' optional='false'>Parameter indicating whether the dock
		/// will perform postback.</param>
	},

	get_commands: function()
	{
		/// <summary>Gets an object containing all present (enabled) dock commands.
		/// A single command can be accessed in the following way:
		/// "objCommands.CommandName" or "objCommands["CommandName"]".</summary>
		/// <returns type='' mayBeNull=''></returns>
	},

	/*set_commands: function(value)
	{
	/// <summary>Sets dock commands.</summary>
	/// <param name='value' type='' optional='false'>The parameter object should be either:
	/// 1. An array of type Telerik.Web.UI.DockCommand and the items should be accessed by value["CommandName"]
	/// 2. An object that has the commands as properties i.e. value.Close = Telerik.Web.UI.DockCloseCommand. </param>
	},*/

	get_dockMode: function()
	{
		/// <summary>Gets the DockMode of the RadDock control. It can be: 1. Floating; 2. Docked; 3. Default;</summary>
		/// <returns type='Telerik.Web.UI.DockMode' mayBeNull='false'>The Telerik.Web.UI.DockMode of the RadDock control.
		/// It can be: 1. Floating; 2. Docked; 3. Default; </returns>
	},

	set_dockMode: function(value)
	{
		/// <summary>Sets a DockMode to the dock.(Use the DockMode property in order for the changes
		/// to take effect on the server-side and not on the client-side only)</summary>
		/// <param name='value' type='Telerik.Web.UI.DockMode' optional='false'>Whether the dock will be:
		/// always floating, always docked or will have default behavior (can be either floating or docked).</param>
	},

	get_dockZoneID: function()
	{
		/// <summary>Gets the ID of the zone where the RadDock control is docked to.</summary>
		/// <returns type='' mayBeNull='true'>The ID of the zone where the RadDock control is docked to.</returns>
	},

	/*set_dockZoneID: function(value)
	{
	/// <summary>Sets an ID of the zone to which the dock is associatted (docked to).</summary>
	/// <param name='value' type='' domElement='' optional=''>The ID of the zone where the dock is docked.</param>
	},*/

	get_forbiddenZones: function()
	{
		/// <summary>Gets an array containing the DockZone IDs where the dock cannot be docked to.</summary>
		/// <returns type='' mayBeNull=''>A string array containing the DockZone IDs where the dock cannot docked to.</returns>
	},

	set_forbiddenZones: function(value)
	{
		/// <summary>Sets forbidden zones (DockZones where the dock cannot be docked to) to the dock.
		/// (Use the ForbiddenZones property in order for the changes
		/// to take effect on the server-side and not on the client-side only)</summary>
		/// <param name='value' type='string[]'>A string array containing the DockZone IDs where the dock cannot docked to.</param>
	},

	get_height: function()
	{
		/// <summary>Gets the height of the control.</summary>
		/// <returns type='' mayBeNull='true'>The height of the control.</returns>
	},

	set_height: function(value)
	{
		/// <summary>Sets a height to the control.</summary>
		/// <param name='value' type='Number' domElement='' optional='false'>The height of the control.</param>
	},

	get_index: function()
	{
		/// <summary>Gets the (0-offset) docking position of the control within its parent docking zone.</summary>
		/// <returns type='' mayBeNull=''>The (0-offset) docking position of the control within its parent docking zone.</returns>
	},

	/*set_index: function(value)
	{
	/// <summary>Sets a (0-offset) docking position to the control within its parent docking zone.</summary>
	/// <param name='value' type='Number' optional='false'>The (0-offset) docking position
	/// of the control within its parent docking zone.</param>
	},*/

	get_layoutID: function()
	{
		/// <summary>Gets the ID of the Telerik.Web.UI.RadDockLayout that manages the state of the RadDock control.</summary>
		/// <returns type='string' mayBeNull=''>The ID of the Telerik.Web.UI.RadDockLayout that manages the state of the RadDock control.</returns>
	},

	/*set_layoutID: function(value)
	{
	/// <summary>Sets an ID to the Telerik.Web.UI.RadDockLayout that manages the state of the RadDock control.</summary>
	/// <param name='value' type='' domElement='' optional=''>The ID of the Telerik.Web.UI.RadDockLayout that
	/// manages the state of the RadDock control.</param>
	},*/

	get_enableDrag: function()
	{
		/// <summary>Gets a bool value indicating whether the user can drag the control to a new location.</summary>
		/// <returns type='Boolean' mayBeNull='false'>The bool value indicating whether the user can drag
		/// the control to a new location.</returns>
	},

	set_enableDrag: function(value)
	{
		/// <summary>Sets a value enabling or disabling the ability of the user to drag the control to a new location.
		/// (Use the EnableDrag property in order for the changes
		/// to take effect on the server-side and not on the client-side only)</summary>
		/// <param name='value' type='Boolean' domElement='' optional='false'>The bool value indicating whether the user can drag
		/// the control to a new location.</param>
	},

	get_enableAnimation: function()
	{
		/// <summary>Gets the bool value indicating whether the animation is enabled.</summary>
		/// <returns type='Boolean' mayBeNull='false'>The bool value indicating
		/// whether the animation is enabled.</returns>
	},

	set_enableAnimation: function(value)
	{
		/// <summary>Enables or disables the dock animations. (Use the EnableAnimation property in order for the changes
		/// to take effect on the server-side and not on the client-side only)</summary>
		/// <param name='value' type='Boolean' domElement='' optional=''>The bool value indicating
		/// whether the animation will be enabled/disabled.</param>
	},

	/*get_animationDuration: function()
	{
	/// <summary>Gets the duration of the animation (miliseconds).</summary>
	/// <returns type='' mayBeNull=''>The animation duration.</returns>
	},

	set_animationDuration: function(value)
	{
	/// <summary>Sets an animation duration.</summary>
	/// <param name='value' type='' domElement='' optional=''>The animation duration in miliseconds.</param>
	},*/

	get_pinned: function()
	{
		/// <summary>Gets the bool value indicating whether the control is pinned.</summary>
		/// <returns type='' mayBeNull=''>The bool value indicating whether the control is pinned.</returns>
	},

	set_pinned: function(value)
	{
		/// <summary>Causes a floating control to become pinned or unpinned. Dock with DockMode="Floating" can be pinned only.
		/// (Use the Pinned property in order for the changes
		/// to take effect on the server-side and not on the client-side only)</summary>
		/// <param name='value' type='' domElement='' optional=''>The bool value indicating
		/// whether the control will be pinned/unpinned.</param>
	},

	get_title: function()
	{
		/// <summary>Gets the title text of the dock control.</summary>
		/// <returns type='' mayBeNull=''>The text of the dock's title.</returns>
	},

	set_title: function(value)
	{
		/// <summary>Sets a title to the control.(Use the Title property in order for the changes
		/// to take effect on the server-side and not on the client-side only)</summary>
		/// <param name='value' type='String' domElement='' optional=''>The text that will be assigned
		/// to the control's title</param>
	},

	get_uniqueID: function()
	{
		/// <summary>Gets the UniqueID of the control.</summary>
		/// <returns type='' mayBeNull=''>The UniqueID of the control.</returns>
	},

	/*set_uniqueID: function(value)
	{
	/// <summary>Sets a UniqueID of the control.</summary>
	/// <param name='value' type='' domElement='' optional=''>The UniqueID to be set.</param>
	},*/

	get_uniqueName: function()
	{
		/// <summary>Gets the UniqueName of the control.</summary>
		/// <returns type='' mayBeNull=''>The UniqueName of the control.</returns>
	},

	/*set_uniqueName: function(value)
	{
	/// <summary>Sets a UniqueName to the control.</summary>
	/// <param name='value' type='' domElement='' optional=''>The value that will be set
	/// as a UniqueName.</param>
	},

	set_visibleTitlebar: function(value)
	{
	/// <summary></summary>
	/// <param name='value' type='' domElement='' optional=''></param>
	},*/

	get_width: function()
	{
		/// <summary>Gets the width of the control.</summary>
		/// <returns type='' mayBeNull=''>The width of the control.</returns>
	},

	set_width: function(value)
	{
		/// <summary>Sets a width to the control.</summary>
		/// <param name='value' type='Number' domElement='' optional=''>The width of the control.</param>
	},

	get_skin: function()
	{
		/// <summary>Gets the currently applied skin to the control.</summary>
		/// <returns type='' mayBeNull=''>The control's skin.</returns>
	},

	/*set_skin: function(value)
	{
	/// <summary>Sets a skin to the control.</summary>
	/// <param name='value' type='' domElement='' optional=''>The control's skin.</param>
	},*/

	get_resizable: function()
	{
		/// <summary>Gets the value indicating whether the control can be resized.</summary>
		/// <returns type='Boolean' mayBeNull=''>The value indicating whether the control can be resized.</returns>
	},

	set_resizable: function(value)
	{
		/// <summary>Enables/Disables the resizing of the control.</summary>
		/// <param name='value' type='Boolean' domElement='' optional=''>The value indicating whether
		/// the control can be resized or not.</param>
	},

	get_dockZone: function()
	{
		/// <summary>Gets the parent zone(Telerik.Web.UI.RadDockZone object) to which the dock is docked.</summary>
		/// <returns type='Telerik.Web.UI.RadDockZone' mayBeNull='true'>The parent DockZone.</returns>
	}

	/*set_dockZone: function(value)
	{
	/// <summary>Sets a parent zone(Telerik.Web.UI.RadDockZone object) to which the dock is docked.</summary>
	/// <param name='value' type='Telerik.Web.UI.RadDockZone' domElement='' optional=''>The zone where the dock is docked.</param>
	}*/

};
	Telerik.Web.UI.RadDock.registerClass("Telerik.Web.UI.RadDock", Sys.UI.Control);

	Telerik.Web.UI.DockCommand = function(element)
	{
		/// <summary>Initializes a new instance of the Telerik.Web.UI.DockCommand class.</summary>
		/// <param name='element' domElement='true'>The outermost DOM element of RadDock.</param>
	};
	Telerik.Web.UI.DockCommand.prototype =
{

	add_command: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientCommand event. The OnClientCommand client-side event
		/// occurs when the user clicks on a command in the RadDock title bar.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientCommand event.
		/// </param>
	},

	remove_command: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientCommand event. The OnClientCommand client-side event
		/// occurs when the user clicks on a command in the RadDock title bar.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientCommand event.
		/// </param>
	},

	/*raise_command: function(cancelArgs)
	{
	/// <summary>
	/// Raises the OnClientCommand event.
	/// </summary>
	/// <param name='args' type='' domElement='' optional=''></param>
	},*/

	/*get_clientTypeName: function()
	{
	/// <summary></summary>
	/// <returns type='' mayBeNull=''></returns>
	},

	set_clientTypeName: function(value)
	{
	/// <summary></summary>
	/// <param name='value' type='' domElement='' optional=''></param>
	},

	get_cssClass: function()
	{
	/// <summary>Gets the CSS class of the DockCommand.</summary>
	/// <returns type='' mayBeNull=''>The CSS class of the DockCommand.</returns>
	},

	set_cssClass: function(value)
	{
	/// <summary>Sets a CSS class to the DockCommand.</summary>
	/// <param name='value' type='' domElement='' optional=''>The CSS class of the DockCommand.</param>
	},*/

	get_name: function()
	{
		/// <summary>Gets the name of the command.</summary>
		/// <returns type='' mayBeNull=''>The name of the command.</returns>
	},

	/*set_name: function(value)
	{
	/// <summary>Sets a name to the command.</summary>
	/// <param name='value' type='' domElement='' optional=''>The name of the command.</param>
	},*/

	get_text: function()
	{
		/// <summary>Gets the text of the command.</summary>
		/// <returns type='' mayBeNull=''>The text of the command</returns>
	},

	/*set_text: function(value)
	{
	/// <summary>Sets a text to the command.</summary>
	/// <param name='value' type='' domElement='' optional=''>The text of the command.</param>
	},*/

	get_autoPostBack: function()
	{
		/// <summary>Gets the bool value indicating whether the command will perform postback.</summary>
		/// <returns type='' mayBeNull=''>The bool value indicating whether the command will perform postback.</returns>
	},

	set_autoPostBack: function(value)
	{
		/// <summary>Sets a bool value indicating whether the command will perform postback.</summary>
		/// <param name='value' type='' domElement='' optional=''>The bool value indicating
		/// whether the command will perform postback.</param>
	},

	get_radDock: function()
	{
		/// <summary>Gets the parent Telerik.Web.UI.RadDock control.</summary>
		/// <returns type='Telerik.Web.UI.RadDock' mayBeNull=''>The parent Telerik.Web.UI.RadDock control.</returns>
	},

	/*set_radDock: function(value)
	{
	/// <summary>Sets a parent Telerik.Web.UI.RadDock control.</summary>
	/// <param name='value' type='Telerik.Web.UI.RadDock' domElement='' optional=''>The parent Telerik.Web.UI.RadDock control.</param>
	},*/

	onCommand: function(e)
	{
		/// <summary>
		/// The Command item's main method. Override this method to implement custom logic.
		/// </summary>
	},

	conditionalPostback: function()
	{
		/// <summary>
		/// Performs a postback if the dock has AutoPostBack enabled.
		/// </summary>
		/// <param name='parameter' type='' optional='true'>The parameter passed to the server
		/// when postback is performed.</param>
	},

	dispose: function()
	{
		/// <summary>Disposes the object.</summary>
	}
};
	Telerik.Web.UI.DockCommand.registerClass('Telerik.Web.UI.DockCommand', Sys.UI.Control);
	Telerik.Web.UI.DockToggleCommand = function(element)
	{
		/// <summary>Initializes a new instance of the Telerik.Web.UI.DockToggleCommand class.</summary>
		/// <param name='element' domElement='true'>The outermost DOM element of RadDock.</param>
	};
	Telerik.Web.UI.DockToggleCommand.prototype =
{

	updateState: function()
	{
		/// <summary>Updates the state of the DockToggleCommand.</summary>
	},

	get_state: function()
	{
		/// <summary>Gets the state of the ToggleCommand. It can be Primary(1) or Alternate(2).</summary>
		/// <returns type='' mayBeNull=''>The state of the ToggleCommand.</returns>
	},

	/*set_state: function(value)
	{
	/// <summary>Sets a state to the ToggleCommand.</summary>
	/// <param name='value' type='' domElement='' optional=''>Set 1(Primary) or 2(Aletrnate).</param>
	},*/

	get_alternateCssClass: function()
	{
		/// <summary>Gets the CSS class that corresponds with the "Alternate" state of the ToggleCommand.</summary>
		/// <returns type='' mayBeNull=''>The Alternate CSS class.</returns>
	},

	/*set_alternateCssClass: function(value)
	{
	/// <summary>Sets a CSS class that corresponds to the "Alternate" state of the ToggleCommand.</summary>
	/// <param name='value' type='String' domElement='' optional=''>The Alternate CSS class.</param>
	},*/

	get_alternateText: function()
	{
		/// <summary>Gets the text corresponding to the "Alternate" state of the ToggleCommand.</summary>
		/// <returns type='' mayBeNull=''>The alternate text of the command.</returns>
	},

	/*set_alternateText: function(value)
	{
	/// <summary>Sets a text corresponding to the "Alternate" state of the ToggleCommand.</summary>
	/// <param name='value' type='String' domElement='' optional=''>The text of the ToggleCommand
	/// corresponding to the "Alternate" state.</param>
	},*/

	dispose: function()
	{
		/// <summary>Disposes the object.</summary>
	}

};
	Telerik.Web.UI.DockToggleCommand.registerClass('Telerik.Web.UI.DockToggleCommand', Telerik.Web.UI.DockCommand);
	Telerik.Web.UI.DockCloseCommand = function(element)
	{

		/// <summary></summary>
		/// <param name='element' type='' domElement='' optional=''></param>
	};
	Telerik.Web.UI.DockCloseCommand.prototype =
{

	onCommand: function(e)
	{
		/// <summary>
		/// Hides the RadDock control. Override this method to implement custom logic.
		/// </summary>

		/// <summary></summary>
		/// <param name='e' type='' domElement='' optional=''></param>
	}

};
	Telerik.Web.UI.DockCloseCommand.registerClass('Telerik.Web.UI.DockCloseCommand', Telerik.Web.UI.DockCommand);
	Telerik.Web.UI.DockExpandCollapseCommand = function(element)
	{

		/// <summary></summary>
		/// <param name='element' type='' domElement='' optional=''></param>
	};
	Telerik.Web.UI.DockExpandCollapseCommand.prototype =
{

	onCommand: function(e)
	{
		/// <summary>
		/// Collapses the RadDock control. Override this method to implement custom logic.
		/// </summary>

		/// <summary></summary>
		/// <param name='e' type='' domElement='' optional=''></param>
	}

};
	Telerik.Web.UI.DockExpandCollapseCommand.registerClass('Telerik.Web.UI.DockExpandCollapseCommand', Telerik.Web.UI.DockToggleCommand);
	Telerik.Web.UI.DockPinUnpinCommand = function(element)
	{

		/// <summary></summary>
		/// <param name='element' type='' domElement='' optional=''></param>
	};
	Telerik.Web.UI.DockPinUnpinCommand.prototype =
{

	onCommand: function(e)
	{
		/// <summary>
		/// Pinns the RadDock control. Override this method to implement custom logic.
		/// </summary>

		/// <summary></summary>
		/// <param name='e' type='' domElement='' optional=''></param>
	}

};
	Telerik.Web.UI.DockPinUnpinCommand.registerClass('Telerik.Web.UI.DockPinUnpinCommand', Telerik.Web.UI.DockToggleCommand);
	Telerik.Web.UI.DockMode = function()
	{
		/// <summary>Specifies the possible values for the DockMode property of the RadRadDock control.</summary>
		/// <field name="Floating" type="Number" integer="true" static="true">The dock is always floating and cannot be docked to a zone.</field>
		/// <field name="Docked" type="Number" integer="true" static="true">The dock is always docked and cannot be moved outside a zone.</field>
		/// <field name="Default" type="Number" integer="true" static="true">Default behavior of the RadDock control. It can be moved outside a docking zone or placed inside one </field>
	};
	Telerik.Web.UI.DockMode.prototype =
{
	Floating: 1,
	Docked: 2,
	Default: 3
}
	Telerik.Web.UI.DockMode.registerEnum("Telerik.Web.UI.DockMode");

})();/// <reference Name="MicrosoftAjax.js">

$telerik.toDockZone = function(object)
{
	/// <summary>Casts an object to a RadDockZone instance</summary>
	/// <returns type="Telerik.Web.UI.RadDockZone">A RadDockZone instance<returns>
};
$telerik.findDockZone = function(id, parent)
{
	/// <summary>Finds a RadDockZone instance</summary>
	/// <param name='id'>A string that contains ID of the RadDockZone to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadDockZone to find</param>
	/// <returns type="Telerik.Web.UI.RadDockZone">The RadDockZone instance</returns>
};

(function()
{

	Telerik.Web.UI.RadDockZone = function(element)
	{
		/// <summary>Initializes a new instance of the Telerik.Web.UI.RadDockZone class.</summary>
		/// <param name='element' domElement='true'>The outermost DOM element of RadDockZone.</param>
	};
	Telerik.Web.UI.RadDockZone.prototype =
{

	/*initialize: function()
	{
	/// <summary>Initializes the Telerik.Web.UI.RadDockZone object.</summary>
	},*/

	dispose: function()
	{
		/// <summary>Disposes the object.</summary>
	},

	dock: function(radDock, index)
	{
		/// <summary>Places (docks) the RadDock control in the zone, at the specified (0-offset) position.</summary>
		/// <param name='radDock' type='Telerik.Web.UI.RadDock' domElement='false' optional='false'>
		/// The dock control to be docked.</param>
		/// <param name='index' type='' domElement='' optional='true'>
		/// The (0-offset) position where the dock will be docked at.</param>
	},

	get_docks: function()
	{
		/// <summary>Gets the array of all Telerik.Web.UI.RadDock controls placed inside the zone.</summary>
		/// <returns type='Telerik.Web.UI.RadDock[]' mayBeNull=''>
		/// The array of all Telerik.Web.UI.RadDock controls placed inside the zone.</returns>
	},

	get_isHorizontal: function()
	{
		/// <summary>Gets the value indicating whether the zone has Horizontal orientaion (Orientation can be Horizontal and Vertical).</summary>
		/// <returns type='' mayBeNull=''>The value indicating whether the zone has Horizontal orientaion.</returns>
	},

	/*	canDrop: function()
	{
	/// <summary>Checks whether the dock can be dropped outside a zone.</summary>
	/// <returns>Bool value indicating whether the dock can be dropped outside a zone.</returns>
	},
	drop: function()
	{
	/// <summary>Drops the dock outside a zone.</summary>
	},

	getScrollOffset: function(element, recursive)
	{
	/// <summary></summary>
	/// <param name='element' type='' domElement='' optional=''></param>
	/// <param name=' recursive' type='' domElement='' optional=''></param>
	/// <returns type='' mayBeNull=''></returns>
	},*/

	clone: function(id)
	{
		/// <summary>Clones the current Telerik.Web.UI.RadDockZone object.</summary>
		/// <param name='id' type='string' optional='true'>The string that will be set to the UniqueId of the cloned object.</param>
		/// <returns type='Telerik.Web.UI.RadDockZone'>The cloned Telerik.Web.UI.RadDockZone object.</returns>
	},

	/*addPoints: function(p1, p2)
	{
	/// <summary></summary>
	/// <param name='p1' type='' domElement='' optional=''></param>
	/// <param name=' p2' type='' domElement='' optional=''></param>
	},*/

	get_clientID: function()
	{
		/// <summary>Gets the client ID of the RadDockZone control.</summary>
		/// <returns type='' mayBeNull=''>The client ID of the RadDockZone control.</returns>
	},

	/*set_clientID: function(value)
	{
	/// <summary>Sets a client ID to the RadDockZone control.</summary>
	/// <param name='value' type='' domElement='' optional=''>The ID to be set.</param>
	},*/

	get_fitDocks: function()
	{
		/// <summary>Gets the bool value indicating whether the docks are resized to fit within the zone.</summary>
		/// <returns type='' mayBeNull=''>The bool value indicating whether the docks are resized to fit within the zone.</returns>
	},

	set_fitDocks: function(value)
	{
		/// <summary>Sets a bool value indicating whether the docks are resized to fit within the zone.
		/// (Use the FitDocks property in order for the changes
		/// to take effect on the server-side and not on the client-side only)
		/// </summary>
		/// <param name='value' type='' domElement='' optional=''>The value indicating whether the docks
		/// should be resized to fit within the zone.</param>
	},

	get_highlightedCssClass: function()
	{
		/// <summary>Gets the CSS class that is applied when a dock is over the zone and is about to be docked.</summary>
		/// <returns type='' mayBeNull=''>The CSS class that is applied when a dock is over the zone and is about to be docked.</returns>
	},

	set_highlightedCssClass: function(value)
	{
		/// <summary>Sets a CSS class that is applied when a dock is over the zone and is about to be docked.
		/// (Use the HighlightedCssClass property in order for the changes
		/// to take effect on the server-side and not on the client-side only)
		/// </summary>
		/// <param name='value' type='String' domElement='' optional=''>
		/// The CSS class to be applied.</param>
	},

	get_layoutID: function()
	{
		/// <summary>Gets the ID of the Telerik.Web.UI.RadDockLayout that manages the state of the RadDockZone control.</summary>
		/// <returns type='string' mayBeNull=''>The ID of the DockLayout that manages the state of the RadDockZone control.</returns>
	},

	/*set_layoutID: function(value)
	{
	/// <summary>Sets an ID to the Telerik.Web.UI.RadDockLayout that manages the state of the RadDockZone control.</summary>
	/// <param name='value' type='' domElement='' optional=''>The ID of the Telerik.Web.UI.RadDockLayout that
	/// manages the state of the RadDockZone control.</param>
	},*/

	get_uniqueName: function()
	{
		/// <summary>Gets the UniqueName of the control.</summary>
		/// <returns type='' mayBeNull=''>The UniqueName of the control.</returns>
	}

	/*set_uniqueName: function(value)
	{
	/// <summary>Sets a UniqueName to the control.</summary>
	/// <param name='value' type='' domElement='' optional=''>The value that will be set
	/// as a UniqueName.</param>
	}*/

};
	Telerik.Web.UI.RadDockZone.registerClass("Telerik.Web.UI.RadDockZone", Sys.UI.Control);
})();/// <reference Name="MicrosoftAjax.js">

$telerik.toColorPicker = function(object)
{
	/// <summary>Casts an object to a RadColorPicker instance</summary>
	/// <returns type="Telerik.Web.UI.RadColorPicker">A RadColorPicker instance</returns>
};
$telerik.findColorPicker = function(id,parent)
{
	/// <summary>Finds a RadColorPicker instance</summary>
	/// <param name='id'>A string that contains ID of the RadColorPicker to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadColorPicker to find</param>
	/// <returns type="Telerik.Web.UI.RadColorPicker">The RadColorPicker instance</returns>
};

Telerik.Web.UI.PaletteModes = function()
{
	/// <summary>Specifies the possible values for the PaletteModes property of the RadColorPicker control</summary>
	/// <field name="WebPalette" type="Number" integer="true" static="true">A palette with set of specified colors</field>
	/// <field name="RGBSliders" type="Number" integer="true" static="true">A palette with three RadSlider controls that allows you to set a color in RGB format</field>
	/// <field name="HSB" type="Number" integer="true" static="true">A palette that uses the HSB representation of points in an RGB color model</field>
	/// <field name="HSV" type="Number" integer="true" static="true">A palette that uses the HSV representation of points in an RGB color model</field>
};
Telerik.Web.UI.PaletteModes.prototype =
{
	WebPalette: 1,
	RGBSliders: 2,
	HSB: 4,
	HSV: 8
}
Telerik.Web.UI.PaletteModes.registerEnum("Telerik.Web.UI.PaletteModes");

Telerik.Web.UI.RadColorPicker = function(element)
{
	/// <summary>RadColorPicker is a UI component for ASP.NET AJAX applications, which allows users to 
	/// select a color from a given color palette set.
	/// </summary>
	/// <param name="element" type="Object" domElement="true">The DOM element with which the control is associated</param>
};
Telerik.Web.UI.RadColorPicker.prototype =
{
	isModeEnabled: function(paletteMode)
	{
		/// <summary>Returns a value indicating whether a palette mode is enabled for the color picker control</summary>
		/// <param name='paletteMode' type='Telerik.Web.UI.PaletteModes'>The palette mode to check</param>
		/// <returns type='Boolean'>A value, indicating whether the palette mode is enabled for the color picker control</returns>
	},

	showPalette: function()
	{
		/// <summary>Shows the palette in case ShowIcon=true</summary>
	},

	hidePalette: function()
	{
		/// <summary>Hides the palette in case ShowIcon=true</summary>
	},

	getIconContainer: function()
	{
		/// <summary>Returns the element that represents the button of the color picker, in case ShowIcon=true</summary>
		/// <returns type="Object" domElement="true" mayBeNull="true">The element of the color picker's button</returns>
	},

	getPaletteContainer: function()
	{
		/// <summary>Returns the element of the color picker's palette</summary>
		/// <returns type="Object" domElement="true" mayBeNull="true">The element of the color picker's palette</returns>
	},

	add_loaded: function(handler)
	{
		/// <summary>Adds a handler for the load event</summary>
		/// <param name='handler' type='Function'>The handler for the load event to add</param>
	},

	remove_loaded: function(handler)
	{
		/// <summary>Removes a handler for the load event</summary>
		/// <param name='handler' type='Function'>The handler for the load event to remove</param>
	},

	add_colorSelecting: function(handler)
	{
		/// <summary>Adds a handler for the colorSelecting event</summary>
		/// <param name='handler' type='Function'>The handler for the colorSelecting event to add</param>
	},

	remove_colorSelecting: function(handler)
	{
		/// <summary>Removes a handler for the colorSelecting event</summary>
		/// <param name='handler' type='Function'>The handler for the colorSelecting event to remove</param>
	},

	get_selectedColor: function()
	{
		/// <summary>Gets the selected color of the color picker control</summary>
		/// <returns type="String" mayBeNull="true">The currently selected color</returns>
	},

	set_selectedColor: function(value,skipRefreshView)
	{
		/// <summary>Sets the selected color of the color picker control</summary>
		/// <param name='value' type='String'>The new value for the SelectedColor property</param>
		/// <param name='skipRefreshView' type='Boolean' mayBeNull='true'>A value, indicating whether the method should refresh the UI of the control</param>
	},

	get_selectedColorTitle: function()
	{
		/// <summary>Gets the title, associated with the selected color of the color picker control</summary>
		/// <returns type="String" mayBeNull="true">The title of the selected color</returns>
	},

	get_enabled: function()
	{
		/// <summary>Returns a value, indicating whether the color picker control is enabled</summary>
		/// <returns type="Boolean" mayBeNull="false">The current value of the Enabled property</returns>
	},

	set_enabled: function(value)
	{
		/// <summary>Enables or disables the color picker control. This property is not part of the client state of the control and the new value will 
		/// not be persisted after postback.
		/// </summary>
		/// <param name="value" type="Boolean">The new value for the Enabled property</param>
	},

	get_overlay: function()
	{
		/// <summary>Gets a value indicating whether the color picker control will create an overlay element for its palette, in case ShowIcon=true</summary>
		/// <returns type='Boolean'>The current value of the Overlay property</returns>
	},

	set_overlay: function(value)
	{
		/// <summary>Sets a value indicating whether the colorpicker will create an overlay element for its palette, in case ShowIcon=true</summary>
		/// <param name="value" type="Boolean">The new value for the Overlay property</param>
	},

	get_keepInScreenBounds: function()
	{
		/// <summary>Gets a value indicating whether the ColorPicker popup will show in the visible viewport of the browser window</summary>
		/// <returns type='Boolean'>The current keep-in-screen-bounds setting</returns>
	},

	set_keepInScreenBounds: function(value)
	{
		/// <summary>Sets a value indicating whether the ColorPicker popup will show in the visible viewport of the browser window</summary>
		/// <param name="value" type="Boolean">The new keep-in-screen-bounds setting</param>
	},

	get_paletteModes: function()
	{
		/// <summary>Gets the value of the PaletteModes property of the color picker control</summary>
		/// <returns type='Telerik.Web.UI.PaletteModes'>The current value of the PaletteModes property</returns>
	}
};
Telerik.Web.UI.RadColorPicker.registerClass("Telerik.Web.UI.RadColorPicker", Sys.UI.Control);/// <reference Name="MicrosoftAjax.js">

$telerik.toEditor = function(object)
{
    /// <summary>Casts an object to a RadEditor instance</summary>
    /// <returns type="Telerik.Web.UI.RadEditor">A RadEditor instance</returns>
};
$telerik.findEditor = function(id, parent)
{
    /// <summary>Finds a RadEditor instance</summary>
    /// <param name='id'>A string that contains ID of the RadEditor to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadEditor to find</param>
    /// <returns type="Telerik.Web.UI.RadEditor">The RadEditor instance</returns>
};

(function()
{

    Telerik.Web.UI.RadEditor = function(element)
    {

    };
    Telerik.Web.UI.RadEditor.prototype = 
    {

        get_toolContainer: function()
        {
            /// <summary>Returns a reference to the Toolbar container DOM element</summary>
            /// <returns type='Object' ></returns>
        },
        
        isVisible: function()
        {
            /// <summary>Returns boolean value that represents if the Editor is visible on the page</summary>
        },
        getSelectedElement: function()
        {
            /// <summary>Returns a reference to the currently selected HTML element in the editor's content area</summary>
            /// <returns type='Object'></returns>
        },

        getSelection: function()
        {
            /// <summary>Returns a reference to the current RadEditorSelection object</summary>
            /// <returns type='Telerik.Web.UI.Editor.Selection'></returns>
        },

        getSelectionHtml: function()
        {
            /// <summary>Returns the HTML of the selection</summary>
            /// <returns type='String' ></returns>
        },

        attachEventHandler: function(eventName, fnRef)
        {
            /// <summary>Attaches an event to RadEditor</summary>
            /// <param name='eventName' type='String' domElement='false' optional='false'>The name of the event to be handled</param>
            /// <param name='fnRef' type='Function' domElement='false' optional='false'>The function to be registered to the event</param>
        },
        detachEventHandler: function(eventName, fnRef)
        {
            /// <summary>Detaches an event handler.</summary>
            /// <param name='eventName' type='String' domElement='false' optional='false'>The name of the event to be handled</param>
            /// <param name='fnRef' type='Function' domElement='false' optional='false'>The function to be removed from the eventListenerList</param>
        },
        getToolByName: function(toolName)
        {
            /// <summary>Returns a reference to a specified tool</summary>
            /// <param name='toolName' type='String' domElement='false' optional='false'>The name of the tool</param>
            /// <returns type='Telerik.Web.UI.EditorButton' mayBeNull='true'></returns>
        },
        setFocus: function()
        {
            /// <summary>Sets the focus on RadEditor</summary>
        },
        set_visible: function(toShow)
        {
            /// <summary>Sets the RadEditor visible on the client</summary>
            /// <param name='toShow' type='Boolean' domElement='false' optional='false'></param>
        },

        enableEditing: function(enable, editingOptions, optionalIgnoredTools)
        {
            /// <summary>Ability to programatically disable/enable editing in editor while retaining its looks</summary>
            /// <param name='enable' type='Boolean' domElement='' optional=''>Specifies whether enable or disable editing</param>
            /// <param name='editingOptions' type='Telerik.Web.UI.EditingOptions' domElement='false' optional='true'>Which editing options to enable/disable</param>
            /// <param name='optionalIgnoredTools' type='Array' domElement='false' optional='true'>Array of tool names to enable/disable</param>
        },
        showExternalDialog: function(url, argument, width, height, callbackFunction, callbackArgs, title, modal, behaviors, showStatusbar, showTitlebar, dialogName)
        {
            /// <summary>
            /// Open a dialog, placed in an external page
            /// </summary>
            /// <param name="url" type="String">
            ///		The URL of the ASPX page to open.
            /// </param>
            /// <param name="argument" type="Object">
            /// The client parameters to be passed to the dialog. Optional.
            /// </param>
            /// <param name="width" type="Number">
            /// The width of the RadWindow dialog. Required.
            /// </param>
            /// <param name="height" type="Number">
            /// The height of the RadWindow dialog. Required.
            /// </param>
            /// <param name="callbackFunction" type="Function">
            ///		The function to be executed when the dialog is closed.
            ///		<br/>The function syntax is myFunction(sender, args);, where args is the
            ///		parameter passed to the close(args) method of the RadWindow object in the dialog;
            /// </param>
            /// <param name="callbackArgs" type="Object">
            /// The additional parameters to be passed to the callbackFunction when it is executed. Optional.
            /// </param>
            /// <param name="title" type="String">
            /// The text in the RadWindow title bar. Optional.
            /// </param>
            /// <param name="modal" type="String">
            /// Specifies whether RadWindow should be modal or not. The default is true. Optional.
            /// </param>
            /// <param name="behaviors" type="Telerik.Web.UI.WindowBehaviors">
            /// Enum, describing the available behaviors of RadWindow. Optional.
            /// </param>
            /// <param name="showStatusbar" type="Boolean">
            /// Specifies whether RadWindow displays its statusbar or not. The default is true. Optional.
            /// </param>
            /// <param name="showTitlebar" type="Boolean">
            /// Specifies whether RadWindow displays its titlebar or not. The default is true. Optional.
            /// </param>
            /// <remarks>
            /// To open a dialog, a DialogDefinition with the same name must be declared in the RadEditor
            /// DialogDefinitions collection server-side.
            /// </remarks>

        },
        get_mode: function()
        {
            /// <summary>Returns the editor's mode</summary>
            /// <returns type='Integer' mayBeNull='false'>returned value = 1 represents Design mode; returned value = 2 represents HTML mode; returned value = 4 represents Preview mode</returns>
        },
        set_mode: function(value)
        {
            /// <summary>Sets RadEditor in HTML, Preview or Design mode</summary>
            /// <param name='value' type='Integer' domElement='false' optional='false'>value = 1 represents Design mode; value = 2 represents HTML mode; value = 4 represents Preview mode</param>
        },
        get_textArea: function()
        {
            /// <summary>Returns a reference to the RadEditor's TextArea in Html mode</summary>
            /// <returns type='Object' mayBeNull='false'></returns>
        },
        set_html: function(content, title, setFocus)
        {
            /// <summary>Replaces the current content with a new one.</summary>
            /// <param name='content' type='String' domElement='false' optional='false'>The HTML content, that will be set in Telerik RadEditor.</param>
            /// <param name='title' type='String' domElement='false' optional='true'></param>
            /// <param name='setFocus' type='Boolean' domElement='false' optional='true'>Specifies whether setFocus to be fired after the command execution</param>
        },
        get_html: function(isFiltered)
        {
            /// <summary>Returns the editor content as HTML</summary>
            /// <param name='isFiltered' type='Boolean' domElement='' optional=''>If the bool parameter is set to true, the returned HTML content will be modified by the RadEditor client filters</param>
            /// <returns type='String'>Returns the editor content as HTML</returns>
        },
        get_text: function()
        {
            /// <summary>Returns the editor content as plain text</summary>
            /// <returns type='String'></returns>
        },
        setSize: function(strwidth, strheight)
        {
            /// <summary>Sets the width and height of the RadEditor (in pixels)</summary>
            /// <param name='strwidth' type='String' domElement='false' optional='false'>Width to be set (in pixels)</param>
            /// <param name='strheight' type='String' domElement='false' optional='false'>Height to be set (in pixels)</param>
        },
        pasteHtml: function(content, commandName, bSelectText, bFireSelChanged, bAddUndo)
        {
            /// <summary>Pastes HTML content to the cursor position.</summary>
            /// <param name='content' type='String' domElement='' optional=''>The content to be pasted</param>
            /// <param name='commandName' type='String' domElement='false' optional='true'>The name of the command using PasteHtml for Undo/Redo</param>
            /// <param name='bSelectText' type='Boolean' domElement='false' optional='true'>Specifies whether to select pasted text</param>
            /// <param name='bFireSelChanged' type='Boolean' domElement='false' optional='true'>Specifies whether to fire the selection change event</param>
            /// <param name='bAddUndo' type='Boolean' domElement='false' optional='true'>specifies whether to add the command in the Undo/Redo list</param>
        },
        fire: function(commandName, args)
        {
            /// <summary>Executes RadEditor commands.</summary>
            /// <param name='commandName' type='String' domElement='false' optional='false'>The name of the command to be executed</param>
            /// <param name='args' type='Object' domElement='false' optional='true'>The parameters to be passed to the executed command</param>
        },
        isFullScreen: function()
        {
            /// <summary>Returns the Fullscreen state of RadEditor</summary>
        },
        toggleScreenMode: function()
        {
            /// <summary>Toogles screen mode of RadEditor</summary>
        },
        get_contentAreaElement: function()
        {
            /// <summary>Returns a reference to the RadEditor's content area's IFRAME</summary>
            /// <returns type='Object' mayBeNull='false'></returns>
        },
        get_contentArea: function()
        {
            /// <summary>Returns a reference to the RadEditor's content area's body element</summary>
            /// <returns type='Object' mayBeNull='false'></returns>
        },
        get_document: function()
        {
            /// <summary>Returns a reference to the RadEditor's content area's document object</summary>
            /// <returns type='Object' mayBeNull='false'></returns>
        },
        get_filtersManager: function()
        {
            /// <summary>Returns a reference to RadEditor's filters manager</summary>
            /// <returns type='Telerik.Web.UI.Editor.FiltersManager' mayBeNull='false'></returns>
        },
        set_useClassicDialogs: function(value)
        {
            /// <summary>Specifies whether RadEditor will use RadWindow windows or browser popup windows for its dialogs. If the parameter is set to true the editor will use the browser windows.</summary>
            /// <param name='value' type='Boolean' domElement='false' optional=''></param>
        },
        saveContent: function(e, args)
        {
            /// <summary>Force RadEditor to save current content</summary>
        },



        get_spellCheckService: function()
        {
            /// <summary>Returns a reference to the used SpellCheckService</summary>
            /// <returns type='Telerik.Web.UI.SpellcheckService'></returns>
        },

        startSpellCheck: function()
        {
            /// <summary>Force the editor to start the spellchecker</summary>
        },


        raiseEvent: function(evName, args)
        {
            /// <summary>Raise a RadEditor's event</summary>
            /// <param name='evName' type='String' domElement='false' optional='false'>Name of the event to be raised</param>
            /// <param name='args' type='Object' domElement='false' optional='true'>Arguments to be sent</param>
        },

        get_mainTable: function()
        {
            /// <summary>Return a reference to the RadEditor's wrapping DOM element</summary>
            /// <returns type='Object'>a reference to the RadEditor's wrapping DOM element</returns>
        },

        selectElement: function(element, fireEvent)
        {
            /// <summary>Select an element from the content area</summary>
            /// <param name='element' type='Object' domElement='true' optional='false'>Element to be selected</param>
            /// <param name='fireEvent' type='Boolean' domElement='false' optional='true'>Specifies whether to fire or not selectionChange event</param>
        },

        undo: function(depth)
        {
            /// <summary>Fire RadEditor's Undo command</summary>
            /// <param name='depth' type='Integer' domElement='false' optional='false'>Number of commands to undo</param>
        },

        redo: function(depth)
        {
            /// <summary>Fire RadEditor's Undo command</summary>
            /// <param name='depth' type='Integer' domElement='false' optional='false'>Number of commands to redo</param>
        },

        createElement: function(tagName, styleWidth, styleHeight, sId, sName, sValue)
        {
            /// <summary>Creates DOM element and return reference to it</summary>
            /// <param name='tagName' type='String' domElement='false' optional='false'>Element's tag name to be created</param>
            /// <param name='styleWidth' type='String' domElement='false' optional='true'>Width of the element</param>
            /// <param name='styleHeight' type='String' domElement='false' optional='true'>Height of the element</param>
            /// <param name='sId' type='String' domElement='false' optional='true'>ID of the element</param>
            /// <param name='sName' type='String' domElement='false' optional='true'>Name of the element</param>
            /// <param name='sValue' type='String' domElement='false' optional='true'>Value of the element</param>
        },

        getToolState: function(toolName)
        {
            /// <summary>Returns current state of a tool</summary>
            /// <param name='toolName' type='String' domElement='false' optional='false'>The name of the tool</param>
            /// <returns type='Integer'>Current state of a tool Disabled : -1, Off : 0, On : 1</returns>
        },

        getToolValue: function(toolName)
        {
            /// <summary>Returns current value of a tool</summary>
            /// <param name='toolName' type='String' domElement='false' optional='false'>The name of the tool</param>
            /// <returns type='String'>Current value of a tool</returns>
        },

        addShortCut: function(shortcutName, shortcutString)
        {
            /// <summary>Adds shortcut to the RadEditor's ShortCutManager</summary>
            /// <param name='shortcutName' type='String' domElement='false' optional=''>Name of the shortcut</param>
            /// <param name='shortcutString' type='String' domElement='false' optional=''>The key combination of the shortcut</param>
        },

        removeShortCut: function(shortcutName)
        {
            /// <summary>Removes a shortcut from the RadEditor's ShortCutManager</summary>
            /// <param name='shortcutName' type='String' domElement='false' optional=''>Name of the the shortcut</param>
        },

        setShortCut: function(shortcutName, shortcutString)
        {
            /// <summary>Sets a shortcut. If it does not exist in the ShortCutManager list it will be added as well</summary>
            /// <param name='shortcutName' type='String' domElement='false' optional=''>Name of the shortcut</param>
            /// <param name='shortcutString' type='String' domElement='false' optional=''>The key combination of the shortcut</param>
        },

        getContextMenuByTagName: function(tagName)
        {
            /// <summary>Returns a reference to the context menu object</summary>
            /// <param name='tagName' type='String' domElement='false' optional='false'>The Tag name of the context menu</param>
            /// <returns type='Object' mayBeNull='true'>Reference to the context menu object</returns>
        },

        setActive: function()
        {
            /// <summary>IE ONLY. Alias of setFocus</summary>
        },

        set_editable: function(editable)
        {
            /// <summary>Sets mode of the RadEditor's content area</summary>
            /// <param name='editable' type='Boolean' domElement='false' optional='false'>Specifies whether to enable or disalbe editing</param>
        },

        get_editable: function()
        {
            /// <summary>Returns whether the RadEditor's content area is editable on no</summary>
            /// <returns type='Boolean' mayBeNull='false'></returns>
        },

        showDialog: function(dialogName, argument, callbackFunction)
        {
            /// <summary>
            /// Open a dialog
            /// </summary>
            /// <param name="dialogName" type="String">
            ///		The name of the dialog to be opened.
            /// </param>
            /// <param name="argument" type="Object">
            /// The client parameters to be passed to the dialog (when the dialog is a IParameterConsumer). Optional.
            /// </param>
            /// <param name="callbackFunction" type="Function">
            ///		The function to be executed when the dialog is closed.
            ///		<br/>The function syntax is myFunction(sender, args);, where args is the
            ///		parameter passed to the close(args) method of the RadWindow object in the dialog;
            /// </param>
            /// <remarks>
            /// To open a dialog, a DialogDefinition with the same name must be declared in the RadEditor
            /// DialogDefinitions collection server-side.
            /// </remarks>

        },

        get_initialContent: function()
        {
            /// <summary>Returns the initial content of RadEditor</summary>
            /// <returns type='String' mayBeNull=''>The current initial content of RadEditor</returns>
        },

        get_localization: function()
        {
            /// <summary>Returns an associative array of RadEditor's localization</summary>
            /// <returns type='Object' mayBeNull='false'></returns>
        },

        get_language: function()
        {
            /// <summary>Returns current language</summary>
            /// <returns type='String' mayBeNull='false'></returns>
        },

        get_useClassicDialogs: function()
        {
            /// <summary>Returns whether RadEditor is using RadWindow windows or browser popup windows for its dialogs.</summary>
            /// <returns type='Boolean' mayBeNull='false'></returns>
        }
    };

    Telerik.Web.UI.RadEditor.registerClass("Telerik.Web.UI.RadEditor", Sys.UI.Control);

})();/// <reference Name="MicrosoftAjax.js">

Type.registerNamespace("Telerik.Web.UI");
Type.registerNamespace("Telerik.Web.UI.Editor");

$telerik.toEditorFiltersManager = function(object)
{
    /// <summary>Casts an object to a Telerik.Web.UI.Editor.FiltersManager instance</summary>
    /// <returns type="Telerik.Web.UI.Editor.FiltersManager">A Telerik.Web.UI.Editor.FiltersManager instance</returns>
};
$telerik.findEditorFiltersManager = function(id, parent)
{
    /// <summary>Finds a Telerik.Web.UI.Editor.FiltersManager instance</summary>
    /// <param name='id'>A string that contains ID of the Telerik.Web.UI.Editor.FiltersManager to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the Telerik.Web.UI.Editor.FiltersManager to find</param>
    /// <returns type="Telerik.Web.UI.Editor.FiltersManager">The Telerik.Web.UI.Editor.FiltersManager instance</returns>
};

$telerik.toEditorFilter = function(object)
{
    /// <summary>Casts an object to a Telerik.Web.UI.Editor.Filter instance</summary>
    /// <returns type="Telerik.Web.UI.Editor.Filter">A Telerik.Web.UI.Editor.Filter instance</returns>
};
$telerik.findEditorFilter = function(id, parent)
{
    /// <summary>Finds a Telerik.Web.UI.Editor.Filter instance</summary>
    /// <param name='id'>A string that contains ID of the Telerik.Web.UI.Editor.Filter to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the Telerik.Web.UI.Editor.Filter to find</param>
    /// <returns type="Telerik.Web.UI.Editor.Filter">The Telerik.Web.UI.Editor.Filter instance</returns>
};

(function()
{
    Telerik.Web.UI.Editor.Filter = function()
    {

    };
    Telerik.Web.UI.Editor.Filter.prototype =
{

    getHtmlContent: function(content)
    {
        /// <summary>Fires when RadEditor's mode is changed to HTML View Mode </summary>
        /// <param name='content' type='String' optional='false'>The content area's content</param>
        /// <returns type='String'>The content parameter modified by the filter</returns>
    },

    getDesignContent: function(content)
    {
        /// <summary>Fires when RadEditor's mode is changed to Design View Mode</summary>
        /// <param name='content' type='Object' optional=''>The content area - the type depends on the type of the filter (as a DOM element if the filter is a DOM filter or as a string if the filter is not a DOM filter)</param>
        /// <returns type='Object'>The content parameter modified by the filter - the type depends on the type of the filter</returns>
    },

    get_isDom: function()
    {
        /// <summary>Specifies whether the filter is of DOM or String type</summary>
        /// <returns type='Boolean' mayBeNull='false'></returns>
    },

    set_isDom: function(value)
    {
        /// <summary>Specifies whether the filter is DOM or String</summary>
        /// <param name='value' type='Boolean' domElement='false' optional='false'>Boolean value whether the filter is DOM or String</param>
    },

    get_enabled: function()
    {
        /// <summary>Specifies whether the filter is enabled or disabled</summary>
        /// <returns type='Boolean' mayBeNull='false'></returns>
    },

    set_enabled: function(value)
    {
        /// <summary>Enables/Disables the filter</summary>
        /// <param name='value' type='Boolean' domElement='false' optional='false'>Boolean value whether to enable or disable the filter</param>
    },

    get_name: function()
    {
        /// <summary>Returns the filter's name</summary>
        /// <returns type='String' mayBeNull='false'>The name of the filter</returns>
    },

    set_name: function(value)
    {
        /// <summary>Sets the filter's name</summary>
        /// <param name='value' type='String' domElement='false' optional='false'>The name of the filter to be set</param>
    },

    get_description: function()
    {
        /// <summary>Returns the filter's description</summary>
        /// <returns type='String' mayBeNull='false'>The filter's description</returns>
    },

    set_description: function(value)
    {
        /// <summary>Sets the filter's description</summary>
        /// <param name='value' type='String' domElement='false' optional='false'>The description to set to the filter</param>
    }

};

Telerik.Web.UI.Editor.Filter.registerClass("Telerik.Web.UI.Editor.Filter", Sys.UI.Control);


    Telerik.Web.UI.Editor.FiltersManager = function()
    {

    };
    Telerik.Web.UI.Editor.FiltersManager.prototype =
{

    clear: function()
    {
        /// <summary>Clears the content filters collection</summary>
    },

    get_enableXhtmlFilter: function()
    {
        /// <summary>Returns a boolean value which indicates whether the XHTML filter is enabled or disabled</summary>
        /// <returns type='Boolean' mayBeNull='false'></returns>
    },

    set_enableXhtmlFilter: function(value)
    {
        /// <summary>Sets the state of XHTML filter</summary>
        /// <param name='value' type='Boolean' domElement='false' optional=''>Boolean value to enable/disable the filter</param>
    },

    add: function(filter)
    {
        /// <summary>Add a content filter to the filters collection</summary>
        /// <param name='filter' type='Telerik.Web.UI.Editor.Filter' domElement='false' optional='false'>Instance of a Filter Object</param>
    },

    addAt: function(filter, index)
    {
        /// <summary>Add a content filter to the filters collection at index</summary>
        /// <param name='filter' type='Telerik.Web.UI.Editor.Filter' domElement='false' optional='false'>Instance of a Filter Object</param>
        /// <param name='index' type='Integer' domElement='false'>The index location where item should be inserted</param>
    },

    remove: function(filter)
    {
        /// <summary>Remove content filter from the filters collection</summary>
        /// <param name='filter' type='Telerik.Web.UI.Editor.Filter' domElement='false' optional='false'>Instance of a Filter Object</param>
    },

    removeAt: function(index)
    {
        /// <summary>Removes a content filter from the filters collection by index</summary>
        /// <param name='index' type='Integer' domElement='false' optional='false'>The index location of the filter in the FiltersCollection</param>
    },

    getFilterAt: function(index)
    {
        /// <summary>Returns the content filter from the given Index</summary>
        /// <param name='index' type='Integer' domElement='false' optional='false'>The index location of the filter in the FiltersCollection</param>
        /// <returns type='Telerik.Web.UI.Editor.Filter' mayBeNull='true'></returns>
    },

    getFilterByName: function(name)
    {
        /// <summary>Returns the content filter by name</summary>
        /// <param name='name' type='String' domElement='false' optional='false'>Name of the filter</param>
        /// <returns type='Telerik.Web.UI.Editor.Filter' mayBeNull='true'></returns>
    },

    getDesignContent: function(contentAreaHtml)
    {
        /// <summary>Fires when RadEditor's mode is changed to Design View Mode and executes all the String based content filters</summary>
        /// <param name='contentAreaHtml' type='String' domElement='false' optional='false'>The RadEditor's content area as a string</param>
        /// <returns type='String'>The contentAreaHtml parameter modified by the filter</returns>
    },

    getDesignContentDom: function(contentArea)
    {
        /// <summary>Fires when RadEditor's mode is changed to Design View Mode after getDesignContent() - executes all the DOM based content filters</summary>
        /// <param name='contentArea' type='Object' domElement='true' optional='false'>The content area DOM element</param>
        /// <returns type='Object'>The contentArea parameter modified by the filter</returns>
    },

    getHtmlContent: function(contentAreaElement)
    {
        /// <summary>Fires when RadEditor's mode is changed to HTML View Mode</summary>
        /// <param name='contentAreaElement' type='Object' domElement='true' optional='false'>The content area DOM element</param>
        /// <returns type='Object'>The contentAreaElement parameter modified by the filter</returns>
    }
};
    Telerik.Web.UI.Editor.FiltersManager.registerClass("Telerik.Web.UI.Editor.FiltersManager", Sys.UI.Control);
})();/// <reference Name="MicrosoftAjax.js">

Type.registerNamespace("Telerik.Web.UI");
Type.registerNamespace("Telerik.Web.UI.Editor");

$telerik.toEditorSelection = function(object)
{
    /// <summary>Casts an object to an Telerik.Web.UI.Editor.Selection instance</summary>
    /// <returns type="Telerik.Web.UI.Editor.Selection">A Telerik.Web.UI.Editor.Selection instance</returns>
};
$telerik.findEditorSelection = function(id, parent)
{
    /// <summary>Finds a EditorSelection instance</summary>
    /// <param name='id'>A string that contains ID of the Telerik.Web.UI.Editor.Selection to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the Telerik.Web.UI.Editor.Selection to find</param>
    /// <returns type="Telerik.Web.UI.Editor.Selection">The Telerik.Web.UI.Editor.Selection instance</returns>
};

(function()
{

    Telerik.Web.UI.Editor.Selection = function(contentWindow)
    {
    };
    Telerik.Web.UI.Editor.Selection.prototype =
{
    selectElement: function(oElement)
    {
        /// <summary>Adds an element to current selection</summary>
        /// <param name='oElement' type='Object' domElement='true' optional='false'>DOM element to be added</param>
    },

    pasteHtml: function(htmlString, bSelContent)
    {
        /// <summary>Pastes string at current selection</summary>
        /// <param name='htmlString' type='String' domElement='false' optional='false'>String to be pasted</param>
        /// <param name='bSelContent' type='Boolean' domElement='false' optional='true'>Specifies whether to select pasted content after execution</param>
    },

    selectRange: function(range)
    {
        /// <summary>Selects the previously stored range</summary>
        /// <param name='range' type='Object' optional='false'></param>
    },

    getBrowserSelection: function()
    {
        /// <summary>Returns the browser's Selection object</summary>
        /// <returns type='Object'></returns>
    },

    getRange: function()
    {
        /// <summary>Returns a reference to a range object</summary>
        /// <returns type='Object' mayBeNull='false'></returns>
    },

    getParentElement: function()
    {
        /// <summary>Returns a reference to the selection's parent DOM element</summary>
        /// <returns type='Object'></returns>
    },

    isControl: function()
    {
        /// <summary>Specifies whether the current selection is a control or not.</summary>
    },

    getText: function()
    {
        /// <summary>Returns the selection's content as plain text</summary>
        /// <returns type='String'></returns>
    },

    getHtml: function()
    {
        /// <summary>Returns the selection's content as HTML</summary>
        /// <returns type='String'></returns>
    },

    collapse: function(toStart)
    {
        /// <summary>Collapses a selection to the starting or ending position.</summary>
        /// <param name='toStart' type='Boolean' domElement='false'>The direction in which to collapse the selection. If true the selection will collapse from end to start.</param>
    }
};
Telerik.Web.UI.Editor.Selection.registerClass("Telerik.Web.UI.Editor.Selection", Sys.UI.Control);
})();/// <reference Name="MicrosoftAjax.js">


$telerik.toFileExplorer = function(object)
{
	/// <summary>Casts an object to a RadFileExplorer instance</summary>
	/// <returns type="Telerik.Web.UI.RadFileExplorer">A RadFileExplorer instance</returns>
};
$telerik.findFileExplorer = function(id, parent)
{
	/// <summary>Finds a RadFileExplorer instance</summary>
	/// <param name='id'>A string that contains ID of the RadFileExplorer to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadFileExplorer to find</param>
	/// <returns type="Telerik.Web.UI.RadFileExplorer">The RadFileExplorer instance</returns>
};

(function()
{
	Telerik.Web.UI.RadFileExplorer = function(element)
	{

	};
	Telerik.Web.UI.RadFileExplorer.prototype =
{

	loadFolder: function(path, addToStack)
	{
		/// <summary>Loads a new folder and sets the focus on it. The second parameter accepts a Boolean value
		/// that determines whether the current change of the directory to be stored in the Previous/Next stack</summary>
		/// <param name='path' type='String' domElement='false' optional='false'>The path to the folder</param>
		/// <param name='addToStack' type='Boolean' domElement='false' optional='true'>Indicates whether the loaded path to be added to the Back/Forward stack</param>
	},

	open: function(currentItem)
	{
		/// <summary>Opens a file</summary>
		/// <param name='currentItem' type='Telerik.Web.UI.FileExplorerItem' domElement='false' optional='true'>The item that will be opened. If the passed parameter is null then the currently selected item will be opened</param>
	},

	deleteSelectedItems: function()
	{
		/// <summary>Performs delete operation for all of the currently selected items on the Grid</summary>
	},
	
	deleteItem: function(pathToItem)
	{
		/// <summary>Deletes an item by its virtual path</summary>
		/// <param name='pathToItem' type='String' domElement='false' optional='false'>The virtual path to the item</param>
	},

	createNewDirectory: function(path, newName)
	{
		/// <summary>Creates a new directory. The path parameter should be a virtual path. 
		/// In case that the second parameter is not specified a radprompt dialog appears and asks for the new name.</summary>
		/// <param name='path' type='String' domElement='false' optional='false'>The virtual path to the item</param>
		/// <param name='newName' type='String' domElement='false' optional='true'></param>
	},

	refresh: function()
	{
		/// <summary>Refreshes the current folder</summary>
	},
	
	getFileExplorerItemFromNode: function(node)
	{
		/// <summary>Gets the FileExplorerItem by the passed TreeNode object</summary>
		/// <param name='node' type='Telerik.Web.UI.RadTreeNode' domElement='false' optional='false'>A node from the TreeView</param>
		/// <returns type='Telerik.Web.UI.FileExplorerItem' mayBeNull='false'></returns>
	},

	get_selectedItems: function()
	{
		/// <summary>Returns an array of the selected items on the Grid. The items are of type Telerik.Web.UI.FileExplorerItem
		/// Returns the selected item on the TreeView if there is no selected items in the Grid </summary>
		/// <returns type='Array' mayBeNull='false'></returns>
	},

	get_selectedItem: function()
	{
		/// <summary>Returns the first selected item on the Grid. Returns the selected item on the TreeView if there is no selected items in the Grid</summary>
		/// <returns type='Telerik.Web.UI.FileExplorerItem' mayBeNull='false'></returns>
	},

	get_currentDirectory: function()
	{
		/// <summary>Returns a string value that represents the path to the currently selected directory. The returned path is a virtual path, such as '/RootProjectFolder/SelectedDir'</summary>
		/// <returns type='String' mayBeNull='false'></returns>
	},

	set_currentDirectory: function(value, addToStack)
	{
		/// <summary>Changes the currently selected directory</summary>
		/// <param name='value' type='String' domElement='false' optional='false'>The new path, relevant to the root path of the project</param>
		/// <param name='addToStack' type='Boolean' domElement='false' optional='true'>Determines whether the current change of the directory to be stored in the Previous � Next stack</param>
	},

	get_currentPermissions: function()
	{
		/// <summary>Returns the permissions set to the currently selected folder in the TreeView</summary>
		/// <returns type='Telerik.Web.UI.FileExplorerItemPermissions' mayBeNull='false'></returns>
	},

	get_pathSeparator: function()
	{
		/// <summary>Returns the symbol used as path separator</summary>
		/// <returns type='String' mayBeNull='false'></returns>
	},

	get_allowPaging: function()
	{
		/// <summary>Returns whether the Grid's paging is enabled</summary>
		/// <returns type='Boolean' mayBeNull='false'></returns>
	},

	get_enableOpenFile: function()
	{
		/// <summary>Returns whether a file can be opened for preview</summary>
		/// <returns type='Boolean' mayBeNull='false'></returns>
	},
	set_enableOpenFile: function(value)
	{
		/// <summary>Sets whether a file can be opened for preview</summary>
		/// <param name='value' type='Boolean' domElement='false' optional='false'></param>
	},
	get_addressBox: function()
	{
		/// <summary>Returns the ClientID of the input that shows the currently selected folder. Returns an empty string when the AddressBox is not visible</summary>
		/// <returns type='String' mayBeNull='false'></returns>
	},

	get_windowManager: function()
	{
		/// <summary>Returns a reference to the embedded RadWindowManager object</summary>
		/// <returns type='Telerik.Web.UI.RadWindowManager' mayBeNull='false'></returns>
	},

	get_ajaxLoadingPanel: function()
	{
		/// <summary>Returns a reference to the embedded RadAjaxLoadingPanel object</summary>
		/// <returns type='Telerik.Web.UI.RadAjaxLoadingPanel' mayBeNull='false'></returns>
	},

	get_gridContextMenu: function()
	{
		/// <summary>Returns a reference to a RadMenu object. Returns 'null' when the embedded grid is not visible</summary>
		/// <returns type='Telerik.Web.UI.RadMenu' mayBeNull='true'></returns>
	},

	get_tree: function()
	{
		/// <summary>Returns a reference to the embedded RadTreeView object. Returns 'null' when the embedded TreeView is not visible</summary>
		/// <returns type='Telerik.Web.UI.RadTreeView' mayBeNull='true'></returns>
	},

	get_grid: function()
	{
		/// <summary>Returns a reference to the embedded RadGrid object. Returns 'null' when the embedded Grid is not visible</summary>
		/// <returns type='Telerik.Web.UI.RadGrid' mayBeNull='true'></returns>
	},

	get_toolbar: function()
	{
		/// <summary>Returns a reference to the embedded RadToolBar object. Returns 'null' when the embedded ToolBar is not visible</summary>
		/// <returns type='Telerik.Web.UI.RadToolBar' mayBeNull='true'></returns>
	},

	get_newFolderDefaultValue: function()
	{
		/// <summary>Returns the default text that is shown in the CreateNewFolder dialog</summary>
		/// <returns type='String' mayBeNull='false'></returns>
	},

	set_newFolderDefaultValue: function(newDefaultName)
	{
		/// <summary>Sets the default text that will be shown in the CreateNewFolder dialog</summary>
		/// <param name='newDefaultName' type='String' domElement='false' optional='false'></param>
	},
	
	add_itemSelected: function(handler)
	{
		/// <summary>Adds a handler for the itemSelected event</summary>
		/// <param name='handler' type='Function'>The handler for the itemSelected event</param>
	},

	remove_itemSelected: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the itemSelected event</summary>
		/// <param name='handler' type='Function'>The handler for the itemSelected event</param>
	},

	add_folderLoaded: function(handler)
	{
		/// <summary>Adds a handler for the folderLoaded event</summary>
		/// <param name='handler' type='Function'>The handler for the folderLoaded event</param>
	},

	remove_folderLoaded: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the folderLoaded event</summary>
		/// <param name='handler' type='Function'>The handler for the folderLoaded event</param>
	},

	add_fileOpen: function(handler)
	{
		/// <summary>Adds a handler for the fileOpen event</summary>
		/// <param name='handler' type='Function'>The handler for the fileOpen event</param>
	},

	remove_fileOpen: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the fileOpen event</summary>
		/// <param name='handler' type='Function'>The handler for the fileOpen event</param>
	},

	add_folderChange: function(handler)
	{
		/// <summary>Adds a handler for the folderChange event</summary>
		/// <param name='handler' type='Function'>The handler for the folderChange event</param>
	},

	remove_folderChange: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the folderChange event</summary>
		/// <param name='handler' type='Function'>The handler for the folderChange event</param>
	},

	add_init: function(handler)
	{
		/// <summary>Adds a handler for the init event</summary>
		/// <param name='handler' type='Function'>The handler for the init event</param>
	},

	remove_init: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the init event</summary>
		/// <param name='handler' type='Function'>The handler for the init event</param>
	},

	add_load: function(handler)
	{
		/// <summary>Adds a handler for the load event</summary>
		/// <param name='handler' type='Function'>The handler for the load event</param>
	},

	remove_load: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the load event</summary>
		/// <param name='handler' type='Function'>The handler for the load event</param>
	},

	add_createNewFolder: function(handler)
	{
		/// <summary>Adds a handler for the createNewFolder event</summary>
		/// <param name='handler' type='Function'>The handler for the createNewFolder event</param>
	},

	remove_createNewFolder: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the createNewFolder event</summary>
		/// <param name='handler' type='Function'>The handler for the createNewFolder event</param>
	},

	add_delete: function(handler)
	{
		/// <summary>Adds a handler for the delete event</summary>
		/// <param name='handler' type='Function'>The handler for the delete event</param>
	},

	remove_delete: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the delete event</summary>
		/// <param name='handler' type='Function'>The handler for the delete event</param>
	},

	add_move: function(handler)
	{
		/// <summary>Adds a handler for the move event</summary>
		/// <param name='handler' type='Function'>The handler for the move event</param>
	},

	remove_move: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the move event</summary>
		/// <param name='handler' type='Function'>The handler for the move event</param>
	},

	add_copy: function(handler)
	{
		/// <summary>Adds a handler for the move event</summary>
		/// <param name='handler' type='Function'>The handler for the copy event</param>
	},

	remove_copy: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the copy event</summary>
		/// <param name='handler' type='Function'>The handler for the copy event</param>
	},

	add_ajaxRequestStart: function(handler)
	{
		/// <summary>Adds a handler for the ajaxRequestStart event</summary>
		/// <param name='handler' type='Function'>The handler for the ajaxRequestStart event</param>
	},

	remove_ajaxRequestStart: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the ajaxRequestStart event</summary>
		/// <param name='handler' type='Function'>The handler for the ajaxRequestStart event</param>
	},

	add_ajaxRequestEnd: function(handler)
	{
		/// <summary>Adds a handler for the ajaxRequestEnd event</summary>
		/// <param name='handler' type='Function'>The handler for the ajaxRequestEnd event</param>
	},

	remove_ajaxRequestEnd: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the ajaxRequestEnd event</summary>
		/// <param name='handler' type='Function'>The handler for the ajaxRequestEnd event</param>
	}
};

Telerik.Web.UI.RadFileExplorer.registerClass("Telerik.Web.UI.RadFileExplorer", Sys.UI.Control);

	Telerik.Web.UI.FileExplorerItemType = function()
	{
		/// <summary></summary>
		/// <field name="File" type="Number" integer="true" static="true"></field>
		/// <field name="Directory" type="Number" integer="true" static="true"></field>
	};

	Telerik.Web.UI.FileExplorerItemType.prototype =
{
	File: 0,
	Directory: 1
}
	Telerik.Web.UI.FileExplorerItemType.registerEnum("Telerik.Web.UI.FileExplorerItemType");

	Telerik.Web.UI.FileExplorerItemPermissions = function()
	{
		/// <summary></summary>
		/// <field name="Read" type="Number" integer="true" static="true"></field>
		/// <field name="Upload" type="Number" integer="true" static="true"></field>
		/// <field name="Delete" type="Number" integer="true" static="true"></field>
	};
	Telerik.Web.UI.FileExplorerItemPermissions.prototype =
{
	Read: 1,
	Upload: 2,
	Delete: 4
}
	Telerik.Web.UI.FileExplorerItemPermissions.registerEnum("Telerik.Web.UI.FileExplorerItemPermissions");

	Telerik.Web.UI.FileExplorerMode = function()
	{
		/// <summary></summary>
		/// <field name="Default" type="Number" integer="true" static="true"></field>
		/// <field name="FileTree" type="Number" integer="true" static="true"></field>
	};
	Telerik.Web.UI.FileExplorerMode.prototype =
{
	Default: 1,
	FileTree: 2
}
	Telerik.Web.UI.FileExplorerMode.registerEnum("Telerik.Web.UI.FileExplorerMode");

})();/// <reference Name="MicrosoftAjax.js">

$telerik.toRotator = function(object)
{
	/// <summary>Casts an object to a RadRotator instance</summary>
	/// <returns type="Telerik.Web.UI.RadRotator">A RadRotator instance</returns>
};
$telerik.findRotator = function(id, parent)
{
	/// <summary>Finds a RadRotator instance</summary>
	/// <param name='id'>A string that contains ID of the RadRotator to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadRotator to find</param>
	/// <returns type="Telerik.Web.UI.RadRotator">The RadRotator instance</returns>
};

(function()
{

	Telerik.Web.UI.RadRotator = function(element)
	{

	};
	Telerik.Web.UI.RadRotator.prototype =
{

	get_currentItem: function()
	{
		/// <summary>Returns the current item shown in the rotator</summary>
		/// <returns type='Telerik.Web.UI.RadRotatorItem' mayBeNull='false'></returns>
	},

	scrollViewport: function()
	{
		/// <summary>Scrols the whole visible area, not just an item</summary>
	},

	scrollItem: function()
	{
		/// <summary>Scrols an item only</summary>
	},

	pause: function()
	{
		/// <summary>Pauses the rotator's animation</summary>
	},

	resume: function()
	{
		/// <summary>Resumes the rotator's animation</summary>
	},

	stop: function()
	{
		/// <summary>Stops the rotator's animation</summary>
	},

	start: function()
	{
		/// <summary>Starts the rotator's animation</summary>
	},

	isViewportScrollMode: function()
	{
		/// <summary>Indicates whether the rotator is configured to scroll an item or the whole viewport</summary>
		/// <returns type='Boolean' mayBeNull='false'></returns>
	},

	stopViewportAnimation: function()
	{
		/// <summary>Forces the rotator to fully display an item, even when the item is partially shown and the rotator is paused</summary>
	},

	showNext: function(animationDir)
	{
		/// <summary>Scrolls the rotator in the specified direction</summary>
		/// <param name='animationDir' type='Telerik.Web.UI.RotatorScrollDirection' domElement='false' optional='false'>The scroll direction</param>
	},

	isAutomaticAdvance: function()
	{
		/// <summary>Returns whether the rotator is in AutomaticAdvance mode</summary>
		/// <returns type='Boolean' mayBeNull='false'></returns>
	},

	isSlideShow: function()
	{
		/// <summary>Returns whether the rotator is in SlideShow mode</summary>
		/// <returns type='Boolean' mayBeNull='false'></returns>
	},

	isScrollingForward: function()
	{
		/// <summary>Returns a Boolean that indicates if the rotator is scrolling forward</summary>
		/// <returns type='Boolean' mayBeNull='false'></returns>
	},

	isScrollingLeft: function()
	{
		/// <summary>Returns a Boolean that indicates if the rotator is scrolling forward</summary>
		/// <returns type='Boolean' mayBeNull='false'></returns>
	},

	isScrollingUp: function()
	{
		/// <summary>Returns a Boolean that indicates if the rotator is scrolling upward</summary>
		/// <returns type='Boolean' mayBeNull='false'></returns>
	},

	startAutoPlay: function()
	{
		/// <summary>Starts the rotator's animation from the begining</summary>
	},

	get_defaultAnimationDirection: function()
	{
		/// <summary>Returns the default animation direction</summary>
		/// <returns type='Telerik.Web.UI.RotatorScrollDirection' mayBeNull='false'></returns>
	},

	get_containerElement: function()
	{
		/// <summary>Returns the UL DOMElement that wraps all rotator's items </summary>
		/// <returns type='object' mayBeNull='false' domElement='true'></returns>
	},

	get_rotatorType: function()
	{
		/// <summary>Returns the rotator's type</summary>
		/// <returns type='Telerik.Web.UI.RotatorType' mayBeNull='false'></returns>
	},

	set_rotatorType: function(value)
	{
		/// <summary>Sets the rotator's type</summary>
		/// <param name='value' type='Telerik.Web.UI.RotatorType' domElement='false' optional='false'>The rotator's type</param>
	},

	get_wrapFrames: function()
	{
		/// <summary>Returns true if RadRotator is set to start scrolling its frames from the beginning, once the rotator shows the last frame</summary>
		/// <returns type='Boolean' mayBeNull='false'></returns>
	},

	set_wrapFrames: function(value)
	{
		/// <summary>Sets whether RadRotator to start scrolling from the beginning, once the rotator shows the last frame</summary>
		/// <param name='value' type='Boolean' domElement='false' optional='false'></param>
	},

	get_scrollDuration: function()
	{
		/// <summary>Returns the speed in milliseconds for scrolling rotator items</summary>
		/// <returns type='Number' mayBeNull='false' integer='true'></returns>
	},

	set_scrollDuration: function(value)
	{
		/// <summary>Sets the speed in milliseconds for scrolling rotator items</summary>
		/// <param name='value' type='Number' domElement='false' optional='false' integer='true'></param>
	},

	isVertical: function()
	{
		/// <summary>Returns whether Down, Up or both ScrollDirections are set</summary>
		/// <returns type='Boolean' mayBeNull='false'></returns>
	},

	get_height: function()
	{
		/// <summary>Returns the rotator's height</summary>
		/// <returns type='Integer' mayBeNull='false' integer='true'></returns>
	},

	get_width: function()
	{
		/// <summary>Returns the rotator's width</summary>
		/// <returns type='Integer' mayBeNull='false' integer='true'></returns>
	},

	get_scrollDirection: function()
	{
		/// <summary>Returns the rotator's ScrollDirection</summary>
		/// <returns type='Telerik.Web.UI.RotatorScrollDirection' mayBeNull='false'></returns>
	},

	set_scrollDirection: function(value)
	{
		/// <summary>Sets the rotator's ScrollDirection</summary>
		/// <param name='value' type='Telerik.Web.UI.RotatorScrollDirection' domElement='false' optional='false'>The new scrooll direction</param>
	},

	get_frameDuration: function()
	{
		/// <summary>Returns the time in milliseconds each frame will display in automatic scrolling scenarios</summary>
		/// <returns type='Integer' mayBeNull='false' integer='true'></returns>
	},

	set_frameDuration: function(value)
	{
		/// <summary>Sets the time in milliseconds each frame will display in automatic scrolling scenarios</summary>
		/// <param name='value' type='Integer' domElement='false' optional='false'></param>
	},

	get_initialItemIndex: function()
	{
		/// <summary>Returns the rotator's initialy shown item's index</summary>
		/// <returns type='Integer' mayBeNull='false' integer='true'></returns>
	},

	isVisible: function()
	{
		/// <summary>Returns whether the rotator is visible</summary>
		/// <returns type='Boolean' mayBeNull='false'></returns>
	},

	repaint: function()
	{
		/// <summary>Redraw the rotator</summary>
	},

	add_itemClicking: function(handler)
	{
		/// <summary>Adds a handler for the itemClicking event</summary>
		/// <param name='handler' type='Function'>The handler for the itemClicking event</param>
	},

	remove_itemClicking: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the itemClicking event</summary>
		/// <param name='handler' type='Function'>The handler for the itemClicking event</param>
	},

	add_itemClicked: function(handler)
	{
		/// <summary>Adds a handler for the itemClicked event</summary>
		/// <param name='handler' type='Function'>The handler for the itemClicked event</param>
	},

	remove_itemClicked: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the itemClicked event</summary>
		/// <param name='handler' type='Function'>The handler for the itemClicked event</param>
	},

	add_mouseOver: function(handler)
	{
		/// <summary>Adds a handler for the mouseOver event</summary>
		/// <param name='handler' type='Function'>The handler for the mouseOver event</param>
	},

	remove_mouseOver: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the mouseOver event</summary>
		/// <param name='handler' type='Function'>The handler for the mouseOver event</param>
	},

	add_mouseOut: function(handler)
	{
		/// <summary>Adds a handler for the mouseOut event</summary>
		/// <param name='handler' type='Function'>The handler for the mouseOut event</param>
	},

	remove_mouseOut: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the mouseOut event</summary>
		/// <param name='handler' type='Function'>The handler for the mouseOut event</param>
	},

	add_itemShowing: function(handler)
	{
		/// <summary>Adds a handler for the itemShowing event</summary>
		/// <param name='handler' type='Function'>The handler for the itemShowing event</param>
	},

	remove_itemShowing: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the itemShowing event</summary>
		/// <param name='handler' type='Function'>The handler for the itemShowing event</param>
	},

	add_itemShown: function(handler)
	{
		/// <summary>Adds a handler for the itemShown event</summary>
		/// <param name='handler' type='Function'>The handler for the itemShown event</param>
	},

	remove_itemShown: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the itemShown event</summary>
		/// <param name='handler' type='Function'>The handler for the itemShown event</param>
	},

	add_load: function(handler)
	{
		/// <summary>Adds a handler for the load event</summary>
		/// <param name='handler' type='Function'>The handler for the load event</param>
	},

	remove_load: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the load event</summary>
		/// <param name='handler' type='Function'>The handler for the load event</param>
	},

	add_buttonOver: function(handler)
	{
		/// <summary>Adds a handler for the buttonOver event</summary>
		/// <param name='handler' type='Function'>The handler for the buttonOver event</param>
	},

	remove_buttonOver: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the buttonOver event</summary>
		/// <param name='handler' type='Function'>The handler for the buttonOver event</param>
	},

	add_buttonOut: function(handler)
	{
		/// <summary>Adds a handler for the buttonOut event</summary>
		/// <param name='handler' type='Function'>The handler for the buttonOut event</param>
	},

	remove_buttonOut: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the buttonOut event</summary>
		/// <param name='handler' type='Function'>The handler for the buttonOut event</param>
	},

	add_buttonClick: function(handler)
	{
		/// <summary>Adds a handler for the buttonClick event</summary>
		/// <param name='handler' type='Function'>The handler for the buttonClick event</param>
	},

	remove_buttonClick: function(handler)
	{
		/// <summary>Removes the handler from the handlers collection that is associated with the buttonClick event</summary>
		/// <param name='handler' type='Function'>The handler for the buttonClick event</param>
	},

	get_items: function()
	{
		/// <summary>Returns the rotator's items. The items are of type Telerik.Web.UI.RadRotatorItems</summary>
		/// <returns type='Array' mayBeNull='false'></returns>
	},

	get_pauseOnMouseOver: function()
	{
		/// <summary>Returns true if the rotator is configured to stop when the mouse is over the rotator</summary>
		/// <returns type='Boolean' mayBeNull='false'></returns>
	},

	set_pauseOnMouseOver: function(value)
	{
		/// <summary>Sets a bool value indicating whether the rotator will stop when the mouse is over the control</summary>
		/// <param name='value' type='Boolean' optional='false'></param>
	},

	get_enabled: function()
	{
		/// <summary>Returns true if the rotator is enabled</summary>
		/// <returns type='' mayBeNull=''></returns>
	},

	set_enabled: function(value)
	{
		/// <summary>Enables or disables the rotator</summary>
		/// <param name='value' type='Boolean' domElement='false' optional='false'></param>
	}

};
Telerik.Web.UI.RadRotator.registerClass("Telerik.Web.UI.RadRotator", Sys.UI.Control);
	
	Telerik.Web.UI.RotatorScrollDirection = function()
	{
		/// <summary></summary>
		/// <field name="Left" type="Number" integer="true" static="true"></field>
		/// <field name="Right" type="Number" integer="true" static="true"></field>
		/// <field name="Up" type="Number" integer="true" static="true"></field>
		/// <field name="Down" type="Number" integer="true" static="true"></field>
	};
	Telerik.Web.UI.RotatorScrollDirection.prototype =
{
	Left: 1,
	Right: 2,
	Up: 4,
	Down: 8
}
	Telerik.Web.UI.RotatorScrollDirection.registerEnum("Telerik.Web.UI.RotatorScrollDirection", false);

	Telerik.Web.UI.RotatorAnimationType = function()
	{
		/// <summary></summary>
		/// <field name="None" type="Number" integer="true" static="true"></field>
		/// <field name="Fade" type="Number" integer="true" static="true"></field>
		/// <field name="Pulse" type="Number" integer="true" static="true"></field>
	};
	Telerik.Web.UI.RotatorAnimationType.prototype =
{
	None: 1,
	Fade: 2,
	Pulse: 3
}
	Telerik.Web.UI.RotatorAnimationType.registerEnum("Telerik.Web.UI.RotatorAnimationType", false);

	Telerik.Web.UI.RotatorType = function()
	{
		/// <summary></summary>
		/// <field name="AutomaticAdvance" type="Number" integer="true" static="true"></field>
		/// <field name="ButtonsOver" type="Number" integer="true" static="true"></field>
		/// <field name="Buttons" type="Number" integer="true" static="true"></field>
		/// <field name="SlideShow" type="Number" integer="true" static="true"></field>
		/// <field name="SlideShowButtons" type="Number" integer="true" static="true"></field>
		/// <field name="FromCode" type="Number" integer="true" static="true"></field>
	};
	Telerik.Web.UI.RotatorType.prototype =
{
	AutomaticAdvance: 1,
	ButtonsOver: 2,
	Buttons: 3,
	SlideShow: 4,
	SlideShowButtons: 5,
	FromCode: 6
}
	Telerik.Web.UI.RotatorType.registerEnum("Telerik.Web.UI.RotatorType", false);

})();Telerik.Web.UI.GridColumn = function(element) {
    /// <summary>Initializes a new instance of GridColumn</summary>
    /// <param name='element' domElement='true'>The DOM element of the GridColumn</param>   
};
Telerik.Web.UI.GridColumn.prototype =
{

    initialize: function() {
        /// <summary>Initializes the client side instance of GridColumn</summary>
    },

    dispose: function() {
        /// <summary>Disposes the client side instance of GridColumn</summary>
    },

    get_owner: function() {
        /// <summary> Returns the parent element of the GridColumn, the masterTableView instance</summary>
        /// <value type='Object'></value>
    },

    showHeaderMenu: function(e, offsetLeft, offsetTop) {
        /// <summary> Shows the hader menu of a GridColumn</summary>
        /// <param name='e' type='Object'></param>
        /// <param name='offsetLeft' type='Object'></param>
        /// <param name='offsetTop' type='Object'></param>
    },

    getFilterControlID: function(filterControlType, filterCondition) {
        /// <summary></summary>
        /// <param name='filterControlType' type='' domElement='' optional=''></param>
        /// <param name=' filterCondition' type='' domElement='' optional=''></param>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_resizable: function() {
        /// <summary> Returns a Boolean Value, indicating whether the column is resizable.</summary>
        /// <value type='Boolean'></value>
    },

    set_resizable: function(value) {
        /// <summary> Sets whether the column should be resizable or not</summary>
        /// <param name='value' type='Boolean'></param>
    },

    get_reorderable: function() {
        /// <summary> Returns a Boolean Value, indicating whether the column is reorerable.</summary>
        /// <value type='Boolean'></value>
    },

    set_reorderable: function(value) {
        /// <summary> Sets whether the column should be reorderable or not</summary>
        /// <param name='value' type='Boolean'></param>
    },

    get_uniqueName: function() {
        /// <summary>Returns the unique name of the column</summary>
        /// <value type='String'></value>
    },

    get_dataField: function() {
        /// <summary>Returns the name of the datafield associated with the column</summary>
        /// <value type='String'></value>
    },

    get_readOnly: function() {
        /// <summary>Returns a Boolean value, indicating whether a specific column is ReadOnly</summary>
        /// <value type='Boolean'></value>
    },

    get_dataType: function() {
        /// <summary> Returns a value, indicating the data type of the column, for exampe "System.Boolean"</summary>
        /// <value type='String'></value>
    },

    get_filterFunction: function() {
        /// <summary> Returns a value, indicating the current filter function</summary>
        /// <value type='String'></value>
    },

    set_filterFunction: function(value) {
        /// <summary> Sets a value, indicating the current filter function</summary>
        /// <param name='value' type='String'></param>
    },

    get_filterDelay: function() {
        /// <summary> Returns a value, specifying the filter delay for the column</summary>
        /// <value type='Number' integer="true"></value>
    },

    set_filterDelay: function(value) {
        /// <summary> Sets the filter delay for the column</summary>
        /// <param name='value' type='Number' integer="true"></param>
    }

};
Telerik.Web.UI.GridColumn.registerClass('Telerik.Web.UI.GridColumn', Sys.UI.Control);
Telerik.Web.UI.GridColumnEventArgs = function(gridColumn, domEvent) {

};
Telerik.Web.UI.GridColumnEventArgs.prototype =
{

    get_gridColumn: function() {
        /// <summary></summary>
        /// <value type='' mayBeNull=''></value>
    },

    get_domEvent: function() {
        /// <summary></summary>
        /// <value type='' mayBeNull=''></value>
    }

};

Telerik.Web.UI.GridColumnCancelEventArgs = function(gridColumn, domEvent) {

};
Telerik.Web.UI.GridColumnCancelEventArgs.prototype =
{

    get_gridColumn: function() {
        /// <summary></summary>
        /// <value type='' mayBeNull=''></value>
    },

    get_domEvent: function() {
        /// <summary></summary>
        /// <value type='' mayBeNull=''></value>
    }

};
Telerik.Web.UI.GridHeaderMenuCancelEventArgs = function(gridColumn, domEvent, headerMenu) {

};
Telerik.Web.UI.GridHeaderMenuCancelEventArgs.prototype =
{

    get_menu: function() {
        /// <summary></summary>
        /// <value type='' mayBeNull=''></value>
    }

};Telerik.Web.UI.GridColumnResizer = function(owner, isRealTimeResize) {
    /// <summary>Initializes a new instance of GridColumnResizer</summary>
    /// <param name='owner' domElement='true'>The DOM element of the GridColumnResizer</param>
    /// <param name='isRealTimeResize' Type="Boolean">A Boolean value, indicating whether this is real time resizing or not</param>   
};
Telerik.Web.UI.GridColumnResizer.prototype =
{

    dispose: function() {
        /// <summary>Disposes the instance of GridColumnResizer</summary>
    }

};
Telerik.Web.UI.GridColumnResizer.registerClass("Telerik.Web.UI.GridColumnResizer", null, Sys.IDisposable);
Telerik.Web.UI.GridDataItem = function(element) {
    /// <summary>Initializes a new instance of GridDataItem</summary>
    /// <param name='element' domElement='true'>The DOM element of the GridDataItem</param>  
};
Telerik.Web.UI.GridDataItem.prototype =
{

    initialize: function() {
        /// <summary>Initializes a new instance of GridDataItem</summary>
    },

    dispose: function() {
        /// <summary> Disposes the GridDataItem</summary>
    },

    get_owner: function() {
        /// <summary> Returns the parent element of the GridColumn, the masterTableView instance</summary>
        /// <value type='Object'></value>
    },

    get_cell: function(columnUniqueName) {
        /// <summary> Returns a specific cell from a dataItem, given the unique name of a column</summary>
        /// <param name='columnUniqueName' type='String'></param>
        /// <returns type='Object' domElement='true'></returns>
    },

    get_dataItem: function() {
        /// <summary> This method provides reference to the DataItem object (data container). Useful to obtain data from a particular row cell passing the unique name of the column as an indexer.
        /// </summary>
        /// <returns type='Object'></returns>
    },

    get_id: function() {
        /// <summary> Returns a String, representing the client_id for the element. 
        /// </summary>
        /// <returns type='String'></returns>
    },

    findControl: function(id) {
        /// <summary>This method takes control id for an argument and returns the corresponding client object of RadControl or ASP.NET AJAX control inside the grid row. Useful to reference client objects of controls inside a grid item cell on the client.
        ///</summary>
        /// <param name='id' type='String' ></param>
        /// <returns type='Object' ></returns>
    },

    findElement: function(id) {
        /// <summary> This method takes control id for an argument and returns the corresponding DOM element of html or rendered server control inside the grid row. Useful to reference html elements of controls inside a grid item cell on the client.
        /// </summary>
        /// <param name='id' type='String'></param>
        /// <returns type='Object' domElement='true'></returns>
    },

    getDataKeyValue: function(columnName) {
        /// <summary> Returns the dataKeyValue, associated with the dataItem.
        /// </summary>
        /// <param name='columnName' type='String'></param>
        /// <returns type='String'></returns>
    },

    get_selected: function() {
        /// <summary> Returns a Boolean value, indicating whether the dataItem is selected or not.
        /// </summary>
        /// <returns type='Boolean'></returns>
    },

    set_selected: function(value) {
        /// <summary> Sets a Boolean value, indicating whether the dataItem is selected or not.
        /// </summary>
        /// <param name='value' type='Boolean'></param>
    },

    get_expanded: function() {
        /// <summary> Returns a Boolean value, indicating whether the element is expanded or not.
        /// </summary>
        /// <returns type='Boolean'></returns>
    },

    set_expanded: function(value) {
        /// <summary> Sets a Boolean value, indicating whether the dataItem is expanded or not.
        /// </summary>
        /// <param name='value' type='Boolean'></param>
    },

    get_nestedViews: function() {
        /// <summary> Returns an array, containing the nestedViews of an element. Meaningful when we have a hierarchical structure.</summary>
        /// <returns type='Array' elementType='Object'></returns>
    },

    get_display: function() {
        /// <summary> Returns a value of type Boolean and specifies if the row is visible. 
        ///</summary>
        /// <returns type='Boolean'></returns>
    },

    set_display: function(value) {
        /// <summary> Sets a Boolean value, indicating whether the dataItem is displayed or not.
        /// </summary>
        /// <param name='value' type='Boolean'></param>
    },

    set_visible: function(value) {
        /// <summary> The method toggles the visibility of an item on and off. It takes a boolean value indicating whether the item will be visible or not..
        /// </summary>
        /// <param name='value' type='Boolean'></param>
    }

};

Telerik.Web.UI.GridDataItem.registerClass("Telerik.Web.UI.GridDataItem", Sys.UI.Control);Telerik.Web.UI.GridGroupPanel = function(element) {

};
Telerik.Web.UI.GridGroupPanel.prototype =
{

    initialize: function() {
        /// <summary></summary>
    },

    dispose: function() {
        /// <summary></summary>
    }

};
Telerik.Web.UI.GridGroupPanel.registerClass('Telerik.Web.UI.GridGroupPanel', Sys.UI.Control);
Telerik.Web.UI.GridGroupPanelItem = function(element) {

};
Telerik.Web.UI.GridGroupPanelItem.prototype =
{

    initialize: function() {
        /// <summary></summary>
    },

    dispose: function() {
        /// <summary></summary>
    }

}; 
Telerik.Web.UI.GridGroupPanelItem.registerClass('Telerik.Web.UI.GridGroupPanelItem', Sys.UI.Control);Telerik.Web.UI.GridItemResizer = function(owner) {
    /// <summary>Initializes a new instance of GridItemResizer</summary>
    /// <param name='owner' domElement='true'>The DOM element of the owner of the resizer</param>  
};
Telerik.Web.UI.GridItemResizer.prototype =
{

    dispose: function() {
        /// <summary> Disposes an instance of GridItemResizer</summary>
    }

};
Telerik.Web.UI.GridItemResizer.registerClass("Telerik.Web.UI.GridItemResizer", null, Sys.IDisposable);
Telerik.Web.UI.GridScrolling = function() {

};
Telerik.Web.UI.GridScrolling.prototype =
{

    initialize: function() {
        /// <summary></summary>
    },

    updated: function() {
        /// <summary></summary>
    },

    dispose: function() {
        /// <summary></summary>
    },

    applyFrozenScroll: function() {
        /// <summary></summary>
    },

    onGridFrozenScroll: function(args) {
        /// <summary></summary>
        /// <param name='args' type='' domElement='' optional=''></param>
    },

    onWindowResize: function() {
        /// <summary></summary>
    },

    setHeaderAndFooterDivsWidth: function() {
        /// <summary></summary>
    },

    setDataDivHeight: function() {
        /// <summary></summary>
    },

    initializeAutoLayout: function() {
        /// <summary></summary>
    },

    initializeSaveScrollPosition: function() {
        /// <summary></summary>
    }

};
Telerik.Web.UI.GridScrolling.registerClass('Telerik.Web.UI.GridScrolling', Sys.Component);

Telerik.Web.UI.GridScrollEventArgs = function(gridDataDiv) {

};
Telerik.Web.UI.GridScrollEventArgs.prototype =
{

    get_scrollTop: function() {
        /// <summary> Returns the scrollTop value for the element</summary>
        /// <returns type='Number' integer="false"></returns>
    },

    get_scrollLeft: function() {
        /// <summary> Returns the scrollLeft value for the element</summary>
        /// <returns type='Number' integer="false"></returns>
    },

    get_scrollControl: function() {
        /// <summary> Returns the gridDataDiv element of the grid</summary>
        /// <returns type='Object'></returns>
    },

    get_isOnTop: function() {
        /// <summary> Returns a Boolean value, indicating whether the scrollable area is scrolled to the top.</summary>
        /// <returns type='Boolean'></returns>
    },

    get_isOnBottom: function() {
        /// <summary> Returns a Boolean value, indicating whether the scrollable area is scrolled to the bottom.</summary>
        /// <returns type='Boolean'></returns>
    }

};Telerik.Web.UI.GridSelection = function() {
};
Telerik.Web.UI.GridSelection.prototype =
{

    initialize: function() {
        /// <summary></summary>
    },

    updated: function() {
        /// <summary></summary>
    },

    dispose: function() {
        /// <summary></summary>
    },

    get_owner: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_owner: function(value) {
        /// <summary></summary>
        /// <param name='value' type='' domElement='' optional=''></param>
    }

};
Telerik.Web.UI.GridSelection.registerClass('Telerik.Web.UI.GridSelection', Sys.Component);Telerik.Web.UI.GridTableView = function() {
    /// <summary>Initializes a new instance of GridTableView</summary>
};

Telerik.Web.UI.GridTableView.prototype =
{

    initialize: function() {
        /// <summary>Initializes a new instance of GridTableView</summary>
    },

    dispose: function() {
        /// <summary>Disposes the client instance of GridTableView</summary>
    },

    get_columns: function() {
        /// <summary>Returns a collection of c</summary>
        /// <value type='Array' elementType='Telerik.Web.UI.GridColumn'></value>
    },

    showFilterItem: function() {
        /// <summary>Shows the filter item for the tableview instance</summary>
    },

    hideFilterItem: function() {
        /// <summary>Hides the filter item for the tableview instance</summary>
    },

    get_isFilterItemVisible: function() {
        /// <summary> Returns a Boolean value, specifying whether the filtering item is visible</summary>
        /// <value type='Boolean' ></value>
    },

    get_pageSize: function() {
        /// <summary> Returns the page size for the respective GridTableView object</summary>
        /// <value type='Number' integer='true' ></value>
    },

    set_pageSize: function(size) {
        /// <summary> Sets the page size for the respective GridTableView object</summary>
        /// <param name='size' type='Number' integer="true"></param>
    },

    get_currentPageIndex: function() {
        /// <summary> Returns the current page index</summary>
        /// <value type='Number' integer='true' ></value>
    },

    set_currentPageIndex: function(index) {
        /// <summary> Sets the current page index</summary>
        /// <param name='index' type='Number' integer="true"></param>
    },

    set_dataSource: function(dataSource) {
        /// <summary> Method which can be used to assign data source for the corresponding GridTableView client instance. 
        /// This data source should be of JSON format which can be serialized by a web service or page method.</summary>
        /// <param name='dataSource' type='Object'></param>
    },

    dataBind: function() {
        /// <summary> Method which will force client rebind of the grid and will refresh its state when a new data source is assigned using the set_dataSource() method. 
        /// Meaningful in this scenario only.</summary>    
    },

    get_pageCount: function() {
        /// <summary> Returns the page count for the respective GridTableView object, i.e. the number of pages</summary>
        /// <value type='Number' integer='true' ></value>
    },

    getDataServiceQuery: function(entityName) {
        /// <summary> The method will automatically send a result (holding all filter and sort expressions in appropriate format and will apply
        /// paging on server using skip and top) to the query method of the ADO.NET Data Service. 
        /// The resulting value from the getDataServiceQuery(entityName) method will generate 
        /// an expression that can be recognized by the corresponding data service.</summary>
        /// <param name='entityName' type='String'></param>
        /// <value type='Object'></value>
    },

    get_virtualItemCount: function() {
        /// <summary> Gets the virtual item count value for the respective GridTableView object. Applies to client-side RadGrid binding only.</summary>
        /// <value type='Number' integer='true' ></value>
    },

    extractValuesFromItem: function(index) {
        /// <summary> Method which extracts the new values from the edited table row passed as an argument or the row corresponding to the index passed as an argument. 
        /// The values will be fetched purely client-side and the data will be returned in an object array which can be traversed to get each individual data entry.</summary>
        /// <param name='index' type='Number' integer='true'></param>
        /// <value type='Object'></value>
    },

    extractOldValuesFromItem: function(index) {
        /// <summary> Method which extracts the old values from the edited table row passed as an argument or the row corresponding to the index passed as an argument. 
        /// The values will be fetched purely client-side and the data will be returned in an object array which can be traversed to get each individual data entry.</summary>
        /// <param name='index' type='Number' integer='true'></param>
        /// <value type='Object'></value>
    },

    extractKeysFromItem: function(index) {
        /// <summary> Method which extracts the key values (added to the ClientDataKeyNames collection of the master/detail table) from the edited table row 
        /// passed as an argument or the row corresponding to the index passed as an argument. 
        /// The values will be fetched purely client-side and the data will be returned in an object array which can be traversed to get each individual data entry.</summary>
        /// <param name='index' type='Number' integer='true'></param>
        /// <value type='Object'></value>
    },

    get_sortExpressions: function() {
        /// <summary>A collection of Telerik.Web.UI.GridSortExpression objects. 
        /// Represents the sort expressions applied for the grid instance.
        /// The toString() javascript method executed over this collection will return coma separated string of all expressions 
        /// (in case of AllowMultiColumnSorting) or a single sort expression if multi-column sorting is disabled. 
        /// You can also utilize the toList() method in order to pass an array of items (representing the sort expressions applied) 
        /// to the server and operate with them using GridSortExpression server object. 
        /// Each sort expression (of type Telerik.Web.UI.GridSortExpression) has fieldName and sortOrder properties which hold
        /// the DataField of the sorted column and the sort direction (Ascending, Descending or None).
        ///  To retrieve the values from these properties use the get_fieldName() and get_sortOrder() properties of the corresponding GridSortExpression.</summary>
        /// <value type='Telerik.Web.UI.GridSortExpressions' elementtype='Object'></value>
    },

    get_filterExpressions: function() {
        /// <summary>A collection of Telerik.Web.UI.GridFilterExpression objects. Represents the filter expressions applied for the grid instance.
        /// The toString() javascript method executed over this collection will return SQL string representation of all filter expressions concatenated by 'AND' reserved words.
        /// While filter expressions toString() method will create SQL syntax representing current grid filtering, you can also take advantage of the toDynamicLinq() method 
        /// which will create LINQ expression that can be used directly with Dynamic LINQ library.
        /// Furthermore, you can also utilize the toList() method in order to pass an array of items (representing the filter expression elements) 
        /// to the server and operate with them using GridFilterExpression server object.</summary>
        /// <value type='Telerik.Web.UI.GridFilterExpressions' elementtype='Object'></value>
    },

    set_virtualItemCount: function(size) {
        /// <summary> Sets the virtual item count value for the respective GridTableView object. Applies to client-side RadGrid binding only.</summary>
        /// <param name='size' type='Number' integer="true"></param>
    },

    get_allowMultiColumnSorting: function() {
        /// <summary> Returns a boolean value indicating whether multi-column sorting is enabled for the grid instance</summary>
        /// <value type='Boolean'></value>
    },

    set_allowMultiColumnSorting: function(parameter1) {
        /// <summary> Sets a boolean value indicating whether multi-column sorting is enabled for the grid instance</summary>
        /// <param name='size' type='Boolean'></param>
    },

    get_tableFilterRow: function() {
        /// <summary>Returns the table filter row element</summary>
        /// <returns type='Object'></returns>
    },

    get_clientDataKeyNames: function() {
        /// <summary>Returns a one-dimensional array which holds the key fields set through the ClientDataKeyNames property of GridTableView on the server</summary>
        /// <value type='Array' elementType='String'></value>
    },

    get_dataItems: function() {
        /// <summary>Retuens a collection of all data items for the respective GridTableView instance.</summary>
        /// <value type='Array' elementType='Telerik.Web.UI.GridDataItem'></value>
    },

    get_owner: function() {
        /// <summary>Returns a property which is of type RadGrid and present the parent of the current object.</summary>
        /// <value type='Object'></value>
    },

    get_element: function() {
        /// <summary>Returns HTML table which represents the respective table for the GridTableView object rendered on the client.</summary>
        /// <value type='Object'></value>
    },

    get_name: function() {
        /// <summary>Returns a string which represents the Name property (set on the server) for the corresponding GridTableView client object. 
        /// Can be used to identify table in grid hierarchy client-side</summary>
        /// <value type='String'></value>
    },

    get_isItemInserted: function() {
        /// <summary>Returns a Boolean property. Gets a value indicating if the GridTableView is currently in insert mode. </summary>
        /// <value type='Boolean'></value>
    },

    showColumn: function(index) {
        /// <summary>Explicitly shows a column.</summary>
        /// <param name='index' type='Number' integer="true"></param>
    },

    hideColumn: function(index) {
        /// <summary>Explicitly hides a column.</summary>
        /// <param name='index' type='Number' integer="true"></param>
    },

    moveColumnToLeft: function(columnIndex) {
        /// <summary>Moves a column one position to the left.</summary>
        /// <param name='columnIndex' type='Number' integer="true"></param>
    },

    moveColumnToRight: function(columnIndex) {
        /// <summary>Moves a column one position to the right.</summary>
        /// <param name='columnIndex' type='Number' integer="true"></param>
    },

    hideItem: function(index) {
        /// <summary>Explicitly hides an item.</summary>
        /// <param name='index' type='Number' integer="true"></param>
    },

    expandItem: function(index) {
        /// <summary>Explicitly expands an item.</summary>
        /// <param name='index' type='Number' integer="true"></param>
    },

    editItem: function(index) {
        /// <summary>Method which switches the table row passed as an argument or the row corresponding to the index passed as an argument in edit mode. 
        ///If you set AllowMultiRowEdit to true, you can switch multiple grid items in edit mode with subsequent calls to this method.</summary>
        /// <param name='index' type='Object'></param>
    },

    updateItem: function(index) {
        /// <summary>Method which updates the edited table row passed as an argument or the row corresponding to the index passed as an argument. 
        /// If you have several items switched in edit mode, you can update all of them with subsequent calls to this method. 
        ///The updated data will be taken from the edit form editors.</summary>
        /// <param name='index' type='Object'></param>
    },

    insertItem: function() {
        /// <summary>Method which inserts new table row to the grid. The new data will be taken from the insertion form editors fields.</summary>
    },

    deleteItem: function(index) {
        /// <summary>Method which deletes the table row passed as an argument or the row corresponding to the index passed as an argument.</summary>
        /// <param name='index' type='Object'></param>
    },

    showInsertItem: function() {
        /// <summary>Method which switches the grid in insert mode and displays the insertion form.</summary>
    },

    cancelInsert: function() {
        /// <summary>Method which cancels the insert action and switches the grid in regular mode.</summary>
    },

    cancelUpdate: function(index) {
        /// <summary>Method which cancels the update for the edited table row passed as an argument or the row corresponding to the index passed as an argument. 
        /// If you have several items switched in edit mode, you can cancel the update for all of them with subsequent calls to this method.</summary>
        /// <param name='index' type='Object'></param>
    },

    collapseItem: function(index) {
        /// <summary>Explicitly collapses an item.</summary>
        /// <param name='index' type='Number' integer="true"></param>
    },

    sort: function(sortExpression) {
        /// <summary>Method which triggers sort command for the column with DataField (set on the server) passed as an argument. 
        ///If you set AllowMultiColumnSorting to true server-side, each subsequent call to this method will sort the corresponding column. 
        //All server-side sorting capabilities of RadGrid are applicable here as well.</summary>
        /// <param name='sortExpression' type='String'></param>
    },

    page: function(pageCommand) {
        /// <summary>Method which triggers paging action with page command passed as an argument. 
        // All server-side paging capabilities of RadGrid are applicable here as well. See the topic describing the fireCommand method for further details.</summary>
        /// <param name='pageCommand' type='String'></param>
    },

    filter: function(colUniqueName, valueToCompare, filterFunction, shouldUpdateFilterControl) {
        /// <summary>Method which triggers filter command for the column with UniqueName (set on the server) passed as a first argument. 
        /// The second argument should be value to compare (or two values separated by [space] for between filter pattern) or an empty string for EqualTo, 
        /// NoFilter, IsNull, etc. The last third argument has to be a value from the Telerik.Web.UI.GridFilterFunction enumeration which internally 
        /// recognizes the filter criteria that should be applied.
        /// All server-side filtering capabilities of RadGrid are applicable here as well.
        /// See the topic describing the fireCommand method for further details.</summary>
        /// <param name='colUniqueName' type='String'></param>
        /// <param name='valueToCompare' type='String' optional='true'></param>
        /// <param name='filterFunction' type='String'></param>
        /// <param name='shouldUpdateFilterControl' type='Boolean' optional='true'></param>
    },

    editSelectedItems: function() {
        /// <summary>Method which switches all selected items in the grid in edit mode.</summary>
    },

    updateEditedItems: function() {
        /// <summary>Method which updates all edited items in the grid. The new data will be taken from the edit form editors.</summary>
    },

    deleteSelectedItems: function() {
        /// <summary>Method which deletes all selected items in the grid.</summary>
    },

    editAllItems: function() {
        /// <summary>Method which switches all GridDataItems in edit mode.</summary>
    },

    cancelAll: function() {
        /// <summary>Cancels the edit mode for all grid items that are switched in edit mode prior to the method call.</summary>
    },

    groupColumn: function(colUniqueName) {
        /// <summary>Method which groups the grid by the column with UniqueName specified as an argument. 
        /// All server grouping capabilities of RadGrid are applicable for this case as well.</summary>
        /// <param name='colUniqueName' type='String'></param>
    },

    ungroupColumn: function(colUniqueName) {
        /// <summary>Method which performs ungroup action for the column with UniqueName specified as an argument.</summary>
        /// <param name='colUniqueName' type='String'></param>
    },

    fireCommand: function(comandName, commandArgument) {
        /// <summary>Method which triggers specific command for the grid when executed. 
        // The method is called for the GridTableView client instance and its arguments depend on the command which will be processed.</summary>
        /// <param name='comandName' type='String'></param>
        /// <param name='commandArgument' type='String'></param>
    },

    showItem: function(index) {
        /// <summary>Explicitly shows an item.</summary>
        /// <param name='index' type='Number' integer="true"></param>
    },

    get_parentView: function() {
        /// <summary>If called from a nested GridTableView returns the parent GridTableView in the grid hierarchy; 
        /// returns null if called from the MasterTableView.</summary>
        /// <value type='Object'></value>
    },

    get_parentRow: function() {
        /// <summary>If called from a nested GridTableView returns the parent item for the current nested hierarchical GridTableView; 
        /// returns null if called from the MasterTableView. </summary>
        /// <value type='Object'></value>
    },

    get_selectedItems: function() {
        /// <summary>Returns a collection of all selected items (of type GridDataItem) for the respective GridTableView instance. 
        /// This collection will include the selected items from the table's child tables (meaningful in hierarchical grid only).  </summary>
        /// <value type='Array' mayBeNull=''></value>
    },

    selectAllItems: function() {
        /// <summary>Selects all items in the GridTableView for which the method is invoked.</summary>
    },

    clearSelectedItems: function() {
        /// <summary>Method which clears the selected items for the respective GridTableView client object. 
        /// This method will clear the selected items from the table's child tables (meaningful in hierarchical grid only).</summary>
    },

    exportToExcel: function() {
        /// <summary>Exports the grid to MS Excel 2003 or later</summary>
    },
    exportToWord: function() {
        /// <summary>Exports the grid to a Word document</summary>
    },
    exportToCsv: function() {
        /// <summary>Exports the grid to CSV format (comma-separated values).</summary>
    },

    exportToPdf: function() {
        /// <summary>Exports the grid to PDF format.</summary>
    },

    selectItem: function(rowElement) {
        /// <summary>Selects the table row passed as an argument or the row corresponding to the index passed as an argument. </summary>
        /// <param name='rowElement' type='Object' domElement='true'></param>
    },

    resizeItem: function(rowIndex, rowHeight) {
        /// <summary>Resizes a row in the grid to a specified height </summary>
        /// <param name='rowIndex' type='Number' integer='true'></param>
        /// <param name='rowHeight' type='Object' integer='true'></param>
    },

    resizeColumn: function(columnIndex, columnWidth) {
        /// <summary>Resizes a row in the grid to a specified height </summary>
        /// <param name='columnIndex' type='Number' integer='true'></param>
        /// <param name='columnWidth' type='Number' integer='true'></param>
    },

    deselectItem: function(rowElement) {
        /// <summary>Deselects the table row passed as an argument or the row corresponding to the index passed as an argument. </summary>
        /// <param name='rowElement' type='Object' domElement='true'></param>
    },

    reorderColumns: function(columnName1, columnName2) {
        /// <summary>Reorders two columns, specified by the two parameters to the function</summary>
        /// <param name='columnName1' type='String'></param>
        /// <param name='columnName2' type='String'></param>
    },

    swapColumns: function(columnName1, columnName2) {
        /// <summary>Swaps the two columns, the names of which are passed as arguments to the method</summary>
        /// <param name='columnName1' type='String'></param>
        /// <param name=' columnName2' type='String'></param>
    },

    getColumnByUniqueName: function(uniqueName) {
        /// <summary> Returns a column, specified by the argument of the function</summary>
        /// <param name='uniqueName' type='String'></param>
        /// <returns type='Telerik.Web.UI.GridColumn'></returns>
    },

    getCellByColumnUniqueName: function(rowObject, uniqueName) {
        /// <summary> Returns a cell specified by a row and a column unique name.</summary>
        /// <param name='rowObject' type='Telerik.Web.UI.GridDataItem'></param>
        /// <param name='uniqueName' type='String'></param>
        /// <returns type='Object'></returns>
    },

    getColumnUniqueNameByCellIndex: function(rowEl, index) {
        /// <summary>Returns the unique name of the column by given header row and cell index passed as first and second arguments.</summary>
        /// <param name='rowEl' type='Object' domElement='true'></param>
        /// <param name='index' type='Number' integer='true'></param>
        /// <returns type='Object'></returns>
    }

};

Telerik.Web.UI.GridTableView.registerClass('Telerik.Web.UI.GridTableView', Sys.UI.Control);

Telerik.Web.UI.GridSortExpression = function() {
    ///<summary> Initializes the grid sorting expressions</summary>
};
Telerik.Web.UI.GridSortExpression.prototype =
{

    get_fieldName: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_fieldName: function(value) {

    },

    get_sortOrder: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_sortOrder: function(value) {

    },

    dispose: function() {
        /// <summary></summary>
    }

};
Telerik.Web.UI.GridSortExpression.registerClass("Telerik.Web.UI.GridSortExpression", null, Sys.IDisposable);

Telerik.Web.UI.GridFilterExpression = function() {

};
Telerik.Web.UI.GridFilterExpression.prototype =
{

    get_columnUniqueName: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_columnUniqueName: function(value) {

    },

    get_fieldName: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_fieldName: function(value) {

    },

    get_fieldValue: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_fieldValue: function(value) {

    },

    get_filterFunction: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_filterFunction: function(value) {

    },

    get_dataTypeName: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_dataTypeName: function(value) {

    },

    toString: function(parameter) {
        /// <summary></summary>
        /// <param name='parameter' type='' domElement='' optional=''></param>
    },

    toOql: function(parameter) {
        /// <summary></summary>
        /// <param name='parameter' type='' domElement='' optional=''></param>
    },

    getQuotedValue: function(value) {
        /// <summary></summary>
        /// <param name='value' type='' domElement='' optional=''></param>
        /// <returns type='' mayBeNull=''></returns>
    },

    getDataServiceValue: function(value) {
        /// <summary></summary>
        /// <param name='value' type='' domElement='' optional=''></param>
        /// <returns type='' mayBeNull=''></returns>
    },

    getDynamicLinqValue: function(value) {
        /// <summary></summary>
        /// <param name='value' type='' domElement='' optional=''></param>
        /// <returns type='' mayBeNull=''></returns>
    },

    toDynamicLinq: function(parameter) {
        /// <summary></summary>
        /// <param name='parameter' type='' domElement='' optional=''></param>
    },

    toDataService: function() {
        /// <summary></summary>
    },

    dispose: function() {
        /// <summary></summary>
    }

};
Telerik.Web.UI.GridFilterExpression.registerClass("Telerik.Web.UI.GridFilterExpression", null, Sys.IDisposable);

Telerik.Web.UI.Collection = function() {

};
Telerik.Web.UI.Collection.prototype =
{

    add: function(item) {
        /// <summary></summary>
        /// <param name='item' type='' domElement='' optional=''></param>
    },

    insert: function(index, item) {
        /// <summary></summary>
        /// <param name='index' type='' domElement='' optional=''></param>
        /// <param name=' item' type='' domElement='' optional=''></param>
    },

    remove: function(item) {
        /// <summary></summary>
        /// <param name='item' type='' domElement='' optional=''></param>
    },

    removeAt: function(index) {
        /// <summary></summary>
        /// <param name='index' type='' domElement='' optional=''></param>
    },

    clear: function() {
        /// <summary></summary>
    },

    toList: function() {
        /// <summary></summary>
    },

    get_count: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    getItem: function(index) {
        /// <summary></summary>
        /// <param name='index' type='' domElement='' optional=''></param>
        /// <returns type='' mayBeNull=''></returns>
    },

    indexOf: function(item) {
        /// <summary></summary>
        /// <param name='item' type='' domElement='' optional=''></param>
    },

    forEach: function(lambda) {
        /// <summary></summary>
        /// <param name='lambda' type='' domElement='' optional=''></param>
    },

    dispose: function() {
        /// <summary></summary>
    }

};

Telerik.Web.UI.Collection.registerClass("Telerik.Web.UI.Collection", null, Sys.IDisposable);

Telerik.Web.UI.GridSortExpressions = function() {

};
Telerik.Web.UI.GridSortExpressions.prototype =
{

    find: function(fieldName) {
        /// <summary></summary>
        /// <param name='fieldName' type='' domElement='' optional=''></param>
    },

    toString: function() {
        /// <summary></summary>
    }

};
Telerik.Web.UI.GridSortExpressions.registerClass("Telerik.Web.UI.GridSortExpressions", Telerik.Web.UI.Collection);

Telerik.Web.UI.GridFilterExpressions = function() {

};
Telerik.Web.UI.GridFilterExpressions.prototype =
{

    find: function(columnUniqueName) {
        /// <summary></summary>
        /// <param name='columnUniqueName' type='' domElement='' optional=''></param>
    },

    toString: function(parameter) {
        /// <summary></summary>
        /// <param name='parameter' type='' domElement='' optional=''></param>
    },

    toOql: function(parameter) {
        /// <summary></summary>
        /// <param name='parameter' type='' domElement='' optional=''></param>
    },

    toDynamicLinq: function(parameter) {
        /// <summary></summary>
        /// <param name='parameter' type='' domElement='' optional=''></param>
    },

    toDataService: function() {
        /// <summary></summary>
    }

};

Telerik.Web.UI.GridFilterExpressions.registerClass("Telerik.Web.UI.GridFilterExpressions", Telerik.Web.UI.Collection);

Telerik.Web.UI.GridFilterFunction = function() {
    /// <summary></summary>
    /// <field name="NoFilter" type="Number" integer="true" static="true"></field>
    /// <field name="Contains" type="Number" integer="true" static="true"></field>
    /// <field name="DoesNotContain" type="Number" integer="true" static="true"></field>
    /// <field name="StartsWith" type="Number" integer="true" static="true"></field>
    /// <field name="EndsWith" type="Number" integer="true" static="true"></field>
    /// <field name="EqualTo" type="Number" integer="true" static="true"></field>
    /// <field name="NotEqualTo" type="Number" integer="true" static="true"></field>
    /// <field name="GreaterThan" type="Number" integer="true" static="true"></field>
    /// <field name="LessThan" type="Number" integer="true" static="true"></field>
    /// <field name="GreaterThanOrEqualTo" type="Number" integer="true" static="true"></field>
    /// <field name="LessThanOrEqualTo" type="Number" integer="true" static="true"></field>
    /// <field name="Between" type="Number" integer="true" static="true"></field>
    /// <field name="NotBetween" type="Number" integer="true" static="true"></field>
    /// <field name="IsEmpty" type="Number" integer="true" static="true"></field>
    /// <field name="NotIsEmpty" type="Number" integer="true" static="true"></field>
    /// <field name="IsNull" type="Number" integer="true" static="true"></field>
    /// <field name="NotIsNull" type="Number" integer="true" static="true"></field>
    /// <field name="Custom" type="Number" integer="true" static="true"></field>
};

Telerik.Web.UI.GridSortOrder = function() {
    /// <summary></summary>
    /// <field name="None" type="Number" integer="true" static="true"></field>
    /// <field name="Ascending" type="Number" integer="true" static="true"></field>
    /// <field name="Descending" type="Number" integer="true" static="true"></field>
};$telerik.toGrid = function(object) {
    /// <summary>Casts an object to a RadGrid instance</summary>
    /// <returns type="Telerik.Web.UI.RadGrid">A RadGrid instance</returns>
};
$telerik.findGrid = function(id, parent) {
    /// <summary>Finds a RadGrid instance</summary>
    /// <param name='id'>A string that contains ID of the RadGrid to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadGrid to find</param>
    /// <returns type="Telerik.Web.UI.RadGrid">The RadGrid instance</returns>
};

Telerik.Web.UI.RadGrid = function(element) {
    /// <summary>Initializes a new instance of RadGrid</summary>
};
Telerik.Web.UI.RadGrid.prototype =
{

    initialize: function() {
        /// <summary>Initializes a new instance of Radgrid</summary>
    },

    repaint: function() {
        /// <summary>Redraws the client side object on the client</summary>
    },

    onWindowResize: function() {
        /// <summary>Resizes the modal background of the grid, when the window is resized</summary>
    },

    resizeModalBackground: function() {
        /// <summary>Resizes the modal background of the grid, when the window is resized</summary>
    },

    dispose: function() {
        /// <summary>Disposes the client instance of RadGrid</summary>
    },

    get_allowActiveRowCycle: function() {
        /// <summary> Returns a Boolean value, indicating whether KeyboardNavigationSettings AllowActiveRowCycle="true"</summary>
        /// <value type='Boolean' mayBeNull='false'></value>
    },

    set_allowActiveRowCycle: function(value) {
        /// <summary> Sets a value, indicating whether AllowActiveRowCycle="true"</summary>
    },

    get_selectedItemsInternal: function() {
        /// <summary>Gets an internal collection of selected items in the grid</summary>
        /// <value type='Number' mayBeNull=''></value>
    },

    set_selectedItemsInternal: function(value) {
        /// <summary>Sets an internal collection of selected items in the grid</summary>
        /// <param name='value' optional='false' type='Number' integer="true"></param>
    },

    get_allowMultiRowSelection: function() {
        /// <summary>Returns a Boolean value, indicating whether we have enabled multi row selection for the control</summary>
        /// <value type='' mayBeNull=''></value>
    },

    set_allowMultiRowSelection: function(value) {
        /// <summary>Sets a Boolean value, indicating whether we have enabled multi row selection for the control</summary>
        /// <param name='value' optional='false' type='Boolean'></param>
    },

    get_masterTableView: function() {
        /// <summary>Returns the master table view instance of the grid</summary>
        /// <value type='Telerik.Web.UI.GridTableView'></value>
},
add_gridCreating: function(handler) {
    /// <summary>Adds a handler for the gridCreating event</summary>
    /// <param name="handler" type="Function">The handler for the gridCreating event</param>
},
remove_gridCreating: function(handler) {
    /// <summary>Removes the handler for the gridCreating event</summary>
    /// <param name="handler" type="Function">The handler for the gridCreating event</param>
},
add_gridCreated: function(handler) {
    /// <summary>Adds a handler for the gridCreated event</summary>
    /// <param name="handler" type="Function">The handler for the gridCreated event</param>
},
remove_gridCreated: function(handler) {
/// <summary>Removes the handler for the gridCreated event</summary>
/// <param name="handler" type="Function">The handler for the gridCreated event</param>
},
add_gridDestroying: function(handler) {
    /// <summary>Adds a handler for the gridDestroying event</summary>
    /// <param name="handler" type="Function">The handler for the gridDestroying event</param>
},
remove_gridDestroying: function(handler) {
/// <summary>Removes the handler for the gridDestroying event</summary>
/// <param name="handler" type="Function">The handler for the gridDestroying event</param>
},
add_masterTableViewCreating: function(handler) {
    /// <summary>Adds a handler for the masterTableViewCreating event</summary>
    /// <param name="handler" type="Function">The handler for the masterTableViewCreating event</param>
},
remove_masterTableViewCreating: function(handler) {
    /// <summary>Removes the handler for the masterTableViewCreating event</summary>
    /// <param name="handler" type="Function">The handler for the masterTableViewCreating event</param>
},
add_masterTableViewCreated: function(handler) {
    /// <summary>Adds a handler for the masterTableViewCreated event</summary>
    /// <param name="handler" type="Function">The handler for the masterTableViewCreated event</param>
},
remove_masterTableViewCreated: function(handler) {
    /// <summary>Removes the handler for the masterTableViewCreated event</summary>
    /// <param name="handler" type="Function">The handler for the masterTableViewCreated event</param>
},
add_tableCreating: function(handler) {
    /// <summary>Adds a handler for the tableCreating event</summary>
    /// <param name="handler" type="Function">The handler for the tableCreating event</param>
},
remove_tableCreating: function(handler) {
    /// <summary>Removes the handler for the tableCreating event</summary>
    /// <param name="handler" type="Function">The handler for the tableCreating event</param>
},
add_tableCreated: function(handler) {
    /// <summary>Adds a handler for the tableCreated event</summary>
    /// <param name="handler" type="Function">The handler for the tableCreated event</param>
},
remove_tableCreated: function(handler) {
    /// <summary>Removes the handler for the tableCreated event</summary>
    /// <param name="handler" type="Function">The handler for the tableCreated event</param>
},
add_tableDestroying: function(handler) {
    /// <summary>Adds a handler for the tableDestroying event</summary>
    /// <param name="handler" type="Function">The handler for the tableDestroying event</param>
},
remove_tableDestroying: function(handler) {
    /// <summary>Removes the handler for the tableDestroying event</summary>
    /// <param name="handler" type="Function">The handler for the tableDestroying event</param>
},
add_columnCreating: function(handler) {
    /// <summary>Adds a handler for the columnCreating event</summary>
    /// <param name="handler" type="Function">The handler for the columnCreating event</param>
},
remove_columnCreating: function(handler) {
    /// <summary>Removes the handler for the columnCreating event</summary>
    /// <param name="handler" type="Function">The handler for the columnCreating event</param>
},
add_columnCreated: function(handler) {
    /// <summary>Adds a handler for the columnCreated event</summary>
    /// <param name="handler" type="Function">The handler for the columnCreated event</param>
},
remove_columnCreated: function(handler) {
    /// <summary>Removes the handler for the columnCreated event</summary>
    /// <param name="handler" type="Function">The handler for the columnCreated event</param>
},
add_columnDestroying: function(handler) {
    /// <summary>Adds a handler for the columnDestroying event</summary>
    /// <param name="handler" type="Function">The handler for the columnDestroying event</param>
},
remove_columnDestroying: function(handler) {
    /// <summary>Removes the handler for the columnDestroying event</summary>
    /// <param name="handler" type="Function">The handler for the columnDestroying event</param>
},
add_columnResizing: function(handler) {
    /// <summary>Adds a handler for the columnResizing event</summary>
    /// <param name="handler" type="Function">The handler for the columnResizing event</param>
},
remove_columnResizing: function(handler) {
    /// <summary>Removes the handler for the columnResizing event</summary>
    /// <param name="handler" type="Function">The handler for the columnResizing event</param>
},
add_columnResized: function(handler) {
    /// <summary>Adds a handler for the columnResized event</summary>
    /// <param name="handler" type="Function">The handler for the columnResized event</param>
},
remove_columnResized: function(handler) {
    /// <summary>Removes the handler for the columnResized event</summary>
    /// <param name="handler" type="Function">The handler for the columnResized event</param>
},
add_columnSwapping: function(handler) {
    /// <summary>Adds a handler for the columnSwapping event</summary>
    /// <param name="handler" type="Function">The handler for the columnSwapping event</param>
},
remove_columnSwapping: function(handler) {
    /// <summary>Removes the handler for the columnSwapping event</summary>
    /// <param name="handler" type="Function">The handler for the columnSwapping event</param>
},
add_columnSwapped: function(handler) {
    /// <summary>Adds a handler for the columnSwapped event</summary>
    /// <param name="handler" type="Function">The handler for the columnSwapped event</param>
},
remove_columnSwapped: function(handler) {
    /// <summary>Removes the handler for the columnSwapped event</summary>
    /// <param name="handler" type="Function">The handler for the columnSwapped event</param>
},
add_columnMovingToLeft: function(handler) {
    /// <summary>Adds a handler for the columnMovingToLeft event</summary>
    /// <param name="handler" type="Function">The handler for the columnMovingToLeft event</param>
},
remove_columnMovingToLeft: function(handler) {
    /// <summary>Removes the handler for the columnMovingToLeft event</summary>
    /// <param name="handler" type="Function">The handler for the columnMovingToLeft event</param>
},
add_columnMovedToLeft: function(handler) {
    /// <summary>Adds a handler for the columnMovedToLeft event</summary>
    /// <param name="handler" type="Function">The handler for the columnMovedToLeft event</param>
},
remove_columnMovedToLeft: function(handler) {
    /// <summary>Removes the handler for the columnMovedToLeft event</summary>
    /// <param name="handler" type="Function">The handler for the columnMovedToLeft event</param>
},

add_columnMovingToRight: function(handler) {
    /// <summary>Adds a handler for the columnMovingToRight event</summary>
    /// <param name="handler" type="Function">The handler for the columnMovingToRight event</param>
},
remove_columnMovingToRight: function(handler) {
    /// <summary>Removes the handler for the columnMovingToRight event</summary>
    /// <param name="handler" type="Function">The handler for the columnMovingToRight event</param>
},

add_columnMovedToRight: function(handler) {
    /// <summary>Adds a handler for the columnMovedToRight event</summary>
    /// <param name="handler" type="Function">The handler for the columnMovedToRight event</param>
},
remove_columnMovedToRight: function(handler) {
    /// <summary>Removes the handler for the columnMovedToRight event</summary>
    /// <param name="handler" type="Function">The handler for the columnMovedToRight event</param>
},
add_columnHiding: function(handler) {
    /// <summary>Adds a handler for the columnHiding event</summary>
    /// <param name="handler" type="Function">The handler for the columnHiding event</param>
},
remove_columnHiding: function(handler) {
    /// <summary>Removes the handler for the columnHiding event</summary>
    /// <param name="handler" type="Function">The handler for the columnHiding event</param>
},
add_columnHidden: function(handler) {
    /// <summary>Adds a handler for the columnHidden event</summary>
    /// <param name="handler" type="Function">The handler for the columnHidden event</param>
},
remove_columnHidden: function(handler) {
    /// <summary>Removes the handler for the columnHidden event</summary>
    /// <param name="handler" type="Function">The handler for the columnHidden event</param>
},
add_columnShowing: function(handler) {
    /// <summary>Adds a handler for the columnShowing event</summary>
    /// <param name="handler" type="Function">The handler for the columnShowing event</param>
},
remove_columnShowing: function(handler) {
    /// <summary>Removes the handler for the columnShowing event</summary>
    /// <param name="handler" type="Function">The handler for the columnShowing event</param>
},
add_columnShown: function(handler) {
    /// <summary>Adds a handler for the columnShown event</summary>
    /// <param name="handler" type="Function">The handler for the columnShown event</param>
},
remove_columnShown: function(handler) {
    /// <summary>Removes the handler for the columnShown event</summary>
    /// <param name="handler" type="Function">The handler for the columnShown event</param>
},
add_rowCreating: function(handler) {
    /// <summary>Adds a handler for the rowCreating event</summary>
    /// <param name="handler" type="Function">The handler for the rowCreating event</param>
},
remove_rowCreating: function(handler) {
    /// <summary>Removes the handler for the rowCreating event</summary>
    /// <param name="handler" type="Function">The handler for the rowCreating event</param>
},
add_rowCreated: function(handler) {
    /// <summary>Adds a handler for the rowCreated event</summary>
    /// <param name="handler" type="Function">The handler for the rowCreated event</param>
},
remove_rowCreated: function(handler) {
    /// <summary>Removes the handler for the rowCreated event</summary>
    /// <param name="handler" type="Function">The handler for the rowCreated event</param>
},
add_rowDestroying: function(handler) {
    /// <summary>Adds a handler for the rowDestroying event</summary>
    /// <param name="handler" type="Function">The handler for the rowDestroying event</param>
},
remove_rowDestroying: function(handler) {
    /// <summary>Removes the handler for the rowDestroying event</summary>
    /// <param name="handler" type="Function">The handler for the rowDestroying event</param>
},
add_rowResizing: function(handler) {
    /// <summary>Adds a handler for the rowResizing event</summary>
    /// <param name="handler" type="Function">The handler for the rowResizing event</param>
},
remove_rowResizing: function(handler) {
    /// <summary>Removes the handler for the rowResizing event</summary>
    /// <param name="handler" type="Function">The handler for the rowResizing event</param>
},
add_rowResized: function(handler) {
    /// <summary>Adds a handler for the rowResized event</summary>
    /// <param name="handler" type="Function">The handler for the rowResized event</param>
},
remove_rowResized: function(handler) {
    /// <summary>Removes the handler for the rowResized event</summary>
    /// <param name="handler" type="Function">The handler for the rowResized event</param>
},
add_rowHiding: function(handler) {
    /// <summary>Adds a handler for the rowHiding event</summary>
    /// <param name="handler" type="Function">The handler for the rowHiding event</param>
},
remove_rowHiding: function(handler) {
    /// <summary>Removes the handler for the rowHiding event</summary>
    /// <param name="handler" type="Function">The handler for the rowHiding event</param>
},
add_rowHidden: function(handler) {
    /// <summary>Adds a handler for the rowHidden event</summary>
    /// <param name="handler" type="Function">The handler for the rowHidden event</param>
},
remove_rowHidden: function(handler) {
    /// <summary>Removes the handler for the rowHidden event</summary>
    /// <param name="handler" type="Function">The handler for the rowHidden event</param>
},
add_rowShowing: function(handler) {
    /// <summary>Adds a handler for the rowShowing event</summary>
    /// <param name="handler" type="Function">The handler for the rowShowing event</param>
},
remove_rowShowing: function(handler) {
    /// <summary>Removes the handler for the rowShowing event</summary>
    /// <param name="handler" type="Function">The handler for the rowShowing event</param>
},
add_rowShown: function(handler) {
    /// <summary>Adds a handler for the rowShown event</summary>
    /// <param name="handler" type="Function">The handler for the rowShown event</param>
},
remove_rowShown: function(handler) {
    /// <summary>Removes the handler for the rowShown event</summary>
    /// <param name="handler" type="Function">The handler for the rowShown event</param>
},
add_rowClick: function(handler) {
    /// <summary>Adds a handler for the rowClick event</summary>
    /// <param name="handler" type="Function">The handler for the rowClick event</param>
},
remove_rowClick: function(handler) {
    /// <summary>Removes the handler for the rowClick event</summary>
    /// <param name="handler" type="Function">The handler for the rowClick event</param>
},
add_rowDblClick: function(handler) {
    /// <summary>Adds a handler for the rowDblClick event</summary>
    /// <param name="handler" type="Function">The handler for the rowDblClick event</param>
},
remove_rowDblClick: function(handler) {
    /// <summary>Removes the handler for the rowDblClick event</summary>
    /// <param name="handler" type="Function">The handler for the rowDblClick event</param>
},
add_columnClick: function(handler) {
    /// <summary>Adds a handler for the columnClick event</summary>
    /// <param name="handler" type="Function">The handler for the columnClick event</param>
},
remove_columnClick: function(handler) {
    /// <summary>Removes the handler for the columnClick event</summary>
    /// <param name="handler" type="Function">The handler for the columnClick event</param>
},
add_columnDblClick: function(handler) {
    /// <summary>Adds a handler for the columnDblClick event</summary>
    /// <param name="handler" type="Function">The handler for the columnDblClick event</param>
},
remove_columnDblClick: function(handler) {
    /// <summary>Removes the handler for the columnDblClick event</summary>
    /// <param name="handler" type="Function">The handler for the columnDblClick event</param>
},
add_rowSelecting: function(handler) {
    /// <summary>Adds a handler for the rowSelecting event</summary>
    /// <param name="handler" type="Function">The handler for the rowSelecting event</param>
},
remove_rowSelecting: function(handler) {
    /// <summary>Removes the handler for the rowSelecting event</summary>
    /// <param name="handler" type="Function">The handler for the rowSelecting event</param>
},
add_rowSelected: function(handler) {
    /// <summary>Adds a handler for the rowSelected event</summary>
    /// <param name="handler" type="Function">The handler for the rowSelected event</param>
},
remove_rowSelected: function(handler) {
    /// <summary>Removes the handler for the rowSelected event</summary>
    /// <param name="handler" type="Function">The handler for the rowSelected event</param>
},
add_rowDeselecting: function(handler) {
    /// <summary>Adds a handler for the rowDeselecting event</summary>
    /// <param name="handler" type="Function">The handler for the rowDeselecting event</param>
},
remove_rowDeselecting: function(handler) {
    /// <summary>Removes the handler for the rowDeselecting event</summary>
    /// <param name="handler" type="Function">The handler for the rowDeselecting event</param>
},
add_rowDeselected: function(handler) {
    /// <summary>Adds a handler for the rowDeselected event</summary>
    /// <param name="handler" type="Function">The handler for the rowDeselected event</param>
},
remove_rowDeselected: function(handler) {
    /// <summary>Removes the handler for the rowDeselected event</summary>
    /// <param name="handler" type="Function">The handler for the rowDeselected event</param>
},
add_rowMouseOver: function(handler) {
    /// <summary>Adds a handler for the rowMouseOver event</summary>
    /// <param name="handler" type="Function">The handler for the rowMouseOver event</param>
},
remove_rowMouseOver: function(handler) {
    /// <summary>Removes the handler for the rowMouseOver event</summary>
    /// <param name="handler" type="Function">The handler for the rowMouseOver event</param>
},
add_rowMouseOut: function(handler) {
    /// <summary>Adds a handler for the rowMouseOut event</summary>
    /// <param name="handler" type="Function">The handler for the rowMouseOut event</param>
},
remove_rowMouseOut: function(handler) {
    /// <summary>Removes the handler for the rowMouseOut event</summary>
    /// <param name="handler" type="Function">The handler for the rowMouseOut event</param>
},
add_columnMouseOver: function(handler) {
    /// <summary>Adds a handler for the columnMouseOver event</summary>
    /// <param name="handler" type="Function">The handler for the columnMouseOver event</param>
},
remove_columnMouseOver: function(handler) {
    /// <summary>Removes the handler for the columnMouseOver event</summary>
    /// <param name="handler" type="Function">The handler for the columnMouseOver event</param>
},
add_columnMouseOut: function(handler) {
    /// <summary>Adds a handler for the columnMouseOut event</summary>
    /// <param name="handler" type="Function">The handler for the columnMouseOut event</param>
},
remove_columnMouseOut: function(handler) {
    /// <summary>Removes the handler for the columnMouseOut event</summary>
    /// <param name="handler" type="Function">The handler for the columnMouseOut event</param>
},
add_columnContextMenu: function(handler) {
    /// <summary>Adds a handler for the columnContextMenu event</summary>
    /// <param name="handler" type="Function">The handler for the columnContextMenu event</param>
},
remove_columnContextMenu: function(handler) {
    /// <summary>Removes the handler for the columnContextMenu event</summary>
    /// <param name="handler" type="Function">The handler for the columnContextMenu event</param>
},
add_rowContextMenu: function(handler) {
    /// <summary>Adds a handler for the rowContextMenu event</summary>
    /// <param name="handler" type="Function">The handler for the rowContextMenu event</param>
},
remove_rowContextMenu: function(handler) {
    /// <summary>Removes the handler for the rowContextMenu event</summary>
    /// <param name="handler" type="Function">The handler for the rowContextMenu event</param>
},
add_scroll: function(handler) {
    /// <summary>Adds a handler for the scroll event</summary>
    /// <param name="handler" type="Function">The handler for the scroll event</param>
},
remove_scroll: function(handler) {
    /// <summary>Removes the handler for the scroll event</summary>
    /// <param name="handler" type="Function">The handler for the scroll event</param>
},
add_keyPress: function(handler) {
    /// <summary>Adds a handler for the keyPress event</summary>
    /// <param name="handler" type="Function">The handler for the keyPress event</param>
},
remove_keyPress: function(handler) {
    /// <summary>Removes the handler for the keyPress event</summary>
    /// <param name="handler" type="Function">The handler for the keyPress event</param>
},
add_hierarchyExpanding: function(handler) {
    /// <summary>Adds a handler for the hierarchyExpanding event</summary>
    /// <param name="handler" type="Function">The handler for the hierarchyExpanding event</param>
},
remove_hierarchyExpanding: function(handler) {
    /// <summary>Removes the handler for the hierarchyExpanding event</summary>
    /// <param name="handler" type="Function">The handler for the hierarchyExpanding event</param>
},
add_hierarchyExpanded: function(handler) {
    /// <summary>Adds a handler for the hierarchyExpanded event</summary>
    /// <param name="handler" type="Function">The handler for the hierarchyExpanded event</param>
},
remove_hierarchyExpanded: function(handler) {
    /// <summary>Removes the handler for the hierarchyExpanded event</summary>
    /// <param name="handler" type="Function">The handler for the hierarchyExpanded event</param>
},
add_hierarchyCollapsing: function(handler) {
    /// <summary>Adds a handler for the hierarchyCollapsing event</summary>
    /// <param name="handler" type="Function">The handler for the hierarchyCollapsing event</param>
},
remove_hierarchyCollapsing: function(handler) {
    /// <summary>Removes the handler for the hierarchyCollapsing event</summary>
    /// <param name="handler" type="Function">The handler for the hierarchyCollapsing event</param>
},
add_hierarchyCollapsed: function(handler) {
    /// <summary>Adds a handler for the hierarchyCollapsed event</summary>
    /// <param name="handler" type="Function">The handler for the hierarchyCollapsed event</param>
},
remove_hierarchyCollapsed: function(handler) {
    /// <summary>Removes the handler for the hierarchyCollapsed event</summary>
    /// <param name="handler" type="Function">The handler for the hierarchyCollapsed event</param>
},
add_groupExpanding: function(handler) {
    /// <summary>Adds a handler for the groupExpanding event</summary>
    /// <param name="handler" type="Function">The handler for the groupExpanding event</param>
},
remove_groupExpanding: function(handler) {
    /// <summary>Removes the handler for the groupExpanding event</summary>
    /// <param name="handler" type="Function">The handler for the groupExpanding event</param>
},
add_groupExpanded: function(handler) {
    /// <summary>Adds a handler for the groupExpanded event</summary>
    /// <param name="handler" type="Function">The handler for the groupExpanded event</param>
},
remove_groupExpanded: function(handler) {
    /// <summary>Removes the handler for the groupExpanded event</summary>
    /// <param name="handler" type="Function">The handler for the groupExpanded event</param>
},
add_groupCollapsing: function(handler) {
    /// <summary>Adds a handler for the groupCollapsing event</summary>
    /// <param name="handler" type="Function">The handler for the groupCollapsing event</param>
},
remove_groupCollapsing: function(handler) {
    /// <summary>Removes the handler for the groupCollapsing event</summary>
    /// <param name="handler" type="Function">The handler for the groupCollapsing event</param>
},
add_groupCollapsed: function(handler) {
    /// <summary>Adds a handler for the groupCollapsed event</summary>
    /// <param name="handler" type="Function">The handler for the groupCollapsed event</param>
},
remove_groupCollapsed: function(handler) {
    /// <summary>Removes the handler for the groupCollapsed event</summary>
    /// <param name="handler" type="Function">The handler for the groupCollapsed event</param>
},
add_activeRowChanging: function(handler) {
    /// <summary>Adds a handler for the activeRowChanging event</summary>
    /// <param name="handler" type="Function">The handler for the activeRowChanging event</param>
},
remove_activeRowChanging: function(handler) {
    /// <summary>Removes the handler for the activeRowChanging event</summary>
    /// <param name="handler" type="Function">The handler for the activeRowChanging event</param>
},
add_activeRowChanged: function(handler) {
    /// <summary>Adds a handler for the activeRowChanged event</summary>
    /// <param name="handler" type="Function">The handler for the activeRowChanged event</param>
},
remove_activeRowChanged: function(handler) {
    /// <summary>Removes the handler for the activeRowChanged event</summary>
    /// <param name="handler" type="Function">The handler for the activeRowChanged event</param>
},
add_rowDeleting: function(handler) {
    /// <summary>Adds a handler for the rowDeleting event</summary>
    /// <param name="handler" type="Function">The handler for the rowDeleting event</param>
},
remove_rowDeleting: function(handler) {
    /// <summary>Removes the handler for the rowDeleting event</summary>
    /// <param name="handler" type="Function">The handler for the rowDeleting event</param>
},
add_rowDeleted: function(handler) {
    /// <summary>Adds a handler for the rowDeleted event</summary>
    /// <param name="handler" type="Function">The handler for the rowDeleted event</param>
},
remove_rowDeleted: function(handler) {
    /// <summary>Removes the handler for the rowDeleted event</summary>
    /// <param name="handler" type="Function">The handler for the rowDeleted event</param>
},
add_filterMenuShowing: function(handler) {
    /// <summary>Adds a handler for the filterMenuShowing event</summary>
    /// <param name="handler" type="Function">The handler for the filterMenuShowing event</param>
},
remove_filterMenuShowing: function(handler) {
    /// <summary>Removes the handler for the filterMenuShowing event</summary>
    /// <param name="handler" type="Function">The handler for the filterMenuShowing event</param>
},
add_rowDropping: function(handler) {
    /// <summary>Adds a handler for the rowDropping event</summary>
    /// <param name="handler" type="Function">The handler for the rowDropping event</param>
},
remove_rowDropping: function(handler) {
    /// <summary>Removes the handler for the rowDropping event</summary>
    /// <param name="handler" type="Function">The handler for the rowDropping event</param>
},
add_rowDropped: function(handler) {
    /// <summary>Adds a handler for the rowDropped event</summary>
    /// <param name="handler" type="Function">The handler for the rowDropped event</param>
},
remove_rowDropped: function(handler) {
    /// <summary>Removes the handler for the rowDropped event</summary>
    /// <param name="handler" type="Function">The handler for the rowDropped event</param>
},
add_rowDragStarted: function(handler) {
    /// <summary>Adds a handler for the rowDragStarted event</summary>
    /// <param name="handler" type="Function">The handler for the rowDragStarted event</param>
},
remove_rowDragStarted: function(handler) {
    /// <summary>Removes the handler for the rowDragStarted event</summary>
    /// <param name="handler" type="Function">The handler for the rowDragStarted event</param>
},
add_rowDragging: function(handler) {
    /// <summary>Adds a handler for the rowDragging event</summary>
    /// <param name="handler" type="Function">The handler for the rowDragging event</param>
},
remove_rowDragging: function(handler) {
    /// <summary>Removes the handler for the rowDragging event</summary>
    /// <param name="handler" type="Function">The handler for the rowDragging event</param>
},
add_popUpShowing: function(handler) {
    /// <summary>Adds a handler for the popUpShowing event</summary>
    /// <param name="handler" type="Function">The handler for the popUpShowing event</param>
},
remove_popUpShowing: function(handler) {
    /// <summary>Removes the handler for the popUpShowing event</summary>
    /// <param name="handler" type="Function">The handler for the popUpShowing event</param>
},
add_command: function(handler) {
    /// <summary>Adds a handler for the command event</summary>
    /// <param name="handler" type="Function">The handler for the command event</param>
},
remove_command: function(handler) {
    /// <summary>Removes the handler for the command event</summary>
    /// <param name="handler" type="Function">The handler for the command event</param>
},
add_rowDataBound: function(handler) {
    /// <summary>Adds a handler for the rowDataBound event</summary>
    /// <param name="handler" type="Function">The handler for the rowDataBound event</param>
},
remove_rowDataBound: function(handler) {
    /// <summary>Removes the handler for the rowDataBound event</summary>
    /// <param name="handler" type="Function">The handler for the rowDataBound event</param>
},
add_dataBinding: function(handler) {
    /// <summary>Adds a handler for the dataBinding event</summary>
    /// <param name="handler" type="Function">The handler for the dataBinding event</param>
},
remove_dataBinding: function(handler) {
    /// <summary>Removes the handler for the dataBinding event</summary>
    /// <param name="handler" type="Function">The handler for the dataBinding event</param>
},
add_dataBound: function(handler) {
    /// <summary>Adds a handler for the dataBound event</summary>
    /// <param name="handler" type="Function">The handler for the dataBound event</param>
},
remove_dataBound: function(handler) {
    /// <summary>Removes the handler for the dataBound event</summary>
    /// <param name="handler" type="Function">The handler for the dataBound event</param>
},
add_headerMenuShowing: function(handler) {
    /// <summary>Adds a handler for the headerMenuShowing event</summary>
    /// <param name="handler" type="Function">The handler for the headerMenuShowing event</param>
},
remove_headerMenuShowing: function(handler) {
    /// <summary>Removes the handler for the headerMenuShowing event</summary>
    /// <param name="handler" type="Function">The handler for the headerMenuShowing event</param>
},
add_dataBindingFailed: function(handler) {
    /// <summary>Adds a handler for the dataBindingFailed event</summary>
    /// <param name="handler" type="Function">The handler for the dataBindingFailed event</param>
},
remove_dataBindingFailed: function(handler) {
    /// <summary>Removes the handler for the dataBindingFailed event</summary>
    /// <param name="handler" type="Function">The handler for the dataBindingFailed event</param>
},
add_dataSourceResolved: function(handler) {
    /// <summary>Adds a handler for the dataSourceResolved event</summary>
    /// <param name="handler" type="Function">The handler for the dataSourceResolved event</param>
},
remove_dataSourceResolved: function(handler) {
    /// <summary>Removes the handler for the dataSourceResolved event</summary>
    /// <param name="handler" type="Function">The handler for the dataSourceResolved event</param>
},


    get_masterTableViewHeader: function() {
        /// <summary>Returns the master table view header instance of the grid</summary>
        /// <value type='Object'></value>
    },

    get_masterTableViewFooter: function() {
        /// <summary>Returns the master table view footer instance of the grid</summary>
        /// <value type='Object'></value>
    },

    get_selectedItems: function() {
        /// <summary>Returns a collection of selected items in the grid instance</summary>
        /// <value type='Array' elementType='Object'></value>
    },

    clearSelectedItems: function() {
        /// <summary>Clears the selected items collection of RadGrid</summary>
    },

    get_detailTables: function() {
        /// <summary>Returns a collection of detail tables in RadGrid</summary>
        /// <value type='Array' elementType='Object'></value>
    },

    get_headerMenu: function() {
        /// <summary>Gets the header menu of the grid instance</summary>
        /// <value type='Object' ></value>
    },

    saveClientState: function() {
        /// <summary>Saves the client state of the grid instance</summary>
        /// <returns type='Object'></returns>
    },

    isInEditModeByHierarchicalIndex: function(hierarchicalIndex) {
        /// <summary>Returns a Boolean value, indicating whether the control is in edit mode, based on the passed Hierarchical index</summary>
        /// <param name='hierarchicalIndex' type='String'></param>
        /// <returns type='Boolean'></returns>
    },

    clearActiveRow: function() {
        /// <summary> Clears the current active row for the control</summary>
    },

    confirm: function(text, e, title, width, height) {
        /// <summary>Shows a confirm window</summary>
        /// <param name='text' type='String' domElement='' optional='false'></param>
        /// <param name='e' type='Object' domElement='true' ></param>
        /// <param name='title' type='String'></param>
        /// <param name='width' type='Number'></param>
        /// <param name='height' type='Number'></param>
    }

};
Telerik.Web.UI.RadGrid.registerClass('Telerik.Web.UI.RadGrid', Sys.UI.Control);

Telerik.Web.UI.GridKeyPressEventArgs = function(domEvent) {

};
Telerik.Web.UI.GridKeyPressEventArgs.prototype =
{

    get_keyCode: function() {
        /// <summary>Returns the key code of the pressed key</summary>
        /// <returns type='Number' integer="true"></returns>
    },

    get_isShiftPressed: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_isCtrlPressed: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_isAltPressed: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_domEvent: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.GridKeyPressEventArgs.registerClass("Telerik.Web.UI.GridKeyPressEventArgs", Sys.CancelEventArgs);

Telerik.Web.UI.GridDragDropCancelEventArgs = function(rowElement, domEvent, dragedItems, htmlElement, targetRadGrid, dropPosition) {

};
Telerik.Web.UI.GridDragDropCancelEventArgs.prototype =
{

    get_targetGridDataItem: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_targetItemIndexHierarchical: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_targetItemId: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_targetItemTableView: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_domEvent: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_TargetDataKeyValue: function(columnName) {
        /// <summary></summary>
        /// <param name='columnName' type='' domElement='' optional=''></param>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_draggedItems: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_destinationHtmlElement: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_destinationHtmlElement: function(value) {
        /// <summary></summary>
        /// <param name='value' type='' domElement='' optional=''></param>
    },

    get_targetRadGrid: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_dropPosition: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.GridDragDropCancelEventArgs.registerClass("Telerik.Web.UI.GridDragDropCancelEventArgs", Sys.CancelEventArgs);
Telerik.Web.UI.GridDataItemEventArgs = function(rowElement, domEvent) {

};
Telerik.Web.UI.GridDataItemEventArgs.prototype =
{

    get_item: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_gridDataItem: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_itemIndexHierarchical: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_id: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_tableView: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_domEvent: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    getDataKeyValue: function(columnName) {
        /// <summary></summary>
        /// <param name='columnName' type='' domElement='' optional=''></param>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.GridDataItemEventArgs.registerClass("Telerik.Web.UI.GridDataItemEventArgs", Sys.EventArgs);

Telerik.Web.UI.GridDataItemCancelEventArgs = function(rowElement, domEvent) {

};
Telerik.Web.UI.GridDataItemCancelEventArgs.prototype =
{

    get_gridDataItem: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_itemIndexHierarchical: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_id: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_tableView: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_domEvent: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    getDataKeyValue: function(columnName) {
        /// <summary></summary>
        /// <param name='columnName' type='' domElement='' optional=''></param>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.GridDataItemCancelEventArgs.registerClass("Telerik.Web.UI.GridDataItemCancelEventArgs", Sys.CancelEventArgs);

Telerik.Web.UI.GridDataSourceResolvedEventArgs = function(data) {

};
Telerik.Web.UI.GridDataSourceResolvedEventArgs.prototype =
{

    get_data: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_data: function(value) {

    }

};
Telerik.Web.UI.GridDataSourceResolvedEventArgs.registerClass("Telerik.Web.UI.GridDataSourceResolvedEventArgs", Sys.EventArgs);

Telerik.Web.UI.GridClientDataBindingParameterType = function() {
    /// <summary></summary>
    /// <field name="String" type="Number" integer="true" static="true"></field>
    /// <field name="List" type="Number" integer="true" static="true"></field>
    /// <field name="Linq" type="Number" integer="true" static="true"></field>
    /// <field name="Oql" type="Number" integer="true" static="true"></field>
};
Telerik.Web.UI.GridClientDataBindingParameterType.prototype =
{
    String: 0,
    List: 1,
    Linq: 2,
    Oql: 3
};

Telerik.Web.UI.GridClientDataBindingParameterType.registerEnum("Telerik.Web.UI.GridClientDataBindingParameterType", false);
/// <reference Name="MicrosoftAjax.js">

$telerik.toFormDecorator = function(object)
{
	/// <summary>Casts an object to a RadFormDecorator instance</summary>
	/// <returns type="Telerik.Web.UI.RadFormDecorator">A RadFormDecorator instance</returns>
};
$telerik.findFormDecorator = function(id, parent)
{
	/// <summary>Finds a RadFormDecorator instance</summary>
	/// <param name='id'>A string that contains ID of the RadFormDecorator to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadFormDecorator to find</param>
	/// <returns type="Telerik.Web.UI.RadFormDecorator">The RadFormDecorator instance</returns>
};

(function()
{

	Telerik.Web.UI.RadFormDecorator = function(element)
	{

		/// <summary>
		/// The FormDecorator control provides skinning for browser checkboxes,buttons and radiobuttons.
		/// </summary>
		/// <param name="element" type="Sys.UI.DomElement" domElement="true">
		/// DOM element associated with the behavior
		/// </param>

	};
	Telerik.Web.UI.RadFormDecorator.prototype =
{
	decorate: function(rootElement, addCssClassesToElement)
	{
		/// <summary>Explicitly decorates the elements</summary>
		/// <param name='rootElement' type='' domElement='' optional=''></param>
		/// <param name=' addCssClassesToElement' type='' domElement='' optional=''></param>
	},

	decorateTextboxes: function(rootElement)
	{
		/// <summary>Decorates the textboxes inside the passed rootElement. If the passed parameter is null then decorates all TextBoxes on the page</summary>
		/// <param name='rootElement' type='object' domElement='true' optional='true'></param>
	},

	decorateButtons: function(rootElement)
	{
		/// <summary>Decorates the buttons inside the passed rootElement. If the passed parameter is null then decorates all buttons on the page</summary>
		/// <param name='rootElement' type='object' domElement='true' optional='true'></param>
	},

	decorateButton: function(realButton)
	{
		/// <summary>Decorates a single button element, passed as parameter</summary>
		/// <param name='realButton' type='object' domElement='true' optional='false'></param>
	},

	decorateInput: function(input)
	{
		/// <summary>Decorates a single input element, passed as parameter</summary>
		/// <param name='input' type='object' domElement='true' optional='false'></param>
	},

	decorateSelects: function(rootElement)
	{
		/// <summary>Decorates the selects inside the passed rootElement. If the passed parameter is null then decorates all selects on the page</summary>
		/// <param name='rootElement' type='object' domElement='true' optional='true'></param>
	},

	decorateSelect: function(select)
	{
		/// <summary>Decorates a single select element, passed as parameter</summary>
		/// <param name='select' type='object' domElement='true' optional='false'></param>
	},

	get_decoratedControls: function()
	{
		/// <summary>Returns the value the controls to decorate set to the DecoratedControls property</summary>
		/// <returns type='Telerik.Web.UI.FormDecoratorDecoratedControls' mayBeNull='false'></returns>
	},

	set_decoratedControls: function(value)
	{
		/// <summary>Sets what controls to be decorated</summary>
		/// <param name='value' type='Telerik.Web.UI.FormDecoratorDecoratedControls' domElement='false' optional='false'></param>
	},

	get_decorationZoneID: function()
	{
		/// <summary>Returns ID of the element that is set as decoration zone. returns null if the DecorationZoneID is not set</summary>
		/// <returns type='String' mayBeNull='true'></returns>
	}
};

	Telerik.Web.UI.RadFormDecorator.registerClass("Telerik.Web.UI.RadFormDecorator", Sys.UI.Control);

	Telerik.Web.UI.FormDecoratorDecoratedControls = function()
	{
		/// <summary></summary>
		/// <field name="None" type="Number" integer="true" static="true"></field>
		/// <field name="CheckBoxes" type="Number" integer="true" static="true"></field>
		/// <field name="RadioButtons" type="Number" integer="true" static="true"></field>
		/// <field name="Buttons" type="Number" integer="true" static="true"></field>
		/// <field name="Scrollbars" type="Number" integer="true" static="true"></field>
		/// <field name="Textbox" type="Number" integer="true" static="true"></field>
		/// <field name="Textarea" type="Number" integer="true" static="true"></field>
		/// <field name="Fieldset" type="Number" integer="true" static="true"></field>
		/// <field name="Label" type="Number" integer="true" static="true"></field>
		/// <field name="H4H5H6" type="Number" integer="true" static="true"></field>
		/// <field name="Select" type="Number" integer="true" static="true"></field>
		/// <field name="Zone" type="Number" integer="true" static="true"></field>
		/// <field name="GridFormDetailsViews" type="Number" integer="true" static="true"></field>
		/// <field name="Default" type="Number" integer="true" static="true"></field>
		/// <field name="All" type="Number" integer="true" static="true"></field>
	};

	Telerik.Web.UI.FormDecoratorDecoratedControls.prototype =
{
	None: 0x0,
	CheckBoxes: 0x1,
	RadioButtons: 0x2,
	Buttons: 0x4,
	Scrollbars: 0x8,
	Textbox: 0x10,
	Textarea: 0x20,
	Fieldset: 0x40,
	Label: 0x80,
	H4H5H6: 0x100,
	Select: 0x200,
	Zone: 0x400,
	GridFormDetailsViews: 0x800,
	Default: (0x1 | 0x2 | 0x4 | 0x8),
	All: 0xFFF
};

	Telerik.Web.UI.FormDecoratorDecoratedControls.registerEnum("Telerik.Web.UI.FormDecoratorDecoratedControls", false);

})();$telerik.toDateInput = function(object) {
    /// <summary>Casts an object to a RadDateInput instance</summary>
    /// <returns type="Telerik.Web.UI.RadDateInput">A RadDateInput instance</returns>
};
$telerik.findDateInput = function(id, parent) {
    /// <summary>Finds a RadDateInput instance</summary>
    /// <param name='id'>A string that contains ID of the RadDateInput to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadDateInput to find</param>
    /// <returns type="Telerik.Web.UI.RadDateInput">The RadDateInput instance</returns>
};
Telerik.Web.UI.DateInputValueChangedEventArgs = function(newValue, oldValue, newDate, oldDate) {

};
Telerik.Web.UI.DateInputValueChangedEventArgs.prototype =
{
    get_newDate: function() {
        /// <summary>Returns the new value of the control as a Date object</summary>
        /// <returns type='Date' mayBeNull='false'></returns>
    },
    get_oldDate: function() {
        /// <summary>Returns the old value of the control as a Date object</summary>
        /// <returns type='Date' mayBeNull='false'></returns>
    }
};
Telerik.Web.UI.RadDateInput = function(element) {
    /// <summary>Initializes a new instance of RadDateInput</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadDateInput</param>
};
Telerik.Web.UI.RadDateInput.prototype =
{
    initialize: function() {
        /// <summary>Initializes a new instance of RadDateInput</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadDateInput</summary>
    },
    parseDate: function(value, baseDate) {
        /// <summary>Parses a string using the DateFormatInfo object and returns the resulting date</summary>
        /// <param name='value' type='String'></param>
        /// <param name='baseDate' type='Date'></param>
    },
    updateDisplayValue: function() {
        /// <summary>Updates the display value of the RadDateInput control</summary>
    },
    updateCssClass: function() {
        /// <summary>Updates the css class of the RadDateInput control</summary>
    },
    isNegative: function() {
        /// <summary>Returns true if the value of the text box is a negative number</summary>
    },
    get_displayValue: function() {
        /// <summary>Gets the value of the control as it is formatted when the control does not have focus</summary>
        /// <value type='String'></value>
    },
    get_editValue: function() {
        /// <summary>Gets the value of the control as it is formatted when the control has focus</summary>
        /// <value type='String'></value>
    },
    get_selectedDate: function() {
        /// <summary>Gets the selected date of the RadDateInput control</summary>
        /// <value type='Date'></value>
    },
    set_selectedDate: function(value) {
        /// <summary>Sets the selected date of the RadDateInput control</summary>
        /// <param name='value' type='Date'></param>
    },
    get_value: function() {
        /// <summary>Returns the value of the control as a string</summary>
        /// <value type='String'></value>
    },
    get_minDateStr: function() {
        /// <summary>Returns the earliest valid date value as a string</summary>
        /// <value type='String'></value>
    },
    get_minDate: function() {
        /// <summary>Returns the earliest valid date value</summary>
        /// <value type='Date'></value>
    },
    set_minDate: function(value) {
        /// <summary>Sets the earliest date the user can enter</summary>
        /// <param name='value' type='Date></param>
    },
    get_maxDate: function() {
        /// <summary>Returns the latest valid date value</summary>
        /// <value type='Date'></value>
    },
    get_maxDateStr: function() {
        /// <summary>Returns the latest valid date value as a string</summary>
        /// <value type='String'></value>
    },
    set_maxDate: function(value) {
        /// <summary>Sets the latest date the user can enter</summary>
        /// <param name='value' type='Date'></param>
    },
    get_dateFormat: function() {
        /// <summary>Returns the format string for the control when it has focus</summary>
        /// <value type='String'></value>
    },
    set_dateFormat: function(value) {
        /// <summary>Sets the format string for the control when it has focus</summary>
        /// <param name='value' type='String'></param>
    },
    get_displayDateFormat: function() {
        /// <summary>Returns the format string for the control when it does not have focus</summary>
        /// <value type='String'></value>
    },
    set_displayDateFormat: function(value) {
        /// <summary>Sets the format string for the control when it does not have focus</summary>
        /// <param name='value' type='String'></param>
    },
    get_dateFormatInfo: function() {
        /// <summary>Returns the Date Format Info object, which includes the settings used to parse date values</summary>
        /// <value type='Telerik.Web.UI.DateParsing'></value>
    },
    set_dateFormatInfo: function(value) {
        /// <summary>Sets the Date Format Info object, which includes the settings used to parse date values</summary>
        /// <param name='value' type='Telerik.Web.UI.DateParsing'></param>
    },
    get_incrementSettings: function() {
        /// <summary>Returns the Increment Settings object, which you can use to change the way the control responds to arrow keys and the mouse wheel</summary>
        /// <value type='Object'></value>
    },
    set_incrementSettings: function(value) {
        /// <summary>Sets the Increment Settings object, which you can use to change the way the control responds to arrow keys and the mouse wheel</summary>
        /// <param name='value' type='Object'></param>
    },
    saveClientState: function() {
        /// <summary>Saves the client state of the RadDateInput control</summary>
    },
    raise_valueChanged: function(newValue, oldValue) {
        /// <summary>Raises the ValueChanged event if the old and the new values are different</summary>
        /// <param name='newValue' type='String'>The new value that should be set to the RadDateInput control</param>
        /// <param name=' oldValue' type='String'>The old value of the RadDateInput control</param>
    },
    clear: function() {
        /// <summary>Clears the client instance of RadInputControl</summary>
    },
    disable: function() {
        /// <summary>Disables the client instance of RadInputControl</summary>
    },
    enable: function() {
        /// <summary>Enables the client instance of RadInputControl </summary>
    },
    focus: function() {
        /// <summary>Indicating whether RadInputControl enter focus</summary>
    },
    blur: function() {
        /// <summary>Indicating whether RadInputControl loses focus</summary>
    },
    isEmpty: function() {
        /// <summary>Returns true if the value of the RadInputControl is empty</summary>
    },
    isNegative: function() {
        /// <summary>Returns true if the value of the RadInputControl is a negative number</summary>
    },
    isReadOnly: function() {
        /// <summary>Returns true if the value of the RadInputControl is read only</summary>
    },
    isMultiLine: function() {
        /// <summary>Returns true if the value of the RadInputControl is multi line</summary>
    },
    updateDisplayValue: function() {
        /// <summary>Updates the display value of RadInputControl/summary>
    },
    repaint: function() {
        /// <summary>Redraws the client side object on the client</summary>
    },
    updateCssClass: function() {
        /// <summary>Updates the css class of RadInputControl</summary>
    },
    updateCssText: function(styleCssText) {
        /// <summary>Updates the css text of RadInputControl</summary>
        /// <param name='styleCssText' type='String'></param>
    },
    selectText: function(start, end) {
        /// <summary>Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range</summary>
        /// <param name='start' type='Number' integer='true'></param>
        /// <param name=' end' type='Number' integer='true'></param>
    },
    selectAllText: function() {
        /// <summary>Selects all text in the RadInputControl</summary>
    },
    get_value: function() {
        String
        /// <summary>Returns the value of the text box</summary>
        /// <value type='String'></value>
    },
    set_value: function(newValue) {
        /// <summary>Sets the value of the text box</summary>
        /// <param name='newValue' type='String'></param>
    },
    get_displayValue: function() {
        /// <summary>Gets the value of RadInputControl as it is formatted when the input does not have focus</summary>
        /// <value type='String' ></value>
    },
    get_editValue: function() {
        /// <summary>Gets the value of RadInputControl as it is formatted when the input has focus</summary>
        /// <value type='String'></value>
    },
    set_caretPosition: function(position) {
        /// <summary>Sets the position of the caret</summary>
        /// <param name='position' type='Number' integer='true'></param>
    },
    get_caretPosition: function() {
        /// <summary>Returns the current position of the caret.</summary>
        /// <value type='Number' integer='true'></value>
    },
    raisePostBackEvent: function() {
        /// <summary>Raises the postback event of RadInputControl</summary>
    },
    get_wrapperElement: function() {
        /// <summary>Gets the DOM element for the <div> wrapper element</summary>
        /// <value type='HTML element'></value>
    },
    get_textBoxValue: function() {
        /// <summary>Gets the string that the user typed into the input</summary>
        /// <value type='String'></value>
    },
    set_textBoxValue: function(value) {
        /// <summary>Sets the string that the user typed into the input</summary>
        /// <param name='value' type='String'></param>
    },
    get_autoPostBack: function() {
        /// <summary>Returns the value of the AutoPostBack property</summary>
        /// <value type='Boolean'></value>
    },
    set_autoPostBack: function(value) {
        /// <summary>Enables or disables postbacks when the user changes the text in the input</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_emptyMessage: function() {
        /// <summary>Returns the message that appears when the input value is an empty string</summary>
        /// <value type='String'></value>
    },
    set_emptyMessage: function(value) {
        /// <summary>Sets the message that appears when the input value is an empty string</summary>
        /// <param name='value' type='String'></param>
    },
    get_selectionOnFocus: function() {
        /// <summary>Returns the value of the SelectionOnFocus property</summary>
        /// <value type='Telerik.Web.UI.SelectionOnFocus'></value>
    },
    set_selectionOnFocus: function(value) {
        /// <summary>Sets the SelectionOnFocus property</summary>
        /// <param name='value' type='Telerik.Web.UI.SelectionOnFocus'></param>
    },
    get_showButton: function() {
        /// <summary>Returns true if the input has an associated image button</summary>
        /// <value type='Boolean'></value>
    },
    set_showButton: function(value) {
        /// <summary>Accepts true if the input has an associated image button</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_invalidStyleDuration: function() {
        /// <summary>Gets the invalid style duration of RadInputControl</summary>
        /// <value type='Number'></value>
    },
    set_invalidStyleDuration: function(value) {
        /// <summary>Sets the invalid style duration of RadInputControl</summary>
        /// <param name='value' type='Number'></param>
    },
    get_enabled: function() {
        /// <summary>Returns true if the input is enabled</summary>
        /// <value type='Boolean'></value>
    },
    set_enabled: function(value) {
        /// <summary>Sets true if the input is enabled</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_styles: function() {
        /// <summary>Returns the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded</summary>
        /// <value type='Array' elementType='object'></value>
    },
    set_styles: function(value) {
        /// <summary>Sets the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded</summary>
        /// <param name='value' type='Array' elementType='object'></param>
    },
    saveClientState: function(additionalProps) {
        /// <summary>Saves the client state for the object</summary>
        /// <param name='additionalProps' type='Array' elementType='Object'></param>
    },
    get_visible: function() {
        /// <summary>Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element</summary>
        /// <value type='Boolean'></value>
    },

    set_visible: function(value) {
        /// <summary>Sets the input element as hidden on the client</summary>
        /// <param name='value' type='Boolean'></param>
    },
    add_blur: function(handler) {
        /// <summary>Adds the handler for the blur event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_blur: function(handler) {
        /// <summary>Removes the handler for the blur event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_blur: function(args) {
        /// <summary>Raises the blur event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_mouseOut: function(handler) {
        /// <summary>Adds a handler for the mouseOut event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_mouseOut: function(handler) {
        /// <summary>Removes the handler for the mouseOut event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_mouseOut: function(args) {
        /// <summary>Raises the mouseOut event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_valueChanged: function(handler) {
        /// <summary>Adds the handler for the valueChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_valueChanged: function(handler) {
        /// <summary>Removes the handler for the valueChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_valueChanged: function(newValue, oldValue) {
        /// <summary>Raises the valueChanged event</summary>
        /// <param name='newValue' type='Object' ></param>
        /// <param name='oldValue' type='Object'></param>
    },
    add_error: function(handler) {
        /// <summary>Adds the handler for the error event</summary>
        /// <param name='handler' type='String' ></param>
    },
    remove_error: function(handler) {
        /// <summary>Removes the handler for the error event</summary>
        /// <param name='handler' type='String' ></param>
    },
    raise_error: function(args) {
        /// <summary>Raises the error event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_load: function(handler) {
        /// <summary>Adds the handler for the load event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_load: function(handler) {
        /// <summary>Removes the handler for the load event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_load: function(args) {
        /// <summary>Raises the load event</summary>
        /// <param name='args' type='Sys.EventArgs' ></param>
    },
    add_mouseOver: function(handler) {
        /// <summary>Adds the handler for the mouseOver event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_mouseOver: function(handler) {
        /// <summary>Removes the handler for the mouseOver event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_mouseOver: function(args) {
        /// <summary>Raises the mouseOver event</summary>
        /// <param name='args' type='Sys.EventArgs' ></param>
    },
    add_focus: function(handler) {
        /// <summary>Removes the handler for the focus event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_focus: function(handler) {
        /// <summary>Removes the handler for the focus event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_focus: function(args) {
        /// <summary>Raises the focus event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_disable: function(handler) {
        /// <summary>Adds the handler for the disable event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_disable: function(handler) {
        /// <summary>Removes the handler for the disable event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_disable: function(args) {
        /// <summary>Raises the handler for the mouseOver event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_enable: function(handler) {
        /// <summary>Adds the handler for the enable event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_enable: function(handler) {
        /// <summary>Removes the handler for the enable event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_enable: function(args) {
        /// <summary>Raises the enable event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_keyPress: function(handler) {
        /// <summary>Adds the handler for the keyPress event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_keyPress: function(handler) {
        /// <summary>Removes the handler for the keyPress event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_keyPress: function(args) {
        /// <summary>Raises the keyPress event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_enumerationChanged: function(handler) {
        /// <summary>Adds the handler for the enumerationChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_enumerationChanged: function(handler) {
        /// <summary>Removes the handler for the enumerationChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_enumerationChanged: function(args) {
        /// <summary>Raises the enumerationChanged event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_moveUp: function(handler) {
        /// <summary>Adds the handler for the moveUp event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_moveUp: function(handler) {
        /// <summary>Removes the handler for the moveUp event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_moveUp: function(args) {
        /// <summary>Raises the moveUp event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_moveDown: function(handler) {
        /// <summary>Adds the handler for the moveDown event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_moveDown: function(handler) {
        /// <summary>Removes the handler for the moveDown event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_moveDown: function(args) {
        /// <summary>Raises the moveDown event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_buttonClick: function(handler) {
        /// <summary>Adds the handler for the buttonClick event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_buttonClick: function(handler) {
        /// <summary>Removes the handler for the buttonClick event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_buttonClick: function(args) {
        /// <summary>Raises the buttonClick event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_valueChanging: function(handler) {
        /// <summary>Adds the handler for the valueChanging event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_valueChanging: function(handler) {
        /// <summary>Removes the handler for the valueChanging event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_valueChanging: function(args) {
        /// <summary>Raises the valueChanging event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    }
};
Telerik.Web.UI.RadDateInput.registerClass("Telerik.Web.UI.RadDateInput", Sys.UI.Control);
Telerik.Web.UI.RadDateInputComponent = function() {
    /// <summary>Initializes a new instance of RadDateInputComponent</summary>
};
Telerik.Web.UI.RadDateInputComponent.prototype =
{
    initialize: function() {
        /// <summary>Initializes the client instance of RadDateInputComponent</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadDateInputComponent</summary>
    },
    get_dateFormatInfo: function() {
        /// <summary>Returns the Date Format Info object, which includes the settings used to parse date values</summary>
        /// <value type='Telerik.Web.UI.DateParsing' ></value>
    },
    set_dateFormatInfo: function(value) {
        /// <summary>Sets the Date Format Info object, which includes the settings used to parse date values</summary>
        /// <param name='value' type='Telerik.Web.UI.DateParsing'></param>
    },
    get_maxDate: function() {
        /// <summary>Returns the latest valid date value</summary>
        /// <value type='Date'></value>
    },
    set_maxDate: function(value) {
        /// <summary>Sets the latest valid date value</summary>
        /// <param name='value' type='Date' ></param>
    },
    get_minDate: function() {
        /// <summary>Returns the earliest valid date value</summary>
        /// <value type='Date'></value>
    },
    set_minDate: function(value) {
        /// <summary>Sets the earliest valid date value</summary>
        /// <param name='value' type='Date'></param>
    },
    get_displayDateFormat: function() {
        /// <summary>Returns the format string for the control when it does not have focus</summary>
        /// <value type='String'></value>
    },
    set_displayDateFormat: function(value) {
        /// <summary>Sets the format string for the control when it does not have focus</summary>
        /// <param name='value' type='String'></param>
    },
    get_dateFormat: function() {
        /// <summary>Returns the format string for the control when it has focus</summary>
        /// <returns type='String' mayBeNull=''></returns>
    },
    set_dateFormat: function(value) {
        /// <summary>Sets the format string for the control when it has focus</summary>
        /// <param name='value' type='String'></param>
    }
};
Telerik.Web.UI.RadDateInputComponent.registerClass('Telerik.Web.UI.RadDateInputComponent', Sys.Component);Telerik.Web.UI.RadDateInputExtender = function() {
    /// <summary>Initializes a new instance of RadDateInputExtender</summary>
};
Telerik.Web.UI.RadDateInputExtender.prototype =
{

    dispose: function() {
        /// <summary>Disposes the client instance of RadDateInputExtender</summary>
    },
    formatEditValue: function(value) {
        /// <summary>Returns the format edit value of RadDateInputExtender</summary>
        /// <param name='value' type='Object'></param>
    },
    formatDisplayValue: function(value) {
        /// <summary>Returns the format display value of RadDateInputExtender</summary>
        /// <param name='value' type='Object'></param>
    },
    validateInputValue: function(value) {
        /// <summary>Returns the validate input value of RadDateInputExtender</summary>
        /// <param name='value' type='Date'></param>
    },
    parseDate: function(value, baseDate) {
        /// <summary>Parses a string using the DateFormatInfo object and returns the resulting date</summary>
        /// <param name='value' type='String'></param>
        /// <param name=' baseDate' type='Date'></param>
    },
    get_selectedDate: function() {
        /// <summary>Gets the selected date of RadDateInputExtender</summary>
        /// <value type='Date'></value>
    },
    raise_error: function(args) {
        /// <summary>Returns a Boolean value, indicating whether error is raised</summary>
        /// <param name='args' type='Boolean'></param>
    }
};
Telerik.Web.UI.RadDateInputExtender.registerClass("Telerik.Web.UI.RadDateInputExtender");Telerik.Web.UI.RadInputComponent = function() {
    /// <summary>Initializes a new instance of RadInputComponent</summary>
};
Telerik.Web.UI.RadInputComponent.prototype =
{
    initialize: function() {
        /// <summary>Initializes the client instance of RadInputComponent</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadInputComponent</summary>
    },
    isValid: function(inputId) {
        /// <summary>Returns a Boolean value, indicating whether the value of the input is valid</summary>
        /// <param name='inputId' type='Boolean'></param>
    },
    success: function(result) {
        /// <summary>Returns a Boolean value, indicating success</summary>
        /// <param name='result' type='Boolean'></param>
    },
    get_targetControlIDs: function() {
        /// <summary>Returns an Array containing the ids of the target inputs</summary>
        /// <value type='Array' elementType='String'></value>
    },
    set_targetControlIDs: function(value) {
        /// <summary>Accepts an Array containing the ids of the target inputs</summary>
        /// <param name='value' type='Array' elementType='String'></param>
    },
    get_emptyMessage: function() {
        /// <summary>Returns the message that appears when the value is not set</summary>
        /// <value type='String' ></value>
    },
    set_emptyMessage: function(value) {
        /// <summary>Sets the message that appears when the value is not set</summary>
        /// <param name='value' type='String'></param>
    },
    set_selectionOnFocus: function(value) {
        /// <summary>Sets the SelectionOnFocus property</summary>
        /// <param name='value' type='Telerik.Web.UI.SelectionOnFocus'></param>
    },
    get_emptyMessageCss: function() {
        /// <summary>Returns the message Css that appears when the value is not set</summary>
        /// <value type='String' ></value>
    },
    set_emptyMessageCss: function(value) {
        /// <summary>Sets the message Css that appears when the value is not set</summary>
        /// <param name='value' type='String' ></param>
    },
    get_errorMessage: function() {
        /// <summary>Gets the error message of RadInputComponent</summary>
        /// <value type='String' ></value>
    },
    set_errorMessage: function(value) {
        /// <summary>Sets the error message of RadInputComponent</summary>
        /// <param name='value' type='String'></param>
    },
    get_initializeOnClient: function() {
        /// <summary>Returns a Boolean value,initializing the client instance of RadInputComponent</summary>
        /// <value type='Boolean' mayBeNull=''></value>
    },
    set_initializeOnClient: function(value) {
        /// <summary>Accepts  a Boolean value,initializing the client instance of RadInputComponen</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_focusedCss: function() {
        /// <summary>Gets the focused css of RadInputComponent</summary>
        /// <value type='Boolean'></value>
    },
    set_focusedCss: function(value) {
        /// <summary>Sets the focused css of RadInputComponent</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_disabledCss: function() {
        /// <summary>Gets the disabled css of RadInputComponent</summary>
        /// <value type='Boolean'></value>
    },
    set_disabledCss: function(value) {
        /// <summary>Sets the disabled css of RadInputComponent</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_readOnlyCss: function() {
        /// <summary>Gets the read only css of RadInputComponent</summary>
        /// <value type='Boolean'></value>
    },
    set_readOnlyCss: function(value) {
        /// <summary>Sets the read only css of RadInputComponent</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_invalidCss: function() {
        /// <summary>Gets the invalid css of RadInputComponent</summary>
        /// <value type='Boolean'></value>
    },
    set_invalidCss: function(value) {
        /// <summary>Sets the invalid css of RadInputComponent</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_hoveredCss: function() {
        /// <summary>Gets the hovered css of RadInputComponent</summary>
        /// <value type='Boolean'></value>
    },
    set_hoveredCss: function(value) {
        /// <summary>Sets the hovered css of RadInputComponent</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_enabledCss: function() {
        /// <summary>Gets the enabled css of RadInputComponent</summary>
        /// <value type='Boolean'></value>
    },
    set_enabledCss: function(value) {
        /// <summary>Sets the enabled css of RadInputComponent</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_targetControlID: function() {
        /// <summary>Returns the id of the target control</summary>
        /// <value type='String'></value>
    },
    set_targetControlID: function(value) {
        /// <summary>Accepts the id of the target control</summary>
        /// <param name='value' type='String'></param>
    },
    get_selectionOnFocus: function() {
        /// <summary>Returns the value of the SelectionOnFocus property</summary>
        /// <value type='Telerik.Web.UI.SelectionOnFocus'></value>
    },
    set_selectionOnFocus: function(value) {
        /// <summary>Accepts the value of the SelectionOnFocus property</summary>
        /// <param name='value' type='Telerik.Web.UI.SelectionOnFocus'></param>
    },
    get_isRequired: function() {
        /// <summary>Returns a Boolean value, indicating whether the value of the input is required</summary>
        /// <value type='Boolean'></value>
    },
    set_isRequired: function(value) {
        /// <summary>Accepts a Boolean value, indicating whether the value of the input is required</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_validationGroup: function() {
        /// <summary>Gets the validation group of RadInputComponent</summary>
        /// <value type='String'></value>
    },
    set_validationGroup: function(value) {
        /// <summary>Sets the validation group of RadInputComponent</summary>
        /// <param name='value' type='String'></param>
    },
    get_validateOnEvent: function() {
        /// <summary>Gets validateOnEvent of RadInputComponent</summary>
        /// <value type='Number' integer='true'></value>
    },
    set_validateOnEvent: function(value) {
        /// <summary>Sets validateOnEvent of RadInputComponent</summary>
        /// <param name='value' type='Number' integer='true'></param>
    },
    get_location: function() {
        /// <summary>Gets the location of RadInputComponent</summary>
        /// <value type='String'></value>
    },
    set_location: function(value) {
        /// <summary>Sets the location of RadInputComponent</summary>
        /// <param name='value' type='String'></param>
    },
    get_method: function() {
        /// <summary>Gets the method of RadInputComponent</summary>
        /// <value type='String'></value>
    },
    set_method: function(value) {
        /// <summary>Sets the method of RadInputComponent</summary>
        /// <param name='value' type='String'></param>
    },
    raiseEvent: function(eventName, eventArgs) {
        /// <summary>Raises the event of RadInputComponent</summary>
        /// <param name='eventName' type='String'></param>
        /// <param name=' eventArgs' type='Sys.EventArgs'></param>
    },
    add_blur: function(handler) {
        /// <summary>Adds the handler for the blur event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_blur: function(handler) {
        /// <summary>Removes the handler for the blur event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_blur: function(args) {
        /// <summary>Raises the blur event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },

    add_focus: function(handler) {
        /// <summary>Adds the handler for the focus event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_focus: function(handler) {
        /// <summary>Removes the handler for the focus event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_focus: function(args) {
        /// <summary>Raises the focus event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_keyPress: function(handler) {
        /// <summary>Adds the handler for the keyPress event</summary>
        /// <param name='handler' type=''></param>
    },
    remove_keyPress: function(handler) {
        /// <summary>Removes the handler for the keyPress event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_keyPress: function(args) {
        /// <summary>Raises the keyPress event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_error: function(handler) {
        /// <summary>Adds the handler for the error event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_error: function(handler) {
        /// <summary>Removes the handler for the error event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_error: function(args) {
        /// <summary>Raises the handler for the error event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_validating: function(handler) {
        /// <summary>Adds the handler for the validating event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_validating: function(handler) {
        /// <summary>Removes the handler for the validating event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_validating: function(args) {
        /// <summary>Raises the handler for the validating event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    }
};
Telerik.Web.UI.RadInputComponent.registerClass('Telerik.Web.UI.RadInputComponent', Sys.Component);Telerik.Web.UI.RadInputControl = function(element) {
    /// <summary>Initializes a new instance of RadInputControl</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadInputControl</param>
};
Telerik.Web.UI.RadInputControl.prototype =
{
    initialize: function() {
        /// <summary>Initializes the client instance of RadInputControl</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadInputControl</summary>
    },
    clear: function() {
        /// <summary>Clears the client instance of RadInputControl</summary>
    },
    disable: function() {
        /// <summary>Disables the client instance of RadInputControl</summary>
    },
    enable: function() {
        /// <summary>Enables the client instance of RadInputControl </summary>
    },
    focus: function() {
        /// <summary>Indicating whether RadInputControl enter focus</summary>
    },
    blur: function() {
        /// <summary>Indicating whether RadInputControl loses focus</summary>
    },
    isEmpty: function() {
        /// <summary>Returns true if the value of the RadInputControl is empty</summary>
    },
    isNegative: function() {
        /// <summary>Returns true if the value of the RadInputControl is a negative number</summary>
    },
    isReadOnly: function() {
        /// <summary>Returns true if the value of the RadInputControl is read only</summary>
    },
    isMultiLine: function() {
        /// <summary>Returns true if the value of the RadInputControl is multi line</summary>
    },
    updateDisplayValue: function() {
        /// <summary>Updates the display value of RadInputControl/summary>
    },
    repaint: function() {
        /// <summary>Redraws the client side object on the client</summary>
    },
    updateCssClass: function() {
        /// <summary>Updates the css class of RadInputControl</summary>
    },
    updateCssText: function(styleCssText) {
        /// <summary>Updates the css text of RadInputControl</summary>
        /// <param name='styleCssText' type='String'></param>
    },
    selectText: function(start, end) {
        /// <summary>Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range</summary>
        /// <param name='start' type='Number' integer='true'></param>
        /// <param name=' end' type='Number' integer='true'></param>
    },
    selectAllText: function() {
        /// <summary>Selects all text in the RadInputControl</summary>
    },
    get_value: function() {
        String
        /// <summary>Returns the value of the text box</summary>
        /// <value type='String'></value>
    },
    set_value: function(newValue) {
        /// <summary>Sets the value of the text box</summary>
        /// <param name='newValue' type='String'></param>
    },
    get_displayValue: function() {
        /// <summary>Gets the value of RadInputControl as it is formatted when the input does not have focus</summary>
        /// <value type='String' ></value>
    },
    get_editValue: function() {
        /// <summary>Gets the value of RadInputControl as it is formatted when the input has focus</summary>
        /// <value type='String'></value>
    },
    set_caretPosition: function(position) {
        /// <summary>Sets the position of the caret</summary>
        /// <param name='position' type='Number' integer='true'></param>
    },
    get_caretPosition: function() {
        /// <summary>Returns the current position of the caret.</summary>
        /// <value type='Number' integer='true'></value>
    },
    raisePostBackEvent: function() {
        /// <summary>Raises the postback event of RadInputControl</summary>
    },
    get_wrapperElement: function() {
        /// <summary>Gets the DOM element for the <div> wrapper element</summary>
        /// <value type='HTML element'></value>
    },
    get_textBoxValue: function() {
        /// <summary>Gets the string that the user typed into the input</summary>
        /// <value type='String'></value>
    },
    set_textBoxValue: function(value) {
        /// <summary>Sets the string that the user typed into the input</summary>
        /// <param name='value' type='String'></param>
    },
    get_autoPostBack: function() {
        /// <summary>Returns the value of the AutoPostBack property</summary>
        /// <value type='Boolean'></value>
    },
    set_autoPostBack: function(value) {
        /// <summary>Enables or disables postbacks when the user changes the text in the input</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_emptyMessage: function() {
        /// <summary>Returns the message that appears when the input value is an empty string</summary>
        /// <value type='String'></value>
    },
    set_emptyMessage: function(value) {
        /// <summary>Sets the message that appears when the input value is an empty string</summary>
        /// <param name='value' type='String'></param>
    },
    get_selectionOnFocus: function() {
        /// <summary>Returns the value of the SelectionOnFocus property</summary>
        /// <value type='Telerik.Web.UI.SelectionOnFocus'></value>
    },
    set_selectionOnFocus: function(value) {
        /// <summary>Sets the SelectionOnFocus property</summary>
        /// <param name='value' type='Telerik.Web.UI.SelectionOnFocus'></param>
    },
    get_showButton: function() {
        /// <summary>Returns true if the input has an associated image button</summary>
        /// <value type='Boolean'></value>
    },
    set_showButton: function(value) {
        /// <summary>Accepts true if the input has an associated image button</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_invalidStyleDuration: function() {
        /// <summary>Gets the invalid style duration of RadInputControl</summary>
        /// <value type='Number'></value>
    },
    set_invalidStyleDuration: function(value) {
        /// <summary>Sets the invalid style duration of RadInputControl</summary>
        /// <param name='value' type='Number'></param>
    },
    get_enabled: function() {
        /// <summary>Returns true if the input is enabled</summary>
        /// <value type='Boolean'></value>
    },
    set_enabled: function(value) {
        /// <summary>Sets true if the input is enabled</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_styles: function() {
        /// <summary>Returns the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded</summary>
        /// <value type='Array' elementType='object'></value>
    },
    set_styles: function(value) {
        /// <summary>Sets the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded</summary>
        /// <param name='value' type='Array' elementType='object'></param>
    },
    saveClientState: function(additionalProps) {
        /// <summary>Saves the client state for the object</summary>
        /// <param name='additionalProps' type='Array' elementType='Object'></param>
    },
    get_visible: function() {
        /// <summary>Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element</summary>
        /// <value type='Boolean'></value>
    },

    set_visible: function(value) {
        /// <summary>Sets the input element as hidden on the client</summary>
        /// <param name='value' type='Boolean'></param>
    },
    add_blur: function(handler) {
        /// <summary>Adds the handler for the blur event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_blur: function(handler) {
        /// <summary>Removes the handler for the blur event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_blur: function(args) {
        /// <summary>Raises the blur event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_mouseOut: function(handler) {
        /// <summary>Adds a handler for the mouseOut event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_mouseOut: function(handler) {
        /// <summary>Removes the handler for the mouseOut event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_mouseOut: function(args) {
        /// <summary>Raises the mouseOut event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_valueChanged: function(handler) {
        /// <summary>Adds the handler for the valueChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_valueChanged: function(handler) {
        /// <summary>Removes the handler for the valueChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_valueChanged: function(newValue, oldValue) {
        /// <summary>Raises the valueChanged event</summary>
        /// <param name='newValue' type='Object' ></param>
        /// <param name='oldValue' type='Object'></param>
    },
    add_error: function(handler) {
        /// <summary>Adds the handler for the error event</summary>
        /// <param name='handler' type='String' ></param>
    },
    remove_error: function(handler) {
        /// <summary>Removes the handler for the error event</summary>
        /// <param name='handler' type='String' ></param>
    },
    raise_error: function(args) {
        /// <summary>Raises the error event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_load: function(handler) {
        /// <summary>Add the handler for the load event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_load: function(handler) {
        /// <summary>Removes the handler for the load event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_load: function(args) {
        /// <summary>Raises the load event</summary>
        /// <param name='args' type='Sys.EventArgs' ></param>
    },
    add_mouseOver: function(handler) {
        /// <summary>Add the handler for the mouseOver event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_mouseOver: function(handler) {
        /// <summary>Removes the handler for the mouseOver event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_mouseOver: function(args) {
        /// <summary>Raises the mouseOver event</summary>
        /// <param name='args' type='Sys.EventArgs' ></param>
    },
    add_focus: function(handler) {
        /// <summary>Removes the handler for the focus event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_focus: function(handler) {
        /// <summary>Removes the handler for the focus event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_focus: function(args) {
        /// <summary>Raises the focus event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_disable: function(handler) {
        /// <summary>Adds the handler for the disable event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_disable: function(handler) {
        /// <summary>Removes the handler for the disable event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_disable: function(args) {
        /// <summary>Raises the handler for the mouseOver event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_enable: function(handler) {
        /// <summary>Adds the handler for the enable event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_enable: function(handler) {
        /// <summary>Removes the handler for the enable event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_enable: function(args) {
        /// <summary>Raises the enable event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_keyPress: function(handler) {
        /// <summary>Adds the handler for the keyPress event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_keyPress: function(handler) {
        /// <summary>Removes the handler for the keyPress event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_keyPress: function(args) {
        /// <summary>Raises the keyPress event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_enumerationChanged: function(handler) {
        /// <summary>Adds the handler for the enumerationChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_enumerationChanged: function(handler) {
        /// <summary>Removes the handler for the enumerationChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_enumerationChanged: function(args) {
        /// <summary>Raises the enumerationChanged event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_moveUp: function(handler) {
        /// <summary>Adds the handler for the moveUp event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_moveUp: function(handler) {
        /// <summary>Removes the handler for the moveUp event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_moveUp: function(args) {
        /// <summary>Raises the moveUp event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_moveDown: function(handler) {
        /// <summary>Adds the handler for the moveDown event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_moveDown: function(handler) {
        /// <summary>Removes the handler for the moveDown event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_moveDown: function(args) {
        /// <summary>Raises the moveDown event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_buttonClick: function(handler) {
        /// <summary>Adds the handler for the buttonClick event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_buttonClick: function(handler) {
        /// <summary>Removes the handler for the buttonClick event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_buttonClick: function(args) {
        /// <summary>Raises the buttonClick event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_valueChanging: function(handler) {
        /// <summary>Adds the handler for the valueChanging event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_valueChanging: function(handler) {
        /// <summary>Removes the handler for the valueChanging event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_valueChanging: function(args) {
        /// <summary>Raises the valueChanging event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    }
};

Telerik.Web.UI.RadInputControl.registerClass('Telerik.Web.UI.RadInputControl', Sys.UI.Control);Telerik.Web.UI.RadInputEnumerations = function() {
    /// <summary>Initializes a new instance of RadInputEnumerations</summary>
};
Telerik.Web.UI.InputErrorReason = function() {
    /// <summary></summary>
    /// <field name="ParseError" type="Number" integer="true" static="true"></field>
    /// <field name="OutOfRange" type="Number" integer="true" static="true"></field>
};
Telerik.Web.UI.InputErrorReason.prototype =
{
    ParseError: 1,
    OutOfRange: 2
}
Telerik.Web.UI.InputErrorReason.registerEnum("Telerik.Web.UI.InputErrorReason", false);

Telerik.Web.UI.SelectionOnFocus = function() {
    /// <summary></summary>
    /// <field name="None" type="Number" integer="true" static="true"></field>
    /// <field name="CaretToBeginning" type="Number" integer="true" static="true"></field>
    /// <field name="CaretToEnd" type="Number" integer="true" static="true"></field>
    /// <field name="SelectAll" type="Number" integer="true" static="true"></field>
};
Telerik.Web.UI.SelectionOnFocus.prototype =
{
    None: 0,
    CaretToBeginning: 1,
    CaretToEnd: 2,
    SelectAll: 3
}
Telerik.Web.UI.SelectionOnFocus.registerEnum("Telerik.Web.UI.SelectionOnFocus", false);

Telerik.Web.UI.InputButtonType = function() {
    /// <summary></summary>
    /// <field name="Button" type="Number" integer="true" static="true"></field>
    /// <field name="MoveUpButton" type="Number" integer="true" static="true"></field>
    /// <field name="MoveDownButton" type="Number" integer="true" static="true"></field>
};
Telerik.Web.UI.InputButtonType.prototype =
{
    Button: 1,
    MoveUpButton: 2,
    MoveDownButton: 3
}
Telerik.Web.UI.InputButtonType.registerEnum("Telerik.Web.UI.InputButtonType", false);

Telerik.Web.UI.DisplayFormatPosition = function() {
    /// <summary></summary>
    /// <field name="Left" type="Number" integer="true" static="true"></field>
    /// <field name="Right" type="Number" integer="true" static="true"></field>
};
Telerik.Web.UI.DisplayFormatPosition.prototype =
{
    Left: 1,
    Right: 2
}
Telerik.Web.UI.DisplayFormatPosition.registerEnum("Telerik.Web.UI.DisplayFormatPosition", false);

Telerik.Web.UI.InputSettingValidateOnEvent = function() {
    /// <summary></summary>
    /// <field name="Blur" type="Number" integer="true" static="true"></field>
    /// <field name="Submit" type="Number" integer="true" static="true"></field>
    /// <field name="All" type="Number" integer="true" static="true"></field>
};
Telerik.Web.UI.InputSettingValidateOnEvent.prototype =
{
    Blur: 0,
    Submit: 1,
    All: 2
}
Telerik.Web.UI.InputSettingValidateOnEvent.registerEnum("Telerik.Web.UI.InputSettingValidateOnEvent", false);Telerik.Web.UI.InputValueChangedEventArgs = function(newValue, oldValue) {

};
Telerik.Web.UI.InputValueChangedEventArgs.prototype =
{

    get_oldValue: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_newValue: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.InputValueChangedEventArgs.registerClass('Telerik.Web.UI.InputValueChangedEventArgs', Sys.CancelEventArgs);

Telerik.Web.UI.InputValueChangingEventArgs = function(newValue, oldValue) {

};
Telerik.Web.UI.InputValueChangingEventArgs.prototype =
{

    set_newValue: function(value) {
        /// <summary></summary>
        /// <param name='value' type='' domElement='' optional=''></param>
    }

};
Telerik.Web.UI.InputValueChangingEventArgs.registerClass('Telerik.Web.UI.InputValueChangingEventArgs', Telerik.Web.UI.InputValueChangedEventArgs);

Telerik.Web.UI.MaskedTextBoxEventArgs = function(newValue, oldValue, chunk) {

};
Telerik.Web.UI.MaskedTextBoxEventArgs.prototype =
{

    get_oldValue: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_newValue: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_currentPart: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.MaskedTextBoxEventArgs.registerClass("Telerik.Web.UI.MaskedTextBoxEventArgs", Sys.CancelEventArgs);

Telerik.Web.UI.InputKeyPressEventArgs = function(domEvent, keyCode, keyCharacter) {

};
Telerik.Web.UI.InputKeyPressEventArgs.prototype =
{

    get_domEvent: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_keyCode: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_keyCharacter: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.InputKeyPressEventArgs.registerClass('Telerik.Web.UI.InputKeyPressEventArgs', Sys.CancelEventArgs);
Telerik.Web.UI.InputButtonClickEventArgs = function(buttonType) {

};
Telerik.Web.UI.InputButtonClickEventArgs.prototype =
{

    get_buttonType: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.InputButtonClickEventArgs.registerClass('Telerik.Web.UI.InputButtonClickEventArgs', Sys.CancelEventArgs);

Telerik.Web.UI.InputErrorEventArgs = function(reason, inputText) {

};
Telerik.Web.UI.InputErrorEventArgs.prototype =
{

    get_reason: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_inputText: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.InputErrorEventArgs.registerClass("Telerik.Web.UI.InputErrorEventArgs", Sys.CancelEventArgs);

Telerik.Web.UI.NumericInputErrorEventArgs = function(reason, inputText, keyCode, keyCharacter) {

};
Telerik.Web.UI.NumericInputErrorEventArgs.prototype =
{

    get_reason: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_inputText: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_keyCode: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_keyCharacter: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.NumericInputErrorEventArgs.registerClass('Telerik.Web.UI.NumericInputErrorEventArgs', Telerik.Web.UI.InputErrorEventArgs);

Telerik.Web.UI.InputManagerKeyPressEventArgs = function(domEvent, keyCode, keyCharacter, targetInput) {

};
Telerik.Web.UI.InputManagerKeyPressEventArgs.prototype =
{

    get_targetInput: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.InputManagerKeyPressEventArgs.registerClass('Telerik.Web.UI.InputManagerKeyPressEventArgs', Telerik.Web.UI.InputKeyPressEventArgs);

Telerik.Web.UI.InputManagerEventArgs = function(targetInput, domEvent) {

};
Telerik.Web.UI.InputManagerEventArgs.prototype =
{

    get_targetInput: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_domEvent: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.InputManagerEventArgs.registerClass('Telerik.Web.UI.InputManagerEventArgs', Sys.EventArgs);

Telerik.Web.UI.InputManagerErrorEventArgs = function(reason, inputText, targetInput) {

};
Telerik.Web.UI.InputManagerErrorEventArgs.prototype =
{

    get_targetInput: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_inputText: function(value) {
        /// <summary></summary>
        /// <param name='value' type='' domElement='' optional=''></param>
    }

};
Telerik.Web.UI.InputManagerErrorEventArgs.registerClass('Telerik.Web.UI.InputManagerErrorEventArgs', Telerik.Web.UI.InputErrorEventArgs);
Telerik.Web.UI.NumericInputManagerErrorEventArgs = function(reason, inputText, keyCode, keyCharacter, targetInput) {

};
Telerik.Web.UI.NumericInputManagerErrorEventArgs.prototype =
{

    get_targetInput: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    }

};
Telerik.Web.UI.NumericInputManagerErrorEventArgs.registerClass('Telerik.Web.UI.NumericInputManagerErrorEventArgs', Telerik.Web.UI.NumericInputErrorEventArgs);

Telerik.Web.UI.InputManagerValidatingEventArgs = function(input) {

};
Telerik.Web.UI.InputManagerValidatingEventArgs.prototype =
{

    get_input: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    get_isValid: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_isValid: function(value) {
        /// <summary></summary>
        /// <param name='value' type='' domElement='' optional=''></param>
    },

    get_context: function() {
        /// <summary></summary>
        /// <returns type='' mayBeNull=''></returns>
    },

    set_context: function(value) {
        /// <summary></summary>
        /// <param name='value' type='' domElement='' optional=''></param>
    }
};
Telerik.Web.UI.InputManagerValidatingEventArgs.registerClass("Telerik.Web.UI.InputManagerValidatingEventArgs", Sys.CancelEventArgs);Telerik.Web.UI.RadInputExtender = function(owner, id) {
    /// <summary>Initializes a new instance of RadInputExtender.</summary>
    /// <param name='owner'>RadInput that contains the RadInputExtender </param>
    /// <param name='id' >A string that contains ID of the RadInputExtender</param>
};
Telerik.Web.UI.RadInputExtender.prototype =
{
    isEmpty: function() {
        /// <summary>Returns a Boolean value, indicating whether the RadInputExtender is empty</summary>
    },
    get_id: function() {
        /// <summary> Gets the id of RadInputExtender</summary>
        /// <value type='String'></value>
    },
    get_owner: function() {
        /// <summary>Gets the owner of RadInputExtender</summary>
        /// <value type='String'></value>
    },
    get_value: function() {
        /// <summary>Gets the value of RadInputExtender</summary>
        /// <value type='String'></value>
    },
    set_value: function(newValue) {
        /// <summary>Sets the new value of RadInputExtender</summary>
        /// <param name='newValue' type='String'></param>
    },
    updateCssClass: function() {
        /// <summary>Updates the css class of RadInputExtender</summary>
    },
    updateValue: function(newValue) {
        /// <summary>Updates the value of RadInputExtender</summary>
        /// <param name='newValue' type='String'></param>
    },
    formatEditValue: function(value) {
        /// <summary>Returns the format edit value of RadInputExtender</summary>
        /// <param name='value' type='Object'></param>
    },
    validateInputValue: function(value) {
        /// <summary>Returns the validate input value of RadInputExtender</summary>
        /// <param name='value' type='Date' ></param>
    },
    formatDisplayValue: function(value) {
        /// <summary>Returns the format display value of RadInputExtender</summary>
        /// <param name='value' type='Object'></param>
    },
    parseValue: function(value) {
        /// <summary>Parses a string using the DateFormatInfo object and returns the resulting value</summary>
        /// <param name='value' type='String'></param>
    },
    focus: function() {
        /// <summary>Sets focus to the input so that the user can edit its value</summary>
    },
    blur: function() {

        /// <summary>Removes focus from the input, moving it to the next control in the tab order of the page.</summary>
    },
    clear: function() {
        /// <summary>Sets the value of the input to an empty string</summary>
    },
    isNegative: function() {
        /// <summary>Returns true if the value of the input extender is negative</summary>
    },
    set_caretPosition: function(position) {
        /// <summary>Sets the position of the caret.</summary>
        /// <param name='position' type='Number' integer='true'></param>
    },
    selectAllText: function() {
        /// <summary>Selects all text in RadInputExtender</summary>
    },
    selectText: function(start, end) {
        /// <summary>Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range</summary>
        /// <param name='start' type='Number' integer='true'></param>
        /// <param name=' end' type='Number' integer='true'></param>
    },
    raise_error: function(args) {
        /// <summary>Returns a Boolean value, indicating whether error is raised</summary>
        /// <param name='args' type='Boolean' ></param>
    }
};
Telerik.Web.UI.RadInputExtender.registerClass("Telerik.Web.UI.RadInputExtender");$telerik.toInputManager = function(object) {
    /// <summary>Casts an object to a RadInputManager instance</summary>
    /// <returns type="Telerik.Web.UI.RadInputManager">A RadInputManager instance<returns>
};
$telerik.findInputManager = function(id, parent) {
    /// <summary>Finds a RadInputManager instance</summary>
    /// <param name='id'>A string that contains ID of the RadInputManager to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadInputManager to find</param>
    /// <returns type="Telerik.Web.UI.RadInputManager">The RadInputManager instance</returns>
};

Telerik.Web.UI.RadInputManager = function(element) {
    /// <summary>Initializes a new instance of RadInputManager</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadInputManager</param>

};
Telerik.Web.UI.RadInputManager.prototype =
{
    initialize: function() {
        /// <summary>Initializes the client instance of RadInputManager</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadInputManager</summary>
    },
    get_targetInput: function(id) {
        /// <summary>Gets the target input of the RadInputManager control</summary>
        /// <param name='id' type='String'></param>
        /// <value type='Object' domElement='true'></value>
    },
    get_inputSettings: function(behaviorID) {
        /// <summary>Gets the input settings of the RadInputManager control</summary>
        /// <param name='behaviorID' type='String'></param>
        /// <value type='Array' elementType='Array'></value>
    },
    get_regExpTextBoxSettings: function() {
        /// <summary>Gets the regular expression text box settings of the RadInputManager control</summary>
        /// <value type='Array' elementType='Array'></value>
    },
    get_textBoxSettings: function() {
        /// <summary>Gets the text box settings of the RadInputManager control</summary>
        /// <value type='Array' elementType='Array'></value>
    },
    get_numericTextBoxSettings: function() {
        /// <summary>Gets the numeric text box settings of the RadInputManager control</summary>
        /// <value type='Array' elementType='Array'></value>
    },
    get_dateInputSettings: function() {
        /// <summary>Gets the date input settings of the RadInputManager control</summary>
        /// <value type='Array' elementType='Array'></value>
    },
    get_behaviors: function() {
        /// <summary>Gets the RadInputManager control behaviors</summary>
        /// <value type='Array' elementType='Array'></value>
    },
    set_behaviors: function(value) {
        /// <summary>Sets the RadInputManager control behaviors</summary>
        /// <param name='value' type='Array' elementType='Array'></param>
    }
};
Telerik.Web.UI.RadInputManager.registerClass('Telerik.Web.UI.RadInputManager', Sys.UI.Control);$telerik.toMaskedTextBox = function(object) {
    /// <summary>Casts an object to a RadMaskedTextBox instance</summary>
    /// <returns type="Telerik.Web.UI.RadMaskedTextBox">A RadMaskedTextBox instance</returns>
};
$telerik.findMaskedTextBox = function(id, parent) {
    /// <summary>Finds a RadMaskedTextBox instance</summary>
    /// <param name='id'>A string that contains ID of the RadMaskedTextBox to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadMaskedTextBox to find</param>
    /// <returns type="Telerik.Web.UI.RadMaskedTextBox">The RadMaskedTextBox instance</returns>
};

Telerik.Web.UI.RadMaskedTextBox = function(element) {
    /// <summary>Initializes a new instance of RadMaskedTextBox</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadMaskedTextBox</param>
};
Telerik.Web.UI.RadMaskedTextBox.prototype =
{
    initialize: function() {
        /// <summary>Initializes the client instance of RadMaskedTextBox</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadMaskedTextBox</summary>
    },
    isEmpty: function() {
        /// <summary>Returns true if the value of the text box is an empty string</summary>
    },
    resetCursor: function() {
        /// <summary>Resets the cursor position</summary>
    },
    inSelection: function(e) {
        /// <summary>Returns true if the value of the text box is selected</summary>
        /// <param name='e' type='Object'></param>
    },
    updateDisplayValue: function() {
        /// <summary>Updates the display value of the RadMaskedTextBox control</summary>
    },
    updateHiddenValue: function() {
        /// <summary>Updates the value of the hidden input field</summary>
    },
    get_valueWithLiterals: function() {
        /// <summary>Returns the value of the text box, including the literal characters from the mask</summary>
        /// <value type='String'></value>
    },
    get_valueWithPromptAndLiterals: function() {
        /// <summary>Returns the value of the text box, including the prompt characters and literal characters from the mask</summary>
        /// <value type='String'></value>
    },
    get_prompt: function() {
        /// <summary>Returns the prompt of the RadMaskTextBox control</summary>
        /// <value type='String'></value>
    },
    get_displayValue: function() {
        /// <summary>Gets the display value of the RadMaskedTextBox control</summary>
        /// <value type='String'></value>
    },
    set_cursorPosition: function(position) {
        /// <summary>Sets the cursor position of the RadMaskedTextBox control</summary>
        /// <param name='position' type='Number' integer='true'></param>
    },
    get_value: function() {
        /// <summary>Gets the value of the RadMaskedTextBox control</summary>
        /// <value type='String'></value>
    },
    set_value: function(value) {
        /// <summary>Sets the value of the RadMaskedTextBox control</summary>
        /// <param name='value' type='String'></param>
    },
    get_promptChar: function() {
        /// <summary>Returns the prompt character</summary>
        /// <value type='Character'></value>
    },
    set_promptChar: function(value) {
        /// <summary>Sets the prompt character</summary>
        /// <param name='value' type='Character'></param>
    },
    get_displayPromptChar: function() {
        /// <summary>Returns the prompt character that is used when the text box does not have focus</summary>
        /// <value type='Character'></value>
    },
    set_displayPromptChar: function(value) {
        /// <summary>Sets the prompt character that is used when the text box does not have focus.</summary>
        /// <param name='value' type='Character'></param>
    },
    get_displayFormatPosition: function() {
        /// <summary>Gets the display format position of the RadMaskedTextBox control</summary>
        /// <value type='Telerik.Web.UI.DisplayFormatPosition'></value>
    },
    set_displayFormatPosition: function(value) {
        /// <summary>Sets the display format position of the RadMaskedTextBox control</summary>
        /// <param name='value' type='Telerik.Web.UI.DisplayFormatPosition'>Possible values are Telerik.Web.UI.DisplayFormatPosition.Left and Telerik.Web.UI.DisplayFormatPosition.Right</param>
    },
    get_hideOnBlur: function() {
        /// <summary>Returns true if the prompt characters and literals are not displayed when the text box is empty and does not have focus</summary>
        /// <value type='Boolean'></value>
    },
    set_hideOnBlur: function(value) {
        /// <summary>Sets true if the prompt characters and literals are not displayed when the text box is empty and does not have focus</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_resetCaretOnFocus: function() {
        /// <summary>Returns a Boolean value indicating if the caret position on the RadMaskedTextBox control should be reset on focus</summary>
        /// <value type='Boolean'></value>
    },
    set_resetCaretOnFocus: function(value) {
        /// <summary>Accepts a Boolean value indicating if the caret position on the RadMaskedTextBox control should be reset on focus</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_roundNumericRanges: function() {
        /// <summary>Returns a Boolean value indicating if the numeric ranges of the RadMaskedTextBox control should be rounded</summary>
        /// <value type='Boolean'></value>
    },
    set_roundNumericRanges: function(value) {
        /// <summary>Accepts a Boolean value indicating if the numeric ranges of the RadMaskedTextBox control should be rounded</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_allowEmptyEnumerations: function() {
        /// <summary>Returns true if enumerated mask parts can be set to an empty string</summary>
        /// <value type='Boolean'></value>
    },
    set_allowEmptyEnumerations: function(value) {
        /// <summary>Sets true if enumerated mask parts can be set to an empty string</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_readOnly: function() {
        /// <summary>Returns true if the text box is read-only</summary>
        /// <value type='Boolean'></value>
    },
    set_readOnly: function(value) {
        /// <summary>Sets true if the text box is read-only</summary>
        /// <param name='value' type='Boolean'></param>
    },
    saveClientState: function() {
        /// <summary>Saves the client state of the RadMaskedTextBox control</summary>
    },
    raise_valueChanged: function() {
        /// <summary>Raises the ValueChanged event if the old and the new values are different</summary>
    },
    clear: function() {
        /// <summary>Clears the client instance of RadInputControl</summary>
    },
    disable: function() {
        /// <summary>Disables the client instance of RadInputControl</summary>
    },
    enable: function() {
        /// <summary>Enables the client instance of RadInputControl </summary>
    },
    focus: function() {
        /// <summary>Indicating whether RadInputControl enter focus</summary>
    },
    blur: function() {
        /// <summary>Indicating whether RadInputControl loses focus</summary>
    },
    isEmpty: function() {
        /// <summary>Returns true if the value of the RadInputControl is empty</summary>
    },
    isNegative: function() {
        /// <summary>Returns true if the value of the RadInputControl is a negative number</summary>
    },
    isReadOnly: function() {
        /// <summary>Returns true if the value of the RadInputControl is read only</summary>
    },
    isMultiLine: function() {
        /// <summary>Returns true if the value of the RadInputControl is multi line</summary>
    },
    updateDisplayValue: function() {
        /// <summary>Updates the display value of RadInputControl/summary>
    },
    repaint: function() {
        /// <summary>Redraws the client side object on the client</summary>
    },
    updateCssClass: function() {
        /// <summary>Updates the css class of RadInputControl</summary>
    },
    updateCssText: function(styleCssText) {
        /// <summary>Updates the css text of RadInputControl</summary>
        /// <param name='styleCssText' type='String'></param>
    },
    selectText: function(start, end) {
        /// <summary>Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range</summary>
        /// <param name='start' type='Number' integer='true'></param>
        /// <param name=' end' type='Number' integer='true'></param>
    },
    selectAllText: function() {
        /// <summary>Selects all text in the RadInputControl</summary>
    },
    get_value: function() {
        String
        /// <summary>Returns the value of the text box</summary>
        /// <value type='String'></value>
    },
    set_value: function(newValue) {
        /// <summary>Sets the value of the text box</summary>
        /// <param name='newValue' type='String'></param>
    },
    get_displayValue: function() {
        /// <summary>Gets the value of RadInputControl as it is formatted when the input does not have focus</summary>
        /// <value type='String' ></value>
    },
    get_editValue: function() {
        /// <summary>Gets the value of RadInputControl as it is formatted when the input has focus</summary>
        /// <value type='String'></value>
    },
    set_caretPosition: function(position) {
        /// <summary>Sets the position of the caret</summary>
        /// <param name='position' type='Number' integer='true'></param>
    },
    get_caretPosition: function() {
        /// <summary>Returns the current position of the caret.</summary>
        /// <value type='Number' integer='true'></value>
    },
    raisePostBackEvent: function() {
        /// <summary>Raises the postback event of RadInputControl</summary>
    },
    get_wrapperElement: function() {
        /// <summary>Gets the DOM element for the <div> wrapper element</summary>
        /// <value type='HTML element'></value>
    },
    get_textBoxValue: function() {
        /// <summary>Gets the string that the user typed into the input</summary>
        /// <value type='String'></value>
    },
    set_textBoxValue: function(value) {
        /// <summary>Sets the string that the user typed into the input</summary>
        /// <param name='value' type='String'></param>
    },
    get_autoPostBack: function() {
        /// <summary>Returns the value of the AutoPostBack property</summary>
        /// <value type='Boolean'></value>
    },
    set_autoPostBack: function(value) {
        /// <summary>Enables or disables postbacks when the user changes the text in the input</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_emptyMessage: function() {
        /// <summary>Returns the message that appears when the input value is an empty string</summary>
        /// <value type='String'></value>
    },
    set_emptyMessage: function(value) {
        /// <summary>Sets the message that appears when the input value is an empty string</summary>
        /// <param name='value' type='String'></param>
    },
    get_selectionOnFocus: function() {
        /// <summary>Returns the value of the SelectionOnFocus property</summary>
        /// <value type='Telerik.Web.UI.SelectionOnFocus'></value>
    },
    set_selectionOnFocus: function(value) {
        /// <summary>Sets the SelectionOnFocus property</summary>
        /// <param name='value' type='Telerik.Web.UI.SelectionOnFocus'></param>
    },
    get_showButton: function() {
        /// <summary>Returns true if the input has an associated image button</summary>
        /// <value type='Boolean'></value>
    },
    set_showButton: function(value) {
        /// <summary>Accepts true if the input has an associated image button</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_invalidStyleDuration: function() {
        /// <summary>Gets the invalid style duration of RadInputControl</summary>
        /// <value type='Number'></value>
    },
    set_invalidStyleDuration: function(value) {
        /// <summary>Sets the invalid style duration of RadInputControl</summary>
        /// <param name='value' type='Number'></param>
    },
    get_enabled: function() {
        /// <summary>Returns true if the input is enabled</summary>
        /// <value type='Boolean'></value>
    },
    set_enabled: function(value) {
        /// <summary>Sets true if the input is enabled</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_styles: function() {
        /// <summary>Returns the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded</summary>
        /// <value type='Array' elementType='object'></value>
    },
    set_styles: function(value) {
        /// <summary>Sets the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded</summary>
        /// <param name='value' type='Array' elementType='object'></param>
    },
    saveClientState: function(additionalProps) {
        /// <summary>Saves the client state for the object</summary>
        /// <param name='additionalProps' type='Array' elementType='Object'></param>
    },
    get_visible: function() {
        /// <summary>Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element</summary>
        /// <value type='Boolean'></value>
    },

    set_visible: function(value) {
        /// <summary>Sets the input element as hidden on the client</summary>
        /// <param name='value' type='Boolean'></param>
    },
    add_blur: function(handler) {
        /// <summary>Adds the handler for the blur event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_blur: function(handler) {
        /// <summary>Removes the handler for the blur event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_blur: function(args) {
        /// <summary>Raises the blur event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_mouseOut: function(handler) {
        /// <summary>Adds a handler for the mouseOut event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_mouseOut: function(handler) {
        /// <summary>Removes the handler for the mouseOut event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_mouseOut: function(args) {
        /// <summary>Raises the mouseOut event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_valueChanged: function(handler) {
        /// <summary>Adds the handler for the valueChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_valueChanged: function(handler) {
        /// <summary>Removes the handler for the valueChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_valueChanged: function(newValue, oldValue) {
        /// <summary>Raises the valueChanged event</summary>
        /// <param name='newValue' type='Object' ></param>
        /// <param name='oldValue' type='Object'></param>
    },
    add_error: function(handler) {
        /// <summary>Adds the handler for the error event</summary>
        /// <param name='handler' type='String' ></param>
    },
    remove_error: function(handler) {
        /// <summary>Removes the handler for the error event</summary>
        /// <param name='handler' type='String' ></param>
    },
    raise_error: function(args) {
        /// <summary>Raises the error event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_load: function(handler) {
        /// <summary>Adds the handler for the load event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_load: function(handler) {
        /// <summary>Removes the handler for the load event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_load: function(args) {
        /// <summary>Raises the load event</summary>
        /// <param name='args' type='Sys.EventArgs' ></param>
    },
    add_mouseOver: function(handler) {
        /// <summary>Adds the handler for the mouseOver event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_mouseOver: function(handler) {
        /// <summary>Removes the handler for the mouseOver event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_mouseOver: function(args) {
        /// <summary>Raises the mouseOver event</summary>
        /// <param name='args' type='Sys.EventArgs' ></param>
    },
    add_focus: function(handler) {
        /// <summary>Removes the handler for the focus event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_focus: function(handler) {
        /// <summary>Removes the handler for the focus event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_focus: function(args) {
        /// <summary>Raises the focus event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_disable: function(handler) {
        /// <summary>Adds the handler for the disable event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_disable: function(handler) {
        /// <summary>Removes the handler for the disable event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_disable: function(args) {
        /// <summary>Raises the handler for the mouseOver event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_enable: function(handler) {
        /// <summary>Adds the handler for the enable event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_enable: function(handler) {
        /// <summary>Removes the handler for the enable event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_enable: function(args) {
        /// <summary>Raises the enable event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_keyPress: function(handler) {
        /// <summary>Adds the handler for the keyPress event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_keyPress: function(handler) {
        /// <summary>Removes the handler for the keyPress event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_keyPress: function(args) {
        /// <summary>Raises the keyPress event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_enumerationChanged: function(handler) {
        /// <summary>Adds the handler for the enumerationChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_enumerationChanged: function(handler) {
        /// <summary>Removes the handler for the enumerationChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_enumerationChanged: function(args) {
        /// <summary>Raises the enumerationChanged event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_moveUp: function(handler) {
        /// <summary>Adds the handler for the moveUp event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_moveUp: function(handler) {
        /// <summary>Removes the handler for the moveUp event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_moveUp: function(args) {
        /// <summary>Raises the moveUp event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_moveDown: function(handler) {
        /// <summary>Adds the handler for the moveDown event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_moveDown: function(handler) {
        /// <summary>Removes the handler for the moveDown event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_moveDown: function(args) {
        /// <summary>Raises the moveDown event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_buttonClick: function(handler) {
        /// <summary>Adds the handler for the buttonClick event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_buttonClick: function(handler) {
        /// <summary>Removes the handler for the buttonClick event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_buttonClick: function(args) {
        /// <summary>Raises the buttonClick event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_valueChanging: function(handler) {
        /// <summary>Adds the handler for the valueChanging event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_valueChanging: function(handler) {
        /// <summary>Removes the handler for the valueChanging event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_valueChanging: function(args) {
        /// <summary>Raises the valueChanging event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    }
};
Telerik.Web.UI.RadMaskedTextBox.registerClass("Telerik.Web.UI.RadMaskedTextBox", Sys.UI.Control);
$telerik.toNumericTextBox = function(object) {
    /// <summary>Casts an object to a RadNumericTextBox instance</summary>
    /// <returns type="Telerik.Web.UI.RadNumericTextBox">A RadNumericTextBox instance</returns>
};
$telerik.findNumericTextBox = function(id, parent) {
    /// <summary>Finds a RadNumericTextBox instance</summary>
    /// <param name='id'>A string that contains ID of the RadNumericTextBox to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadNumericTextBox to find</param>
    /// <returns type="Telerik.Web.UI.RadNumericTextBox">The RadNumericTextBox instance</returns>
};

Telerik.Web.UI.RadNumericTextBox = function(element) {
    /// <summary>Initializes a new instance of RadNumericTextBox</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadNumericTextBox</param>
};
Telerik.Web.UI.RadNumericTextBox.prototype =
{
    initialize: function() {
        /// <summary>Initializes the client instance of RadNumericTextBox</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadNumericTextBox</summary>
    },
    isNegative: function() {
        /// <summary>Returns true if the value of the text box is a negative number</summary>
    },
    get_value: function() {
        /// <summary>Returns the value of the numeric text box</summary>
        /// <value type='Number' mayBeNull='true'></value>
    },
    set_value: function(newValue) {
        /// <summary>Sets the new value of the numeric text box</summary>
        /// <param name='newValue' type='Number'></param>
    },
    get_displayValue: function() {
        /// <summary>Gets the value of the text box as it is formatted when the text box does not have focus</summary>
        /// <value type='String' mayBeNull='true'></value>
    },
    get_editValue: function() {
        /// <summary>Gets the value of the text box as it is formatted when the text box has focus</summary>
        /// <value type='String' mayBeNull='true'></value>
    },
    get_showSpinButtons: function() {
        /// <summary>Returns true if the text box has an associated pair of spin buttons</summary>
        /// <value type='Boolean'></value>
    },
    set_showSpinButtons: function(value) {
        /// <summary>Sets true if the text box has an associated pair of spin buttons</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_maxValue: function() {
        /// <summary>Returns the maximum value the user can enter</summary>
        /// <value type='Number'></value>
    },
    set_maxValue: function(value) {
        /// <summary>Sets the maximum value the user can enter</summary>
        /// <param name='value' type='Number'></param>
    },
    get_minValue: function() {
        /// <summary>Returns the minimum value the user can enter</summary>
        /// <value type='Number'></value>
    },
    set_minValue: function(value) {
        /// <summary>Sets the minimum value the user can enter</summary>
        /// <param name='value' type='Number'></param>
    },
    get_numberFormat: function() {
        /// <summary>Returns the Number format client object, which you can use to change the way the text box formats its value when it does not have focus</summary>
        /// <value type='Telerik.Web.UI.NumberFormat'></value>
    },
    set_numberFormat: function(value) {
        /// <summary>Sets the Number format client object, which you can use to change the way the text box formats its value when it does not have focus</summary>
        /// <param name='value' type='Telerik.Web.UI.NumberFormat'></param>
    },
    get_incrementSettings: function() {
        /// <summary>Returns the Increment Settings object, which you can use to change the way the text box responds to arrow keys, the mouse wheel, and (if they are showing) the spin buttons</summary>
        /// <value type='Object'></value>
    },
    set_incrementSettings: function(value) {
        /// <summary>Sets the Increment Settings object, which you can use to change the way the text box responds to arrow keys, the mouse wheel, and (if they are showing) the spin buttons</summary>
        /// <param name='value' type='Object'></param>
    },
    get_allowOutOfRangeAutoCorrect: function() {
        /// <summary>Returns a Boolean value indicating if out-of-range auto correction is allowed</summary>
        /// <value type='Boolean'></value>
    },
    set_allowOutOfRangeAutoCorrect: function(value) {
        /// <summary>Accepts a Boolean value indicating if out-of-range auto correction is allowed</summary>
        /// <param name='value' type='Boolean'></param>
    },
    saveClientState: function() {
        /// <summary>Saves the client state of the RadNumericTextBox control</summary>
    },
    updateDisplayValue: function() {
        /// <summary>Updates the display value of the RadNumericTextBox control</summary>
    },
    updateCssClass: function(isNumericIncrementRestore) {
        /// <summary>Updates the css class of the RadNumericTextBox control</summary>
        /// <param name='isNumericIncrementRestore' type='Boolean' optional='true'></param>
    },
    clear: function() {
        /// <summary>Clears the client instance of RadInputControl</summary>
    },
    disable: function() {
        /// <summary>Disables the client instance of RadInputControl</summary>
    },
    enable: function() {
        /// <summary>Enables the client instance of RadInputControl </summary>
    },
    focus: function() {
        /// <summary>Indicating whether RadInputControl enter focus</summary>
    },
    blur: function() {
        /// <summary>Indicating whether RadInputControl loses focus</summary>
    },
    isEmpty: function() {
        /// <summary>Returns true if the value of the RadInputControl is empty</summary>
    },
    isNegative: function() {
        /// <summary>Returns true if the value of the RadInputControl is a negative number</summary>
    },
    isReadOnly: function() {
        /// <summary>Returns true if the value of the RadInputControl is read only</summary>
    },
    isMultiLine: function() {
        /// <summary>Returns true if the value of the RadInputControl is multi line</summary>
    },
    updateDisplayValue: function() {
        /// <summary>Updates the display value of RadInputControl/summary>
    },
    repaint: function() {
        /// <summary>Redraws the client side object on the client</summary>
    },
    updateCssClass: function() {
        /// <summary>Updates the css class of RadInputControl</summary>
    },
    updateCssText: function(styleCssText) {
        /// <summary>Updates the css text of RadInputControl</summary>
        /// <param name='styleCssText' type='String'></param>
    },
    selectText: function(start, end) {
        /// <summary>Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range</summary>
        /// <param name='start' type='Number' integer='true'></param>
        /// <param name=' end' type='Number' integer='true'></param>
    },
    selectAllText: function() {
        /// <summary>Selects all text in the RadInputControl</summary>
    },
    get_value: function() {
        String
        /// <summary>Returns the value of the text box</summary>
        /// <value type='String'></value>
    },
    set_value: function(newValue) {
        /// <summary>Sets the value of the text box</summary>
        /// <param name='newValue' type='String'></param>
    },
    get_displayValue: function() {
        /// <summary>Gets the value of RadInputControl as it is formatted when the input does not have focus</summary>
        /// <value type='String' ></value>
    },
    get_editValue: function() {
        /// <summary>Gets the value of RadInputControl as it is formatted when the input has focus</summary>
        /// <value type='String'></value>
    },
    set_caretPosition: function(position) {
        /// <summary>Sets the position of the caret</summary>
        /// <param name='position' type='Number' integer='true'></param>
    },
    get_caretPosition: function() {
        /// <summary>Returns the current position of the caret.</summary>
        /// <value type='Number' integer='true'></value>
    },
    raisePostBackEvent: function() {
        /// <summary>Raises the postback event of RadInputControl</summary>
    },
    get_wrapperElement: function() {
        /// <summary>Gets the DOM element for the <div> wrapper element</summary>
        /// <value type='HTML element'></value>
    },
    get_textBoxValue: function() {
        /// <summary>Gets the string that the user typed into the input</summary>
        /// <value type='String'></value>
    },
    set_textBoxValue: function(value) {
        /// <summary>Sets the string that the user typed into the input</summary>
        /// <param name='value' type='String'></param>
    },
    get_autoPostBack: function() {
        /// <summary>Returns the value of the AutoPostBack property</summary>
        /// <value type='Boolean'></value>
    },
    set_autoPostBack: function(value) {
        /// <summary>Enables or disables postbacks when the user changes the text in the input</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_emptyMessage: function() {
        /// <summary>Returns the message that appears when the input value is an empty string</summary>
        /// <value type='String'></value>
    },
    set_emptyMessage: function(value) {
        /// <summary>Sets the message that appears when the input value is an empty string</summary>
        /// <param name='value' type='String'></param>
    },
    get_selectionOnFocus: function() {
        /// <summary>Returns the value of the SelectionOnFocus property</summary>
        /// <value type='Telerik.Web.UI.SelectionOnFocus'></value>
    },
    set_selectionOnFocus: function(value) {
        /// <summary>Sets the SelectionOnFocus property</summary>
        /// <param name='value' type='Telerik.Web.UI.SelectionOnFocus'></param>
    },
    get_showButton: function() {
        /// <summary>Returns true if the input has an associated image button</summary>
        /// <value type='Boolean'></value>
    },
    set_showButton: function(value) {
        /// <summary>Accepts true if the input has an associated image button</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_invalidStyleDuration: function() {
        /// <summary>Gets the invalid style duration of RadInputControl</summary>
        /// <value type='Number'></value>
    },
    set_invalidStyleDuration: function(value) {
        /// <summary>Sets the invalid style duration of RadInputControl</summary>
        /// <param name='value' type='Number'></param>
    },
    get_enabled: function() {
        /// <summary>Returns true if the input is enabled</summary>
        /// <value type='Boolean'></value>
    },
    set_enabled: function(value) {
        /// <summary>Sets true if the input is enabled</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_styles: function() {
        /// <summary>Returns the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded</summary>
        /// <value type='Array' elementType='object'></value>
    },
    set_styles: function(value) {
        /// <summary>Sets the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded</summary>
        /// <param name='value' type='Array' elementType='object'></param>
    },
    saveClientState: function(additionalProps) {
        /// <summary>Saves the client state for the object</summary>
        /// <param name='additionalProps' type='Array' elementType='Object'></param>
    },
    get_visible: function() {
        /// <summary>Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element</summary>
        /// <value type='Boolean'></value>
    },

    set_visible: function(value) {
        /// <summary>Sets the input element as hidden on the client</summary>
        /// <param name='value' type='Boolean'></param>
    },
    add_blur: function(handler) {
        /// <summary>Adds the handler for the blur event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_blur: function(handler) {
        /// <summary>Removes the handler for the blur event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_blur: function(args) {
        /// <summary>Raises the blur event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_mouseOut: function(handler) {
        /// <summary>Adds a handler for the mouseOut event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_mouseOut: function(handler) {
        /// <summary>Removes the handler for the mouseOut event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_mouseOut: function(args) {
        /// <summary>Raises the mouseOut event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_valueChanged: function(handler) {
        /// <summary>Adds the handler for the valueChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_valueChanged: function(handler) {
        /// <summary>Removes the handler for the valueChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_valueChanged: function(newValue, oldValue) {
        /// <summary>Raises the valueChanged event</summary>
        /// <param name='newValue' type='Object' ></param>
        /// <param name='oldValue' type='Object'></param>
    },
    add_error: function(handler) {
        /// <summary>Adds the handler for the error event</summary>
        /// <param name='handler' type='String' ></param>
    },
    remove_error: function(handler) {
        /// <summary>Removes the handler for the error event</summary>
        /// <param name='handler' type='String' ></param>
    },
    raise_error: function(args) {
        /// <summary>Raises the error event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_load: function(handler) {
        /// <summary>Adds the handler for the load event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_load: function(handler) {
        /// <summary>Removes the handler for the load event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_load: function(args) {
        /// <summary>Raises the load event</summary>
        /// <param name='args' type='Sys.EventArgs' ></param>
    },
    add_mouseOver: function(handler) {
        /// <summary>Adds the handler for the mouseOver event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_mouseOver: function(handler) {
        /// <summary>Removes the handler for the mouseOver event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_mouseOver: function(args) {
        /// <summary>Raises the mouseOver event</summary>
        /// <param name='args' type='Sys.EventArgs' ></param>
    },
    add_focus: function(handler) {
        /// <summary>Removes the handler for the focus event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_focus: function(handler) {
        /// <summary>Removes the handler for the focus event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_focus: function(args) {
        /// <summary>Raises the focus event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_disable: function(handler) {
        /// <summary>Adds the handler for the disable event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_disable: function(handler) {
        /// <summary>Removes the handler for the disable event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_disable: function(args) {
        /// <summary>Raises the handler for the mouseOver event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_enable: function(handler) {
        /// <summary>Adds the handler for the enable event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_enable: function(handler) {
        /// <summary>Removes the handler for the enable event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_enable: function(args) {
        /// <summary>Raises the enable event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_keyPress: function(handler) {
        /// <summary>Adds the handler for the keyPress event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_keyPress: function(handler) {
        /// <summary>Removes the handler for the keyPress event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_keyPress: function(args) {
        /// <summary>Raises the keyPress event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_enumerationChanged: function(handler) {
        /// <summary>Adds the handler for the enumerationChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_enumerationChanged: function(handler) {
        /// <summary>Removes the handler for the enumerationChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_enumerationChanged: function(args) {
        /// <summary>Raises the enumerationChanged event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_moveUp: function(handler) {
        /// <summary>Adds the handler for the moveUp event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_moveUp: function(handler) {
        /// <summary>Removes the handler for the moveUp event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_moveUp: function(args) {
        /// <summary>Raises the moveUp event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_moveDown: function(handler) {
        /// <summary>Adds the handler for the moveDown event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_moveDown: function(handler) {
        /// <summary>Removes the handler for the moveDown event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_moveDown: function(args) {
        /// <summary>Raises the moveDown event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_buttonClick: function(handler) {
        /// <summary>Adds the handler for the buttonClick event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_buttonClick: function(handler) {
        /// <summary>Removes the handler for the buttonClick event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_buttonClick: function(args) {
        /// <summary>Raises the buttonClick event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_valueChanging: function(handler) {
        /// <summary>Adds the handler for the valueChanging event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_valueChanging: function(handler) {
        /// <summary>Removes the handler for the valueChanging event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_valueChanging: function(args) {
        /// <summary>Raises the valueChanging event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    }
};
Telerik.Web.UI.RadNumericTextBox.registerClass('Telerik.Web.UI.RadNumericTextBox', Sys.UI.Control);Telerik.Web.UI.RadNumericTextBoxComponent = function() {
    /// <summary>Initializes a new instance of RadNumericTextBoxComponent</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadNumericTextBoxComponent</param>
};
Telerik.Web.UI.RadNumericTextBoxComponent.prototype =
{
    initialize: function() {
        /// <summary>Initializes the client instance of RadNumericTextBoxComponent</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadNumericTextBoxComponent</summary>
    },
    get_maxValue: function() {
        /// <summary>>Returns the maximum value the user can enter</summary>
        /// <value type='Number'></value>
    },
    set_maxValue: function(value) {
        /// <summary>>Sets the maximum value the user can enter</summary>
        /// <param name='value' type='Number'></param>
    },
    get_minValue: function() {
        /// <summary>Returns the minimum value the user can enter</summary>
        /// <value type='Number'></value>
    },
    set_minValue: function(value) {
        /// <summary>Sets the minimum value the user can enter.</summary>
        /// <param name='value' type='Number'></param>
    },
    get_negativeCss: function() {
        /// <summary>Returns the negative css of RadNumericTextBoxComponent</summary>
        /// <value type='Number'></value>
    },
    set_negativeCss: function(value) {
        /// <summary>Accepts the negative css of RadNumericTextBoxComponent</summary>
        /// <param name='value' type='Number'></param>
    },
    get_invalidStyleDuration: function() {
        /// <summary>Returns the invalid style duration of RadNumericTextBoxComponent</summary>
        /// <value type='Number'></value>
    },
    set_invalidStyleDuration: function(value) {
        /// <summary>Sets the invalid style duration of RadNumericTextBoxComponent</summary>
        /// <param name='value' type='Number'></param>
    },
    get_numberFormat: function() {
        /// <summary>Returns the Number format client object, which you can use to change the way the text box formats its value when it does not have focus</summary>
        /// <value type='Telerik.Web.UI.NumberFormat'></value>
    },
    set_numberFormat: function(value) {
        /// <summary>Sets the Number format client object, which you can use to change the way the text box formats its value when it does not have focus</summary>
        /// <param name='value' type='Telerik.Web.UI.NumberFormat'></param>
    }
};
Telerik.Web.UI.RadNumericTextBoxComponent.registerClass('Telerik.Web.UI.RadNumericTextBoxComponent', Sys.Component);Telerik.Web.UI.RadNumericTextBoxExtender = function(owner, id) {
    /// <summary>Initializes a new instance of RadNumericTextBoxExtender</summary>
    /// <param name='owner' type="Telerik.Web.UI.RadInputManager"></param>
    /// <param name='id'>A string that contains ID of the RadNumericTextBoxExtender to find</param>

};
Telerik.Web.UI.RadNumericTextBoxExtender.prototype =
{
    dispose: function() {
        /// <summary>Disposes the client instance of RadNumericTextBoxExtender.</summary>
    },
    formatDisplayValue: function(value) {
        /// <summary>Returns the format display value of RadNumericTextBoxExtender</summary>
        /// <param name='value' type='Telerik.Web.UI.NumberFormat'></param>
    },
    validateInputValue: function(value) {
        /// <summary>Returns the validate input value of RadNumericTextBoxExtender</summary>
        /// <param name='value' type='Telerik.Web.UI.NumberFormat'></param>
    },
    formatEditValue: function(value) {
        /// <summary>Returns the format edit value of RadNumericTextBoxExtender</summary>
        /// <param name='value' type='Telerik.Web.UI.NumberFormat'></param>
    },
    set_value: function(value) {
        /// <summary>Sets the value of the numeric text box</summary>
        /// <param name='value' type='Number' ></param>
    },
    isNegative: function() {
        /// <summary>Returns true if the value of the numeric text box is a negative number</summary>
    },
    get_value: function() {
        /// <summary>Returns the value of the numeric text box</summary>
        /// <value type='Number' mayBeNull='true'></value>
    },
    raise_error: function(args) {
        /// <summary>Returns a Boolean value, indicating whether error is raised</summary>
        /// <param name='args' type='Boolean'></param>
    }
};
Telerik.Web.UI.RadNumericTextBoxExtender.registerClass("Telerik.Web.UI.RadNumericTextBoxExtender");
Telerik.Web.UI.RadRegExpTextBoxComponent = function() {
    /// <summary>Initializes a new instance of RadRegExpTextBoxComponent.</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadRegExpTextBoxComponent.</param>
};
Telerik.Web.UI.RadRegExpTextBoxComponent.prototype =
{
    initialize: function() {
        /// <summary>Initializes the client instance of RadRegExpTextBoxComponent</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadRegExpTextBoxComponent</summary>
    },
    isValid: function(inputId) {
        /// <summary>Returns true if the value of the text box is valid</summary>
        /// <param name='inputId' type='Boolean'></param>
    },
    get_isRequiredFields: function() {
        /// <summary>Returns a Boolean value indicating whether the corresponding textboxes are required to have some values entered, or may be empty</summary>
        /// <value type='Boolean'></value>
    },
    set_isRequiredFields: function(value) {
        /// <summary>Accepts a Boolean value indicating whether the corresponding textboxes are required to have some values entered, or may be empty</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_validationExpression: function() {
        /// <summary>Gets regular expression, representing the matching criteria</summary>
        /// <value type='String'></value>
    },
    set_validationExpression: function(value) {
        /// <summary>Sets regular expression, representing the matching criteria</summary>
        /// <param name='value' type='String'></param>
    }
};
Telerik.Web.UI.RadRegExpTextBoxComponent.registerClass('Telerik.Web.UI.RadRegExpTextBoxComponent', Sys.Component);Telerik.Web.UI.RadRegExpTextBoxExtender = function(owner, id) {
    /// <summary>Initializes a new instance of RadRegExpTextBoxExtender.</summary>
    /// <param name='owner'>RadInput that contains the RadRegExpTextBoxExtender </param>
    /// <param name='id' >A string that contains ID of the RadRegExpTextBoxExtender</param>
};
Telerik.Web.UI.RadRegExpTextBoxExtender.prototype =
{
    dispose: function() {
        /// <summary>Disposes the client instance of RadRegExpTextBoxExtender</summary>
    },
    validateInputValue: function(value) {
        /// <summary>Validates the input value of RadRegExpTextBoxExtender</summary>
        /// <param name='value' type='Number' integer='true'></param>
    },
    acceptRegExp: function(value) {
        /// <summary>Accepts the regular expression of RadRegExpTextBoxExtender</summary>
        /// <param name='value' type='String' ></param>
    },
    isValid: function() {
        /// <summary>Returns true if the value of the text box is valid</summary>
    }
};
Telerik.Web.UI.RadRegExpTextBoxExtender.registerClass("Telerik.Web.UI.RadRegExpTextBoxExtender");$telerik.toTextBox = function(object) {
    /// <summary>Casts an object to a RadTextBox instance</summary>
    /// <returns type="Telerik.Web.UI.RadTextBox">A RadTextBox instance</returns>
};
$telerik.findTextBox = function(id, parent) {
    /// <summary>Finds a RadTextBox instance</summary>
    /// <param name='id'>A string that contains ID of the RadTextBox to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadTextBox to find</param>
    /// <returns type="Telerik.Web.UI.RadTextBox">The RadTextBox instance</returns>
};

Telerik.Web.UI.RadTextBox = function(element) {
    /// <summary>Initializes a new instance of RadTextBox.</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadTextBox.</param>
};
Telerik.Web.UI.RadTextBox.prototype =
{
    initialize: function() {
        /// <summary>Initializes the client instance of RadTextBox.</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadTextBox.</summary>
    },
    get_maxLength: function() {
        /// <summary>Gets the max length for the RadTextBox control</summary>
        /// <value type='Number' integer='true'></value>
    },
    set_maxLength: function(value) {
        /// <summary>Sets the max length for the RadTextBox control</summary>
        /// <param name='value' type='Number' integer='true'></param>
    },
    clear: function() {
        /// <summary>Clears the client instance of RadInputControl</summary>
    },
    disable: function() {
        /// <summary>Disables the client instance of RadInputControl</summary>
    },
    enable: function() {
        /// <summary>Enables the client instance of RadInputControl </summary>
    },
    focus: function() {
        /// <summary>Indicating whether RadInputControl enter focus</summary>
    },
    blur: function() {
        /// <summary>Indicating whether RadInputControl loses focus</summary>
    },
    isEmpty: function() {
        /// <summary>Returns true if the value of the RadInputControl is empty</summary>
    },
    isNegative: function() {
        /// <summary>Returns true if the value of the RadInputControl is a negative number</summary>
    },
    isReadOnly: function() {
        /// <summary>Returns true if the value of the RadInputControl is read only</summary>
    },
    isMultiLine: function() {
        /// <summary>Returns true if the value of the RadInputControl is multi line</summary>
    },
    updateDisplayValue: function() {
        /// <summary>Updates the display value of RadInputControl/summary>
    },
    repaint: function() {
        /// <summary>Redraws the client side object on the client</summary>
    },
    updateCssClass: function() {
        /// <summary>Updates the css class of RadInputControl</summary>
    },
    updateCssText: function(styleCssText) {
        /// <summary>Updates the css text of RadInputControl</summary>
        /// <param name='styleCssText' type='String'></param>
    },
    selectText: function(start, end) {
        /// <summary>Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range</summary>
        /// <param name='start' type='Number' integer='true'></param>
        /// <param name=' end' type='Number' integer='true'></param>
    },
    selectAllText: function() {
        /// <summary>Selects all text in the RadInputControl</summary>
    },
    get_value: function() {
        String
        /// <summary>Returns the value of the text box</summary>
        /// <value type='String'></value>
    },
    set_value: function(newValue) {
        /// <summary>Sets the value of the text box</summary>
        /// <param name='newValue' type='String'></param>
    },
    get_displayValue: function() {
        /// <summary>Gets the value of RadInputControl as it is formatted when the input does not have focus</summary>
        /// <value type='String' ></value>
    },
    get_editValue: function() {
        /// <summary>Gets the value of RadInputControl as it is formatted when the input has focus</summary>
        /// <value type='String'></value>
    },
    set_caretPosition: function(position) {
        /// <summary>Sets the position of the caret</summary>
        /// <param name='position' type='Number' integer='true'></param>
    },
    get_caretPosition: function() {
        /// <summary>Returns the current position of the caret.</summary>
        /// <value type='Number' integer='true'></value>
    },
    raisePostBackEvent: function() {
        /// <summary>Raises the postback event of RadInputControl</summary>
    },
    get_wrapperElement: function() {
        /// <summary>Gets the DOM element for the <div> wrapper element</summary>
        /// <value type='HTML element'></value>
    },
    get_textBoxValue: function() {
        /// <summary>Gets the string that the user typed into the input</summary>
        /// <value type='String'></value>
    },
    set_textBoxValue: function(value) {
        /// <summary>Sets the string that the user typed into the input</summary>
        /// <param name='value' type='String'></param>
    },
    get_autoPostBack: function() {
        /// <summary>Returns the value of the AutoPostBack property</summary>
        /// <value type='Boolean'></value>
    },
    set_autoPostBack: function(value) {
        /// <summary>Enables or disables postbacks when the user changes the text in the input</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_emptyMessage: function() {
        /// <summary>Returns the message that appears when the input value is an empty string</summary>
        /// <value type='String'></value>
    },
    set_emptyMessage: function(value) {
        /// <summary>Sets the message that appears when the input value is an empty string</summary>
        /// <param name='value' type='String'></param>
    },
    get_selectionOnFocus: function() {
        /// <summary>Returns the value of the SelectionOnFocus property</summary>
        /// <value type='Telerik.Web.UI.SelectionOnFocus'></value>
    },
    set_selectionOnFocus: function(value) {
        /// <summary>Sets the SelectionOnFocus property</summary>
        /// <param name='value' type='Telerik.Web.UI.SelectionOnFocus'></param>
    },
    get_showButton: function() {
        /// <summary>Returns true if the input has an associated image button</summary>
        /// <value type='Boolean'></value>
    },
    set_showButton: function(value) {
        /// <summary>Accepts true if the input has an associated image button</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_invalidStyleDuration: function() {
        /// <summary>Gets the invalid style duration of RadInputControl</summary>
        /// <value type='Number'></value>
    },
    set_invalidStyleDuration: function(value) {
        /// <summary>Sets the invalid style duration of RadInputControl</summary>
        /// <param name='value' type='Number'></param>
    },
    get_enabled: function() {
        /// <summary>Returns true if the input is enabled</summary>
        /// <value type='Boolean'></value>
    },
    set_enabled: function(value) {
        /// <summary>Sets true if the input is enabled</summary>
        /// <param name='value' type='Boolean'></param>
    },
    get_styles: function() {
        /// <summary>Returns the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded</summary>
        /// <value type='Array' elementType='object'></value>
    },
    set_styles: function(value) {
        /// <summary>Sets the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded</summary>
        /// <param name='value' type='Array' elementType='object'></param>
    },
    saveClientState: function(additionalProps) {
        /// <summary>Saves the client state for the object</summary>
        /// <param name='additionalProps' type='Array' elementType='Object'></param>
    },
    get_visible: function() {
        /// <summary>Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element</summary>
        /// <value type='Boolean'></value>
    },

    set_visible: function(value) {
        /// <summary>Sets the input element as hidden on the client</summary>
        /// <param name='value' type='Boolean'></param>
    },
    add_blur: function(handler) {
        /// <summary>Adds the handler for the blur event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_blur: function(handler) {
        /// <summary>Removes the handler for the blur event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_blur: function(args) {
        /// <summary>Raises the blur event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_mouseOut: function(handler) {
        /// <summary>Adds a handler for the mouseOut event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_mouseOut: function(handler) {
        /// <summary>Removes the handler for the mouseOut event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_mouseOut: function(args) {
        /// <summary>Raises the mouseOut event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_valueChanged: function(handler) {
        /// <summary>Adds the handler for the valueChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_valueChanged: function(handler) {
        /// <summary>Removes the handler for the valueChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_valueChanged: function(newValue, oldValue) {
        /// <summary>Raises the valueChanged event</summary>
        /// <param name='newValue' type='Object' ></param>
        /// <param name='oldValue' type='Object'></param>
    },
    add_error: function(handler) {
        /// <summary>Adds the handler for the error event</summary>
        /// <param name='handler' type='String' ></param>
    },
    remove_error: function(handler) {
        /// <summary>Removes the handler for the error event</summary>
        /// <param name='handler' type='String' ></param>
    },
    raise_error: function(args) {
        /// <summary>Raises the error event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_load: function(handler) {
        /// <summary>Adds the handler for the load event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_load: function(handler) {
        /// <summary>Removes the handler for the load event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_load: function(args) {
        /// <summary>Raises the load event</summary>
        /// <param name='args' type='Sys.EventArgs' ></param>
    },
    add_mouseOver: function(handler) {
        /// <summary>Adds the handler for the mouseOver event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_mouseOver: function(handler) {
        /// <summary>Removes the handler for the mouseOver event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_mouseOver: function(args) {
        /// <summary>Raises the mouseOver event</summary>
        /// <param name='args' type='Sys.EventArgs' ></param>
    },
    add_focus: function(handler) {
        /// <summary>Removes the handler for the focus event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_focus: function(handler) {
        /// <summary>Removes the handler for the focus event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_focus: function(args) {
        /// <summary>Raises the focus event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_disable: function(handler) {
        /// <summary>Adds the handler for the disable event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_disable: function(handler) {
        /// <summary>Removes the handler for the disable event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_disable: function(args) {
        /// <summary>Raises the handler for the mouseOver event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_enable: function(handler) {
        /// <summary>Adds the handler for the enable event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_enable: function(handler) {
        /// <summary>Removes the handler for the enable event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_enable: function(args) {
        /// <summary>Raises the enable event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_keyPress: function(handler) {
        /// <summary>Adds the handler for the keyPress event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_keyPress: function(handler) {
        /// <summary>Removes the handler for the keyPress event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_keyPress: function(args) {
        /// <summary>Raises the keyPress event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_enumerationChanged: function(handler) {
        /// <summary>Adds the handler for the enumerationChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_enumerationChanged: function(handler) {
        /// <summary>Removes the handler for the enumerationChanged event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_enumerationChanged: function(args) {
        /// <summary>Raises the enumerationChanged event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_moveUp: function(handler) {
        /// <summary>Adds the handler for the moveUp event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_moveUp: function(handler) {
        /// <summary>Removes the handler for the moveUp event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_moveUp: function(args) {
        /// <summary>Raises the moveUp event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_moveDown: function(handler) {
        /// <summary>Adds the handler for the moveDown event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_moveDown: function(handler) {
        /// <summary>Removes the handler for the moveDown event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_moveDown: function(args) {
        /// <summary>Raises the moveDown event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_buttonClick: function(handler) {
        /// <summary>Adds the handler for the buttonClick event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_buttonClick: function(handler) {
        /// <summary>Removes the handler for the buttonClick event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_buttonClick: function(args) {
        /// <summary>Raises the buttonClick event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    },
    add_valueChanging: function(handler) {
        /// <summary>Adds the handler for the valueChanging event</summary>
        /// <param name='handler' type='String'></param>
    },
    remove_valueChanging: function(handler) {
        /// <summary>Removes the handler for the valueChanging event</summary>
        /// <param name='handler' type='String'></param>
    },
    raise_valueChanging: function(args) {
        /// <summary>Raises the valueChanging event</summary>
        /// <param name='args' type='Sys.EventArgs'></param>
    }
};
Telerik.Web.UI.RadTextBox.registerClass('Telerik.Web.UI.RadTextBox', Telerik.Web.UI.RadInputControl);
Telerik.Web.UI.RadTextBoxComponent = function() {
    /// <summary>Initializes a new instance of RadTextBoxComponent.</summary>
    /// <param name='element' domElement='true'>The outermost DOM element of RadTextBoxComponent.</param>
};
Telerik.Web.UI.RadTextBoxComponent.prototype =
{
    initialize: function() {
        /// <summary>Initializes the client instance of RadTextBoxComponent</summary>
    },
    dispose: function() {
        /// <summary>Disposes the client instance of RadTextBoxComponent</summary>
    },
    get_targetInput: function(id) {
        /// <summary>Gets the target input of RadTextBoxComponent</summary>
        /// <param name='id' type='Number' integer='true'></param>
        /// <value type='Number' integer='true' mayBeNull='true'></value>
    }
};
Telerik.Web.UI.RadTextBoxComponent.registerClass('Telerik.Web.UI.RadTextBoxComponent', Sys.Component);Telerik.Web.UI.RadTextBoxExtender = function(owner, id) {
    /// <summary>Initializes a new instance of RadTextBoxExtender</summary>
    /// <param name='owner' type="Telerik.Web.UI.RadInputManager"></param>
    /// <param name='id'>A string that contains ID of the RadTextBoxExtender to find</param>
};
Telerik.Web.UI.RadTextBoxExtender.prototype =
{
    dispose: function() {
        /// <summary>Disposes the client instance of RadTextBoxExtender</summary>
    }
};
Telerik.Web.UI.RadTextBoxExtender.registerClass("Telerik.Web.UI.RadTextBoxExtender");$telerik.findToolBar = function(id, parent) {
    /// <summary>Finds a RadUpload instance</summary>
    /// <param name="id">A string that contains ID of the RadToolBar to find</param>
    /// <param name="parent" optional="true">The component or element that contains the RadToolBar to find</param>
    /// <returns type="Telerik.Web.UI.RadToolBar">The RadToolBar instance</returns>
};

$telerik.toToolBar = function(object) {
    /// <summary>Casts an object to a RadToolBar instance</summary>
    /// <returns type="Telerik.Web.UI.RadToolBar">A RadToolBar instance<returns>
};

Telerik.Web.UI.RadToolBar = function(element) {
}
Telerik.Web.UI.RadToolBar.prototype = {
    commitChanges: function() {
        ///<summary>Ends tracking changes to the toolbar items. Only changes to the items that occur between a call to trackChanges and commitChanges
        ///persist after a postback.</summary>
    },
    saveClientState: function() {
        /// <summary>Gets the serialized client state of the dock control.</summary>
        /// <returns type="String" mayBeNull="false">The JSON string representing the client state of the dock.</returns>
    },
    findItemByText: function(text) {
        ///<summary>Returns the first item in the toolbar with the specified text.</summary>
        ///<param  name="text" type="string">text to search for</param>
        ///<returns type="Telerik.Web.UI.RadToolBarItem" >RadToolBarItem</return>
    },
    findItemByAttribute: function(attributeName, attributeValue) {
        ///<summary>Returns the first item in the toolbar with the custom attribute specified by the first parameter set to the value specified by the second parameter.</summary>
        ///<param  name="attributeName" type="string">attributeName</param>
        ///<param  name="attributeValue" type=" string">attributeValue</param>
        ///<returns type="Telerik.Web.UI.RadToolBarItem" >RadToolBarItem</return>
    },
    findItemByValue: function(value) {
        ///<summary>Returns the first item in the toolbar with the specified value.</summary>
        ///<param  name="value" type="string">value</param>
        ///<returns type="Telerik.Web.UI.RadToolBarItem" >RadToolBarItem</return>
    },
    findButtonByUrl: function(value) {
        ///<summary>Returns the first button in the toolbar with the specified Url.</summary>
        ///<param name="value" type="string">the instance of the button with the specified Url</param>
        ///<returns type="Telerik.Web.UI.RadToolBarButton">RadToolbarButton</return>
    },
    findButtonByAbsoluteUrl: function(value) {
        ///<summary>Returns the first button in the toolbar with the specified full path.</summary>
        ///<param name="value" type="string">the instance of the button with the specified absolute Url</param>
        ///<returns type="Telerik.Web.UI.RadToolBarButton">RadToolbarButton</return>
    },
    findButtonByCommandName: function(commandName) {
        ///<summary>Returns the first button in the toolbar with the specified command name.</summary>
        ///<param name="commandName" type="string">commandName</param>
        ///<returns type="Telerik.Web.UI.RadToolBarButton">RadToolbarButton</return>
    },
    get_allItems: function() {
        ///<summary>Returns an array containing all the items in the toolbar, including the items in drop-down lists. Items in drop-down lists appear immediately following their
        ///parent items.</summary>
        ///<returns type="Array" elementType="Telerik.Web.UI.RadToolBarItem" elementType="Telerik.Web.UI.RadToolBarItem">Array of RadToolBarItem</return>
    },
    get_childListElement: function() {
        ///<summary>Gets the DOM element for the UL element that lists the toolbar buttons.</summary>
        ///<returns domElement="true" >HTML element</return>
    },
    get_items: function() {
        ///<summary>Returns the collection of items in the toolbar (not including items in drop-down lists).</summary>
        ///<returns type="Telerik.Web.UI.RadToolBarItemCollection">RadToolBarItemCollection</return>
    },
    get_skin: function() {
        /// <summary>Gets the skin name of the ToolBar.</summary>
        /// <returns type="String" mayBeNull="false">The skin name of the ToolBar.</returns>
    },
    get_slideDirection: function() {
        ///<summary>Gets the slide direction of the Toolbar.</summary>
        ///<returns type="Telerik.Web.UI.SlideDirection"></return>
    },
    set_slideDirection: function(value) {
        ///<summary>Sets the slide direction of the Toolbar.</summary>
        ///<param name="value" type="Telerik.Web.UI.SlideDirection"></return>
    },
    get_orientation: function() {
        ///<summary>Returns 0 if the toolbar is horizontal, 1 if it is vertical.</summary>
        ///<returns type="Number">integer</return>
    },
    set_orientation: function(value) {
        ///<summary>Sets the orientation of the toolbar.</summary>
        ///<param  name="value" type="Number">value</param>
    },
    get_isHorizontal: function() {
        /// <summary>Gets the value indicating whether the zone has Horizontal orientaion.</summary>
        /// <returns type="Boolean">The value indicating whether the zone has Horizontal orientaion.</returns>
    },
    get_postBackUrl: function() {
        ///<summary>Gets the Url of the page to post to from the current page.</summary>       
        /// <returns type="string">The value indicating the Url/return>
    },
    set_postBackUrl: function(value) {
        ///<summary>Sets the Url of the page to post to from the current page.</summary>     
        ///<param name="value" type="string">value</param>
    }
}

        //-------------------------------------------------------------------------------------------------------------------------------------------------

        Telerik.Web.UI.RadToolBarButton = function() {
        }
        Telerik.Web.UI.RadToolBarButton.prototype = {
            showDropDown: function(parameters) {
                ///<summary>Opens the drop-down list.</summary>
            },
            hideDropDown: function(parameters) {
                ///<summary>Closes the drop-down list.</summary>
            },
            enable: function() {
                ///<summary>Enables the toolbar item.</summary>
            },
            disable: function() {
                ///<summary>disables the toolbar item.</summary>
            },
            focus: function() {
                ///<summary>Moves focus to the item.</summary>
            },
            blur: function() {
                ///<summary>Moves focus off the item to the next element in the tab order.</summary>
            },
            show: function() {
                ///<summary>Shows the toolbar item.</summary>
            },
            hide: function() {
                ///<summary>Hides the toolbar item.</summary>
            },
            get_dropDownVisible: function(parameters) {
                ///<summary>Returns true if the drop-down is opened.</summary>
                ///<returns type="boolean"></returns>
            },
            get_animationContainer: function() {
                ///<summary>Returns the DOM element for the animation container of the item"s drop-down list.</summary>
                ///<returns domElement="true" >HTML element</returns>
            },
            get_dropDownElement: function() {
                ///<summary>Returns the DOM element for the item"s drop-down list.</summary>
                ///<returns domElement="true" >HTML element</returns>
            },
            get_childListElement: function() {
                ///<summary>Returns the DOM element for the root list of items in the toolbar.</summary>
                ///<returns domElement="true">DOM element for the root item list</returns>
            },
            get_toolBar: function() {
                ///<summary>Returns the toolbar to which the item belongs.</summary>
                ///<returns type="RadToolBar" >RadToolBar</returns>
            },
            set_enabled: function(value) {
                ///<summary>Sets whether the item is enabled.</summary>
                ///<param  name="value" type="boolean">value</param>
            },
            get_linkElement: function() {
                ///<summary>Gets the anchor DOM element of the toolbar button.</summary>
                ///<returns domElement="true" >HTML element</returns>
            },
            get_outerWrapElement: function() {
                ///<summary>Gets the DOM element for the outermost SPAN that wraps the item.</summary>
                ///<returns domElement="true" >HTML element</returns>
            },
            get_middleWrapElement: function() {
                ///<summary>Gets the DOM element for the middle SPAN that wraps the item.</summary>
                ///<returns domElement="true" >HTML element</returns>
            },
            get_innerWrapElement: function() {
                ///<summary>Gets the DOM element for the innermost SPAN that wraps the item.</summary>
                ///<returns domElement="true" >HTML element</returns>
            },
            get_textElement: function() {
                ///<summary>Gets the DOM element for the text of the item.</summary>
                ///<returns domElement="true" >HTML element</returns>
            },
            get_imageElement: function() {
                ///<summary>Gets the DOM element for the image of the item.</summary>
                ///<returns domElement="true" >HTML element</returns>
            },
            set_text: function(text) {
                ///<summary>Sets the text of the item.</summary>
                ///<param  name="text" type="string">text</param>
            },
            get_disabledCssClass: function() {
                ///<summary>Gets the CSS class for the item when it is disabled.</summary>
                /// <returns type="string"></return>
            },
            set_disabledCssClass: function(value) {
                ///<summary>Sets the CSS class for the item when it is disabled.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_disabledImageUrl: function() {
                ///<summary>Returns the full path to the image of a disabled item</summary>
                /// <returns type="string">The value indicating the image url</return>
            },
            set_disabledImageUrl: function(value) {
                ///<summary>Sets the DisabledImageUrl property of the item</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_imageUrl: function() {
                ///<summary>Returns the URL of the image.</summary>
                ///<returns type="string" >string</returns>
            },
            set_imageUrl: function(value) {
                ///<summary>Sets the URL for the image.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_hoveredImageUrl: function() {
                ///<summary>Returns the URL of the hovered-state image.</summary>
                ///<returns type="string" >string</returns>
            },
            set_hoveredImageUrl: function(value) {
                ///<summary>Sets the URL for the hovered-state image.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_hoveredCssClass: function() {
                ///<summary>Returns the name of the CSS class applied to the button when hovered.</summary>
                ///<returns type="string">The value indicating the Css class name</return>
            },
            set_hoveredCssClass: function(value) {
                ///<summary>Sets the name of the CSS class to be applied to the button when hovered.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_clickedImageUrl: function() {
                ///<summary>Returns the URL of the image when it is clicked.</summary>
                ///<returns type="string" >string</returns>
            },
            set_clickedImageUrl: function(value) {
                ///<summary>Sets the URL of the image when it is clicked.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_clickedCssClass: function() {
                ///<summary>Returns the name of the CSS class applied to the button when clicked.</summary>
                ///<returns type="string">The value indicating the Css class name</return>
            },
            set_clickedCssClass: function(value) {
                ///<summary>Sets the name of the CSS class to be applied to the button when clicked.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_focusedImageUrl: function() {
                ///<summary>Returns the URL of the image when on focus.</summary>
                ///<returns type="string">string</returns>
            },
            set_focusedImageUrl: function(value) {
                ///<summary>Sets the URL of the image when on focus.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_focusedCssClass: function() {
                ///<summary>Returns the name of the CSS class applied to the button when on focus.</summary>
                ///<returns type="string">The value indicating the Css class name</return>
            },
            set_focusedCssClass: function(value) {
                ///<summary>Sets the name of the CSS class to be applied to the button when on focus.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_toolTip: function() {
                ///<summary>Returns the text of the item"s tool tip.</summary>
                ///<returns type="string" >string</returns>
            },
            set_toolTip: function(value) {
                ///<summary>Sets the text of the item"s tool tip.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_focused: function() {
                ///<summary>True if the item is focused.</summary>
                ///<returns type="boolean" >boolean</returns>
            },
            set_focused: function(value) {
                ///<summary>Sets if the item is focused.</summary>
                ///<param  name="value" type="boolean">value</param>
            },
            get_imagePosition: function() {
                ///<summary>Gets the image position of the toolbar item.</summary>
                ///<returns type="Telerik.Web.UI.ToolBarImagePosition"></return>
            },
            set_imagePosition: function(value) {
                ///<summary>Sets the image position of the toolbar item.</summary>
                ///<param name="value" type="Telerik.Web.UI.ToolBarImagePosition"></return>
            },
            set_visible: function(value) {
                ///<summary>Sets if the item is visible.</summary>
                ///<param  name="value" type="boolean">value</param>
            },
            get_visible: function() {
                ///<summary>True if the item is visible.</summary>
                ///<returns type="boolean">boolean</returns>
            },
            get_text: function() {
                ///<summary>Returns the text of the item.</summary>
                ///<returns type="string" >string</returns>
            },
            get_clicked: function() {
                ///<summary>True if the item is clicked.</summary>
                ///<returns type="boolean" >boolean</returns>
            },
            get_hovered: function() {
                ///<summary>True if the item is hovered.</summary>
                ///<returns type="boolean" >boolean</returns>
            },
            toggle: function() {
                ///<summary>Collapses an expanded toolbar item or expands a collapsed toolbar item.</summary>
            },
            check: function() {
                ///<summary>Marks the checkbox of an item.</summary>
            },
            unCheck: function() {
                ///<summary>Unmarks the checkbox of an item.</summary>
            },
            click: function() {
                ///<summary>Causes server-side button click event to occur</summary>
            },
            get_postBack: function() {
                ///<summary>True if postback is enabled, false otherwise.</summary>
                ///<returns type="boolean">boolean</returns>
            },
            set_postBack: function(value) {
                ///<summary>Determines if the item should postback.</summary>
                ///<param  name="value" type="boolean">value</param>
            },
            get_navigateUrl: function() {
                ///<summary>Returns the URL of the toolbar item(the href attribute of the link). Null if the NavigateUrl server property is not set.</summary>
                ///<returns type="string">The value indicating the Url</returns>
            },
            set_navigateUrl: function(value) {
                ///<summary>Sets the URL of the item</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_target: function() {
                ///<summary>Gets the target of the item. If a target is not set, returns null.</summary>
                ///<returns type="string">The value indicating the name of the target</returns>
            },
            set_target: function(value) {
                ///<summary>Sets the target of the Node.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_isSeparator: function() {
                ///<summary>True if the item is separator.</summary>
                ///<returns type="boolean">The value indicating if the item is separator</returns>
            },
            set_isSeparator: function(value) {
                ///<summary>Sets if the item is separator.</summary>
                ///<param  name="value" type="boolean">value</param>
            },
            get_isChecked: function() {
                ///<summary>True if the item is checked.</summary>
                ///<returns type="boolean">The value indicating if the item is checked</returns>
            },
            get_linkElement: function() {
                ///<summary>Gets the anchor DOM element of the toolbar item.</summary>
                ///<returns domElement="true" >HTML element</returns>
            },
            get_imageElement: function() {
                ///<summary>Gets the image DOM element of the item. If the server side ImageUrl property is not set,  returns null.</summary>
                ///<returns domElement="true" >HTML element</returns>        
            },
            get_outerWrapElement: function() {
                ///<summary>Gets the DOM element for the outermost SPAN that wraps the item.</summary>
                ///<returns domElement="true" >HTML element</returns>                
            },
            get_textElement: function() {
                ///<summary>Gets the DOM element for the text of the item.</summary>
                ///<returns domElement="true" >HTML element</returns>                        
            },
            get_checkOnClick: function() {
                ///<summary>Marks or unmarks the checkbox of an item when the item is clicked.</summary>
                ///<returns type="boolean">The value indicating if the item is checked</returns>
            },
            set_checkOnClick: function(value) {
                ///<summary>Sets marked or unmarked if the item is clicked</summary>
                ///<param  name="value" type="boolean">value</param>
            },
            get_checked: function() {
                ///<summary>Gets the checked state of an item. The item is checked if get_checked() returns true.</summary>
                ///<returns type="boolean">The value indicating if the item is checked</returns>
            },
            set_checked: function(value) {
                ///<summary>Marks or unmarks the checkbox of an item.</summary>
                ///<param  name="value" type="boolean">value</param>        
            },
            get_group: function(value) {
                ///<summary>Gets the name of the group to which the item belongs.</summary>
                ///<returns type="string">The value indicating the name of the group</returns>            
            },
            set_group: function(value) {
                ///<summary>Sets the name of the group to which the item belongs.</summary>
                ///<param  name="value" type="string">value</param>                
            },
            get_checkedCssClass: function() {
                ///<summary>Returns the name of the CSS class applied to the item when checked.</summary>
                ///<returns type="string">The value indicating the Css class name</return>
            },
            set_checkedCssClass: function(value) {
                ///<summary>Sets name of the CSS class applied to the item when checked.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_checkedImageUrl: function() {
                ///<summary>Returns the URL of the image when checked.</summary>
                ///<returns type="string">The value indicating the image url</returns>
            },
            set_checkedImageUrl: function(value) {
                ///<summary>Sets the name of the CSS class to be applied to the button when checked.</summary>
                ///<param name="value" type="string">value</param>
            },
            get_allowSelfUnCheck: function(value) {
            ///<summary>Gets a value indicating if a checked button will get unchecked when clicked.</summary>
            ///<returns type="boolean">boolean</returns>                
            },
            set_allowSelfUnCheck: function(value) {
            ///<summary>Sets a value indicating if a checked button will get unchecked when clicked.</summary>
            ///<param name="value" type="boolean">value</param>               
            },
            get_commandName: function() {
                ///<summary>Returns the name of the command associated with the item.</summary>
                ///<returns type="string">The value indicating the command</returns>
            },
            set_commandName: function(value) {
                ///<summary>Sets the name of the command associated with the item.</summary>
                ///<param name="value" type="string">value</param>        
            },
            get_commandArgument: function() {
                ///<summary>Returns the value of the CommandArgument property.</summary>
                ///<returns type="string">string</returns>        
            },
            set_commandArgument: function(value) {
                ///<summary>Sets the value of the CommandArgument property.</summary>
                ///<param name="value" type="string">value</param>                
            },
            get_postBackUrl: function() {
                ///<summary>Gets the Url of the page to post to from the current page.</summary>  
                /// <returns type="string">The value indicating the Url/return>
            },
            set_postBackUrl: function(value) {
                ///<summary>Sets the Url of the page to post to from the current page.</summary>
                ///<param name="value" type="string">value</param>
            }
        }

        //-------------------------------------------------------------------------------------------------------------------------------------------------

        Telerik.Web.UI.RadToolBarButtonCollection = function(parent) {
        }
        Telerik.Web.UI.RadToolBarButtonCollection.prototype = {
            add: function(item) {
                ///<summary>Adds a child to the collection.</summary>
                ///<param  name="item" type="Telerik.Web.UI.RadToolBarButton">item</param>
            },
            insert: function(index, item) {
                ///<summary>Inserts the item into the collection at the position defined by the first (index) parameter.</summary>
                ///<param  name="index" type="Number">index</param>
                ///<param  name="item" type="Telerik.Web.UI.RadToolBarButton">item</param>
            },
            remove: function(item) {
                ///<summary>Removes the specified item from the collection.</summary>
                ///<param  name="item" type="Telerik.Web.UI.RadToolBarButton">item</param>
            },
            removeAt: function(index) {
                ///<summary>Removes the item at the specified index.</summary>
                ///<param  name="index" type="Number">index</param>
            },
            clear: function() {
                ///<summary>Clears the RadToolbarButtonCollection of all the items it contains.</summary>
            },
            getItem: function(index) {
                ///<summary>Returns the item from the collection that resides at the specified index.</summary>
                ///<param  name="index" type="Number">index</param>
                ///<returns type="Telerik.Web.UI.RadToolBarButton">RadToolBarButton</returns>                
            },
            indexOf: function(item) {
                ///<summary>Returns the index of a button.</summary>
                ///<param  name="item" type="Telerik.Web.UI.RadToolBarButton">item</param>
                ///<returns type="Number">int</returns>
            },
            forEach: function(lambda) {
                ///<summary>Iterates through the items of the RadToolbarButtonCollection using labmda expression</summary>
                ///<param  name="lambda" type="Telerik.Web.UI.RadToolBarButton">lambda</param>    
            },
            toArray: function() {
                ///<summary>Copies the elements of the RadToolbarButtonCollection to a new array.</summary>
                ///<returns type="Array" elementType="Telerik.Web.UI.RadToolBarItem">array</returns>
            },
            get_count: function() {
                ///<summary>Returns the number of the items in the collection.</summary>
                ///<returns type="Number" >int</returns>
            },
            getButton: function(index) {
                ///<summary>Returns the item from the collection that resides at the specified index.</summary>
                ///<param  name="index" type="Number">index</param>
                ///<returns type="Telerik.Web.UI.RadToolBarButton">RadToolBarButton</returns>
            }
        }

        //---------------------------------------------------------------------------------------------------------------------------------------------

        Telerik.Web.UI.RadToolBarDropDown = function() {
        }
        Telerik.Web.UI.RadToolBarDropDown.prototype = {
            showDropDown: function(parameters) {
                ///<summary>Opens the drop-down list.</summary>
            },
            hideDropDown: function(parameters) {
                ///<summary>Closes the drop-down list.</summary>
            },
            enable: function() {
                ///<summary>Enables the toolbar item.</summary>
            },
            disable: function() {
                ///<summary>disables the toolbar item.</summary>
            },
            focus: function() {
                ///<summary>Moves focus to the item.</summary>
            },
            blur: function() {
                ///<summary>Moves focus off the item to the next element in the tab order.</summary>
            },
            show: function() {
                ///<summary>Shows the toolbar item.</summary>
            },
            hide: function() {
                ///<summary>Hides the toolbar item.</summary>
            },
            get_dropDownVisible: function(parameters) {
                ///<summary>Returns true if the drop-down is opened.</summary>
                ///<returns type="boolean"></returns>
            },
            get_animationContainer: function() {
                ///<summary>Returns the DOM element for the animation container of the item"s drop-down list.</summary>
                ///<returns domElement="true">HTML element</returns>
            },
            get_dropDownElement: function() {
                ///<summary>Returns the DOM element for the item"s drop-down list.</summary>
                ///<returns domElement="true">HTML element</returns>
            },
            get_childListElement: function() {
                ///<summary>Gets the DOM element for the UL element that lists the toolbar buttons.</summary>
                ///<returns domElement="true">HTML element</return>
            },
            get_toolBar: function() {
                ///<summary>Returns the toolbar to which the item belongs.</summary>
                ///<returns type="RadToolBar">RadToolBar</returns>
            },
            set_enabled: function(value) {
                ///<summary>Sets whether the item is enabled.</summary>
                ///<param  name="value" type="boolean">value</param>
            },
            get_linkElement: function() {
                ///<summary>Gets the anchor DOM element of the toolbar button.</summary>
                ///<returns domElement="true">HTML element</returns>
            },
            get_outerWrapElement: function() {
                ///<summary>Gets the DOM element for the outermost SPAN that wraps the item.</summary>
                ///<returns domElement="true">HTML element</returns>
            },
            get_middleWrapElement: function() {
                ///<summary>Gets the DOM element for the middle SPAN that wraps the item.</summary>
                ///<returns domElement="true">HTML element</returns>
            },
            get_innerWrapElement: function() {
                ///<summary>Gets the DOM element for the innermost SPAN that wraps the item.</summary>
                ///<returns domElement="true">HTML element</returns>
            },
            get_textElement: function() {
                ///<summary>Gets the DOM element for the text of the item.</summary>
                ///<returns domElement="true">HTML element</returns>
            },
            get_imageElement: function() {
                ///<summary>Gets the DOM element for the image of the item.</summary>
                ///<returns domElement="true">HTML element</returns>
            },
            set_text: function(text) {
                ///<summary>Sets the text of the item.</summary>
                ///<param  name="text" type="string">text</param>
            },
            get_disabledCssClass: function() {
                ///<summary>Gets the CSS class for the item when it is disabled.</summary>
                /// <returns type="string"></return>
            },
            set_disabledCssClass: function(value) {
                ///<summary>Sets the CSS class for the item when it is disabled.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_disabledImageUrl: function() {
                ///<summary>Returns the full path to the image of a disabled item</summary>
                /// <returns type="string">The value indicating the image url</return>
            },
            set_disabledImageUrl: function(value) {
                ///<summary>Sets the DisabledImageUrl property of the item</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_imageUrl: function() {
                ///<summary>Returns the URL of the image.</summary>
                ///<returns type="string" >string</returns>
            },
            set_imageUrl: function(value) {
                ///<summary>Sets the URL for the image.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_hoveredImageUrl: function() {
                ///<summary>Returns the URL of the hovered-state image.</summary>
                ///<returns type="string" >string</returns>
            },
            set_hoveredImageUrl: function(value) {
                ///<summary>Sets the URL for the hovered-state image.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_hoveredCssClass: function() {
                ///<summary>Returns the name of the CSS class applied to the button when hovered.</summary>
                ///<returns type="string">The value indicating the Css class name</return>
            },
            set_hoveredCssClass: function(value) {
                ///<summary>Sets the name of the CSS class to be applied to the button when hovered.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_clickedImageUrl: function() {
                ///<summary>Returns the URL of the image when it is clicked.</summary>
                ///<returns type="string" >string</returns>
            },
            set_clickedImageUrl: function(value) {
                ///<summary>Sets the URL of the image when it is clicked.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_clickedCssClass: function() {
                ///<summary>Returns the name of the CSS class applied to the button when clicked.</summary>
                ///<returns type="string">The value indicating the Css class name</return>
            },
            set_clickedCssClass: function(value) {
                ///<summary>Sets the name of the CSS class to be applied to the button when clicked.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_focusedImageUrl: function() {
                ///<summary>Returns the URL of the image when on focus.</summary>
                ///<returns type="string">string</returns>
            },
            set_focusedImageUrl: function(value) {
                ///<summary>Sets the URL of the image when on focus.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_focusedCssClass: function() {
                ///<summary>Returns the name of the CSS class applied to the button when on focus.</summary>
                ///<returns type="string">The value indicating the Css class name</return>
            },
            set_focusedCssClass: function(value) {
                ///<summary>Sets the name of the CSS class to be applied to the button when on focus.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_toolTip: function() {
                ///<summary>Returns the text of the item"s tool tip.</summary>
                ///<returns type="string" >string</returns>
            },
            set_toolTip: function(value) {
                ///<summary>Sets the text of the item"s tool tip.</summary>
                ///<param  name="value" type="string">value</param>
            },
            get_focused: function() {
                ///<summary>True if the item is focused.</summary>
                ///<returns type="boolean" >boolean</returns>
            },
            set_focused: function(value) {
                ///<summary>Sets if the item is focused.</summary>
                ///<param  name="value" type="boolean">value</param>
            },
            get_imagePosition: function() {
                ///<summary>Gets the image position of the toolbar item.</summary>
                ///<returns type="ToolBarImagePosition"></return>
            },
            set_imagePosition: function(value) {
                ///<summary>Sets the image position of the toolbar item.</summary>
                ///<param name="value" type="ToolBarImagePosition"></return>
            },
            set_visible: function(value) {
                ///<summary>Sets if the item is visible.</summary>
                ///<param  name="value" type="boolean">value</param>
            },
            get_visible: function() {
                ///<summary>True if the item is visible.</summary>
                ///<returns type="boolean">boolean</returns>
            },
            get_text: function() {
                ///<summary>Returns the text of the item.</summary>
                ///<returns type="string">string</returns>
            },
            get_clicked: function() {
                ///<summary>True if the item is clicked.</summary>
                ///<returns type="boolean">boolean</returns>
            },
            get_hovered: function() {
                ///<summary>True if the item is hovered.</summary>
                ///<returns type="boolean">boolean</returns>
            },
            get_expandDirection: function() {
                ///<summary>Gets the expand direction of the Toolbar.</summary>
                ///<returns type="ExpandDirection"></return>
            },
            set_expandDirection: function() {
                ///<summary>Sets the expand direction of the Toolbar.</summary>
                ///<param name="value" type="ExpandDirection"></return>
            },
            get_arrowElement: function() {
                ///<summary>Gets the DOM element for the UL element that lists the arrow elements.</summary>
                ///<returns domElement="true" >HTML element</return>
            },
            get_buttons: function() {
                ///<summary>Returns the collection of buttons in the RadToolbarButtonCollection</summary>
                ///<returns type="RadToolBarButtonCollection">RadToolBarButtonCollection</return>
            }
        }

        //-------------------------------------------------------------------------------------------------------------------------------
        Telerik.Web.UI.RadToolBarItemCollection = function(parent) {
        }
        Telerik.Web.UI.RadToolBarItemCollection.prototype = {
            add: function(item) {
                ///<summary>Adds a child item to the collection.</summary>
                ///<param  name="item" type="Telerik.Web.UI.RadToolBarItem">item</param>
            },
            insert: function(index, item) {
                ///<summary>Inserts the item into the collection at the position defined by the first (index) parameter.</summary>
                ///<param  name="index" type="Number">index</param>
                ///<param  name="item" type="Telerik.Web.UI.RadToolBarItem">item</param>
            },
            remove: function(item) {
                ///<summary>Removes the specified item from the collection.</summary>
                ///<param  name="item" type="Telerik.Web.UI.RadToolBarItem">item</param>
            },
            removeAt: function(index) {
                ///<summary>Removes the item at the specified index.</summary>
                ///<param  name="index" type="Number">index</param>
            },
            clear: function() {
                ///<summary>Clears the collection of all the child items it contains.</summary>
            },
            getItem: function(index) {
                ///<summary>Returns the item from the collection that resides at the specified index.</summary>
                ///<param  name="index" type="Number">index</param>
                ///<returns type="Telerik.Web.UI.RadToolBarItem">RadToolBarItem</returns>     
            },
            indexOf: function(item) {
                ///<summary>Returns the index of a button.</summary>
                ///<param  name="item" type="Telerik.Web.UI.RadToolBarItem">item</param>
                ///<returns type="Number" >int</returns>
            },
            forEach: function(lambda) {
                ///<summary>Iterates through the items of the RadToolbarItemCollection using labmda expression</summary>
                ///<param  name="lambda" type="Telerik.Web.UI.RadToolBarItem">lambda</param>    
            },
            toArray: function() {
                ///<summary>Copies the elements of the RadToolbarItemCollection to a new array.</summary>
                ///<returns type="Array" elementType="Telerik.Web.UI.RadToolBarItem">array</returns>
            },
            get_count: function() {
                ///<summary>Returns the number of the items in the collection.</summary>
                ///<returns type="Number">int</returns>
            }
        }
        //-----------------------------------------------------------------------------------------------------------------------------

        Telerik.Web.UI.RadToolBarSplitButton = function() {
        }
        Telerik.Web.UI.RadToolBarSplitButton.prototype = {
        showDropDown: function(parameters) {
            ///<summary>Opens the drop-down list.</summary>
        },
        hideDropDown: function(parameters) {
            ///<summary>Closes the drop-down list.</summary>
        },
        enable: function() {
            ///<summary>Enables the toolbar item.</summary>
        },
        disable: function() {
            ///<summary>disables the toolbar item.</summary>
        },
        focus: function() {
            ///<summary>Moves focus to the item.</summary>
        },
        blur: function() {
            ///<summary>Moves focus off the item to the next element in the tab order.</summary>
        },
        show: function() {
            ///<summary>Shows the toolbar item.</summary>
        },
        hide: function() {
            ///<summary>Hides the toolbar item.</summary>
        },
        get_dropDownVisible: function(parameters) {
            ///<summary>Returns true if the drop-down is opened.</summary>
            ///<returns type="boolean"></returns>
        },
        get_animationContainer: function() {
            ///<summary>Returns the DOM element for the animation container of the item"s drop-down list.</summary>
            ///<returns domElement="true">HTML element</returns>
        },
        get_dropDownElement: function() {
            ///<summary>Returns the DOM element for the item"s drop-down list.</summary>
            ///<returns domElement="true">HTML element</returns>
        },
        get_childListElement: function() {
            ///<summary>Gets the DOM element for the UL element that lists the toolbar buttons.</summary>
            ///<returns domElement="true">HTML element</return>
        },
        get_toolBar: function() {
            ///<summary>Returns the toolbar to which the item belongs.</summary>
            ///<returns type="RadToolBar">RadToolBar</returns>
        },
        set_enabled: function(value) {
            ///<summary>Sets whether the item is enabled.</summary>
            ///<param  name="value" type="boolean">value</param>
        },
        get_linkElement: function() {
            ///<summary>Gets the anchor DOM element of the toolbar button.</summary>
            ///<returns domElement="true">HTML element</returns>
        },
        get_outerWrapElement: function() {
            ///<summary>Gets the DOM element for the outermost SPAN that wraps the item.</summary>
            ///<returns domElement="true">HTML element</returns>
        },
        get_middleWrapElement: function() {
            ///<summary>Gets the DOM element for the middle SPAN that wraps the item.</summary>
            ///<returns domElement="true">HTML element</returns>
        },
        get_innerWrapElement: function() {
            ///<summary>Gets the DOM element for the innermost SPAN that wraps the item.</summary>
            ///<returns domElement="true">HTML element</returns>
        },
        get_textElement: function() {
            ///<summary>Gets the DOM element for the text of the item.</summary>
            ///<returns domElement="true">HTML element</returns>
        },
        get_imageElement: function() {
            ///<summary>Gets the DOM element for the image of the item.</summary>
            ///<returns domElement="true">HTML element</returns>
        },
        set_text: function(text) {
            ///<summary>Sets the text of the item.</summary>
            ///<param  name="text" type="string">text</param>
        },
        get_disabledCssClass: function() {
            ///<summary>Gets the CSS class for the item when it is disabled.</summary>
            /// <returns type="string"></return>
        },
        set_disabledCssClass: function(value) {
            ///<summary>Sets the CSS class for the item when it is disabled.</summary>
            ///<param  name="value" type="string">value</param>
        },
        get_disabledImageUrl: function() {
            ///<summary>Returns the full path to the image of a disabled item</summary>
            /// <returns type="string">The value indicating the image url</return>
        },
        set_disabledImageUrl: function(value) {
            ///<summary>Sets the DisabledImageUrl property of the item</summary>
            ///<param  name="value" type="string">value</param>
        },
        get_imageUrl: function() {
            ///<summary>Returns the URL of the image.</summary>
            ///<returns type="string" >string</returns>
        },
        set_imageUrl: function(value) {
            ///<summary>Sets the URL for the image.</summary>
            ///<param  name="value" type="string">value</param>
        },
        get_hoveredImageUrl: function() {
            ///<summary>Returns the URL of the hovered-state image.</summary>
            ///<returns type="string" >string</returns>
        },
        set_hoveredImageUrl: function(value) {
            ///<summary>Sets the URL for the hovered-state image.</summary>
            ///<param  name="value" type="string">value</param>
        },
        get_hoveredCssClass: function() {
            ///<summary>Returns the name of the CSS class applied to the button when hovered.</summary>
            ///<returns type="string">The value indicating the Css class name</return>
        },
        set_hoveredCssClass: function(value) {
            ///<summary>Sets the name of the CSS class to be applied to the button when hovered.</summary>
            ///<param  name="value" type="string">value</param>
        },
        get_clickedImageUrl: function() {
            ///<summary>Returns the URL of the image when it is clicked.</summary>
            ///<returns type="string" >string</returns>
        },
        set_clickedImageUrl: function(value) {
            ///<summary>Sets the URL of the image when it is clicked.</summary>
            ///<param  name="value" type="string">value</param>
        },
        get_clickedCssClass: function() {
            ///<summary>Returns the name of the CSS class applied to the button when clicked.</summary>
            ///<returns type="string">The value indicating the Css class name</return>
        },
        set_clickedCssClass: function(value) {
            ///<summary>Sets the name of the CSS class to be applied to the button when clicked.</summary>
            ///<param  name="value" type="string">value</param>
        },
        get_focusedImageUrl: function() {
            ///<summary>Returns the URL of the image when on focus.</summary>
            ///<returns type="string">string</returns>
        },
        set_focusedImageUrl: function(value) {
            ///<summary>Sets the URL of the image when on focus.</summary>
            ///<param  name="value" type="string">value</param>
        },
        get_focusedCssClass: function() {
            ///<summary>Returns the name of the CSS class applied to the button when on focus.</summary>
            ///<returns type="string">The value indicating the Css class name</return>
        },
        set_focusedCssClass: function(value) {
            ///<summary>Sets the name of the CSS class to be applied to the button when on focus.</summary>
            ///<param  name="value" type="string">value</param>
        },
        get_toolTip: function() {
            ///<summary>Returns the text of the item"s tool tip.</summary>
            ///<returns type="string" >string</returns>
        },
        set_toolTip: function(value) {
            ///<summary>Sets the text of the item"s tool tip.</summary>
            ///<param  name="value" type="string">value</param>
        },
        get_focused: function() {
            ///<summary>True if the item is focused.</summary>
            ///<returns type="boolean" >boolean</returns>
        },
        set_focused: function(value) {
            ///<summary>Sets if the item is focused.</summary>
            ///<param  name="value" type="boolean">value</param>
        },
        get_imagePosition: function() {
            ///<summary>Gets the image position of the toolbar item.</summary>
            ///<returns type="ToolBarImagePosition"></return>
        },
        set_imagePosition: function(value) {
            ///<summary>Sets the image position of the toolbar item.</summary>
            ///<param name="value" type="ToolBarImagePosition"></return>
        },
        set_visible: function(value) {
            ///<summary>Sets if the item is visible.</summary>
            ///<param  name="value" type="boolean">value</param>
        },
        get_visible: function() {
            ///<summary>True if the item is visible.</summary>
            ///<returns type="boolean">boolean</returns>
        },
        get_text: function() {
            ///<summary>Returns the text of the item.</summary>
            ///<returns type="string">string</returns>
        },
        get_clicked: function() {
            ///<summary>True if the item is clicked.</summary>
            ///<returns type="boolean">boolean</returns>
        },
        get_hovered: function() {
            ///<summary>True if the item is hovered.</summary>
            ///<returns type="boolean">boolean</returns>
        },
        getDefaultButton: function() {
        ///<summary>Returns the default button.</summary>
        ///<returns type="Telerik.Web.UI.RadToolBarButton">RadToolbarButton</returns>        
        },
        click: function() {
        ///<summary>Causes server-side button click event to occur</summary>
        },
/*!!!*/ get_activatorElement: function() {
        ///<summary>Gets the DOM element for the UL element.</summary>
        ///<returns domElement="true" >HTML element</return>
        },
        get_arrowElement: function() {
        ///<summary>Gets the DOM element for the UL element that lists the arrow elements.</summary>
        ///<returns domElement="true" >HTML element</return>
        },
        get_postBack: function() {
        ///<summary>True if postback is enabled, false otherwise.</summary>
        ///<returns type="boolean">boolean</return>        
        },
        set_postBack: function(value) {
        ///<summary>Determines if the Node should postback.</summary>
        ///<param  name="value" type="boolean">value</param>        
        },
        get_navigateUrl: function() {
        ///<summary>Gets the Url to which the toolbar button navigates when selected.</summary>
        ///<returns type="string">The value indicating the Url</returns>
        },
        set_navigateUrl: function(value) {
        ///<summary>Sets the URL to which the toolbar button navigates when selected.</summary>
        ///<param  name="value" type="string">value</param>
        },
        get_target: function() {
        ///<summary>Gets the target of the item. If a target is not set, returns null.</summary>
        ///<returns type="string">The value indicating the name of the target</returns>
        },
        set_target: function(value) {
        ///<summary>Sets the target of the Node.</summary>
        ///<param  name="value" type="string">value</param>
        },
        get_buttons: function() {
        ///<summary>Returns the collection of buttons in the RadToolbarSplitButtonCollection</summary>
        ///<returns type="RadToolBarButtonCollection">RadToolBarSplitButtonCollection</return>
        },
        get_enableDefaultButton: function() {
        ///<summary>Gets a value indicating if the RadToolbarSplitButton will use the DefaultButton behaviour.</summary>
        ///<returns type="boolean">boolean</return>                    
        },
        set_enableDefaultButton: function(value) {
        ///<summary>Sets a value indicating if the RadToolbarSplitButton will use the DefaultButton behaviour.</summary>
        ///<param  name="value" type="boolean">value</param>        
        },
        get_defaultButtonIndex: function() {
        ///<summary>Returns the index of the Default Button.</summary>
        ///<returns type="Number">index</return>                            
        },
        set_defaultButtonIndex: function(value) {
        ///<summary>Sets the value indicating the index of the Default Button.</summary>
        ///<param  name="value" type="Number">value</param>                
        },
        get_expandDirection: function() {
        ///<summary>Gets the expand direction of the Toolbar.</summary>
        ///<returns type="ExpandDirection"></return>
        },
        set_expandDirection: function() {
        ///<summary>Sets the expand direction of the Toolbar.</summary>
        ///<param name="value" type="ExpandDirection"></return>
        },
        get_value: function() {
        ///<summary>Returns the value of the item.</summary>
        ///<returns type="string"></return>        
        },
        set_value: function(value) {
        ///<summary>Sets the value of the item.</summary>
        ///<param name="value" type="string"></return>        
        },
        get_commandName: function() {
        ///<summary>Returns the name of the command associated with the item.</summary>
        ///<returns type="string">The value indicating the command</returns>
        },
        set_commandName: function(value) {
        ///<summary>Sets the name of the command associated with the item.</summary>
        ///<param name="value" type="string">value</param>        
        },
        get_commandArgument: function() {
        ///<summary>Returns the value of the CommandArgument property.</summary>
        ///<returns type="string">string</returns> 
        },
        set_commandArgument: function(value) {
        ///<summary>Sets the value of the CommandArgument property.</summary>
        ///<param name="value" type="string">value</param> 
        },
        get_causesValidation: function() {
        ///<summary>Gets a value indicating if validation is performed when the RadToolbarSplitButton is clicked.</summary>
        ///<returns type="boolean">boolean</returns>         
        },
        set_causesValidation: function(value) {
        ///<summary>Gets a value indicating if validation is performed when the RadToolbarSplitButton is clicked.</summary>
        ///<param name="value" type="boolean">value</param>                 
        },
        get_validationGroup: function() {
        ///<summary>Gets the name of the validation group to which the RadToolbarSplitButton belongs.</summary>
        ///<returns type="string">The name of the validation group</returns>                 
        },
        set_validationGroup: function(value) {
        ///<summary>Sets the name of the validation group to which the RadToolbarSplitButton belongs.</summary>
        ///<param name="value" type="string">value</param>                         
        },
        get_postBackUrl: function() {
        ///<summary>Gets the Url of the page to post to from the current page.</summary>
        ///<returns type="string">the page Url</returns>                          
        },
        set_postBackUrl: function(value) {
        ///<summary>Sets the Url of the page to post to from the current page.</summary>
        ///<param name="value" type="string">value</param>                                           
        },
        set_enabled: function(value) {
        ///<summary>Sets whether the item is enabled.</summary>
        ///<param  name="value" type="boolean">value</param>
        },
        get_enabled: function() {
        ///<summary>Gets whether the item is enabled.</summary>
        ///<param  name="value" type="boolean">value</param>
        }
    }

    //---------------------------------------------------------------------------------------------------------------------------

    Telerik.Web.UI.RadToolBarItemType = function() {
        ///<summary>The type of the RadToolBarItem.</summary>
        /// <field name="Button" type="Number" integer="true" />    
        /// <field name="DropDown" type="Number" integer="true" />
        /// <field name="SplitButton" type="Number" integer="true" />
    };
    Telerik.Web.UI.RadToolBarItemType.prototype = {
        Button: 0,
        DropDown: 1,
        SplitButton: 2
    };
    Telerik.Web.UI.RadToolBarItemType.registerEnum("Telerik.Web.UI.RadToolBarItemType");

    //-----------------------------------------------------------------------------------------------------------------------------

    Telerik.Web.UI.ToolBarDropDownExpandDirection = function() {
        ///<summary>The expand direction of the drop-down.</summary>
        /// <field name="Up" type="Number" integer="true" />    
        /// <field name="Down" type="Number" integer="true" />
    };
    Telerik.Web.UI.ToolBarDropDownExpandDirection.prototype = {
        Up: 0,
        Down: 1
    };
    Telerik.Web.UI.ToolBarDropDownExpandDirection.registerEnum("Telerik.Web.UI.ToolBarDropDownExpandDirection");

    //-------------------------------------------------------------------------------------------------------------------------------

    Telerik.Web.UI.ToolBarImagePosition = function() {
        ///<summary>The position of the item image according to the item text.</summary>
        /// <field name="Left" type="Number" integer="true" />    
        /// <field name="Right" type="Number" integer="true" />
        /// <field name="AboveText" type="Number" integer="true" />
        /// <field name="BelowText" type="Number" integer="true" />
    };
    Telerik.Web.UI.ToolBarImagePosition.prototype = {
        Left: 0,
        Right: 1,
        AboveText: 2,
        BelowText: 3
    };

    Telerik.Web.UI.ToolBarImagePosition.registerEnum("Telerik.Web.UI.ToolBarImagePosition");
    
    // ---------- SlideDirection Enum ----------
    Telerik.Web.UI.SlideDirection = function(){
        ///<summary>The slide direction of the toolbar.</summary>
        /// <field name="Left" type="Number" integer="true" />    
        /// <field name="Right" type="Number" integer="true" />
        /// <field name="Down" type="Number" integer="true" />
        /// <field name="Up" type="Number" integer="true" />
    };
    Telerik.Web.UI.SlideDirection.prototype = 
    {
	    Up: 1,
	    Down: 2,
	    Left: 3,
	    Right: 4
    }
    Telerik.Web.UI.SlideDirection.registerEnum("Telerik.Web.UI.SlideDirection");
    
 
/// <reference Name="MicrosoftAjax.js">

$telerik.toSplitter = function(object)
{
	/// <summary>Casts an object to a RadSplitter instance</summary>
	/// <returns type="Telerik.Web.UI.RadSplitter">A RadSplitter instance</returns>
};
$telerik.findSplitter = function(id,parent)
{
	/// <summary>Finds a RadSplitter instance</summary>
	/// <param name='id'>A string that contains ID of the RadSplitter to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadSplitter to find</param>
	/// <returns type="Telerik.Web.UI.RadSplitter">The RadSplitter instance</returns>
};
$telerik.toPane = function(object)
{
	/// <summary>Casts an object to a RadPane instance</summary>
	/// <returns type="Telerik.Web.UI.RadPane">A RadPane instance</returns>
};
$telerik.findPane = function(id,parent)
{
	/// <summary>Finds a RadPane instance</summary>
	/// <param name='id'>A string that contains ID of the RadPane to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadPane to find</param>
	/// <returns type="Telerik.Web.UI.RadPane">The RadPane instance</returns>
};
$telerik.toSplitBar = function(object)
{
	/// <summary>Casts an object to a RadSplitBar instance</summary>
	/// <returns type="Telerik.Web.UI.RadSplitBar">A RadSplitBar instance</returns>
};
$telerik.findSplitBar = function(id,parent)
{
	/// <summary>Finds a RadSplitBar instance</summary>
	/// <param name='id'>A string that contains ID of the RadSplitBar to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadSplitBar to find</param>
	/// <returns type="Telerik.Web.UI.RadSplitBar">The RadSplitBar instance</returns>
};
$telerik.toSlidingPane = function(object)
{
	/// <summary>Casts an object to a RadSlidingPane instance</summary>
	/// <returns type="Telerik.Web.UI.RadSlidingPane">A RadSlidingPane instance</returns>
};
$telerik.findSlidingPane = function(id,parent)
{
	/// <summary>Finds a RadSlidingPane instance</summary>
	/// <param name='id'>A string that contains ID of the RadSlidingPane to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadSlidingPane to find</param>
	/// <returns type="Telerik.Web.UI.RadSlidingPane">The RadSlidingPane instance</returns>
};
$telerik.toSlidingZone = function(object)
{
	/// <summary>Casts an object to a RadSlidingZone instance</summary>
	/// <returns type="Telerik.Web.UI.RadSlidingZone">A RadSlidingZone instance</returns>
};
$telerik.findSlidingZone = function(id,parent)
{
	/// <summary>Finds a RadSlidingZone instance</summary>
	/// <param name='id'>A string that contains ID of the RadSlidingZone to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadSlidingZone to find</param>
	/// <returns type="Telerik.Web.UI.RadSlidingZone">The RadSlidingZone instance</returns>
};

Telerik.Web.UI.SplitterPaneScrolling = function()
{
	/// <summary>Specifies the possible values for the Scrolling property of the RadPane and RadSlidingPane control</summary>
	/// <field name="Both" type="Number" integer="true" static="true"></field>
	/// <field name="X" type="Number" integer="true" static="true"></field>
	/// <field name="Y" type="Number" integer="true" static="true"></field>
	/// <field name="None" type="Number" integer="true" static="true"></field>
};
Telerik.Web.UI.SplitterPaneScrolling.prototype =
{
	Both: 1,
	X: 2,
	Y: 3,
	None: 4
}
Telerik.Web.UI.SplitterPaneScrolling.registerEnum('Telerik.Web.UI.SplitterPaneScrolling',false);

Telerik.Web.UI.SplitterResizeMode = function()
{
	/// <summary>Specifies the possible values for the ResizeMode property of the RadSplitter control</summary>
	/// <field name="AdjacentPane" type="Number" integer="true" static="true"></field>
	/// <field name="Proportional" type="Number" integer="true" static="true"></field>
	/// <field name="EndPane" type="Number" integer="true" static="true"></field>
};
Telerik.Web.UI.SplitterResizeMode.prototype =
{
	AdjacentPane: 1,
	Proportional: 2,
	EndPane: 3
}
Telerik.Web.UI.SplitterResizeMode.registerEnum('Telerik.Web.UI.SplitterResizeMode',false);

Telerik.Web.UI.SplitterDirection = function()
{
	/// <summary>Specifies the possible directions, in which a pane can be resized, collapsed or expanded</summary>
	/// <field name="Forward" type="Number" integer="true" static="true"></field>
	/// <field name="Backward" type="Number" integer="true" static="true"></field>
};
Telerik.Web.UI.SplitterDirection.prototype =
{
	Forward: 1,
	Backward: 2
}
Telerik.Web.UI.SplitterDirection.registerEnum('Telerik.Web.UI.SplitterDirection',false);

Telerik.Web.UI.SplitBarCollapseMode = function()
{
	/// <summary>Specifies the possible values for the CollapseMode property of the RadSplitBar control</summary>
	/// <field name="None" type="Number" integer="true" static="true"></field>
	/// <field name="Forward" type="Number" integer="true" static="true"></field>
	/// <field name="Backward" type="Number" integer="true" static="true"></field>
	/// <field name="Both" type="Number" integer="true" static="true"></field>
};
Telerik.Web.UI.SplitBarCollapseMode.prototype =
{
	None: 1,
	Forward: 2,
	Backward: 3,
	Both: 4
}
Telerik.Web.UI.SplitBarCollapseMode.registerEnum('Telerik.Web.UI.SplitBarCollapseMode',false);

Telerik.Web.UI.SplitterSlideDirection = function()
{
	/// <summary>Specifies the possible values for the SlideDirection property of the RadSlidingZone control</summary>
	/// <field name="Right" type="Number" integer="true" static="true"></field>
	/// <field name="Left" type="Number" integer="true" static="true"></field>
	/// <field name="Top" type="Number" integer="true" static="true"></field>
	/// <field name="Bottom" type="Number" integer="true" static="true"></field>
};
Telerik.Web.UI.SplitterSlideDirection.prototype =
{
	Right: 1,
	Left: 2,
	Top: 3,
	Bottom: 4
}
Telerik.Web.UI.SplitterSlideDirection.registerEnum('Telerik.Web.UI.SplitterSlideDirection',false);

Telerik.Web.UI.RadSplitter = function(element)
{
	/// <summary>Initializes a new instance of the Telerik.Web.UI.RadSplitter class</summary>
	/// <param name='element' type='Object' domElement='true'>The outermost DOM element of RadSplitter</param>
};
Telerik.Web.UI.RadSplitter.prototype =
{
	get_borderSize: function()
	{
		/// <summary>Gets the size of the borders in the splitter control</summary>
		/// <returns type='Number' integer="true">The size of the borders in the splitter control</returns>
	},

	get_splitBarSize: function()
	{
		/// <summary>Gets the size of the splitbar controls in the splitter control</summary>
		/// <returns type='Number' integer="true">The size of the splitbar controls in the splitter control</returns>
	},

	get_resizeMode: function()
	{
		/// <summary>Gets the resize mode of the splitter control</summary>
		/// <returns type='Telerik.Web.UI.SplitterResizeMode'>The resize mode of the splitter</returns>
	},

	get_liveResize: function()
	{
		/// <summary>Returns a value, indicating whether the panes of the splitter control will resize while the user is dragging the splitbar control or 
		/// when the user releases the splitbar control
		/// </summary>
		/// <returns type='Boolean'>A value, indicating whether the panes of the splitter control will resize while the user is dragging the splitbar control or 
		/// when the user releases the splitbar control</returns>
	},

	get_heightOffset: function()
	{
		/// <summary>Gets the value of the HeightOffset property of the splitter control</summary>
		/// <returns type='Number' integer="true">The value of the HeightOffset property of the splitter control</returns>
	},

	set_width: function(value)
	{
		/// <summary>Sets the width of the splitter control</summary>
		/// <param name='value' type='String' optional='false'>The new width for the splitter control</param>
	},

	get_width: function()
	{
		/// <summary>Gets the width in pixels of the splitter control</summary>
		/// <returns type='Number' integer="true">The width in pixels of the splitter control</returns>
	},

	set_height: function(value)
	{
		/// <summary>Sets the height of the splitter control</summary>
		/// <param name='value' type='String' optional='false'>The new height for the splitter control</param>
	},

	get_height: function()
	{
		/// <summary>Gets the height in pixels of the splitter control</summary>
		/// <returns type='Number' integer="true">The height in pixels of the splitter control</returns>
	},

	get_parent: function()
	{
		/// <summary>Gets a reference to the first parent RadPane object of the splitter control, in case the ResizeWithParentPane property of the splitter is set to true</summary>
		/// <returns type='Telerik.Web.UI.RadPane' mayBeNull='true'></returns>
	},

	add_load: function(handler)
	{
		/// <summary>Adds a handler for the load event</summary>
		/// <param name="handler" type="Function">The handler for the load event</param>
	},

	remove_load: function(handler)
	{
		/// <summary>Removes a handler for the load event</summary>
		/// <param name="handler" type="Function">The handler for the load event</param>
	},

	add_resizing: function(handler)
	{
		/// <summary>Adds a handler for the resizing event</summary>
		/// <param name="handler" type="Function">The handler for the resizing event</param>
	},

	remove_resizing: function(handler)
	{
		/// <summary>Removes a handler for the resizing event</summary>
		/// <param name="handler" type="Function">The handler for the resizing event</param>
	},

	add_resized: function(handler)
	{
		/// <summary>Adds a handler for the resized event</summary>
		/// <param name="handler" type="Function">The handler for the resized event</param>
	},

	remove_resized: function(handler)
	{
		/// <summary>Removes a handler for the resized event</summary>
		/// <param name="handler" type="Function">The handler for the resized event</param>
	},

	getMinWidth: function(startPaneIndex,endPaneIndex)
	{
		/// <summary>Returns the sum of the minimum possible width of a range of the panes in the items collection of the splitter control</summary>
		/// <param name='startPaneIndex' type='Number' integer="true" optional='true'>The index of the first pane to include in the sum. In case the parameter is not specified, 
		/// the first pane to include will be the first pane in the panes collection of the splitter control</param>
		/// <param name='endPaneIndex' type='Number' integer="true" optional='true'>The index of the last pane to include in the sum. In case the parameter is not specified, 
		/// the last pane to include will be the last pane in the panes collection of the splitter control</param>
		/// <returns type='Number'>The sum of the minimum possible width of a range of the panes in the items collection of the splitter control</returns>
	},

	getMaxWidth: function(startPaneIndex,endPaneIndex)
	{
		/// <summary>Returns the sum of the maximum possible width of a range of the panes in the items collection of the splitter control</summary>
		/// <param name='startPaneIndex' type='Number' integer="true" optional='true'>The index of the first pane to include in the sum. In case the parameter is not specified, 
		/// the first pane to include will be the first pane in the panes collection of the splitter control</param>
		/// <param name='endPaneIndex' type='Number' integer="true" optional='true'>The index of the last pane to include in the sum. In case the parameter is not specified, 
		/// the last pane to include will be the last pane in the panes collection of the splitter control</param>
		/// <returns type='Number'>The sum of the maximum possible width of a range of the panes in the items collection of the splitter control</returns>
	},

	getMinHeight: function(startPaneIndex,endPaneIndex)
	{
		/// <summary>Returns the sum of the minimum possible height of a range of the panes in the items collection of the splitter control</summary>
		/// <param name='startPaneIndex' type='Number' integer="true" optional='true'>The index of the first pane to include in the sum. In case the parameter is not specified, 
		/// the first pane to include will be the first pane in the panes collection of the splitter control</param>
		/// <param name='endPaneIndex' type='Number' integer="true" optional='true'>The index of the last pane to include in the sum. In case the parameter is not specified, 
		/// the last pane to include will be the last pane in the panes collection of the splitter control</param>
		/// <returns type='Number'>The sum of the minimum possible height of a range of the panes in the items collection of the splitter control</returns>
	},

	getMaxHeight: function(startPaneIndex,endPaneIndex)
	{
		/// <summary>Returns the sum of the maximum possible height of a range of the panes in the items collection of the splitter control</summary>
		/// <param name='startPaneIndex' type='Number' integer="true" optional='true'>The index of the first pane to include in the sum. In case the parameter is not specified, 
		/// the first pane to include will be the first pane in the panes collection of the splitter control</param>
		/// <param name='endPaneIndex' type='Number' integer="true" optional='true'>The index of the last pane to include in the sum. In case the parameter is not specified, 
		/// the last pane to include will be the last pane in the panes collection of the splitter control</param>
		/// <returns type='Number'>The sum of the maximum possible height of a range of the panes in the items collection of the splitter control</returns>
	},

	isNested: function()
	{
		/// <summary>Returns a value, indicating whether the splitter is nested in a RadPane control and its ResizeWithParentPane property is set to true</summary>
		/// <returns type='Boolean'>A value, indicating whether the splitter is nested in a RadPane control and its ResizeWithParentPane property is set to true</returns>
	},

	getInnerWidth: function()
	{
		/// <summary>Returns the width of the splitter control, excluding borders of the splitter</summary>
		/// <returns type='Number'>The width of the splitter control, excluding borders of the splitter</returns>
	},

	getInnerHeight: function()
	{
		/// <summary>Returns the height of the splitter control, excluding borders of the splitter</summary>
		/// <returns type='Number'>The height of the splitter control, excluding borders of the splitter</returns>
	},

	getPanes: function()
	{
		/// <summary>Returns an array with all the panes, defined in the items collection of the splitter control</summary>
		/// <returns type='Array' elementType='Telerik.Web.UI.RadPane'>An array with all the panes, defined in the items collection of the splitter control</returns>
	},

	resize: function(width,height)
	{
		/// <summary>Resizes the splitter control to the specified width and height</summary>
		/// <param name='width' type='Number' integer="true" optional='true'>The new width in pixels for the splitter control</param>
		/// <param name='height' type='Number' integer="true" optional='true'>The new height in pixels for the splitter control</param>
	},

	getEndPane: function()
	{
		/// <summary>Gets the last pane in the items collection of the splitter control</summary>
		/// <returns type='Telerik.Web.UI.RadPane'>The last pane in the items collection of the splitter control</returns>
	},

	getStartPane: function()
	{
		/// <summary>Gets the first pane in the items collection of the splitter control</summary>
		/// <returns type='Telerik.Web.UI.RadPane'>The first pane in the items collection of the splitter control</returns>
	},

	isVertical: function()
	{
		/// <summary>Returns a value, indicating whether the Orientation of the splitter control is Telerik.Web.UI.Orientation.Vertical</summary>
		/// <returns type='Boolean'>A value, indicating whether the Orientation of the splitter control is Telerik.Web.UI.Orientation.Vertical</returns>
	},

	getPaneByIndex: function(paneIndex)
	{
		/// <summary>Returns the pane with the specified index in the panes collection of the splitter control</summary>
		/// <param name='paneIndex' type='Number' integer="true">The index of the pane to search for</param>
		/// <returns type='Telerik.Web.UI.RadPane'>The pane with the specified index in the panes collection of the splitter control</returns>
	},

	getPaneById: function(paneID)
	{
		/// <summary>Returns the pane with the specified id in the panes collection of the splitter control</summary>
		/// <param name='paneID' type='String'>The id of the pane to search for</param>
		/// <returns type='Telerik.Web.UI.RadPane'>The pane with the specified id in the panes collection of the splitter control</returns>
	},

	getSplitBarByIndex: function(index)
	{
		/// <summary>Returns the splitbar with the specified index in the splitbars collection of the splitter control</summary>
		/// <param name='index' type='Number' integer="true">The index of the splitbar to search for</param>
		/// <returns type='Telerik.Web.UI.RadSplitBar'>The splitbar with the specified index in the splitbars collection of the splitter control</returns>
	},

	getSplitBarById: function(splitBarID)
	{
		/// <summary>Returns the splitbar with the specified id in the splitbars collection of the splitter control</summary>
		/// <param name='splitBarID' type='String'>The id of the splitbar to search for</param>
		/// <returns type='Telerik.Web.UI.RadSplitBar'>The splitbar with the specified id in the splitbars collection of the splitter control</returns>
	},

	getSplitBars: function()
	{
		/// <summary>Returns an array with all the splitbars, defined in the items collection of the splitter control</summary>
		/// <returns type='Array' elementType='Telerik.Web.UI.RadSplitBar'>An array with all the splitbars, defined in the items collection of the splitter control</returns>
	},

	getContainerElement: function()
	{
		/// <summary>Returns the TABLE element of the splitter control</summary>
		/// <returns type='Object' domElement='true'>The TABLE element of the splitter control</returns>
	},

	repaint: function()
	{
		/// <summary>Repaints the splitter control and forces it to recalculate the size of its elements</summary>
	}
};
Telerik.Web.UI.RadSplitter.registerClass("Telerik.Web.UI.RadSplitter", Sys.UI.Control);

Telerik.Web.UI.SplitterPaneBase = function(element)
{
	/// <summary>Initializes a new instance of the Telerik.Web.UI.SplitterPaneBase class</summary>
	/// <param name='element' type='Object' domElement='true'>The outermost DOM element of SplitterPaneBase</param>
};
Telerik.Web.UI.SplitterPaneBase.prototype =
{
	get_minWidth: function()
	{
		/// <summary>Returns the minimum possible width of the control</summary>
		/// <returns type='Number' integer="true">The minimum possible width of the control</returns>
	},

	get_minHeight: function()
	{
		/// <summary>Returns the minimum possible height of the control</summary>
		/// <returns type='Number' integer="true">The minimum possible height of the control</returns>
	},

	get_maxWidth: function()
	{
		/// <summary>Returns the maximum possible width of the control</summary>
		/// <returns type='Number' integer="true">The maximum possible width of the control</returns>
	},

	get_maxHeight: function()
	{
		/// <summary>Returns the maximum possible height of the control</summary>
		/// <returns type='Number' integer="true">The maximum possible height of the control</returns>
	},

	set_width: function(value)
	{
		/// <summary>Sets the width in pixels of the control</summary>
		/// <param name='value' type='Number' integer="true">The new width in pixels of the control</param>
	},

	get_width: function()
	{
		/// <summary>Gets the width in pixels of the control</summary>
		/// <returns type='Number'>The width in pixels of the control</returns>
	},

	set_height: function(value)
	{
		/// <summary>Sets the height in pixels of the control</summary>
		/// <param name='value' type='Number' integer="true">The new height in pixels of the control</param>
	},

	get_height: function()
	{
		/// <summary>Gets the height in pixels of the control</summary>
		/// <returns type='Number'>The height in pixels of the control</returns>
	},

	get_collapsed: function()
	{
		/// <summary>Returns a value, indicating whether the control is collapsed</summary>
		/// <returns type='Boolean'>A value, indicating whether the control is collapsed</returns>
	},

	get_scrolling: function()
	{
		/// <summary>Returns the value of the Scrolling property of the control</summary>
		/// <returns type='Telerik.Web.UI.SplitterPaneScrolling'>The value of the Scrolling property of the control</returns>
	},

	set_scrolling: function(value)
	{
		/// <summary>Sets new value for the Scrolling property of the control</summary>
		/// <param name='value' type='Telerik.Web.UI.SplitterPaneScrolling'>The new value for the Scrolling property of the control</param>
	},

	getScrollPos: function()
	{
		/// <summary>Gets the position of the scrollbar of the control</summary>
		/// <returns type='Object'>The position of the scrollbar of the control in the form {left,top}</returns>
	},

	setScrollPos: function(scrollLeft,scrollTop)
	{
		/// <summary>Sets the position of the scrollbar of the control</summary>
		/// <param name='scrollLeft' type='Number' integer="true">The left position of the scrollbar</param>
		/// <param name='scrollTop' type='Number' integer="true">The top position of the scrollbar</param>
	},

	get_persistScrollPosition: function()
	{
		/// <summary>Returns a value, indicating whether the control persists the position of the scrollbar</summary>
		/// <returns type='Boolean'>A value, indicating whether the control persists the position of the scrollbar</returns>
	},

	add_collapsing: function(handler)
	{
		/// <summary>Adds a handler for the collapsing event</summary>
		/// <param name="handler" type="Function">The handler for the collapsing event</param>
	},

	remove_collapsing: function(handler)
	{
		/// <summary>Removes a handler for the collapsing event</summary>
		/// <param name="handler" type="Function">The handler for the collapsing event</param>
	},

	add_expanding: function(handler)
	{
		/// <summary>Adds a handler for the expanding event</summary>
		/// <param name="handler" type="Function">The handler for the expanding event</param>
	},

	remove_expanding: function(handler)
	{
		/// <summary>Removes a handler for the expanding event</summary>
		/// <param name="handler" type="Function">The handler for the expanding event</param>
	},

	add_resizing: function(handler)
	{
		/// <summary>Adds a handler for the resizing event</summary>
		/// <param name="handler" type="Function">The handler for the resizing event</param>
	},

	remove_resizing: function(handler)
	{
		/// <summary>Removes a handler for the resizing event</summary>
		/// <param name="handler" type="Function">The handler for the resizing event</param>
	},

	add_collapsed: function(handler)
	{
		/// <summary>Adds a handler for the collapsed event</summary>
		/// <param name="handler" type="Function">The handler for the collapsed event</param>
	},

	remove_collapsed: function(handler)
	{
		/// <summary>Removes a handler for the collapsed event</summary>
		/// <param name="handler" type="Function">The handler for the collapsed event</param>
	},

	add_expanded: function(handler)
	{
		/// <summary>Adds a handler for the expanded event</summary>
		/// <param name="handler" type="Function">The handler for the expanded event</param>
	},

	remove_expanded: function(handler)
	{
		/// <summary>Removes a handler for the expanded event</summary>
		/// <param name="handler" type="Function">The handler for the expanded event</param>
	},

	add_resized: function(handler)
	{
		/// <summary>Adds a handler for the resized event</summary>
		/// <param name="handler" type="Function">The handler for the resized event</param>
	},

	remove_resized: function(handler)
	{
		/// <summary>Removes a handler for the resized event</summary>
		/// <param name="handler" type="Function">The handler for the resized event</param>
	}

};
Telerik.Web.UI.SplitterPaneBase.registerClass("Telerik.Web.UI.SplitterPaneBase", Sys.UI.Control);

Telerik.Web.UI.RadPane = function(element)
{
	/// <summary>Initializes a new instance of the Telerik.Web.UI.RadPane class</summary>
	/// <param name='element' type='Object' domElement='true'>The outermost DOM element of RadPane</param>
};
Telerik.Web.UI.RadPane.prototype =
{
	get_index: function()
	{
		/// <summary>Returns the index of the pane in the items collection of the splitter control</summary>
		/// <returns type='Number' integer="true">The index of the pane in the items collection of the splitter control</returns>
	},

	get_splitter: function()
	{
		/// <summary>Returns a reference to the splitter control</summary>
		/// <returns type='Telerik.Web.UI.RadSplitter'>A reference to the splitter control</returns>
	},

	get_parent: function()
	{
		/// <summary>Returns a reference to the splitter control</summary>
		/// <returns type='Telerik.Web.UI.RadSplitter'>A reference to the splitter control</returns>
	},

	set_content: function(contentHtml)
	{
		/// <summary>Sets the HTML content of the pane control</summary>
		/// <param name='contentHtml' type='String'>The HTML content of the pane control</param>
	},

	get_content: function()
	{
		/// <summary>Returns the HTML content of the pane control. In case the ContentUrl property of the pane is set, returns an empty string</summary>
		/// <returns type='String'>The HTML content of the pane control</returns>
	},

	set_contentUrl: function(value)
	{
		/// <summary>Sets the URL of the page to open in the pane</summary>
		/// <param name='value' type='String'>The URL of the page to open in the pane</param>
	},

	get_contentUrl: function()
	{
		/// <summary>Gets the URL of the page that is opened in the pane</summary>
		/// <returns type='String'>The URL of the page that is opened in the pane</returns>
	},

	set_width: function(value)
	{
		/// <summary>Sets the width in pixels of the control</summary>
		/// <param name='value' type='Number' integer="true">The new width in pixels of the control</param>
	},

	set_height: function(value)
	{
		/// <summary>Sets the height in pixels of the control</summary>
		/// <param name='value' type='Number' integer="true">The new height in pixels of the control</param>
	},

	get_locked: function()
	{
		/// <summary>Returns a value, indicating whether the pane is locked, that is, whether the pane can be resized or collapsed</summary>
		/// <returns type='Boolean'>A value, indicating whether the pane is locked</returns>
	},

	set_locked: function(value)
	{
		/// <summary>Sets the locked state of the pane - whether the pane can be resized or collapsed</summary>
		/// <param name='value' type='Boolean'>The new value for the Locked property of the pane control</param>
	},

	resize: function(delta,resizeDirection)
	{
		/// <summary>Resizes the pane control with delta pixels in the specified direction</summary>
		/// <param name='delta' type='Number'>The number of pixels, whith which the pane will resize</param>
		/// <param name='resizeDirection' type='Telerik.Web.UI.SplitterDirection' optional='true'>The direction, in which the pane will resize</param>
	},

	print: function(arrCssFiles)
	{
		/// <summary>Prints the content of the pane</summary>
		/// <param name='arrCssFiles' type='Array' elementType='String' optional='true'>An array with the paths to the style sheets that contain styles for the printed content.
		/// This parameter is used only in case the ContentUrl property of the pane is not set</param>
	},

	collapse: function(direction)
	{
		/// <summary>Collapses the pane in the specified direction</summary>
		/// <param name='direction' type='Telerik.Web.UI.SplitterDirection' optional='true'>The direction, in which the pane should collapse</param>
		/// <returns type='Boolean'>A value, indicating whether the operation completed successfully</returns>
	},

	expand: function(direction)
	{
		/// <summary>Expands the pane in the specified direction</summary>
		/// <param name='direction' type='Telerik.Web.UI.SplitterDirection' optional='true'>The direction, in which the pane should expand</param>
		/// <returns type='Boolean'>A value, indicating whether the operation completed successfully</returns>
	},

	isExternalContent: function()
	{
		/// <summary>Returns a value, indicating whether the pane control is showing external content (content specified using the ContentUrl property)</summary>
		/// <returns type='Boolean'>A value, indicating whether the pane control is showing external content</returns>
	},

	getInnerWidth: function()
	{
		/// <summary>Returns the width of the pane control, excluding the pane borders</summary>
		/// <returns type='Number' >The width of the pane control, excluding the pane borders</returns>
	},

	getInnerHeight: function()
	{
		/// <summary>Returns the height of the pane control, excluding the pane borders</summary>
		/// <returns type='Number' >The height of the pane control, excluding the pane borders</returns>
	},

	isSplitterContainer: function()
	{
		/// <summary>Returns a value, indicating whether the pane contains a splitter control with ResizeWithParentPane set to true</summary>
		/// <returns type='Boolean'>A value, indicating whether the pane contains a splitter control with ResizeWithParentPane set to true</returns>
	},

	getContentElement: function()
	{
		/// <summary>Returns a reference to the HTML element, which is holding the pane content</summary>
		/// <returns type='Object' domElement='true'>The HTML element, which is holding the pane content</returns>
	},

	getExtContentElement: function()
	{
		/// <summary>Returns a reference to the IFRAME element, which is holding the pane content</summary>
		/// <returns type='Object' domElement='true'>The IFRAME element, which is holding the pane content</returns>
	},

	isLocked: function()
	{
		/// <summary>Returns a value, indicating whether the pane is locked, that is, whether the pane can be resized or collapsed</summary>
		/// <returns type='Boolean'>A value, indicating whether the pane is locked, that is, whether the pane can be resized or collapsed</returns>
	},

	lock: function()
	{
		/// <summary>Sets the Locked property of the pane control to true</summary>
	},

	unlock: function()
	{
		/// <summary>Sets the Locked property of the pane control to false</summary>
	},

	get_indexInPanes: function()
	{
		/// <summary>Returns the index of the pane control in the panes collection of the splitter control</summary>
		/// <returns type='Number'>The index of the pane control in the panes collection of the splitter control</returns>
	}
};
Telerik.Web.UI.RadPane.registerClass("Telerik.Web.UI.RadPane",Telerik.Web.UI.SplitterPaneBase);

Telerik.Web.UI.RadSplitBar = function(element)
{
	/// <summary>Initializes a new instance of the Telerik.Web.UI.RadSplitBar class</summary>
	/// <param name='element' type='Object' domElement='true'>The outermost DOM element of RadSplitBar</param>
};
Telerik.Web.UI.RadSplitBar.prototype =
{
	get_index: function()
	{
		/// <summary>Returns the index of the splitbar in the items collection of the splitter control</summary>
		/// <returns type='Number' integer="true">The index of the splitbar in the items collection of the splitter control</returns>
	},

	get_splitter: function()
	{
		/// <summary>Returns a reference to the splitter control</summary>
		/// <returns type='Telerik.Web.UI.RadSplitter'>A reference to the splitter control</returns>
	},

	get_parent: function()
	{
		/// <summary>Returns a reference to the splitter control</summary>
		/// <returns type='Telerik.Web.UI.RadSplitter'>A reference to the splitter control</returns>
	},

	get_collapseMode: function()
	{
		/// <summary>Returns the value of the CollapseMode property of the splitbar control</summary>
		/// <returns type='Telerik.Web.UI.SplitBarCollapseMode'>The value of the CollapseMode property of the splitbar control</returns>
	},

	get_resizeStep: function()
	{
		/// <summary>Returns the value of the ResizeStep property of the splitbar control</summary>
		/// <returns type='Number' integer="true">The value of the ResizeStep property of the splitbar control</returns>
	},

	get_enableResize: function()
	{
		/// <summary>Returns the value of the EnableResize property of the splitbar control</summary>
		/// <returns type='Boolean'>The value of the EnableResize property of the splitbar control</returns>
	},

	get_nextPane: function()
	{
		/// <summary>Returns a reference to the pane control with the smallest index in the items collection of the splitter, which is added to the collection after the splitbar control</summary>
		/// <returns type='Telerik.Web.UI.RadPane' mayBeNull='true'>A reference to the pane control with the smallest index in the items collection of the splitter, which is added to the collection after the splitbar control</returns>
	},

	get_prevPane: function()
	{
		/// <summary>Returns a reference to the pane control with the largest index in the items collection of the splitter, which is added to the collection before the splitbar control</summary>
		/// <returns type='Telerik.Web.UI.RadPane' mayBeNull='true'>A reference to the pane control with the largest index in the items collection of the splitter, which is added to the collection before the splitbar control</returns>
	},

	isCollapseDirectionEnabled: function(direction)
	{
		/// <summary>Returns a value, indicating whether the collapse direction is enabled for the splitbar control</summary>
		/// <param name='direction' type='Telerik.Web.UI.SplitterDirection' optional='false'>The collapse direction to check</param>
		/// <returns type='Boolean'>A value, indicating whether the collapse direction is enabled for the splitbar control</returns>
	},

	getCollapseBarElement: function(direction)
	{
		/// <summary>Returns a reference to the HTML element of the collapse button for the specified direction</summary>
		/// <param name='direction' type='Telerik.Web.UI.SplitterDirection' optional='true'>The collapse direction of the button</param>
		/// <returns type='Object' domElement='true'>A reference to the HTML element of the collapse button for the specified direction</returns>
	},

	isCollapsed: function(direction)
	{
		/// <summary>Returns a value, indicating whether the splitbar is collapsed in the specified direction</summary>
		/// <param name='direction' type='Telerik.Web.UI.SplitterDirection' optional='false'>The collapse direction to check</param>
		/// <returns type='Boolean'>A value, indicating whether the splitbar is collapsed in the specified direction</returns>
	},

	getWidth: function()
	{
		/// <summary>Returns the outer width of the splitbar control</summary>
		/// <returns type='Number'>The outer width of the splitbar control</returns>
	},

	getHeight: function()
	{
		/// <summary>Return the outer heigh of the splitbar control</summary>
		/// <returns type='Number'>The outer heigh of the splitbar control</returns>
	}
};
Telerik.Web.UI.RadSplitBar.registerClass("Telerik.Web.UI.RadSplitBar", Sys.UI.Control);

Telerik.Web.UI.RadSlidingPane = function(element)
{
	/// <summary>Initializes a new instance of the Telerik.Web.UI.RadSlidingPane class</summary>
	/// <param name='element' type='Object' domElement='true'>The outermost DOM element of RadSlidingPane</param>
};
Telerik.Web.UI.RadSlidingPane.prototype =
{
	get_index: function()
	{
		/// <summary>Returns the index of the sliding pane in the items collection of the sliding zone control</summary>
		/// <returns type='Number' integer="true">The index of the sliding pane in the items collection of the sliding zone control</returns>
	},

	get_splitter: function()
	{
		/// <summary>Returns a reference to the splitter control</summary>
		/// <returns type='Telerik.Web.UI.RadSplitter'>A reference to the splitter control</returns>
	},

	get_parent: function()
	{
		/// <summary>Returns a reference to the sliding zone control</summary>
		/// <returns type='Telerik.Web.UI.RadSlidingZone'>A reference to the sliding zone control</returns>
	},

	get_enableResize: function()
	{
		/// <summary>Returns a value, indicating whether the sliding pane control can be resized</summary>
		/// <returns type='Boolean'>A value, indicating whether the sliding pane control can be resized</returns>
	},

	get_enableDock: function()
	{
		/// <summary>Returns a value, indicating whether the sliding pane control can be docked</summary>
		/// <returns type='Boolean'>A value, indicating whether the sliding pane control can be docked</returns>
	},

	get_dockOnOpen: function()
	{
		/// <summary>Returns a value, indicating whether the sliding pane control will open in docked state</summary>
		/// <returns type='Boolean'>A value, indicating whether the sliding pane control will open in docked state</returns>
	},

	set_title: function(value)
	{
		/// <summary>Sets the title of the sliding pane control</summary>
		/// <param name='value' type='String' optional='false'>The new title of the sliding pane control</param>
	},

	get_title: function()
	{
		/// <summary>Gets the title of the sliding pane control</summary>
		/// <returns type='String'>The title of the sliding pane control</returns>
	},

	get_expanded: function()
	{
		/// <summary>Returns a value, indicating whether the sliding pane is expanded</summary>
		/// <returns type='Boolean'>A value, indicating whether the sliding pane is expanded</returns>
	},

	get_docked: function()
	{
		/// <summary>Returns a value, indicating whether the sliding pane is docked</summary>
		/// <returns type='Boolean'>A value, indicating whether the sliding pane is docked</returns>
	},

	get_parentPane: function()
	{
		/// <summary>Returns a reference to the pane control that contains the sliding zone of the sliding pane control</summary>
		/// <returns type='Telerik.Web.UI.RadPane' mayBeNull='false'>A reference to the pane control that contains the sliding zone of the sliding pane control</returns>
	},

	add_docked: function(handler)
	{
		/// <summary>Adds a handler for the docked event</summary>
		/// <param name="handler" type="Function">The handler for the docked event</param>
	},

	remove_docked: function(handler)
	{
		/// <summary>Removes a handler for the docked event</summary>
		/// <param name="handler" type="Function">The handler for the docked event</param>
	},

	add_undocked: function(handler)
	{
		/// <summary>Adds a handler for the undocked event</summary>
		/// <param name="handler" type="Function">The handler for the undocked event</param>
	},

	remove_undocked: function(handler)
	{
		/// <summary>Removes a handler for the undocked event</summary>
		/// <param name="handler" type="Function">The handler for the undocked event</param>
	},

	add_docking: function(handler)
	{
		/// <summary>Adds a handler for the docking event</summary>
		/// <param name="handler" type="Function">The handler for the docking event</param>
	},

	remove_docking: function(handler)
	{
		/// <summary>Removes a handler for the docking event</summary>
		/// <param name="handler" type="Function">The handler for the docking event</param>
	},

	add_undocking: function(handler)
	{
		/// <summary>Adds a handler for the undocking event</summary>
		/// <param name="handler" type="Function">The handler for the undocking event</param>
	},

	remove_undocking: function(handler)
	{
		/// <summary>Removes a handler for the undocking event</summary>
		/// <param name="handler" type="Function">The handler for the undocking event</param>
	},

	getContentContainer: function()
	{
		/// <summary>Gets the HTML element, which is holding the pane content</summary>
		/// <returns type='Object' domElement='true'>The HTML element, which is holding the pane content</returns>
	},

	get_pane: function()
	{
		/// <summary>Returns a reference to the outer most HTML element of the pane control that is holding the sliding zone of the sliding pane control</summary>
		/// <returns type='Object' domElement='true' mayBeNull='false'>a reference to the outer most HTML element of the pane control that is holding the sliding zone of the sliding pane control</returns>
	},

	get_paneBounds: function()
	{
		/// <summary>Gets the bounds of the pane control that is holding the sliding zone of the sliding pane control in the form {width,height,x,y}</summary>
		/// <returns type='Object'>The bounds of the pane control that is holding the sliding zone of the sliding pane control in the form {width,height,x,y}</returns>
	},

	get_slidingPaneBounds: function()
	{
		/// <summary>Gets the bounds of the sliding pane control in the form {width,height,x,y}</summary>
		/// <returns type='Object'>The bounds of the sliding pane control in the form {width,height,x,y}</returns>
	},

	getContent: function()
	{
		/// <summary>Returns the HTML content of the sliding pane control</summary>
		/// <returns type='String'>The HTML content of the sliding pane control</returns>
	},

	setContent: function(content)
	{
		/// <summary>Sets the HTML content of the sliding pane control</summary>
		/// <param name='content' type='String' optional='false'>The new HTML content of the sliding pane control</param>
	},

	getDockIconElement: function()
	{
		/// <summary>Returns a reference to the HTML element, which represents the dock icon of the sliding pane control</summary>
		/// <returns type='Object' domElement='true'>A reference to the HTML element, which represents the dock icon of the sliding pane control</returns>
	},

	getDockIconWrapperElement: function()
	{
		/// <summary>Returns a reference to the HTML element, which holds the dock icon of the sliding pane control</summary>
		/// <returns type='Object' domElement='true'>A reference to the HTML element, which holds the dock icon of the sliding pane control</returns>
	},

	getUndockIconElement: function()
	{
		/// <summary>Returns a reference to the HTML element, which represents the undock icon of the sliding pane control</summary>
		/// <returns type='Object' domElement='true'>A reference to the HTML element, which represents the undock icon of the sliding pane control</returns>
	},

	getUnDockIconWrapperElement: function()
	{
		/// <summary>Returns a reference to the HTML element, which holds the undock icon of the sliding pane control</summary>
		/// <returns type='Object' domElement='true'>A reference to the HTML element, which holds the undock icon of the sliding pane control</returns>
	},

	getCollapseIconElement: function()
	{
		/// <summary>Returns a reference to the HTML element, which represents the collapse icon of the sliding pane control</summary>
		/// <returns type='Object' domElement='true'>A reference to the HTML element, which represents the collapse icon of the sliding pane control</returns>
	},

	getCollapseIconWrapperElement: function()
	{
		/// <summary>Returns a reference to the HTML element, which holds the collapse icon of the sliding pane control</summary>
		/// <returns type='Object' domElement='true'>A reference to the HTML element, which holds the collapse icon of the sliding pane control</returns>
	},

	getSlidingContainerTitle: function()
	{
		/// <summary>Returns a reference to the title HTML element of the sliding pane control</summary>
		/// <returns type='Object' domElement='true'>A reference to the title HTML element of the sliding pane control</returns>
	},

	getSlidingPaneResizeContainer: function()
	{
		/// <summary>Returns a reference to the resize HTML element of the sliding pane control</summary>
		/// <returns type='Object' domElement='true'>A reference to the resize HTML element of the sliding pane control</returns>
	},

	getTabContainer: function()
	{
		/// <summary>Returns a reference to the HTML element, which holds the tab of the sliding pane control</summary>
		/// <returns type='Object' domElement='true'>A reference to the HTML element, which holds the tab of the sliding pane control</returns>
	},

	hideTab: function()
	{
		/// <summary>Hides the tab for the sliding pane control</summary>
	},

	showTab: function()
	{
		/// <summary>Shows the tab for the sliding pane control</summary>
	},

	isTabDisplayed: function()
	{
		/// <summary>Return true if the tab for this pane is displayed</summary>
		/// <returns type='Boolean'>A value, indicating whether the tab of the sliding pane control is visible</returns>
	}
};
Telerik.Web.UI.RadSlidingPane.registerClass('Telerik.Web.UI.RadSlidingPane',Telerik.Web.UI.SplitterPaneBase);

Telerik.Web.UI.RadSlidingZone = function(element)
{
	/// <summary>Initializes a new instance of the Telerik.Web.UI.RadSlidingZone class</summary>
	/// <param name='element' type='Object' domElement='true'>The outermost DOM element of RadSlidingZone</param>
};
Telerik.Web.UI.RadSlidingZone.prototype =
{
	get_clickToOpen: function()
	{
		/// <summary>Gets the value of the ClickToOpen property of the sliding zone control</summary>
		/// <returns type='Boolean'>The value of the ClickToOpen property of the sliding zone control</returns>
	},

	get_resizeStep: function()
	{
		/// <summary>Gets the value of the ResizeStep property of the sliding zone control</summary>
		/// <returns type='Number' integer="true">The value of the ResizeStep property of the sliding zone control</returns>
	},

	get_slideDuration: function()
	{
		/// <summary>Gets the value of the SlideDuration property of the sliding zone control</summary>
		/// <returns type='Number' integer="true">The value of the SlideDuration property of the sliding zone control</returns>
	},

	get_width: function()
	{
		/// <summary>Gets the width of the sliding zone control</summary>
		/// <returns type='Number' integer="true">The width of the sliding zone control</returns>
	},

	get_height: function()
	{
		/// <summary>Gets the height of the sliding zone control</summary>
		/// <returns type='Number' integer="true">The height of the sliding zone control</returns>
	},

	get_expandedPaneId: function()
	{
		/// <summary>Gets the ID of the currently expanded sliding pane</summary>
		/// <returns type='String' mayBeNull='true'>The ID of the currently expanded sliding pane</returns>
	},

	get_dockedPaneId: function()
	{
		/// <summary>Gets the ID of the currently docked sliding pane</summary>
		/// <returns type='String' mayBeNull='true'>The ID of the currently docked sliding pane</returns>
	},

	get_parent: function()
	{
		/// <summary>Returns a reference to the pane control, which holds the sliding zone control</summary>
		/// <returns type='Telerik.Web.UI.RadPane' mayBeNull='false'>A reference to the pane control, which holds the sliding zone control</returns>
	},

	get_splitter: function()
	{
		/// <summary>Returns a reference to the splitter control, which holds the sliding zone control</summary>
		/// <returns type='Telerik.Web.UI.RadSplitter' mayBeNull='false'>A reference to the splitter control, which holds the sliding zone control</returns>
	},

	add_load: function(handler)
	{
		/// <summary>Adds a handler for the load event</summary>
		/// <param name="handler" type="Function">The handler for the load event</param>
	},

	remove_load: function(handler)
	{
		/// <summary>Removes a handler for the load event</summary>
		/// <param name="handler" type="Function">The handler for the load event</param>
	},

	getPaneById: function(paneId)
	{
		/// <summary>Returns a reference to the sliding pane with the specified id</summary>
		/// <param name='paneId' type='String' optional='false'>The id of the sliding pane to search for</param>
		/// <returns type='Telerik.Web.UI.RadSlidingPane' mayBeNull='true'>A reference to the sliding pane with the specified id</returns>
	},

	getTabsContainer: function()
	{
		/// <summary>Returns a reference to the HTML element that holds all tab elements of sliding panes</summary>
		/// <returns type='Object' domElement='true'>A reference to the HTML element that holds all tab elements of sliding panes</returns>
	},

	dockPane: function(paneId)
	{
		/// <summary>Docks the sliding pane with the given id</summary>
		/// <param name='paneId' type='String' optional='false'>The id of the sliding pane to dock</param>
		/// <returns type='Boolean'>A value, indicating whether the operation completed successfully</returns>
	},

	undockPane: function(paneId)
	{
		/// <summary>Undocks the sliding pane with the given id</summary>
		/// <param name='paneId' type='String' optional='false'>The id of the sliding pane to undock</param>
		/// <returns type='Boolean'>A value, indicating whether the operation completed successfully</returns>
	},

	getPanes: function()
	{
		/// <summary>Returns an array with all the sliding panes, defined in the items collection of the sliding zone control</summary>
		/// <returns type='Array' elementType='Telerik.Web.UI.RadSlidingPane'>An array with all the sliding panes, defined in the items collection of the sliding zone control</returns>
	},

	expandPane: function(paneId)
	{
		/// <summary>Expands the sliding pane with the given id</summary>
		/// <param name='paneId' type='String' optional='false'>The id of the sliding pane to expand</param>
		/// <returns type='Boolean'>A value, indicating whether the operation completed successfully</returns>
	},

	collapsePane: function(paneId)
	{
		/// <summary>Collapses the sliding pane with the given id</summary>
		/// <param name='paneId' type='String' optional='false'>The id of the sliding pane to collapse</param>
		/// <returns type='Boolean'>A value, indicating whether the operation completed successfully</returns>
	},

	isLeftDirection: function()
	{
		/// <summary>Returns a value, indicating whether the SlideDirection of the sliding zone control is left</summary>
		/// <returns type='Boolean'>A value, indicating whether the SlideDirection of the sliding zone control is left</returns>
	},

	isRightDirection: function()
	{
		/// <summary>Returns a value, indicating whether the SlideDirection of the sliding zone control is right</summary>
		/// <returns type='Boolean'>A value, indicating whether the SlideDirection of the sliding zone control is right</returns>
	},

	isTopDirection: function()
	{
		/// <summary>Returns a value, indicating whether the SlideDirection of the sliding zone control is top</summary>
		/// <returns type='Boolean'>A value, indicating whether the SlideDirection of the sliding zone control is top</returns>
	},

	isBottomDirection: function()
	{
		/// <summary>Returns a value, indicating whether the SlideDirection of the sliding zone control is bottom</summary>
		/// <returns type='Boolean'>A value, indicating whether the SlideDirection of the sliding zone control is bottom</returns>
	}
};
Telerik.Web.UI.RadSlidingZone.registerClass("Telerik.Web.UI.RadSlidingZone", Sys.UI.Control);$telerik.findMultiPage = function (id, parent) {
    /// <summary>Finds a RadMultiPage instance</summary>
    /// <param name="id">A string that contains ID of the RadMultiPage to find</param>
    /// <param name="parent" optional="true">The component or element that contains the RadMultiPage to find</param>
    /// <returns type="Telerik.Web.UI.RadMultiPage">The RadMultiPage instance</returns>
};

$telerik.toMultiPage = function(object) {
    /// <summary>Casts an object to a RadMultiPage instance</summary>
    /// <returns type="Telerik.Web.UI.RadMultiPage">A RadMultiPage instance<returns>
};

Telerik.Web.UI.RadMultiPage = function(element) {
    /// <summary>Initializes a new instance of RadMultiPage</summary>
}
Telerik.Web.UI.RadMultiPage.prototype = {
        trackChanges: function() {
        /// <summary>
        /// Begins tracking changes to the multipage. Only changes that occur between a call to trackChanges
        /// and commitChanges persist after a postback.
        /// </summary>
        },
        commitChanges: function() {
        /// <summary>
        /// Ends tracking changes to the multipage. Only changes that occur between a call to trackChanges
        /// and commitChanges persist after a postback.
        /// </summary>
        },       
        findPageViewByID: function(id) {
        ///<summary>Gets the first page view instance, whose id corresponds to the passed parameter.</summary>
        ///<param name="id" type="String">The id to look for</param>
        ///<returns type="Telerik.Web.UI.RadPageView" >The page view with the corresponding Id; null if not found</return>
        },       
        get_pageViews: function() {
        ///<summary>Returns a collection of all pageviews.</summary>
        ///<returns type="Telerik.Web.UI.RadPageViewCollection" >A collection of all pageviews</return>
        },
        get_selectedIndex: function() {
        ///<summary>Returns the index of the selected pageview.</summary>
        ///<returns type="Number" >the index of the selected pageview</return>
        },
        set_selectedIndex: function(value) {
        ///<summary>Sets the selected index of the multipage.</summary>
        ///<param  name="value" type="Number">the selected index of the multipage</param>
        },
        get_selectedPageView: function() {
        ///<summary>Returns the currently selected pageview.</summary>
        ///<returns type="Telerik.Web.UI.RadPageView" >the currently selected pageview</return>
        }
}

Telerik.Web.UI.RadPageView = function(element) {
}
Telerik.Web.UI.RadPageView.prototype = {
        hide: function() {
        ///<summary>Hides the pageview.</summary>
        },
        show: function() {
        ///<summary>Shows the pageview.</summary>
        },
        select: function() {
        ///<summary>Selects the pageview.</summary>
        },
        unselect: function() {
        ///<summary>Unselects the pageview.</summary>
        },
        get_element: function() {
        ///<summary>Gets the DOM element for the pageview.</summary>
        ///<returns domElement="true" >the DOM element for the pageview</return>
        },
        get_index: function() {
        ///<summary>Returns the index of the pageview.</summary>
        ///<returns type="Number">the index of the pageview</return>
        },
        get_id: function() {
        ///<summary>Gets the ID of the pageview.</summary>
        ///<returns type="String" >the ID of the pageview</return>
        },
        get_multiPage: function() {
        ///<summary>Gets the MultiPage containing the pageview.</summary>
        ///<returns type="Telerik.Web.UI.RadMultiPage" >the MultiPage containing the pageview</return>
        },
        get_selected: function() {
        ///<summary>Returns true if the pageview is selected.</summary>
        ///<returns type="Boolean" >true if the pageview is selected</return>
        },
        set_selected: function(value) {
        ///<summary>Sets a value indicating if the pageview is selected.</summary>
        ///<param name="value" type="Boolean">A value indicating if the pageview is selected</param>
        }
}

Telerik.Web.UI.RadPageViewCollection = function(owner) {
}
Telerik.Web.UI.RadPageViewCollection.prototype = {
        insert: function(index, pageView) {
			/// <summary>
			/// Inserts the specified pageview at the specified index in the collection.
			/// </summary>
            /// <param name="index" type="Number">
            /// The index at which to insert the pageview
            /// </param>
			/// <param name="pageView" type="Telerik.Web.UI.RadPageView" optional="false" mayBeNull="false">
			/// The pageview to add.
			/// </param>
        },
        add: function(pageView) {
			/// <summary>
			/// Adds the specified pageview to the collection.
			/// </summary>
			/// <param name="pageView" type="Telerik.Web.UI.RadPageView" optional="false" mayBeNull="false">
			/// The pageview to add.
			/// </param>
        },
        getPageView: function(index) {
			/// <summary>
			/// Gets the pageview at the specified index in the collection.
			/// </summary>
			/// <param name="index" type="Number">
			/// The index from which to retrieve the pageview
			/// </param>
			/// <returns type="Telerik.Web.UI.RadPageView">
			/// The pageview at the specified index.
			/// </returns>
        },
        removeAt: function(index) {
			/// <summary>
			/// Removes the pageview at the specified index from the collection.
			/// </summary>
            /// <param name="index" type="Number">
            /// The index from which to remove the pageview
            /// </param>
        },
        remove: function(pageView) {
			/// <summary>
			/// Removes the specified pageview to the collection.
			/// </summary>
			/// <param name="pageView" type="Telerik.Web.UI.RadPageView" optional="false" mayBeNull="false">
			/// The pageview to remove.
			/// </param>
        },
        get_count: function() {
			/// <summary>
			/// Gets the number of pageviews in the collection.
			/// </summary>
			/// <returns type="Number">
			/// The number of pageviews in the collection
			/// </returns>
        }
}
$telerik.findTabStrip = function (id, parent) {
    /// <summary>Finds a RadTabStrip instance</summary>
    /// <param name="id">A string that contains ID of the RadTabStrip to find</param>
    /// <param name="parent" optional="true">The component or element that contains the RadTabStrip to find</param>
    /// <returns type="Telerik.Web.UI.RadTabStrip">The RadTabStrip instance</returns>
};

$telerik.toTabStrip = function(object) {
    /// <summary>Casts an object to a RadTabStrip instance</summary>
    /// <returns type="Telerik.Web.UI.RadTabStrip">A RadTabStrip instance<returns>
};

Telerik.Web.UI.RadTabStrip = function(element) {
    /// <summary>Initializes a new instance of RadTabStrip</summary>
    /// <param name="element" domElement="true">The outermost DOM element of RadTabStrip</param>    
}
Telerik.Web.UI.RadTabStrip.prototype = {
        
        commitChanges: function() {
        /// <summary>
        /// Ends tracking changes to the tabs. Only changes to the tabs that occur between
        /// a call to trackChanges and commitChanges persist after a postback.
        /// </summary>
        },
        enable: function() {
        ///<summary>Enables all tabs in the tab strip.</summary>
        },
        disable: function() {
        ///<summary>Disables all tabs in the tab strip. Clicking on any tab has no effect, child tabs cannot be opened.</summary>
        },        
        findTabByText: function(text) {
        ///<summary>Returns the first RadTab object whose Text property is equal to the passed parameter.</summary>
        ///<param name="text" type="String">Text to find</param>
        ///<returns type="Telerik.Web.UI.RadTab">The first RadTab instance with matching text; null if none is found</returns>
        },
        findTabByValue: function(value) {
        ///<summary>Returns the first RadTab object whose Value property is equal to the passed parameter.</summary>
        ///<param name="value" type="String">Value to find</param>
        ///<returns type="Telerik.Web.UI.RadTab">The first RadTab instance with matching value; null if none is found</returns>
        },
        findTabByAttribute: function(attributeName, attributeValue) {
        ///<summary>Returns the first RadTab object with a custom attribute of the specified name that has the specified value.</summary>
        ///<param name="attributeName" type="String">The attribute name to search for</param>
        ///<param name="attributeValue" type="String">The attribute value to search for</param>
        ///<returns type="Telerik.Web.UIRadTab">The first RadTab instance with matching attribute; null if none is found</returns>
        },
        findTabByUrl: function(value) {
        ///<summary>Returns the first;RadTab object whose NavigateUrl property is equal to the passed parameter.</summary>
        ///<param name="value" type="String">The navigateUrl to find</param>
        ///<returns type="Telerik.Web.UI.RadTab">The first RadTab instance with matching navigateUrl; null if none is found</returns>
        },
        findTabByAbsoluteUrl: function(value) {
        /// <summary>
        /// Returns the first RadTab instance whose NavigateUrl property is equal to the passed parameter.
        /// Note that the parameter should end with "/" like "http://www.test.com/"
        /// </summary>
        /// <param name="value" type="String">The absolute Url to find</param>
        /// <returns type="Telerik.Web.UI.RadTab">The RadTab instance with matching absolute Url; null if none is found</returns>
        },
        set_enabled: function(value) {
        /// <summary>Enables or disables all tabs in the tab strip.</summary>
        /// <param name="value" type="Boolean">true to enable the tab strip; false to disable it</param>
        },
        get_unselectChildren: function() {
        /// <summary>Gets a value determining whether child tabs are unselected when a parent tab is unselected.</summary>
        /// <returns type="Boolean">
        /// true if child tabs are unselected when a parent tab is
		/// unselected. false if the tabs persist their state even when hidden.
		/// The default value is false.
        /// </returns>
        },
        set_unselectChildren: function(value) {
        /// <summary>Sets a value determining whether child tabs are unselected when a parent tab is unselected.</summary>
        /// <param name="value" type="Boolean" mayBeNull="false" optional="false">
        /// true if child tabs are unselected when a parent tab is unselected; false otherwise.
        /// </param>
        },
        get_selectedIndexes: function() {
        /// <summary>Gets a collection of the indexes of all selected tabs.</summary>
        /// <returns type="Array" elementType="String">
        /// an array with the indexes of all selected tabs.
        /// </returns>
        },
        get_selectedTab: function() {
        ///<summary>Returns the root level selected tab. Null if no root tab has been selected.</summary>
        ///<returns type="Telerik.Web.UI.RadTab">The selected root tab; null if no root tab is selected</returns>
        },
        get_selectedIndex: function() {
        ///<summary>Returns the index of the currently selected root tab</summary>
        ///<returns type="String">The index of the currently selected root tab; null if no root tab is selected</returns>
        },
        get_levelElement: function() {
        ///<summary>Gets the DOM element of the root level wrapper (rtsLevel)</summary>
        ///<returns domElement="true"> The DOM element of the root level wrapper </returns>
        },
        get_childListElement: function() {
        ///<summary>Gets the root tab list (rtsUL) DOM element.</summary>
        ///<returns domElement="true" > The root tab list DOM element </returns>
        },
        get_tabs: function() {
        ///<summary>Returns a collection of root level tabs.</summary>
        ///<returns type="Telerik.Web.UI.RadTabCollection" >Collection of root tabs</returns>
        },
        get_clickSelectedTab: function() {
        ///<summary>Gets a value indicating whether the tabstrip should postback when the user clicks the currently selected tab.</summary>
        ///<returns type="Boolean">
        /// A value indicating whether the tabstrip should postback when the user clicks the currently selected tab
        ///</returns>
        },
        set_clickSelectedTab: function(value) {
        ///<summary>Sets a value indicating whether the tabstrip should postback when the user clicks the currently selected tab.</summary>
        ///<param name="value" type="Boolean">A value indicating whether the tabstrip should postback when the user clicks the currently selected tab</param>
        },
        get_allTabs: function() {
        ///<summary>Gets a collection of all tabs. This includes all root and child tabs in the tab strip.</summary>
        ///<returns type="Array" elementType="Telerik.Web.UI.RadTab">An array of all tabs</returns>
        },
        get_multiPage: function() {
        ///<summary>Gets the RadMultiPage instance associated with this tab strip</summary>
        ///<returns type="Telerik.Web.UI.RadMultiPage">The RadMultiPage instance associated with this tab strip; null if none exists</returns>
        },
        set_multiPageID: function(value) {
        ///<summary>Sets the ID of the associated RadMultiPage.</summary>
        ///<param name="value" type="String">The ID of the associated RadMultiPage</param>
        },
        get_multiPageID: function() {
        ///<summary>Returns the ID of the associated RadMultiPage, if any.</summary>
        ///<returns type="String" >The ID of the associated RadMultiPage, if any</returns>
        }
        
}

Telerik.Web.UI.RadTabCollection = function(parent) {
    /// <summary>Initializes a new instance of RadTabStrip tabs collection</summary>
}
Telerik.Web.UI.RadTabCollection.prototype = {
        getTab: function(index) {
        ///<summary>Returns the tab from the collection that resides at the specified index.</summary>
        ///<param  name="index" type="Number">The index from which to retrieve tha tab </param>
        ///<returns type="Telerik.Web.UI.RadTab" >The tab at the specified index</returns>
        }
}

Telerik.Web.UI.RadTab = function() {
    /// <summary>Initializes a new instance of RadTab</summary>
}
Telerik.Web.UI.RadTab.prototype = {
        scrollIntoView: function() {
        ///<summary>Scrolls to the tab into view.</summary>
        },
        click: function(e) {
        ///<summary>Causes server side click to occur.</summary>
        },
        selectParents: function() {
        ///<summary>Selects all parents of this tab</summary>
        },
        select: function() {
        ///<summary>Selects the tab.</summary>
        },
        unselect: function() {
        ///<summary>Unselects the tab.</summary>
        },
        enable: function() {
        ///<summary>Enables the tab if it is disabled.</summary>
        },
        disable: function() {
        ///<summary>Disables the tab.</summary>
        },
        show: function() {
        ///<summary>Shows the tab if it was hidden.</summary>
        },
        hide: function() {
        ///<summary>Hides the tab.</summary>
        },
        get_nextTab: function() {
        ///<summary>Returns the next sibling</summary>
        ///<returns type="Telerik.Web.UI.RadTab">The next tab</returns>
        },
        get_previousTab: function() {
        ///<summary>Returns the previous sibling</summary>
        ///<returns type="Telerik.Web.UI.RadTab">The previous tab</returns>
        },
        get_pageView: function() {
        ///<summary>Returns the pageview associated with the tab.</summary>
        ///<returns type="Telerik.Web.UI.RadPageView" >The RadPageView associated with the tab</returns>
        },
        get_pageViewID: function() {
        ///<summary>Returns the ID of the pageview.</summary>
        ///<returns type="String" >The ID of the associated pageview</returns>
        },
        set_pageViewID: function(value) {
        ///<summary>Returns the ID of the associated pageview, if any.</summary>
        ///<returns type="String" >The ID of the associated pageview, if any</returns>
        },
        get_target: function() {
        ///<summary>Gets the target window or frame in which to display the Web page content associated with the current tab.</summary>
        ///<returns type="String">The target window or frame in which to display the Web page content associated with the current tab</returns>
        },
        set_target: function(value) {
        ///<summary>Sets the target window or frame in which to display the Web page content associated with the current tab</summary>
        ///<param name="value" type="String">The target window or frame in which to display the Web page content associated with the current tab</param>
        },
        get_navigateUrl: function() {
        ///<summary>Gets the URL of the Web page the tab navigates to.</summary>
        ///<returns type="String" >The URL of the Web page the tab navigates to</returns>
        },
        set_navigateUrl: function(value) {
        ///<summary>Sets the URL of the Web page the tab navigates to</summary>
        ///<param name="value" type="String"> The URL of the Web page the tab navigates to</param>
        },
        get_postBack: function() {
        ///<summary>Gets a value indicating whether clicking on the tab will postback</summary>
        ///<returns type="Boolean">true if the node should postback; otherwise false</returns>
        },
        set_postBack: function(value) {
        ///<summary>Sets a value indicating whether clicking on the tab will postback</summary>
        ///<param name="value" type="Boolean">true if the node should postback; otherwise false</param>
        },
        get_selected: function() {
        ///<summary>Returns whether the tab is selected.</summary>
        ///<returns type="Boolean" >true if the tab is selected, false otherwise</returns>
        },
        set_selected: function(value) {
        ///<summary>Sets a value indicating if the tab is selected.</summary>
        ///<param name="value" type="Boolean">A value indicating if the tab is selected</param>
        },
        get_selectedIndex: function() {
        ///<summary>Gets the index of the selected child tab, if any</summary>
        ///<returns type="Number">The index of the selected child tab, if any</returns>
        },
        set_selectedIndex: function(value) {
        ///<summary>Sets the selected child tab index to the specified value</summary>
        ///<param name="value" type="Number">The selected child tab index </returns>
        },
        get_selectedTab: function() {
        ///<summary>Gets the selected tab instance, if any</summary>
        ///<returns type="Telerik.Web.UI.RadTab">The selected tab instance; null if no tab is selected</returns>
        },
        get_tabStrip: function() {
        ///<summary>Returns the instance of the tabstrip that contains the tab.</summary>
        ///<returns type="Telerik.Web.UI.RadTabStrip" >The instance of the tabstrip that contains the tab</returns>
        },
        get_isSeparator: function() {
        ///<summary>Returns true if the tab is a separator; false for other tabs</summary>
        ///<returns type="Boolean" >true if the tab is a separator; false for other tabs</returns>
        },
        set_isSeparator: function(value) {
        ///<summary>Sets a value indicating if the tab is a separator</summary>
        ///<param name="value" type="Boolean"> A value indicating if the tab is a separator</param>
        },
        get_levelElement: function() {
        ///<summary>Gets the DOM element of the level wrapper (rtsLevel)</summary>
        ///<returns domElement="true"> The DOM element of the level wrapper </returns>
        },
        get_textElement: function() {
        ///<summary>Gets the DOM element that contains the tab text (rtsTxt).</summary>
        ///<returns domElement="true"> The DOM element that contains the tab text</returns>
        },
        get_linkElement: function() {
        ///<summary>Gets the anchor DOM element of the tab (rtsLink).</summary>
        ///<returns domElement="true"> The anchor DOM element of the tab</returns>
        },
        get_imageElement: function() {
        ///<summary>Gets the image DOM element of the tab (rtsImg).</summary>
        ///<returns domElement="true">The DOM element of the tab image; null if no image is set</returns>
        },
        get_outerWrapElement: function() {
        ///<summary>Gets the outer wrap DOM element of tab (rtsOut)</summary>
        ///<returns domElement="true">The outer wrap DOM element</summary>
        },
        get_innerWrapElement: function() {
        ///<summary>Gets the inner wrap DOM element of tab (rtsIn)</summary>
        ///<returns domElement="true">The inner wrap DOM element</summary>
        },
        get_childListElement: function() {
        ///<summary>Gets the tab list (rtsUL) DOM element.</summary>
        ///<returns domElement="true" > The tab list DOM element </returns>
        },
        get_tabs: function() {
        ///<summary>Returns a collection of child tabs.</summary>
        ///<returns type="Telerik.Web.UI.RadTabCollection" >Collection of child tabs</returns>
        },
        set_visible: function(value) {
        ///<summary>Sets a value indicating if the tab is visible.</summary>
        ///<param name="value" type="boolean">A value indicating if the tab is visible</param>
        },
        get_visible: function() {
        ///<summary>Gets a value indicating if the tab is visible.</summary>
        ///<returns type="Boolean" >true if the tab is visible; false otherwise</returns>
        },
        set_enabled: function(value) {
        ///<summary>Sets a value indicating if the tab is enabled.</summary>
        ///<param name="value" type="boolean">A value indicating if the tab is enabled</param>
        },
        get_disabledCssClass: function() {
        /// <summary>
        /// Gets the CSS class name to be added when the tab is disabled.
        /// </summary>
        /// <returns type="String">
        /// The CSS class name to be added when the tab is disabled.
        /// </returns>
        },
        set_disabledCssClass: function(value) {
        /// <summary>
        /// Sets the CSS class name to be added when the tab is disabled.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The CSS class name to be added when the tab is disabled.
        /// </param>
        },
        get_selectedCssClass: function() {
        /// <summary>
        /// Gets the CSS class name to be added when the tab is selected.
        /// </summary>
        /// <returns type="String">
        /// The CSS class name to be added when the tab is selected.
        /// </returns>
        },
        set_selectedCssClass: function(value) {
        /// <summary>
        /// Sets the CSS class name to be added when the tab is selected.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The CSS class name to be added when the tab is selected.
        /// </param>
        },
        get_hoveredCssClass: function() {
        /// <summary>
        /// Gets the CSS class name to be added when the tab is hovered.
        /// </summary>
        /// <returns type="String">
        /// The CSS class name to be added when the tab is hovered.
        /// </returns>
        },
        set_hoveredCssClass: function(value) {
        /// <summary>
        /// Sets the CSS class name to be added when the tab is hovered.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The CSS class name to be added when the tab is hovered.
        /// </param>
        },
        get_cssClass: function() {
        /// <summary>
        /// Gets the CSS class name to be set to the tab.
        /// </summary>
        /// <returns type="String">
        /// The CSS class name to be set to the tab.
        /// </returns>
        },
        set_cssClass: function(value) {
        /// <summary>
        /// Sets the CSS class name to be set to the tab.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The CSS class name to be set to the tab.
        /// </param>
        },
        get_imageUrl: function() {
        /// <summary>
        /// Gets the URL to an image which is displayed next to the text of a tab.
        /// </summary>
        /// <returns type="String">
        /// The URL to an image which is displayed next to the text of a tab.
        /// </returns>
        },
        set_imageUrl: function(value) {
        /// <summary>
        /// Sets the URL to an image which is displayed next to the text of a tab.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The URL to an image which is displayed next to the text of a tab.
        /// </param>
        },
        get_selectedImageUrl: function() {
        /// <summary>
        /// Gets the URL to an image which is displayed next to the text of a tab when it is selected.
        /// </summary>
        /// <returns type="String">
        /// The URL to an image which is displayed next to the text of a tab when it is selected.
        /// </returns>
        },
        set_selectedImageUrl: function(value) {
        /// <summary>
        /// Sets the URL to an image which is displayed next to the text of a tab when it is selected.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The URL to an image which is displayed next to the text of a tab when it is selected.
        /// </param>
        },
        get_disabledImageUrl: function() {
        /// <summary>
        /// Gets the URL to an image which is displayed next to the text of a tab when it is disabled.
        /// </summary>
        /// <returns type="String">
        /// The URL to an image which is displayed next to the text of a tab when it is disabled.
        /// </returns>
        },
        set_disabledImageUrl: function(value) {
        /// <summary>
        /// Sets the URL to an image which is displayed next to the text of a tab when it is disabled.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The URL to an image which is displayed next to the text of a tab when it is disabled.
        /// </param>
        },
        get_hoveredImageUrl: function() {
        /// <summary>
        /// Gets the URL to an image which is displayed next to the text of a tab when it is hovered.
        /// </summary>
        /// <returns type="String">
        /// The URL to an image which is displayed next to the text of a tab when it is hovered.
        /// </returns>
        },
        set_hoveredImageUrl: function(value) {
        /// <summary>
        /// Sets the URL to an image which is displayed next to the text of a tab when it is hovered.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false">
        /// The URL to an image which is displayed next to the text of a tab when it is hovered.
        /// </param>
        },
        get_isBreak: function() {
        ///<summary>Gets a value indicating whether the next tab will be displayed on a new line</summary>
        ///<returns type="Boolean" >true if the next tab should be displayed on a new line; otherwise false</returns>
        },
        set_isBreak: function(value) {
        ///<summary>Sets a value indicating if the next tab will be displayed on a new line</summary>
        ///<param name="value" type="Boolean"> true if the next tab should be displayed on a new line; otherwise false</param>
        }
}

Telerik.Web.UI.TabStripOrientation = function() { 
        ///<summary>Specifies the tab strip orientation</summary>
		/// <field name="HorizontalTop" type="Number" integer="true" static="true"></field>
		/// <field name="HorizontalBottom" type="Number" integer="true" static="true"></field>
		/// <field name="VerticalRight" type="Number" integer="true" static="true"></field>
		/// <field name="VerticalLeft" type="Number" integer="true" static="true"></field>
};
Telerik.Web.UI.TabStripOrientation.prototype = { 
HorizontalTop : 0,
HorizontalBottom : 1,
VerticalRight : 2,
VerticalLeft : 3
};
Telerik.Web.UI.TabStripOrientation.registerEnum("Telerik.Web.UI.TabStripOrientation");

Telerik.Web.UI.TabStripAlign = function () {
        ///<summary>Specifies the tab strip orientation</summary>
		/// <field name="Left" type="Number" integer="true" static="true"></field>
		/// <field name="Center" type="Number" integer="true" static="true"></field>
		/// <field name="Right" type="Number" integer="true" static="true"></field>
		/// <field name="Justify" type="Number" integer="true" static="true"></field>
}
Telerik.Web.UI.TabStripAlign.prototype = {
	Left : 0,
	Center : 1,
	Right : 2,
	Justify : 3
}
Telerik.Web.UI.TabStripAlign.registerEnum("Telerik.Web.UI.TabStripAlign");

Telerik.Web.UI.TabStripScrollButtonsPosition = function () {
        ///<summary>Specifies the tab strip orientation</summary>
		/// <field name="Left" type="Number" integer="true" static="true"></field>
		/// <field name="Middle" type="Number" integer="true" static="true"></field>
		/// <field name="Right" type="Number" integer="true" static="true"></field>
}
Telerik.Web.UI.TabStripScrollButtonsPosition.prototype = {
	Left : 0,
	Middle : 1,
	Right : 2
}
Telerik.Web.UI.TabStripScrollButtonsPosition.registerEnum("Telerik.Web.UI.TabStripScrollButtonsPosition");
/// <reference Name="MicrosoftAjax.js">

$telerik.toWindow = function(object)
{
		/// <summary>Casts an object to a RadWindow instance</summary>
		/// <returns type="Telerik.Web.UI.RadWindow">A RadWindow instance</returns>
};
$telerik.findWindow = function(id, parent)
{
		/// <summary>Finds a RadWindow instance</summary>
		/// <param name='id'>A string that contains ID of the RadWindow to find</param>
		/// <param name='parent' optional='true'>The component or element that contains the RadWindow to find</param>
		/// <returns type="Telerik.Web.UI.RadWindow">The RadWindow instance</returns>
};

(function()
{

Telerik.Web.UI.RadWindow = function(element) {

/// <summary>
    /// The RadWindow control implements a rich UI window for a HTML target element
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" domElement="true">
    /// DOM element associated with the behavior
    /// </param>

};
Telerik.Web.UI.RadWindow.prototype = {

hide : function()
    {
        /// <summary>
        /// Makes the RadWindow invisible
        /// </summary>

	},

set_contentElement : function(contentElement)
    {
        /// <summary>
        /// Sets content element when the RadWindow is used as controls container and not with NavigateUrl
        /// </summary>
        ///<param name="element" type="Sys.UI.DomElement" domElement="true"></param>
	},

get_contentElement : function()
    {
         /// <summary>
        /// Gets the content element when the RadWindow is used as controls container and not with NavigateUrl
        /// </summary>
         ///<returns type='Object' mayBeNull='true'></returns>
	},

isCreated : function()
    {
		/// <summary>
		///Indicates whether the UI of the RadWindow is already created or not
		///</summary>
		/// <returns type="Boolean" mayBeNull="false"/>
	},

show : function()
    {
        /// <summary>
        /// Shows the RadWindow if it was invisible. If the RadWindow does not exist, show creates it
        /// </summary>

	},

getWindowBounds : function()
    {
		/// <summary>Returns the size and position of the RadWindow</summary>
		/// <returns type='Sys.UI.Bounds' mayBeNull='false'></returns>
	},

center : function()
    {
		/// <summary>Centers the RadWindow in the middle of the page</summary>
	},

moveTo : function(x,y)
    {
		/// <summary></summary>
		/// <param name='x' type='Number'></param>
		/// <param name='y' type='Number'></param>
	},

setSize : function(width, height)
    {
		/// <summary></summary>
		/// <param name='width' type='Number' integer="true"></param>
		/// <param name='height' type='Number' integer="true"></param>
	},

autoSize : function(toAnimate)
  {
		/// <summary>Changes RadWindow's size to fit the content page. It cannot be used with pages from other domains due to browsers' security restrictions. You can optionally call the method with argument true - this will make the autosizing perform an animation while adjusting the size</summary>
		/// <param name='toAnimate' type='Boolean' optional='true'></param>
	},

isBehaviorEnabled : function(oBehavior)
    {
		/// <summary>Indicates whether a certain behavior is enabled for the RadWindow</summary>
		/// <param name='oBehavior' type='Telerik.Web.UI.WindowBehaviors'></param>
		/// <returns type="Boolean" mayBeNull="false"/>
	},

isInitialBehaviorEnabled : function(oBehavior)
    {
		/// <summary>Indicates whether a certain initial behavior is enabled for the RadWindow</summary>
		/// <param name='oBehavior' type='Telerik.Web.UI.WindowBehaviors'></param>
		/// <returns type="Boolean" mayBeNull="false"/>
	},

isVisible : function()
    {
         /// <summary>
        /// Indicates whether the RadWindow control is currently visible
        /// </summary>
        ///<returns type="Boolean" mayBeNull="false"/>

	},

isModal : function()
    {
		/// <summary>
        /// Indicates whether the RadWindow is modal
        /// </summary>
        ///<returns type="Boolean" mayBeNull="false"/>
	},

isActive : function()
    {
		/// <summary>
        /// Indicates whether the RadWindow is currently active
        /// </summary>
        ///<returns type="Boolean" mayBeNull="false"/>

	},

isPinned : function()
    {
		/// <summary>
        /// Indicates whether the RadWindow is currently pinned
        /// </summary>
        ///<returns type="Boolean" mayBeNull="false"/>
	},

isClosed : function()
    {
		/// <summary>
        /// Indicates whether the RadWindow is currently closed
        /// </summary>
        ///<returns type="Boolean" mayBeNull="false"/>
	},

isMinimized : function()
    {
		/// <summary>
        /// Indicates whether the RadWindow is currently minimized
        /// </summary>
        ///<returns type="Boolean" mayBeNull="false"/>
	},

isMaximized : function()
    {
		// <summary>
        /// Indicates whether the RadWindow is currently maximized
        /// </summary>
        ///<returns type="Boolean" mayBeNull="false"/>
	},

minimize : function()
    {
		/// <summary>Minimizes the RadWindow</summary>
	},

restore : function()
    {
		/// <summary>Restores the RadWindow to its normal (no minimized or maximized) state</summary>
	},

maximize : function()
    {
		/// <summary>Maximizes the RadWindow</summary>
	},

setActive : function(bActivate)
    {
		/// <summary>Makes the RadWindow the active RadWindow on the page</summary>
		/// <param name='bActivate' type='Boolean'></param>
	},

togglePin : function()
    {
		/// <summary>Toggles whether the RadWindow is pinned</summary>
	},

reload : function()
    {
		/// <summary>Reloads the content page in the RadWindow. The page should come from the same server as is the parent page</summary>
	},

close : function(callBackFnArg)
    {
		/// <summary>Closes the RadWindow. If argument is provided, it can be passed and extracted in the OnClientClose event by using the get_argument method</summary>
		/// <param name='callBackFnArg' type='Object' optional='true'></param>
	},

setUrl : function(url)
    {
		/// <summary>Changes URL of RadWindow</summary>
		/// <param name='url' type='String'></param>
	},

get_zindex : function()
    {
		/// <summary>Gets the z-index of the RadWindow</summary>
		/// <returns type='Number'></returns>
	},

get_contentFrame : function()
    {
/// <summary> Returns a reference to RadWindow's content area (IFRAME). One possible use is to to call a function that is declared in the RadWindow's page from the parent page. Another possible use is to modify the DOM</summary>
	/// <returns type='Object'></returns>
	},

get_minimizeZoneID: function()
    {
/// <summary>Gets the id (ClientID if a runat=server is used) of a html element where the window object will be docked when minimized</summary>
/// <returns type='String'></returns>
	},

set_minimizeZoneID : function(value)
    {
/// <summary>Sets the clientside id of a html element where the window object will be docked when minimized</summary>
/// <param name='value' type='String'></param>

	},

get_restrictionZoneID: function()
    {
/// <summary>Gets the id (ClientID if a runat=server is used) of a html element in which the window object will be able to move</summary>
/// <returns type='String'></returns>

	},

set_restrictionZoneID : function(value)
    {
/// <summary>Sets the clientside id of a html element in which the window object will be able to move</summary>
/// <param name='value' type='String'></param>
	},

get_minimizeIconUrl: function()
    {
/// <summary>
        /// Gets the url of the minimized icon of the RadWindow
        /// </summary>
/// <returns type='String'></returns>
	},

set_minimizeIconUrl : function(value)
    {
/// <summary>
        /// Sets the url of the minimized icon of the RadWindow
        /// </summary>
        /// <param name="value" type="String"></param>
	},

get_iconUrl: function()
    {
/// <summary>
        /// Gets the url of the icon in the upper left corner of the RadWindow titlebar
        /// </summary>
/// <returns type='String'></returns>

	},

set_iconUrl : function(value)
    {
/// <summary>
        /// Sets the url of the icon in the upper left rwCorner of the RadWindow rwTitlebar
        /// </summary>
 /// <param name="value" type="String"></param>

	},

get_navigateUrl: function()
    {
/// <summary>
        /// Returns the RadWindow navigate URL
        /// </summary>
/// <returns type='String'></returns>
	},


get_offsetElementID : function() {
/// <summary>
        /// Gets the offset element ID [element according to which the RadWindow should be positioned relatively] - works together with the Top and Left properties
        /// </summary>
/// <returns type='String'></returns>

	},

set_offsetElementID : function(value)
    {
/// <summary>
 ///Sets the offset element ID [element according to which the RadWindow should be positioned relatively] - works together with the Top and Left properties
        /// </summary>
        /// <param name="value" type="String"></param>
	},

get_openerElementID : function() {
/// <summary>
        /// Gets the OpenerElementId for the RadWindow
        /// </summary>
/// <returns type='String'></returns>

	},

set_openerElementID : function(value)
    {
/// <summary>
        /// Sets the OpenerElementId for the RadWindow
        /// </summary>
        /// <param name="value" type="String">
        /// </param>

	},

get_left : function()
    {
/// <summary>
        /// Gets the horizontal offset relative to its offset element
        /// </summary>
/// <returns type='Number'></returns>
	},

set_left : function(value)
    {
/// <summary>
        /// Sets a new horizontal offset relative to its offset element
        /// </summary>
        /// <param name="value" type="Number" integer="true">
        /// </param>

	},

get_top : function()
    {
/// <summary>
        /// Gets the vertical offset relative to its offset element
        /// </summary>
   /// <returns type='Number'></returns>

	},

set_top : function(value)
    {
/// <summary>
        /// Sets a new vertical offset relative to its offset element
        /// </summary>
        /// <param name="value" type="Number" integer="true">
        /// </param>

	},

get_title : function()
    {
/// <summary>
        /// Gets the title of the RadWindow
        /// </summary>
   /// <returns type='String'></returns>

	},

set_title : function(value)
    {
/// <summary>
        /// Sets a new title to the RadWindow
        /// </summary>
        /// <param name="value" type="String">
        /// </param>

	},

get_width : function()
    {
/// <summary>
        /// Gets the width of the RadWindow
        /// </summary>
/// <returns type='Number' integer="true"></returns>

	},

set_width : function(value)
    {
/// <summary>
        /// Sets new width to the RadWindow
        /// </summary>
        /// <param name="value" type='Number' integer="true">
        /// </param>

	},

get_height : function()
    {
/// <summary>
        /// Gets the height of the RadWindow
        /// </summary>
/// <returns type='Number' integer="true"></returns>

	},

set_height : function(value)
    {
/// <summary>
        /// Sets new height to the window
        /// </summary>
        /// <param name="value" type='Number' integer="true"s>
        /// </param>

	},

set_initialBehaviors : function(value)
    {
/// <summary>
        /// Sets the InitialBehaviors property of the RadWindow object. Its argument must be a value or combination of values from the Telerik.Web.UI.WindowBehaviors enum. To set more than one behavior, use "+". Possible values are None, Minimize, Pin, Maximize, Default
///e.g: oWnd.set_initialBehaviors( Telerik.Web.UI.WindowBehaviors.Pin + Telerik.Web.UI.WindowBehaviors.Maximize )
        /// </summary>
        /// <param name="value" type="Telerik.Web.UI.WindowBehaviors">
        /// </param>

	},

set_behaviors : function(value)
    {
/// <summary>
        /// Sets the Behaviors property of the RadWindow object. Its argument must be a value or combination of values from the Telerik.Web.UI.WindowBehaviors enum. To set more than one behavior, use "+". Possible values are None, Resize, Minimize, Close, Pin, Maximize, Move, Reload, Default
//e.g: oWnd.set_behaviors( Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Close )
        /// </summary>
        /// <param name="value" type="Telerik.Web.UI.WindowBehaviors">
        /// </param>

	},

get_modal: function()
    {
/// <summary>
        /// Gets a value indicating whether the RadWindow is modal or not
        /// </summary>
/// <returns type='Boolean' mayBeNull="false"></returns>

	},

set_modal : function(value)
    {
/// <summary>
        /// Sets a value indicating whether the RadWindow should be modal or not
        /// </summary>
        /// <param name="value" type="Boolean">
        /// </param>

	},

get_destroyOnClose : function()
    {
/// <summary>
        /// Gets a value indicating whether the RadWindow will be disposed and made inaccessible once it is closed
        /// </summary>
/// <returns type='Boolean' mayBeNull="false"></returns>

	},

set_destroyOnClose : function(value)
    {
/// <summary>
        /// Sets a value indicating whether the RadWindow will be disposed and made inaccessible once it is closed
        /// </summary>
        /// <param name="value" type="Boolean">
        /// </param>

	},

get_reloadOnShow : function()
    {
/// <summary>
        /// Gets a value indicating whether the page that is loaded in the RadWindow should be loaded everytime from the server or
        /// will leave the browser default behaviour
        /// </summary>
/// <returns type='Boolean' mayBeNull="false"></returns>

	},

set_reloadOnShow : function(value)
    {
/// <summary>
        /// Sets a value indicating whether the page that is loaded in the RadWindow should be loaded everytime from the server or
        /// will leave the browser default behaviour
        /// </summary>
        /// <param name="value" type="Boolean">
        /// </param>

	},

get_showContentDuringLoad : function()
    {
/// <summary>
        /// Gets a value indicating whether the page that is loaded
        /// in the RadWindow should be shown during the loading process, or when it has finished loading
        /// </summary>
/// <returns type='Boolean' mayBeNull="false"></returns>

	},

set_showContentDuringLoad: function(value)
    {
/// <summary>
/// Sets a value indicating whether the page that is loaded
        /// in the RadWindow should be shown during the loading process, or when it has finished loading
        /// </summary>
        /// <param name="value" type="Boolean">
        /// </param>

	},

get_visibleOnPageLoad: function()
    {
/// <summary>
        /// Gets a value indicating whether the RadWindow will open automatically when its parent [aspx] page is loaded on the client
        /// </summary>
/// <returns type='Boolean' mayBeNull="false"></returns>

	},

set_visibleOnPageLoad : function(value)
    {
/// <summary>
        /// Sets a value indicating whether the window will open automatically when its parent [aspx] page is loaded on the client
        /// </summary>
        /// <param name="value" type="Boolean">
        /// </param>

	},

get_visibleTitlebar: function()
    {
/// <summary>
        /// Gets a value indicating whether the RadWindow should have a visible titlebar
        /// </summary>
/// <returns type='Boolean' mayBeNull="false"></returns>

	},

set_visibleTitlebar : function(value)
    {
/// <summary>
        /// Sets a value indicating whether the RadWindow should have a visible titlebar
        /// </summary>
        /// <param name="value" type="Boolean">
        /// </param>

	},

get_visibleStatusbar: function()
    {
/// <summary>
        /// Gets a value indicating whether the RadWindow should have a visible statusbar
        /// </summary>
/// <returns type='Boolean' mayBeNull="false"></returns>
	},

set_visibleStatusbar : function(value)
    {
/// <summary>
        /// Sets a value indicating whether the RadWindow should have a visible statusbar
        /// </summary>
        /// <param name="value" type="Boolean">
        /// </param>

	},

get_animation : function()
    {
/// <summary>
        /// Gets the animation value for the RadWindow
        /// </summary>
        /// <returns type='Telerik.Web.UI.WindowAnimation'></returns>

	},

set_animation : function(value)
    {
/// <summary>
        /// Sets animation value for the RadWindow
        /// </summary>
        /// <param name="value" type="Telerik.Web.UI.WindowAnimation">
        /// </param>

	},

get_animationDuration: function()
	{
/// <summary>
		/// Gets animation duration value for the RadWindow. The default value is 500ms
		/// </summary>
		/// <returns type="Number" integer="true"></returns>
	},

set_animationDuration: function(value)
	{
/// <summary>
		/// Sets animation duration value for the RadWindow
		/// </summary>
		/// <param name="value" type="Number" integer="true">
		/// </param>

	},

get_overlay : function()
    {
/// <summary>
        /// Gets a value indicating whether the RadWindow has an overlay element.
        /// </summary>
/// <returns type='Boolean' mayBeNull="false"></returns>

	},

set_overlay : function(value)
    {
/// <summary>
        /// Sets a value indicating whether the RadWindow should create an overlay element.
        /// </summary>
        /// <param name="value" type="Boolean">
        /// </param>

	},

get_opacity : function()
    {
/// <summary>
        /// Gets the value indicating the opacity of the RadWindow.The value should be between 0 and 100. The default value is 100 which is opaque
        /// </summary>
/// <returns type='Number' integer="true"></returns>

	},

set_opacity : function(value)
    {
/// <summary>
        /// Sets the value indicating the opacity of the RadWindow
        /// </summary>
        /// <param name="value" type="Number" integer="true">
        /// </param>

	},

get_keepInScreenBounds : function()
    {
/// <summary>
        /// Gets a value indicating whether the RadWindow will show in the visible viewport of the browser window
        /// </summary>
/// <returns type='Boolean' mayBeNull="false"></returns>

	},

set_keepInScreenBounds : function(value)
    {
/// <summary>
        /// Sets a value indicating whether the RadWindow should show in the visible viewport of the browser window
        /// </summary>
        /// <param name="value" type="Boolean">
        /// </param>

	},

get_autoSize : function()
    {
/// <summary>
        /// Gets a value which indicates whether the window will automatically resize itself acciording to its content page or not
        /// </summary>
/// <returns type='Boolean' mayBeNull="false"></returns>

	},

set_autoSize : function(value)
    {
/// <summary>
        /// Sets a value which indicates whether the window should automatically resize itself acciording to its content page or not
        /// </summary>
        /// <param name="value" type="Boolean">
        /// </param>

	},

get_popupElement : function()
    {
/// <summary>
        /// Gets a reference to the RadWindow's popup element (the wrapper DIV element)
        /// </summary>
        ///<returns type='Object' mayBeNull='true'></returns>
	},

get_windowManager : function()
    {
    /// <summary>
/// Returns a reference to the RadWindowManager. As an alternative you can use the ASP.NET AJAX convention and use $find()
  /// </summary>
///<returns type="Telerik.Web.UI.RadWindowManager"></returns>

	},
	
get_browserWindow : function()
    {
         /// <summary>
        // Gets a reference to the RadWindow's parent [browser window] object 
        /// </summary>
        ///<returns type="Global"></returns>
    },

set_status : function(message)
    {
/// <summary>
        /// Sets a message in the status area of the window
        /// </summary>
        /// <param name="message" type="String">
        /// </param>

	},

get_status : function()
    {
/// <summary>
        /// Gets current message in the status area of the window
        /// </summary>
///<returns type="String"></returns>

	},

get_cssClass : function()
    {
		/// <summary>Gets the class name specified in the CSSClass property</summary>
		/// <returns type='String'></returns>
	},

set_cssClass : function(value)
    {
		/// <summary>Sets the class name specified in the CSSClass property</summary>
		/// <param name='value' type='String'></param>
	},

add_command : function(handler)
	{
/// <summary>
		/// Adds a handler to the Command event
		/// </summary>
		/// <param name="handler" type="Function">
		/// handler
		/// </param>

	},

remove_command : function(handler)
	{
/// <summary>
		/// Removes a handler from the Command event
		/// </summary>
		/// <param name="handler" type="Function">
		/// handler
		/// </param>

	},

raise_command : function(args)
	{
/// <summary>
		/// Raises the Command event
		/// </summary>

	},

add_dragStart : function(handler)
	{
/// <summary>
		/// Adds a handler to the DragStart event
		/// </summary>
		/// <param name="handler" type="Function">
		/// handler
		/// </param>

	},

remove_dragStart : function(handler)
	{
/// <summary>
		/// Removes a handler from the DragStart event
		/// </summary>
		/// <param name="handler" type="Function">
		/// handler
		/// </param>

	},

add_dragEnd : function(handler)
	{
/// <summary>
		/// Adds a handler to the DragEnd event
		/// </summary>
		/// <param name="handler" type="Function">
		/// handler
		/// </param>

	},

remove_dragEnd : function(handler)
	{
/// <summary>
		/// Removes a handler from the DragEnd event
		/// </summary>
		/// <param name="handler" type="Function">
		/// handler
		/// </param>

	},

add_activate : function(handler) {
/// <summary>
        /// Add a handler to the Activate event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

remove_activate : function(handler) {
/// <summary>
        /// Remove a handler from the Activate event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

add_beforeShow : function(handler) {
/// <summary>
        /// Add a handler to the BeforeShow event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

remove_beforeShow : function(handler) {
/// <summary>
        /// Remove a handler from the BeforeShow event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

add_show : function(handler) {
/// <summary>
        /// Add a handler to the Show event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

remove_show : function(handler) {
/// <summary>
        /// Remove a handler from the Show event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

add_pageLoad : function(handler) {
/// <summary>
        /// Add a handler to the PageLoad event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

remove_pageLoad : function(handler) {
/// <summary>
        /// Remove a handler from the PageLoad event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

add_close : function(handler) {
/// <summary>
        /// Add a handler to the Close event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

remove_close : function(handler) {
/// <summary>
        /// Remove a handler from the Close event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

add_beforeClose : function(handler) {
/// <summary>
        /// Add a handler to the BeforeClose event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

remove_beforeClose : function(handler) {
/// <summary>
        /// Remove a handler from the BeforeClose event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

add_resizeStart : function(handler) {
/// <summary>
        /// Add a handler to the ResizeStart event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

remove_resizeStart : function(handler) {
/// <summary>
        /// Remove a handler from the ResizeStart event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},
	
	
add_resizeEnd : function(handler) {
/// <summary>
        /// Add a handler to the ResizeEnd event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	},

remove_resizeEnd : function(handler) {
/// <summary>
        /// Remove a handler from the ResizeEnd event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>

	}

};

Telerik.Web.UI.RadWindow.registerClass("Telerik.Web.UI.RadWindow", Sys.UI.Control);

Telerik.Web.UI.WindowAnimation = function()
		{
		/// <summary></summary>
/// <field name="None" type="Number" integer="true" static="true"></field>
/// <field name="Resize" type="Number" integer="true" static="true"></field>
/// <field name="Fade" type="Number" integer="true" static="true"></field>
/// <field name="Slide" type="Number" integer="true" static="true"></field>
/// <field name="FlyIn" type="Number" integer="true" static="true"></field>
		};
Telerik.Web.UI.WindowAnimation.prototype =
{
    None : 0,
    Resize: 1,
    Fade : 2,
    Slide : 4,
    FlyIn : 8
}
Telerik.Web.UI.WindowAnimation.registerEnum("Telerik.Web.UI.WindowAnimation", false);

Telerik.Web.UI.WindowMinimizeMode = function()
		{
		/// <summary></summary>
/// <field name="SameLocation" type="Number" integer="true" static="true"></field>
/// <field name="MinimizeZone" type="Number" integer="true" static="true"></field>
/// <field name="Default" type="Number" integer="true" static="true"></field>
		};
Telerik.Web.UI.WindowMinimizeMode.prototype =
{
   	SameLocation : 1,
	MinimizeZone : 2,
	Default	: 1
}
Telerik.Web.UI.WindowMinimizeMode.registerEnum("Telerik.Web.UI.WindowMinimizeMode", false);

Telerik.Web.UI.WindowBehaviors = function()
		{
		/// <summary></summary>
/// <field name="None" type="Number" integer="true" static="true"></field>
/// <field name="Resize" type="Number" integer="true" static="true"></field>
/// <field name="Minimize" type="Number" integer="true" static="true"></field>
/// <field name="Close" type="Number" integer="true" static="true"></field>
/// <field name="Pin" type="Number" integer="true" static="true"></field>
/// <field name="Maximize" type="Number" integer="true" static="true"></field>
/// <field name="Move" type="Number" integer="true" static="true"></field>
/// <field name="Reload" type="Number" integer="true" static="true"></field>
/// <field name="Default" type="Number" integer="true" static="true"></field>
		};
Telerik.Web.UI.WindowBehaviors.prototype =
{
    None : 0,
	Resize : 1,
	Minimize : 2,
	Close : 4,
	Pin : 8,
	Maximize : 16,
	Move: 32,
	Reload: 64,
	Default: (1 + 2 + 4 + 8 + 16 + 32 + 64)
}
Telerik.Web.UI.WindowBehaviors.registerEnum("Telerik.Web.UI.WindowBehaviors", false);

})();/// <reference Name="MicrosoftAjax.js">

$telerik.toWindowManager = function(object) {
    /// <summary>Casts an object to a RadWindowManager instance</summary>
    /// <returns type="Telerik.Web.UI.RadWindowManager">A RadWindowManager instance</returns>
};
$telerik.findWindowManager = function(id, parent) {
    /// <summary>Finds a RadWindowManager instance</summary>
    /// <param name='id'>A string that contains ID of the RadWindowManager to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadWindowManager to find</param>
    /// <returns type="Telerik.Web.UI.RadWindowManager">The RadWindowManager instance</returns>
};

(function() {

    Telerik.Web.UI.RadWindowManager = function(element) {

        /// <exclude/>

        /// <summary></summary>
        /// <param name='element' type='' domElement='' optional=''></param>
    };
    Telerik.Web.UI.RadWindowManager.prototype =
{

    open: function(url, wndName, contentElement) {
        /// <summary>Opens a new or existing window. Can be used to change the URL of existing window as well. If an external page is loaded, do not provide content element. Otherwise, do not provide url. If both are provided, the url has priority</summary>
        /// <param name='url' type='String' domElement='false' optional='true'></param>
        /// <param name=' wndName' type='String' domElement='false' optional='true'></param>
        /// <param name=' contentElement' type='String' domElement='true' optional='true'></param>
        /// <returns type="Telerik.Web.UI.RadWindow">The RadWindow instance</returns>
    },

    radalert: function(text, oWidth, oHeight, oTitle) {
        /// <summary></summary>
        /// <param name='text' type='String' domElement='false' optional='true'></param>
        /// <param name=' oWidth' type='Number' integer="true" domElement='false' optional='true'></param>
        /// <param name=' oHeight' type='Number' integer="true" domElement='false' optional='true'></param>
        /// <param name=' oTitle' type='String' domElement='false' optional='true'></param>
        /// <returns type="Telerik.Web.UI.RadWindow">The message dialog instance</returns>
    },

    radconfirm: function(text, callBackFn, oWidth, oHeight, callerObj, oTitle) {
        /// <summary></summary>
        /// <param name='text' type='String' domElement='false' optional='true'></param>
        /// <param name=' callBackFn' type='Function' domElement='false' optional='true'></param>
        /// <param name=' oWidth' type='Number' integer="true" domElement='false' optional='true'></param>
        /// <param name=' oHeight' type='Number' integer="true" domElement='false' optional='true'></param>
        /// <param name=' callerObj' type='' domElement='' optional=''></param>
        /// <param name=' oTitle' type='' domElement='' optional=''></param>
    },

    radprompt: function(text, callBackFn, oWidth, oHeight, callerObj, oTitle, initialValue) {
        /// <summary></summary>
        /// <param name='text' type='' domElement='' optional=''></param>
        /// <param name=' callBackFn' type='' domElement='' optional=''></param>
        /// <param name=' oWidth' type='' domElement='' optional=''></param>
        /// <param name=' oHeight' type='' domElement='' optional=''></param>
        /// <param name=' callerObj' type='' domElement='' optional=''></param>
        /// <param name=' oTitle' type='' domElement='' optional=''></param>
        /// <param name=' initialValue' type='' domElement='' optional=''></param>
    },

    getActiveWindow: function() {
        /// <summary>Returns a reference to the current active window</summary>
        /// <returns type='Telerik.Web.UI.RadWindow' mayBeNull='true'></returns>
    },

    getWindowById: function(id) {
        /// <summary>Returns a reference to a RadWindow. The Id is the window's server-side Id property</summary>
        /// <param name='id' type='String'></param>
        /// <returns type='Telerik.Web.UI.RadWindow' mayBeNull='true'></returns>
    },

    getWindowByName: function(name) {
        /// <summary>Returns a reference to a RadWindow. The Name is the window's server-side Id property</summary>
        /// <param name='name' type='String'></param>
        /// <returns type='Telerik.Web.UI.RadWindow' mayBeNull='true'></returns>
    },

    cascade: function() {
        /// <summary>Cascades the window objects</summary>
    },

    tile: function() {
        /// <summary>Tiles the window objects</summary>
    },

    closeActiveWindow: function() {
        /// <summary>Close the active window</summary>
    },

    minimizeActiveWindow: function() {
        /// <summary>Minimizes the currently active window</summary>
    },

    restoreActiveWindow: function() {
        /// <summary>Restores all windows</summary>
    },

    closeAll: function() {
        /// <summary>Closes all windows</summary>
    },

    showAll: function() {
        /// <summary>Shows all windows</summary>
    },

    minimizeAll: function() {
        /// <summary>Minimizes all windows</summary>
    },

    maximizeAll: function() {
        /// <summary>Maximizes all windows</summary>
    },

    restoreAll: function() {
        /// <summary>Restores all windows</summary>
    },

    get_windows: function() {
        /// <summary>Returns a reference to the array of RadWindow objects managed by the RadWindowManager</summary>
        /// <returns type='Array' mayBeNull='true'></returns>
    }

};
Telerik.Web.UI.RadWindowManager.registerClass("Telerik.Web.UI.RadWindowManager", Sys.UI.Control);

})();/// <reference Name="MicrosoftAjax.js">

$telerik.toToolTip = function(object) {
    /// <summary>Casts an object to a RadToolTip instance</summary>
    /// <returns type="Telerik.Web.UI.RadToolTip">A RadToolTip instance<returns>
};
$telerik.findToolTip = function(id, parent) {
    /// <summary>Finds a RadToolTip instance</summary>
    /// <param name='id'>A string that contains ID of the RadToolTip to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadToolTip to find</param>
    /// <returns type="Telerik.Web.UI.RadToolTip">The RadToolTip instance</returns>
};

(function() {


    Telerik.Web.UI.RadToolTip = function(element) {

        /// <summary>
        /// The ToolTip control implements a rich UI tooltip for a HTML target element
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element associated with the behavior
        /// </param>

        /// <summary></summary>
        /// <param name='element' type='' domElement='' optional=''></param>
    };

    Telerik.Web.UI.RadToolTip.getCurrent = function() {
        /// <summary>Returns a reference to the currently active tooltip</summary>
        ///<returns type="Telerik.Web.UI.RadToolTip"/>
    }
    Telerik.Web.UI.RadToolTip.prototype = {

        hide: function() {
            /// <summary>
            /// Hides the tooltip
            /// </summary>
        },

        show: function() {
            /// <summary>
            /// Displays the tooltip at the proper position, relative to its target control.
            /// </summary>
        },

        isModal: function() {
            /// <summary>Returns whether the tooltip control is displaying modally</summary>
            ///<returns type="Boolean" mayBeNull="false"/>
        },

        set_contentElement: function(contentElement) {
            /// <summary>
            /// Sets a new content element to the tooltip
            /// </summary>
            /// <param name='contentElement' type='Sys.UI.DomElement' domElement='true''></param>
        },

        get_contentElement: function() {
            /// <summary>
            /// Gets the content element of the tooltip
            /// </summary>
            /// <returns type='Object' domElement="true"></returns>
        },

        set_content: function(text) {
            /// <summary>
            /// Sets new content to the tooltip
            /// </summary>
            /// <param name='text' type='String' domElement='false'></param>
        },

        get_content: function() {
            /// <summary>
            /// Gets the current content of the tooltip
            /// </summary>
            /// <returns type='String'></returns>
        },

        getManualCloseButton: function() {
            /// <summary>Returns a reference to the tooltip's close button when HideEvent="ManualClose"</summary>
            /// <returns type='Object' domElement="true"></returns>
        },

        isVisible: function() {
            /// <summary>
            /// Indicates whether the RadToolTip control is currently visible
            /// </summary>
            ///<returns type="Boolean" mayBeNull="false"/>
        },

        get_targetControlID: function() {
            /// <summary>
            /// Gets the target control of the tooltip
            /// </summary>
            /// <returns type='String'></returns>
        },

        set_targetControlID: function(value) {
            /// <summary>
            /// Sets a new target control to the tooltip
            /// </summary>
            /// <param name='value' type='String' domElement='false'></param>
        },

        get_value: function() {
            /// <summary>
            /// Gets the an arbitrary value associated with a tooltip that can be used in scenarios involving AJAX or web services
            /// </summary>
            /// <returns type='String' mayBeNull='true'></returns>
        },

        set_value: function(value) {
            /// <summary>
            /// Sets an arbitrary value associated with a tooltip that can be used in scenarios involving AJAX or web services
            /// </summary>
            /// <param name='value' type='String' domElement='false'></param>
        },

        get_position: function() {
            /// <summary>
            /// Gets the relative position to the tooltip to its target element
            /// </summary>
            /// <returns type='Telerik.Web.UI.ToolTipPosition' mayBeNull='false'></returns>
        },

        set_position: function(value) {
            /// <summary>
            /// Sets a new relative position to the tooltip to its target element
            /// </summary>
            /// <param name='value' type='Telerik.Web.UI.ToolTipPosition' domElement='false'></param>
        },

        get_offsetX: function() {
            /// <summary>
            /// Gets the horizontal offset relative to its target element
            /// </summary>
            /// <returns type="Number" integer="true"></returns>
        },

        set_offsetX: function(value) {
            /// <summary>
            /// Sets a new horizontal offset relative to its target element
            /// </summary>
            /// <param name='value' type="Number" integer="true"' domElement='false'></param>
        },

        get_offsetY: function() {
            /// <summary>
            /// Gets the vertical offset relative to its target element
            /// </summary>
            /// <returns type="Number" integer="true"'></returns>
        },

        set_offsetY: function(value) {
            /// <summary>
            /// Sets a new vertical offset relative to its target element
            /// </summary>
            /// <param name='value' type="Number" integer="true" domElement='false' ></param>
        },

        get_title: function() {
            /// <summary>
            /// Gets the title of the tooltip
            /// </summary>
            /// <returns type='String'></returns>
        },

        set_title: function(value) {
            /// <summary>
            /// Sets a new title to the tooltip
            /// </summary>
            /// <param name='value' type='String' domElement='false'></param>
        },

        get_text: function() {
            /// <summary>
            /// Gets the text of the tooltip
            /// </summary>
            /// <returns type='String' mayBeNull=''></returns>
        },

        set_text: function(value) {
            /// <summary>
            /// Sets new text to the tooltip
            /// </summary>
            /// <param name='value' type='String' domElement='false'></param>
        },

        get_width: function() {
            /// <summary>
            /// Gets width of the tooltip
            /// </summary>
            /// <returns type='Number' integer="true" mayBeNull=''></returns>
        },

        set_width: function(value) {
            /// <summary>
            /// Sets new width to the tooltip
            /// </summary>
            /// <param name='value' type='Number' integer="true"' domElement='false'></param>
        },

        get_height: function() {
            /// <summary>
            /// Gets height of the tooltip
            /// </summary>
            /// <returns type='Number' integer="true"></returns>
        },

        set_height: function(value) {
            /// <summary>
            /// Sets new height to the tooltip
            /// </summary>
            /// <param name='value' type='Number' integer="true" domElement='false' ></param>
        },

        get_relativeTo: function() {
            /// <summary>
            /// Gets whether the tooltip is positioned relative to the mouse, relative to the tooltip or to the browser window
            /// </summary>
            /// <returns type='Telerik.Web.UI.ToolTipRelativeDisplay' mayBeNull='false'></returns>
        },

        set_relativeTo: function(value) {
            /// <summary>
            /// Sets whether the tooltip is positioned relative to the mouse, relative to the tooltip or to the browser window
            /// </summary>
            /// <param name='value' Telerik.Web.UI.ToolTipRelativeDisplay" domElement='false'></param>
        },

        get_contentScrolling: function() {
            /// <summary>
            /// Gets a new overflow value for the tooltip content area
            /// </summary>
            /// <returns type='Telerik.Web.UI.ToolTipScrolling' mayBeNull='false'></returns>
        },

        set_contentScrolling: function(value) {
            /// <summary>
            /// Sets a new overflow value for the tooltip content area
            /// </summary>
            /// <param name='value' type='Telerik.Web.UI.ToolTipScrolling' domElement='false'></param>
        },

        get_showCallout: function() {
            /// <summary>Gets whether the tooltip callout image will be displayed</summary>
            /// <returns type='Boolean' mayBeNull='false'></returns>
        },

        set_showCallout: function(value) {
            /// <summary>Sets whether the tooltip callout image will be displayed</summary>
            /// <param name='value' type='Boolean' domElement='false'></param>
        },

        get_showDelay: function() {
            /// <summary>
            /// Gets delay in miliseconds for the tooltip to appear
            /// </summary>
            /// <returns type="Number" integer="true"></returns>
        },

        set_showDelay: function(value) {
            /// <summary>
            /// Sets delay in miliseconds for the tooltip to appear
            /// </summary>
            /// <param name='value'  type="Number" integer="true" domElement='false'></param>
        },

        get_autoCloseDelay: function() {
            /// <summary>
            /// Gets delay in miliseconds for the tooltip to close automatically
            /// </summary>
            /// <returns type="Number" integer="true" mayBeNull='false'></returns>
        },

        set_autoCloseDelay: function(value) {
            /// <summary>
            /// Sets delay in miliseconds for the tooltip to close automatically
            /// </summary>
            /// <param name='value' type="Number" integer="true" domElement='false'></param>
        },

        get_hideDelay: function() {
            /// <summary>
            /// Gets delay in miliseconds after which the tooltip will hide after the mouse leaves the target element
            /// </summary>
            /// <returns type="Number" integer="true" mayBeNull='false'></returns>
        },

        set_hideDelay: function(value) {
            /// <summary>
            /// Sets delay in miliseconds for the tooltip to hide after the mouse leaves the target element
            /// </summary>
            /// <param name='value' type="Number" integer="true" domElement='false'></param>
        },

        get_mouseTrailing: function() {
            /// <summary>
            /// Gets whether the tooltip should follows the mouse movement or not
            /// </summary>
            /// <returns type='Boolean' mayBeNull='false'></returns>
        },

        set_mouseTrailing: function(value) {
            /// <summary>
            /// Sets whether the tooltip should follows the mouse movement or not
            /// </summary>
            /// <param name='value' type="Boolean" domElement='false'></param>
        },

        get_visibleOnPageLoad: function() {
            /// <summary>
            /// Gets a value indicating whether the tooltip will open automatically when its parent [aspx] page is loaded on the client.
            /// </summary>
            /// <returns type='Boolean' mayBeNull=''></returns>
        },

        set_visibleOnPageLoad: function(value) {
            /// <summary>
            /// Sets a value indicating whether the tooltip will open automatically when its parent [aspx] page is loaded on the client.
            /// </summary>
            /// <param name='value' type='Boolean' domElement='false'></param>
        },

        get_animation: function() {
            /// <summary>
            /// Gets animation value for the tooltip
            /// </summary>
            /// <returns type='Telerik.Web.UI.ToolTipAnimation' mayBeNull='false'></returns>
        },

        set_animation: function(value) {
            /// <summary>
            /// Sets animation value for the tooltip
            /// </summary>
            /// <param name='value' type='Telerik.Web.UI.ToolTipAnimation' domElement='false'></param>
        },

        get_animationDuration: function() {
            /// <summary>
            /// Gets animation duration value for the tooltip
            /// </summary>
            /// <returns type='Number' integer="true"></returns>
        },

        set_animationDuration: function(value) {
            /// <summary>
            /// Sets animation duration value for the tooltip
            /// </summary>
            /// <param name='value' type='Number' integer="true" domElement='false'></param>
        },

        get_modal: function() {
            /// <summary>
            /// Gets a value indicating whether a tooltip is modal or not
            /// </summary>
            /// <returns type='Boolean' mayBeNull='false'></returns>
        },

        set_modal: function(value) {
            /// <summary>
            /// Sets a value indicating whether a tooltip is modal or not
            /// </summary>
            /// <param name='value' type='Boolean' domElement='false'></param>
        },

        get_overlay: function() {
            /// <summary>
            /// Gets a value indicating whether the tooltip has an overlay element.
            /// </summary>
            /// <returns type='Boolean' mayBeNull='false'></returns>
        },

        set_overlay: function(value) {
            /// <summary>
            /// Sets a value indicating whether the tooltip will create an overlay element.
            /// </summary>
            /// <param name='value' type='Boolean' domElement='false'></param>
        },

        get_targetControl: function() {
            /// <summary>
            /// Gets a reference to the tooltip target element
            /// </summary>
            /// <returns type='Object' domElement="true"></returns>
        },

        set_targetControl: function(value) {
            /// <summary>
            /// Sets a new target control to the tooltip
            /// </summary>
            /// <param name='value' type='Sys.UI.DomElement' domElement='true'></param>
        },

        get_popupElement: function() {
            /// <summary>Returns a reference to the popup element</summary>
            /// <returns type='Object' domElement="true"></returns>
        },

        add_beforeShow: function(handler) {
            /// <summary>
            /// Add a handler to the BeforeShow event
            /// </summary>
            /// <param name='handler' type='Function'></param>
        },

        remove_beforeShow: function(handler) {
            /// <summary>
            /// Remove a handler from the BeforeShow event
            /// </summary>
            /// <param name='handler' type='Function'></param>
        },

        add_show: function(handler) {
            /// <summary>
            /// Add a handler to the Show event
            /// </summary>
            /// <param name='handler' type='Function'></param>
        },

        remove_show: function(handler) {
            /// <summary>
            /// Remove a handler from the Show event
            /// </summary>
            /// <param name='handler' type='Function'></param>
        },

        add_beforeHide: function(handler) {
            /// <summary>
            /// Add a handler to the BeforeHide event
            /// </summary>
            /// <param name='handler' type='Function'></param>
        },

        remove_beforeHide: function(handler) {
            /// <summary>
            /// Remove a handler from the BeforeHide event
            /// </summary>
            /// <param name='handler' type='Function'></param>
        },

        add_hide: function(handler) {
            /// <summary>
            /// Add a handler to the Hide event
            /// </summary>
            /// <param name='handler' type='Function'></param>
        },

        remove_hide: function(handler) {
            /// <summary>
            /// Remove a handler from the Hide event
            /// </summary>
            /// <param name='handler' type='Function'></param>
        }

    };

    Telerik.Web.UI.RadToolTip.registerClass("Telerik.Web.UI.RadToolTip", Sys.UI.Control);

    Telerik.Web.UI.ToolTipPosition = function() {
        /// <summary>Relative position of the tooltip according to its target element  </summary>
        /// <field name="TopLeft" type="Number" integer="true" static="true"></field>
        /// <field name="TopCenter" type="Number" integer="true" static="true"></field>
        /// <field name="TopRight" type="Number" integer="true" static="true"></field>
        /// <field name="MiddleLeft" type="Number" integer="true" static="true"></field>
        /// <field name="Center" type="Number" integer="true" static="true"></field>
        /// <field name="MiddleRight" type="Number" integer="true" static="true"></field>
        /// <field name="BottomLeft" type="Number" integer="true" static="true"></field>
        /// <field name="BottomCenter" type="Number" integer="true" static="true"></field>
        /// <field name="BottomRight" type="Number" integer="true" static="true"></field>
    };
    Telerik.Web.UI.ToolTipPosition.prototype =
{
    TopLeft: 11,
    TopCenter: 12,
    TopRight: 13,
    MiddleLeft: 21,
    Center: 22,
    MiddleRight: 23,
    BottomLeft: 31,
    BottomCenter: 32,
    BottomRight: 33
}
    Telerik.Web.UI.ToolTipPosition.registerEnum("Telerik.Web.UI.ToolTipPosition", false);

    Telerik.Web.UI.ToolTipRelativeDisplay = function() {
        /// <summary>Relative display of the tooltip (according to element, mouse or browser window)</summary>
        /// <field name="Mouse" type="Number" integer="true" static="true"></field>
        /// <field name="Element" type="Number" integer="true" static="true"></field>
        /// <field name="BrowserWindow" type="Number" integer="true" static="true"></field>
    };
    Telerik.Web.UI.ToolTipRelativeDisplay.prototype =
{
    Mouse: 0,
    Element: 1,
    BrowserWindow: 2
}
    Telerik.Web.UI.ToolTipRelativeDisplay.registerEnum("Telerik.Web.UI.ToolTipRelativeDisplay", false);

    Telerik.Web.UI.ToolTipScrolling = function() {
        /// <summary>The scrolling of the tooltip's content</summary>
        /// <field name="Auto" type="Number" integer="true" static="true"></field>
        /// <field name="None" type="Number" integer="true" static="true"></field>
        /// <field name="X" type="Number" integer="true" static="true"></field>
        /// <field name="Y" type="Number" integer="true" static="true"></field>
        /// <field name="Both" type="Number" integer="true" static="true"></field>
        /// <field name="Default" type="Number" integer="true" static="true"></field>
    };
    Telerik.Web.UI.ToolTipScrolling.prototype =
{
    Auto: 0,
    None: 1,
    X: 2,
    Y: 3,
    Both: 4,
    Default: 5
}
    Telerik.Web.UI.ToolTipScrolling.registerEnum("Telerik.Web.UI.ToolTipScrolling", false);

    Telerik.Web.UI.ToolTipAnimation = function() {
        /// <summary>The animation of the tooltip</summary>
        /// <field name="None" type="Number" integer="true" static="true"></field>
        /// <field name="Resize" type="Number" integer="true" static="true"></field>
        /// <field name="Fade" type="Number" integer="true" static="true"></field>
        /// <field name="Slide" type="Number" integer="true" static="true"></field>
        /// <field name="FlyIn" type="Number" integer="true" static="true"></field>
    };
    Telerik.Web.UI.ToolTipAnimation.prototype =
{
    None: 0,
    Resize: 1,
    Fade: 2,
    Slide: 4,
    FlyIn: 8
}
    Telerik.Web.UI.ToolTipAnimation.registerEnum("Telerik.Web.UI.ToolTipAnimation", false);

    Telerik.Web.UI.ToolTipShowEvent = function() {
        /// <summary>The show event of the tooltip</summary>
        /// <field name="OnMouseOver" type="Number" integer="true" static="true"></field>
        /// <field name="OnClick" type="Number" integer="true" static="true"></field>
        /// <field name="OnRightClick" type="Number" integer="true" static="true"></field>
        /// <field name="OnFocus" type="Number" integer="true" static="true"></field>
        /// <field name="FromCode" type="Number" integer="true" static="true"></field>
    };
    Telerik.Web.UI.ToolTipShowEvent.prototype =
{
    OnMouseOver: 1,
    OnClick: 2,
    OnRightClick: 4,
    OnFocus: 8,
    FromCode: 16
}
    Telerik.Web.UI.ToolTipShowEvent.registerEnum("Telerik.Web.UI.ToolTipShowEvent", false);

    Telerik.Web.UI.ToolTipHideEvent = function() {
        /// <summary>The hide event of the tooltip</summary>
        /// <field name="Default" type="Number" integer="true" static="true"></field>
        /// <field name="LeaveToolTip" type="Number" integer="true" static="true"></field>
        /// <field name="ManualClose" type="Number" integer="true" static="true"></field>
        /// <field name="LeaveTargetAndToolTip" type="Number" integer="true" static="true"></field>
        /// <field name="FromCode" type="Number" integer="true" static="true"></field>
    };
    Telerik.Web.UI.ToolTipHideEvent.prototype =
{
    Default: 1,
    LeaveToolTip: 2,
    ManualClose: 4,
    LeaveTargetAndToolTip: 8,
    FromCode: 16
}
    Telerik.Web.UI.ToolTipHideEvent.registerEnum("Telerik.Web.UI.ToolTipHideEvent", false);

})();/// <reference Name="MicrosoftAjax.js">

$telerik.toToolTipManager = function(object) {
    /// <summary>Casts an object to a RadToolTipManager instance</summary>
    /// <returns type="Telerik.Web.UI.RadToolTipManager">A RadToolTipManager instance<returns>
};
$telerik.findToolTipManager = function(id, parent) {
    /// <summary>Finds a RadToolTipManager instance</summary>
    /// <param name='id'>A string that contains ID of the RadToolTipManager to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadToolTipManager to find</param>
    /// <returns type="Telerik.Web.UI.RadToolTipManager">The RadToolTipManager instance</returns>
};

(function() {

    Telerik.Web.UI.RadToolTipManager = function(element) {

        /// <exclude/>

        /// <summary></summary>
        /// <param name='element' type='' domElement='' optional=''></param>
    };
    Telerik.Web.UI.RadToolTipManager.prototype =
{

    getToolTipByElement: function(element) {
        /// <summary>Gets the tooltip associated with a corresponding target element if such a tooltip exists  </summary>
        /// <param name='element' type='Object' domElement='true'></param>
        /// <returns type='Telerik.Web.UI.RadToolTip'></returns>
    },

    createToolTip: function(targetElement, serverID, serverValue) {
        /// <summary>
        /// Creates a tooltip for a particular element
        /// </summary>
        /// <param name='targetElement' type='Object' domElement='true'></param>
    },

    get_autoTooltipify: function() {
        /// <summary>
        /// Gets a value whether the RadToolTipManager, when its TargetControls collection is empty will tooltipify automatically all elements on the page that have a 'title' attribute
        /// </summary>        
        /// <returns type='Boolean' mayBeNull='false'></returns>
    },

    set_autoTooltipify: function(value) {
        /// <summary>
        /// Sets a value whether the RadToolTipManager, when its TargetControls collection is empty will tooltipify automatically all elements on the page that have a 'title' attribute
        /// </summary>
        /// <param name='value' type='Boolean' domElement='false'></param>
    },

    get_toolTipZoneID: function() {
        /// <summary>Gets the ID of the zone which should be automatically tooltipified</summary>
        /// <returns type='String'></returns>
    },

    set_toolTipZoneID: function(value) {
        /// <summary>Sets the ID of the zone which should be automatically tooltipified</summary>
        /// <param name='value' type='String' domElement='false'></param>
    },

    add_requestEnd: function(handler) {
        /// <summary>
        /// Add a handler to the ResponseEnd event
        /// </summary>
        /// <param name='handler' type='Function'></param>
    },

    remove_requestEnd: function(handler) {
        /// <summary>
        /// Remove a handler from the ResponseEnd event
        /// </summary>
        /// <param name='handler' type='Function'></param>
    },

    add_responseError: function(handler) {
        /// <summary>Add a handler to the ResponseError event</summary>
        /// <param name='handler' type='Function'></param>
    },

    remove_responseError: function(handler) {
        /// <summary>Remove a handler to the ResponseEnd event</summary>
        /// <param name='handler' type='Function'></param>
    }

};

Telerik.Web.UI.RadToolTipManager.registerClass("Telerik.Web.UI.RadToolTipManager", Sys.UI.Control);
})();/// <reference Name="MicrosoftAjax.js">

$telerik.toSpell = function(object)
{
	/// <summary>Casts an object to a RadSpell instance.</summary>
	/// <returns type="Telerik.Web.UI.RadSpell">A RadSpell instance.</returns>
};
$telerik.findSpell = function(id, parent)
{
	/// <summary>Finds a RadSpell instance.</summary>
	/// <param name='id'>A string that contains ID of the RadSpell to find.</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadSpell to find.</param>
	/// <returns type="Telerik.Web.UI.RadSpell">The RadSpell instance.</returns>
};



/*$telerik.toSpellCheckService = function(object)
{
/// <summary>Casts an object to a SpellCheckService instance.</summary>
/// <returns type="Telerik.Web.UI.SpellCheckService">A SpellCheckService instance.</returns>
};
$telerik.findSpellCheckService = function(id, parent)
{
/// <summary>Finds a SpellCheckService instance.</summary>
/// <param name='id'>A string that contains ID of the SpellCheckService to find.</param>
/// <param name='parent' optional='true'>The component or element that contains the SpellCheckService to find.</param>
/// <returns type="Telerik.Web.UI.SpellCheckService">The SpellCheckService instance.</returns>
};*/


(function()
{



	/*==================================================RadSpell======================================================*/

	Telerik.Web.UI.Spell = function(element)
	{

	};

	Telerik.Web.UI.RadSpell = function(element)
	{

	};

	Telerik.Web.UI.RadSpell.prototype =
{

	startSpellCheck: function()
	{
		/// <summary>Launch the spellcheck process.</summary>
	},

	spellCheck: function(source)
	{
		/// <summary>Launch the spellcheck process for the provided TextSource.</summary>
		/// <param name='source' type='' optional='false'>The text source to be spell-checked.</param>
	},

	get_selectedLanguage: function()
	{
		/// <summary>Gets the language currently selected in the drop down displayed
		/// when the SupportedLanguages language property is set.</summary>
		/// <returns type='Object' mayBeNull='true'>The language currently selected in the drop down
		/// displayed when the SupportedLanguages language property is set.</returns>
	},

	get_textSource: function()
	{
		/// <summary>Gets the current TextSource object created from the currently proiveded
		/// control(s) to check and client TextSource class.</summary>
		/// <returns type='Object' mayBeNull=''>The current TextSource object.</returns>
	},

	get_spellChecked: function()
	{
		/// <summary>Gets the bool value indicating whether spell checking for the target control has been completed.</summary>
		/// <returns type='Boolean' mayBeNull='false'>
		/// The bool value indicating whether spell checking for the target control has been completed.
		/// </returns>
	},

	set_spellChecked: function(value)
	{
		/// <summary>Sets a bool value whether the spellcheck process is
		/// completed (true) or not (false). Note: Should not be used directly. It is used by the spellcheck validator.</summary>
		/// <param name='value' type='' domElement='' optional=''></param>
	},

	get_dialogOpener: function()
	{
		/// <summary>Gets the instance of the client-side DialogOpener object
		/// that handles that dialog opening/parameter passing processes.</summary>
		/// <returns type='Object' mayBeNull='false'>The current DialogOpener.</returns>
	},

	set_dialogOpener: function(value)
	{
		/// <summary>Sets a client-side DialogOpener object.
		///that handles that dialog opening/parameter passing processes.</summary>
		/// <param name='value' type='Object'>The DialogOpener object.</param>
	},

	get_dictionaryLanguage: function()
	{
		/// <summary>Gets the dictionary language culture code.</summary>
		/// <returns type='String' mayBeNull=''>The dictionary language culture code.</returns>
	},

	set_dictionaryLanguage: function(value)
	{
		/// <summary>Sets a dictionary language culture code to the spell.</summary>
		/// <param name='value' type='String' optional='false'>The dictionary language culture code to.</param>
	},

	get_controlToCheck: function()
	{
		/// <summary>Gets the client ID of the control to spell check.</summary>
		/// <returns type='String' mayBeNull='true'>The client ID of the control to spell check.</returns>
	},

	set_controlToCheck: function(value)
	{
		/// <summary>Sets a client ID of the control to spell check.</summary>
		/// <param name='value' type='String' optional=''>The client ID of the control to spell check.</param>
	},

	get_controlsToCheck: function()
	{
		/// <summary>Gets the array containing the client IDs of the controls to be spell checked.</summary>
		/// <returns type='String[]' mayBeNull=''>The array of controls' client IDs to be spell checked.</returns>
	},

	set_controlsToCheck: function(value)
	{
		/// <summary>Sets an array containing the client IDs of the controls to be spell checked.</summary>
		/// <param name='value' type='String[]'>The array containing the client IDs of the controls to be spell checked.</param>
	},

	get_clientTextSource: function()
	{
		/// <summary>Gets the class of the client side text source object.</summary>
		/// <returns type='' mayBeNull='true'>The class of the client side text source object.</returns>
	},

	set_clientTextSource: function(value)
	{
		/// <summary>Sets a class of the client side text source object.</summary>
		/// <param name='value' type='Object' optional='false'>The class of the client side text source object.</param>
	},

	get_ajaxUrl: function()
	{
		/// <summary>Gets the URL which the AJAX call will be made to. Check the help for more information.</summary>
		/// <returns type='String'>The URL which the AJAX call will be made to. Check the help for more information.</returns>
	},

	set_ajaxUrl: function(value)
	{
		/// <summary>Sets the URL which the AJAX call will be made to. Check the help for more information.</summary>
		/// <param name='value' type='String'>The URL which the AJAX call will be made to. Check the help for more information.</param>
	},

	get_useClassicDialogs: function()
	{
		/// <summary>Gets the bool value indicating whether the classic dialogs should be used.
		/// 'true': the browser window is used, 'false'(default) RadWindow is used.</summary>
		/// <returns type='Boolean'>The bool value indicating whether the classic dialogs should be used.</returns>
	},

	set_useClassicDialogs: function(value)
	{
		/// <summary>Sets a bool value indicating whether the classic dialogs will be used by the control.
		/// 'true': the browser window is used, 'false'(default) RadWindow is used.</summary>
		/// <param name='value' type='Boolean'>The bool value indicating whether the classic dialogs will be used by the control.
		/// 'true': the browser window is used, 'false'(default) RadWindow is used.</param>
	},

	add_load: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientLoad event (after the spell control is initialized).
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientLoad event.
		/// </param>
	},

	remove_load: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientLoad event.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientLoad event.
		/// </param>
	},

	add_clientDialogClosing: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientDialogClosing event(when spell checking is finished).
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientDialogClosing event.
		/// </param>
	},

	remove_clientDialogClosing: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientDialogClosing event.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientDialogClosing event.
		/// </param>
	},

	add_clientCheckCancelled: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientCheckCancelled event.(when spell checking is cancelled)
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientCheckCancelled event.
		/// </param>
	},

	remove_clientCheckCancelled: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientCheckCancelled event.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientCheckCancelled event.
		/// </param>
	},

	add_clientCheckFinished: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientCheckFinished event(when spell checking is finished).
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientCheckFinished event.
		/// </param>
	},

	remove_clientCheckFinished: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientCheckFinished event.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientCheckFinished event.
		/// </param>
	},

	add_clientCheckStarted: function(handler)
	{
		/// <summary>
		/// Adds a handler to the OnClientCheckStarted event(when spell checking is started).
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientCheckStarted event.
		/// </param>
	},

	remove_clientCheckStarted: function(handler)
	{
		/// <summary>
		/// Removes a handler from the OnClientCheckStarted event.
		/// </summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientCheckStarted event.
		/// </param>
	}

};

	Telerik.Web.UI.RadSpell.registerClass("Telerik.Web.UI.RadSpell", Sys.UI.Control);

	Telerik.Web.UI.Spell.HtmlElementTextSource = function(element)
	{

	};
	Telerik.Web.UI.Spell.HtmlElementTextSource.prototype =
{

	get_text: function()
	{
		/// <summary>Gets the text of the (Telerik.Web.UI.Spell.HtmlElementTextSource) TextSource object.</summary>
		/// <returns type='String'>The text of the TextSource object.</returns>
	},

	set_text: function(text)
	{
		/// <summary>Sets a text to the (Telerik.Web.UI.Spell.HtmlElementTextSource) TextSource object.</summary>
		/// <param name='text' type='String'>The text to be set.</param>
	},

	get_element: function()
	{
		/// <summary>Gets the HTML element of the TextSource object.</summary>
		/// <returns type='Object' domElement='true' mayBeNull=''>The HTML element of the TextSource object.</returns>
	}

	/*set_element: function(value)
	{
	/// <summary>Sets an HTML element to the TextSource object</summary>
	/// <param name='value' type='Object' domElement='true'>The HTML element to be set.</param>
	}*/

};
	Telerik.Web.UI.Spell.HtmlElementTextSource.registerClass("Telerik.Web.UI.Spell.HtmlElementTextSource", Sys.UI.Control);
	Telerik.Web.UI.Spell.MultipleHtmlElementsSource = function(elementsArray)
	{

	};
	Telerik.Web.UI.Spell.MultipleHtmlElementsSource.prototype =
{
	get_text: function()
	{
		/// <summary>Gets the text of the (Telerik.Web.UI.Spell.MultipleHtmlElementsSource) multiple TextSource objects.</summary>
		/// <returns type='String'>The text of the TextSource object.</returns>
	},

	set_text: function(text)
	{
		/// <summary>Sets a text to the (Telerik.Web.UI.Spell.MultipleHtmlElementsSource) multiple TextSource objects.</summary>
		/// <param name='text' type='String'>The text to be set.</param>
	},

	get_elements: function()
	{
		/// <summary>Gets an array containg the HTML elements of the multiple TextSource objects.</summary>
		/// <returns type='Object[]'>An array containg the HTML elements of the multiple TextSource objects.</returns>
	}

};
	Telerik.Web.UI.Spell.MultipleHtmlElementsSource.registerClass("Telerik.Web.UI.Spell.MultipleHtmlElementsSource", Sys.UI.Control);



	/*==================================================RadSpell======================================================*/





	/*==================================================SpellCheckService======================================================*/

	Telerik.Web.UI.SpellCheckService = function()
	{

	};
	Telerik.Web.UI.SpellCheckService.prototype =
{

	spellCheck: function(text)
	{
		/// <summary></summary>
		/// <param name='text' type='' domElement='' optional=''></param>
	},

	addCustomWord: function(word)
	{
		/// <summary></summary>
		/// <param name='word' type='' domElement='' optional=''></param>
	},

	get_url: function()
	{
		/// <summary></summary>
		/// <returns type='' mayBeNull=''></returns>
	},

	set_url: function(value)
	{
		/// <summary></summary>
		/// <param name='value' type='' domElement='' optional=''></param>
	},

	get_language: function()
	{
		/// <summary></summary>
		/// <returns type='' mayBeNull=''></returns>
	},

	set_language: function(value)
	{
		/// <summary></summary>
		/// <param name='value' type='' domElement='' optional=''></param>
	},

	get_configuration: function()
	{
		/// <summary></summary>
		/// <returns type='' mayBeNull=''></returns>
	},

	set_configuration: function(value)
	{
		/// <summary></summary>
		/// <param name='value' type='' domElement='' optional=''></param>
	},

	add_complete: function(handler)
	{
		/// <summary>
		/// Adds a handler to the Complete event
		/// </summary>
		/// <param name="handler" type="Function">
		/// handler
		/// </param>

	},

	remove_complete: function(handler)
	{
		/// <summary>
		/// Removes a handler from the Complete event
		/// </summary>
		/// <param name="handler" type="Function">
		/// handler
		/// </param>

	}

};
	Telerik.Web.UI.SpellCheckService.registerClass("Telerik.Web.UI.SpellCheckService", Sys.Component);



	/*==================================================SpellCheckService======================================================*/

})();/// <reference Name="MicrosoftAjax.js">



$telerik.toSliderItem = function(object)
{
	/// <summary>Casts an object to a RadSliderItem instance</summary>
	/// <returns type="Telerik.Web.UI.RadSliderItem">A RadSliderItem instance</returns>
};
$telerik.findSliderItem = function(id, parent)
{
	/// <summary>Finds a RadSliderItem instance</summary>
	/// <param name='id'>A string that contains ID of the RadSliderItem to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadSliderItem to find</param>
	/// <returns type="Telerik.Web.UI.RadSliderItem">The RadSliderItem instance</returns>
};

Telerik.Web.UI.SliderItemType = function()
{
	/// <summary>Specifies the possible values for the ItemType property of the RadSlider control</summary>
	/// <field name="None" type="Number" integer="true" static="true">Any value or range can be selected from the slider</field>
	/// <field name="Item" type="Number" integer="true" static="true">Only specific item or range between items can be selected from the slider</field>
	/// <field name="Tick" type="Number" integer="true" static="true">Ticks are rendered, and any 'tick' value or range between the 'ticks' can be selected</field>
};
Telerik.Web.UI.SliderItemType.prototype =
{
	None: 1,
	Item: 2,
	Tick: 3
}
Telerik.Web.UI.SliderItemType.registerEnum("Telerik.Web.UI.SliderItemType", false);

Telerik.Web.UI.SliderTrackPosition = function()
{
	/// <summary>Specifies the possible values for the TrackPosition property of the RadSlider control</summary>
	/// <field name="Center" type="Number" integer="true" static="true">The track is centered</field>
	/// <field name="TopLeft" type="Number" integer="true" static="true">The track is positioned above the items' text</field>
	/// <field name="BottomRight" type="Number" integer="true" static="true">The track is positioned below the items' text</field>
};
Telerik.Web.UI.SliderTrackPosition.prototype =
{
	Center: 1,
	TopLeft: 2,
	BottomRight: 3
}
Telerik.Web.UI.SliderTrackPosition.registerEnum("Telerik.Web.UI.SliderTrackPosition", false);

$telerik.toSlider = function(object)
{
	/// <summary>Casts an object to a RadSlider instance</summary>
	/// <returns type="Telerik.Web.UI.RadSlider">A RadSlider instance</returns>
};
$telerik.findSlider = function(id, parent)
{
	/// <summary>Finds a RadSlider instance</summary>
	/// <param name='id'>A string that contains ID of the RadSlider to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadSlider to find</param>
	/// <returns type="Telerik.Web.UI.RadSlider">The RadSlider instance</returns>
};

Telerik.Web.UI.RadSlider = function(element)
{
	/// <summary>RadSlider is a flexible UI component which allows users to select a value from a defined range</summary>
	/// <param name="element" type="Object" domElement="true">The DOM element the control is associated with</param>
};
Telerik.Web.UI.RadSlider.prototype =
{
	repaint: function()
	{
		/// <summary>Repaints the slider control and forces it to recalculate the size of its elements. Use this method when the 
		/// control is in an intially hidden element
		/// </summary>
	},

	get_childListElement: function()
	{
		/// <summary>Gets a reference to the UL element containing the slider items (<LI>s)</summary>
		/// <returns type='Object' domElement='true'>The UL element containing the slider items (<LI>s)</returns>
	},

	get_selectedItem: function()
	{
		/// <summary>Gets the currently selected item of the slider</summary>
		/// <returns type='Telerik.Web.UI.RadSliderItem' mayBeNull='true'>The currently selected item of the slider</returns>
	},

	get_selectedItems: function()
	{
		/// <summary>Gets an array of the currently selected items</summary>
		/// <returns type='Telerik.Web.UI.RadSliderItem[]' mayBeNull='true'>An array of currently selected items</returns>
	},

	get_selectedValue: function()
	{
		/// <summary>Gets the value of the currently selected item</summary>
		/// <returns type='String'>The value of the currently selected item</returns>
	},

	add_load: function(handler)
	{
		/// <summary>Adds a handler to the load event</summary>
		/// <param name="handler" type="Function">The handler for the load event</param>
	},

	remove_load: function(handler)
	{
		/// <summary>Removes the handler from the load event</summary>
		/// <param name="handler" type="Function"> The handler of the load event</param>
	},

	add_slideStart: function(handler)
	{
		/// <summary>Adds a handler to the slideStart event</summary>
		/// <param name="handler" type="Function">The handler for the slideStart event</param>
	},

	remove_slideStart: function(handler)
	{
		/// <summary>Removes the handler from the slideStart event</summary>
		/// <param name="handler" type="Function">The handler of the slideStart event</param>
	},

	add_slide: function(handler)
	{
		/// <summary>Adds a handler to the slide event</summary>
		/// <param name="handler" type="Function">The handler for the slide event</param>
	},

	remove_slide: function(handler)
	{
		/// <summary>Removes the handler from the slide event</summary>
		/// <param name="handler" type="Function">The handler of the slide event</param>
	},

	add_slideEnd: function(handler)
	{
		/// <summary>Adds a handler to the slideEnd event</summary>
		/// <param name="handler" type="Function">The handler for the slideEnd event</param>
	},

	remove_slideEnd: function(handler)
	{
		/// <summary>Removes the handler from the slideEnd event</summary>
		/// <param name="handler" type="Function">The handler of the slideEnd event</param>
	},

	add_valueChanged: function(handler)
	{
		/// <summary>Adds a handler to the valueChanged event</summary>
		/// <param name="handler" type="Function">The handler for the valueChanged event</param>
	},

	remove_valueChanged: function(handler)
	{
		/// <summary>Removes the handler from the valueChanged event</summary>
		/// <param name="handler" type="Function">The handler of the valueChanged event</param>
	},

	add_valueChanging: function(handler)
	{
		/// <summary> Adds a handler to the valueChanging event</summary>
		/// <param name="handler" type="Function"> The handler for the valueChanging event</param>
	},

	remove_valueChanging: function(handler)
	{
		/// <summary>Removes the handler from the valueChanging event</summary>
		/// <param name="handler" type="Function">The handler of the valueChanging event</param>
	},

	get_activeHandle: function()
	{
		/// <summary>Gets a reference to the HTML element of the currently active drag handle</summary>
		/// <returns type='Object' domElement='true' mayBeNull='true'>The HTML element of the currently active drag handle</returns>
	},

	get_dragHandles: function()
	{
		/// <summary>Gets the array containing the (two) drag handles of the slider control</summary>
		/// <returns type='Object[]' mayBeNull='true'>The array containing the (two) drag handles of the slider</returns>
	},

	get_value: function()
	{
		/// <summary>Gets the current value of the slider control</summary>
		/// <returns type="Number" integer="true" mayBeNull="false">The current value of the slider</returns>
	},

	set_value: function(value)
	{
		/// <summary>Sets the current value of the slider control</summary>
		/// <param name="value" type="Number" integer="true">The value to be set</param>
	},

	get_selectionStart: function()
	{
		/// <summary>Gets the starting value of the range, when IsSelectionRangeEnabled is set to true</summary>
		/// <returns type="Number" integer="true" mayBeNull="false">The starting value of the range, when IsSelectionRangeEnabled is set to true</returns>
	},

	set_selectionStart: function(value)
	{
		/// <summary>Sets the starting value of the range, when IsSelectionRangeEnabled is set to true</summary>
		/// <param name="value" type="Number" integer="true">The starting value to be set</param>
	},

	get_selectionEnd: function()
	{
		/// <summary>Gets the ending value of the range when IsSelectionRangeEnabled is set to true</summary>
		/// <returns type="Number" integer="true" mayBeNull="false">The ending value of the range, when IsSelectionRangeEnabled is set to true</returns>
	},

	set_selectionEnd: function(value)
	{
		/// <summary>Sets the ending value of the range when IsSelectionRangeEnabled is set to true</summary>
		/// <param name="value" type="Number" integer="true">The ending value to be set</param>
	},

	get_isSelectionRangeEnabled: function()
	{
		/// <summary>Gets a value, indicating whether the slider has two drag handles (Selection start handle -- Selection end handle).
		/// This way the user can select a specific range of items/values
		/// </summary>
		/// <returns type="Boolean" mayBeNull="false">A value, indicating whether the slider control has two drag handles</returns>
	},

	set_isSelectionRangeEnabled: function(value)
	{
		/// <summary>Sets a value, indicating whether the slider has two drag handles (Selection start handle -- Selection end handle).
		/// This way the user can select a specific range of items/values
		/// </summary>
		/// <param name="value" type="Boolean">Enable/Disable selection range</param>
	},

	get_isDirectionReversed: function()
	{
		/// <summary>Gets the bool value, indicating whether the direction of the slider is reversed</summary>
		/// <returns type="Boolean" mayBeNull="false">The bool value, indicating whether the direction of the slider is reversed</returns>
	},

	set_isDirectionReversed: function(value)
	{
		/// <summary>Sets the bool value, indicating whether the direction of the slider is reversed</summary>
		/// <param name="value" type="Boolean">The bool value, indicating whether the direction will be reversed</param>
	},

	get_liveDrag: function()
	{
		/// <summary>Gets the bool value, indicating whether the value of the slider will change
		/// while the drag hanle is moving, or when the drag handle is released
		/// </summary>
		/// <returns type="Boolean" mayBeNull="false">The value, indicating whether the value of the slider will change
		/// while the drag hanle is moving, or when the drag handle is released
		/// </returns>
	},

	set_liveDrag: function(value)
	{
		/// <summary>Sets the bool value indicating whether the value of the slider will change
		/// while the drag hanle is moving, or when the drag handle is released
		/// </summary>
		/// <param name="value" type="Boolean">The value indicating whether the value of the slider will change
		/// while the drag hanle is moving, or when the drag handle is released
		/// </param>
	},

	get_minimumValue: function()
	{
		/// <summary>Gets the current minimum value that can be selected with slider</summary>
		/// <returns type="Number" mayBeNull="false">The current minimum value that can be selected with slider</returns>
	},

	set_minimumValue: function(value)
	{
		/// <summary>Sets the current minimum value that can be selected with slider</summary>
		/// <param name="value" type="Number" integer="true">The minimum value to be set</param>
	},

	get_maximumValue: function()
	{
		/// <summary>Gets the current maximum value that can be selected with slider</summary>
		/// <returns type="Number" mayBeNull="false">The current maximum value that can be selected with the slider</returns>
	},

	set_maximumValue: function(value)
	{
		/// <summary>Sets the current maximum value that can be selected with slider</summary>
		/// <param name="value" type="Number" integer="true">The maximum value to be set</param>
	},

	get_orientation: function()
	{
		/// <summary>Gets the current orientation of the slider control - horizontal or vertical</summary>
		/// <returns type="Telerik.Web.UI.Orientation" mayBeNull="false">The current orienation of the slider control</returns>
	},

	set_orientation: function(value)
	{
		/// <summary>Sets the current orientation of the slider control - horizontal or vertical</summary>
		/// <param name="value" type="Telerik.Web.UI.Orientation">The orientaion to be set</param>
	},

	get_animationDuration: function()
	{
		/// <summary>Gets the animation duration in milliseconds</summary>
		/// <returns type="Number" mayBeNull="false">The number of miliseconds the animation will last</returns>
	},

	set_animationDuration: function(value)
	{
		/// <summary>Sets an animation duration in milliseconds</summary>
		/// <param name="value" type="Number" integer="true">Number of milliseconds</param>
	},

	get_width: function()
	{
		/// <summary>Gets the width of the slider</summary>
		/// <returns type="Number" mayBeNull="false">The width of the slider</returns>
	},

	set_width: function(value)
	{
		/// <summary>Sets a width to the slider</summary>
		/// <param name="value" type="Number" integer="true">The width of the slider to be set</param>
	},

	get_height: function()
	{
		/// <summary>Gets the height of the slider</summary>
		/// <returns type="Number" mayBeNull="false">The height of the slider</returns>
	},

	set_height: function(value)
	{
		/// <summary>Sets a height to the slider</summary>
		/// <param name="value" type="Number" integer="true">The height of the slider to be set</param>
	},

	get_showDecreaseHandle: function()
	{
		/// <summary>Gets the bool value indicating whether the decrease handle is displayed</summary>
		/// <returns type="Boolean" mayBeNull="false">The bool value indicatiing whether the decrease handle is displayed</returns>
	},

	set_showDecreaseHandle: function(value)
	{
		/// <summary>Sets a bool value indicating whether the decrease handle is displayed</summary>
		/// <param name="value" type="Boolean">The bool value indicating whether the decrease handle is displayed</param>
	},

	get_showIncreaseHandle: function()
	{
		/// <summary>Gets the bool value indicating whether the increase handle is displayed</summary>
		/// <returns type="Boolean" mayBeNull="false">The bool value indicating whether the increase handle is displayed</returns>
	},

	set_showIncreaseHandle: function(value)
	{
		/// <summary>Sets a bool value indicating whether the increase handle is displayed</summary>
		/// <param name="value" type="Boolean">The bool value indicating whether the increase handle is displayed</param>
	},

	get_showDragHandle: function()
	{
		/// <summary>Gets the bool value indicating whether the drag handle is displayed</summary>
		/// <returns type="Boolean" mayBeNull="false">The bool value indicating whether the drag handle is displayed</returns>
	},

	set_showDragHandle: function(value)
	{
		/// <summary>Sets a bool value indicating whether the drag handle is displayed</summary>
		/// <param name="value" type="Boolean">The bool value indicating whether the drag handle is displayed</param>
	},

	get_trackMouseWheel: function()
	{
		/// <summary>Gets the bool value indicating whether the mouse wheel will change the value of the slider</summary>
		/// <returns type="Boolean" mayBeNull="false">The bool value indicating whether the mouse wheel will change the value of the slider</returns>
	},

	set_trackMouseWheel: function(value)
	{
		/// <summary>Sets a bool value indicating whether the mouse wheel will change the value of the slider</summary>
		/// <param name="value" type="Boolean">The bool value indicating whether the mouse wheel will change the value of the slider </param>
	},

	get_largeChange: function()
	{
		/// <summary>Gets the delta with which the value will change when user clicks on the track</summary>
		/// <returns type="Number" mayBeNull="false">The delta with which the value will change when the user clicks on the track</returns>
	},

	set_largeChange: function(value)
	{
		/// <summary>Sets the delta with which the value will change when user clicks on the track</summary>
		/// <param name="value" type="Number" integer="true">The delta with which the value will change when the user clicks on the track</param>
	},

	get_smallChange: function()
	{
		/// <summary>Gets the step with which the slider value will change</summary>
		/// <returns type="Number" mayBeNull="false">The step with which the slider value will change</returns>
	},

	set_smallChange: function(value)
	{
		/// <summary>Sets the step with which the slider value will change</summary>
		/// <param name="value" type="Number" integer="true">The step with which the slider value will change</param>
	},

	get_itemType: function()
	{
		/// <summary>Gets the [Telerik.Web.UI.SliderItemType] type of the items in the slider control</summary>
		/// <returns type='Telerik.Web.UI.SliderItemType'>The type of the items in the slider control</returns>
	},

	get_trackPosition: function()
	{
		/// <summary>Gets the [Telerik.Web.UI.SliderTrackPosition] position of the track</summary>
		/// <returns type='Telerik.Web.UI.SliderTrackPosition' mayBeNull='false'> The position of the track</returns>
	},

	set_trackPosition: function(value)
	{
		/// <summary>Sets the position of the track</summary>
		/// <param name='value' type='Telerik.Web.UI.SliderTrackPosition'>The position of the track</param>
	},

	get_visibleItems: function()
	{
		/// <summary>Gets an array of all the visible items of the slider</summary>
		/// <returns type='Telerik.Web.UI.RadSliderItem[]'>The array containing the visible items of the slider</returns>
	},

	get_items: function()
	{
		/// <summary>Gets an array of all the items of the slider</summary>
		/// <returns type='Telerik.Web.UI.RadSliderItem[]'>The array containing the items of the slider</returns>
	},

	get_enabled: function()
	{
		/// <summary>Gets the bool value indicating whether the slider is enabled</summary>
		/// <returns type="Boolean" mayBeNull="false">The bool value indicating whether the slider is enabled or not</returns>
	},

	set_enabled: function(value)
	{
		/// <summary>Enables/Disables the slider</summary>
		/// <param name="value" type="Boolean">Enable/Disable the slider</param>
	},

	get_dragText: function()
	{
		/// <summary>Gets the tooltip for the drag handle</summary>
		/// <returns type='String'>The tooltip for the drag handle</returns>
	},

	set_dragText: function(value)
	{
		/// <summary>Sets the tooltip for the drag handle</summary>
		/// <param name='value' type='String'>The tooltip for the drag handle</param>
	},

	get_skin: function()
	{
		/// <summary>Gets the skin name of the slider</summary>
		/// <returns type="String" mayBeNull="false">The skin name of the slider</returns>
	}
};
Telerik.Web.UI.RadSlider.registerClass("Telerik.Web.UI.RadSlider", Sys.UI.Control);

Telerik.Web.UI.RadSliderItem = function()
{
	/// <summary>Initializes a new instance of the Telerik.Web.UI.RadSliderItem class</summary>
};
Telerik.Web.UI.RadSliderItem.prototype =
{
	set_visible: function(value)
	{
		/// <summary>Sets a value indicating whether the slider item will be visible or not (uses the display CSS attribute)</summary>
		/// <param name='value' type='Boolean'>The value indicating whether the slider item will be visible or not</param>
	},

	get_selected: function()
	{
		/// <summary>Gets a bool value, indicating whether the slider item is selected or not</summary>
		/// <returns type='Boolean' mayBeNull='false'>The bool value, indicating whether the slider item is selected or not</returns>
	},

	set_cssClass: function(value)
	{
		/// <summary>Sets a CSS class to the slider item</summary>
		/// <param name='value' type='String'>The name of the CSS class to be set</param>
	},

	get_cssClass: function()
	{
		/// <summary>Gets the name of the currently applied CSS class to the item</summary>
		/// <returns type='String'>The name of the currently applied CSS class to the item</returns>
	},

	set_tooltip: function(value)
	{
		/// <summary>Sets a text that will be displayed as a tooltip, when the mouse hovers over the item</summary>
		/// <param name='value' type='String'>The tooltip text</param>
	},

	get_tooltip: function()
	{
		/// <summary>Gets the current text that is displayed as a tooltip when the mouse hovers over the item</summary>
		/// <returns type='String'>The tooltip text</returns>
	},
	
	get_textElement: function()
	{
		/// <summary>Gets the wrapper element of the slider item</summary>
		/// <returns type='Object' domElement='true'>The wrapper element of the item</returns>
	},

	get_slider: function()
	{
		/// <summary>Gets a reference to the parent slider [Telerik.Web.UI.RadSlider] object</summary>
		/// <returns type='Telerik.Web.UI.RadSlider'>The parent slider, where the item belongs to</returns>
	}
};/// <reference Name="MicrosoftAjax.js">

$telerik.toXmlHttpPanel = function(object)
{
	/// <summary>Casts an object to a RadXmlHttpPanel instance</summary>
	/// <returns type="Telerik.Web.UI.RadXmlHttpPanel">A RadXmlHttpPanel instance<returns>
};
$telerik.findXmlHttpPanel = function(id, parent)
{
	/// <summary>Finds a RadXmlHttpPanel instance</summary>
	/// <param name='id'>A string that contains ID of the RadXmlHttpPanel to find</param>
	/// <param name='parent' optional='true'>The component or element that contains the RadXmlHttpPanel to find</param>
	/// <returns type="Telerik.Web.UI.RadXmlHttpPanel">The RadXmlHttpPanel instance</returns>
};

(function()
{

	Telerik.Web.UI.RadXmlHttpPanel = function(element)
	{
		/// <summary>Initializes a new instance of the Telerik.Web.UI.RadXmlHttpPanel class.</summary>
		/// <param name='element' domElement='true'>The outermost DOM element of RadXmlHttpPanel.</param>
	};
	Telerik.Web.UI.RadXmlHttpPanel.prototype =
{

	/*initialize: function()
	{
	/// <summary>Initializes the Telerik.Web.UI.RadXmlHttpPanel object.</summary>
	},*/

	get_webMethodName: function()
	{
		/// <summary>Gets the name of the WebMethod that updates the content of the RadXmlHttpPanel
		/// control (when WebService is used).</summary>
		/// <returns type='' mayBeNull=''>The name of the WebMethod that updates the content of the RadXmlHttpPanel control.</returns>
	},

	/*set_webMethodName: function(value)
	{
	/// <summary>Sets the WebMethod that will update the content of the RadXmlHttpPanel control (when WebService is used).</summary>
	/// <param name='value'>The name of the WebMethod.</param>
	},*/

	get_webMethodPath: function()
	{
		/// <summary>Gets the path of the WebService that updates the content of the RadXmlHttpPanel control.</summary>
		/// <returns type='' mayBeNull=''>The path of the WebService that updates the content of the RadXmlHttpPanel control.</returns>
	},

	/*set_webMethodPath: function(value)
	{
	/// <summary>Sets a path of the WebService that updates the content of the RadXmlHttpPanel control.</summary>
	/// <param name='value' type='' domElement='' optional=''>The path of the WebService.</param>
	},*/

	get_value: function()
	{
		/// <summary>Gets the current value of the RadXmlHttpPanel control.</summary>
		/// <returns type='' mayBeNull=''>The current value of the RadXmlHttpPanel control.</returns>
	},

	set_value: function(value)
	{
		/// <summary>Initiates a partial page update and sets a value to the RadXmlHttpPanel control.
		/// A client callback occurs or a WebService is contacted to update the control's content.</summary>
		/// <param name='value' type='' domElement='' optional=''>The value set to the RadXmlHttpPanel control.</param>
	},

	reload: function()
	{
		/// <summary>Refresh the content of the panel and keeping the value RadXmlHttpPanel control.</summary>
	},

	set_html: function(content)
	{
		/// <summary>Sets a custom HTML content to the RadXmlHttpPanel control.</summary>
		/// <param name='content' type='String' domElement='' optional=''>The HTML content to be pasted in the control.</param>
	},

	add_responseEnded: function(handler)
	{
		/// <summary>Adds a handler to the OnClientResponseEnded event.
		/// The OnClientResponseEnded occurs immediately after the data (content) is pasted into the RadXmlHttpPanel.
		/// This client-side event is subsequent to the OnClientResponseEnding event.</summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientResponseEnded event.
		/// </param>
	},

	remove_responseEnded: function(handler)
	{
		/// <summary>Removes the handler from the OnClientResponseEnded event.
		/// The OnClientResponseEnded occurs immediately after the data (content) is pasted into the RadXmlHttpPanel.
		/// This client-side event is subsequent to the OnClientResponseEnding event.</summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientResponseEnded event.
		/// </param>
	},

	add_responseEnding: function(handler)
	{
		/// <summary>Adds a handler to the OnClientResponseEnding event.
		/// The OnClientResponseEnding occurs before the data (content) is pasted into the RadXmlHttpPanel control.</summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientResponseEnding event.
		/// </param>
	},

	remove_responseEnding: function(handler)
	{
		/// <summary>Removes the handler from the OnClientResponseEnding event.
		/// The OnClientResponseEnding occurs before the data (content) is pasted into the RadXmlHttpPanel control.</summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientResponseEnding event.
		/// </param>
	},

	/*add_responseEnd: function(handler)
	{
	/// <summary>DEPRECATED! Use "add_responseEnded" instead.</summary>
	},

	remove_responseEnd: function(handler)
	{
	/// <summary>DEPRECATED! Use "remove_responseEnded" instead.</summary>
	},*/

	add_responseError: function(handler)
	{
		/// <summary>Adds a handler to the OnClientResponseError event.
		/// The OnClientResponseError occurs in the cases when an error (WebService or Callback error) occurs
		/// when the RadXmlHttpPanel tries to load certain content.</summary>
		/// <param name="handler" type="Function">
		/// The handler for the OnClientResponseError event.
		/// </param>
	},

	remove_responseError: function(handler)
	{
		/// <summary>Removes the handler from the OnClientResponseError event.
		/// The OnClientResponseError occurs in the cases when an error (WebService or Callback error) occurs
		/// when the RadXmlHttpPanel tries to load certain content.</summary>
		/// <param name="handler" type="Function">
		/// The handler of the OnClientResponseError event.
		/// </param>
	},

	get_enableClientScriptEvaluation: function()
	{
		/// <summary>Gets the bool value indicating whether any of the client scripts
		/// loaded within the RadXmlHttpPanel control will be evaluated. (If a SCRIPT tag is found the client code is evaluated.)</summary>
		/// <returns type='Boolean' mayBeNull=''>The bool value indicating whether any of the client scripts
		/// loaded within the RadXmlHttpPanel control will be evaluated.</returns>
	},

	set_enableClientScriptEvaluation: function(value)
	{
		/// <summary>Enables/Disables the evalutaion of the client scripts
		/// loaded within the RadXmlHttpPanel control. (If a SCRIPT tag is found the client code is evaluated.)</summary>
		/// <param name='value' type='' domElement='' optional=''>Enable/Disable client script evaluation.</param>
	},

	get_loadingPanelID: function()
	{
		/// <summary>Gets the ID of the Telerik.Web.UI.RadAjaxLoadingPanel control,
		/// that is displayed during the partial page update.</summary>
		/// <returns type='String' mayBeNull=''>The ID of the RadAjaxLoadingPanel control.</returns>
	},

	set_loadingPanelID: function(val)
	{
		/// <summary>Sets an ID of the Teleirk.Web.UI.RadAjaxLoadingPanel control,
		/// that will be displayed during the partial page update.</summary>
		/// <param name='val' type='String' domElement='' optional=''>The ID of the AjaxLoadingPanel.</param>
	}

};

	Telerik.Web.UI.RadXmlHttpPanel.registerClass("Telerik.Web.UI.RadXmlHttpPanel", Sys.UI.Control);

	Telerik.Web.UI.RadXmlHttpPanelEventArgs = function(content)
	{

	};
	Telerik.Web.UI.RadXmlHttpPanelEventArgs.prototype =
{

	get_content: function()
	{
		/// <summary>Gets the HTML content that will be rendered inside the RadXmlHttpPanel control.</summary>
		/// <returns type='String' mayBeNull='false'>A string representing the HTML content.</returns>
	},

	set_content: function(value)
	{
		/// <summary>Sets an HTML content that will be rendered inside the RadXmlHttpPanel control.</summary>
		/// <param name='value' type='String' domElement='' optional=''>A string representing the HTML content.</param>
	}

};
	Telerik.Web.UI.RadXmlHttpPanelEventArgs.registerClass("Telerik.Web.UI.RadXmlHttpPanelEventArgs", Sys.CancelEventArgs);
	Telerik.Web.UI.RadXmlHttpPanelErrorEventArgs = function(data)
	{

	};
	Telerik.Web.UI.RadXmlHttpPanelErrorEventArgs.prototype =
{

	get_errorMessage: function()
	{
		/// <summary>Gets the message displayed when an error has occured during the process of loading content.</summary>
		/// <returns type='String' mayBeNull=''>The error message.</returns>
	},

	get_cancelErrorAlert: function()
	{
		/// <summary>Gets the bool value indicating whether the error message will be alerted.</summary>
		/// <returns type='Boolean' mayBeNull=''>The value indicating whether the error message will be alerted.</returns>
	},

	set_cancelErrorAlert: function(value)
	{
		/// <summary>Cancels (or not) the error message alert<./summary>
		/// <param name='value' type='Boolean' domElement='' optional=''>Whether or not the error message alert should be cancelled.</param>
	}

};
	Telerik.Web.UI.RadXmlHttpPanelErrorEventArgs.registerClass("Telerik.Web.UI.RadXmlHttpPanelErrorEventArgs", Sys.EventArgs);
})();$telerik.findUpload = function (id, parent) {
    /// <summary>Finds a RadUpload instance</summary>
    /// <param name='id'>A string that contains ID of the RadUpload to find</param>
    /// <param name='parent' optional='true'>The component or element that contains the RadUpload to find</param>
    /// <returns type="Telerik.Web.UI.RadUpload">The RadUpload instance</returns>
};

$telerik.toUpload = function(object) {
    /// <summary>Casts an object to a RadUpload instance</summary>
    /// <returns type="Telerik.Web.UI.RadUpload">A RadUpload instance<returns>
};

Telerik.Web.UI.RadUpload = function(element) {
/// <summary>Initializes a new instance of RadUpload</summary>
/// <param name="element" domElement="true">The outermost DOM element of RadUpload</param>    
}

Telerik.Web.UI.RadUpload.prototype = {
        getID: function(suffix) {
        ///<summary>Creates a new ID, based on the RadUpload ClientID and the supplied parameter. This method must         
        ///be used when adding custom fields to a RadUpload instance</summary>
        /// <param name="suffix" >The suffix that will be appended to the </param>
        },
        addFileInput: function() {
        ///<summary>Adds a new row to the RadUpload control.</summary>	
        },
        addFileInputAt: function(index) {
        ///<summary>Adds a new row to the RadUpload control at the specified (0-based) location.</summary>
        ///<param  name="index" type="Number" integer="true">index of the row to insert at</param>
        },
        appendCheckBox: function(container) {
        ///<summary>Appends a check box to the specified row. This method is useful for customizing the order of control elements</summary>
		///<param  name="container">the row to insert the checkbox at</param>
        },
        appendClearButton: function(container) {
        ///<summary>Appends a clear button to the specified row. This method is useful for customizing the order of control elements.</summary>
		///<param  name="container">the row to insert the Clear button at</param>
        },
        appendRemoveButton: function(container) {
        ///<summary>Appends a remove button to the specified row. This method is useful for customizing the order of control elements.</summary>
		///<param  name="container">the row to insert the Remove button at</param>
        },
        clearFileInputAt: function(index) {
        ///<summary>Clears the file input area in the specified (0-based) row. This method is useful for clearing all inputs in response to a cancel button, or clearing invalid inputs</summary>
		///<param  name="index" type="Number" integer="true">index of the row to clear the file input at</param>
        },
        deleteSelectedFileInputs: function() {
        ///<summary>Deletes all selected rows.</summary>
        },
        deleteFileInputAt: function(index) {
        ///<summary>Deletes the row at the specified (0-based) index if it exists.</summary>
		///<param  name="index" type="Number" integer="true">index of the row to delete the file input at</param>
        },
        getFileInputs: function() {
        ///<summary>Returns an array containing the DOM elements for all file input elements.</summary>
        ///<return type="Array" elementDomElement="true">Array</return>
        },
        isExtensionValid: function(fileName) {
        ///<summary>Validates the extension of the file name that is passed as a parameter against the AllowedFileExtensions property.</summary>
        ///<param  name="fileName" type="string">The name of the file</param>
        ///<return type="boolean" >Returns true if the extension is among the allowed file extensions</return>
        },
        validateExtensions: function() {
        ///<summary>Returns whether the client-side validation of the selected file names succeeded.</summary>
        ///<return type="boolean" >Returns true if all the selected files pass the extension validation</return>
        },
        get_inputSize: function() {
        ///<summary>Returns the value of the InputSize property</summary>
        },
        set_inputSize: function(value) {
        ///<summary>Sets the value of the InputSize property</summary>
		///<param  name="value" type="Number" integer="true">The value of the InputSize to be set</param>
        },
        get_allowedFileExtensions: function() {
        ///<summary>Returns an array containing the allowed file extensions.</summary>
        ///<return type="Array" >Array of the allowed file extensions</return>
        },
        set_allowedFileExtensions: function(value) {
        ///<summary>Sets the allowed file extensions list</summary>
		///<param  name="value" type="string">The list with the allowed file extensions</param>
        },
        get_enabled: function() {
        ///<summary>Returns whether the upload is enabled</summary>
        },
        set_enabled: function(value) {
        ///<summary>Sets the enable/disable state</summary>
		///<param  name="value" type="boolean">True to enable, False to disable the upload</param>
        },
        get_maxFileCount: function() {
        ///<summary>Returns the maximum number of rows in the RadUpload control.</summary>
        ///<return type="Number" integer="true" ></return>
        },
        set_maxFileCount: function(value) {
        ///<summary>Sets the maximum number of rows in the RadUpload control.</summary>
        ///<param  name="value" type="Number" integer="true">The max file count number</param>
        },
        get_initialFileInputsCount: function() {
        ///<summary>Returns the initial number of rows when the RadUpload control is first loaded.</summary>
        ///<return type="Number" integer="true" >The number of initial file inputs</return>
        },
        set_initialFileInputsCount: function(value) {
        ///<summary>Sets the initial file inputs count property.</summary>
		///<param  name="value" type="Number" integer="true">The value of the initial file inputs</param>
        }        
};

Telerik.Web.UI.ControlObjectsVisibility = function() { 
    /// <summary>
    /// Specifies which control objects will be visible on a RadUpload control
    /// </summary>    
    /// <field name="None" type="Number" integer="true" />    
    /// <field name="CheckBoxes" type="Number" integer="true" />
    /// <field name="RemoveButtons" type="Number" integer="true" />
    /// <field name="ClearButtons" type="Number" integer="true" />
    /// <field name="AddButton" type="Number" integer="true" />    
    /// <field name="DeleteSelectedButton" type="Number" integer="true" />
    /// <field name="Default" type="Number" integer="true" />
    /// <field name="All" type="Number" integer="true" />
};
Telerik.Web.UI.ControlObjectsVisibility.prototype = 
{
    None : 0,        
    CheckBoxes : 1,        
    RemoveButtons : 2,        
    ClearButtons : 4, 
    AddButton : 8, 
    DeleteSelectedButton : 16, 
    Default : (1 | 2 | 8 | 16), 
    All : (1 | 2 | 4 | 8 | 16)    
};
Telerik.Web.UI.ControlObjectsVisibility.registerEnum("Telerik.Web.UI.ControlObjectsVisibility");
