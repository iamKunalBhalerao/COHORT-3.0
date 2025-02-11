const counter = document.querySelectorAll("h4")[1];
let i = 0;
function callback() {
  counter.innerHTML = i++;
}

setInterval(callback, 1000);
