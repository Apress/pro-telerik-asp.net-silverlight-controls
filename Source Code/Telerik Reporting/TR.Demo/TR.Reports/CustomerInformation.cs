namespace TR.Reports
{
    using System;
    using System.ComponentModel;
    using System.Drawing;
    using System.Windows.Forms;
    using Telerik.Reporting;
    using Telerik.Reporting.Drawing;
    using System.Data.SqlClient;
    using System.Data;

    /// <summary>
    /// Summary description for CustomerInformation.
    /// </summary>
    public partial class CustomerInformation : Telerik.Reporting.Report
    {
        public CustomerInformation()
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
            string sql = @"SELECT SUBSTRING(CONVERT(VARCHAR, OrderDate, 101),1,3) + 
                                    SUBSTRING(CONVERT(VARCHAR, OrderDate, 101),9,2) AS OrderDate, 
                                  COUNT(*) AS OrdersCount 
                             FROM dbo.Orders 
                            WHERE CustomerID='" + this.ReportParameters["Customer"].Value + "'" +
                            "GROUP BY SUBSTRING(CONVERT(VARCHAR, OrderDate, 101),1,3) + " +
                            "                SUBSTRING(CONVERT(VARCHAR, OrderDate, 101),9,2)";
            string connectionString = "Data Source=(local)\\SQLEXPRESS;Initial Catalog=NorthWind;Integrated Security=True";
            SqlDataAdapter adapter = new SqlDataAdapter(sql, connectionString);
            DataSet dataSet = new DataSet();
            adapter.Fill(dataSet);
            chart.DataSource = dataSet;
            chart1.Series[0].DataYColumn = "OrdersCount";
            chart1.PlotArea.XAxis.DataLabelsColumn = "OrderDate";
        }
    }
}