import { useEffect, useState } from "react";
import { Lugar } from "../types";
import { lugaresService } from "../services/lugaresService";

export function useLugares() {
  const [lugares, setLugares] = useState<Lugar[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    cargarLugares();
  }, []);

  const cargarLugares = () => {
    const datos = lugaresService.obtenerLugares();
    setLugares(datos);
    setCargando(false);
  };

  return {
    lugares,
    cargando,
    recargar: cargarLugares,
  };
}