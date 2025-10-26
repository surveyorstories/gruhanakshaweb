---
sidebar_position: 12
keywords:
  - point creator
  - coordinate input
  - csv import
  - dms to dd
  - utm
  - gruhanaksha
tags: [pointcreator, coordinates, csv]
slug: pointinput
---

# 📍 Enhanced Point Creator

`Available from v2.1.0`

This tool provides a flexible and powerful way to create new point layers by either **manually entering coordinates** or **importing them from a CSV file**. It supports multiple coordinate formats (UTM, DD, DMS) and includes robust validation and preview features.

## ✅ Prerequisites

- A QGIS project must be open.
- For CSV import, you need a CSV or text file with coordinate data.

## 🔄 Tool Workflow Overview

1. **Open the Tool** from the plugin panel.
2. **Set the Target CRS** for the new point layer.
3. Choose an input method:
    - **Manual Input Tab:**
        - Select the coordinate format (UTM, DD, or DMS).
        - Enter a single coordinate or paste multiple coordinates in the batch input.
    - **CSV Import Tab:**
        - Browse and select a CSV file.
        - Configure CSV options (delimiter, header).
        - Map the columns containing X and Y coordinates.
4. **(Optional) Preview** the points to be created.
5. **Click "Create Points"** to generate the new layer.

## 🧭 Step-by-Step Instructions

### 🟩 Step 1: Activate the Tool

From your plugin panel or button (depending on how it's integrated), click to **activate the Point Input Tool**. The "Enhanced Point Creator" dialog will appear.

### 🟩 Step 2: Set the Target CRS

At the top of the dialog, you'll find the **Target Coordinate Reference System** selector.

- This CRS will be assigned to the **new point layer** that the tool creates.
- By default, it uses your project's CRS. You can change it to any other CRS.
- The tool will automatically transform all input coordinates to this target CRS.

### 🟩 Step 3: Choose an Input Method (Tab)

Select either the "Manual Input" or "CSV Import" tab.

---

### Manual Input Tab

Use this tab to type or paste coordinates directly.

#### 🔹 Step 3A: Choose Coordinate Format

Select one of the three radio buttons:

- **UTM Coordinates:** For Easting and Northing values.
  - **Important:** A second CRS selector will appear. Use this to specify the **source CRS of your UTM coordinates** (e.g., the UTM zone they belong to). The tool will use this to correctly transform them to the target CRS.
- **Decimal Degrees (DD):** For standard latitude and longitude (e.g., `78.12345`, `12.98765`).
- **Degrees Minutes Seconds (DMS):** For coordinates in `D° M' S"` format.

#### 🔹 Step 3B: Enter Coordinates

You have two options for entering coordinates:

**Option 1: Single Point**

- Fill in the input fields for the selected format (X/Y, D/M/S, or Easting/Northing).
- The tool provides real-time validation feedback (✓ or ⚠).

**Option 2: Batch Input**

1. Check the **"Enable batch input"** box.
2. Paste a list of coordinates into the text area.
3. The tool accepts coordinates separated by a comma, space, or tab. Each point should be on a new line.

    ```
    # Example Batch Input
    78.123,12.345
    79.456 13.678
    80.789 14.012
    ```

4. The "Points to create" counter will update to show how many valid coordinate pairs were found.

---

### CSV Import Tab

Use this tab to create points from a spreadsheet or text file.

#### 🔹 Step 3C: Select and Configure CSV

1. Click **"Browse CSV..."** to select your file.
2. Adjust the CSV options if needed:
    - **Delimiter:** Choose the character that separates columns (comma, semicolon, tab, etc.).
    - **First row contains headers:** Keep this checked if your file has a header row. Uncheck it if the first row is data.
    - **Encoding:** Change this if your file uses a non-standard character encoding.

#### 🔹 Step 3D: Map Coordinate Fields

1. Once the CSV is loaded, the column headers will appear in the **X/Longitude Field** and **Y/Latitude Field** dropdowns.
2. Select the column that contains the X (Easting/Longitude) data.
3. Select the column that contains the Y (Northing/Latitude) data.
4. Click **"Auto-detect coordinate fields"** to let the tool try to find them automatically based on common names like `lon`, `lat`, `x`, `y`, `easting`, etc.

#### 🔹 Step 3E: Preview CSV Data

- A table at the bottom shows a preview of your CSV data.
- Use the **"Preview limit"** spin box and **"Refresh Preview"** button to control how many rows are loaded for preview.

---

### 🟩 Step 4: Create the Points

1. **(Optional) Click "Preview Points"** to see a summary of the points that will be created without actually adding them to the map.
2. Click the **"Create Points"** button.
3. A new memory layer named `Points_<EPSG_CODE>` will be added to your QGIS project, containing the points you specified.

## 💡 Tips

- **Clear Inputs:** Use the **"Clear All"** button to reset all fields in the dialog.
- **Validation:** Pay attention to the validation icons (✓, ⚠, ✗) next to the manual input fields for instant feedback.
- **CRS Awareness:** Always double-check that your **Target CRS** is correct. For UTM input, ensure the **Source CRS** correctly matches the zone of your coordinates.
- **Batch Format:** When pasting batch coordinates, ensure there are no extra characters or empty lines that could cause parsing errors.

## 🛑 To Exit the Tool

Simply close the "Enhanced Point Creator" dialog window. If you created a temporary memory layer, you can save it by right-clicking it in the Layers Panel and selecting `Export > Save Features As...`.
