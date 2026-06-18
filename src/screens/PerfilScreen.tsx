import { View, Text, StyleSheet } from "react-native";

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>👤 Perfil</Text>

      <Text>Daniel Mendoza</Text>

      <Text>Ingeniería en Sistemas Computacionales</Text>

      <Text>Proyecto VibeBloom</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },
});