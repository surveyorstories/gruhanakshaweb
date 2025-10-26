---
sidebar_position: 9
keywords:
  - align
  - transform
  - scale
  - rotate
  - georeference
  - gruhanaksha
tags: [aligner, transform, georeferencing]
slug: aligner
---

# 🛠️ Aligner Tool

`Available from v2.1.0`

This powerful tool allows you to **align, rotate, and scale** vector features (lines or polygons) with precision. It works by mapping two "source" vertices from your feature to two "target" points on the map, similar to a two-point georeferencing operation.

## ✅ Prerequisites

- An editable **Line or Polygon layer** must be the active layer in QGIS.
- The layer must be in **editing mode** (pencil icon ✏️ activated).
- For best results, **enable snapping** in `Project > Snapping Options...` to accurately select points and vertices.

## 🔄 Tool Workflow Overview

The tool follows a simple 4-click sequence to define the transformation:

1. **Click 1 (Source Vertex 1):** Select the vertex on your feature that should move to Target Point 1.
2. **Click 2 (Target Point 1):** Select the destination point on the map.
3. **Click 3 (Source Vertex 2):** Select the second vertex on your feature that should move to Target Point 2.
4. **Click 4 (Target Point 2):** Select the second destination point.
5. **Choose Operation:** A dialog will ask if you want to `Scale` the feature to fit the new points or just `Align Only` (move and rotate).
6. **Transformation Applied:** The feature is moved, rotated, and optionally scaled. The tool automatically resets and is ready for another alignment.

**Note:** At any time during the process, **right-click** to reset the tool and start a new alignment action.

## 🧭 Step-by-Step Instructions

### 🟩 Step 1: Activate the Tool

1. Make sure your desired line or polygon layer is **active** and in **editing mode**.
2. Activate the **Aligner Tool** from the plugin toolbar or menu.
3. A message will appear:
    > "Tool activated... Left-click to select points, right-click to reset."

### 🟩 Step 2: Select the First Pair of Points

1. **Select Target Point 1:** Left-click on the map where you want the first vertex to end up. You can snap to any existing geometry for precision.
    - A red point marker will appear.
    - The message bar will prompt: *"First point selected. Select the corresponding feature vertex."*

2. **Select Source Vertex 1:** Left-click on the vertex of the feature you want to align. This is the point that will be moved to your first target point.
    - A blue dashed line will appear, connecting the target point to the source vertex.
    - The message bar will prompt: *"First vertex detected... Select the second target point."*

### 🟩 Step 3: Select the Second Pair of Points

1. **Select Target Point 2:** Left-click on the map to define the second destination point.
    - A second red point marker will appear.
    - The message bar will prompt: *"Second target point selected... Select the second vertex from source layer."*

2. **Select Source Vertex 2:** Left-click on the second vertex of your feature.
    - A second blue dashed line will appear.

### 🟩 Step 4: Choose the Alignment Operation

Immediately after the fourth click, a dialog box titled "Align Tool - Choose Operation" will appear with three buttons:

- **Scale:** This will **translate, rotate, and scale** the feature. The distance between the two source vertices will be adjusted to match the distance between the two target points.
- **Align Only:** This will only **translate and rotate** the feature. The size and shape of the feature will be preserved.
- **Cancel:** Aborts the current operation.

### 🟩 Step 5: Review and Continue

- After you make a choice, the feature is instantly transformed.
- The tool automatically resets and is ready for a new alignment operation, starting again from Step 2.

## 💡 Tips and Additional Features

- **Multi-Feature Alignment:** If you have multiple features selected in the layer *before* starting the alignment process, the same transformation will be applied to all of them.
- **Resetting:** A **right-click** at any time will cancel the current point selection and reset the tool, allowing you to start over.
- **Snapping:** This tool fully respects your project's snapping settings. Enable snapping to vertices and segments for the most accurate selections.
- **Visual Feedback:**
  - **Red Points:** Your target destination points.
  - **Blue Dashed Lines:** Show the mapping from your source vertices to your target points.
  - **Snap Indicator:** A magenta cross shows when you are snapped to a vertex or segment.

## 🛑 To Exit the Tool

Simply select any other tool from the QGIS toolbars (like the Pan or Select tool). The Aligner Tool will automatically deactivate.
