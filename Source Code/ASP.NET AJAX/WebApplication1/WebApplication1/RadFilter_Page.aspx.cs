using System;
using System.Web.UI;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadFilter_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
            RadFilterEqualToFilterExpression<int> expression = new RadFilterEqualToFilterExpression<int>("Price");
            RadFilter2.RootGroup.AddExpression(expression);
            expression.Value = 50;
        }

        protected void RadFilter1_ApplyExpressions(object sender, EventArgs e)
        {
            RadFilterSqlQueryProvider provider = new RadFilterSqlQueryProvider();
            provider.ProcessGroup(RadFilter1.RootGroup);
            lblExpression.Text = provider.Result;
        }

    }
}