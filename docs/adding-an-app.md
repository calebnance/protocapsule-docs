---
id: adding-an-app
title: Adding an App
---

Adding an app to protocapsule is pretty straight-forward.

For this walk-through I will use the Music app (that is **included with protocapsule**), as the example, that way you can follow along with the real code as well.

## Step 1: Add App Directory

Navigate to the `/src/apps/` directory and drop your React Native/Expo app into it's own directory.

## Step 2: Linking Navigation

Wherever your App Entry file is, be sure to add these lines below. This connects the root navigation of protocapsule to be accessible within each contained application.

For this example, our App's entry file is: `/src/apps/music/App.js`

Now to link the navigation with the mainstack of your app, follow the steps below:

```jsx title="/src/apps/music/App.js" {2,5}
// main navigation stack
import MusicAppStack from './navigation/Stack';

class MusicApp extends React.Component {
  static router = MusicAppStack.router;
```

Then make sure to pass down the navigation object to your App's main Navigation Stack.

```jsx title="/src/apps/music/App.js" {1,8}
const { navigation } = this.props;

return (
  <React.Fragment>
    <StatusBar barStyle="light-content" />

    <MusicAppStack
      navigation={navigation}
```

## Step 3: Add to Switch Navigator

protocapsule uses a high-level **Switch Navigator** for better optimization that allows for only loading in the screens/app experience we need at the time.

This step is to include the newly added app, to the `SwitchNavigator`

Open up the file `/src/navigation/SwitchNavigator.js`

```jsx title="/src/navigation/SwitchNavigator.js" {2,11}
// add navigation for full experience apps here
import MusicStack from '../apps/music/App';

...

const SwitchNavigator = createSwitchNavigator(
  {
    MainCapsuleStack,

    // apps
    MusicStack,
```

## Step 4: Data mapping

Finally we need to add the app to the data file so that it will display on the home screen of protocapsule.

Open up the file `/src/capsule/data.js`

```jsx title="/src/capsule/data.js" {2-7}
export const appsList = {
  musicify: {
    category: 'Ideation Team #1',
    displayName: 'Music app',
    icon: require('../apps/music/assets/images/icon.png'),
    route: 'MusicStack'
  },

  ...

};
```

:::tip
Depending on your team's need, there is also a `category` bucket (displayed above ^) for grouping and better organization of the apps being created/user tested. This feature is helpful for a development team that is working with **multiple design teams**.
:::

That's it, a new app has now been added to protocapsule!

## See also

- [Adding a Microinteractions](adding-a-microinteraction)
- [Gotchas](gotchas)
