let i: number;

// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> =
  document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  let span: HTMLElement = document.createElement("SPAN");
  let txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let closeTodoList: HTMLCollectionOf<Element> =
  document.getElementsByClassName("close");
for (i = 0; i < closeTodoList.length; i++) {
  let closeTodo: Element = closeTodoList[i];
  closeTodo.addEventListener("click", (): void => {
    let div: HTMLElement | null = closeTodo.parentElement;
    if (div != null) {
      div.style.display = "none";
    }
  });
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector("ul");
if (list != null) {
  list.addEventListener(
    "click",
    function (ev): void {
      let target: HTMLElement = <HTMLElement>ev.target;
      if (target.tagName === "LI") {
        target.classList.toggle("checked");
      }
    },
    false
  );
}

// Create a new list item when clicking on the "Add" button
function newElement(): void {
  const li: HTMLLIElement = document.createElement("li");
  const input: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("myInput")
  );
  if (!input) return;
  const inputValue: string = input.value;
  const textNode: Text = document.createTextNode(inputValue);
  li.appendChild(textNode);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    const ul = document.getElementById("myUL");
    if (ul) {
      ul.appendChild(li);
    }
  }
  input.value = "";

  const span: HTMLElement = document.createElement("SPAN");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.addEventListener("click", (): void => {
    const li: HTMLElement | null = span.parentElement;
    if (li != null) {
      li.style.display = "none";
    }
  });
}

const addBtn: HTMLElement | null = document.getElementById("addBtn");
addBtn?.addEventListener("click", (): void => {
  newElement();
});
