document.addEventListener("DOMContentLoaded", function () {
  var openModalButton = document.querySelector(".phone");
  var closeModalButton = document.querySelector(".close");
  var phoneModal = document.querySelector(".phoneModal");
  var camera = document.getElementById("camera");

  openModalButton.addEventListener("click", function () {
    document.querySelector(".modal").style.display = "block";
  });

  closeModalButton.addEventListener("click", function () {
    document.querySelector(".modal").style.display = "none";
  });

  camera.addEventListener("click", function () {
    var apps = document.querySelectorAll(".app");
    apps.forEach(function (app) {
      app.style.display = "none";
      phoneModal.style.backgroundImage = 'url("../images/download.jpg");';
    });
  });
});
