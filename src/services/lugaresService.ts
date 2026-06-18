import { Lugar } from "../types";

const lugares: Lugar[] = [
  {
    id: 1,
    nombre: "Maniática",
    descripcion: "Cafetería con un ambiente moderno y excelente vista al centro histórico.",
    imagen: "https://picsum.photos/400/250?random=1",
    ciudad: "Querétaro",
    direccion: "Centro Histórico",
    categoria: "Cafetería",
    precio: 350,
    calificacion: 4.8,
  },
  {
    id: 2,
    nombre: "La Mariposa",
    descripcion: "Restaurante tradicional ideal para desayunos y postres típicos.",
    imagen: "https://picsum.photos/400/250?random=2",
    ciudad: "Querétaro",
    direccion: "Centro Histórico",
    categoria: "Restaurante",
    precio: 340,
    calificacion: 4.7,
  },
  {
    id: 3,
    nombre: "Peña de Bernal",
    descripcion: "Uno de los principales atractivos turísticos de Querétaro.",
    imagen: "https://picsum.photos/400/250?random=3",
    ciudad: "Bernal",
    direccion: "Ezequiel Montes",
    categoria: "Pueblo Mágico",
    precio: 450,
    calificacion: 5,
  },
];

export const lugaresService = {
  obtenerLugares(): Lugar[] {
    return lugares;
  },
};