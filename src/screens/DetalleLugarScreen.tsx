import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { InicioStackParamList } from "../navigation/navigationTypes";
import { useLugares } from "../hooks/useLugares";

type DetalleRouteProp = RouteProp<
  InicioStackParamList,
  "DetalleLugar"
>;

type DetalleNavigationProp = NativeStackNavigationProp<
  InicioStackParamList,
  "DetalleLugar"
>;

export default function DetalleLugarScreen() {

  const route = useRoute<DetalleRouteProp>();
  const navigation = useNavigation<DetalleNavigationProp>();

  const { getLugar } = useLugares();

  const lugar = getLugar(route.params.lugarId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: lugar?.nombre ?? "Detalle del lugar",
    });
  }, [navigation, lugar]);

  if (!lugar) {
    return (
      <View style={styles.container}>
        <Text>Lugar no encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: lugar.imagen }}
        style={styles.imagen}
      />

      <Text style={styles.nombre}>
        {lugar.nombre}
      </Text>

      <Text style={styles.categoria}>
        {lugar.categoria}
      </Text>

      <Text style={styles.descripcion}>
        {lugar.descripcion}
      </Text>

      <Text style={styles.info}>
        📍 Ciudad: {lugar.ciudad}
      </Text>

      <Text style={styles.info}>
        🏠 Dirección: {lugar.direccion}
      </Text>

      <Text style={styles.precio}>
        ${lugar.precio}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  imagen: {
    width: "100%",
    height: 220,
    borderRadius: 12,
  },

  nombre: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },

  categoria: {
    fontSize: 18,
    color: "#777",
    marginTop: 6,
  },

  descripcion: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
  },

  info: {
    marginTop: 15,
    fontSize: 16,
  },

  precio: {
    marginTop: 25,
    fontSize: 28,
    fontWeight: "bold",
    color: "#8B5CF6",
  },

});