# 🧭 Master Panel

## 📖 What is the Master Panel?

The **Master Panel** is a user-friendly form in QGIS designed to help you easily enter and manage administrative details such as:

- District

- Mandal Name (in English)

- Panchayat Name

- Grama Panchayat Code

- Village (LGD) Code

This panel is useful for surveyors, map editors, or government staff who regularly work with village-level maps and need to maintain consistency across maps, reports, and templates.

## Opening the Panel

1. You can open the Master Panel from within QGIS toolbar.

    ```
    Right Click on Toolbar ▶ Enable Gruhanaksha Toolbar ▶ Click on the Master Panel icon in the Toolbar
    ```

2. From Plugin Menu:

    ```
    Plugins ▶ Gruhanaksha ▶ Master Data
    ```

Once opened, you will see a simple form with labeled fields and two buttons at the bottom: **Clear** and **Update**.

## 🧾 Fields in the Panel

| **Field**                 | **What to Enter**                                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Choose Your District**  | Select your district from the dropdown list. Each entry is shown in English followed by the Telugu name in brackets. |
| **Mandal Name (English)** | Type the mandal name using English letters. For example: `Anandapuram`.                                              |
| **Panchayat Name**        | Type the name of the panchayat (village council).                                                                    |
| **Grama Panchayat Code**  | Enter the official code assigned to the panchayat.                                                                   |
| **Village (LGD) Code**    | Enter the LGD (Local Government Directory) village code.                                                             |

## 🛠️ How to Use the Master Panel

### ✅ Step 1: Select Your District

- Click the dropdown at the top labeled **“Choose Your District”**.

- Scroll and select your district. Each item is displayed in the format:  
  `District Name (తెలుగు పేరు)`, e.g., `Srikakulam (శ్రీకాకుళం)`.

### ✅ Step 2: Enter Your Information

Fill out the other fields:

- Enter the **Mandal Name** using English letters.

- Provide the **Panchayat Name**, **Grama Panchayat Code**, and **Village Code** carefully.

- There is no need to worry about uppercase/lowercase—entries are automatically converted to **Proper Case** (e.g., `rajam` → `Rajam`).

### ✅ Step 3: Save the Data

- After filling in all the details, click the **Update** button at the bottom.

- A pop-up message will confirm:  
  **"Data has been successfully updated."**

🗂️ Your data is now saved and can be reused by other QGIS tools, map layouts, or custom forms.

### 🔄 Step 4: Clear the Data (Optional)

- Click the **Clear** button to reset all fields.

- This is useful if you want to enter new data for a different area or correct mistakes.

## 📌 Features and Benefits

- ✅ Easy-to-use form with clear labels

- ✅ Districts listed in both English and Telugu

- ✅ Automatically remembers your last-used entries

- ✅ Makes sure your inputs are consistently formatted

- ✅ Saves time during repetitive map and report generation

## 🧠 Example Use Case

> You are preparing a land parcel map for the **Kotturu Mandal** in **Srikakulam District**.  
> Open the Master Panel → Select **Srikakulam (శ్రీకాకుళం)** → Enter `Kotturu`, `Pathapatnam`, GP Code `1056`, Village Code `112233`.  
> Click **Update**.  
> Now, any map template or labeling script in QGIS can access these values automatically.

## 🛑 Important Notes

- Make sure you **click the Update button** after filling in or changing any field. Otherwise, your data won’t be saved.

- When you reopen the Master Panel later, your previous entries will load automatically for quick editing.

- Only one set of values can be stored at a time. Updating will overwrite previous values.
