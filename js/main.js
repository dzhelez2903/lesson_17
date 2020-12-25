/* change div*/
link1 = document.getElementById("joineUs");
link1.onclick = function () {
  document.getElementById("block1").style.display = "none";
  document.getElementById("block2").style.display = "flex";
  console.log(link1);
};
link2 = document.getElementById("signIn");
link2.onclick = function () {
  document.getElementById("block1").style.display = "flex";
  document.getElementById("block2").style.display = "none";
  console.log(link2);
};
