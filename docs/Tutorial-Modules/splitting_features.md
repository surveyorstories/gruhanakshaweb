---
sidebar_position: 14
slug: splittingfeatures
---

# ✂️ Polygon Splitter

`Available from v3.0.0`

:::info
This tool is built upon the **[Split Features On Steroids](<https://plugins.qgis.org/plugins/SplitPolygonShowingAreas/>)** plugin, featuring enhancements and adaptations tailored to Resurvey requirements.
:::

This guide provides an overview of the Gruhanaksha Polygon Splitter tool. It opens a custom window with an interactive map canvas for splitting polygon features. The tool supports drawing split lines, editing vertices, adjusting areas, adding measurement markers, and more.

## ✨ Key Features

The Polygon Splitter tool provides an interactive environment for splitting polygon features in QGIS. It opens a dedicated window with a custom map canvas that mirrors the main QGIS canvas.

### 🧩 Main Components

- 🖼️ **Custom Map Canvas**: A separate canvas window for focused editing.
- 📚 **Layer Selection**: Choose which layers to display in the splitter window.
- 🎯 **Feature Selection**: Click to select polygon features for splitting.
- ✏️ **Split Line Drawing**: Draw lines to define split boundaries.
- 🔧 **Vertex Editing**: Add, remove, and move vertices on the split line.
- 📐 **Area Adjustment**: Automatically adjust split lines to achieve target areas.
- 📍 **Measurement Markers**: Add markers for distance measurements.
- 📏 **Unit Support**: Multiple units for areas and lengths (Acres, Hectares, Sq Meters, etc.).
- 🧲 **Snapping**: Snap to existing features for precision.
- ↩️ **Undo/Redo**: Standard editing shortcuts.

## How to Use

### Launching the Tool

1. Ensure you have a polygon layer loaded and selected in QGIS.
2. Use the plugin menu to launch the Polygon Splitter.
3. A new window titled "Gruhanaksha Polygon Splitter" will open with a custom map canvas.

### Interface Overview

The splitter window contains:

- **Map Canvas**: Displays the selected layers and features.
- **Toolbar**: Buttons for various editing actions.
- **Unit Selector**: Dropdown to choose area/length units (Acres, Hectares, Sq Meters, etc.).
- **Layer Selection Button**: Choose which layers to display.

### Toolbar Buttons

- **Select Features**: Click to select polygon features (default mode).
- **Start Splitting**: Draw split lines on selected features.
- **Move Vertices**: Drag vertices of the split line.
- **Add Vertices**: Insert new points on the split line.
- **Remove Vertices**: Delete points from the split line.
- **Move Segment**: Adjust individual segments of the split line.
- **Close/Open Line**: Connect or disconnect the start and end of the split line.
- **Move Line**: Shift the entire split line.
- **Adjust Area**: Automatically adjust the split line to achieve target areas.
- **Add Marker**: Place measurement markers on the map.
- **Snap Toggle**: Enable/disable snapping to existing features.
- **Zoom/Pan**: Standard map navigation tools.

### Basic Workflow

1. **Select Layers**: Click "Select Layers" to choose which layers to display in the splitter window.

2. **Select Features**: Click on polygon features in the canvas to select them for splitting. Hold Ctrl to select multiple features.

3. **Draw Split Line**:
   - Click the "Start Splitting" button.
   - Click on the map to add points to the split line.
   - The tool shows a red rubber band for the drawn line and a dotted preview for the next segment.
   - Right-click or press Enter to finish drawing.

4. **Edit Split Line** (optional):
   - Use vertex editing tools to refine the split line.
   - Add/remove/move vertices as needed.
   - Close/open the line if required.

5. **Adjust Areas** (optional):
   - Click "Adjust Area" to open a dialog.
   - Select a part and enter the target area.
   - The tool will automatically adjust the split line to achieve the desired area.

6. **Split Features**:
   - Right-click on the canvas to perform the split.
   - The selected features will be split along the drawn line.

### Advanced Features

#### Area and Length Display

As you draw the split line, the tool dynamically displays:

- **Areas**: For each resulting polygon part, shown in the selected unit.
- **Lengths**: For each segment of the split line, shown in linear units.

#### Measurement Markers

- Click "Add Marker" to place markers on the map.
- Markers show distances to reference points.
- Useful for precise measurements during splitting.

#### Snapping

- Toggle snapping on/off with the snap button.
- When enabled, vertices and markers snap to existing features for precision.

#### Undo/Redo

- **Ctrl + Z**: Undo the last action.
- **Ctrl + Y**: Redo the last undone action.
- Also works for layer edits after splitting.

## 🛠️ Toolbar Reference

| **Button/Icon** | **Name** | **Description** |
| --------------- | -------- | --------------- |
| ![arrow](../img/canvas_one/arrow.svg) | Select Features | Default mode for selecting polygon features |
| ![cut](../img/canvas_one/cut.svg) | Start Splitting | Begin drawing split lines |
| ![movevertex](../img/canvas_one/movevertex.svg) | Move Vertices | Drag vertices of split line |
| ![addvertex](../img/canvas_one/addvertex.svg) | Add Vertices | Insert new vertices on split line |
| ![removevertex](../img/canvas_one/removevertex.svg) | Remove Vertices | Delete vertices from split line |
| ![movesegment](../img/canvas_one/movesegment.svg) | Move Segment | Adjust individual line segments |
| ![line_close](../img/canvas_one/line_close.svg) | Close Line | Connect start and end points |
| ![line_open](../img/canvas_one/line_open.svg) | Open Line | Disconnect start and end points |
| ![moveline](../img/canvas_one/moveline.svg) | Move Line | Shift entire split line |
|  | Adjust Area | Auto-adjust line for target areas |
| | Add Marker | Place measurement markers |
| ![snap](../img/canvas_one/snap.svg) | Snap Toggle | Enable/disable snapping |
| ![zoomin](../img/canvas_one/zoomin.svg) | Zoom In | Zoom in on canvas |
| ![zoomout](../img/canvas_one/zoomout.svg) | Zoom Out | Zoom out on canvas |
| ![pan](../img/canvas_one/pan.svg) | Pan | Pan the map view |

## ⌨️ Keyboard Shortcuts

| **Shortcut** | **Action** |
| ------------ | ---------- |
| **Ctrl + Z** | Undo last action |
| **Ctrl + Y** | Redo last undone action |
| **Esc** | Stop current operation |
| **Backspace/Delete** | Remove last vertex while drawing |
| **Enter** | Finish drawing split line |
| **Right-click** | Perform split operation |

## 💡 Tips for Effective Use

### ⚙️ Configuring Snapping Settings

- Before starting your edits, configure snapping settings for accuracy:

  - Open the QGIS snapping toolbar or access snapping options via project settings.

  - Adjust the snapping tolerance to an appropriate value.

  - Enable snapping to vertices or segments as required.

  - Set snapping priorities to handle overlapping geometries effectively.

  - The tool allows snapping to existing map points for precision.

  - These settings enhance accuracy and streamline the workflow.

  - Utilize the snapping functionality to ensure vertices align with your desired features.

### Managing Layers 📂

- When working with multiple layers, consider isolating layers or using layer visibility options to reduce visual clutter.

- Use the **layer lock** feature to avoid accidental edits on other layers.

### 🔄 Handling Overlapping Geometries

- Carefully plan your edits to ensure no unintentional overlaps are created.

- Utilize the snapping functionality to align geometries precisely.

- Temporarily hide layers that are not being edited to focus on the target layer.

## ✅ Best Practices

💾 1. **Save Regularly:** Save your edits frequently to prevent accidental data loss.

🔄 2. **Work Incrementally:** For complex geometries, perform edits in smaller, manageable steps.

🧪 3. **Test Changes:** Use the undo/redo functionality to experiment without making permanent changes.

🎯 4. **Snap Strategically:** Ensure snapping settings align with your project needs to maintain precision.

📊 5. **Layer Management:** Use visibility and isolation options to work effectively with overlapping or dense geometries.

## 🌍 Applications

The **Split Features** tool is useful for the following tasks:

- **Land Parcel Division** 🏡: Dividing land parcels into smaller sections for detailed analysis or reporting.
- **Boundary Adjustments** 📏: Correcting boundaries that need to be split or reshaped based on new data.
- **Feature Editing** 🛣️: Editing existing geometries, such as roads or infrastructure features, in the map display.

## 🎉 Conclusion

The **Split Features** tool is an intuitive and powerful tool for interacting with geometries based on their on-screen representation. By allowing users to split features precisely where they are visible in the map canvas, it offers flexibility and accuracy for land parcel divisions, boundary adjustments, and other spatial editing tasks. Whether for dividing large features or making precise corrections, this tool streamlines the process and enhances spatial data editing.

##
