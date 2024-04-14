document.addEventListener("DOMContentLoaded", function () {
  let rotation = 0;
  function rotateCube() {
    rotation += 1;
    cube.style.transform = `rotateX(-15deg) rotateY(${rotation}deg)`;
    requestAnimationFrame(rotateCube);
  }

  rotateCube();
  const passwordSets = document.querySelectorAll(".password");

  setTimeout(function () {
    function revealPassword(index) {
      if (index < passwordSets.length) {
        passwordSets[index].style.display = "block";
        setTimeout(function () {
          revealPassword(index + 1);
        }, 1000);
      } else {
        setTimeout(function () {
          document.querySelector(".lockTop").style.transform =
            "translateX(-100%)";
        }, 500);
        setTimeout(function () {
          document.querySelector(".containerCompartment").style.display =
            "flex";
          document.querySelector(".passwordContainer").style.display = "none";
        }, 1000);
      }
    }

    revealPassword(0);
  }, 1000);
});
