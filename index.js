var count = 4

function addElement() {
    var id = document.getElementById("names");

    var input = document.createElement("input");
    input.type = "text";
    input.className = "text_input";
    input.placeholder = `Enter Name ${count}`;
    count++;

    id.appendChild(input);
    id.appendChild(document.createElement("br"));
    id.appendChild(document.createElement("br"));
}