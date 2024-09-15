let isSpanish = false;
let originalContent;
document.addEventListener("DOMContentLoaded", () => {
  const contentContainer = document.getElementById("main-content");
  originalContent = contentContainer.innerHTML;

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      contentContainer.innerHTML = originalContent;
      contentContainer.classList.remove("hidden");
    }
  });

  document
    .querySelectorAll("#experience .ui-list div")
    .forEach((item, index) => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("experience-id");
        updateContent("experience", id);
        updateIndices(index + 1, 1, 1, 5, 1, 6);
      });
    });

  document
    .querySelectorAll("#projects .ui-list > div")
    .forEach((item, index) => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("project-id");
        updateContent("project", id);
        updateIndices(1, 1, index + 1, 5, 1, 6);
      });
    });

  document.querySelectorAll("#skills .ui-list > div").forEach((item, index) => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("skills-id");
      updateContent("skills", id);
      updateIndices(1, 1, 1, 5, index + 1, 6);
    });
  });

  async function loadContent(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  }

  async function updateContent(type, id) {
    const currentContentInfo = isSpanish ? contentInfoES : contentInfo;
    if (currentContentInfo[type] && currentContentInfo[type][id]) {
      const content = await loadContent(currentContentInfo[type][id]);
      contentContainer.innerHTML = content;
    }
  }

  contentContainer.classList.remove("hidden");

  const translateBtn = document.getElementById("translateBtn");
  translateBtn.addEventListener("click", async () => {
    isSpanish = !isSpanish;
    if (isSpanish) {
      await translateContent();
    } else {
      restoreOriginalContent();
    }
    updateButtonText();
  });
});

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

async function translateContent() {
  const contentContainer = document.getElementById("main-content");
  const currentContent = contentContainer.innerHTML;

  // que contenido esta actualmente mostrandose
  let currentType, currentId;
  const currentContentInfo = contentInfoES; // Siempre usamos contentInfoES para traducir a español
  for (const [type, contents] of Object.entries(currentContentInfo)) {
    for (const [id, url] of Object.entries(contents)) {
      if (currentContent.includes(url)) {
        currentType = type;
        currentId = id;
        break;
      }
    }
    if (currentType) break;
  }

  if (currentType && currentId) {
    // Si se encuentra contenido actual, carga la versión traducida
    await updateContent(currentType, currentId);
  } else {
    // Si no se encuentra contenido específico, traduce el contenido general
    translateGeneralContent();
  }

  // Actualizar los índices
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
    "Hi, I'm": "Hola, soy ",
    A: "Un",
    "Front-end": "desarrollador",
    developer: "asdassd",
    "Another great passion of mine is back-end development, where I like to learn about designing and optimizing server-side logic that supports those front-end features.":
      "Otra gran pasión mía es el desarrollo back-end, donde me gusta aprender sobre el diseño y la optimización de la lógica del lado del servidor que soporta esas características del front-end.",
    "I'm a passionate developer, always looking for new challenges and opportunities to learn.":
      "Soy un apasionado desarrollador, siempre buscando nuevos desafíos y oportunidades para aprender.",
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
  };

  document.querySelectorAll("p, span, a, h1, h2").forEach((element) => {
    if (
      element.childNodes.length === 1 &&
      element.childNodes[0].nodeType === Node.TEXT_NODE
    ) {
      translateElement(element, translations);
    } else {
      element.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          translateElement(node, translations);
        } else if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.tagName === "SPAN"
        ) {
          node.insertAdjacentText("beforebegin", " ");
          node.insertAdjacentText("afterend", " ");
        } else if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.tagName === "A"
        ) {
          node.insertAdjacentText("beforebegin", " ");
        }
      });
    }
  });
}

function translateElement(element, translations) {
  const text = element.textContent.trim();
  const translationEntry = Object.entries(translations).find(
    ([key, value]) =>
      key.replace(/^"|"$/g, "").toLowerCase() === text.toLowerCase()
  );

  if (translationEntry) {
    element.textContent = translationEntry[1];
  }
}

function restoreOriginalContent() {
  const contentContainer = document.getElementById("main-content");
  contentContainer.innerHTML = originalContent;
  updateAllIndices();
}

function updateButtonText() {
  const translateBtn = document.getElementById("translateBtn");
  translateBtn.innerHTML = `<span class="text-orange" style="cursor: pointer;">"${
    isSpanish ? "EN" : "ES"
  }"</span>`;
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
