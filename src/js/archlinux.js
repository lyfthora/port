let isSpanish = false;
const originalTexts = new Map();
let originalContent;
let currentType = null;
let currentId = null;

document.addEventListener("DOMContentLoaded", () => {
  const contentContainer = document.getElementById("main-content");
  originalContent = contentContainer.innerHTML;
  const translateButton = document.getElementById("translateBtn");
  if (!translateButton) {
    return;
  }

  // Guardar los textos originales
  document
    .querySelectorAll(
      ".translatable p, .title p, .list-index p, #home-section-paragraph"
    )
    .forEach((element) => {
      originalTexts.set(element, element.innerHTML);
    });

  translateButton.addEventListener("click", toggleLanguage);

  // document.addEventListener("keydown", (event) => {
  //   if (event.key === "Escape") {
  //     restoreMainContent();
  //   }
  // });

  assignEventListeners();
});

function updateLanguageContent() {
  const translateButton = document.getElementById("translateBtn");

  if (isSpanish) {
    translateContent();
    translateButton.innerHTML = `<span class="text-orange" style="cursor: pointer;">"EN"</span>`;
  } else {
    translateToEnglish();
    translateButton.innerHTML = `<span class="text-orange" style="cursor: pointer;">"ES"</span>`;
  }

  // si el contenido esta cargado, actualizar el contenido
  if (currentType && currentId) {
    updateContent(currentType, currentId);
  }
}

// esc para restaurar el contenido original
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Fade in al cargar la página
  setTimeout(() => {
    body.classList.add("fade-in");
  }, 50);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      body.classList.remove("fade-in");
      body.classList.add("fade-out");

      setTimeout(() => {
        // Recargar la página después del fade out
        window.location.reload();
      }, 500);
    }
  });
});

// restaurar el contenido original
function restoreMainContent() {
  const contentContainer = document.getElementById("main-content");
  contentContainer.innerHTML = originalContent;
  contentContainer.classList.remove("hidden");

  // resetear el contenido actual
  currentType = null;
  currentId = null;
  // actualizar el contenido
  updateLanguageContent();
  // asignar los event listeners
  assignEventListeners();
}

// para cambiar el idioma
function toggleLanguage() {
  isSpanish = !isSpanish;
  updateLanguageContent();
}
// para traducir el contenido
function translateContent() {
  const mainContainer = document.getElementById("main-container");
  translateElement(mainContainer);

  const homeSectionParagraph = document.getElementById(
    "home-section-paragraph"
  );
  if (homeSectionParagraph) {
    homeSectionParagraph.innerHTML = translateToSpanish(
      homeSectionParagraph.innerHTML
    );
  }

  // si el contenido esta cargado, actualizar el contenido
  const currentContent = document.querySelector(".container-content");
  if (currentContent) {
    const type = currentContent.getAttribute("data-content-type");
    const id = currentContent.getAttribute("data-content-id");
    if (type && id) {
      updateContent(type, id);
    }
  }
}

// para traducir el contenido
function translateElement(element) {
  if (element.nodeType === Node.TEXT_NODE) {
    element.nodeValue = translateToSpanish(element.nodeValue);
  } else if (element.nodeType === Node.ELEMENT_NODE) {
    for (let child of element.childNodes) {
      translateElement(child);
    }
    // si el elemento tiene un placeholder, traducir el placeholder
    if (element.hasAttribute("placeholder")) {
      element.setAttribute(
        "placeholder",
        translateToSpanish(element.getAttribute("placeholder"))
      );
    }
  }
}

// para traducir el contenido a ingles
function translateToEnglish() {
  const mainContainer = document.getElementById("main-container");
  translateElementToEnglish(mainContainer);

  const homeSectionParagraph = document.getElementById(
    "home-section-paragraph"
  );

  if (homeSectionParagraph && originalTexts.has(homeSectionParagraph)) {
    homeSectionParagraph.innerHTML = originalTexts.get(homeSectionParagraph);
  }
}

// element
function translateElementToEnglish(element) {
  if (element.nodeType === Node.TEXT_NODE) {
    // No hacemos nada con los nodos de texto
  } else if (element.nodeType === Node.ELEMENT_NODE) {
    for (let child of element.childNodes) {
      translateElementToEnglish(child);
    }
    if (originalTexts.has(element)) {
      element.innerHTML = originalTexts.get(element);
    }
    if (
      element.hasAttribute("placeholder") &&
      originalTexts.has(element.getAttribute("placeholder"))
    ) {
      element.setAttribute(
        "placeholder",
        originalTexts.get(element.getAttribute("placeholder"))
      );
    }
  }
}

function translateToSpanish(text) {
  const translations = {
    "Hello! I'm": "Hola! Soy",
    "Hi, I'm": "Hola, soy",
    // ",": ",",
    ", a passionate Front-End developer from Spain":
      ", un desarrollador Front-End apasionado de España",
    "A Front-end developer.": "Un desarrollador Front-end.",
    "Another great passion": "Otra gran pasión",
    "mine is back-end development, where I like to learn about designing and optimizing server-side logic that supports those front-end features.":
      "lo que me gusta es el desarrollo back-end, donde me gusta aprender sobre el diseño y la optimización de la lógica del servidor que soporta esas características del front-end.",
    "I'm a passionate developer, always looking for new challenges and opportunities to learn.":
      "Soy un desarrollador apasionado, siempre buscando nuevos desafíos y oportunidades para aprender.",
    "Nowadays, you can find me on": "Actualmente, puedes encontrarme en",
    "You can always check out my work on": "Siempre puedes ver mi trabajo en",
    "You can find my resumé over here =>":
      "Puedes encontrar mi currículum aquí =>",
  };
  // toma el texto(translations) y lo remplaza por el texto en español / g = global / i = ignora mayusculas y minusculas
  Object.keys(translations).forEach((key) => {
    const regex = new RegExp(key, "gi");
    text = text.replace(regex, translations[key]);
  });

  return text;
}

async function updateContent(type, id) {
  console.log(`Actualizando contenido: ${type}, ${id}`);
  currentType = type;
  currentId = id;
  const contentInfo = isSpanish ? contentInfoES : contentInfoEN;
  if (contentInfo[type] && contentInfo[type][id]) {
    try {
      const content = await loadContent(contentInfo[type][id]);
      const contentContainer = document.getElementById("main-content");
      if (contentContainer) {
        contentContainer.innerHTML = content;
        const newContainer =
          contentContainer.querySelector(".container-content");
        if (newContainer) {
          newContainer.setAttribute("data-content-type", type);
          newContainer.setAttribute("data-content-id", id);
        }
        console.log(`Contenido actualizado: ${type}, ${id}`);
        if (isSpanish) {
          const elementsToTranslate = contentContainer.querySelectorAll();
          elementsToTranslate.forEach((element) => {
            element.innerHTML = translateToSpanish(element.innerHTML);
          });
        }
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

function assignEventListeners() {
  document
    .querySelectorAll("#experience .ui-list div")
    .forEach((item, index) => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("experience-id");
        updateContent("experience", id);
        const listIndex = document.querySelector("#experience .list-index p");
        listIndex.textContent = `${index + 1} of 1`;
        document.querySelector("#projects .list-index p").textContent =
          "1 of 5";
        document.querySelector("#skills-index p").textContent = "1 of 6";
      });
    });

  document
    .querySelectorAll("#projects .ui-list > div")
    .forEach((item, index) => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("project-id");
        updateContent("project", id);
        const listIndex = document.querySelector("#projects .list-index p");
        listIndex.textContent = `${index + 1} of 5`;
        document.querySelector("#skills-index p").textContent = "1 of 6";
      });
    });

  document.querySelectorAll("#skills .ui-list > div").forEach((item, index) => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("skills-id");
      updateContent("skills", id);
      const skillsIndex = document.querySelector("#skills-index p");
      skillsIndex.textContent = `${index + 1} of 6`;
      document.querySelector("#projects .list-index p").textContent = "1 of 5";
    });
  });
}

const contentInfoEN = {
  experience: { experience1: "src/data/experience/experience1.html" },
  projects: {
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
  projects: {
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
