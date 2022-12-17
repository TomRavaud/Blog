// Create a scene, a camera and a renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const canv = document.querySelector("#logo-canvas")
const renderer = new THREE.WebGLRenderer({
    canvas: canv,  // Associate the renderer to a pre-defined canvas
    alpha: true,  // Transparent background
});

// renderer.setSize(window.innerWidth/2, window.innerHeight/2);
      
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xffffff});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 2;

var animate = function() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();
