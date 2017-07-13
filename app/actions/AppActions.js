import StatusBarAndroid from 'react-native-android-statusbar';

export default class AppActions {

    updateTheme(name) {
        StatusBarAndroid.setHexColor(name);
        return name;
    }

}

