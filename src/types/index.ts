// Representa un lugar publicado en VibeBloom
export type Lugar = {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  ciudad: string;
  direccion: string;
  categoria: string;
  precio: number;
  calificacion: number;
};

// Representa a un usuario de la aplicación
export type Usuario = {
  id: number;
  nombre: string;
  correo: string;
  foto: string;
};

// Representa un lugar guardado en favoritos
export type Favorito = {
  id: number;
  usuarioId: number;
  lugarId: number;
};

// Representa una reseña de un lugar
export type Resena = {
  id: number;
  usuarioId: number;
  lugarId: number;
  comentario: string;
  calificacion: number;
  fecha: string;
};