import { useEffect, useState } from "react";
import { Lugar } from "../types";
import { lugaresService } from "../services/lugaresService";

export function useLugares() {

  // Almacena la lista de lugares obtenidos del servicio
  const [lugares, setLugares] = useState<Lugar[]>([]);

  // Controla si los datos aún se están cargando
  const [cargando, setCargando] = useState<boolean>(true);

  // Se ejecuta una sola vez cuando inicia la pantalla
  useEffect(() => {
    cargarLugares();
  }, []);

  // Obtiene los lugares desde el servicio
  const cargarLugares = () => {
    const datos = lugaresService.obtenerLugares();
    setLugares(datos);
    setCargando(false);
  };

  // Busca un lugar por su identificador
  const getLugar = (id: number): Lugar | undefined => {
    return lugares.find((lugar) => lugar.id === id);
  };

  // Devuelve la información para que pueda ser utilizada por cualquier pantalla
  return {
    lugares,
    cargando,
    getLugar,
  };
}