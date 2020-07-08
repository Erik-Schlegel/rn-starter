
# Environment Setup

## Key Dependencies
- node >= 12.18.2
- xcode >= 11.5
- iOS 13.4 Simulator
- JDK 8
- Android Studio

## Instructions
- Homebrew:
  - If homebrew is not already installed (check with ```brew -v```)
    - ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"```
- Node setup:
  - If node is not already installed:
    - ```brew install node```
  - else
    - It is highly recommended to use an [npm package called 'n'](https://www.npmjs.com/package/n) which allows multiple versions of node to be installed and used in parallel:
		```sh
		npm i -g n
		sudo n 12.18.2 #install and switch to node 12.18.2
		```
- Yarn Setup:
  - If yarn is not already installed (check with ```yarn -v```):
    - ```brew install yarn```
  - else
  	-  ```curl --compressed -o- -L https://yarnpkg.com/install.sh | bash```


### Steps for iOS Development:
- Install Watchman (tool that watches folder for changes): ```brew install watchman```
- Setup XCode >= 9.4
  - Install xCode latest command line tools
  - xCode > "Preferences..." > Locations > Select most recent version in the Command Line Tools dropdown.
  - verify xCode setup ```xcodebuild -version```
- Install [Cocoapods](https://guides.cocoapods.org/using/getting-started.html) ```sudo gem install cocoapods```


### Steps for Android Development:
- Install JDK ```brew cask install adoptopenjdk/openjdk/adoptopenjdk8```
- Download and install [Android Studio](https://developer.android.com/studio/index.html) with "custom" install
  - Android SDK
  - Android SDK Platform
  - Performance (Intel HAXM) [or AMD](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)
  - Android Virtual Device
- Install Android 9 SDK
  - From Android Studio Welcome Screen > Configure > SDK Manager
  - OR
  - From Android Studio Preferences > Appearance & Behavior > System Settings > Android SDK
  - Then
	-  Check "Show Package Details" > Check following boxes under Android 9.0 (Pie)
	   - Android SDK Platform 28
	   - Intel x86 Atom_64 System Image
	- Click the "SDK Tools" Tab
	  - check "Show Package Details"
	  - check 28.0.3
	- Click Apply
	- (removed)
	  - SDK Tools > SDK 30
	  - SDK Platforms > Android 10.0+ [ Android SDK Platform 30, Google APIs Intel x86 Atom System Image ]
- Setup Environment Variables:
	- Add the following lines to .bash_profile
		```
		#Android Development Setup...
		export ANDROID_HOME=$HOME/Library/Android/sdk  #confirm this path in Android Studio > "Preferences" > Appearance & Behavior > System Settings > Android SDK.
		export PATH=$PATH:$ANDROID_HOME/emulator
		export PATH=$PATH:$ANDROID_HOME/tools
		export PATH=$PATH:$ANDROID_HOME/tools/bin
		export PATH=$PATH:$ANDROID_HOME/platform-tools
		```
  - ```source ~/.bash_profile```


### Set up an Android Virtual Device
- Init a new dummy react native project.
	- ```npx react-native init DummyProjectName```
- Open [DummyProjectName]/android in Android Studio
- Tools > AVD Manager
- Create Virtual Device
- Pick a device (recommend Pixel 2) > click "next" > Select Pie API level 28 image (may need to download this)
- Finish creating device.



