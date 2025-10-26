---
sidebar_position: 8

keywords:
  - freehand adjuster
  - vertex tool
  - topology
  - gruhanaksha

tags: [vertex, topology, adjuster, freehand, survey]
slug: freehand-adjuster
---

# ✍️ Freehand Adjuster

`Available from v2.0.0`

This advanced tool allows you to interactively edit **line and polygon geometries** with exceptional control. You can either drag vertices freely or use a precision panel to set exact side lengths. It fully supports snapping and topological editing.

## ✅ Prerequisites

- You must have a **Line or Polygon layer** selected.
- The layer must be in **editing mode** (pencil icon ✏️ activated).

## 🔄 Tool Workflow Overview

1. **Activate the tool**.
2. **Left-click** a line or polygon feature to select it.
3. The tool displays vertices and side lengths.
4. Choose your action:
    - **Drag a vertex**: Click and drag any vertex to a new position.
    - **Open Length Panel**: `Ctrl+Left-click` a vertex to open a dialog for precise length input.
5. Apply the changes.
6. **Right-click** to reset and select a new feature.

## 🧭 Step-by-Step Instructions

### 🟩 Step 1: Activate the Tool

- From your tool panel, click on Free Adjuster to activate the **Freehand Adjuster**.
- A message will appear:
    > “Click feature → drag vertex or Ctrl+click for length dialog...”

### 🟩 Step 2: Select a Feature

- **Left-click** anywhere on a line or polygon feature.
- The tool will select the feature and display its geometry details:
  - **🔴 Red circle markers** will appear on every vertex.
  - **White length labels** (with a black halo) will show the length of each segment.

### 🟩 Step 3: Choose Your Adjustment Method

Once a feature is selected, you can modify it in two ways:

#### Method A: Freehand Dragging

1. **Hover** over a vertex marker.
2. **Click and hold** the left mouse button.
3. **Drag** the vertex to its new location. A **red rubber band** will show a live preview of the change.
4. **Release** the mouse button to finalize the vertex position.
5. If topological editing is on, any shared vertices from adjacent features will also move.

#### Method B: Precise Length Panel (`Ctrl+Click`)

1. **Hold the `Ctrl` key** on your keyboard.
2. **Left-click** on the vertex you wish to adjust.
3. The **Length Adjustment Panel** will open.

### 🟩 Step 4: Using the Length Adjustment Panel

This dialog gives you precise numerical control over the connected side lengths.

1. **Select Units**: Choose your desired measurement unit from the dropdown (Meters, Feet, etc.).
2. **Enter Lengths**: Input the new, exact length(s) for the sides connected to the vertex.
3. **Show Preview**: Check this box to see a **red rubber band preview** of your changes on the map before applying them.
4. **Auto-Adjust (for Triangles)**: If you are editing a vertex with two connected sides, this option prevents errors. If you enter a length for one side that makes the triangle invalid, it will automatically calculate a valid length for the other side.
5. Click **Apply** to confirm the new lengths and close the dialog.

### 🟩 Step 5: Cycle Units (Optional)

- While the tool is active, press the **`Q` key** on your keyboard.
- The displayed length units on the map labels will cycle through Meters, Feet, Yards, and Links.

### 🟩 Step 6: Finish or Reset

- After an adjustment, the tool is ready to edit another vertex on the same feature.
- To deselect the current feature and choose a new one, **right-click** anywhere on the map.

## 🎨 Visual Cues Guide

| Element                 | Appearance                            | Meaning                                                    |
| ----------------------- | ------------------------------------- | ---------------------------------------------------------- |
| **Vertex Markers**      | 🔴 Red Circles                        | Shows all editable vertices on the selected feature.       |
| **Length Labels**       | White text with black outline         | Displays the length of each segment in the current unit.   |
| **Preview Rubber Band** | Thin red line                         | Shows a live preview of the geometry as you drag or input lengths. |
| **Snap Indicator**      | Magenta cross (default QGIS style)    | Appears when your cursor is snapping to a vertex or segment. |

## ❗ Error Messages & Hints

| Message                                  | Meaning / Suggestion                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------ |
| "No layer selected" / "Select a vector layer" | The tool was activated without a valid layer. Select a line or polygon layer.        |
| "Point layers not supported"             | The active layer is a point layer. The tool only works on lines and polygons.        |
| "Layer is not editable"                  | The layer is not in editing mode. Click the pencil icon ✏️ to enable editing.       |
| "Invalid Triangle" / "Sides too short"     | The lengths entered in the panel cannot form a valid triangle. Adjust the values or check "Auto-adjust". |

## 💡 Best Practices

- For best results with shared boundaries, enable **snapping** and **topological editing** in your QGIS project settings.
- Zoom in close for better accuracy when selecting and dragging vertices.
- Press `Q` to match the tool's units to your project or survey data units.
- Remember to **save your layer edits** in QGIS when you are finished!

## 🛑 To Exit the Tool

- Select any other tool from the QGIS toolbars.
- Press the **`Esc` key** to cancel a drag-in-progress.

---

📌 **The Freehand Adjuster offers an unparalleled combination of speed and precision, making it the go-to tool for fine-tuning vector geometries with confidence. 🗺️✍️**
