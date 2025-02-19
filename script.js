// Get current date and time
var now = new Date();
var datetime = now.toLocaleString();

// Insert date and time into HTML
document.getElementById("datetime").innerHTML = datetime;

function addItem() {
    const a = document.getElementById("list");
    const candidate = document.getElementById("candidate");
    const li = document.createElement("li");

    li.setAttribute("id", candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    a.appendChild(li);
}

function removeItem() {
    const a = document.getElementById("list");
    const candidate = document.getElementById("candidate");
    const item = document.getElementById(candidate.value);
    a.removeChild(item);
}
