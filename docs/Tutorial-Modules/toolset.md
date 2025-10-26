---
sidebar_position: 3

keywords:
  - tools
  - tool panel
  - plotter
  - adjuster
  - free adjuster
  - backup
  - aligner
  - point input
  - gruhanaksha
  - qgis plugin

tags: [tools, toolpanel, plotter, adjuster, freeadjuster, backup, aligner, pointinput]
slug: tools
---

# 🛠️ Tools Panel

The **Tools Panel** is a floating window in the Gruhanaksha QGIS plugin that provides quick access to a suite of specialized tools for land surveying, mapping, and data management. It serves as a central hub for activating various widgets and tools essential for cadastral and geometric operations.

## 🔧 Key Features

1. **📐 Plotter Tool**
    - Launches the Combined Plotter Widget for advanced geometric plotting, including triangles and point calculations.

2. **🔧 Adjuster Tool**
    - Activates the Polygon/Line Adjuster for interactive geometry reshaping and side length adjustments.

3. **🎯 Free Adjuster Tool**
    - Enables the Freehand Adjuster for precise, unconstrained vertex-level editing of geometries.

4. **💾 Backup Tool**
    - Opens the Backup Plugin for automated project saving and comprehensive backup management.

5. **📏 Aligner Tool**
    - Activates a two-point transformation tool to move, rotate, and scale features.

6. **📍 Point Input Tool**
    - Opens a dialog to create point layers from manually entered coordinates or CSV files.

## 🚀 How to Use the Tools Panel

### 🪟 Step 1: Launch the Tools Panel

1. Open QGIS with the Gruhanaksha plugin installed.
2. From the QGIS menu, go to **Plugins > Gruhanaksha > Tools**.
3. The Tools Panel window will appear as a floating widget titled "Tool Panel".

### 🖱️ Step 2: Access Individual Tools

The panel contains a group box labeled "Tools" with buttons for each available tool:

- **Plotter**: Click to open the Combined Plotter Widget.
- **Adjuster**: Click to activate the Polygon/Line Adjuster tool.
- **Free Adjuster**: Click to activate the Freehand Vertex Adjuster tool.
- **Backup**: Click to open the Backup Plugin interface.
- **Aligner**: Click to activate the two-point Aligner tool.
- **Point Input**: Click to open the coordinate creation dialog.

Each button will launch its respective tool or widget. Some tools may require a project to be saved first.

## 📋 Tool Descriptions

### 📐 Plotter

Opens the Combined Main Widget, which includes tabs for:

- Triangle plotting and calculations.
- Point plotting along lines with offsets.
- Geometric constructions for survey work.

**Requirements**: A QGIS project must be open and saved.

### 🔧 Adjuster

Activates the Unified Geometry Edit Tool, allowing users to:

- Select a polygon or line and one of its vertices.
- Move the vertex by a specific distance or set a segment's length.
- Perform precise, guided edits on vector layers.

**Requirements**: An editable line or polygon layer.

### 🎯 Free Adjuster

Activates the Vertex Tool for freehand adjustments, enabling:

- Precise, unconstrained drag-and-drop editing of individual vertices.
- Length adjustment of connected sides via a dialog (Ctrl+click a vertex).
- Detailed control over point positions with live length feedback.

**Requirements**: An editable line or polygon layer.

### 💾 Backup

Launches the Backup Plugin, providing:

- Automated project backups at set intervals.
- Comprehensive save options for project files and associated layers.
- Timer-based saving to prevent data loss.

**Requirements**: A QGIS project must be open and saved.

### 📏 Aligner

Activates the Aligner tool, which allows you to:

- Translate, rotate, and scale vector features.
- Map two "source" vertices from your feature to two "target" points on the map.
- Perform two-point georeferencing-style transformations.

**Requirements**: An editable Line or Polygon layer must be active.

### 📍 Point Input

Opens the Enhanced Point Creator dialog, which allows you to:

- Create a new point layer from manually entered coordinates (UTM, DD, DMS).
- Import points from a CSV file and map coordinate fields.
- Preview points before creation.

**Requirements**: A QGIS project must be open.

## ⚠️ Error Messages & Troubleshooting

| ❗ Error Message         | 💡 Cause                                     | ✅ Solution                                                              |
| :---------------------- | :------------------------------------------- | :----------------------------------------------------------------------- |
| "Project not saved"     | Attempting to use tools without saving the project first. | Save your QGIS project before accessing tools.                           |
| Tool fails to launch    | Plugin components not properly loaded.       | Restart QGIS or reinstall the plugin.                                    |
| No response on button click | Layer or feature selection issues.           | Ensure an appropriate, editable layer is selected for the specific tool. |

## 🌟 Best Practices

- ✔️ Always save your project before using tools to avoid data loss.
- 📐 Select appropriate, editable layers and features before activating geometry-related tools.
- 💾 Regularly use the Backup tool to protect your work.
- 🔄 Close unnecessary tool windows to maintain QGIS performance.

---

📌 **The Tools Panel streamlines access to essential surveying and mapping tools, enhancing productivity in QGIS-based land management projects. 🗺️🛠️**
