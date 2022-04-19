let modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
let card_name = document.getElementsByClassName("card_name");
let card_title = document.getElementById("card_title");

var span = document.getElementsByClassName("close")[0];
span.onclick = function close() {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("plus").addEventListener("click", () => {
  document.getElementById("myModal").style.display = "block";
});

export function modal_display() {
    modal.style.display = "block";
  }
  