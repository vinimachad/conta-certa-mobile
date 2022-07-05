import AsyncStorage from "@react-native-async-storage/async-storage"
import { UserSession } from "../../models/UserSession"

export interface IUserSessionService {
    getSession(compleiton: (userSession: UserSession) => void): Promise<void>
    setSession(session: UserSession, compleiton: () => void)
}

export class UserSessionService implements IUserSessionService {

    static INSTANCE: IUserSessionService = new UserSessionService()

    private constructor() { }

    async getSession(compleiton: (userSession: UserSession) => void): Promise<void> {
        let data = await AsyncStorage.getItem('@contaCerta:session')
        compleiton(data != null ? JSON.parse(data) : { isLoggedIn: false })
    }

    async setSession(session: UserSession, compleiton: () => void) {
        await AsyncStorage.setItem('@contaCerta:session', JSON.stringify(session))
        compleiton()
    }
}