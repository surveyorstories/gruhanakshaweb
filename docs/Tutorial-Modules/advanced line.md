---
sidebar_position: 6

keywords:
  - Line
  - Advanced Line
  - Drawing Circle
  - Circle
  - Drawing Line
  - gruhanaksha

tags: [line, Advanced Line,Draw Line, Draw Circle, Circle]
slug: advancedline
---

# 📐 Advanced Line

`Available from v1.0.1`

The Professional Line Tool is an advanced QGIS plugin that provides enhanced line drawing capabilities with precise measurement, angle control, and circle creation features. It's designed for surveyors, engineers, and GIS professionals who need accurate geometric drawing tools.

## 🚀 Getting Started

### ✅ Prerequisites

- QGIS with an active, editable vector layer (line geometry)
- Layer must be in edit mode

### 🔧 Installation & Activation

1. Click on Advanced line Icon in the toolbar
2. The tool will be activated on your map canvas

## 🎮 Basic Controls

### ⌨️ Quick Reference - All Keyboard Shortcuts

| Key        | 🎯 Function              | 📝 Description                                                      |
| ---------- | ------------------------ | ------------------------------------------------------------------- |
| **L**      | 📏 **Length/Parameters** | Open parameter dialog for precise length/angle input                |
| **O**      | 📐 **Ortho Mode**        | Toggle orthogonal drawing (constrains to 45° increments)            |
| **A**      | 🔒 **Angle Lock**        | Cycle: 90° Lock → 180° Lock → Off (double-tap to cancel)            |
| **R**      | ⭕ **Circle Mode**        | Toggle between line drawing and circle drawing modes                |
| **Q**      | 📊 **Units Cycle**       | Switch between: Meters → Metric Links → Gunter Links → Feet → Yards |
| **S**      | 🎯 **Snap Toggle**       | Enable/disable snapping to layers and vertices                      |
| **U**      | ↩️ **Undo Point**        | Remove the last placed point from current line                      |
| **C**      | 🔄 **Close Line**        | Connect current line back to start point (close polygon)            |
| **Enter**  | ✅ **Finish Line**        | Complete and save the current line to layer                         |
| **Return** | ✅ **Finish Line**        | Same as Enter - complete current line                               |
| **Escape** | ❌ **Cancel**             | Cancel current operation or exit preview mode                       |

### 🖱️ Mouse Controls

| Action          | Function                                |
| --------------- | --------------------------------------- |
| **Left Click**  | Add point / Start line / Confirm action |
| **Right Click** | Finish line / Open parameter dialog     |
| **Mouse Move**  | Preview line / Update cursor info       |

## 📏 Drawing Modes

### 🖊️ Standard Line Drawing

1. **Start**: Left-click to place first point
2. **Continue**: Move mouse and left-click to add more points
3. Press **L** to enter precise Length
4. **Finish**: Right-click or press Enter to complete line

**Visual Feedback:**

- 🟢 Green markers show placed points
- 🧲 Pink marker indicates snap points
- 📏 Live length and angle display in cursor info

### ⭕ Circle Drawing Mode

Press **R** to enter circle mode.

**Method 1: Center-Radius**

1. Left-click to set circle center
2. Move mouse to desired radius
3. Left-click to create circle

**Method 2: Center + Precise Radius**

1. Left-click to set circle center
2. Press **L** to enter precise radius
3. Enter radius value and click Apply

## 🎯 Advanced Features

### 🔒 Angle Lock System

Press **A** to cycle through angle lock modes:

1. **First Press**: 🔒 90° Lock

   - Constrains lines to 90° increments from previous segment
   - For first segment: locks to cardinal directions (N, E, S, W)

2. **Second Press**: 🔒 180° Lock

   - Constrains lines to 180° (parallel/perpendicular)
   - For first segment: locks to N-S or E-W axes

3. **Third Press**: ❌ Cancel Lock

   - Returns to free drawing

**Double-tap A**: Quick cancel of current lock

### 📐 Orthogonal Mode

Press **O** to toggle ortho mode:

- Constrains all lines to 45° increments
- Works independently of angle lock
- Visual indicator in cursor info

### 📏 Parameter Dialog (Press L)

Enter precise measurements:

**Length Input:**

- 🔢 Precise length value
- 🔄 Auto-converts between units
- 📊 Supports 5 unit types

**Angle Input:**

- ☑️ Enable "Use Angle" checkbox
- 🎯 Enter angle in degrees (0° = North, clockwise)
- 🎮 Quick angle buttons: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°

### 📊 Unit System

Press **Q** to cycle through supported units:

| Unit    | Name         | Symbol | Conversion Factor |
| ------- | ------------ | ------ | ----------------- |
| **m**   | Meters       | m      | 1.0               |
| **mli** | Metric Links | Metric | 0.2               |
| **li**  | Gunter Links | Gunter | 0.201168          |
| **ft**  | Feet         | ft     | 0.3048            |
| **yd**  | Yards        | yd     | 0.9144            |

**Features:**

- 🔄 Automatic conversion between units
- 💾 Values preserved when switching units
- 📊 Live display in cursor info

### 🎯 Enhanced Snapping

The tool provides intelligent snapping:

**QGIS Layer Snapping:**

- 🎯 Respects project snapping settings
- 🔧 Toggle with **S** key

**Custom Vertex Snapping:**

- 🟢 Automatically snaps to your drawn points
- 🎯 Only active when QGIS snapping is enabled
- 🧲 Pink marker indicates snap target

## 📋 Cursor Information Display

The live cursor info shows:

- 📏 **Length**: Current segment length in selected units
- 📐 **Angle**: Direction in degrees (N=0° clockwise)
- 🎮 **Mode**: Current drawing mode/state
- 🎯 **Snap Status**: ON/OFF + Vertex indication
- 📊 **Unit**: Currently selected unit

**Auto-scaling Display:**

- Values < 1: Show 4 decimal places
- Values < 1000: Show 3 decimal places
- Values ≥ 1000m: Auto-convert to kilometers

## 📝 Workflow Examples

### 🏗️ Example 1: Property Boundary Survey

```
1. Set units to feet: Press Q until "Feet" is selected
2. Start at corner: Left-click first point
3. Enter precise distance: Press L, enter "150 ft", Apply
4. Move mouse to direction and click to confirm
5. Use angle lock: Press A for 90° constraint
6. Continue adding segments with precise measurements
7. Close boundary: Press C to connect back to start
```

### 🏗️ Example 2: Building Layout

```
1. Enable ortho mode: Press O
2. Start at building corner: Left-click
3. Draw first wall: Move mouse east, left-click
4. Use angle lock: Press A for 90° increments
5. Continue around building perimeter
6. Use parameter dialog: Press L for precise room dimensions
7. Finish: Press Enter when complete
```

### 🏗️ Example 3: Circular Features

```
1. Enter circle mode: Press R
2. Click center point of circular feature
3. For precise radius: Press L, enter radius value
4. For visual radius: Move mouse and click at desired edge
5. Return to line mode: Press R again
```

## ⚠️ Troubleshooting

### 🔴 Common Issues

**Tool won't activate:**

- ✅ Ensure you have an active vector layer
- ✅ Layer must have line geometry type
- ✅ Layer must be in edit mode

**No cursor info display:**

- 🖱️ Move mouse over the canvas
- 🔄 Tool activates on canvas focus

**Snapping not working:**

- 🎯 Check QGIS project snapping settings
- 🔧 Press S to toggle tool snapping
- ⚙️ Verify layer snapping configuration

**Parameter dialog issues:**

- 📏 Ensure positive length values
- 🔄 Check unit conversions are reasonable
- ✅ Click Apply button to confirm

### 💡 Tips for Best Results

1. **🎯 Accuracy**: Use parameter dialog (L) for precise measurements
2. **⚡ Speed**: Use angle lock (A) for repetitive geometric patterns
3. **🔧 Workflow**: Enable ortho mode (O) for architectural drawings
4. **📊 Units**: Set appropriate units before starting complex drawings
5. **💾 Save Often**: Remember to save your edits regularly

## 🎨 Visual Indicators

| Color           | Meaning              |
| --------------- | -------------------- |
| **Green Box**   | Placed vertex points |
| **Pink Box**    | Active snap point    |
| **Gray Dashed** | Preview line         |
