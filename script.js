window.addEventListener('load', () => {
    const form = document.querySelector("#new-task");
    const input = document.querySelector("#new-submit");
    const list_el = document.querySelector(".tasks");
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      console.log("Submit form");
    })
  })