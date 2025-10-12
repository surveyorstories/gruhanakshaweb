---
sidebar_position: 4

keywords:
  - triangle widget
  - fmb
  - gruhanaksha
  - survey
  - plotter

tags: [trianglewidget, fmb, survey, geometry, plotter]
slug: trianglewidget
---

# 🔺 Triangle Widget

`Available from v2.0.0`

The **Triangle Widget** is a powerful tool within QGIS designed for constructing triangles from a known baseline and two side lengths. 📐 This widget is indispensable for land surveying, particularly in **FMB (Field Measurement Book) workflows**, where plots are often demarcated using triangulation.

It is available as a tab within the **Plotter** tool.

## 🔧 **Key Features**

1. **📏 Flexible Unit Conversion**
    * Meters
    * Metric Links (1 = 0.2 meters)
    * Gunter’s Links (1 = 0.201168 meters)
    * Feet (1 = 0.3048 meters)
    * Yards (1 = 0.9144 meters)

2. **🖱️ Interactive Baseline Definition**
    * **Two-Point Selection**: Select two points directly on the QGIS map canvas.
    * **Fixed-Length Baseline**: After selecting the first point, press the `L` key to define a precise baseline length and unit, then click on the canvas to set its direction.
    * Supports snapping for precise point placement.

3. **📐 Triangle Construction**
    * Define the lengths of the two sides extending from the baseline.
    * Choose the triangle’s orientation (`Left` or `Right` of the baseline).

4. **👁️ Live Preview**
    * A real-time rubber band preview of the triangle is displayed on the map as you adjust the lengths and orientation.

5. **🗂️ Memory Layer Integration**
    * The final triangle is drawn on a new or existing memory layer named **"Triangle Lines"**.

6. **🛡️ Robust Error Handling**
    * Prevents the creation of invalid triangles by checking the triangle inequality theorem.
    * Provides clear, interactive feedback via a status label.

## 🚀 **How to Use the Triangle Widget**

### 🪟 Step 1: Launch the Widget

1. Open QGIS.
2. From the main tool panel, open the **Plotter** tool.
3. Select the **Triangle** tab.

### 📌 Step 2: Define the Baseline

You have two ways to define the baseline:

#### **Option A: Interactively Select Two Points**

1. Click the **Select Points** button. The button will change to "Selecting..." and a status message will guide you.
2. Click two points on the map canvas to define the baseline.
    * The first point will be marked in green (🟢).
    * The second point will be marked in red (🔴).
3. A solid blue line will show the final baseline.

ℹ️ *Use snapping for higher accuracy. You can right-click at any time to reset the point selection.*

#### **Option B: Use a Fixed Length**

1. Click the **Select Points** button.
2. Click the first point on the map canvas (the green point 🟢).
3. Press the `L` key on your keyboard. A dialog will appear.
4. Enter the desired **Length** for the baseline and select the **Unit**. Click **OK**.
5. Move your mouse on the canvas to orient the baseline. A dashed line will show the preview.
6. Click a second time to set the direction and finalize the baseline's end point (the red point 🔴).

### 🛠️ Step 3: Configure Inputs

#### 📏 a. Lengths

* **🟢 Start Side Length**: Enter the length of the side originating from the first (green) point.
* **🔴 End Side Length**: Enter the length of the side originating from the second (red) point.

#### 🧭 b. Orientation

Choose the direction to draw the triangle relative to the baseline:

* `Left`
* `Right`

#### 🔣 c. Units

Choose the measurement unit for the side lengths. This can be different from the unit used for the baseline.

* `Meters`
* `Metric Links`
* `Gunter’s Links`
* `Feet`
* `Yards`

### 🧩 Step 4: Draw the Triangle

* Click **Draw Triangle** ▶️
* The tool calculates the apex and draws the three sides of the triangle on a memory layer named **"Triangle Lines"**.

### 🗺️ Step 5: Visualize the Result

The newly created triangle will appear on the map. The "Triangle Lines" layer will contain three line features representing the sides of the triangle ("Base Line", "Start Side", "End Side").

### 🗑️ Step 6: Clear Points

* Click the **Clear Points** button to remove the selected baseline and reset the tool for a new operation.

## ⚠️ Error Messages & Troubleshooting

| ❗ Error Message | 💡 Cause | ✅ Solution |
| :--- | :--- | :--- |
| "Please select two points first." | "Draw Triangle" was clicked before a baseline was defined. | Use the "Select Points" button to define the baseline. |
| "No active layer to determine CRS." | No layer is active in the Layers panel. | Select or activate a layer in your project to provide a Coordinate Reference System. |
| "Invalid side lengths. Triangle cannot be formed." | The entered side lengths violate the triangle inequality theorem. | Adjust the side lengths to form a valid triangle. |
| "Second point must be different from first point." | The start and end points of the baseline are the same. | Ensure the two selected points for the baseline are in different locations. |

## 🌟 Best Practices

* ✔️ Use snapping to ensure the baseline aligns perfectly with existing features.
* ⌨️ Press the `L` key when you need to create a baseline of a precise, known length.
* 📏 Double-check your units to match the project's requirements.
* 👁️ Use the live preview to visualize the triangle before drawing.
* 💾 If you need to keep the generated triangle, right-click the "Triangle Lines" memory layer and choose **Export > Save Features As...** to save it to a permanent file (e.g., Shapefile, GeoPackage).

## 📝 Example Use Case

🗺️ **Scenario**: You need to plot a triangular parcel of land. You have a known baseline on your map, and the other two sides are 30m and 40m.

1. Click **Select Points** and click the two ends of the baseline on the map.
2. Set **🟢 Start Side Length** to `30`.
3. Set **🔴 End Side Length** to `40`.
4. Set **Orientation** to `Right`.
5. Set **Units** to `Meters`.
6. Click **Draw Triangle**.

🧮 **Result**: A new triangle is drawn on the "Triangle Lines" layer, with the apex 30m from the start point and 40m from the end point, on the right side of the baseline.

---

📌 **The Triangle Widget simplifies the creation of triangulated geometries, making it an essential tool for accurate and efficient cadastral mapping and survey data processing. 🗺️📍**
