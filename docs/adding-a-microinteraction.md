---
id: adding-a-microinteraction
title: Adding a Microinteraction
---

Adding a microinteraction is pretty straight-forward as well.

## Step 1: Add Microinteraction File

Navigate to the `/src/microinteractions/` directory and drop in your `.js` file or create a directory for it if the microinteraction is a little more complex.

## Step 2: Add to Switch Navigator

protocapsule uses a high-level **Switch Navigator** for better optimization that allows for only loading in the screens/app experience we need at the time.

This step is to include the newly added microinteraction, to the `SwitchNavigator`

Open up the file `/src/navigation/SwitchNavigator.js`

```jsx title="/src/navigation/SwitchNavigator.js" {2,7}
// add navigation for microinteractions here
import AnimatedLoading from '../microinteractions/AnimatedLoading';

const SwitchNavigator = createSwitchNavigator(
  {
    // microinteractions
    AnimatedLoading,
```

## Step 3: Data mapping

Finally we need to add the microinteraction to the data file so that it will display on the microinteraction tab of protocapsule.

Open up the file `/src/capsule/data.js`

```jsx title="/src/capsule/data.js" {2-7}
export const microinteractions = {
  animatedLoading: {
    preview: require('./assets/images/animated-loading.jpg'),
    title: 'Animated Loading',
    desc: 'Examples of loading animations to look at (Ideation team #2)',
    route: 'AnimatedLoading'
  },

  ...

};
```

That's it, a new microinteraction has now been added to protocapsule!

## See also

- [Adding an App](adding-an-app)
- [Gotchas](gotchas)
