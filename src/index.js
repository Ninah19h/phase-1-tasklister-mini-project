document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from s refreshing the page

    const task = input.value.trim();

    if (task !== "") {  //
      const li = document.createElement("li"); 
      li.textContent = task;

      taskList.appendChild(li)
      input.value = "";
       }
  });
});
