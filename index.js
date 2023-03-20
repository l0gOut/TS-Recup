"use strict";
let i;
// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
let closeTodoList = document.getElementsByClassName("close");
for (i = 0; i < closeTodoList.length; i++) {
    let closeTodo = closeTodoList[i];
    closeTodo.addEventListener("click", () => {
        let div = closeTodo.parentElement;
        if (div != null) {
            div.style.display = "none";
        }
    });
}
// Add a "checked" symbol when clicking on a list item
const list = document.querySelector("ul");
if (list != null) {
    list.addEventListener("click", function (ev) {
        let target = ev.target;
        if (target.tagName === "LI") {
            target.classList.toggle("checked");
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    const input = (document.getElementById("myInput"));
    if (!input)
        return;
    const inputValue = input.value;
    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue === "") {
        alert("You must write something!");
    }
    else {
        const ul = document.getElementById("myUL");
        if (ul) {
            ul.appendChild(li);
        }
    }
    input.value = "";
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.addEventListener("click", () => {
        const li = span.parentElement;
        if (li != null) {
            li.style.display = "none";
        }
    });
}
const addBtn = document.getElementById("addBtn");
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", () => {
    newElement();
});
