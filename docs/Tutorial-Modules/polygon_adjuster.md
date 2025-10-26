---
sidebar_position: 7

keywords:
  - plotter widget
  - polygon adjuster
  - gruhanaksha

tags: [plotterwidget,polygonadjuster]
slug: polygonadjuster
---

# 🛠️ Polygon Adjuster Editing Tool

This tool allows you to easily **move polygon vertices** or **adjust side lengths** directly on your QGIS map using a guided, click-based process. It's designed for simplicity, precision, and clarity.

## ✅ Prerequisites

- You must be editing a **polygon layer**.

- Ensure the layer is **in editing mode** (pencil icon activated).

## 🔄 Tool Workflow Overview

1. **Click a polygon** on the map.

2. **Click one of its vertices**.

3. Choose an operation from the dialog:

   - Move a vertex by a given distance.

   - Set the length of one side of the polygon.

4. **Click a direction** on the map to apply your change.

5. **Confirm or cancel** the operation.

## 🧭 Step-by-Step Instructions

### 🟩 Step 1: Activate the Tool

From your plugin panel or button (depending on how it's integrated), click to **activate the Unified Polygon Edit Tool**.

A message will appear:

> “Click polygon, then click a vertex, then follow prompts.”

### 🟩 Step 2: Select a Polygon

- Left-click anywhere **inside a polygon**.

- A message appears:
  
  > “Polygon selected. Now click a vertex of this polygon.”

- Shows the lengths of all sides of the polygon

- If nothing happens:
  
  - Ensure you're clicking on a polygon from an **editable layer**.
  
  - Make sure the layer is in **editing mode** (pencil icon enabled).
  
  - Zoom in to the polygon and left-click inside its boundary to select it.

### 🟩 Step 3: Select a Vertex

- Hover near the polygon’s edge; a green cross appears on a vertex.

- Click that **highlighted vertex**.

- If valid, a pop-up dialog appears to select the **operation** and **distance/length**.

### 🟩 Step 4: Choose Operation in Dialog

You’ll see two options:

- **Move Vertex by Distance**  
  Move the selected vertex a certain distance in a direction you will choose on the map.

- **Set Polygon Side Length**  
  Resize one side of the polygon to a specific length, keeping one vertex fixed.

Enter a **length** in map units and press **OK**.

:::warning
⚠️ Distance must not be zero. Side length must be positive.
:::

### 🟩 Step 5: Choose Direction

- A message appears:
  
  > “Click to set move direction” or  
  > “Click to select side direction”

- Move your mouse to the desired direction. A blue preview line shows your adjustment.

- Click once to confirm the direction.

### 🟩 Step 6: Confirm Change

A confirmation dialog appears, showing:

- Distance and angle (for vertex move), or

- Old vs. new length (for side adjustment)

Click **Yes** to apply the change, or **No** to cancel.

### 🧹 Step 7: Finish or Reset

- You can now start a new operation from Step 2.

- Or **right-click** anywhere on the map to reset the tool.

A message appears:

> “Ready. Right-click to reset, or left-click to start new operation.”

## ❗ Error Messages & Hints

| Message               | Meaning / Suggestion                                          |
| --------------------- | ------------------------------------------------------------- |
| "No polygon found"    | You didn’t click inside a valid polygon. Try again.           |
| "Layer Not Editable"  | Enable edit mode for that layer (click the pencil icon).      |
| "No vertex found"     | You clicked too far from a vertex. Zoom in and try again.     |
| "Invalid side length" | Selected side is too short or undefined. Pick another vertex. |

## 💡 Tips

- Zoom in close for better accuracy when selecting vertices or directions.

- The **green dot** shows the selected vertex.

- The **orange X** shows your direction click.

- The **preview lines** help visualize before confirming.

## 🛑 To Exit the Tool

Just select any other QGIS tool or press the Escape key/ Right click
