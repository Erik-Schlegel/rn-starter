
# React Native App

[Dev Environment Setup](_readme/EnvironmentSetup.md)

## Comming Soon
- Storybook
- E2e testing

## Base dependencies
- [React-Native-Config](https://github.com/luggit/react-native-config) to manage environments.
- [React-Navigation](https://reactnavigation.org/) navigation library.
- [React-Native-Localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.
-
- [Redux](https://redux.js.org/) for state management.
- [Redux-Persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [Redux-Saga](https://www.npmjs.com/package/redux-saga) for async dispatches to redux
- [Axios](https://github.com/axios/axios) for networking.

- [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) for testing.
- [PropTypes](https://github.com/facebook/prop-types) to type-check our components exposed properties.



## Folder structure
This template follows a very simple project structure:

- `index.js`:		Entry point of your application as per React-Native standards.
- `src`:			This folder is the main container of all the code inside your application.
  - `app.js`:		Main component that starts your whole app.

  - `assets`:		Asset folder to store all images, vectors, etc.
  - `utils`:		abc

  - `components`:	Folder that contains all your application components.
	- `atoms`:		abc
	- `molecules`:	abc
	- `organisms`:	abc
	- `pages`:		abc
	- `templates`:	abc

  - `mooveit`:		abc
	- `common`:		Folder to store any common component that you use through your app (such as a generic button, textfields, etc).
	- `helpers`:	Folder to store any kind of helper that you have.
    - `controllers`:	Folder to store all your network and storage logic (you should have one controller per resource).
    - `actions`:		This folder contains all actions that can be dispatched to redux.
    - `reducers`:		This folder should have all your reducers, and expose the combined result using its `index.js`
    - `selectors`:	Folder to store your selectors for each reducer.


## Splash screen customization
To customize the splash screen (logo and background color) use the CLI provided in the [official docs](https://github.com/zoontek/react-native-bootsplash#assets-generation).


## Environment Variables
Add the environment variables files in root folder(.env.staging and .env.production)


## Android
A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.


## iOS
The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

Start by creating a new scheme:
- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "Production"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

Expand the "Build" settings on left
- Click "Pre-actions", and under the plus sign select "New Run Script Action"
- Where it says "Type a script or drag a script file", type: `echo ".env.production" > /tmp/envfile` replacing .env.production with your file


## Useful resources & Further reading
This are some posts/guides that explain some things that we use inside the project:

- [React-Native-Navigation and Redux](https://medium.com/react-native-training/explanation-of-react-native-navigation-wix-with-redux-deabcee8edfc).


## Misc Notes
[Misc Notes](./_readme/Miscellany.md)