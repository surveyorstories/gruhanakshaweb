---
sidebar_position: 3

keywords:
  - plotter widget
  - fmb
  - gruhanaksha
  - survey
  - offset
  - cut point

tags: [plotterwidget, fmb, survey, geometry, offset, cutpoint]
slug: plotterwidget
---

# 📏 Plotter Widget

`Available from v2.0.0`

The **Plotter Widget** is a crucial tool in the Gruhanaksha plugin, designed for accurately plotting points along a selected line feature. This tool is particularly useful in land surveying and FMB workflows for marking specific points like "Cut Points" and "Offset Points".

It is available as a tab within the **Plotter** tool.

## 🔧 **Key Features**

1. **📏 Flexible Unit Conversion**
    * Meters
    * Metric Links (1 = 0.2 meters)
    * Gunter’s Links (1 = 0.201168 meters)
    * Feet (1 = 0.3048 meters)
    * Yards (1 = 0.9144 meters)

2. **📍 Point Plotting**
    * **Cut Point**: Plot a point at a specific distance along a selected line from either the start or end point.
    * **Bisect Point**: Plot a point at a specific distance along a selected line without any offset.
    * **Offset Point**: Plot a point perpendicular to the "Cut Point" at a specified offset distance.
    * **Extended Point**: If the "Cut Point Length" is negative or greater than the line length, it plots a point by extending the line.

3. **🗺️ Interactive Line Segment Selection**
    * Click directly on a line segment on the QGIS map canvas to select it.
    * The start (🟢) and end (🔴) points of the selected segment are automatically marked for easy reference.
    * Supports snapping for precise segment selection.

4. **🗂️ Memory Layer Integration**
    * The plotted points are added to a new or existing memory layer named **"Plotted Points"**.
    * Points are categorized by type ("Cut Point", "Offset Point", "Extended Point") and styled for clear identification.

## 🚀 **How to Use the Plotter Widget**

### 🪟 Step 1: Launch the Widget

1. Open QGIS.
2. From the main tool panel, open the **Plotter** tool.
3. Select the **Plotter** tab.

### 📌 Step 2: Select a Line Segment

1. Click the **Select Segment** button. The button will change to "Selecting..." and a status message will guide you.
2. Click on a line segment on the map canvas to select it.
    * The start point will be marked in green (🟢).
    * The end point will be marked in red (🔴).

ℹ️ *Use snapping for higher accuracy. You can right-click at any time to clear the segment selection.*

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

### 🗑️ Step 6: Clear Segment

* Click the **Clear Segment** button to remove the selected segment and reset the tool for a new operation.

## ⚠️ Error Messages & Troubleshooting

| ❗ Error Message | 💡 Cause | ✅ Solution |
| :--- | :--- | :--- |
| "Please select a segment first." | "Plot" was clicked before a segment was selected. | Use the "Select Segment" button to select a segment. |
| "Direction vector has zero length, cannot extend line." | The selected segment has zero length. | Select a valid segment with length. |
| "Line segment has zero length, cannot calculate offset." | The selected segment has zero length. | Select a valid segment with length. |

## 🌟 Best Practices

* ✔️ Ensure your line layer has a valid CRS.
* 📏 Double-check your units to match the project's requirements.
* 💾 If you need to keep the generated points, right-click the "Plotted Points" memory layer and choose **Export > Save Features As...** to save it to a permanent file (e.g., Shapefile, GeoPackage).

## 📝 Example Use Case

🗺️ **Scenario**: You need to mark a point 15 meters along a property line from its start, and then mark an offset point 5 meters to the left.

1. Click **Select Segment** and click on the property line on the map.
2. In the **Plotter** tab, set **Units** to `Meters`.
3. Choose **🟢 Start Point**.
4. Set **Cut Point Length** to `15`.
5. Set **Offset Length** to `5`.
6. Click **Plot**.

🧮 **Result**: A "Cut Point" is created 15m from the start of the segment, and an "Offset Point" is created 5m away from the "Cut Point", perpendicular to the segment.

---

📌 **The Plotter Widget is an essential tool for precise point creation along lines, streamlining survey and cadastral mapping workflows. 🗺️📍**
