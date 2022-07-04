import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";

export type RootStackParamList = {
    Home: undefined;
};

export function NavigationFlow() {

    const Stack = createStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}