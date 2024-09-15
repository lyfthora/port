let isSpanish = false;
const originalContent = {};

document.addEventListener("DOMContentLoaded", () => {
  // Guardar el contenido original de cada sección
  ["main-content", "experience", "projects", "skills"].forEach((id) => {
    const element = document.getElementById(id);
    if (element) originalContent[id] = element.innerHTML;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.getElementById("main-content").innerHTML =
        originalContent["main-content"];
    }
  });

  const translateBtn = document.getElementById("translateBtn");
  translateBtn.addEventListener("click", handleTranslation);

  assignEventListeners();
});

function handleTranslation() {
  console.log("Botón clickeado");
  isSpanish = !isSpanish;
  console.log("isSpanish:", isSpanish);

  if (isSpanish) {
    console.log("Traduciendo al español");
    translateContent();
  } else {
    console.log("Restaurando al inglés");
    restoreOriginalContent();
  }

  updateButtonText();
  assignEventListeners();
  console.log("Traducción completada");
}

function translateContent() {
  translateGeneralContent();
  updateAllIndices();
}

function restoreOriginalContent() {
  ["main-content", "experience", "projects", "skills"].forEach((id) => {
    const element = document.getElementById(id);
    if (element) element.innerHTML = originalContent[id];
  });
  updateAllIndices();
}

function translateGeneralContent() {
  const translations = {
    Home: "Inicio",
    Experience: "Experiencia",
    Projects: "Proyectos",
    "Skills - Tools": "Habilidades - Herramientas",
    "Hello! I'm": "¡Hola! Soy",
    "a passionate Front-End developer from Spain :)":
      "un apasionado desarrollador Front-End de España :)",
    "Another great passion of mine is back-end development, where I like to learn about designing and optimizing server-side logic that supports those front-end features.":
      "Otra gran pasión mía es el desarrollo back-end, donde me gusta aprender sobre el diseño y la optimización de la lógica del lado del servidor que respalda esas características del front-end.",
    "I'm a passionate developer, always looking for new challenges and opportunities to learn.":
      "Soy un desarrollador apasionado, siempre buscando nuevos desafíos y oportunidades para aprender.",
    "Nowadays, you can find me on": "Actualmente, puedes encontrarme en",
    "You can always check out my work on": "Siempre puedes ver mi trabajo en",
    "You can find my resumé over here =>":
      "Puedes encontrar mi currículum aquí =>",
    resumé: "currículum",
    Press: "Presiona",
    "to return to main section": "para volver a la sección principal",
    Click: "Haz clic en",
    "if you want translate all content":
      "si quieres traducir todo el contenido",
    // Añade más traducciones según sea necesario
  };

  document.querySelectorAll("p, span, a, h1, h2, div").forEach((element) => {
    if (
      element.childNodes.length === 1 &&
      element.childNodes[0].nodeType === Node.TEXT_NODE
    ) {
      translateElement(element, translations);
    } else {
      element.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          translateElement(node, translations);
        }
      });
    }
  });
}

function translateElement(element, translations) {
  const text = element.textContent.trim();
  const translation = translations[text];
  if (translation) {
    element.textContent = translation;
  }
}

function updateButtonText() {
  const translateBtn = document.getElementById("translateBtn");
  if (translateBtn) {
    translateBtn.innerHTML = `<span class="text-orange" style="cursor: pointer;">"${
      isSpanish ? "EN" : "ES"
    }"</span>`;
  }
}

function updateIndices(
  expCurrent,
  expTotal,
  projCurrent,
  projTotal,
  skillsCurrent,
  skillsTotal
) {
  const experienceIndex = document.querySelector("#experience .list-index p");
  const projectsIndex = document.querySelector("#projects .list-index p");
  const skillsIndex = document.querySelector("#skills-index p");

  if (experienceIndex)
    experienceIndex.textContent = `${expCurrent} ${
      isSpanish ? "de" : "of"
    } ${expTotal}`;
  if (projectsIndex)
    projectsIndex.textContent = `${projCurrent} ${
      isSpanish ? "de" : "of"
    } ${projTotal}`;
  if (skillsIndex)
    skillsIndex.textContent = `${skillsCurrent} ${
      isSpanish ? "de" : "of"
    } ${skillsTotal}`;
}

function updateAllIndices() {
  updateIndices(1, 1, 1, 5, 1, 6);
}

function assignEventListeners() {
  ["experience", "projects", "skills"].forEach((section) => {
    document
      .querySelectorAll(`#${section} .ui-list > div`)
      .forEach((item, index) => {
        item.removeEventListener("click", item.clickHandler);
        item.clickHandler = () => {
          const id = item.getAttribute(`${section.slice(0, -1)}-id`);
          if (id) {
            updateContent(section.slice(0, -1), id);
            updateIndices(
              section === "experience" ? index + 1 : 1,
              section === "experience" ? 1 : 5,
              section === "projects" ? index + 1 : 1,
              5,
              section === "skills" ? index + 1 : 1,
              6
            );
          } else {
            console.warn(
              `Atributo ${section.slice(0, -1)}-id no encontrado en:`,
              item
            );
          }
        };
        item.addEventListener("click", item.clickHandler);
      });
  });
}

async function updateContent(type, id) {
  console.log(`Iniciando actualización de contenido: ${type}, ${id}`);
  const url = isSpanish ? contentInfoES[type][id] : contentInfo[type][id];
  if (url) {
    try {
      const content = await loadContent(url);
      const contentContainer = document.getElementById("main-content");
      if (contentContainer) {
        contentContainer.innerHTML = content;
        contentContainer.classList.remove("hidden");
        console.log(`Contenido actualizado: ${type}, ${id}`);
        if (isSpanish) translateGeneralContent();
        assignEventListeners();
      } else {
        console.error("Contenedor de contenido no encontrado");
      }
    } catch (error) {
      console.error(`Error al cargar el contenido: ${error}`);
    }
  } else {
    console.warn(`URL no encontrada para tipo: ${type}, id: ${id}`);
  }
}

async function loadContent(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.text();
}

const contentInfo = {
  experience: { experience1: "src/data/experience/experience1.html" },
  project: {
    project1: "src/data/project/project1.html",
    project2: "src/data/project/project2.html",
    project3: "src/data/project/project3.html",
    project4: "src/data/project/project4.html",
    project5: "src/data/project/project5.html",
  },
  skills: {
    skills1: "src/data/skills-tools/html.html",
    skills2: "src/data/skills-tools/css.html",
    skills3: "src/data/skills-tools/javascript.html",
    skills4: "src/data/skills-tools/php.html",
    skills5: "src/data/skills-tools/python.html",
    skills6: "src/data/skills-tools/react.html",
  },
};

const contentInfoES = {
  experience: { experience1: "src/data_ES/experiencia/experiencia1.html" },
  project: {
    project1: "src/data_ES/proyectos/proyecto1.html",
    project2: "src/data_ES/proyectos/proyecto2.html",
    project3: "src/data_ES/proyectos/proyecto3.html",
    project4: "src/data_ES/proyectos/proyecto4.html",
    project5: "src/data_ES/proyectos/proyecto5.html",
  },
  skills: {
    skills1: "src/data_ES/habilidades/html.html",
    skills2: "src/data_ES/habilidades/css.html",
    skills3: "src/data_ES/habilidades/javascript.html",
    skills4: "src/data_ES/habilidades/php.html",
    skills5: "src/data_ES/habilidades/python.html",
    skills6: "src/data_ES/habilidades/react.html",
  },
};
