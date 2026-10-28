# VS Code Custom File Icons

Personal custom file icons for the **Material Icon Theme** extension in Visual Studio Code. Use this guide to set up the same icons on another device.

## 1. Install Material Icon Theme

1. Open VS Code.
2. Press `Ctrl + Shift + X` to open Extensions.
3. Search for **Material Icon Theme** and install it.

## 2. Copy the `icons` folder

1. Download or clone this repository.
2. Open the `Vscode-custom-icons` folder.
3. Copy its **`icons` folder** into your VS Code extensions directory.

**Windows destination:**

```text
%USERPROFILE%\.vscode\extensions\icons
```

For example:

```text
C:\Users\YourName\.vscode\extensions\icons
```

If an `icons` folder already exists at that location, copy the SVG files into it and allow Windows to merge the folders. Keep all SVG filenames unchanged.

> Important: The folder must be located at `.vscode\extensions\icons`, not inside your project folder.

## 3. Open `settings.json`

1. In VS Code, press `Ctrl + Shift + P` to open the Command Palette.
2. Search for `Preferences: Open User Settings (JSON)`.
3. Select it to open your user `settings.json`.
4. Add the following configuration inside the outer JSON object.

```json
"material-icon-theme.files.associations": {
    "*.store.js": "../../icons/shop-solid-full",
    "*.store.ts": "../../icons/shop-solid-full",

    "*.api.js": "../../icons/unplug",
    "*.api.ts": "../../icons/unplug",

    "*.slice.js": "../../icons/pizza-slice-solid-full",
    "*.slice.ts": "../../icons/pizza-slice-solid-full",

    "database.js": "database",
    "database.ts": "database",

    "db.js": "database",
    "db.ts": "database",

    "server.js": "../../icons/server-solid-full",
    "server.ts": "../../icons/server-solid-full",

    "*.validator.js": "../../icons/validation-solid-full",
    "*.validator.ts": "../../icons/validation-solid-full",

    "*.middleware.js": "../../icons/person-pointing-solid-full",
    "*.middleware.ts": "../../icons/person-pointing-solid-full",

    "config.js": "../../icons/gears-solid-full",
    "config.ts": "../../icons/gears-solid-full",

    "app.js": "../../icons/cubes-solid-full",
    "app.ts": "../../icons/cubes-solid-full",

    "*.model.js": "../../icons/mug-saucer-solid-full",
    "*.model.ts": "../../icons/mug-saucer-solid-full",

    "*.hook.js": "../../icons/hook-icon",
    "*.hook.ts": "../../icons/hook-icon"
}
```

**If `settings.json` already has other settings:** place a comma after the previous property before adding this block. If `material-icon-theme.files.associations` already exists, merge these entries into the existing object rather than adding a duplicate key.

## 4. Apply the icon theme

1. Press `Ctrl + Shift + P`.
2. Search for `Preferences: File Icon Theme`.
3. Select **Material Icon Theme**.
4. If the icons do not refresh, open the Command Palette again and run `Developer: Reload Window`.

## File associations

| Filename pattern | Icon |
| --- | --- |
| `*.store.js` | Shop |
| `*.api.js` | Plug |
| `*.slice.js` | Pizza slice |
| `database.js`, `db.js` | Built-in database icon |
| `server.js` | Server |
| `*.validator.js` | Validation |
| `*.middleware.js` | Person pointing |
| `config.js` | Gears |
| `app.js` | Cubes |
| `*.model.js` | Circle nodes |
| `*.hook.js` | Hook |

## Troubleshooting

- **An icon is missing:** Make sure the matching SVG exists in the `icons` folder and that its filename matches the association exactly.
- **Icons do not change:** Verify that **Material Icon Theme** is selected as the File Icon Theme, then reload the VS Code window.
- **JSON error:** Make sure the association setting is inside the outer JSON object, commas are correct, and the setting key is not duplicated.
- **Setting up another device:** Repeat the folder-copy and `settings.json` steps on that device. Both the SVG files and the VS Code user settings are required.
