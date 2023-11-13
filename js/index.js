let width = window.innerWidth, height = window.innerHeight;
let renderer = render.initRenderer(width, height)
const scenes = {
    main: new THREE.Scene()
};
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);

camera.position.z = 50;
scenes.main.add(camera);

let testBlock = new box.load(10, 10, 10, 10, 10, 10, 0x0095DD)

render.requestRender(() => {
    requestAnimationFrame(render.requestRender)
}, renderer, scenes.main, camera)
