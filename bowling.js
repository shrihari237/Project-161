AFRAME.registerComponent("ball", {
  init: function () {
    this.shoot();
  },

  shoot: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "s") {
        console.log('HELLO')
        const ballEl = document.createElement("a-entity");
        
        ballEl.setAttribute("gltf-model", 'assets/models/bowling_ball/scene.gltf');
        ballEl.setAttribute('scale',{x:3,y:3,z:3})
        
        var camera = document.querySelector('#camera')
        var pos = camera.getAttribute('position')
        ballEl.setAttribute('position',pos)

        var camera = document.querySelector('#camera').object3D
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction) 
        ballEl.setAttribute('velocity',direction.multiplyScalar(-10))

        var scene = document.querySelector('#scene')
        scene.appendChild(ballEl)
        
      }
    });
  },
});
