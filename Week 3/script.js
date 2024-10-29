const title = document.getElementById("title");
const todos = document.getElementById("todos");
const count = document.getElementById("todocount");
const noyet = document.getElementById("noyet");

function add() {
  const h4 = document.createElement("h4");
  h4.innerHTML = title.value;
  todos.appendChild(h4);
  const todolen = todos.querySelectorAll("h4");
  count.innerHTML = `You have ${todolen.length} Todo's`;
  noyet.style.display = "none";

  console.log(h4);
  console.log("you have ", todolen.length, " Todo's");
}
