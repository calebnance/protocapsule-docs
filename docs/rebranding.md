---
id: rebranding
title: Rebranding
---

You may want to rebrand protocapsule before sharing with your designers, devs, and/or stakeholders.

Within the protocapsule download, I've also included `/creative-bundle/`, a few helpful design files for you to quickly create your own splash screen and app icon.

```bash
├── /creative-bundle/
│   ├── icon.afphoto
│   ├── icon.eps
│   ├── icon.psd
│   ├── splash.afphoto
│   ├── splash.eps
│   └── splash.psd
└── /protocapsule/
```

## New Splash Screen & Icon

Now that you've created your new splash screen and icon from the design files above, head over to `/src/capsule/assets/` and drop in the new files.

## Changing Theme Colors

To help support your new icon/splash rebranding, you can also quickly edit the colors used throughout protocapsule, **main navigation background color**, **icon active/inactive states**, etc.

Open up the file `/src/capsule/constants/colors.js`

```javascript title="/src/capsule/constants/colors.js"
// protocapsule colors & theming
primary: '#1a1054',
secondary: '#0ceff5',

...

// app specific usage definded here.
// allowing for quick editing/theming of the capsule
tabNavBackgroundColor: '#1a1054',
tabNavActive: '#0ceff5',
tabNavInActive: '#999999'
```

## Spacing Grid

By default, protocapsule uses an `8pt` spacing grid, you can easily change that too, with a one line edit.

Open up the file `/src/capsule/constants/globalStyles.js`

```javascript title="/src/capsule/constants/globalStyles.js" {7}
...

// define space grid
// /////////////////////////////////////////////////////////////////////////////
// some people use 8pt grid, some 5pt
// this is setting one place then done
const spaceGrid = 8;

...
```

## Page Note

:::note
**This page is just for protocapsule's main app wrapper**, any of the experiences you load in via apps or microinteractions is not controlled by any of the theming, grid systems talked about above. Each app and microinteraction is standalone.
:::
