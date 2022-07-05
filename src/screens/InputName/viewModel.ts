import { UserSessionService } from "../../service/UserSession/UserSessionService"

export class ViewModel {

    async setUserSession(name: string, completion: () => void) {
        await UserSessionService.INSTANCE.setSession({ isLoggedIn: true, name: name }, completion)
    }

    nameFieldValidation(name: string, completion: (isActive: boolean) => void) {
        if (name.length >= 4) {
            completion(true)
        } else {
            completion(false)
        }
    }
}