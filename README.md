## Install React Native with Genymotion
http://amiraanuar.com/step-by-step-guide-to-building-an-android-app-using-react-native-and-genymotion/

## Install NVM
https://github.com/creationix/nvm/blob/master/README.markdown

## Install React Native
~~~
$ brew install watchman
$ npm install -g react-native-cli
~~~

## Install android SDK
~~~
$ brew install android-sdk
~~~

## Export ENV PATH
~~~
$ vi ~/.bash_profile
export ANDROID_HOME=/usr/local/opt/android-sdk
export PATH=~/.composer/vendor/bin:/usr/local/bin:$PATH
export PATH=$ANDROID_HOME/platform:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
~~~

## Start android SDK Manager
~~~
$ android avd
~~~

## If there is problem adb try:
~~~
$ adb kill-server
$ adb start-server
~~~

## Start prohect
~~~
$ react-native run-ios
$ react-native run-android
~~~
