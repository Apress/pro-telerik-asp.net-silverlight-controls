using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using Telerik.Charting;
using Telerik.Charting.Styles;

namespace WebApplication1
{

    #region Helper Classes

    public class mChartType
    {
        public mChartType (string charttype, string chartname)
        {
            chartType = charttype;
            chartName = chartname;
        }

        public string chartType { get; set; }
        public string chartName { get; set; }
    }

    public class mChart
    {
        public mChart(mChartType type, string code, string name)
        {
            chartType = type;
            chartCode = code;
            chartName = name;
        }
        public mChartType chartType { get; private set; }
        public string chartCode { get; set; }
        public string chartName { get; set; }
    }

    #endregion

    public partial class RadChart_Page : Page
    {
        private readonly List<mChartType> ListOfChartTypes = new List<mChartType>();
        private List<mChart> ListOfCharts = new List<mChart>();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
            LoadLists();
            SetDefaults();
        }

        private void SetDefaults()
        {
            rbChartType.SelectedIndex = 0;
            var items = ListOfCharts.Where(x => x.chartType.chartType == rbChartType.SelectedValue);
            rbChart.DataSource = items;
            rbChart.DataTextField = "chartName";
            rbChart.DataValueField = "chartCode";
            rbChart.DataBind();
            rbChart.SelectedIndex = 0;
            UpdateChart(rbChart.SelectedValue);
        }

        private void LoadLists()
        {
            var typeBars = new mChartType("Bars", "Bars");
            var typeLines = new mChartType("Lines", "Lines");
            var typePie = new mChartType("Pie", "Pie");
            var typeAreas = new mChartType("Areas", "Areas");
            var typeOther = new mChartType("Other", "Other");
            ListOfChartTypes.Add(typeBars);
            ListOfChartTypes.Add(typeLines);
            ListOfChartTypes.Add(typePie);
            ListOfChartTypes.Add(typeAreas);
            ListOfChartTypes.Add(typeOther);

            rbChartType.DataSource = ListOfChartTypes;
            rbChartType.DataTextField = "chartName";
            rbChartType.DataValueField = "chartType";
            rbChartType.DataBind();

            ListOfCharts.Add(new mChart(typeBars, "Bar", "Bar"));
            ListOfCharts.Add(new mChart(typeBars, "StackedBar", "Stacked Bar"));
            ListOfCharts.Add(new mChart(typeBars, "StackedBar100", "Stacked Bar 100"));
            ListOfCharts.Add(new mChart(typeLines, "Line", "Line"));
            ListOfCharts.Add(new mChart(typeLines, "BezierLine", "Bezier Line"));
            ListOfCharts.Add(new mChart(typeLines, "SplineLine", "Spline Line"));
            ListOfCharts.Add(new mChart(typeLines, "StackedLine", "Stacked Line"));
            ListOfCharts.Add(new mChart(typeLines, "StackedSplineLine", "Stacked Spline Line"));
            ListOfCharts.Add(new mChart(typeAreas, "Area", "Area"));
            ListOfCharts.Add(new mChart(typeAreas, "SplineArea", "Spline Area"));
            ListOfCharts.Add(new mChart(typeAreas, "StackedArea", "Stacked Area"));
            ListOfCharts.Add(new mChart(typeAreas, "StackedArea100", "Stacked Area 100"));
            ListOfCharts.Add(new mChart(typeAreas, "StackedSplineArea", "Stacked Splane Area"));
            ListOfCharts.Add(new mChart(typeAreas, "StackedSplineArea100", "Stacked Spline Area 100"));
            ListOfCharts.Add(new mChart(typePie, "Pie", "Pie"));
            ListOfCharts.Add(new mChart(typeOther, "Point", "Point"));
            ListOfCharts.Add(new mChart(typeOther, "Gantt", "Gantt"));
            ListOfCharts.Add(new mChart(typeOther, "Bubble", "Bubble"));
            ListOfCharts.Add(new mChart(typeOther, "CandleStick", "Candle Stick"));

            Session["charts"] = ListOfCharts;
        }

        protected void rbChartType_SelectedIndexChanged(object sender, EventArgs e)
        {
            ListOfCharts = (List<mChart>) Session["charts"];
            var items = ListOfCharts.Where(x => x.chartType.chartType == rbChartType.SelectedValue);
            rbChart.DataSource = items;
            rbChart.DataTextField = "chartName";
            rbChart.DataValueField = "chartCode";
            rbChart.DataBind();
            rbChart.SelectedIndex = 0;
            UpdateChart(rbChart.SelectedValue);
            
        }

        protected void rbChart_SelectedIndexChanged(object sender, EventArgs e)
        {
            UpdateChart(rbChart.SelectedValue);
        }

        private void UpdateChart(string chart)
        {
            switch (chart)
            {
                case "Bar":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.Bar;
                    break;
                case "StackedBar":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.StackedBar;
                    break;
                case "StackedBar100":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.StackedBar100;
                    break;
                case "Line":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.Line;
                    break;
                case "BezierLine":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.Bezier;
                    break;
                case "SplineLine":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.Spline;
                    break;
                case "StackedLine":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.StackedLine;
                    break;
                case "StackedSplineLine":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.StackedSpline;
                    break;
                case "Area":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.Area;
                    break;
                case "StackedArea":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.StackedArea;
                    break;
                case "StackedArea100":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.StackedArea100;
                    break;
                case "SplineArea":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.SplineArea;
                    break;
                case "StackedSplineArea":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.StackedSplineArea;
                    break;
                case "StackedSplineArea100":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.StackedSplineArea100;
                    break;
                case "Pie":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.Pie;
                    break;
                case "Point":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.Point;
                    break;
                case "Bubble":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.Bubble;
                    break;
                case "Gantt":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.Gantt;
                    break;
                case "CandleStick":
                    foreach (var s in RadChart1.Series)
                        s.Type = ChartSeriesType.CandleStick;
                    break;
            }
        }

        protected void RadChart7_Click(object sender, ChartClickEventArgs args)
        {
            if (args.SeriesItem != null)
                switch (args.SeriesItem.Parent.Name)
                {
                    case "Orders By Year":
                        {
                            var Year = int.Parse(args.SeriesItem.XValue.ToString());
                            Session["year"] = Year;
                            SqlDataSource2.SelectParameters[0].DefaultValue = Year.ToString();
                            RadChart7.PlotArea.XAxis.DataLabelsColumn = "Month";
                            RadChart7.Series[0].Clear();
                            RadChart7.Series[0].DataXColumn = "Month";
                            RadChart7.Series[0].PlotArea.XAxis.DataLabelsColumn = "Month Name";
                            RadChart7.Series[0].PlotArea.XAxis.Appearance.LabelAppearance.RotationAngle = 270;
                            RadChart7.Series[0].DataYColumn = "Orders By Month";
                            RadChart7.Series[0].Name = "Orders By Month";
                            RadChart7.DataSourceID = "SqlDataSource2";
                            RadChart7.ChartTitle.TextBlock.Text = string.Format("Monthly Orders in {0}", Year);
                        }
                        break;
                    case "Orders By Month":
                        {
                            var Month = int.Parse(args.SeriesItem.XValue.ToString());
                            var Year = int.Parse(Session["year"].ToString());
                            SqlDataSource3.SelectParameters[0].DefaultValue = Year.ToString();
                            SqlDataSource3.SelectParameters[1].DefaultValue = Month.ToString();
                            RadChart7.Series[0].Clear();
                            RadChart7.Series[0].DataXColumn = "Day";
                            RadChart7.Series[0].DataYColumn = "Daily Orders";
                            RadChart7.Series[0].Name = "Daily Orders";
                            RadChart7.DataSourceID = "SqlDataSource3";
                            RadChart7.ChartTitle.TextBlock.Text = string.Format("Daily Orders in {0}-{1}", Year, Month); 
                        }
                        break;
                }
        }

        protected void RadChart8_ItemDataBound(object sender, ChartItemDataBoundEventArgs e)
        {
            e.SeriesItem.ActiveRegion.Url = string.Format("javascript:ShowOrders('{0}');", e.SeriesItem.Label.TextBlock.Text);
        }
    }
}