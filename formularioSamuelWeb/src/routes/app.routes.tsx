import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";

const Stack = createNativeStackNavigator();
export function AppRoutes() {
    return(
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen
                name ="Home"
                component = {Home}
                options={{
                    headerStyle: {
                        backgroundColor: '#808080',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: "left",
                }}
            />
            <Stack.Screen
                name ="Profile"
                component = {Profile}
                options={{
                    headerStyle: {
                    backgroundColor: '#808080',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: "left",
                }}
            />
        </Stack.Navigator>
    )
}