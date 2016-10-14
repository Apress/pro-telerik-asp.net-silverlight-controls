namespace TR.Reports
{
    using System;
    using System.Data;
    using System.Linq;
    using System.Collections;

    /// <summary>
    /// Summary description for Report2.
    /// </summary>
    public partial class Report2 : Telerik.Reporting.Report
    {
        public Report2()
        {
            /// <summary>
            /// Required for telerik Reporting designer support
            /// </summary>
            InitializeComponent();

            //
            // TODO: Add any constructor code after InitializeComponent call
            //
        }

        private void chart1_NeedDataSource(object sender, EventArgs e)
        {
            var chart = sender as Telerik.Reporting.Processing.Chart;
            //int[] intArray = new int[4] { 10, 12, 13, 5 };
            //chart.DataSource = intArray;
            chart.DataSource = DBData.TenMostExpensiveProducts();
        }
    }
}