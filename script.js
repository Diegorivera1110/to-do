window.addEventListener('load', () => {
    const form = document.querySelector("#new-task");
    const input = document.querySelector("#new-submit");
    const list_el = document.querySelector(".tasks");
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const task = input.value; 
      
      if (!task) {
         alert("Please enter in a task");
        return;
      }
      
      const task_el = document.createElement("div");
      task_el.classList.add("task");
      
      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");
      task_content_el.innerText = tasl;
      
      task_el.appendChild(task_content_el);
  
      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type = "text";
      task_input_el.value = task;
      task_input_el.setAttribute("randomly", "randomly");
      
      task_content_el.appendChile(task_input_el);
      
      task_el.appendChild(task_el);
    })
  })