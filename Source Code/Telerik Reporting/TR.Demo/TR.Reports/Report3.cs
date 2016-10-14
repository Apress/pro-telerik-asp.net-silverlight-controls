namespace TR.Reports
{
    using Telerik.Reporting;
    using System;
    

    /// <summary>
    /// Summary description for Report3.
    /// </summary>
    public partial class Report3 : Telerik.Reporting.Report
    {
        public Report3()
        {
            /// <summary>
            /// Required for telerik Reporting designer support
            /// </summary>
            InitializeComponent();

            
        }

        public static string MonthName(DateTime date)
        {
            return string.Format("{0}'{1}", date.ToString("MMM"), date.ToString("yy"));
        }

    }
}