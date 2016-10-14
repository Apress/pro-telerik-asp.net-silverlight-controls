using System;
using System.Web.UI;

namespace WebApplication1
{
    public partial class MyCategory_RadGridCustomFormEditor : UserControl
    {
        private object _dataItem;

        public object DataItem
        {
            get
            {
                return _dataItem;
            }
            set
            {
                _dataItem = value;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {

        }

    }
}