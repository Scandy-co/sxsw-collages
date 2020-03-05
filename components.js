AFRAME.registerComponent("hud-init", {
  init: function() {
    let scene = this.el.sceneEl;
    scene.addEventListener("realityready", () => {
      // Hide loading UI
      document.querySelector(".hud").style.display = "block";
    });
  }
});
