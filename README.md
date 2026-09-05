# Impulso JS ⚡

Ruta de aprendizaje de **JavaScript desde cero** para principiantes: lecciones en video, laboratorio de código ejecutable, retos prácticos y mini quizzes en español.

Solo abre `index.html` en tu navegador y empieza a aprender. No necesitas instalar nada.

## 🧩 Qué incluye

- **9 lecciones** paso a paso con video en español (Curso completo de JavaScript, de freeCodeCamp en español).
- **Laboratorio JS**: editor donde escribes y ejecutas tu propio código en un entorno aislado.
- **Retos prácticos** al final de cada lección para aplicar lo aprendido.
- **Mini quiz** por lección para reforzar conceptos.
- **Objetivos y sugerencias de estudio** por tema.
- **Progreso guardado** automáticamente en tu navegador (localStorage).
- **Modo claro / oscuro** con un botón en la cabecera.
- **Celebración** al completar toda la ruta. 🏆

## 📚 Temario

1. ¿Qué es JavaScript y para qué sirve?
2. Variables y tipos de datos
3. Operadores y condicionales
4. Bucles y repeticiones
5. Funciones reutilizables
6. Arrays y objetos
7. DOM y eventos
8. LocalStorage y guardado de datos
9. Proyecto final: mini app interactiva

## 🚀 Cómo usarla

1. Descarga o clona el repositorio.
2. Abre `index.html` con doble clic (o desde tu editor con "Open with Live Server").
3. Sigue la ruta: mira el video, escribe el ejemplo, resuelve el reto y responde el quiz.

```bash
git clone https://github.com/joseluisgutierrezestudiante/JavaAprendizaje.git
cd JavaAprendizaje
# abre index.html en tu navegador
```

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 (variables, layout con grid, temas claro/oscuro)
- JavaScript puro (vanilla), sin dependencias externas

## 📁 Estructura

```
JavaAprendizaje/
├── index.html   # Estructura de la página
├── styles.css   # Estilos y temas
├── app.js       # Lógica: lecciones, quizzes, sandbox y progreso
└── README.md
```

## ✍️ Personalizar

Todo el contenido se edita desde `app.js`:

- Las **lecciones** viven en el arreglo `lessons` (título, video, reto, quiz, checklist…).
- Los **ejemplos del laboratorio** viven en el arreglo `codeExamples`.
- El **plan de estudio** está en el arreglo `studyChecklist`.

Agrega una lección nueva copiando un bloque del arreglo `lessons` y añadiendo su ejemplo en `codeExamples`.

## 📄 Licencia

Este proyecto es educativo y de uso libre. Los videos embebidos pertenecen a sus autores.