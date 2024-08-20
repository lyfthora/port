document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('content-container');
    
 
    document.querySelectorAll('.ui-list div').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        updateContent(id);
      });
    });

});