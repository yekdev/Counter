$(document).ready(function () {
  let num = document.querySelector("#count");
  num.innerHTML += "0";
  let counter = 0;

  $(".increase").click(function () {
    num.innerHTML = ++counter;
  });

  $(".reset").click(function () {
    num.innerHTML = 0;
    counter = 0;
  });

  $(".decrease").click(function () {
    num.innerHTML = --counter;
  });
});
