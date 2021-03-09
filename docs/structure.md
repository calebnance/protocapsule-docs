---
id: structure
title: Structure
---

I've tried to keep the project structure of protocapsule pretty simple and easy to navigate.

```bash title="protocapsule directory" {6}
├── src
│   ├── apps
│   ├── capsule
│   ├── microinteractions
│   └── navigation
├── App.js (main app entry)
└── app.json
```

## Apps

This directory is meant for full applications. Testing out an end-to-end experience, a new look of an application, or even a new flow for a pre-existing experience. This is the main tab section of protocapsule.

A great starter repo I created for this section: [expo-quick-prototype](https://github.com/calebnance/expo-quick-prototype).

## Capsule

This directory contains all that makes protocapsule work, screens, navigation stacks, components, data, etc.

There are probably only two files you will want to edit within `/capsule/`:

`/src/capsule/data.js`: for **data mapping** the apps and microinteractions within protocapsule (and supporting imagery).

`/src/capsule/constants/colors.js`: for **rebranding/theming** protocapsule to fit your teams needs (read more on [Rebranding](rebranding)).

## Microinteractions

This directory contains single screens/files that can quickly be added to protocapsule for even faster turn-around time as you ideate with your design teams. This is the second tab section of protocapsule.

## Navigation

This directory contains the main switch navigator that routes all stacks of the apps, and microinteractions.

## See also

- [Adding an App](adding-an-app)
- [Adding a Microinteraction](adding-a-microinteraction)
