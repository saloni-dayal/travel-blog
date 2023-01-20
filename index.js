
explore= document.getElementById("explore");
texti = document.getElementById("texti");
console.log("Running js");
console.log("Running 44444");
explore.onclick = function () {
  clickfunction();
};
function clickfunction() {
  console.log("clickfunction watchmore");

  document.getElementById("texti").innerHTML = "Hello Likitha";
  explore.className = "btn btn-secondary";
  document.getElementById("texti").style.color = "yellow";
}