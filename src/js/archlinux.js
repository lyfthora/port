document.addEventListener("DOMContentLoaded", () => {
  const contentContainer = document.getElementById("main-content");
  const originalContent = contentContainer.innerHTML;
  const translateButton = document.getElementById("translateBtn");
  if (!translateButton) {
    return;
  }

  translateButton.addEventListener("click", async () => {
    async function translateText(text) {
      console.log("Sending translation request for:", text);
      try {
        const response = await fetch("https://port-b68e.onrender.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: text,
            target_lang: "ES",
          }),
        });

        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);

        const responseText = await response.text();
        console.log("Response text:", responseText);

        if (!response.ok) {
          throw new Error(
            `HTTP error! status: ${response.status}, body: ${responseText}`
          );
        }

        const data = JSON.parse(responseText);
        console.log("Received translation:", data);
        return data.translations[0].text;
      } catch (error) {
        console.error("Error in translateText:", error);
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
