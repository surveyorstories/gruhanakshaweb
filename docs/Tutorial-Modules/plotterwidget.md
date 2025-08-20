---
sidebar_position: 3

keywords:
  - plotter widget
  - polygon adjuster
  - gruhanaksha

tags: [plotterwidget,plotter, fmb, offset]
slug: plotterwidget
---

# 🧭 Plotter Widget

The **Plotter Widget** is a PyQt5-based graphical interface integrated into QGIS that enables users to **plot calculated points** like cut points, offset points, and extended points along a selected line feature. 🎯 This tool is especially valuable for **precision mapping** and **SVAMITVA survey workflows** requiring accurate line-based geometry operations.

## 🔧 **Key Features**

1. **📏 Unit Conversion**

   - Meters

   - Metric Links (1 = 0.2 meters)

   - Gunter’s Links (1 = 0.201168 meters)

2. **📌 Base Point Selection**

   - Start Point

   - End Point

3. **📐 Point Types**

   - **Cut Point**: At a given length along the line.

   - **Offset Point**: Perpendicular to the line at a given distance.

   - **Extended Point**: When the length exceeds the original line.

4. **🗂️ Memory Layer Integration**

   - Outputs are saved as a new memory layer.

   - Works with both single-part and multi-part lines.

5. **🎨 Categorized Symbology**

   - Green: Start Point

   - Red: End Point

   - Orange: Cut Point

   - Blue: Offset Point

   - Purple: Extended Point

6. **🛡️ Robust Error Handling**

   - Clear messages guide users to correct inputs.

## 🚀 **How to Use the Plotter Widget**

### 🪟 Step 1: Launch the Widget

- Open QGIS.

- From the plugin menu or the custom GUI, open **Plotter Widget**.

### 📌 Step 2: Select a Line Feature

- Activate a line layer from the Layers panel.

- Select **exactly one** line feature.

ℹ️ *Supports both single and multi-part geometries.*

## 🛠️ Step 3: Configure Inputs

### 🔣 a. Units

Choose from:

- `Meters`

- `Metric Links`

- `Gunter’s Links`

### 🧭 b. Choose Base Point

Select whether to start from the:

- `Start Point`

- `End Point`

### ✂️ c. Cut Length

- Enter the distance for the cut point.

- Negative value → Extends the line backward.

### ↕️ d. Offset Length

- Enter perpendicular offset distance.

- Positive → Right of line.

- Negative → Left of line.

## 🧩 Step 4: Plot Points

- Click **Plot** ▶️

- The tool generates:
  
  - ✅ **Cut Point**
  
  - 🔵 **Offset Point**
  
  - 🟣 **Extended Point** (if applicable)

They are added to a new memory layer: **"Plotted Points"**.

## 🗺️ Step 5: Visualize Results

### 🖌️ Symbology Key

| Color     | Point Type     |
| --------- | -------------- |
| 🟢 Green  | Start Point    |
| 🔴 Red    | End Point      |
| 🟠 Orange | Cut Point      |
| 🔵 Blue   | Offset Point   |
| 🟣 Purple | Extended Point |

You can rerun the widget with new values as needed.

## ⚠️ Error Messages & Troubleshooting

| ❗ Error Message                       | 💡 Cause                        | ✅ Solution                         |
| ------------------------------------- | ------------------------------- | ---------------------------------- |
| "Please select a layer."              | No layer selected               | Select a line layer in QGIS.       |
| "Selected layer is not a line layer." | Wrong geometry type             | Use a valid line geometry layer.   |
| "Select exactly one line feature."    | 0 or multiple features selected | Select one valid line feature.     |
| "Feature has no geometry."            | Geometry is missing             | Choose a feature with valid lines. |
| "Cut point calculation failed."       | Input error or geometry problem | Check values and retry.            |

## 🌟 Best Practices

- ✔️ Always validate your selected feature before plotting.

- 📏 Use correct units based on your CRS and survey standards.

- 🧩 Understand the behavior with multi-part lines.

- 💾 Save the memory layer if needed for further analysis.

## 📝 Example Use Case

🗺️ **Scenario**: You want to place a cut point 50m from the start of a road, then offset it 10m right for boundary marking.

| Input         | Value  |
| ------------- | ------ |
| Units         | Meters |
| Base Point    | Start  |
| Cut Length    | 50     |
| Offset Length | 10     |

🧮 Result:

- A cut point at 50m

- An offset point 10m to the right

- Layer: **"Plotted Points"**

## 🧠 Advanced Tips

- ➖ Use **negative cut lengths** to extend backwards.

- 🧼 The layer is always reset to prevent duplicates.

- 🔁 Reuse for multiple segments – each run updates the points cleanly.

---

📌 **The Plotter Widget empowers SVAMITVA workflows and survey operations with high precision and ease.** Whether you're mapping cadastral plots or engineering offsets, this tool ensures spatial accuracy every step of the way. 🗺️📍
