import * as ScreenOrientation from 'expo-screen-orientation';
import { BarCodeScanner, PermissionStatus } from 'expo-barcode-scanner'

export class ViewModel {

    async requestCameraPermission(): Promise<PermissionStatus> {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        return status
    }

    hasPermissionToShowCamera(hasPermission: boolean, hasntPermissionCompletion: () => void) {

        if (hasPermission === false) {
            hasntPermissionCompletion()
            return
        }
    }

    async changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
}