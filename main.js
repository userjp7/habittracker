const notes = [];
const todo = [];

const mainDisplay = document.getElementById("containerMain");
const contentDisplay = document.getElementById("titleDisplay");
const searchInput = document.getElementById("search-input");
const viewDashboard = document.getElementById("overview-button");
const viewNotes = document.getElementById("notes-button");
const viewTodos = document.getElementById("todos-button");
const viewSettings = document.getElementById("settings-button");
const viewHistory = document.getElementById("history-button");
const addTask = document.getElementById("add");

function addFunction() {
  addTask.addEventListener("click", function () {
    console.log("clicked");
    const popupTaskMenu = document.querySelector(".popupMenu");
    if (popupTaskMenu) popupTaskMenu.remove();

    const popupMenu = document.createElement("div");
    popupMenu.innerHTML = `
    <div class="popupMenu">
        <div class="closeButton" id="closeButton" style="cursor:pointer">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round"
               class="lucide lucide-x-icon lucide-x">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
        <div class="note" id="note">Note</div>
        <div class="todo" id="Todo">Todo</div>
      </div>
    `;
    document.body.appendChild(popupMenu);

    const closeButton = popupMenu.querySelector("#closeButton");
    closeButton.addEventListener("click", function () {
      popupMenu.remove();
    });

    popupMenu.querySelector("#note").addEventListener("click", () => {
      openForm("note");
      popupMenu.remove();
    });

    popupMenu.querySelector("#Todo").addEventListener("click", () => {
      openForm("todo");
      popupMenu.remove();
    });
  });
}
addFunction();

function openForm(type) {
  // You can customize this with a real modal or form UI
  const formContainer = document.createElement("div");
  formContainer.className = "form-overlay";
  formContainer.innerHTML = `
    <div class="form-box">
      <h2>Add ${type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <input type="text" id="title" placeholder="Title" />
      <textarea id="description" placeholder="Description..."></textarea>
      <button id="submit">Add ${type}</button>
      <button id="cancel">Cancel</button>
    </div>
  `;

  document.body.appendChild(formContainer);

  formContainer.querySelector("#submit").addEventListener("click", () => {
    const title = formContainer.querySelector("#title").value;
    const description = formContainer.querySelector("#description").value;
    console.log(`Add ${type}:`, { title, description });

    // You can now push to your data arrays or update UI:
    if (type === "note") {
      notes.push({ title, description });
    } else if (type === "todo") {
      todo.push({ title, description });
    }

    formContainer.remove();
  });

  formContainer.querySelector("#cancel").addEventListener("click", () => {
    formContainer.remove();
  });
}
