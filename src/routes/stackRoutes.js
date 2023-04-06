import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Detail from "../pages/detail";
import Search from "../pages/search";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Detail" component={Detail} screenOptions={{ title: "Detalhes da Receita",}}/>
            <Stack.Screen name="Search" component={Search} screenOptions={{ title: "Veja o que encontramos",}}/>
        </Stack.Navigator>
    );
    }
