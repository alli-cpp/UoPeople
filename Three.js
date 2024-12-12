// Import Three.js
import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the cube geometry and materials
const geometry = new THREE.BoxGeometry();
const textureLoader = new THREE.TextureLoader();

// Load textures
const texture1 = textureLoader.load('path/to/texture1.jpg');
const texture2 = textureLoader.load('path/to/texture2.jpg');
const texture3 = textureLoader.load('path/to/texture3.jpg');
const texture4 = textureLoader.load('path/to/texture4.jpg');

const materials = [
    new THREE.MeshBasicMaterial({ map: texture1 }),
    new THREE.MeshBasicMaterial({ map: texture2 }),
    new THREE.MeshBasicMaterial({ map: texture3 }),
    new THREE.MeshBasicMaterial({ map: texture4 }),
    new THREE.MeshBasicMaterial({ color: 0xffffff }),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
];

const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

// Add directional light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10).normalize();
scene.add(light);

// Auto-rotate the cube
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Add rotation control with arrow keys
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            cube.rotation.y -= 0.1;
            break;
        case 'ArrowRight':
            cube.rotation.y += 0.1;
            break;
        case 'ArrowUp':
            cube.rotation.x -= 0.1;
            break;
        case 'ArrowDown':
            cube.rotation.x += 0.1;
            break;
    }
});
