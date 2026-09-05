const lessons = [
  {
    title: "¿Qué es JavaScript y para qué sirve?",
    emoji: "JS",
    time: "8 min",
    description: "Conoce la diferencia entre HTML, CSS y JavaScript y cómo esta tecnología hace que una página web responda al usuario.",
    videoId: "1glVfFxj8a4?start=0",
    objective: "Entender el papel de JavaScript en el desarrollo web y saber cómo se ejecuta en el navegador.",
    resource: {
      title: "MDN: ¿Qué es JavaScript?",
      url: "https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
    },
    challenge: "Abre la consola del navegador y escribe: console.log('¡Hola, JavaScript!');. Luego cambia el texto por tu nombre.",
    checklist: [
      "Diferencia HTML, CSS y JavaScript.",
      "Abre la consola y prueba un mensaje.",
      "Identifica ejemplos reales de interactividad."
    ],
    suggestions: [
      "Mira el video con pausas para repasar cada explicación.",
      "Escribe cada ejemplo manualmente en la consola.",
      "Haz un pequeño resumen en tu cuaderno con tus propias palabras."
    ],
    quiz: ["¿Qué hace JavaScript en una página web?", ["Dar interactividad", "Solo cambiar colores", "Crear carpetas"], 0]
  },
  {
    title: "Variables y tipos de datos",
    emoji: "📦",
    time: "12 min",
    description: "Aprende a guardar información con const y let y a reconocer tipos como texto, número y booleano.",
    videoId: "1glVfFxj8a4?start=3049",
    objective: "Guardar información útil para que tu programa pueda trabajar con datos reales y variables.",
    resource: {
      title: "MDN: Variables (guardando la información)",
      url: "https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables"
    },
    challenge: "Crea las variables nombre, edad y estudiante. Muéstralas en consola con console.log().",
    checklist: [
      "Usa const para valores que no cambian.",
      "Usa let para valores que sí cambian.",
      "Reconoce texto, números y booleanos."
    ],
    suggestions: [
      "Practica cambiando valores y revisa qué sucede.",
      "Crea 5 variables diferentes con nombres claros.",
      "Escribe una explicación corta de cada tipo de dato."
    ],
    resource: {
      title: "Lectura recomendada: tipos de datos en JavaScript",
      url: "https://www.aprendejavascript.dev/clase/introduccion/tipos-de-datos"
    },
    quiz: ["¿Qué palabra usarías para un valor que no cambiará?", ["const", "let", "alert"], 0]
  },
  {
    title: "Operadores y condicionales",
    emoji: "🛣️",
    time: "10 min",
    description: "Entiende cómo comparar valores y tomar decisiones con if, else y operadores lógicos.",
    videoId: "1glVfFxj8a4?start=7260",
    objective: "Hacer que tu programa reaccione según condiciones reales, como una edad o una nota.",
    resource: {
      title: "MDN: Condicionales y control de flujo",
      url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling"
    },
    challenge: "Crea una variable edad y muestra 'Puedes entrar' si es mayor o igual a 18; si no, muestra 'No puedes entrar'.",
    checklist: [
      "Usa operadores de comparación.",
      "Diseña decisiones con if/else.",
      "Prueba varios valores para validar la lógica."
    ],
    suggestions: [
      "Prueba con edades 12, 18 y 25.",
      "Haz un mini sistema para aprobar una nota.",
      "Compara cómo cambia la lógica con >, < y ===."
    ],
    quiz: ["¿Qué usamos para ejecutar código solo si se cumple una condición?", ["if", "for", "const"], 0]
  },
  {
    title: "Bucles y repeticiones",
    emoji: "🔁",
    time: "13 min",
    description: "Repite acciones muchas veces sin escribir el mismo código una y otra vez usando for y while.",
    videoId: "1glVfFxj8a4?start=7800",
    objective: "Automatizar tareas repetitivas y recorrer listas de información de forma ordenada.",
    resource: {
      title: "MDN: Bucles e iteración",
      url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration"
    },
    challenge: "Haz un bucle for que muestre del 1 al 10 en consola y luego suma esos números.",
    checklist: [
      "Comprende la estructura de un for.",
      "Identifica cuándo conviene repetir código.",
      "Ejecuta el bucle con distintos valores."
    ],
    suggestions: [
      "Haz un contador del 0 al 20.",
      "Crea un ciclo para recorrer nombres de compañeros.",
      "Intenta hacer una tabla de multiplicar."
    ],
    quiz: ["¿Para qué sirve un bucle?", ["Repetir acciones", "Guardar colores", "Crear archivos"], 0]
  },
  {
    title: "Funciones reutilizables",
    emoji: "🧩",
    time: "14 min",
    description: "Organiza tu código en funciones para reutilizar lógica y hacerlo más limpio y ordenado.",
    videoId: "1glVfFxj8a4?start=8400",
    objective: "Crear bloques de código reutilizables que reciban parámetros y retornen resultados.",
    resource: {
      title: "MDN: Funciones en JavaScript",
      url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions"
    },
    challenge: "Crea una función saludar(nombre) que retorne 'Hola, nombre, bienvenido a JavaScript'.",
    checklist: [
      "Define funciones con nombres claros.",
      "Usa parámetros para recibir datos.",
      "Prueba ejecutar la función con varios nombres."
    ],
    suggestions: [
      "Haz funciones para sumar, restar y saludar.",
      "Crea una función que calcule el promedio.",
      "Escribe una función de 3 líneas y luego explícalas en voz alta."
    ],
    quiz: ["Una función sirve para...", ["Reutilizar instrucciones", "Guardar estilos CSS", "Borrar el navegador"], 0]
  },
  {
    title: "Arrays y objetos",
    emoji: "🎒",
    time: "16 min",
    description: "Aprende a guardar colecciones de datos con arrays y a representar entidades reales con objetos.",
    videoId: "1glVfFxj8a4?start=8700",
    objective: "Organizar información y representar entidades como estudiantes, productos o usuarios.",
    resource: {
      title: "MDN: Trabajar con objetos",
      url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects"
    },
    challenge: "Crea un array llamado frutas con tres frutas y luego imprime la segunda. Después crea un objeto con nombre y edad.",
    checklist: [
      "Reconoce la diferencia entre array y objeto.",
      "Accede a elementos por índice.",
      "Crea un objeto con propiedades útiles."
    ],
    suggestions: [
      "Haz una lista de tus cursos favoritos.",
      "Crea un objeto para un estudiante con nombre, edad y ciudad.",
      "Prueba obtener una propiedad específica con punto o corchetes."
    ],
    quiz: ["¿Con qué símbolos se crea un array?", ["[ ]", "{ }", "( )"], 0]
  },
  {
    title: "DOM y eventos",
    emoji: "🖱️",
    time: "15 min",
    description: "Conecta JavaScript con la página para responder a clics, entradas y cambios de contenido.",
    videoId: "1glVfFxj8a4?start=9600",
    objective: "Seleccionar elementos HTML y escuchar eventos para crear páginas dinámicas.",
    resource: {
      title: "MDN: Introducción al DOM",
      url: "https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction"
    },
    challenge: "Crea un botón en HTML y con JavaScript cambia el texto de un párrafo al hacer clic.",
    checklist: [
      "Selecciona elementos con document.querySelector.",
      "Usa addEventListener para escuchar eventos.",
      "Modifica contenido dinámicamente."
    ],
    suggestions: [
      "Haz un botón que cambie el color de fondo.",
      "Crea un formulario sencillo de saludo.",
      "Practica con dos botones y dos mensajes distintos."
    ],
    quiz: ["¿Qué hace el DOM?", ["Representa la estructura de la página", "Borra la consola", "Crea archivos nuevos"], 0]
  },
  {
    title: "LocalStorage y guardado de datos",
    emoji: "💾",
    time: "12 min",
    description: "Guarda información en el navegador para que persista aunque recargues la página.",
    videoId: "1glVfFxj8a4?start=10200",
    objective: "Guardar preferencia del usuario o datos sencillos para reutilizar más adelante.",
    resource: {
      title: "MDN: localStorage",
      url: "https://developer.mozilla.org/es/docs/Web/API/Window/localStorage"
    },
    challenge: "Guarda en localStorage un nombre y luego muéstralo al recargar la página.",
    checklist: [
      "Usa localStorage.setItem.",
      "Lee información con getItem.",
      "Comprende cómo se guarda texto en el navegador."
    ],
    suggestions: [
      "Guarda el nombre de un usuario.",
      "Guarda la última nota o color favorito.",
      "Prueba borrar el dato con removeItem."
    ],
    quiz: ["¿Qué guarda localStorage?", ["Datos en el navegador", "Imágenes de la red", "Solo texto estático"], 0]
  },
  {
    title: "Proyecto final: mini app interactiva",
    emoji: "🚀",
    time: "18 min",
    description: "Aplica todo lo aprendido para crear una app pequeña con lista, formulario y mensaje de bienvenida.",
    videoId: "1glVfFxj8a4?start=10800",
    objective: "Integrar variables, funciones, DOM, arrays y eventos en una mini aplicación funcional.",
    resource: {
      title: "freeCodeCamp: Algoritmos y estructuras de datos",
      url: "https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/"
    },
    challenge: "Crea una mini app donde el usuario escriba su nombre y aparezca un saludo en pantalla; además, muestre una lista de tareas.",
    checklist: [
      "Diseña la interfaz de una forma simple.",
      "Usa eventos para agregar tareas o saludo.",
      "Revisa cada parte del código y corrige errores."
    ],
    suggestions: [
      "Haz una lista de tareas con botón para agregar.",
      "Guarda la lista con localStorage.",
      "Añade un contador de tareas completadas."
    ],
    quiz: ["¿Qué te ayuda a crear una app funcional desde cero?", ["Integrar varias bases de JavaScript", "Solo usar CSS", "Guardar solo imágenes"], 0]
  }
];

const studyChecklist = [
  "1. Mira el video sin apurarte.",
  "2. Escribe el ejemplo en tu editor.",
  "3. Haz el reto sin mirar la solución.",
  "4. Repite el ejercicio con tus propios datos.",
  "5. Practica 20 minutos al día para consolidar."
];

const codeExamples = [
  "console.log('¡Hola, JavaScript!');",
  "const nombre = 'Ana';\nconst edad = 20;\nconsole.log(nombre, edad);",
  "const edad = 18;\nif (edad >= 18) {\n  console.log('Puedes entrar');\n} else {\n  console.log('Aún no puedes entrar');\n}",
  "let suma = 0;\nfor (let i = 1; i <= 10; i++) {\n  suma += i;\n  console.log('Sumando:', i);\n}\nconsole.log('Total del 1 al 10:', suma);",
  "function saludar(nombre) {\n  return `Hola, ${nombre}`;\n}\n\nconsole.log(saludar('Sofía'));\nconsole.log(saludar('Martín'));",
  "const frutas = ['manzana', 'pera', 'uva'];\nconsole.log('Segunda fruta:', frutas[1]);\n\nconst persona = {\n  nombre: 'Ana',\n  edad: 20,\n  ciudad: 'Quito'\n};\nconsole.log(persona.nombre + ' tiene ' + persona.edad + ' años.');",
  "const titulo = document.createElement('h2');\ntitulo.textContent = '¡Hola desde JavaScript!';\ndocument.body.appendChild(titulo);\n\nconst parrafo = document.createElement('p');\nparrafo.textContent = 'Este párrafo lo creó el código.';\ndocument.body.appendChild(parrafo);\n\nconsole.log('Párrafos en la página:', document.querySelectorAll('p').length);",
  "try {\n  localStorage.setItem('nombre', 'Ana');\n  console.log('Guardado:', localStorage.getItem('nombre'));\n} catch (error) {\n  console.log('Este entorno de prueba bloquea localStorage. Pruébalo en la consola de tu navegador (tecla F12): usa setItem y getItem.');\n}",
  "const tareas = [];\n\nfunction agregarTarea(nombre) {\n  tareas.push(nombre);\n  console.log('Tarea agregada:', nombre);\n}\n\nfunction mostrarTareas() {\n  return tareas;\n}\n\nagregarTarea('Estudiar JavaScript');\nagregarTarea('Practicar el reto');\nconsole.log('Tus tareas:', mostrarTareas());"
];

let currentLesson = 0;
let completed = JSON.parse(localStorage.getItem("guia-js-completadas")) || [];
const $ = selector => document.querySelector(selector);

function renderList() {
  $("#lessonList").innerHTML = lessons
    .map((l, i) => `
      <button class="lesson-item ${i === currentLesson ? "active" : ""} ${completed.includes(i) ? "done" : ""}" data-index="${i}">
        <span class="check">${completed.includes(i) ? "✓" : l.emoji}</span>
        <span>
          <strong>${i + 1}. ${l.title}</strong>
          <small>${completed.includes(i) ? "Completada" : l.time}</small>
        </span>
      </button>
    `)
    .join("");
}

function renderQuiz(l) {
  $("#quizQuestion").textContent = l.quiz[0];
  $("#quizOptions").innerHTML = l.quiz[1].map((x, i) => `<button class="quiz-option" data-answer="${i}">${x}</button>`).join("");
  $("#quizFeedback").textContent = "";
}

function renderLesson() {
  const l = lessons[currentLesson];
  const done = completed.includes(currentLesson);
  const percent = Math.round((completed.length / lessons.length) * 100);

  $("#lessonNumber").textContent = `LECCIÓN ${currentLesson + 1} DE ${lessons.length}`;
  $("#lessonTitle").textContent = l.title;
  $("#lessonEmoji").textContent = l.emoji;
  $("#lessonEmoji").classList.toggle("js-logo", l.emoji === "JS");
  $("#lessonTime").textContent = l.time;
  $("#lessonDescription").textContent = l.description;
  $("#lessonVideo").src = `https://www.youtube-nocookie.com/embed/${l.videoId}`;
  const resource = $("#articleResource");
  resource.hidden = !l.resource;
  if (l.resource) {
    resource.href = l.resource.url;
    resource.textContent = `📚 ${l.resource.title} →`;
  }
  $("#challengeTitle").textContent = `Pon en práctica: ${l.title}`;
  $("#challengeText").textContent = l.challenge;
  $("#completeButton").textContent = done ? "Lección completada ✓" : "Marcar como completada ✓";
  $("#completeButton").classList.toggle("completed", done);
  $("#previousButton").disabled = currentLesson === 0;
  $("#nextButton").disabled = currentLesson === lessons.length - 1;
  $("#progressText").textContent = `${completed.length} de ${lessons.length} lecciones completadas`;
  $("#progressPercent").textContent = `${percent}%`;
  $("#progressBar").style.width = `${percent}%`;
  $("#streakNumber").textContent = completed.length;
  const messages = [
    `Solo enfócate en esta lección: ${l.time} de avance real.`,
    "Buen inicio. No necesitas saberlo todo hoy; sigue practicando.",
    "Ya tienes impulso. Un reto pequeño hoy vale mucho.",
    "Vas construyendo una habilidad real, paso a paso.",
    "Excelente constancia. Termina a tu ritmo y celebra el avance."
  ];
  $("#focusMessage").textContent = messages[Math.min(completed.length, messages.length - 1)];
  $("#lessonObjective").textContent = l.objective;
  $("#lessonChecklist").innerHTML = l.checklist.map(item => `<li>${item}</li>`).join("");
  $("#lessonSuggestions").innerHTML = l.suggestions.map(item => `<li>${item}</li>`).join("");
  $("#studyChecklist").innerHTML = studyChecklist.map(item => `<li>${item}</li>`).join("");
  $("#codeEditor").value = codeExamples[currentLesson] || "console.log('Estoy practicando JavaScript');";
  $("#codeOutput").textContent = "La consola aparecerá aquí.";

  renderQuiz(l);
}

function goTo(i) {
  currentLesson = i;
  renderList();
  renderLesson();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("#lessonList").addEventListener("click", e => {
  const b = e.target.closest("[data-index]");
  if (b) goTo(+b.dataset.index);
});

$("#previousButton").onclick = () => goTo(currentLesson - 1);
$("#nextButton").onclick = () => goTo(currentLesson + 1);

$("#completeButton").onclick = () => {
  completed = completed.includes(currentLesson)
    ? completed.filter(i => i !== currentLesson)
    : [...completed, currentLesson];

  localStorage.setItem("guia-js-completadas", JSON.stringify(completed));
  renderList();
  renderLesson();

  if (completed.length === lessons.length) {
    $("#celebration").classList.add("show");
  }
};

$("#quizOptions").addEventListener("click", e => {
  const b = e.target.closest("[data-answer]");
  if (!b) return;

  const ok = +b.dataset.answer === lessons[currentLesson].quiz[2];
  document.querySelectorAll(".quiz-option").forEach(x => x.disabled = true);
  b.classList.add(ok ? "correct" : "wrong");
  $("#quizFeedback").textContent = ok
    ? "¡Correcto! Vas muy bien. ✨"
    : "Casi. Revisa el video y vuelve a intentarlo.";
});

$("#resetButton").onclick = () => {
  completed = [];
  localStorage.removeItem("guia-js-completadas");
  $("#celebration").classList.remove("show");
  renderList();
  renderLesson();
};

$("#themeButton").onclick = () => document.body.classList.toggle("sunset");

function runCode() {
  const code = $("#codeEditor").value;
  const safeCode = code.replace(/<\/script/gi, "<\\/script");
  $("#codeOutput").textContent = "Ejecutando...";
  $("#codeSandbox").srcdoc = `<!doctype html><body><script>
    const send = (kind, value) => parent.postMessage({ source: 'impulso-js', kind, value }, '*');
    const format = value => { try { return typeof value === 'object' ? JSON.stringify(value) : String(value); } catch { return String(value); } };
    console.log = (...values) => send('log', values.map(format).join(' '));
    try {
      const result = eval(${JSON.stringify(safeCode)});
      if (result !== undefined) send('result', format(result));
    } catch (error) { send('error', error.name + ': ' + error.message); }
  <\/script></body>`;
}

$("#runCodeButton").onclick = runCode;
$("#resetCodeButton").onclick = () => {
  $("#codeEditor").value = codeExamples[currentLesson] || "console.log('Estoy practicando JavaScript');";
  $("#codeOutput").textContent = "Ejemplo restaurado. Ahora ejecútalo.";
};

window.addEventListener("message", event => {
  if (event.source !== $("#codeSandbox").contentWindow || event.data?.source !== "impulso-js") return;
  const output = $("#codeOutput");
  const line = event.data.kind === "error" ? `Error: ${event.data.value}` : event.data.value;
  output.textContent = output.textContent === "Ejecutando..." ? line : `${output.textContent}\n${line}`;
  output.classList.toggle("has-error", event.data.kind === "error");
});

renderList();
renderLesson();
