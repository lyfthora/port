document.addEventListener("DOMContentLoaded", () => {
  const contentContainer = document.getElementById("main-content");

  document.querySelectorAll("#experience .ui-list div").forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("experience-id");
      updateContent("experience", id);
    });
  });

  document.querySelectorAll("#projects .ui-list div").forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("project-id");
      updateContent("project", id);
    });
  });

  const contentInfo = {
    experience: {
      experience1: `
              <div class="container-content">
                <div class="outer-paragraph-container">
                  <div class="inner-paragraph-container mt-4">
                    <div>
                      <h1><span class="text-blue">AI Engineer (Python, RAG, BBDD Vectorial)</span></h1>
                      <h2><span class="text-orange">02/04/2024 - 16/06/2024</span></h2>
                      <h2></h2>
                      <div class="technologies-row"></div>
                    </div>
                    <div>We meticulously sculpt <span class="text-orange">bespoke software</span> and conjure <span class="text-blue">hardware wonders</span>, transcending the mundane.</div>
                    <div>In the digital symphony, our craft includes <span class="text-blue">exotic spells and scrolls</span>, weaving enchantment into the very fabric of technology.</div>
                  </div>
                </div>
              </div>
            `,
      experience2: `
              <!-- experience2 -->
            `,
    },
    project: {
      project1: `
              <div class="container-content">
                <div class="outer-paragraph-container">
                  <div class="inner-paragraph-container mt-4">
                    <div>
                      <h1>Lain Web</h1>
                      <h2>[Built in <span class="text-pink">2024</span>]</h2>
                      <div class="technologies-row">
                        <span class="text-blue">HTML</span> CSS <span class="text-blue">JavaScript</span> <span class="text-orange">PHP</span>
                      </div>
                      <div class="buttons-container">
                        <a class="project-button" href="https://github.com/Briarivero/fantazia" target="_blank">Github</a>
                      </div>
                    </div>
                    <div>This website was built in <span class="text-orange">2 weeks</span> using only HTML, CSS, JavaScript and PHP with <span class="text-orange">no other dependencies.</span> 
                    <div>It is also a <span class="text-orange">dinamic website</span> that is <span class="text-blue">completely responsive.</span> 
                    <div>The page was <span class="text-blue">developed</span> somewhat <span class="text-pink">improvisational</span>; ideas came to mind, and I tried to <span class="text-orange">implement</span> them. Initially, it was only meant to be HTML, CSS, and JavaScript. However, while <span class="text-blue">developing</span> it, I decided to incorporate PHP to add more <span class="text-orange">functionality</span>.</div>
                  </div>
                </div>
                <div class="neofetch-gifs">
                  <video class="lainweb" loop autoplay muted>
                  <source src="gifs/lainweb.mp4" type="video/mp4">
                  </video>
                </div>
            </div>
              
            `,
      project2: `
               <div class="container-content">
                <div class="outer-paragraph-container">
                  <div class="inner-paragraph-container mt-4">
                    <div>
                      <h1>ChatBot</h1>
                      <h2>[Built in <span class="text-pink">2024</span>]</h2>
                      <div class="technologies-row">
                        <span class="text-blue">HTML</span> CSS <span class="text-pink">JavaScript</span> <span class="text-orange">Vue.js</span>
                      </div>
                      <div class="buttons-container">
                        <a class="project-button" href="https://github.com/Briarivero/chatbot" target="_blank">Github</a>
                      </div>
                    </div>
                    <div>The <span class="text-pink">chatbot</span> was created during my <span class="text-orange">internship</span>, as it needed to be a <span class="text-blue">project related</span> to my work in <span class="text-pink">AI</span>. I chose to develop a <span class="text-pink">chatbot</span> for an <span class="text-orange">institution</span>.
                    <div>It was built to be <span class="text-blue">dynamic</span>, <span class="text-pink">interactive</span>, and <span class="text-orange">fully responsive</span> for all devices..</span>
                    <div>Initially designed to be a <span class="text-pink">simple text-based chatbot</span>, it has evolved to include <span class="text-blue">voice recognition</span> and integration with <span class="text-orange">OpenAI's API</span>, adding even more <span class="text-blue">intelligent responses</span> and <span class="text-orange"> advanced features</span>.</div>
                  </div>
                </div>
                <div class="neofetch-gifs">
                  <img class="chatbot-pic" src="images/Picture1.png" alt="chatbot">
                </div>
            </div>
            `,
    },
  };

  function updateContent(type, id) {
    if (contentInfo[type] && contentInfo[type][id]) {
      contentContainer.innerHTML = contentInfo[type][id];
    } else {
      contentContainer.innerHTML = "<p>Content not found.</p>";
    }
  }
});
