document.addEventListener("DOMContentLoaded", () => {
  const contentContainer = document.getElementById("main-content");
  const originalContent = contentContainer.innerHTML;
  const translateButton = document.getElementById("translateBtn");
  if (!translateButton) {
    return;
  }

  translateButton.addEventListener("click", async () => {
    const targetLanguage = "ES";

    async function translateText(text) {
      try {
        const response = await fetch(
          "https://api-free.deepl.com/v2/translate",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              auth_key: apiKey,
              text: text,
              target_lang: targetLanguage,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(
            `Error en la solicitud de traducción: ${response.statusText}`
          );
        }

        const data = await response.json();
        return data.translations[0].text;
      } catch (error) {
        console.error("Error en la función translateText:", error);
        throw error;
      }
    }

    async function translateContent() {
      const elements = contentContainer.querySelectorAll("p");

      for (const element of elements) {
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

        // Obtener traducciones en paralelo
        const translations = await Promise.all(
          textsToTranslate.map((text) => translateText(text))
        );

        let translationIndex = 0;

        function replaceTextNodes(node) {
          if (node.nodeType === Node.TEXT_NODE) {
            if (translationIndex < translations.length) {
              node.nodeValue = translations[translationIndex];
              translationIndex++;
            }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === "SPAN") {
              node.insertAdjacentText("beforebegin", " ");
              node.insertAdjacentText("afterend", " ");
            } else if (node.tagName === "A") {
              node.insertAdjacentText("beforebegin", " ");
            }
            Array.from(node.childNodes).forEach(replaceTextNodes);
          }
        }

        replaceTextNodes(div);
        element.innerHTML = div.innerHTML;
      }
    }

    await translateContent();
  });
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
  async function loadContent(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  }
  async function updateContent(type, id) {
    if (contentInfo[type] && contentInfo[type][id]) {
      const content = await loadContent(contentInfo[type][id]);
      contentContainer.innerHTML = content;
    }
  }
  contentContainer.classList.remove("hidden");
});
const contentInfo = {
  experience: { experience1: "./data/experience/experience1.html" },
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
