<%@ Page Title="RadChart" MaintainScrollPositionOnPostback="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RadChart_Page.aspx.cs" Inherits="WebApplication1.RadChart_Page" %>
<%@ Register assembly="Telerik.Web.UI" namespace="Telerik.Charting" tagprefix="telerik" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Chart Types</h1>
<asp:UpdatePanel ID="UpdatePanel1" runat="server">
<ContentTemplate>
    <asp:RadioButtonList ID="rbChartType" runat="server" RepeatDirection="Horizontal" 
                         AutoPostBack="true" OnSelectedIndexChanged="rbChartType_SelectedIndexChanged">
    </asp:RadioButtonList>
    <asp:RadioButtonList ID="rbChart" runat="server" RepeatDirection="Horizontal"
                         AutoPostBack="true" OnSelectedIndexChanged="rbChart_SelectedIndexChanged">
    </asp:RadioButtonList>
    <telerik:RadChart ID="RadChart1" runat="server" Skin="Default" 
        AutoLayout="True">
        <Series>
            <telerik:ChartSeries Name="Series 1">
                <Appearance  Shadow-Blur="5" Shadow-Distance="3"></Appearance>
                <Items>
                    <telerik:ChartSeriesItem Name="Item 1" YValue="12.5" YValue2="14" YValue3="10" YValue4="15">
                    </telerik:ChartSeriesItem>
                    <telerik:ChartSeriesItem Name="Item 2" YValue="13.5" YValue2="10" YValue3="9" YValue4="10">
                    </telerik:ChartSeriesItem>
                    <telerik:ChartSeriesItem Name="Item 3" YValue="12" YValue2="13" YValue3="12" YValue4="14">
                    </telerik:ChartSeriesItem>
                    <telerik:ChartSeriesItem Name="Item 4" YValue="11.4" YValue2="15" YValue3="10" YValue4="16">
                    </telerik:ChartSeriesItem>
                    <telerik:ChartSeriesItem Name="Item 5" YValue="12.1" YValue2="11" YValue3="12" YValue4="11.5">
                    </telerik:ChartSeriesItem>
                    <telerik:ChartSeriesItem Name="Item 6" YValue="12.4" YValue2="8" YValue3="9" YValue4="10">
                    </telerik:ChartSeriesItem>
                    <telerik:ChartSeriesItem Name="Item 7" YValue="13.1" YValue2="6" YValue3="6" YValue4="14">
                    </telerik:ChartSeriesItem>
                </Items>
            </telerik:ChartSeries>
            <telerik:ChartSeries Name="Series 2">
                <Appearance  Shadow-Blur="5" Shadow-Distance="3"></Appearance>
                <Items>
                    <telerik:ChartSeriesItem Name="Item 1" YValue="16.3" YValue2="15" YValue3="15" YValue4="17">
                    </telerik:ChartSeriesItem>
                    <telerik:ChartSeriesItem Name="Item 2" YValue="10" YValue2="13" YValue3="9" YValue4="14">
                    </telerik:ChartSeriesItem>
                    <telerik:ChartSeriesItem Name="Item 3" YValue="6" YValue2="7" YValue3="5" YValue4="19">
                    </telerik:ChartSeriesItem>
                    <telerik:ChartSeriesItem Name="Item 4" YValue="12" YValue2="11" YValue3="12" YValue4="11">
                    </telerik:ChartSeriesItem>
                    <telerik:ChartSeriesItem Name="Item 5" YValue="15.8" YValue2="20" YValue3="13" YValue4="22">
                    </telerik:ChartSeriesItem>
                    <telerik:ChartSeriesItem Name="Item 6" YValue="7" YValue2="10" YValue3="6" YValue4="10">
                    </telerik:ChartSeriesItem>
                    <telerik:ChartSeriesItem Name="Item 7" YValue="18.8" YValue2="15" YValue3="15" YValue4="22">
                    </telerik:ChartSeriesItem>
                </Items>
            </telerik:ChartSeries>
        </Series>
        <PlotArea>
            <YAxis AxisMode="Extended"/>
        </PlotArea>
    </telerik:RadChart>
</ContentTemplate>
</asp:UpdatePanel>
    <br /><br />
    <h1>Zooming and Scrolling</h1>
    <asp:UpdatePanel ID="UpdatePanel2" runat="server" UpdateMode="Conditional">
    <ContentTemplate>
        <telerik:RadChart ID="RadChart2" runat="server" Skin="Default" 
            AutoLayout="True">
            <ClientSettings EnableZoom="true" ScrollMode="Both" />
            <Series>
                <telerik:ChartSeries Name="Series 1" Type="Line">
                    <Appearance  Shadow-Blur="5" Shadow-Distance="3">
                        <fillstyle maincolor="213, 247, 255">
                        </fillstyle>
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                    </Appearance>
                    <Items>
                        <telerik:ChartSeriesItem Name="Item 1" YValue="12.5" YValue2="14" YValue3="10" YValue4="15">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 2" YValue="13.5" YValue2="10" YValue3="9" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 3" YValue="12" YValue2="13" YValue3="12" YValue4="14">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 4" YValue="11.4" YValue2="15" YValue3="10" YValue4="16">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 5" YValue="12.1" YValue2="11" YValue3="12" YValue4="11.5">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 6" YValue="12.4" YValue2="8" YValue3="9" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 7" YValue="13.1" YValue2="6" YValue3="6" YValue4="14">
                        </telerik:ChartSeriesItem>
                    </Items>
                </telerik:ChartSeries>
                <telerik:ChartSeries Name="Series 2" Type="Line">
                    <Appearance  Shadow-Blur="5" Shadow-Distance="3">
                        <fillstyle maincolor="218, 254, 122">
                        </fillstyle>
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                    </Appearance>
                    <Items>
                        <telerik:ChartSeriesItem Name="Item 1" YValue="16.3" YValue2="15" YValue3="15" YValue4="17">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 2" YValue="10" YValue2="13" YValue3="9" YValue4="14">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 3" YValue="6" YValue2="7" YValue3="5" YValue4="19">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 4" YValue="12" YValue2="11" YValue3="12" YValue4="11">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 5" YValue="15.8" YValue2="20" YValue3="13" YValue4="22">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 6" YValue="7" YValue2="10" YValue3="6" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 7" YValue="18.8" YValue2="15" YValue3="15" YValue4="22">
                        </telerik:ChartSeriesItem>
                    </Items>
                </telerik:ChartSeries>
            </Series>
            <PlotArea>
                <Appearance Dimensions-Margins="18%, 24%, 12%, 10%">
                </Appearance>
                <YAxis AxisMode="Extended"></YAxis>
            </PlotArea>
        </telerik:RadChart>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Marked Zones</h1>
    <asp:UpdatePanel ID="UpdatePanel3" runat="server">
    <ContentTemplate>
        <telerik:RadChart ID="RadChart3" runat="server" Skin="Default" 
            AutoLayout="True">
            <Series>
                <telerik:ChartSeries Name="Series 1" Type="Line">
                    <Appearance  Shadow-Blur="5" Shadow-Distance="3">
                        <fillstyle maincolor="213, 247, 255">
                        </fillstyle>
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                    </Appearance>
                    <Items>
                        <telerik:ChartSeriesItem Name="Item 1" YValue="12.5" YValue2="14" YValue3="10" YValue4="15">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 2" YValue="13.5" YValue2="10" YValue3="9" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 3" YValue="12" YValue2="13" YValue3="12" YValue4="14">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 4" YValue="11.4" YValue2="15" YValue3="10" YValue4="16">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 5" YValue="12.1" YValue2="11" YValue3="12" YValue4="11.5">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 6" YValue="12.4" YValue2="8" YValue3="9" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 7" YValue="13.1" YValue2="6" YValue3="6" YValue4="14">
                        </telerik:ChartSeriesItem>
                    </Items>
                </telerik:ChartSeries>
                <telerik:ChartSeries Name="Series 2" Type="Line">
                    <Appearance  Shadow-Blur="5" Shadow-Distance="3">
                        <fillstyle maincolor="218, 254, 122">
                        </fillstyle>
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                    </Appearance>
                    <Items>
                        <telerik:ChartSeriesItem Name="Item 1" YValue="16.3" YValue2="15" YValue3="15" YValue4="17">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 2" YValue="10" YValue2="13" YValue3="9" YValue4="14">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 3" YValue="6" YValue2="7" YValue3="5" YValue4="19">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 4" YValue="14" YValue2="11" YValue3="12" YValue4="11">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 5" YValue="15.8" YValue2="20" YValue3="13" YValue4="22">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 6" YValue="7" YValue2="10" YValue3="6" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 7" YValue="18.8" YValue2="15" YValue3="15" YValue4="22">
                        </telerik:ChartSeriesItem>
                    </Items>
                </telerik:ChartSeries>
            </Series>
            <legend>
                <appearance dimensions-margins="1%, 1%, 1%, 1%">
                </appearance>
            </legend>
            <PlotArea>
                <markedzones>
                    <telerik:ChartMarkedZone Name="Danger - High" ValueEndY="20" ValueStartY="15">
                        <label>
                            <textblock text="Too High!">
                            <appearance textproperties-color="White" 
                            textproperties-font="Verdana, 8.25pt, style=Bold"></appearance>
                            </textblock>
                        </label>
                        <appearance>
                            <fillstyle filltype="Gradient" maincolor="Red" secondcolor="White">
                            </fillstyle>
                        </appearance>
                    </telerik:ChartMarkedZone>
                    <telerik:ChartMarkedZone Name="Danger - Low" ValueStartY="0" ValueEndY="8">
                        <label>
                            <textblock text="Too Low!!">
                            <appearance textproperties-color="White" 
                            textproperties-font="Verdana, 8.25pt, style=Bold"></appearance>
                            </textblock>
                        </label>
                        <appearance>
                            <fillstyle filltype="Gradient" maincolor="Green" secondcolor="Yellow">
                            </fillstyle>
                        </appearance>
                    </telerik:ChartMarkedZone>
                </markedzones>
                <appearance dimensions-margins="18%, 24%, 12%, 10%">
                </appearance>
                <YAxis AxisMode="Extended"></YAxis>
            </PlotArea>
            <charttitle>
                <appearance dimensions-margins="1%, 1%, 1%, 1%" position-alignedposition="Top">
                </appearance>
            </charttitle>
        </telerik:RadChart>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Scale Breaks</h1>
    <asp:UpdatePanel ID="UpdatePanel4" runat="server">
    <ContentTemplate>
        <telerik:RadChart ID="RadChart4" runat="server" Skin="Default" 
            AutoLayout="True">
            <Series>
                <telerik:ChartSeries Name="Series 1" Type="Bar">
                    <appearance Shadow-Blur="5" Shadow-Distance="3">
                        <fillstyle maincolor="213, 247, 255">
                        </fillstyle>
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                    </appearance>
                    <Items>
                        <telerik:ChartSeriesItem Name="Item 1" YValue="12.5" YValue2="14" YValue3="10" YValue4="15">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 2" YValue="13.5" YValue2="10" YValue3="9" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 3" YValue="12" YValue2="13" YValue3="12" YValue4="14">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 4" YValue="11.4" YValue2="15" YValue3="10" YValue4="16">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 5" YValue="12.1" YValue2="11" YValue3="12" YValue4="11.5">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 6" YValue="12.4" YValue2="8" YValue3="9" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 7" YValue="13.1" YValue2="6" YValue3="6" YValue4="14">
                        </telerik:ChartSeriesItem>
                    </Items>
                </telerik:ChartSeries>
                <telerik:ChartSeries Name="Series 2" Type="Bar">
                    <appearance Shadow-Blur="5" Shadow-Distance="3">
                        <fillstyle maincolor="218, 254, 122">
                        </fillstyle>
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                    </appearance>
                    <Items>
                        <telerik:ChartSeriesItem Name="Item 1" YValue="16.3" YValue2="15" YValue3="15" YValue4="17">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 2" YValue="10" YValue2="13" YValue3="9" YValue4="14">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 3" YValue="6" YValue2="7" YValue3="5" YValue4="19">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 4" YValue="200" YValue2="11" YValue3="12" YValue4="11">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 5" YValue="15.8" YValue2="20" YValue3="13" YValue4="22">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 6" YValue="7" YValue2="10" YValue3="6" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 7" YValue="18.8" YValue2="15" YValue3="15" YValue4="22">
                        </telerik:ChartSeriesItem>
                    </Items>
                </telerik:ChartSeries>
            </Series>
            <legend>
                <appearance dimensions-margins="1%, 1%, 1%, 1%">
                </appearance>
            </legend>
            <PlotArea>
                <appearance dimensions-margins="18%, 24%, 12%, 10%">
                </appearance>
                <YAxis ScaleBreaks-Enabled="true" ScaleBreaks-MaxCount="2" AxisMode="Extended">
                    </YAxis>
            </PlotArea>
            <charttitle>
                <appearance dimensions-margins="1%, 1%, 1%, 1%" position-alignedposition="Top">
                </appearance>
            </charttitle>
        </telerik:RadChart>
    </ContentTemplate>
    </asp:UpdatePanel>        
    <br /><br />
    <h1>Negative Values</h1>
    <asp:UpdatePanel ID="UpdatePanel5" runat="server">
    <ContentTemplate>
        <telerik:RadChart ID="RadChart5" runat="server" Skin="Default" 
            AutoLayout="True">
            <Series>
                <telerik:ChartSeries Name="Series 1" Type="Bar">
                    <appearance Shadow-Blur="5" Shadow-Distance="3">
                        <fillstyle maincolor="213, 247, 255">
                        </fillstyle>
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                        <border color="187, 149, 58" />
                    </appearance>
                    <Items>
                        <telerik:ChartSeriesItem Name="Item 1" YValue="12.5" YValue2="14" YValue3="10" YValue4="15">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 2" YValue="13.5" YValue2="10" YValue3="9" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 3" YValue="12" YValue2="13" YValue3="12" YValue4="14">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 4" YValue="11.4" YValue2="15" YValue3="10" YValue4="16">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 5" YValue="12.1" YValue2="11" YValue3="12" YValue4="11.5">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 6" YValue="12.4" YValue2="8" YValue3="9" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 7" YValue="13.1" YValue2="6" YValue3="6" YValue4="14">
                        </telerik:ChartSeriesItem>
                    </Items>
                </telerik:ChartSeries>
                <telerik:ChartSeries Name="Series 2" Type="Bar">
                    <appearance Shadow-Blur="5" Shadow-Distance="3">
                        <fillstyle maincolor="218, 254, 122">
                        </fillstyle>
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                        <border color="129, 180, 193" />
                    </appearance>
                    <Items>
                        <telerik:ChartSeriesItem Name="Item 1" YValue="-16.3" YValue2="15" YValue3="15" YValue4="17">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 2" YValue="-10" YValue2="13" YValue3="9" YValue4="14">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 3" YValue="-6" YValue2="7" YValue3="5" YValue4="19">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 4" YValue="-17" YValue2="11" YValue3="12" YValue4="11">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 5" YValue="-15.8" YValue2="20" YValue3="13" YValue4="22">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 6" YValue="-7" YValue2="10" YValue3="6" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 7" YValue="-18.8" YValue2="15" YValue3="15" YValue4="22">
                        </telerik:ChartSeriesItem>
                    </Items>
                </telerik:ChartSeries>
            </Series>
            <legend>
                <appearance dimensions-margins="1%, 1%, 1%, 1%">
                </appearance>
            </legend>
            <PlotArea>
                <appearance dimensions-margins="18%, 24%, 12%, 10%">
                </appearance>
                <YAxis AxisMode="Extended"></YAxis>
            </PlotArea>
            <charttitle>
                <appearance dimensions-margins="1%, 1%, 1%, 1%" position-alignedposition="Top">
                </appearance>
            </charttitle>
        </telerik:RadChart>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Multiple Series Types In One Chart With DataTable</h1>
    <asp:UpdatePanel ID="UpdatePanel6" runat="server">
    <ContentTemplate>
        <telerik:RadChart ID="RadChart6" runat="server" Skin="Default" 
            AutoLayout="True">
            <Series>
                <telerik:ChartSeries Name="Series 1" Type="Bar">
                    <Items>
                        <telerik:ChartSeriesItem Name="Item 1" YValue="12.5" YValue2="14" YValue3="10" YValue4="15">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 2" YValue="13.5" YValue2="10" YValue3="9" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 3" YValue="12" YValue2="13" YValue3="12" YValue4="14">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 4" YValue="11.4" YValue2="15" YValue3="10" YValue4="16">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 5" YValue="12.1" YValue2="11" YValue3="12" YValue4="11.5">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 6" YValue="12.4" YValue2="8" YValue3="9" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 7" YValue="13.1" YValue2="6" YValue3="6" YValue4="14">
                        </telerik:ChartSeriesItem>
                    </Items>
                </telerik:ChartSeries>
                <telerik:ChartSeries Name="Series 2" Type="Line">
                    <Items>
                        <telerik:ChartSeriesItem Name="Item 1" YValue="16.3" YValue2="15" YValue3="15" YValue4="17">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 2" YValue="10" YValue2="13" YValue3="9" YValue4="14">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 3" YValue="6" YValue2="7" YValue3="5" YValue4="19">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 4" YValue="17" YValue2="11" YValue3="12" YValue4="11">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 5" YValue="15.8" YValue2="20" YValue3="13" YValue4="22">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 6" YValue="7" YValue2="10" YValue3="6" YValue4="10">
                        </telerik:ChartSeriesItem>
                        <telerik:ChartSeriesItem Name="Item 7" YValue="18.8" YValue2="15" YValue3="15" YValue4="22">
                        </telerik:ChartSeriesItem>
                    </Items>
                </telerik:ChartSeries>
            </Series>
            <legend>
                <appearance>
                    <itemmarkerappearance figure="Circle">
                    </itemmarkerappearance>
                </appearance>
            </legend>
            <PlotArea>
                <datatable visible="True">
                </datatable>
                <YAxis AxisMode="Extended">
                    </YAxis>
            </PlotArea>
        </telerik:RadChart>
    </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <h1>Image Maps</h1>
    <telerik:RadChart ID="RadChart8" runat="server" DataSourceID="SqlDataSource4" 
        DefaultType="Pie" onitemdatabound="RadChart8_ItemDataBound" AutoLayout="true">
        <Series>
            <telerik:ChartSeries Name="Orders" DataLabelsColumn="Country" DataYColumn="Orders" Type="Pie">
            </telerik:ChartSeries>
        </Series>
        <PlotArea>
            <XAxis AutoScale="False" DataLabelsColumn="Country" MaxValue="7" MinValue="1" Step="1">
                <Items>
                    <telerik:ChartAxisItem Value="1">
                    </telerik:ChartAxisItem>
                    <telerik:ChartAxisItem Value="2">
                    </telerik:ChartAxisItem>
                    <telerik:ChartAxisItem Value="3">
                    </telerik:ChartAxisItem>
                    <telerik:ChartAxisItem Value="4">
                    </telerik:ChartAxisItem>
                    <telerik:ChartAxisItem Value="5">
                    </telerik:ChartAxisItem>
                    <telerik:ChartAxisItem Value="6">
                    </telerik:ChartAxisItem>
                    <telerik:ChartAxisItem Value="7">
                    </telerik:ChartAxisItem>
                </Items>
            </XAxis>
            <Appearance Dimensions-Margins="18%, 24%, 12%, 10%"></Appearance>
        </PlotArea>
            <ChartTitle>
                <TextBlock Text="Orders By Country">
                </TextBlock>
            </ChartTitle>
    </telerik:RadChart>
        <asp:SqlDataSource ID="SqlDataSource4" runat="server" 
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
        SelectCommand="SELECT Country, COUNT(*) Orders FROM dbo.[Orders Qry] GROUP BY Country HAVING COUNT(*) > 30">
        </asp:SqlDataSource>
    <telerik:RadWindow ID="RadWindow1" runat="server" Width="800px" Height="600px" Behaviors="Close, Move" style="z-index:20000">
    </telerik:RadWindow>
    <script language="javascript" type="text/javascript">
        function ShowOrders(country) {
            var wnd = $find("<%=RadWindow1.ClientID %>");
            wnd.setUrl("radchart_ImageMaps.aspx?country=" + country);
            wnd.set_title("Orders in " + country);
            wnd.show();
        }
    </script>
    <br /><br />
    <h1>Drill-Down Chart with Database Binding</h1>
    <asp:UpdatePanel ID="UpdatePanel7" runat="server">
    <ContentTemplate>
        <telerik:RadChart ID="RadChart7" runat="server" Skin="Default" AutoLayout="True"
                          DataSourceID="SqlDataSource1" OnClick="RadChart7_Click" Width="500px">
            <series>
                <telerik:ChartSeries DataYColumn="Orders By Year" DataXColumn="Year" Name="Orders By Year">
                </telerik:ChartSeries>
            </series>
            <PlotArea>
                <xaxis autoscale="False" datalabelscolumn="Year" maxvalue="1998" 
                    minvalue="1996" step="1">
                    <Items>
                        <telerik:ChartAxisItem Value="1996">
                        </telerik:ChartAxisItem>
                        <telerik:ChartAxisItem Value="1997">
                        </telerik:ChartAxisItem>
                        <telerik:ChartAxisItem Value="1998">
                        </telerik:ChartAxisItem>
                    </Items>
                </xaxis>
                <YAxis AxisMode="Extended"></YAxis>
            </PlotArea>
            <charttitle>
                <textblock text="Orders">
                </textblock>
            </charttitle>
        </telerik:RadChart>
    </ContentTemplate>
    </asp:UpdatePanel>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT DATEPART(yyyy,OrderDate) [Year], COUNT(*) AS [Orders By Year] FROM dbo.Orders GROUP BY DATEPART(yyyy,OrderDate) ORDER BY 1">
    </asp:SqlDataSource>
    <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT DATEPART(mm,OrderDate) [Month], DATENAME(month, CAST(CAST(DATEPART(yyyy,OrderDate) AS VARCHAR) + '/' + CAST(DATEPART(mm,OrderDate) AS VARCHAR) + '/01' AS DATETIME)) AS [Month Name], COUNT(*) AS [Orders By Month] FROM dbo.Orders WHERE DATEPART(yyyy,OrderDate) = @Year GROUP BY DATEPART(mm,OrderDate), DATEPART(yyyy,OrderDate) ORDER BY 1">
    <SelectParameters>
        <asp:Parameter Name="Year" Type="Int32" />
    </SelectParameters>
    </asp:SqlDataSource>
    <asp:SqlDataSource ID="SqlDataSource3" runat="server" 
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT DATEPART(dd, OrderDate) AS [Day], COUNT(*) AS [Daily Orders] FROM dbo.Orders WHERE DATEPART(yyyy,OrderDate) = @Year  AND DATEPART(mm,OrderDate) = @Month GROUP BY DATEPART(dd, OrderDate) ORDER BY 1">
    <SelectParameters>
        <asp:Parameter Name="Year" Type="Int32" />
        <asp:Parameter Name="Month" Type="Int32" />
    </SelectParameters>
    </asp:SqlDataSource>    
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</asp:Content>
