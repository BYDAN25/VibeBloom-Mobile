# VibeBloom Mobile

Aplicación móvil desarrollada con **React Native**, **Expo** y **TypeScript** como parte del Proyecto Integrador de la carrera de Ingeniería en Sistemas Computacionales.

## Tecnologías utilizadas

- React Native
- Expo SDK 54
- TypeScript
- React Navigation
- Native Stack Navigation

## Arquitectura de navegación

```text
App
│
└── Bottom Tabs
    │
    ├── Inicio
    │      │
    │      └── InicioStack
    │             │
    │             ├── HomeScreen
    │             └── DetalleLugarScreen
    │
    └── Perfil
```

## Flujo de navegación

```text
Inicio
   │
   ▼
Lista de lugares
   │
   ▼
Detalle del lugar
   │
   ▼
Regresar
```

## Ejecución del proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
npx expo start
```

## Reflexión

Durante el desarrollo de esta actividad se implementó una navegación anidada utilizando Bottom Tabs y Native Stack en React Navigation. Inicialmente se presentó un conflicto entre versiones de las librerías de navegación, el cual fue resuelto utilizando `npx expo install`, asegurando la compatibilidad con Expo SDK 54.

La implementación permitió navegar desde la lista de lugares hacia la pantalla de detalle enviando parámetros tipados con TypeScript. Esta arquitectura mejora la organización del proyecto VibeBloom y facilita su crecimiento para futuras funcionalidades.