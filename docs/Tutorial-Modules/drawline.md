---
sidebar_position: 8

keywords:
  - ppm
  - property parcel map
  - gruhanaksha

tags: [property parcel map, ppm, gruhanaksha]
slug: drawline
---

# 🧭 Drawline Tool

`deprecated:>v1.0.1`

The **Drawline** in QGIS allows users to create baseline geometries (📏 lines or 🟠 circles) based on a user-defined distance. This tool helps in digitizing and mapping linear and circular features with precision.

## ✨ Features

- Supports **line** 📏 and **circle** 🟠 geometries.

- Allows users to enter a specific **distance value** 🔢 for precise placement.

- Provides **snapping** 🧲 to existing features for accurate alignment.

- Includes a **preview mode** 👀 before finalizing the geometry.

- Supports **multiple measurement units**:
  
  - 📐 **Meters**
  
  - 🔗 **Metric Links**
  
  - 🔗 **Guntur's Links**

## 🛠️ How to Use

### 1️⃣ Activating the Tool

1. Click on the **Baseline Tool** 🧭 in the QGIS toolbar.

2. The tool will be activated, and the mouse cursor will change accordingly.

### 2️⃣ Selecting a Start Point

1. 🖱️ Left-click on the map to select the starting point for the baseline.

2. The tool will highlight the chosen location with a **green marker** 🟢.

### 3️⃣ Entering Distance and Selecting Geometry

1. A dialog box will appear prompting you to enter the **distance** 🔢.

2. Select the desired **unit of measurement** 📏.

3. Choose the **geometry type**:

   - 📏 **Line**: A straight segment of the specified distance.

   - 🟠 **Circle**: A circular feature with the given radius.

4. Click **OK** ✅ to confirm.

### 4️⃣ Previewing the Geometry

- Move the cursor to see a **preview** 👁️ of the feature.

- The tool will display:
  
  - ➖ A **dashed line** for line geometry.
  
  - 🌀 A **dashed circle** for circular geometry.

- 🖱️ Right-click to **cancel** ❌ if needed.

### 5️⃣ Finalizing the Geometry

1. 🖱️ Left-click again to confirm the geometry.

2. The feature will be added to the **Baseline layer** 🗂️.

3. The tool will automatically reset 🔄 for a new operation.

## ➕ Additional Features

- 🧲 **Snapping Support**: The tool will snap to existing features based on QGIS's snapping settings.

- 🧮 **Length Attribute**: Each feature stores its **measured distance** in the attribute table.

- ↩️ **Undo Support**: If needed, remove the last created feature and retry.

## 🛠️ Troubleshooting

### 🚫 Distance Input Issues

- Ensure that the entered **distance is greater than 0**.

- Check that the distance value is **within valid range (0.01 - 10,000 meters)**.

### ❓ Snapping Not Working

- Verify that **snapping is enabled** 🧲 in QGIS settings.

- Adjust **snapping tolerance** for better results.

### ⚠️ Feature Not Created

- Ensure that the **Baseline layer is editable** ✍️.

- If an error occurs, check the **QGIS message bar** ℹ️ for details.

## 🏁 Conclusion

The **Baseline Tool** 🧭 is a powerful QGIS extension for efficiently creating linear and circular baseline features. By allowing precise distance input and real-time preview, this tool enhances the digitization workflow 🚀.
