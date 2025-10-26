---
sidebar_position: 11

keywords:
  - ppm
  - property parcel map
  - gruhanaksha

tags: [property parcel map, ppm, gruhanaksha]
slug: atlasexport
---

# 🌏Atlas Export Tool

`Available from v1.0.1`

The Enhanced Atlas Export Tool allows you to export print layouts and atlas pages in various formats with advanced customization options. Whether you're creating a single map or hundreds of atlas pages, this tool streamlines the export process with an intuitive interface and robust error handling.

### ✨ Key Features

- 🎯 Support for both atlas and single layout exports
- 📁 Multiple export formats (PDF, PNG, JPG, TIFF, SVG)
- 🔧 Advanced quality and compression settings
- 👀 Live preview capabilities
- 📊 Comprehensive export logging

## 🚀 Getting Started

### Prerequisites

- ✅ QGIS 3.26 installed
- ✅ At least one print layout created in your project
- ✅ For atlas exports: coverage layer configured

### Launching the Tool

1. 📂 Open your QGIS project
2. 🖱️ Click on the Atlas Export icon or  Plugins ▶ Gruhanaksha ▶ Atlas Export

---

## 🖥️ Interface Layout

The tool features a split-panel interface:

### Left Panel: Settings & Configuration ⚙️

- **Layout Selection** - Choose your print layout
- **Export Mode** - Select export type (all, custom, single)
- **Output Settings** - Configure directory and filenames
- **Quality Settings** - Adjust DPI, compression, and size
- **Advanced Options** - Vector settings, text rendering

### Right Panel: Preview & Logging 📊

- **Layout Preview** - Visual preview of selected page
- **Preview Information** - Detailed layout and feature data
- **Export Log** - Real-time export progress and messages

---

## 🎯 Layout Selection

### 📋 Selecting a Layout

1. **Print Layout Dropdown** 📝

   - Lists all available print layouts in your project
   - Shows "No layouts available" if none exist

2. **Atlas Status Display** 🗺️

   - Shows current atlas configuration state
   - Indicates coverage layer and feature count

3. **Enable/Disable Atlas** 🔘

   - Toggle atlas functionality on/off
   - Only visible when coverage layer is configured

### Atlas Status Messages

- ✅ **"Atlas: Enabled (X features from 'LayerName')"** - Ready for export
- ⚠️ **"Atlas: Configured but not enabled"** - Click "Enable Atlas"
- ❌ **"Atlas: Enabled but no coverage layer set"** - Configure coverage layer
- 📄 **"Regular Layout: No atlas configuration"** - Single page layout

---

## 🎨 Export Modes

### 📑 Single Layout Export

- **Use Case**: Export one page from a regular (non-atlas) layout
- **Button**: "Export Single Layout"
- **Output**: One file per layout

### 🗂️ Export All Atlas Pages

- **Use Case**: Export every page in the atlas
- **Button**: "Export All Pages"
- **Output**: One file per atlas feature
- **Note**: Only available for atlas-enabled layouts

### 🎯 Export Custom Atlas Pages

- **Use Case**: Export specific pages from atlas
- **Button**: "Export Custom Pages"
- **Input Format**:
  - Single pages: `1,3,5`
  - Ranges: `1-5,8,10-12`
  - Mixed: `1,3,5-8,12,15-20`

### 🚫 Disabled Options

- Single page export is automatically disabled for atlas layouts
- Atlas options are disabled for regular layouts

---

## 📁 Output Settings

### 🗂️ Output Directory

- **Browse Button** 📂: Select destination folder
- **Path Display**: Shows selected directory path
- **Auto-creation**: Directory created automatically if it doesn't exist

### 📝 Filename Pattern

Configure output filenames using placeholders:

#### Standard Placeholders

- `{page}` - Page number (001, 002, 003...)
- `{index}` - Zero-based index (0, 1, 2...)

#### Atlas-Specific Placeholders

- `{field_name}` - Value from coverage layer field
- Example: `{NAME}`, `{ID}`, `{REGION}`

#### Example Patterns

```
atlas_{page}           → atlas_001.pdf, atlas_002.pdf
map_{NAME}_{page}      → map_London_001.pdf, map_Paris_002.pdf
export_{ID}_{index}    → export_12_0.pdf, export_15_1.pdf
```

### 📄 Export Format

Choose from five formats:

| Format       | Best For              | Vector Support | Transparency |
| ------------ | --------------------- | -------------- | ------------ |
| **PDF** 📄   | Professional printing | ✅ Yes          | ❌ No         |
| **PNG** 🖼️  | Web use, transparency | ❌ No           | ✅ Yes        |
| **JPG** 📷   | Photos, smaller files | ❌ No           | ❌ No         |
| **TIFF** 🗃️ | GIS applications      | ❌ No           | ✅ Yes        |
| **SVG** 🎨   | Scalable graphics     | ✅ Yes          | ✅ Yes        |

---

## ⚡ Quality Settings

### 🎯 DPI (Dots Per Inch)

- **Range**: 72-1200 DPI
- **Default**: 300 DPI
- **Recommendations**:
  - 📱 Screen: 72-96 DPI
  - 🖨️ Print: 300 DPI
  - 📊 High-quality: 600+ DPI

### 🎨 Image Quality (JPG only)

- **Range**: 1-100%
- **Default**: 95%
- **Slider Control**: Real-time percentage display

### 📐 Custom Dimensions

- **Width/Height**: Set custom pixel dimensions
- **Auto Mode**: Leave at 0 for automatic sizing
- **Aspect Ratio**: Maintains proportions when one dimension is set

### 🗜️ Compression Settings

#### PNG/TIFF Compression

- **Range**: 0-9 (0=none, 9=maximum)
- **Default**: 6
- **Trade-off**: Higher compression = smaller files, slower processing

---

## 🔧 Advanced Options

### 📊 Metadata Options

- ✅ **Include Metadata**: Embed creation info, timestamps
- 📁 **Create Subdirectories**: Organize exports into folders

### 🎨 Vector vs Raster (PDF/SVG)

Two mutually exclusive options:

#### Export as Vectors ✅ (Recommended)

- **Benefits**: Crisp text, scalable graphics, smaller files
- **Best for**: Maps with text labels, simple geometries

#### Rasterize Whole Layout 🖼️

- **Benefits**: Consistent appearance, complex effects
- **Best for**: Layouts with complex styling, raster backgrounds

### 📝 Text Rendering (PDF/SVG)

- **Always Outlines** 🔤: Convert text to vector paths (reliable)
- **Always Text** 📋: Keep text as selectable text (smaller files)

### 🗜️ PDF-Specific Options

#### Image Compression

- **Lossless/None**: No compression, larger files
- **Lossy (JPEG)**: Compressed images, smaller files

#### JPEG Quality (when Lossy selected)

- **Range**: 1-100%
- **Default**: 90%
- **Applies to**: Raster images embedded in PDF

---

## 👁️ Preview Features

### 🔍 Preview Controls

- **Enable Preview Rendering** ☑️: Toggle visual preview on/off
- **Page Selector** 🔢: Choose which atlas page to preview
- **Refresh Button** 🔄: Update preview manually

### 📊 Preview Information

Always visible text panel showing:

- Layout name and type
- Atlas configuration status
- Feature count and coverage layer
- Current page attributes
- Export settings summary

### 🖼️ Visual Preview

When enabled, shows:

- Actual rendered layout/atlas page
- Scaled to fit preview area
- Error messages if rendering fails

### 💡 Preview Tips

- 🚀 Disable visual preview for faster performance
- 📋 Text info updates automatically
- 🔄 Use refresh if preview seems outdated

---

## ▶️ Export Process

### 🎬 Starting Export

1. ✅ Configure all settings
2. 👀 Use "Preview" to verify settings
3. ▶️ Click "Export" to begin
4. 📊 Monitor progress bar and log

### 📊 Progress Monitoring

- **Progress Bar** 📈: Shows completion percentage
- **Export Log** 📝: Detailed messages and file names
- **Page Counter** 🔢: "Exported X/Y pages"

### ⏹️ Cancelling Export

- 🛑 Click "Cancel" button during export
- 🕐 Wait for current page to finish
- 📄 Partially exported files are preserved

### ✅ Completion Messages

- ✅ **Success**: "Successfully exported X pages"
- ❌ **Error**: Specific error message with details
- ⏹️ **Cancelled**: "Export cancelled. XX pages exported"

---

## 🔧 Troubleshooting

### ❌ Common Issues

#### "No layouts available"

**Cause**: No print layouts in project **Solution**:

1. 📋 Create a print layout in QGIS
2. 🔄 Refresh the tool

#### "Atlas not enabled"

**Cause**: Atlas is configured but disabled **Solution**:

1. 🔘 Click "Enable Atlas" button
2. ✅ Verify coverage layer is valid

#### "No coverage layer configured"

**Cause**: Atlas enabled without coverage layer **Solution**:

1. 🗺️ Open layout properties in QGIS
2. 📍 Set coverage layer in Atlas tab

#### Export fails immediately

**Causes & Solutions**:

- 📁 **Invalid output directory**: Check folder permissions
- 💾 **Disk space**: Ensure sufficient storage
- 🔒 **File locks**: Close files that might be open

#### Preview shows "error"

**Causes & Solutions**:

- 🗺️ **Invalid atlas page**: Check page number
- 💥 **Rendering issues**: Try disabling complex styling
- 🔄 **Stale data**: Click refresh button

### 🚨 Error Messages

#### Memory Errors

- **Message**: "Not enough memory for export"
- **Solution**:
  - 📉 Reduce DPI settings
  - 📏 Use smaller custom dimensions
  - 🗂️ Export in smaller batches

#### File Access Errors

- **Message**: "Could not write to file"
- **Solutions**:
  - 🔑 Check folder permissions
  - 💾 Ensure disk space available
  - 📝 Verify filename is valid

#### Atlas Errors

- **Message**: "Failed to seek to page X"
- **Solutions**:
  - 🔍 Check coverage layer validity
  - 🔄 Refresh atlas in layout
  - 📊 Verify feature count matches

---

## 💡 Tips & Best Practices

### 🎯 Performance Optimization

- 🚀 **Disable preview rendering** for large atlases
- 📉 **Use lower DPI** for draft exports
- 🗂️ **Export in batches** for very large atlases
- 💾 **Close other applications** for memory-intensive exports

### 📁 File Organization

- 📂 **Use descriptive folder names** with dates
- 🏷️ **Include field names in patterns** for easy identification
- 📊 **Create subdirectories** for different export types
- 🗃️ **Archive old exports** regularly

### 🎨 Quality Settings

- 📱 **Screen viewing**: 150 DPI, PNG format
- 🖨️ **Office printing**: 300 DPI, PDF format
- 📊 **Professional printing**: 600 DPI, PDF with vectors
- 🌐 **Web publishing**: 96 DPI, PNG with transparency

### 🔧 Atlas Configuration

- ✅ **Test with small samples** before full export
- 🏷️ **Use meaningful field names** in filename patterns
- 🧹 **Clean data** to avoid invalid filename characters
- 🔍 **Preview random pages** to verify consistency

### 💾 Backup & Recovery

- 💿 **Backup project files** before major exports
- 📋 **Save export settings** by documenting parameters
- 🗂️ **Keep export logs** for troubleshooting
- 🔄 **Test recovery procedures** with sample data

### 🚀 Workflow Efficiency

1. 🎯 **Start small**: Test with 2-3 pages first
2. 👀 **Use preview extensively** before full export
3. 📊 **Monitor resource usage** during export
4. ✅ **Verify outputs** before deleting source data
5. 📝 **Document settings** for reproducible results
