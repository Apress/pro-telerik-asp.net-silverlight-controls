namespace TR.Reports
{
    partial class CustomerPurchases
    {
        #region Component Designer generated code
        /// <summary>
        /// Required method for telerik Reporting designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            Telerik.Reporting.Charting.GradientElement gradientElement1 = new Telerik.Reporting.Charting.GradientElement();
            Telerik.Reporting.Charting.GradientElement gradientElement2 = new Telerik.Reporting.Charting.GradientElement();
            Telerik.Reporting.Charting.GradientElement gradientElement3 = new Telerik.Reporting.Charting.GradientElement();
            Telerik.Reporting.Charting.Styles.ChartMarginsTitle chartMarginsTitle1 = new Telerik.Reporting.Charting.Styles.ChartMarginsTitle();
            Telerik.Reporting.Charting.Styles.ChartMarginsLegend chartMarginsLegend1 = new Telerik.Reporting.Charting.Styles.ChartMarginsLegend();
            Telerik.Reporting.Charting.Styles.ChartMarginsPlotArea chartMarginsPlotArea1 = new Telerik.Reporting.Charting.Styles.ChartMarginsPlotArea();
            Telerik.Reporting.Charting.Styles.ChartPaddings chartPaddings1 = new Telerik.Reporting.Charting.Styles.ChartPaddings();
            Telerik.Reporting.Charting.ChartSeries chartSeries1 = new Telerik.Reporting.Charting.ChartSeries();
            Telerik.Reporting.Charting.GradientElement gradientElement4 = new Telerik.Reporting.Charting.GradientElement();
            Telerik.Reporting.Charting.GradientElement gradientElement5 = new Telerik.Reporting.Charting.GradientElement();
            Telerik.Reporting.Charting.GradientElement gradientElement6 = new Telerik.Reporting.Charting.GradientElement();
            Telerik.Reporting.ReportParameter reportParameter1 = new Telerik.Reporting.ReportParameter();
            this.detail = new Telerik.Reporting.DetailSection();
            this.chart1 = new Telerik.Reporting.Chart();
            this.OrdersDataSource = new Telerik.Reporting.SqlDataSource();
            ((System.ComponentModel.ISupportInitialize)(this)).BeginInit();
            // 
            // detail
            // 
            this.detail.Height = new Telerik.Reporting.Drawing.Unit(2.7000000476837158D, Telerik.Reporting.Drawing.UnitType.Inch);
            this.detail.Items.AddRange(new Telerik.Reporting.ReportItemBase[] {
            this.chart1});
            this.detail.Name = "detail";
            // 
            // chart1
            // 
            this.chart1.Appearance.Border.Color = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(66)))), ((int)(((byte)(110)))));
            this.chart1.Appearance.Border.Width = 5F;
            gradientElement1.Color = System.Drawing.Color.FromArgb(((int)(((byte)(26)))), ((int)(((byte)(120)))), ((int)(((byte)(179)))));
            gradientElement2.Color = System.Drawing.Color.FromArgb(((int)(((byte)(35)))), ((int)(((byte)(189)))), ((int)(((byte)(254)))));
            gradientElement2.Position = 0.5F;
            gradientElement3.Color = System.Drawing.Color.FromArgb(((int)(((byte)(26)))), ((int)(((byte)(120)))), ((int)(((byte)(179)))));
            gradientElement3.Position = 1F;
            this.chart1.Appearance.FillStyle.FillSettings.ComplexGradient.AddRange(new Telerik.Reporting.Charting.GradientElement[] {
            gradientElement1,
            gradientElement2,
            gradientElement3});
            this.chart1.Appearance.FillStyle.FillType = Telerik.Reporting.Charting.Styles.FillType.ComplexGradient;
            this.chart1.BitmapResolution = 96F;
            chartMarginsTitle1.Bottom = new Telerik.Reporting.Charting.Styles.Unit(14D, Telerik.Reporting.Charting.Styles.UnitType.Pixel);
            chartMarginsTitle1.Left = new Telerik.Reporting.Charting.Styles.Unit(6D, Telerik.Reporting.Charting.Styles.UnitType.Percentage);
            chartMarginsTitle1.Right = new Telerik.Reporting.Charting.Styles.Unit(10D, Telerik.Reporting.Charting.Styles.UnitType.Pixel);
            chartMarginsTitle1.Top = new Telerik.Reporting.Charting.Styles.Unit(4D, Telerik.Reporting.Charting.Styles.UnitType.Percentage);
            this.chart1.ChartTitle.Appearance.Dimensions.Margins = chartMarginsTitle1;
            this.chart1.ChartTitle.Appearance.FillStyle.MainColor = System.Drawing.Color.Empty;
            this.chart1.ChartTitle.TextBlock.Appearance.TextProperties.Color = System.Drawing.Color.White;
            this.chart1.ChartTitle.TextBlock.Appearance.TextProperties.Font = new System.Drawing.Font("Verdana", 14F);
            this.chart1.ChartTitle.TextBlock.Text = "Monthly Purchase History";
            this.chart1.DefaultType = Telerik.Reporting.Charting.ChartSeriesType.Line;
            this.chart1.ImageFormat = System.Drawing.Imaging.ImageFormat.Emf;
            this.chart1.Legend.Appearance.Border.Color = System.Drawing.Color.FromArgb(((int)(((byte)(76)))), ((int)(((byte)(255)))), ((int)(((byte)(255)))), ((int)(((byte)(255)))));
            chartMarginsLegend1.Bottom = new Telerik.Reporting.Charting.Styles.Unit(12D, Telerik.Reporting.Charting.Styles.UnitType.Percentage);
            this.chart1.Legend.Appearance.Dimensions.Margins = chartMarginsLegend1;
            this.chart1.Legend.Appearance.FillStyle.GammaCorrection = false;
            this.chart1.Legend.Appearance.FillStyle.MainColor = System.Drawing.Color.FromArgb(((int)(((byte)(37)))), ((int)(((byte)(255)))), ((int)(((byte)(255)))), ((int)(((byte)(255)))));
            this.chart1.Legend.Appearance.ItemTextAppearance.TextProperties.Color = System.Drawing.Color.White;
            this.chart1.Legend.TextBlock.Appearance.Position.AlignedPosition = Telerik.Reporting.Charting.Styles.AlignedPositions.Top;
            this.chart1.Legend.TextBlock.Appearance.TextProperties.Color = System.Drawing.Color.LightSkyBlue;
            this.chart1.Location = new Telerik.Reporting.Drawing.PointU(new Telerik.Reporting.Drawing.Unit(3.9418537198798731E-05D, Telerik.Reporting.Drawing.UnitType.Inch), new Telerik.Reporting.Drawing.Unit(0D, Telerik.Reporting.Drawing.UnitType.Inch));
            this.chart1.Name = "chart1";
            this.chart1.PlotArea.Appearance.Border.Color = System.Drawing.Color.FromArgb(((int)(((byte)(97)))), ((int)(((byte)(180)))), ((int)(((byte)(223)))));
            chartMarginsPlotArea1.Left = new Telerik.Reporting.Charting.Styles.Unit(9D, Telerik.Reporting.Charting.Styles.UnitType.Percentage);
            chartMarginsPlotArea1.Right = new Telerik.Reporting.Charting.Styles.Unit(90D, Telerik.Reporting.Charting.Styles.UnitType.Pixel);
            chartMarginsPlotArea1.Top = new Telerik.Reporting.Charting.Styles.Unit(19D, Telerik.Reporting.Charting.Styles.UnitType.Percentage);
            this.chart1.PlotArea.Appearance.Dimensions.Margins = chartMarginsPlotArea1;
            this.chart1.PlotArea.Appearance.FillStyle.MainColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(255)))), ((int)(((byte)(255)))), ((int)(((byte)(255)))));
            this.chart1.PlotArea.Appearance.FillStyle.SecondColor = System.Drawing.Color.Transparent;
            this.chart1.PlotArea.XAxis.Appearance.Color = System.Drawing.Color.FromArgb(((int)(((byte)(98)))), ((int)(((byte)(183)))), ((int)(((byte)(226)))));
            this.chart1.PlotArea.XAxis.Appearance.MajorGridLines.Color = System.Drawing.Color.FromArgb(((int)(((byte)(98)))), ((int)(((byte)(183)))), ((int)(((byte)(226)))));
            this.chart1.PlotArea.XAxis.Appearance.MajorGridLines.Width = 0F;
            this.chart1.PlotArea.XAxis.Appearance.MajorTick.Color = System.Drawing.Color.FromArgb(((int)(((byte)(98)))), ((int)(((byte)(183)))), ((int)(((byte)(226)))));
            this.chart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Color = System.Drawing.Color.White;
            chartPaddings1.Bottom = new Telerik.Reporting.Charting.Styles.Unit(10D, Telerik.Reporting.Charting.Styles.UnitType.Percentage);
            this.chart1.PlotArea.XAxis.AxisLabel.Appearance.Dimensions.Paddings = chartPaddings1;
            this.chart1.PlotArea.XAxis.AxisLabel.TextBlock.Appearance.TextProperties.Color = System.Drawing.Color.LightSkyBlue;
            this.chart1.PlotArea.XAxis.MinValue = 1D;
            this.chart1.PlotArea.YAxis.Appearance.Color = System.Drawing.Color.FromArgb(((int)(((byte)(98)))), ((int)(((byte)(183)))), ((int)(((byte)(226)))));
            this.chart1.PlotArea.YAxis.Appearance.MajorGridLines.Color = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(209)))), ((int)(((byte)(248)))));
            this.chart1.PlotArea.YAxis.Appearance.MajorTick.Color = System.Drawing.Color.FromArgb(((int)(((byte)(98)))), ((int)(((byte)(183)))), ((int)(((byte)(226)))));
            this.chart1.PlotArea.YAxis.Appearance.MinorGridLines.Color = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(209)))), ((int)(((byte)(248)))));
            this.chart1.PlotArea.YAxis.Appearance.MinorGridLines.Width = 0F;
            this.chart1.PlotArea.YAxis.Appearance.MinorTick.Color = System.Drawing.Color.FromArgb(((int)(((byte)(98)))), ((int)(((byte)(183)))), ((int)(((byte)(226)))));
            this.chart1.PlotArea.YAxis.Appearance.TextAppearance.TextProperties.Color = System.Drawing.Color.White;
            this.chart1.PlotArea.YAxis.AxisLabel.TextBlock.Appearance.TextProperties.Color = System.Drawing.Color.LightSkyBlue;
            this.chart1.PlotArea.YAxis.MaxValue = 100D;
            this.chart1.PlotArea.YAxis.Step = 10D;
            gradientElement4.Color = System.Drawing.Color.FromArgb(((int)(((byte)(213)))), ((int)(((byte)(247)))), ((int)(((byte)(255)))));
            gradientElement5.Color = System.Drawing.Color.FromArgb(((int)(((byte)(193)))), ((int)(((byte)(239)))), ((int)(((byte)(252)))));
            gradientElement5.Position = 0.5F;
            gradientElement6.Color = System.Drawing.Color.FromArgb(((int)(((byte)(157)))), ((int)(((byte)(217)))), ((int)(((byte)(238)))));
            gradientElement6.Position = 1F;
            chartSeries1.Appearance.FillStyle.FillSettings.ComplexGradient.AddRange(new Telerik.Reporting.Charting.GradientElement[] {
            gradientElement4,
            gradientElement5,
            gradientElement6});
            chartSeries1.Appearance.FillStyle.FillType = Telerik.Reporting.Charting.Styles.FillType.ComplexGradient;
            chartSeries1.Appearance.FillStyle.MainColor = System.Drawing.Color.FromArgb(((int)(((byte)(213)))), ((int)(((byte)(247)))), ((int)(((byte)(255)))));
            chartSeries1.Appearance.TextAppearance.TextProperties.Color = System.Drawing.Color.White;
            chartSeries1.Name = "Orders";
            chartSeries1.Type = Telerik.Reporting.Charting.ChartSeriesType.Line;
            this.chart1.Series.AddRange(new Telerik.Reporting.Charting.ChartSeries[] {
            chartSeries1});
            this.chart1.Size = new Telerik.Reporting.Drawing.SizeU(new Telerik.Reporting.Drawing.Unit(5.9999213218688965D, Telerik.Reporting.Drawing.UnitType.Inch), new Telerik.Reporting.Drawing.Unit(2.6999607086181641D, Telerik.Reporting.Drawing.UnitType.Inch));
            this.chart1.NeedDataSource += new System.EventHandler(this.chart1_NeedDataSource);
            // 
            // OrdersDataSource
            // 
            this.OrdersDataSource.ConnectionString = "TR.Reports.Properties.Settings.Northwind";
            this.OrdersDataSource.Name = "OrdersDataSource";
            this.OrdersDataSource.Parameters.AddRange(new Telerik.Reporting.SqlDataSourceParameter[] {
            new Telerik.Reporting.SqlDataSourceParameter("@CustomerID", System.Data.DbType.String, "=Parameters.Customer.Value")});
            this.OrdersDataSource.SelectCommand = "SELECT OrderDate, COUNT(*) AS OrdersCount\r\nFROM dbo.Orders\r\nWHERE CustomerID=@Cus" +
                "tomerID\r\nGROUP BY OrderDate\r\n";
            // 
            // CustomerPurchases
            // 
            this.Items.AddRange(new Telerik.Reporting.ReportItemBase[] {
            this.detail});
            this.PageSettings.Landscape = false;
            this.PageSettings.Margins.Bottom = new Telerik.Reporting.Drawing.Unit(1D, Telerik.Reporting.Drawing.UnitType.Inch);
            this.PageSettings.Margins.Left = new Telerik.Reporting.Drawing.Unit(1D, Telerik.Reporting.Drawing.UnitType.Inch);
            this.PageSettings.Margins.Right = new Telerik.Reporting.Drawing.Unit(1D, Telerik.Reporting.Drawing.UnitType.Inch);
            this.PageSettings.Margins.Top = new Telerik.Reporting.Drawing.Unit(1D, Telerik.Reporting.Drawing.UnitType.Inch);
            this.PageSettings.PaperKind = System.Drawing.Printing.PaperKind.Letter;
            reportParameter1.Name = "Customer";
            reportParameter1.Visible = true;
            this.ReportParameters.Add(reportParameter1);
            this.Style.BackgroundColor = System.Drawing.Color.White;
            ((System.ComponentModel.ISupportInitialize)(this)).EndInit();

        }
        #endregion

        private Telerik.Reporting.DetailSection detail;
        private Telerik.Reporting.Chart chart1;
        private Telerik.Reporting.SqlDataSource OrdersDataSource;
    }
}