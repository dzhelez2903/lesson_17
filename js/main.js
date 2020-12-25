/* change div*/
link1 = document.getElementById("joineUs");
link1.onclick = function () {
  document.getElementById("block1").style.display = "none";
  document.getElementById("block2").style.display = "flex";
  document.getElementById("block3").style.display = "none";
  //console.log(link1);
};
link2 = document.getElementById("signIn");
link2.onclick = function () {
  document.getElementById("block1").style.display = "flex";
  document.getElementById("block2").style.display = "none";
  document.getElementById("block3").style.display = "none";
  //console.log(link2);
};
link3 = document.getElementById("pass");
link3.onclick = function () {
  document.getElementById("block1").style.display = "none";
  document.getElementById("block2").style.display = "none";
  document.getElementById("block3").style.display = "flex";
  //console.log(link3);
};
link4 = document.getElementById("create");
link4.onclick = function () {
  document.getElementById("block1").style.display = "none";
  document.getElementById("block2").style.display = "flex";
  document.getElementById("block3").style.display = "none";
  //console.log(link4);
};
