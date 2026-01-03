---
sidebar_position: 16
slug: lpnumbering
---

# 📌Land Parcel Numbering Tool

`Available from v3.0.0`

:::info
This tool provides comprehensive functionality for interactively numbering land parcels in QGIS. It combines manual control with powerful auto-numbering algorithms designed for different parcel layouts.
:::

## 🌟 Key Features

- **Dual Auto-Numbering**: Two distinct algorithms ("Smart" and "Original") to handle both organic and grid-like parcel layouts.
- **Intelligent Manual Numbering**: Click-to-assign with automatic duplicate detection and smart sequence tracking.
- **Edit Mode Auto-Detection**: Automatically handles layer locking/unlocking.
- **Data Integrity**: Built-in safeguards against accidental data overwrites.
- **Visual Feedback**: Color-coded symbology to instantly see status (Duplicates, Edited, Auto-numbered).

---

## 🛠️ The Toolbar Interface

The toolbar is vertically split into **Map Tools** (Left) and **Data Tools** (Right).

### Map Tools (Left Side)

Use these for navigation and numbering operations.

1. **Zoom In / Out**: Standard map navigation.
2. **Pan**: Click and drag to move the map.
3. **Smart Select**: Draw a rectangle to select a subset of parcels. Only selected parcels will be auto-numbered.
4. **Deselect**: Clear the current selection.
5. **Auto Number (Smart serpentine - Green Snake)**: The default recommendation. Prioritizes local connections for a smooth flow.
6. **Auto Number (Original - Red Snake)**: A stricter algorithm. Prioritizes grid connectivity.
7. **Manual Numbering (Crosshair)**: Point-and-click numbering tool.

### Data Tools (Right Side)

Use these to manage the underlying database.

1. **Open Attribute Table**: Opens the standard QGIS attribute table for the layer.
2. **Delete Label Field (Trash Icon)**: Opens a multi-select dialog to delete fields (e.g., to clear `LP_NO` and start fresh).

---

## 🧬 Algorithm Deep Dive

Understanding which algorithm to use can save you time.

### 1. Smart Serpentine (Green Snake) 🟢

**Logic**: *Rank-Anchored Local Search*

- **How it works**: It establishes a general "Rank" (Top-Left to Bottom-Right) but is allowed to "search locally" for the best neighbor.
- **Best For**: **Organic / Irregular Layouts**. If your parcels have curvy roads or slightly offset grids, this algorithm flows naturally like a snake, minimizing long jumps.

### 2. Original (Red Snake) 🔴

**Logic**: *Connectivity-Constrained Strict Sort*

- **How it works**: It creates a "Virtual Grid" and moves strictly from one cell to the next. It prioritizes direct physical connectivity above all else.
- **Best For**: **Strict Grids**. Use this when you have perfect checkerboard layouts and want to ensure the numbering never "jumps" across a street or gap unless necessary.

---

## 📖 Step-by-Step Usage

### Auto-Numbering Workflow

1. **Select (Optional)**: Use the **Smart Select** tool to highlight a block of parcels.
    - *Tip: Auto-numbering small blocks at a time allows for finer control over the sequence.*
2. **Run Tool**: Click either **Green Snake** (Smart) or **Red Snake** (Original).
3. **Configure**:
    - **Start Number**: Enter the starting value (e.g., 101).
    - **Overwrite**: Check this if you want to replace existing numbers. If unchecked, it will skip already labeled parcels.
4. **Confirm**: The tool will process the parcels and apply labels.

### Manual Numbering Workflow

1. Click the **Manual Numbering (Crosshair)** tool.
2. **Basic Assignment**: Left-click on a parcel to assign the current number.
3. **Advanced "Swiping" (Drag to Label)**:
    - **Right Click + Drag**: Draw a line across multiple parcels. Any parcel the line touches will be numbered in sequence instantly.
    - **Ctrl + Left Click + Drag**: Alternative way to draw a numbering line.
    *This is extremely useful for quickly labeling rows of parcels like "swiping" a credit card.*
4. **Editing**: Hold **Alt + Click** on a parcel to edit its existing number.
5. **Duplicates**: If you type a number that already exists, the tool will warn you and highlight the duplicates in **Red**.

---

## 🎨 Symbology & Status Codes

The tool automatically applies a rule-based style to help you visualize progress.

| Color | Status | Meaning |
| :--- | :--- | :--- |
| **Green** 🟢 | `Unique` | Valid, unique number. |
| **Red** 🔴 | `Duplicate` | This number exists on multiple parcels. Fix immediately! |
| **Yellow** 🟡 | `Edited` | Manually changed by user (tracked for quality control). |
| **Blue** 🔵 | `Cleared` | Was a duplicate, but you fixed/cleared it. |
| **Gray** ⚪ | `Null` | Unnumbered parcel. |

*Note: The tool tracks these states in a hidden `STATUS` field (`auto`, `manual_edit`, `duplicate`, etc.) for your reference.*

---

## ⚡ Power User Tips

- **Clean Slate**: To completely restart, use the **Delete Label Field** (Trash Can) to delete the `LP_NO` field. This is cleaner than overwriting.
- **Keyboard Shortcuts**:
  - **Ctrl + Z**: Undo the last action.
  - **Ctrl + Y**: Redo.
  - **Alt + Click**: Edit a specific label.
- **Performance**: For layers with 10,000+ parcels, **Select** a smaller area before auto-numbering. Processing the entire layer at once may take a few seconds.

---

## ❓ Troubleshooting

**"Layer is not in edit mode"**

- The tool now handles this! Just click "Yes" when prompted to start editing.

**"My numbers are jumping across the street!"**

- Try the **Green Snake (Smart)** algorithm. It is better at detecting "local neighbors" than the strict grid algorithm.

**"I can't see the labels!"**

- Click the **Refresh** button in QGIS or toggle visibility. Ensure the `LP_NO` field exists (use the Attribute Table button to check).
