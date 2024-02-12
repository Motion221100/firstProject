const addEntry = document.getElementById("add-entry");
const btnSubmit= document.getElementById("submit-btn");
const outputTask = document.getElementById("tasks-output");

btnSubmit.addEventListener("click", () => {
   if (addEntry.value === "") {
    alert("Empty Input!");
   }
   else {
    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", "tasks");
    paragraph.innerText = addEntry.value;
    outputTask.appendChild(paragraph);
    addEntry.value = "";

    paragraph.addEventListener("dblclick", () => {
      outputTask.removeChild(paragraph);
    })
   }
})