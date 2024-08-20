document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('main-content');
    
 
    document.querySelectorAll('.ui-list div').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('experience-id');
        updateContent(id);
      });
    });

    function updateContent(id) {
        let content = '';
        switch (id) {
          case 'test1':
            content = `
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
            `;
            break;
          case 'test2':
            
            break;
        
          
        }
        
        contentContainer.innerHTML = content;
      }
    });