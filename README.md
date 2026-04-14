# 🖥️ E-Commerce Frontend

Frontend de un sistema e-commerce desarrollado con **React**, enfocado en rendimiento, escalabilidad y buenas prácticas modernas. Este proyecto consume una API reactiva basada en WebFlux.

---

## 🚀 Tecnologías utilizadas

- ⚛️ React
- ⚡ Vite (o Create React App si aplica)
- 🔄 TanStack Query (React Query)
- 🌐 Axios / Fetch API
- 🎨 CSS / Tailwind / Styled Components (según uses)
- 🧠 Zustand / Context API (estado global si aplica)
- 🧪 React Hook Form (formularios)
- 🔐 Manejo de autenticación (JWT)

---

## 🧠 Arquitectura del proyecto

Estructura basada en separación por responsabilidades:

```bash
src/
 ├── app/        → configuración global
 ├── assets/     → imágenes, fonts
 ├── components/ → UI reutilizable
 ├── features/   → lógica por dominio
 ├── hooks/      → hooks custom
 ├── i18n/       → traducciones
 ├── lib/        → integraciones externas
 ├── testing/    → mocks/tests
 ├── types/      → tipos globales
 └── utils/      → helpers

```

---
## ⚡ Manejo de datos con TanStack Query

Se utiliza **TanStack Query** para:

- Fetching de datos
- Cache automático
- Sincronización con el servidor
- Reintentos automáticos
- Manejo de estados (`loading`, `error`, `success`)
---
### 📦 Ejemplo

```javascript
const { data, isLoading, error } = useQuery({
  queryKey: ['listings'],
  queryFn: fetchListings
});

## 🔐 Autenticación
- Manejo de JWT
- Almacenamiento en:
- LocalStorage / SessionStorage
- Interceptores para incluir token en requests

- 📦 Funcionalidades principales
- 🛍️ Listado de productos (listings)
- 🔎 Paginación infinita (infinite scroll)
- 🔐 Login / autenticación
- 📄 Detalle de producto
- 🧾 Creación de listings
- 🔄 Cambio de estado de listings
- 🎨 UI

## Componentes reutilizables
## Separación entre lógica y presentación
## Diseño responsive



