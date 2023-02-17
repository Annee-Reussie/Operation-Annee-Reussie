function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id)
}

function drop(ev) {
    ev.preventDefault();
    if (ev.target.id !== '') return
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
