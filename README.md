# Mi blog personal con Astro Y TailwindCSS

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Este es un proyecto personal que tenia en mente hace un tiempo, soy muy dado a querer explicar mi proceso de aprendizaje, si bien hoy en dia el mundo ha dado muchas alternativas accesibles, como programador queria buscar una forma con la que me sintiense realmente comodo, pudiendo construir realmente lo que tengo en mente, en eso Astro si bien ya tiene unos años sonando fue una opcion nueva para mi, me senti comodo en todo el proceso de aprendizaje, muy intuitivo y moldeable en la forma en que se trabaja con Astro ademas de poseer muchas integraciones para diferentes plataformas y frameworks lo cual hace que el trabajo sea mas sencillo.

## 🌟 Características Principales Agregadas a mi Blog:

### 🌑 Modo Oscuro Inteligente:
- Implementado con **Tailwind CSS v4** y estrategia de clase.
- Sistema de prevención de "flickering" (parpadeo blanco) mediante scripts inline optimizados.
- Persistencia de preferencia de usuario en `localStorage`.

Fue algo que es implementado como un estandar para darle mas comodidad al lector ya que si es un blog quiero poder retener la atencion del lector lo mas posible, por eso es necesario y con TailwindCSS es muy sencillo de realizar

### 📚 Arquitectura de Contenidos
- **Blog Engine:** Sistema de gestión de artículos basado en Markdown con validación de esquemas mediante **Zod**.
- **Categorías Dinámicas:** Sistema de filtrado automático con badges de colores condicionales según la temática.
- **Portafolio de Ingeniería:** Sección dedicada a proyectos con enfoque en *Case Studies*, destacando arquitectura, stack tecnológico y resolución de problemas.

Queria una forma de organizar mi post en el blog para que sea mas accesible al usuario buscar si quiere leer sobre algun tema en especifico ya que ademas de desarrollo web planeo publicar mis experiencias en otros campos como el pixel art, el game dev, mi proceso de aprendizaje y la publicacion de mis proyectos profesionales.

### 🎨 UI/UX Moderna
- **Responsive Grid:** Diseño de cuadrícula adaptable para tarjetas de proyectos.
- **Tailwind Typography:** Estilizado automático de contenido técnico y bloques de código.
- **Componente "Sobre Mí":** Sección integrada con identidad visual y enlaces sociales.

Para adentrarme mas a los estandares busque crear una interfaz que fuese simple y comoda, algo que te guie bien por todo el contenido y que priorise la comodidad del lector por encima de la extravagancia visual ya que no me gustan los temas sobrecargados que te avientan un monton de informacion lo cual termina siendo mas dificil de procesar.

## 🛠️ Stack Tecnológico

- **Framework:** [Astro 5.x](https://astro.build/) (Static Site Generation - SSG).
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) con plugins de tipografía.
- **Validación:** Zod para la integridad de datos en el Frontmatter.

## 📂 Estructura del Proyecto

```text
├── src/
│   ├── components/       # Componentes modulares (PostCard, About, ThemeIcon)
│   ├── content/          # Donde se aloja la data (Blog y Proyectos)
│   │   ├── blog/         # Artículos en Markdown
│   │   ├── projects/     # Casos de estudio técnicos tambien en Markdown
│   │   └── config.ts     # Esquemas de validación (Zod)
│   └── pages/            # Rutas dinámicas y estáticas
├── tailwind.config.mjs   # Configuración de diseño (DarkMode, etc.)
└── astro.config.mjs      # Integraciones de Astro & Vite