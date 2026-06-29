import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import InicioStack from "./src/navigation/InicioStack";
import PerfilScreen from "./src/screens/PerfilScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#8B5CF6",
          tabBarInactiveTintColor: "#777",
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={InicioStack}
          options={{
            tabBarIcon: () => <Text>🏠</Text>,
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{
            headerShown: true,
            headerTitle: "Perfil",
            tabBarIcon: () => <Text>👤</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}