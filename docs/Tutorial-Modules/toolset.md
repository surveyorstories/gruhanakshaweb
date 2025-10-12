---
sidebar_position: 2

keywords:
  - tools
  - tool panel
  - plotter
  - adjuster
  - free adjuster
  - backup
  - gruhanaksha
  - qgis plugin

tags: [tools, toolpanel, plotter, adjuster, freeadjuster, backup]
slug: tools
---

# 🛠️ Tools Panel

The **Tools Panel** is a floating window in the Gruhanaksha QGIS plugin that provides quick access to a suite of specialized tools for land surveying, mapping, and data management. It serves as a central hub for activating various widgets and tools essential for cadastral and geometric operations.

## 🔧 Key Features

1. **📐 Plotter Tool**
   - Launches the Combined Plotter Widget for advanced geometric plotting, including triangles, bisectors, and point calculations.

2. **🔧 Adjuster Tool**
   - Activates the Polygon Adjuster for interactive polygon reshaping and area adjustments.

3. **🎯 Free Adjuster Tool**
   - Enables the Freehand Adjuster for precise vertex-level editing of geometries.

4. **💾 Backup Tool**
   - Opens the Backup Plugin for automated project saving and comprehensive backup management.

## 🚀 How to Use the Tools Panel

### 🪟 Step 1: Launch the Tools Panel

1. Open QGIS with the Gruhanaksha plugin installed.
2. From the QGIS menu, go to **Plugins > Gruhanaksha > Tools**.
3. The Tools Panel window will appear as a floating widget titled "Tool Panel".

### 🖱️ Step 2: Access Individual Tools

The panel contains a group box labeled "Tools" with buttons for each available tool:

- **Plotter**: Click to open the Combined Plotter Widget.
- **Adjuster**: Click to activate the Polygon Adjuster tool.
- **Free Adjuster**: Click to activate the Freehand Adjuster tool.
- **Backup**: Click to open the Backup Plugin interface.

Each button will launch its respective tool or widget. Some tools may require a project to be saved first.

## 📋 Tool Descriptions

### 📐 Plotter

Opens the Combined Main Widget, which includes tabs for:

- Triangle plotting and calculations
- Point plotting along lines with offsets
- Geometric constructions for survey work

**Requirements**: A QGIS project must be open and saved.

### 🔧 Adjuster

Activates the Unified Polygon Adjuster tool, allowing users to:

- Select and modify polygon geometries
- Adjust areas while maintaining shape proportions
- Perform interactive edits on vector layers

**Requirements**: Compatible with polygon layers; may require selection of features.

### 🎯 Free Adjuster

Activates the Vertex Tool for freehand adjustments, enabling:

- Precise editing of individual vertices
- Freeform geometry modifications
- Detailed control over point positions

**Requirements**: Works with editable vector layers.

### 💾 Backup

Launches the Backup Plugin, providing:

- Automated project backups
- Comprehensive save options
- Timer-based saving to prevent data loss

**Requirements**: A QGIS project must be open and saved.

## ⚠️ Error Messages & Troubleshooting

| ❗ Error Message | 💡 Cause | ✅ Solution |
| :--- | :--- | :--- |
| "Project not saved" | Attempting to use tools without saving the project first. | Save your QGIS project before accessing tools. |
| Tool fails to launch | Plugin components not properly loaded. | Restart QGIS or reinstall the plugin. |
| No response on button click | Layer or feature selection issues. | Ensure appropriate layers are selected for the specific tool. |

## 🌟 Best Practices

- ✔️ Always save your project before using tools to avoid data loss.
- 📐 Select appropriate layers and features before activating geometry-related tools.
- 💾 Regularly use the Backup tool to protect your work.
- 🔄 Close unnecessary tool windows to maintain QGIS performance.

## 📝 Example Workflow

🗺️ **Scenario**: You need to plot points along a baseline, adjust a polygon boundary, and ensure your project is backed up.

1. Save your QGIS project.
2. Open the Tools Panel via **Plugins > Gruhanaksha > Tools**.
3. Click **Plotter** to open the plotting widget and create your points.
4. Click **Adjuster** to modify polygon shapes as needed.
5. Click **Backup** to set up automated saving.

🧮 **Result**: Efficient workflow for geometric operations with data protection.

---

📌 **The Tools Panel streamlines access to essential surveying and mapping tools, enhancing productivity in QGIS-based land management projects. 🗺️🛠️**
