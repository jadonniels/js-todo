document.addEventListener("DOMContentLoaded", function () {
    var now = new Date();
    var datetime = now.toLocaleString();
    document.getElementById("datetime").textContent = datetime;

    document.getElementById("datetime").classList.add("datetime");
    document.getElementById("box").classList.add("box");
});

function addTask() {
    const arr = document.getElementById("list");
    const item = document.getElementById("candidate");

    if (item.value.trim() !== "") {
        const child = document.createElement("li");

        child.textContent = item.value;
        child.classList.add("listElt");

        arr.appendChild(child);
        item.value = ""; // Reset
    } else {
        alert("Provide an input value before proceeding");
    }
}

function removeSpecificTask() {
    const arr = document.getElementById("list");
    const item = document.getElementById("candidate").value.trim();

    if (item === "") {
        alert("Enter a task to remove.");
        return;
    }

    const tasks = arr.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].textContent === item) {
            arr.removeChild(tasks[i]);
            return;
        }
    }

    alert("Task not found.");
}
