using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadUpload_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnUpload_Click(object sender, EventArgs e)
        {
            if (RadUpload1.UploadedFiles.Count <= 0) return;
            uploadResults.DataSource = RadUpload1.UploadedFiles;
            uploadResults.DataBind();
        }

        protected void btnCustomProcess_Click(object sender, EventArgs e)
        {
            RadProgressContext context = RadProgressContext.Current;

            context.SecondaryTotal = 100;
            for (int i = 0; i < 100; i++)
            {
                context.SecondaryValue = i;
                context.SecondaryPercent = (Convert.ToDecimal(i)).ToString("##0.00");
                context.CurrentOperationText = string.Format("Processing step #{0}", i + 1);
                // simulates a delay
                System.Threading.Thread.Sleep(2000);
            }
        }
    }
}