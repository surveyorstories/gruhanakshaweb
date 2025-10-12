---
sidebar_position: 11

keywords:
  - auto backup
  - backup
  - autosave
  - project backup
  - layer backup
  - qgis backup
  - gruhanaksha

tags: [backup, autosave, project, layers, scheduling]
slug: backup
---

# 💾 Auto Backup

The **Auto Backup** feature in the Gruhanaksha QGIS plugin provides comprehensive automatic backup functionality for your QGIS projects and data layers. It ensures that your work is regularly saved and protected against data loss, with flexible scheduling and selective layer backup options.

## 🔧 Key Features

1. **⏰ Automatic Scheduling**
   - Configurable backup intervals from 1 to 1440 minutes
   - Real-time countdown timer displayed in the QGIS toolbar
   - Visual warnings before each backup operation

2. **📁 Flexible Backup Modes**
   - **Single Backup**: Maintains one backup copy, overwriting previous versions
   - **Multiple Backups**: Creates timestamped backup folders with configurable retention

3. **🗂️ Selective Layer Backup**
   - Choose specific vector layers to include in backups
   - Project file is always included automatically
   - Support for various formats (Shapefile, GeoPackage, SQLite, etc.)

4. **📊 Monitoring & Logging**
   - Detailed backup logs with timestamps
   - Session-based logging for tracking backup activities
   - System tray notifications (when minimized)

5. **🖥️ User Interface**
   - Integrated toolbar timer widget
   - Tabbed interface for settings and logs
   - System tray icon for background operation notifications

## 🚀 How to Use Auto Backup

### 🪟 Step 1: Access the Backup Tool

1. Open QGIS with the Gruhanaksha plugin loaded.
2. Access the Tools Panel via **Plugins > Gruhanaksha > Tools**.
3. Click the **Backup** button in the Tools Panel.

### ⚙️ Step 2: Configure Backup Settings

#### ⏱️ Backup Interval

- Set the **Backup Interval** (in minutes) using the spin box.
- Range: 1-1440 minutes (1 minute to 24 hours).
- Default: 10 minutes.

#### 📂 Backup Location

- Click **Change Folder** to select where backups will be stored.
- Default location: `~/QGIS_Project_Backups` (user's home directory).
- The folder path is clickable to open the backup directory.

#### 🔄 Backup Mode

Choose between:

- **Single Backup**: Overwrites the previous backup with each new one.
- **Multiple Backups**: Creates separate timestamped folders for each backup.
  - When Multiple mode is selected, set **Maximum Backups to Keep** (1-100).
  - Older backups are automatically deleted when the limit is exceeded.

#### 🗂️ Layer Selection

- Check **Select All Layers** to include all vector layers, or
- Manually select specific layers from the list.
- Note: The project file (.qgz/.qgs) is always backed up regardless of layer selection.

### ▶️ Step 3: Start Auto Backup

1. Click **Start Auto Backup**.
2. The system will:
   - Validate the backup folder (ensure it's writable).
   - Save the current project.
   - Begin the countdown timer.
   - Display a toolbar timer widget showing remaining time.

### 🛑 Step 4: Monitor and Stop Backup

- **Toolbar Timer**: Shows countdown and status (click to open backup window).
- **System Tray**: Notifications appear when the window is minimized.
- **Log Tab**: View detailed backup history and any errors.
- Click **Stop Auto Backup** to halt the automatic process.

### 🔄 Step 5: Manual Backup

- Click **Backup Now** for an immediate backup outside the scheduled interval.
- Useful for saving work before making major changes.

## 📋 Configuration Options

| Setting | Description | Default | Range |
| :--- | :--- | :--- | :--- |
| Backup Interval | Time between automatic backups | 10 minutes | 1-1440 minutes |
| Backup Mode | Single vs. Multiple backups | Single | - |
| Max Backups | Number of backups to retain (Multiple mode only) | 10 | 1-100 |
| Layer Selection | Which layers to backup | None selected | All vector layers |

## ⚠️ Error Messages & Troubleshooting

| ❗ Error Message | 💡 Cause | ✅ Solution |
| :--- | :--- | :--- |
| "Please save the project first" | Project hasn't been saved to disk | Save your QGIS project before starting backup |
| "Backup folder is not writable" | Insufficient permissions or invalid path | Choose a different backup folder with write access |
| "Failed to commit changes for layers" | Editable layers have uncommitted changes | Save or discard changes in affected layers |
| "Failed to save project" | Project file write error | Check disk space and file permissions |
| Timer not appearing in toolbar | Toolbar creation failed | Restart QGIS or check for plugin conflicts |

## 🌟 Best Practices

- ✔️ **Save First**: Always save your project before starting auto backup.
- 📁 **Choose Location**: Use a dedicated backup folder, preferably on a different drive.
- 🗂️ **Select Layers**: Only backup layers you actively work with to save space.
- ⏰ **Set Interval**: Balance between data safety and performance (10-30 minutes recommended).
- 📊 **Monitor Logs**: Regularly check the log tab for any backup issues.
- 💾 **External Backup**: Use auto backup as a safety net, not your only backup solution.

## 📝 Example Workflow

🗺️ **Scenario**: You're working on a cadastral mapping project and want to ensure your work is automatically backed up every 15 minutes.

1. Save your QGIS project.
2. Open Tools Panel → Click **Backup**.
3. Set **Backup Interval** to `15` minutes.
4. Choose **Multiple Backups** mode, set **Maximum Backups** to `20`.
5. Select the key layers you want to backup (leave others unchecked).
6. Click **Change Folder** and select `D:\QGIS_Backups`.
7. Click **Start Auto Backup**.
8. Notice the toolbar timer showing "14:45" countdown.
9. Continue working; backups happen automatically in the background.
10. Check the **Log** tab periodically to ensure backups are successful.

🧮 **Result**: Your project and selected layers are automatically backed up every 15 minutes to timestamped folders, with old backups cleaned up automatically, providing robust protection against data loss.

---

📌 **The Auto Backup system provides peace of mind by automatically safeguarding your QGIS work, combining flexibility with comprehensive protection. 🛡️💾**
