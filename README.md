## Multiplatform

This repo contains universal react component that can renders to both web & native.

Uses babel to perform wizardry. See [babel-multiplatform.js](babel/babel-multiplatform.js) for details.

## Running examples

```sh
multiplatform$ yarn
multiplatform$ npx react-native-cli run-android # Open emulator & build development APK
multiplatform$ npx react-native-cli run-ios # Open emulator & install iOS development app to iOS emulator
multiplatform$ yarn start:rn # Run react-native packager
multiplatform$ yarn start:web # Run local development server
```

When the app opens on emulator & opened in the browser, make some changes to [App.js](App.js) and see the results live.