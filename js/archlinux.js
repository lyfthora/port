document.addEventListener("DOMContentLoaded", () => {
  const contentContainer = document.getElementById("main-content");
  const originalContent = contentContainer.innerHTML;

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
    experience1: "/../data/experience/experience1.html",
  },
  project: {
    project1: "/../data/project/project1.html",
    project2: "/../data/project/project2.html",
    project3: "/../data/project/project3.html",
    project4: "/../data/project/project4.html",
    project5: "/../data/project/project5.html",
  },
  skills: {
    skills1: "../data/skills-tools/html.html",
    skills2: "../data/skills-tools/css.html",
    skills3: "../data/skills-tools/javascript.html",
    skills4: "../data/skills-tools/php.html",
    skills5: "../data/skills-tools/python.html",
    skills6: "../data/skills-tools/react.html",
  },
};
