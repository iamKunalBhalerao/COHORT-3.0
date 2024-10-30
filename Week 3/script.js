const title = document.getElementById("title");
const todos = document.getElementById("todos");
const count = document.getElementById("todocount");
const noyet = document.getElementById("noyet");

function add() {
  const h4 = document.createElement("h4");
  const todolen = todos.querySelectorAll("h4");
  count.innerHTML = `You have ${todolen.length + 1} Todo's`;
  h4.innerHTML = `${todolen.length + 1}. ${title.value}`;
  todos.appendChild(h4);
  noyet.style.display = "none";

  console.log(h4);
  console.log("you have ", todolen.length + 1, " Todo's");
}
