import * as ScreenOrientation from 'expo-screen-orientation';

export class ViewModel {

    async changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    }
}