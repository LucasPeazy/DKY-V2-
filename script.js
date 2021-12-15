function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("menu123").style.opacity = "0%";
  document.getElementById("overlay-content").style.opacity = "100%";
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("menu123").style.opacity = "100%";
  document.getElementById("overlay-content").style.opacity = "0%";
}


var nameIndex = 1;

function nameRotator() {
  $(".name").hide();
  $(".name" + nameIndex).show();

  var nameCount = 2;
  nameIndex++;
  if (nameIndex > nameCount) {
    nameIndex = 1;
  }
}

$(document).ready(function() {
  nameRotator();
  setInterval(nameRotator, 13000);
});
