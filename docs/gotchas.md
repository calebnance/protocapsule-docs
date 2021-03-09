---
id: gotchas
title: Gotchas
---

## Potential Error Messages

---

**_No "routes" found in navigation state._** to fix this error message, view code block one on [adding-an-app](/docs/adding-an-app#step-2-linking-navigation)

---

**_The navigation prop is missing for this navigator._** to fix this error message, view code block two on [adding-an-app](/docs/adding-an-app#step-2-linking-navigation)

---

## Same Route Namings

As you add more and more apps to protocapsule, be aware of the route naming conventions, and take into consideration prefixing each route with the specific app name.

Below is an example of two apps with the same tab navigation route namings:

```jsx title="/src/apps/music/App.js" {3}
const BottomTabNavigator = createBottomTabNavigator(
  {
    StackHome: StackHome
    ...
```

```jsx title="/src/apps/stream/App.js" {3}
const BottomTabNavigator = createBottomTabNavigator(
  {
    StackHome: StackHome
    ...
```

As you can see above, the route names are both **StackHome**, to prevent this, take a look at the next two blocks, prefixing the app name to provide different route naming conventions.

```jsx title="/src/apps/music/App.js" {3}
const BottomTabNavigator = createBottomTabNavigator(
  {
    MusicStackHome: StackHome
    ...
```

```jsx title="/src/apps/stream/App.js" {3}
const BottomTabNavigator = createBottomTabNavigator(
  {
    StreamStackHome: StackHome
    ...
```

Now **MusicStackHome** and **StreamStackHome** are two different routes.
