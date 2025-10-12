---
sidebar_position: 3

keywords:
  - plotter
  - fmb
  - gruhanaksha
  - survey
  - offset
  - cut point

tags: [plotter, fmb, survey, geometry, offset, cutpoint]
slug: plotter
---

# 📏 Plotter Widget

The **Plotter Widget** is a crucial tool in the Gruhanaksha plugin, designed for accurately plotting points along a selected line feature. This tool is particularly useful in land surveying and FMB workflows for marking specific points like "Cut Points" and "Offset Points".

It is available as a tab in the main **Plotter** tool window.

## 🔧 **Key Features**

1. **📏 Flexible Unit Conversion**
    * Meters
    * Metric Links (1 = 0.2 meters)
    * Gunter’s Links (1 = 0.201168 meters)
    * Feet (1 = 0.3048 meters)
    * Yards (1 = 0.9144 meters)

2. **📍 Point Plotting**
    * **Cut Point**: Plot a point at a specific distance along a selected line from either the start or end point.
    * **Offset Point**: Plot a point perpendicular to the "Cut Point" at a specified offset distance.
    * **Extended Point**: If the "Cut Point Length" is negative or greater than the line length, it plots a point by extending the line.

3. **🗺️ Interactive Line Selection**
    * The tool works with a single selected line feature from any line layer in your QGIS project.
    * The start (🟢) and end (🔴) points of the selected line are automatically marked for easy reference.

4. **🗂️ Memory Layer Integration**
    * The plotted points are added to a new or existing memory layer named **"Plotted Points"**.
    * Points are categorized by type ("Cut Point", "Offset Point", "Extended Point") and styled for clear identification.

## 🚀 **How to Use the Plotter Widget**

### 🪟 Step 1: Launch the Widget

1. Open QGIS.
2. From the main tool panel, open the **Plotter** tool.
3. Select the **Plotter** tab.

### ✒️ Step 2: Select a Line Feature

1. Select a single line feature in any of your map layers.
2. The start and end points of the line will be highlighted.

### 🛠️ Step 3: Configure Inputs

#### 🔣 a. Units

Choose the measurement unit for the lengths you will enter.

* `Meters`
* `Metric Links`
* `Gunter’s Links`
* `Feet`
* `Yards`

#### 👉 b. Choose Point

Select the reference point on the line for plotting.

* `🟢 Start Point`
* `🔴 End Point`

#### 📏 c. Lengths

* **Cut Point Length**: Enter the distance from the chosen point (start/end) along the line to place the "Cut Point".
* **Offset Length**: Enter the perpendicular distance from the "Cut Point" to place the "Offset Point".

### 🧩 Step 4: Plot the Points

* Click **Plot** ▶️
* The tool will calculate and plot the "Cut Point" and "Offset Point" on the **"Plotted Points"** memory layer.

### 🗺️ Step 5: Visualize the Result

The newly created points will appear on the map, styled by their type.

## ⚠️ Error Messages & Troubleshooting

| ❗ Error Message | 💡 Cause | ✅ Solution |
| :--- | :--- | :--- |
| "Please select a layer." | No layer is active in the Layers panel. | Select or activate a layer in your project. |
| "The selected layer is not a line layer." | The selected layer is not a line layer. | Select a line layer. |
| "Please select exactly one line feature." | More than one or no line features are selected. | Select a single line feature. |
| "Selected feature has no geometry." | The selected feature has no geometry. | Select a feature with valid geometry. |

## 🌟 Best Practices

* ✔️ Ensure your line layer has a valid CRS.
* 📏 Double-check your units to match the project's requirements.
* 💾 If you need to keep the generated points, right-click the "Plotted Points" memory layer and choose **Export > Save Features As...** to save it to a permanent file (e.g., Shapefile, GeoPackage).

## 📝 Example Use Case

🗺️ **Scenario**: You need to mark a point 15 meters along a property line from its start, and then mark an offset point 5 meters to the left.

1. Select the property line feature on the map.
2. In the **Plotter** tab, set **Units** to `Meters`.
3. Choose **🟢 Start Point**.
4. Set **Cut Point Length** to `15`.
5. Set **Offset Length** to `5`.
6. Click **Plot**.

🧮 **Result**: A "Cut Point" is created 15m from the start of the line, and an "Offset Point" is created 5m away from the "Cut Point", perpendicular to the line.

---

📌 **The Plotter Widget is an essential tool for precise point creation along lines, streamlining survey and cadastral mapping workflows. 🗺️📍**
