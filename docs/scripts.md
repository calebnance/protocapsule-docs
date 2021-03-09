---
id: scripts
title: Build Scripts
---

Below is a full listing of all scripts included with protocapsule.

## Development

These scripts are helpful when developing an app:

```bash
yarn dev
```

Start project and open in iOS Simulator (mac dev only):

```bash
yarn ios
```

Start project and open in Android emulator ([Android emulator install help](https://docs.expo.io/workflow/android-studio-emulator/)):

```bash
yarn android
```

Quickly lint the project in the cli:

```bash
yarn lint
```

## Production

Once you are ready to upload to TestFlight or share an `.apk`, these scripts will help!

Generate `.ipa` for Apple Submission:

```bash
yarn ios-bundle
```

Generate `.aab` for Google Play Store Submission:

```bash
yarn android-bundle
```

Generate `.apk` for sharing or Google Play Store Submission:

```bash
yarn android-bundle-binary
```
