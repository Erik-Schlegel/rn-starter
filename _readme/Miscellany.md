
# Miscellany

## Renaming App

```bash
npm i -g react-native-rename
cd <project>
react-native rename <NewNameHere>
# After this executes...
cd <project>/ios
pod install
watchman watch-del-all
cd ..
npm start --reset-cache