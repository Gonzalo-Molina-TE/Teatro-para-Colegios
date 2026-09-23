# Teatro Para Colegios (`teatroparacolegios.cl`)

Sitio web institucional y catálogo interactivo de obras de teatro educativo para colegios, escuelas y jardines infantiles de Chile. Desarrollado respetando rigurosamente el **Manual de Marca Oficial de Teatro Para Colegios** e integrando el contenido de obras escolares de `teatroeducativo.cl`.

---

## 🎨 Identidad de Marca y Paleta Cromática Oficial

- **Azul Profundo**: `#002D5A` (confianza, profesionalismo e identidad institucional)
- **Turquesa**: `#00A8A8` (creatividad, frescura y acentos)
- **Naranja**: `#F26A21` (energía, foco de atención y botones principales / CTAs)
- **Gris Claro**: `#B3B3B3` / `#F8FAFC` (equilibrio, fondos limpios y neutralidad)
- **Tipografía**: Google Fonts **Montserrat** (Montserrat Bold para títulos principales, Montserrat Regular/Medium para cuerpos de texto)

---

## 📁 Estructura del Proyecto

```
teatro-para-colegios/
├── index.html                   # Página principal completa, semántica y responsiva
├── README.md                    # Documentación del proyecto y guía de publicación
└── assets/
    ├── css/
    │   └── styles.css           # Estilos personalizados, colores de marca y animaciones
    ├── js/
    │   ├── plays-data.js        # Catálogo completo estructurado con las 20 obras escolares
    │   └── main.js              # Lógica de filtros interactivos, buscador, modal y cotizador
    └── images/
        └── logo.png             # Logotipo corporativo oficial extraído del manual
```

---

## 🚀 Cómo Visualizar el Sitio Web en tu Equipo

No requiere servidores ni configuraciones complejas:
1. Dirígete a la carpeta:  
   `C:\Users\ADMIN\.gemini\antigravity\scratch\teatro-para-colegios`
2. Haz doble clic en el archivo **`index.html`**.
3. Se abrirá inmediatamente en tu navegador web predeterminado (Google Chrome, Edge, Safari, Firefox).

---

## 🎭 Características y Funcionalidades Incluidas

1. **Catálogo Interactivo con 20 Obras Escolares**:
   - Organizado por ciclos educativos: *Educación Parvularia*, *1º a 4º Básico*, *5º a 8º Básico*, *1º a 4º Medio* y *Docentes / Familias*.
   - Buscador en vivo por palabras clave (ej: "bullying", "pantallas", "redes sociales", "ley karin", "inclusión", "autoestima").
   - Fichas técnicas completas en ventana modal con sinopsis, afiche oficial, duración, Objetivos de Aprendizaje Transversales (OAT Mineduc) y guías pedagógicas.
2. **Cotizador Escolar Inteligente**:
   - Diseñado para directores, jefes de UTP, encargados de convivencia escolar y centros de padres.
   - Genera automáticamente un mensaje estructurado y abre **WhatsApp directo (+56 9 5667 2302)** con todos los datos del colegio, nivel, alumnos estimados y modalidad de financiamiento (SEP, PME, Centro de Padres).
3. **Propuesta de Valor & Autonomía Técnica**:
   - Sección explicativa sobre el equipamiento propio (sonido, micrófonos inalámbricos, iluminación y escenografía).
   - Información sobre financiamiento con fondos SEP y PME de la Superintendencia de Educación.
4. **Preguntas Frecuentes (FAQ)**:
   - Acordeón interactivo con respuestas sobre traslados a regiones, capacidad de alumnos, duración y mediación docente.
5. **Botón Flotante de WhatsApp**:
   - Acceso permanente en la esquina inferior derecha para atención inmediata de sostenedores y profesores.

---

## 🌐 Cómo Publicar el Sitio en tu Dominio `teatroparacolegios.cl`

Para subirlo a tu hosting (cPanel, Hostinger, Webhosting.cl, Netlify, Vercel, etc.):
1. Sube todos los archivos y carpetas (`index.html`, `assets/`) a la carpeta raíz de tu hosting (habitualmente `public_html` o `www`).
2. ¡Listo! El sitio web estará disponible de inmediato en `https://teatroparacolegios.cl`.

---

## 📝 Cómo Agregar o Modificar Obras

Para editar textos, agregar nuevas obras o actualizar afiches:
1. Abre el archivo `assets/js/plays-data.js`.
2. Modifica o añade un nuevo objeto con la información de la obra.
3. Guarda el archivo y los cambios se reflejarán instantáneamente en el catálogo.
