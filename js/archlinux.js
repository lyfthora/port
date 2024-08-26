document.addEventListener("DOMContentLoaded", () => {
  const contentContainer = document.getElementById("main-content");
  //experiencia
  document.querySelectorAll("#experience .ui-list div").forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("experience-id");
      updateContent("experience", id);
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
        listIndex.textContent = `${index + 1} of 4`;
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
              <div>Initially designed to be a <span class="text-pink">simple text-based chatbot</span>, it has evolved to include <span class="text-blue">voice recognition</span> and integration with <span class="text-orange">OpenAI's API</span>, adding even more <span class="text-blue">intelligent responses</span> and <span class="text-orange">advanced features</span>.</div>
            </div>
          </div>
          <div class="neofetch-gifs">
            <img class="chatbot-pic" src="images/Picture1.png" alt="chatbot">
          </div>
        </div>
      `,
      project3: `
        <div class="container-content">
          <div class="outer-paragraph-container">
            <div class="inner-paragraph-container mt-4">
              <div>
                <h1>Animeflv</h1>
                <h2>[Built in <span class="text-pink">2024</span>]</h2>
                <div class="technologies-row">
                  <span class="text-blue">HTML</span> CSS <span class="text-pink">JavaScript</span> <span class="text-orange">REACT</span>
                </div>
                <div class="buttons-container">
                  <a class="project-button" href="https://github.com/brayiann/animeflv" target="_blank">Github</a>
                </div>
              </div>
              <div>The <span class="text-pink">Animeflv clone</span> was initially designed purely with <span class="text-orange">HTML and CSS</span> during my <span class="text-orange">internship</span>. I later decided to adapt it to the <span class="text-blue">React framework</span> to enhance my <span class="text-blue">frontend development skills</span>.
              <div>This transformation made the project more <span class="text-blue">dynamic</span>, <span class="text-pink">interactive</span>, and <span class="text-orange">fully responsive</span>, improving its adaptability across different devices.
              <div>What began as a <span class="text-pink">simple frontend project</span> evolved with React, allowing for the use of <span class="text-blue">reusable components</span> and <span class="text-orange">enhanced frontend features</span>, leading to a richer, more <span class="text-blue">intelligent</span> user experience.</div>
            </div>
          </div>
          <div class="neofetch-gifs">
            <img class="chatbot-pic" src="images/animeflv.jpg" alt="chatbot">
          </div>
        </div>
      `,
      project4: `
        <div class="container-content">
          <div class="outer-paragraph-container">
            <div class="inner-paragraph-container mt-4">
              <div>
                <h1>Paradise</h1>
                <h2>[Built in <span class="text-pink">2023</span>]</h2>
                <div class="technologies-row">
                  <span class="text-blue">HTML</span> <span class="text-orange">CSS</span> <span class="text-pink">JavaScript</span>
                </div>
                <div class="buttons-container">
                  <a class="project-button" href="https://github.com/brayiann/paradise" target="_blank">Github</a>
                  <a class="project-button" href="https://brayiann.github.io/paradise/" target="_blank">DEMO</a>
                </div>
              </div>
              <div>The <span class="text-pink">website</span> was created during i was <span class="text-orange">studying</span>, designed for a <span class="text-blue">friend</span> who needed a <span class="text-pink">modern</span> yet <span class="text-orange">minimalist</span> online presence.
              <div>It was built to be <span class="text-blue">clean</span>, <span class="text-pink">responsive</span>, and <span class="text-orange">user-friendly</span> across all devices.
              <div>The project started with the goal of creating a <span class="text-pink">clean and adaptable layout</span> for all devices. Additionally, there is the option to integrate a <span class="text-blue">server-side component</span> using <span class="text-orange">PHP</span> to add more <span class="text-pink">advanced functionality</span> to the website, enabling dynamic content and interaction.</div>
            </div>
          </div>
          <div class="neofetch-gifs">
            <video class="lainweb" loop autoplay muted>
              <source src="gifs/paradise2.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      `,
    },
    skills: {
      skills1: `
      <div class="container-content">
        <div class="outer-paragraph-container">
          <div class="inner-paragraph-container mt-4">
            <div>
              <h1><span class="text-blue">HTML</span></h1>
              <h2></h2>
              <div class="technologies-row"></div>
            </div>
            <div>
              <span class="text-blue">HTML</span>, or
              <span class="text-orange">HyperText Markup Language</span>, is the
              fundamental <span class="text-pink">standard</span> for creating
              <span class="text-blue">web pages</span>. It is the language that
              defines the <span class="text-orange">structure</span> and
              <span class="text-pink">content</span> of a webpage, using
              <span class="text-blue">tags</span> to identify elements such as
              <span class="text-orange">paragraphs</span>,
              <span class="text-pink">headings</span>,
              <span class="text-blue">images</span>,
              <span class="text-orange">links</span>, and more.
              <div>
                The primary purpose of <span class="text-blue">HTML</span> is to
                <span class="text-orange">structure</span> information on the web in a
                <span class="text-pink">coherent</span> and
                <span class="text-blue">accessible</span> way. Along with
                <span class="text-orange">CSS</span> and
                <span class="text-blue">JavaScript</span>,
                <span class="text-pink">HTML</span> forms the
                <span class="text-blue">foundation</span> of
                <span class="text-orange">web development</span>, enabling
                <span class="text-blue">browsers</span> to render content and allowing
                <span class="text-pink">users</span> to interact with it.
              </div>
            </div>
          </div>
          <pre>
              <code class="html">
<span class="text-pink">&lt;</span><span class="text-orange">!DOCTYPE html</span><span class="text-pink">&gt;</span>
<span class="text-pink">&lt;</span><span class="text-orange">html</span> <span class="text-blue">lang</span><span class="text-pink">="en"</span><span class="text-pink">&gt;</span>
   <span class="text-pink">&lt;</span><span class="text-orange">head</span><span class="text-pink">&gt;</span>
     <span class="text-pink">&lt;</span><span class="text-orange">meta</span> <span class="text-blue">charset</span><span class="text-pink">="UTF-8"</span> <span class="text-pink">/&gt;</span>
     <span class="text-pink">&lt;</span><span class="text-orange">link</span> <span class="text-blue">id</span><span class="text-pink">="min-style"</span> <span class="text-blue">rel</span><span class="text-pink">="stylesheet"</span> <span class="text-blue">type</span><span class="text-pink">="text/css"</span> <span class="text-blue">href</span><span class="text-pink">="css/styles.css"</span> <span class="text-pink">/&gt;</span>
     <span class="text-pink">&lt;</span><span class="text-orange">script</span> <span class="text-blue">src</span><span class="text-pink">="js/archlinux.js"</span><span class="text-pink">&gt;</span><span class="text-pink">&lt;/</span><span class="text-orange">script</span><span class="text-pink">&gt;</span>
     <span class="text-pink">&lt;</span><span class="text-orange">title</span><span class="text-pink">&gt;</span>Brian Rivero<span class="text-pink">&lt;/</span><span class="text-orange">title</span><span class="text-pink">&gt;</span>
   <span class="text-pink">&lt;/</span><span class="text-orange">head</span><span class="text-pink">&gt;</span>
     <span class="text-pink">&lt;</span><span class="text-orange">body</span> <span class="text-blue">class</span><span class="text-pink">="darkmode"</span><span class="text-pink">&gt;</span>
       <span class="text-pink">&lt;</span><span class="text-orange">div</span> <span class="text-blue">id</span><span class="text-pink">="main-container"</span><span class="text-pink">&gt;</span>
         <span class="text-pink">&lt;</span><span class="text-orange">div</span> <span class="text-blue">id</span><span class="text-pink">="section-container"</span><span class="text-pink">&gt;</span>
           <span class="text-pink">&lt;</span><span class="text-orange">div</span> <span class="text-blue">id</span><span class="text-pink">="left-section"</span><span class="text-pink">&gt;</span>
             <span class="text-pink">&lt;</span><span class="text-orange">header</span> <span class="text-blue">class</span><span class="text-pink">="container selected-frame"</span> <span class="text-blue">id</span><span class="text-pink">="home"</span><span class="text-pink">&gt;</span>
               <span class="text-pink">&lt;</span><span class="text-orange">div</span> <span class="text-blue">class</span><span class="text-pink">="container-content"</span><span class="text-pink">&gt;</span>
                 <span class="text-pink">&lt;</span><span class="text-orange">div</span> <span class="text-blue">class</span><span class="text-pink">="title decorating-text"</span><span class="text-pink">&gt;</span>
                   <span class="text-pink">&lt;</span><span class="text-orange">p</span><span class="text-pink">&gt;</span>Home<span class="text-pink">&lt;/</span><span class="text-orange">p</span><span class="text-pink">&gt;</span>
                   <span class="text-pink">&lt;</span><span class="text-orange">div</span><span class="text-pink">&gt;</span><span class="text-pink">&lt;/</span><span class="text-orange">div</span><span class="text-pink">&gt;</span>
                 <span class="text-pink">&lt;/</span><span class="text-orange">div</span><span class="text-pink">&gt;</span>
                 <span class="text-pink">&lt;</span><span class="text-orange">p</span> <span class="text-blue">id</span><span class="text-pink">="home-section-paragraph"</span><span class="text-pink">&gt;</span>
                   Hello! I'm <span class="text-blue">Brian Rivero</span>, a passionate software engineer from Spain :)
                 <span class="text-pink">&lt;/</span><span class="text-orange">p</span><span class="text-pink">&gt;</span>
               <span class="text-pink">&lt;/</span><span class="text-orange">div</span><span class="text-pink">&gt;</span>
             <span class="text-pink">&lt;/</span><span class="text-orange">header</span><span class="text-pink">&gt;</span>
           <span class="text-pink">&lt;/</span><span class="text-orange">div</span><span class="text-pink">&gt;</span>
         <span class="text-pink">&lt;/</span><span class="text-orange">div</span><span class="text-pink">&gt;</span>
       <span class="text-pink">&lt;/</span><span class="text-orange">div</span><span class="text-pink">&gt;</span>
     <span class="text-pink">&lt;/</span><span class="text-orange">body</span><span class="text-pink">&gt;</span>
<span class="text-pink">&lt;/</span><span class="text-orange">html</span><span class="text-pink">&gt;</span>      
              </code> 
            </pre>
        </div>
      </div>

      `,
      skills2: `
      <div class="container-content">
        <div class="outer-paragraph-container">
          <div class="inner-paragraph-container mt-4">
            <div>
              <h1><span class="text-pink">CSS</span></h1>
              <h2></h2>
              <div class="technologies-row"></div>
            </div>
            <div>
              CSS, or <span class="text-orange">Cascading Style Sheets</span>, is a
              stylesheet language used to describe the presentation of a document
              written in <span class="text-orange">HTML</span>. It allows developers
              to separate the <span class="text-blue">layout and design</span> of a
              web page from its content, enabling more
              <span class="text-blue">flexible and manageable</span> web design.
              <div>
                By using CSS, developers can control the
                <span class="text-blue">appearance</span> of elements on a web page,
                such as fonts, colors, and spacing, leading to a more
                <span class="text-pink">visually appealing</span> and
                <span class="text-blue">consistent</span> user experience across
                different browsers and devices.
                <div>
                  CSS also supports <span class="text-blue">responsive design</span>,
                  allowing web pages to adapt to various screen sizes and
                  orientations. This enhances the
                  <span class="text-orange">usability</span> and
                  <span class="text-pink">accessibility</span> of websites, making
                  them more <span class="text-blue">user-friendly</span> and
                  <span class="text-orange">adaptive</span> to different devices.
                </div>
              </div>
            </div>
            <pre>
              <code class="html">
<span class="text-pink">*</span> <span class="text-pink">{</span>
&nbsp;&nbsp;<span class="text-blue">padding</span>: 0;
&nbsp;&nbsp;<span class="text-blue">margin</span>: 0;
&nbsp;&nbsp;<span class="text-blue">cursor</span>: <span class="text-orange">default</span>;
<span class="text-pink">}</span>

<span class="text-pink">h1</span> <span class="text-pink">{</span>
&nbsp;&nbsp;<span class="text-blue">font-size</span>: 1.1rem;
&nbsp;&nbsp;<span class="text-blue">font-weight</span>: 700;
<span class="text-pink">}</span>

<span class="text-pink">a</span> <span class="text-pink">{</span>
&nbsp;&nbsp;<span class="text-blue">cursor</span>: <span class="text-orange">pointer</span>;
<span class="text-pink">}</span>

<span class="text-pink">body</span> <span class="text-pink">{</span>
&nbsp;&nbsp;<span class="text-blue">font-family</span>: <span class="text-orange">"Fira Mono"</span>, monospace, sans-serif;
&nbsp;&nbsp;<span class="text-blue">overflow</span>: <span class="text-orange">hidden</span>;
&nbsp;&nbsp;<span class="text-blue">padding</span>: 1rem;
&nbsp;&nbsp;<span class="text-blue">height</span>: 100vh;
&nbsp;&nbsp;<span class="text-blue">background-color</span>: <span class="text-orange">#0d1117</span>;
&nbsp;&nbsp;<span class="text-blue">color</span>: <span class="text-orange">#c9d1d9</span>;
&nbsp;&nbsp;<span class="text-blue">font-size</span>: 14px;
<span class="text-pink">}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
      `,
      skills3: `
      <div class="container-content">
        <div class="outer-paragraph-container">
          <div class="inner-paragraph-container mt-4">
            <div>
              <h1><span class="text-pink">JavaScript</span></h1>
              <h2></h2>
              <div class="technologies-row"></div>
            </div>
            <div>
              JavaScript is a
              <span class="text-orange">programming language</span> that allows
              developers to create
              <span class="text-blue">interactive and dynamic</span> web content.
              Unlike <span class="text-orange">HTML</span> and
              <span class="text-orange">CSS</span>, which are used for structure and
              styling, JavaScript is responsible for making web pages
              <span class="text-pink">functional</span> by enabling
              <span class="text-blue">behavioral</span> elements such as event
              handling, form validation, and dynamic updates.
              <div>
                By using JavaScript, developers can manipulate the
                <span class="text-orange">Document Object Model (DOM)</span>, allowing
                for the <span class="text-pink">real-time</span> updating of content,
                animations, and interactive features. This makes websites more
                <span class="text-blue">engaging</span> and improves the overall
                <span class="text-orange">user experience</span>.
                <div>
                  JavaScript also supports
                  <span class="text-blue">asynchronous programming</span> through
                  mechanisms like <span class="text-pink">AJAX</span> and
                  <span class="text-orange">Promises</span>, enabling the creation of
                  <span class="text-pink">responsive</span> web applications that can
                  retrieve data from servers without reloading the page. This leads to
                  <span class="text-orange">faster</span> and more
                  <span class="text-blue">efficient</span> web interactions.
                </div>
              </div>
            </div>
            <pre>
                <code class="html">
&lt;<span class="text-orange">script</span>&gt;
  <span class="text-pink">document</span>.addEventListener(<span class="text-blue">"DOMContentLoaded"</span>, () =&gt; {
  const contentContainer = <span class="text-pink">document</span>.getElementById(<span class="text-blue">"main-content"</span>);
  
  <span class="text-pink">document</span>.<span class="text-pink">querySelectorAll</span>(<span class="text-blue">"#experience .ui-list div"</span>).forEach((item) =&gt; {
    item.addEventListener(<span class="text-blue">"click"</span>, () =&gt; {
      const id = item.getAttribute(<span class="text-orange">"experience-id"</span>);
      updateContent(<span class="text-blue">"experience"</span>, id);
    });
  });
  
  <span class="text-pink">document</span>.<span class="text-pink">querySelectorAll</span>(<span class="text-blue">"#projects .ui-list div"</span>).forEach((item) =&gt; {
    item.addEventListener(<span class="text-blue">"click"</span>, () =&gt; {
      const id = item.getAttribute(<span class="text-orange">"project-id"</span>);
      updateContent(<span class="text-blue">"project"</span>, id);
    });
  });
  
  <span class="text-pink">document</span>.<span class="text-pink">querySelectorAll</span>(<span class="text-blue">"#skills .ui-list div"</span>).forEach((item) =&gt; {
    item.addEventListener(<span class="text-blue">"click"</span>, () =&gt; {
      const id = item.getAttribute(<span class="text-orange">"skills-id"</span>);
      updateContent(<span class="text-blue">"skills"</span>, id);
    });
  });
  });
&lt;/<span class="text-orange">script</span>&gt;
               </code>
              </pre>
          </div>
        </div>
      </div> 
      `,
      skills4: `
      <div class="container-content">
        <div class="outer-paragraph-container">
          <div class="inner-paragraph-container mt-4">
            <div>
              <h1><span class="text-pink">PHP</span></h1>
              <h2></h2>
              <div class="technologies-row"></div>
            </div>
            <div>
              PHP is a <span class="text-orange">server-side scripting language</span> that
              enables developers to create
              <span class="text-blue">dynamic and interactive</span> web content. Unlike
              <span class="text-orange">HTML</span> and
              <span class="text-orange">CSS</span>, which are used for structure and
              styling, PHP is responsible for generating
              <span class="text-pink">dynamic</span> content and
              <span class="text-blue">handling server-side logic</span>, such as interacting
              with databases and processing form data.
             <div>
               By using PHP, developers can embed
               <span class="text-orange">server-side scripts</span> within HTML, allowing for
               the <span class="text-pink">dynamic generation</span> of content based on user
               interactions and other server-side conditions. This enables the creation of
               <span class="text-blue">customizable</span> and
               <span class="text-orange">interactive</span> web applications that can respond
               to user inputs and provide personalized experiences.
              <div>
                PHP also supports <span class="text-blue">database interaction</span> through
                mechanisms like <span class="text-pink">MySQL</span> and
                <span class="text-orange">PDO</span>, allowing the creation of
                <span class="text-pink">data-driven</span> web applications that can retrieve,
                update, and store data efficiently. This leads to
                <span class="text-orange">dynamic</span> and
                <span class="text-blue">robust</span> web solutions.
              </div>
            </div>
            <pre>
                <code class="html">
<span class="text-pink">&lt;?php</span>
session_start();
include <span class="text-blue">'../db.php'</span>;
if (!isset(<span class="text-blue">$_SESSION</span>[<span class="text-orange">'loggedin'</span>] ) || <span class="text-blue">$_SESSION</span>[<span class="text-orange">'loggedin'</span>] !== <span class="text-blue">true</span>) {
    header(<span class="text-blue">"Location: ../login/index.php"</span>);
    exit();
}
<span class="text-blue">$stmt</span> = <span class="text-blue">$conn</span>-&gt;prepare("
    <span class="text-pink">SELECT</span> p.<span class="text-orange">id</span>, p.<span class="text-orange">post_content</span>, p.<span class="text-orange">post_image</span>, p.<span class="text-orange">created_at</span>, u.<span class="text-orange">username</span>, u.<span class="text-orange">profile_picture</span>, 
           <span class="text-pink">COUNT</span>(c.<span class="text-orange">id</span>) <span class="text-pink">AS</span> <span class="text-orange">comment_count</span>
    <span class="text-pink">FROM</span> <span class="text-orange">posts</span> p
    <span class="text-pink">JOIN</span> <span class="text-orange">usuarios</span> u <span class="text-pink">ON</span> p.<span class="text-orange">username</span> = u.<span class="text-orange">username</span>
    <span class="text-pink">LEFT JOIN</span> <span class="text-orange">comments</span> c <span class="text-pink">ON</span> p.<span class="text-orange">id</span> = c.<span class="text-orange">post_id</span>
    <span class="text-pink">GROUP BY</span> p.<span class="text-orange">id</span>
    <span class="text-pink">ORDER BY</span> p.<span class="text-orange">id</span> <span class="text-pink">DESC</span>
");
<span class="text-blue">$stmt</span>-&gt;execute();
<span class="text-blue">$result</span> = <span class="text-blue">$stmt</span>-&gt;get_result();
<span class="text-blue">$posts</span> = [];
while (<span class="text-blue">$row</span> = <span class="text-blue">$result</span>-&gt;fetch_assoc()) {
    <span class="text-blue">$posts</span>[] = <span class="text-blue">$row</span>;
}
<span class="text-blue">$stmt</span>-&gt;close();
<span class="text-blue">$conn</span>-&gt;close();
<span class="text-pink">?&gt;</span>
                </code>
              </pre>
          </div>
        </div>
      </div>  
    `,
      skills5: `
      <div class="container-content">
        <div class="outer-paragraph-container">
          <div class="inner-paragraph-container mt-4">
            <div>
              <h1><span class="text-pink">Python</span></h1>
              <h2></h2>
              <div class="technologies-row"></div>
            </div>
            <div>
              Python is a
              <span class="text-orange">high-level programming language</span> known for its
              <span class="text-blue">readability</span> and
              <span class="text-pink">versatility</span>. Unlike
              <span class="text-orange">HTML</span> and
              <span class="text-orange">CSS</span>, which are used for web content structure
              and styling, Python is a
              <span class="text-blue">general-purpose language</span> that can be used for
              <span class="text-pink">web development</span>,
              <span class="text-blue">data analysis</span>,
              <span class="text-orange">artificial intelligence</span>, and more.
              <div>
                By using Python, developers can write
                <span class="text-blue">efficient and clean code</span> that supports a wide
                range of programming paradigms, including
                <span class="text-pink">object-oriented</span>,
                <span class="text-blue">functional</span>, and
                <span class="text-orange">procedural programming</span>. This enables the
                creation of <span class="text-pink">scalable</span> and
                <span class="text-blue">maintainable</span> software solutions.
                <div>
                  Python also supports
                  <span class="text-blue">extensive libraries and frameworks</span> such as
                  <span class="text-pink">Django</span>,
                  <span class="text-orange">Flask</span>, and
                  <span class="text-blue">NumPy</span>, facilitating
                  <span class="text-pink">rapid development</span> and
                  <span class="text-orange">powerful data processing</span>. This makes
                  Python an <span class="text-blue">ideal choice</span> for a variety of
                  <span class="text-pink">applications</span> and
                  <span class="text-orange">projects</span>.
                </div>
              </div>
            </div>
            <pre>
                <code class="html">
# Paths
<span class="text-orange">BDVECTORIAL_PATH</span> = <span class="text-pink">r"db"</span>
<span class="text-orange">PDF_PATH</span> = <span class="text-pink">r"pdf"</span>

# Cargar la web
<span class="text-blue">#loader</span> = <span class="text-blue">WebBaseLoader</span>(<span class="text-pink">""</span>)
<span class="text-blue">#pagina</span> = <span class="text-blue">loader.load()</span>

# Documentos PDF y DOCX de la carpeta
<span class="text-orange">cargador_de_pdfs</span> = <span class="text-blue">DirectoryLoader</span>(<span class="text-orange">PDF_PATH</span>, glob=<span class="text-pink">"./*.pdf"</span>, loader_cls=<span class="text-blue">PyPDFLoader</span>)
<span class="text-orange">cargador_de_word</span> = <span class="text-blue">DirectoryLoader</span>(<span class="text-orange">PDF_PATH</span>, glob=<span class="text-pink">"./*.docx"</span>)
<span class="text-orange">documentos</span> = <span class="text-orange">cargador_de_pdfs.load()</span> + <span class="text-orange">cargador_de_word.load()</span>
<span class="text-orange">text_splitter</span> = <span class="text-blue">RecursiveCharacterTextSplitter</span>(
    chunk_size=<span class="text-pink">300</span>,
    chunk_overlap=<span class="text-pink">70</span>,
    length_function=<span class="text-blue">len</span>,
    is_separator_regex=<span class="text-pink">False</span>,
    )
<span class="text-orange">chunks</span> = <span class="text-orange">text_splitter.split_documents(documentos)</span>
<span class="text-orange">print</span>(<span class="text-pink">f"Se dividieron {len(documentos)} Paginas en {len(chunks)} fragmentos."</span>)
<span class="text-orange">embedding</span> = <span class="text-blue">OpenAIEmbeddings</span>(model=<span class="text-pink">"text-embedding-ada-002"</span>)
<span class="text-orange">chroma_client</span> = <span class="text-blue">chromadb.Client</span>()
<span class="text-orange">print</span>(<span class="text-pink">"Todo ejecutado correctamente"</span>)
                </code>
              </pre>
          </div>
        </div>
      </div>
    </div>
    `,
      skills6: `
      <div class="container-content">
        <div class="outer-paragraph-container">
          <div class="inner-paragraph-container mt-4">
            <div>
              <h1><span class="text-pink">React</span></h1>
              <h2></h2>
              <div class="technologies-row"></div>
            </div>
            <div>
              React is a <span class="text-orange">JavaScript library</span> that enables
              developers to create
              <span class="text-blue">dynamic and interactive</span> user interfaces for web
              applications. Unlike traditional methods of building UIs, React allows
              developers to build components that can efficiently update and render the
              right elements when data changes, making it ideal for
              <span class="text-pink">dynamic</span> and
              <span class="text-blue">responsive</span> web applications.
              <div>
                By using React, developers can create
                <span class="text-orange">component-based architectures</span> where the UI
                is broken down into smaller, reusable components. This enables the creation
                of <span class="text-pink">modular</span> and
                <span class="text-blue">maintainable</span> applications, where each
                component manages its own state and can be independently tested and updated.
                <div>
                  React also supports
                  <span class="text-blue">declarative programming</span>, meaning developers
                  can describe what the UI should look like based on the current state, and
                  React will efficiently manage the updates. This leads to
                  <span class="text-orange">faster</span> and more
                  <span class="text-blue">scalable</span> web applications with better
                  performance and easier maintenance.
                </div>
              </div>
            </div>
            <pre>
                <code class="html">
import <span class="text-pink">React</span>, { <span class="text-blue">Fragment</span>, <span class="text-blue">useRef</span>, <span class="text-blue">useEffect</span>, <span class="text-blue">useState</span> } from "<span class="text-orange">react</span>";
import <span class="text-blue">cover</span> from "<span class="text-orange">../../img/cover.jpg</span>";
function <span class="text-blue">useOutsideClick</span>(<span class="text-orange">ref</span>, <span class="text-orange">callback</span>, <span class="text-orange">when</span>) {
  const <span class="text-blue">savedCallback</span> = <span class="text-blue">useRef</span>(<span class="text-orange">callback</span>);
  <span class="text-blue">useEffect</span>(() => {
    <span class="text-blue">savedCallback</span>.<span class="text-orange">current</span> = <span class="text-orange">callback</span>;
  });
  function <span class="text-blue">handler</span>(<span class="text-orange">e</span>) {
    if (<span class="text-orange">ref.current</span> && !<span class="text-orange">ref.current</span>.<span class="text-blue">contains</span>(<span class="text-orange">e.target</span>)) {
      <span class="text-blue">savedCallback</span>.<span class="text-orange">current</span>();
    }
  }
  <span class="text-blue">useEffect</span>(() => {
    if (<span class="text-orange">when</span>) {
      const <span class="text-blue">timeoutId</span> = setTimeout(() => {
        <span class="text-orange">document.addEventListener</span>("click", <span class="text-blue">handler</span>);
      }, 100);
      return () => {
        <span class="text-blue">clearTimeout</span>(<span class="text-orange">timeoutId</span>);
        <span class="text-orange">document.removeEventListener</span>("click", <span class="text-blue">handler</span>);
      };
    }
  }, [<span class="text-orange">when</span>]);
}
                </code>
              </pre>
          </div>
        </div>
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
