<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Chart.ascx.cs" Inherits="WebApplication1.Chart" %>
<%@ Register assembly="Telerik.Web.UI" namespace="Telerik.Charting" tagprefix="telerik" %>
<telerik:RadChart ID="RadChart1" runat="server" Height="150px" Skin="DeepGray" 
    Width="200px">
    <appearance>
        <fillstyle filltype="ComplexGradient">
            <fillsettings>
                <complexgradient>
                    <telerik:GradientElement Color="113, 113, 113" />
                    <telerik:GradientElement Color="180, 180, 180" Position="0.5" />
                    <telerik:GradientElement Color="113, 113, 113" Position="1" />
                </complexgradient>
            </fillsettings>
        </fillstyle>
        <border color="83, 83, 83" width="5" />
    </appearance>
    <series>
        <telerik:ChartSeries Name="Series 1" Type="Pie">
            <appearance>
                <fillstyle filltype="ComplexGradient">
                    <fillsettings>
                        <complexgradient>
                            <telerik:GradientElement Color="213, 247, 255" />
                            <telerik:GradientElement Color="193, 239, 252" Position="0.5" />
                            <telerik:GradientElement Color="157, 217, 238" Position="1" />
                        </complexgradient>
                    </fillsettings>
                </fillstyle>
                <textappearance textproperties-color="White">
                </textappearance>
            </appearance>
            <Items>
                <telerik:ChartSeriesItem Name="January" YValue="50">
                    <label>
                        <textblock text="January">
                        </textblock>
                    </label>
                </telerik:ChartSeriesItem>
                <telerik:ChartSeriesItem Name="February" YValue="30">
                    <label>
                        <textblock text="February">
                        </textblock>
                    </label>
                </telerik:ChartSeriesItem>
                <telerik:ChartSeriesItem Name="March" YValue="45">
                    <label>
                        <textblock text="March">
                        </textblock>
                    </label>
                </telerik:ChartSeriesItem>
            </Items>
        </telerik:ChartSeries>
    </series>
    <legend>
        <appearance dimensions-margins="1px, 2%, 12%, 1px">
            <itemtextappearance textproperties-color="White">
            </itemtextappearance>
            <fillstyle maincolor="37, 255, 255, 255">
            </fillstyle>
            <border color="76, 255, 255, 255" />
        </appearance>
        <textblock>
            <appearance position-alignedposition="Top" textproperties-color="238, 238, 238">
            </appearance>
        </textblock>
    </legend>
    <plotarea>
        <xaxis>
            <appearance color="76, 255, 255, 255" majortick-color="179, 255, 255, 255">
                <majorgridlines color="179, 255, 255, 255" width="0" />
                <textappearance textproperties-color="White">
                </textappearance>
            </appearance>
            <axislabel>
                <appearance dimensions-paddings="1px, 1px, 10%, 1px">
                </appearance>
                <textblock>
                    <appearance textproperties-color="238, 238, 238">
                    </appearance>
                </textblock>
            </axislabel>
        </xaxis>
        <yaxis>
            <appearance color="76, 255, 255, 255" majortick-color="179, 255, 255, 255" 
                minortick-color="179, 255, 255, 255">
                <majorgridlines color="179, 255, 255, 255" />
                <minorgridlines color="179, 255, 255, 255" width="0" />
                <textappearance textproperties-color="White">
                </textappearance>
            </appearance>
            <axislabel>
                <textblock>
                    <appearance textproperties-color="238, 238, 238">
                    </appearance>
                </textblock>
            </axislabel>
        </yaxis>
        <appearance dimensions-margins="19%, 90px, 12%, 9%">
            <fillstyle maincolor="50, 255, 255, 255" secondcolor="Transparent">
            </fillstyle>
            <border color="76, 255, 255, 255" />
        </appearance>
    </plotarea>
    <charttitle>
        <appearance dimensions-margins="4%, 10px, 14px, 6%">
            <fillstyle maincolor="">
            </fillstyle>
        </appearance>
        <textblock text="Sales">
            <appearance textproperties-color="White" textproperties-font="Verdana, 14pt">
            </appearance>
        </textblock>
    </charttitle>
</telerik:RadChart>
