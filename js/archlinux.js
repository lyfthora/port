document.addEventListener("DOMContentLoaded", () => {
  const contentContainer = document.getElementById("main-content");
  const originalContent = contentContainer.innerHTML;

  const translateButton = document.getElementById("translateBtn");
  if (!translateButton) {
    return;
  }

  translateButton.addEventListener("click", async () => {
    const targetLanguage = "ES"; // Idioma  traducir

    async function translateText(text) {
      // Llama al backend
      const response = await fetch("https://api-free.deepl.com/v2/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          target_lang: targetLanguage,
        }),
      });

      const data = await response.json();
      return data.translations[0].text;
    }

    async function translateContent() {
      const elements = contentContainer.querySelectorAll("p");
      for (const element of elements) {
        // Extraer el HTML del párrafo y traducir el texto visible
        const htmlContent = element.innerHTML;
        const div = document.createElement("div");
        div.innerHTML = htmlContent;

        const textNodes = [];
        const walker = document.createTreeWalker(
          div,
          NodeFilter.SHOW_TEXT,
          null,
          false
        );
        let node;
        while ((node = walker.nextNode())) {
          if (node.nodeValue.trim()) {
            textNodes.push(node);
          }
        }

        const textsToTranslate = textNodes.map((node) => node.nodeValue.trim());
        const translations = await Promise.all(
          textsToTranslate.map((text) => translateText(text))
        );

        // Reemplazar los textos en el HTML con las traducciones, añadiendo espacios alrededor de los <span> y antes del <a>
        let translationIndex = 0;
        function replaceTextNodes(node) {
          if (node.nodeType === Node.TEXT_NODE) {
            if (translationIndex < translations.length) {
              node.nodeValue = translations[translationIndex];
              translationIndex++;
            }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === "SPAN") {
              node.insertAdjacentText("beforebegin", " "); // Agregar espacio antes del <span>
              node.insertAdjacentText("afterend", " "); // Agregar espacio después del </span>
            } else if (node.tagName === "A") {
              node.insertAdjacentText("beforebegin", " "); // Agregar espacio antes del <a>
            }
            Array.from(node.childNodes).forEach(replaceTextNodes);
          }
        }
        replaceTextNodes(div);

        // Reemplazar el contenido del párrafo original con el HTML traducido
        element.innerHTML = div.innerHTML;
      }
    }

    // Traduce el contenido
    await translateContent();
  });

  //volver al contenido original
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      contentContainer.innerHTML = originalContent;
      contentContainer.classList.remove("hidden");
    }
  });

  //experiencia
  document
    .querySelectorAll("#experience .ui-list div")
    .forEach((item, index) => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("experience-id");
        updateContent("experience", id);
        // Actualizar el numero de la experiencia
        const listIndex = document.querySelector("#experience .list-index p");
        listIndex.textContent = `${index + 1} of 1`;

        // reset el index de project/skill
        document.querySelector("#projects .list-index p").textContent =
          "1 of 5";
        document.querySelector("#skills-index p").textContent = "1 of 6";
      });
    });

  //projectos
  document
    .querySelectorAll("#projects .ui-list > div")
    .forEach((item, index) => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("project-id");
        updateContent("project", id);

        // Actualizar el número del proyecto
        const listIndex = document.querySelector("#projects .list-index p");
        listIndex.textContent = `${index + 1} of 5`;

        // reset el index de skill
        document.querySelector("#skills-index p").textContent = "1 of 6";
        // reset el index de experiencia (cuando haya mas)
        //document.querySelector("#experience .list-index p").textContent =
        //  "1 of 1";
      });
    });

  //skills y herramientas
  document.querySelectorAll("#skills .ui-list > div").forEach((item, index) => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("skills-id");
      updateContent("skills", id);

      // Actualizar el número de la habilidad
      const skillsIndex = document.querySelector("#skills-index p");
      skillsIndex.textContent = `${index + 1} of 6`;

      // reset el index de project
      document.querySelector("#projects .list-index p").textContent = "1 of 5";
      // reset el index de experiencia (cuando haya mas)
      //document.querySelector("#experience .list-index p").textContent =
      //  "1 of 1";
    });
  });

  //cargar contenido
  async function loadContent(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  }
  //actualizar contenido
  async function updateContent(type, id) {
    if (contentInfo[type] && contentInfo[type][id]) {
      const content = await loadContent(contentInfo[type][id]);
      contentContainer.innerHTML = content;
    }
  }
  contentContainer.classList.remove("hidden");
});

//info del contenido
const contentInfo = {
  experience: {
    experience1: "./data/experience/experience1.html",
  },
  project: {
    project1: "./data/project/project1.html",
    project2: "./data/project/project2.html",
    project3: "./data/project/project3.html",
    project4: "./data/project/project4.html",
    project5: "./data/project/project5.html",
  },
  skills: {
    skills1: "./data/skills-tools/html.html",
    skills2: "./data/skills-tools/css.html",
    skills3: "./data/skills-tools/javascript.html",
    skills4: "./data/skills-tools/php.html",
    skills5: "./data/skills-tools/python.html",
    skills6: "./data/skills-tools/react.html",
  },
};
