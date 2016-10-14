using System;
using System.Drawing;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace WebApplication1
{
    public partial class RadColorPicker_Page : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
            LoadColorPalettes();
            LoadCustomPalette();
        }

        private void LoadCustomPalette()
        {
            RadColorPicker2.Preset = ColorPreset.None;
            RadColorPicker2.Items.Add(new ColorPickerItem(Color.White, "White"));
            RadColorPicker2.Items.Add(new ColorPickerItem(Color.Black, "Black"));
            RadColorPicker2.Items.Add(new ColorPickerItem(Color.Green, "Green"));
            RadColorPicker2.Items.Add(new ColorPickerItem(Color.Yellow, "Yellow"));
            RadColorPicker2.Items.Add(new ColorPickerItem(Color.Silver, "Silver"));
            RadColorPicker2.Items.Add(new ColorPickerItem(Color.Red, "Red"));
            RadColorPicker2.Items.Add(new ColorPickerItem(Color.Navy, "Navy"));
            RadColorPicker2.Items.Add(new ColorPickerItem(Color.RoyalBlue, "Royal Blue"));
            RadColorPicker2.Items.Add(new ColorPickerItem(Color.Plum, "Plum"));
            RadColorPicker2.Items.Add(new ColorPickerItem(Color.LightBlue, "Light Blue"));
            RadColorPicker2.Items.Add(new ColorPickerItem(Color.Indigo, "Indigo"));
            RadColorPicker2.Items.Add(new ColorPickerItem(Color.Gray, "Gray"));
            
        }

        private void LoadColorPalettes()
        {
            foreach (ColorPreset preset in Enum.GetValues(typeof(ColorPreset)))
            {
                rcbPalette.Items.Add(new RadComboBoxItem(preset.ToString()));
            }
            rcbPalette.SelectedIndex = 0;
            SelectPalette(rcbPalette.SelectedValue);
        }

        protected void rcbPalette_SelectedIndexChanged(object o, RadComboBoxSelectedIndexChangedEventArgs e)
        {
            SelectPalette(e.Text);
        }

        private void SelectPalette(string palette)
        {
            ColorPreset preset;
            if (Enum.TryParse(palette, true, out preset))
                RadColorPicker1.Preset = preset;
        }

        protected void chkIcon_CheckedChanged(object sender, EventArgs e)
        {
            RadColorPicker1.ShowIcon = chkIcon.Checked;
        }

        protected void chkPreview_CheckedChanged(object sender, EventArgs e)
        {
            RadColorPicker1.PreviewColor = chkPreview.Checked;
        }

        protected void chkNoColor_CheckedChanged(object sender, EventArgs e)
        {
            RadColorPicker1.ShowEmptyColor = chkNoColor.Checked;
        }

        protected void chkPaletteMode_SelectedIndexChanged(object sender, EventArgs e)
        {
            var firstSelectedItem = chkPaletteMode.SelectedItem;
            RadColorPicker1.PaletteModes = (PaletteModes)Enum.Parse(typeof(PaletteModes), firstSelectedItem.Value);
            foreach (ListItem box in chkPaletteMode.Items)
            {
                if (box.Value == firstSelectedItem.Value) continue;

                if (box.Selected)
                {
                    RadColorPicker1.PaletteModes |= (PaletteModes)Enum.Parse(typeof(PaletteModes), box.Value);
                }
            }

        }

    }
}