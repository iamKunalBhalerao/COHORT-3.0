function addTodo() {
  const value = document.getElementById("inp").value;
  const spanEl = document.createElement("span");
  const btnEl = document.createElement("button");
  spanEl.innerHTML = value;
  btnEl.innerHTML = "Delete";

  const divEl = document.createElement("div");
  divEl.appendChild(spanEl);
  divEl.appendChild(btnEl);

  document.querySelector("body").appendChild(divEl);
}

function deleteTodo() {
  console.log("delete");
}
