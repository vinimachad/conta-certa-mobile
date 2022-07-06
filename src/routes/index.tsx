import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { UserSessionContext } from "../hooks/UserSessionContext";
import { Dashboard } from "../screens/Dashboard";
import { Done } from "../screens/Done";
import { Home } from "../screens/Home";
import { InputName } from "../screens/InputName";
import { Scanner } from "../screens/Scanner";
import { UserSessionService } from "../service/UserSession/UserSessionService";

export type RootStackParamList = {
    Home: undefined;
    InputName: undefined
    Done: undefined
    Dashboard: undefined
    Scanner: undefined
};

export function NavigationFlow() {

    const Stack = createStackNavigator<RootStackParamList>();
    const [sessionLoaded, setSessionLoaded] = useState(false)
    const { userSession, didSetUserSession } = useContext(UserSessionContext)

    useEffect(() => {
        UserSessionService.INSTANCE.getSession((session) => {
            didSetUserSession(session)
            setSessionLoaded(true)
        })
    }, [])

    if (!sessionLoaded) {
        return <AppLoading />
    }

    return (
        <NavigationContainer >
            <Stack.Navigator >
                {
                    userSession.isLoggedIn ?
                        (<>
                            <Stack.Screen name="Dashboard" component={Dashboard} />
                            <Stack.Screen name="Scanner" component={Scanner} />
                        </>)
                        :
                        (<>
                            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                            <Stack.Screen name="InputName" component={InputName} options={{ headerShown: false }} />
                            <Stack.Screen name="Done" component={Done} options={{ headerShown: false }} />
                        </>)
                }
            </Stack.Navigator>
        </NavigationContainer >
    );
}