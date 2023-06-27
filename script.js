window.addEventListener('load', () => {
    const form = document.querySelector("#new-task");
    const input = document.querySelector("#new-submit");
    const list_el = document.querySelector(".tasks");
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const task = input.value; 
      
      if (!task) {
         alert("Please enter in a task");
      } else {
        consol.log("success");
      }
    })
  })