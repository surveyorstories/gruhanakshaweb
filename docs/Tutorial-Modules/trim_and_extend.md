---
sidebar_position: 15
slug: trimandextend
---

# ✂️ Trim and Extend Tool

`Available from v3.0.0`

This guide provides an overview of the Gruhanaksha Trim and Extend tool. It allows precise trimming and extending of line and polygon features in QGIS by using a reference geometry. The tool supports interactive selection, vertex/side manipulation, multi-feature operations via dragging, and real-time previews.

## ✨ Key Features

The Trim and Extend tool provides advanced editing capabilities for line and polygon geometries in QGIS. It operates in two main modes: **Trim** (when features intersect the reference) and **Extend** (when features don't intersect, moving vertices or sides to the reference).

### 🧩 Main Components

- 🖼️ **Reference Selection**: Choose a reference line or polygon boundary (displayed in red).
- 🎯 **Feature Modification**: Trim intersecting features or extend non-intersecting ones.
- 🔧 **Vertex/Side Detection**: Automatically detects whether you're near a vertex or side edge.
- 📐 **Multi-Trim**: Drag to trim/extend multiple features simultaneously.
- 📍 **Real-time Preview**: Hover to see preview of changes (green for additions, red for removals).
- 🧲 **Snapping**: Automatic snapping to reference geometry.
- ↩️ **Undo/Redo**: Full edit history support.
- 🔄 **Layer Change Detection**: Automatically adapts when switching layers.

## How to Use

### Launching the Tool

1. Ensure you have a line or polygon layer loaded and set to edit mode.
2. Select the layer in the Layers panel.
3. Use the plugin menu to launch the Trim and Extend tool.
4. The tool will activate with a crosshair cursor.

### Interface Overview

The tool operates directly on the main QGIS canvas with visual feedback:

- **Reference Rubber Band**: Red line showing the selected reference geometry.
- **Preview Rubber Band**: Green highlighting showing additions/extensions.
- **Trim Rubber Band**: Red highlighting showing removed portions.
- **Drag Rubber Band**: Blue line showing drag path during multi-trim operations.

### Basic Workflow

1. **Select Reference**:
   - Click on any line or polygon feature to set it as the reference (appears in red).
   - The reference can be from any visible vector layer (lines or polygons).
   - Right-click anywhere to clear the current reference.

2. **Modify Features**:
   - For **Polygons**:
     - If the polygon intersects the reference: Click to trim (split and keep the appropriate part).
     - If the polygon doesn't intersect: Click near a vertex to move it to the reference while preserving angles, or near a side to extend the entire side.
   - For **Lines**:
     - Hover near line ends to preview trim/extend.
     - Click to apply the modification to the nearest end.

3. **Multi-Trim Operation**:
   - Press and drag across multiple features.
   - The tool will trim/extend all features along the drag path.
   - Release to apply changes to all affected features.

### Advanced Features

#### Vertex vs Side Detection

When working with polygons in extend mode:

- **Vertex Mode**: Click near a polygon vertex (within tolerance) to move that vertex to the reference line while maintaining the angles of adjacent sides.
- **Side Mode**: Click near a polygon side edge to extend the entire side to the reference line.

#### Multi-Feature Operations

- **Drag Trimming**: Press and hold the left mouse button, then drag across multiple features.
- The tool automatically detects all features intersecting the drag path.
- Applies trim/extend operations to all affected features in a single edit command.

#### Layer Switching

- The tool automatically detects when you switch to a different active layer.
- It validates the new layer (must be editable line/polygon) and adapts accordingly.
- If the new layer is invalid, the tool deactivates with an error message.

## ⌨️ Keyboard Shortcuts

| **Shortcut** | **Action** |
| ------------ | ---------- |
| **Esc** | Deactivate the tool |
| **Ctrl + Z** | Undo last operation |
| **Ctrl + Y** | Redo last undone operation |
| **Right-click** | Clear reference geometry |

## 💡 Tips for Effective Use

### ⚙️ Configuring Tolerance Settings

- The tool uses pixel tolerance for vertex/side detection (default: 15 pixels).
- Adjust zoom level to control precision - zoom in for finer control.
- Tolerance adapts to map units per pixel automatically.

### Managing Complex Geometries 📂

- For polygons with many vertices, work incrementally.
- Use the preview to verify changes before applying.
- Complex polygons may require multiple operations.

### 🔄 Handling Overlapping Features

- The tool prioritizes features containing the click point for polygons.
- For ties, it selects the feature with the highest ID (drawn last).
- Use layer visibility to isolate features when working with dense data.

## ✅ Best Practices

💾 1. **Save Regularly:** Commit edits frequently to prevent data loss.

🔄 2. **Work Incrementally:** For complex modifications, apply changes in steps.

🧪 3. **Use Previews:** Always hover to preview changes before clicking.

🎯 4. **Reference Selection:** Choose clear, unambiguous reference geometries.

📊 5. **Layer Management:** Ensure target layers are in edit mode before starting.

## 🌍 Applications

The **Trim and Extend** tool is useful for the following tasks:

- **Boundary Adjustments** 📏: Precisely align features to reference lines or boundaries.
- **Infrastructure Editing** 🛣️: Trim road networks or utility lines to exact specifications.
- **Parcel Management** 🏡: Extend or trim property boundaries to match survey data.
- **Topological Editing** 🗺️: Maintain connectivity while adjusting feature geometry.
- **CAD Cleanup** 🏗️: Clean up imported CAD data by trimming/extending to reference features.

## 🎉 Conclusion

The **Trim and Extend** tool is a powerful and precise editing tool for spatial data manipulation in QGIS. By allowing users to trim intersecting features and extend non-intersecting ones to a reference geometry, it provides flexibility for boundary adjustments, infrastructure editing, and topological corrections. Whether trimming complex polygons or extending line features, this tool streamlines geometric editing workflows and enhances spatial data accuracy.

##
