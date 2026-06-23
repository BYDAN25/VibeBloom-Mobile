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

  // Obtiene la información desde el Custom Hook
  const { lugares, cargando, getLugar } = useLugares();

  // Muestra un mensaje cuando el usuario selecciona un lugar
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

  // Renderiza cada tarjeta de la lista
  const renderLugar = ({ item }: { item: Lugar }) => {

    // Obtiene la información del lugar mediante su identificador
    const lugar = getLugar(item.id);

    return (
      <View style={styles.card}>
        <Image
          source={{ uri: lugar?.imagen }}
          style={styles.imagen}
        />

        <View style={styles.info}>
          <Text style={styles.nombre}>
            {lugar?.nombre}
          </Text>

          <Text style={styles.categoria}>
            {lugar?.categoria} • {lugar?.ciudad}
          </Text>

          <Text style={styles.descripcion}>
            {lugar?.descripcion}
          </Text>

          <View style={styles.footer}>
            <Text style={styles.precio}>
              ${lugar?.precio}
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
  };

  // Muestra un indicador mientras los datos se cargan
  if (cargando) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#8B5CF6" />
        <Text style={{ marginTop: 10 }}>
          Cargando lugares...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* Muestra la lista de lugares utilizando FlatList */}
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