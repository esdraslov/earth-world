let width = window.innerWidth, height = window.innerHeight;
let renderer = render.initRenderer(width, height)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);

camera.position.z = 50;
scene.add(camera);
