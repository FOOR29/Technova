# TechNova

**Author:** Forlan Ordoñez  
**CC:** 1143429216  
**Project Name:** TechNova  

## Descripción

TechNova es una aplicación web de gestión de productos construida con React y TypeScript. Permite a los usuarios autenticarse y gestionar un inventario de productos a través de un dashboard interactivo. La aplicación incluye funcionalidades de creación, lectura, actualización y eliminación (CRUD) de productos, con un sistema de autenticación basado en roles.

## Tecnologías Utilizadas

- **Frontend:**
  - React 19.1.1
  - TypeScript
  - Vite (para desarrollo y construcción)
  - Tailwind CSS (para estilos)
  - React Router DOM (para enrutamiento)
  - React Hook Form (para manejo de formularios)
  - Axios (para llamadas a la API)

- **Backend:**
  - API RESTful (servidor local en http://localhost:4000)
  - Base de datos MySQL (tablas: users, products)

- **Herramientas de Desarrollo:**
  - ESLint (para linting)
  - TypeScript ESLint
  - Vite Plugin React

## Características

- **Autenticación de Usuarios:** Login y logout con validación de credenciales.
- **Dashboard Protegido:** Acceso restringido basado en autenticación.
- **Gestión de Productos:**
  - Crear nuevos productos
  - Listar productos existentes
  - Editar productos
  - Eliminar productos
- **Interfaz Responsiva:** Diseñada con Tailwind CSS para una experiencia de usuario fluida.
- **Protección de Rutas:** Rutas protegidas que requieren autenticación.

## Instalación y Configuración

### Prerrequisitos

- Node.js (versión recomendada: 18+)
- npm o yarn
- Servidor backend corriendo en http://localhost:4000 (con base de datos MySQL)

### Pasos de Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd technova
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura el backend:
   - Asegúrate de que el servidor backend esté corriendo en `http://localhost:4000`.
   - Ejecuta las consultas SQL en `docs/query.txt` para crear las tablas `users` y `products` en tu base de datos MySQL.

4. Ejecuta la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```

5. Abre tu navegador en `http://localhost:5173` (puerto por defecto de Vite).

### Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run lint`: Ejecuta ESLint para verificar el código.
- `npm run preview`: Previsualiza la aplicación construida.

## Estructura del Proyecto

```
technova/
├── public/                 # Archivos estáticos
├── src/
│   ├── assets/             # Recursos estáticos (imágenes, etc.)
│   ├── components/         # Componentes reutilizables
│   │   ├── Header.tsx      # Barra de navegación
│   │   ├── IButton.tsx     # Botón personalizado
│   │   ├── LoginForm.tsx   # Formulario de login
│   │   ├── ProductCard.tsx # Tarjeta de producto
│   │   ├── ProductForm.tsx # Formulario para productos
│   │   └── ProductList.tsx # Lista de productos
│   ├── context/
│   │   └── AuthContext.tsx # Contexto de autenticación
│   ├── pages/              # Páginas principales
│   │   ├── Auth.tsx        # Página de autenticación
│   │   ├── Dashboard.tsx   # Dashboard de productos
│   │   └── NotFound.tsx    # Página 404
│   ├── routes/             # Configuración de rutas
│   │   ├── AppRouter.tsx   # Router principal
│   │   └── ProtectRouter.tsx # Ruta protegida
│   ├── services/           # Servicios de API
│   │   └── productService.ts # Funciones para productos
│   ├── types/              # Definiciones de tipos TypeScript
│   │   └── index.ts        # Tipos de la aplicación
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── docs/
│   └── query.txt           # Consultas SQL para la base de datos
├── package.json            # Dependencias y scripts
├── tsconfig.json           # Configuración de TypeScript
├── vite.config.ts          # Configuración de Vite
└── README.md               # Este archivo
```

## API Endpoints

La aplicación se conecta a un backend local. Los endpoints principales son:

- **POST /login**: Autenticación de usuario (requiere `name` y `password`).
- **GET /products**: Obtener lista de productos.
- **POST /products**: Crear un nuevo producto.
- **PUT /products/:id**: Actualizar un producto existente.
- **DELETE /products/:id**: Eliminar un producto.

## Base de Datos

El proyecto utiliza MySQL con las siguientes tablas (definidas en `docs/query.txt`):

### Tabla `users`
- `id` (INT, PRIMARY KEY, AUTO_INCREMENT)
- `name` (VARCHAR(50), NOT NULL)
- `password` (VARCHAR(255), NOT NULL)
- `role` (ENUM('admin', 'user'), DEFAULT 'user')

Usuario de prueba: Admin / 1234 (rol: admin)

### Tabla `products`
- `id` (INT, PRIMARY KEY, AUTO_INCREMENT)
- `sku` (VARCHAR(50), NOT NULL)
- `name` (VARCHAR(100), NOT NULL)
- `brand` (VARCHAR(100))
- `quantity` (INT, DEFAULT 0)
- `price` (DECIMAL(10,2), NOT NULL)
- `isActive` (TINYINT(1), DEFAULT 1)
- `category` (VARCHAR(100))
- `imageUrl` (VARCHAR(255))
- `createdAt` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

## Contribución

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y commitea (`git commit -am 'Agrega nueva funcionalidad'`).
4. Push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto

- **Autor:** Forlan Ordoñez
- **CC:** 1143429216
- **Email:** [tu-email@ejemplo.com] (opcional)

¡Gracias por usar TechNova!
