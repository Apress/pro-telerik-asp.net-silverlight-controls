using System;
using System.Data;
using System.Linq;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadTreeView_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void RadTreeView4_NodeEdit(object sender, RadTreeNodeEditEventArgs e)
        {
            if (int.Parse(e.Node.Value) > 1000)
                RadTreeWebService.UpdateCategoryName(int.Parse(e.Node.Value)-1000, e.Text);
            else
                RadTreeWebService.UpdateProductName(int.Parse(e.Node.Value), e.Text);
            e.Node.Text = e.Text;
        }

        protected void RadTreeView1_NodeDrop(object sender, RadTreeNodeDragDropEventArgs e)
        {
            var sourceNode = e.SourceDragNode;
            var destNode = e.DestDragNode;
            var newCatID = int.Parse(destNode.Value) > 1000 ? int.Parse(destNode.Value) : int.Parse(destNode.ParentNode.Value);
            newCatID -= 1000;
            RadTreeWebService.UpdateProductCategory(int.Parse(sourceNode.Value), newCatID);
            if (sourceNode.TreeView.SelectedNodes.Count <= 1)
            {
                if (!sourceNode.IsAncestorOf(destNode))
                {
                    sourceNode.Owner.Nodes.Remove(sourceNode);
                    if (int.Parse(destNode.Value) > 1000)
                        destNode.Nodes.Add(sourceNode);
                    else
                        destNode.ParentNode.Nodes.Add(sourceNode);
                }
            }
            else
                if (sourceNode.TreeView.SelectedNodes.Count > 1)
                {
                    foreach (var node in RadTreeView1.SelectedNodes.Where(node => !node.IsAncestorOf(destNode)))
                    {
                        node.Owner.Nodes.Remove(node);
                        if (int.Parse(destNode.Value) > 1000)
                            destNode.Nodes.Add(node);
                        else
                            destNode.ParentNode.Nodes.Add(sourceNode);
                    }
                }
        }

        protected void RadTreeView5_NodeDataBound(object sender, RadTreeNodeEventArgs e)
        {
            var dataRow = (DataRowView) e.Node.DataItem;
            var div = (HtmlGenericControl) e.Node.FindControl("divElement");
            var lblName = (Label) e.Node.FindControl("lblNodeText");
            if (int.Parse(dataRow["ID"].ToString()) > 1000)
            {
                div.Attributes.Add("style", "border: 1px solid navy; background-color:#3366FF; color:White; height:20px; width:200px");
                lblName.Text = String.Format("Category: {0}", dataRow["Name"]);
            }
            else
            {
                div.Attributes.Add("style", "border: 1px solid navy; background-color:#333399; color:White; height:40px; width:200px");
                lblName.Text = String.Format("Product: {0}", dataRow["Name"]);
                var lbl = (Label)e.Node.FindControl("lblPrice");
                lbl.Text = string.Format("<br />Unit Price: {0:c}", dataRow["UnitPrice"]);
            }
        }

        protected void RadTreeView6_NodeDrop(object sender, RadTreeNodeDragDropEventArgs e)
        {
            var sourceNode = e.SourceDragNode;
            var htmlList = (ListBox) Page.FindControl(e.HtmlElementID);
            htmlList.Items.Add(sourceNode.Text);
        }
    }
}