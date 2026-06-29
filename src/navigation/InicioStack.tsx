import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import DetalleLugarScreen from "../screens/DetalleLugarScreen";

import { InicioStackParamList } from "./navigationTypes";

const Stack = createNativeStackNavigator<InicioStackParamList>();

export default function InicioStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "VibeBloom",
        }}
      />

      <Stack.Screen
        name="DetalleLugar"
        component={DetalleLugarScreen}
        options={{
          title: "Detalle del lugar",
        }}
      />
    </Stack.Navigator>
  );
}