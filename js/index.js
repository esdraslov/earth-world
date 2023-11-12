let width = window.innerWidth, height = window.innerHeight;
let renderer = render.initRenderer(width, height)
const scenes = {
    main: new THREE.Scene()
};
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);

camera.position.z = 50;
scenes.main.add(camera);
