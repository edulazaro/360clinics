# Asociación de Afectados por 360 Clinics

Web de apoyo y recursos para personas afectadas por las prácticas de 360 Clinics.

## Características

- ✅ Diseño moderno y responsive
- ✅ Secciones de apoyo y testimonios
- ✅ Formulario de contacto
- ✅ Enlaces a recursos legales (Claimeet)
- ✅ Integración con grupo de WhatsApp
- ✅ Diseño empático y acogedor
- ✅ SEO optimizado

## Tecnologías

- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos
- **React** - UI Components

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar en producción
npm start
```

## Configuración del Enlace de WhatsApp

⚠️ **IMPORTANTE**: Actualmente el enlace del grupo de WhatsApp está pendiente de configuración.

Para añadir el enlace de WhatsApp, busca y reemplaza todos los `href="#"` con el onClick que muestra la alerta por el enlace real de tu grupo:

### Archivos a modificar:

1. **components/About.tsx** (línea ~62)
2. **components/Contact.tsx** (línea ~75)
3. **components/Footer.tsx** (líneas ~21 y ~94)

### Ejemplo de cambio:

**Antes:**
```tsx
<a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    alert("Por favor, proporciona el enlace del grupo de WhatsApp");
  }}
  className="..."
>
```

**Después:**
```tsx
<a
  href="https://chat.whatsapp.com/TU_ENLACE_DE_GRUPO"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
```

## Estructura del Proyecto

```
360clinics/
├── app/
│   ├── layout.tsx          # Layout principal con SEO
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Navegación
│   ├── Hero.tsx            # Sección principal
│   ├── About.tsx           # Sobre nosotros
│   ├── Testimonials.tsx    # Testimonios
│   ├── Contact.tsx         # Formulario de contacto
│   └── Footer.tsx          # Pie de página
└── public/                 # Archivos estáticos
```

## Personalización

### Colores

Los colores están definidos en `tailwind.config.ts`:

- **primary**: Tonos cálidos naranjas/rojizos para transmitir cercanía
- **warm**: Tonos tierra cálidos para el fondo

### Contenido

Puedes editar el contenido en cada componente:

- **Hero**: Mensaje principal y estadísticas
- **About**: Descripción de la asociación
- **Testimonials**: Testimonios de afectados (array de objetos)
- **Contact**: Formulario y opciones de ayuda

### Testimonios

Para añadir o editar testimonios, modifica el array en `components/Testimonials.tsx`:

```tsx
const testimonials = [
  {
    id: 1,
    name: "Nombre",
    location: "Ciudad",
    text: "Testimonio...",
    date: "Mes Año",
  },
  // Añade más testimonios aquí
];
```

## Despliegue

### Vercel (Recomendado)

1. Push el código a GitHub
2. Importa el repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js
4. Deploy!

### Otras plataformas

- **Netlify**: Compatible con Next.js
- **Railway**: Soporte completo para Next.js
- **Digital Ocean**: App Platform

## Mejoras Futuras

- [ ] Backend para el formulario de contacto
- [ ] Base de datos para testimonios
- [ ] Panel de administración
- [ ] Blog/Noticias
- [ ] Recursos descargables
- [ ] Chat en vivo

## Soporte

Si tienes dudas sobre el código o necesitas ayuda:

1. Revisa la [documentación de Next.js](https://nextjs.org/docs)
2. Consulta la [documentación de Tailwind CSS](https://tailwindcss.com/docs)

## Licencia

Este proyecto es de código abierto y está disponible para uso de la comunidad de afectados.

---

**Nota**: Esta web está diseñada con empatía y cuidado para ayudar a personas en situaciones difíciles. El diseño busca transmitir calidez, apoyo y profesionalismo.
