import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { useLugares } from "../hooks/useLugares";
import { Lugar } from "../types";

export default function HomeScreen() {
  const { lugares, cargando } = useLugares();

  const verLugar = (lugar: Lugar) => {
    Alert.alert(
      "VibeBloom",
      `¿Deseas ver más información de "${lugar.nombre}"?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Aceptar",
          onPress: () =>
            Alert.alert("Perfecto", `Seleccionaste ${lugar.nombre}`),
        },
      ]
    );
  };

  const renderLugar = ({ item }: { item: Lugar }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagen }} style={styles.imagen} />

      <View style={styles.info}>
        <Text style={styles.nombre}>{item.nombre}</Text>

        <Text style={styles.categoria}>
          {item.categoria} • {item.ciudad}
        </Text>

        <Text style={styles.descripcion}>
          {item.descripcion}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.precio}>
            ${item.precio}
          </Text>

          <TouchableOpacity
            style={styles.boton}
            onPress={() => verLugar(item)}
          >
            <Text style={styles.botonTexto}>
              Ver lugar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  if (cargando) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#8B5CF6" />
        <Text>Cargando lugares...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={lugares}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderLugar}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  lista: {
    padding: 16,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 5,
  },

  imagen: {
    width: "100%",
    height: 200,
  },

  info: {
    padding: 15,
  },

  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },

  categoria: {
    color: "#777",
    marginTop: 5,
    fontSize: 14,
  },

  descripcion: {
    marginTop: 10,
    color: "#555",
    lineHeight: 20,
  },

  footer: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  precio: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8B5CF6",
  },

  boton: {
    backgroundColor: "#8B5CF6",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },

  botonTexto: {
    color: "#FFF",
    fontWeight: "bold",
  },
});