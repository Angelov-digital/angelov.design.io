import * as THREE from 'three';

const loader = new THREE.GLTFLoader(manager );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/wj0xvs85KetwbdYh/scene.splinecode');

// Load the GLTF model from the hosted URL
const modelURL = 'https://my.spline.design/holomorphe-b0627ac396dd7e8775b34a6429bcdd18/';
loader.load(modelURL, function (gltf) {
    const model = gltf.scene;

    // Position, scale, and rotate the model as needed
    model.position.set(0, 0, 0);
    model.scale.set(1, 1, 1);
    model.rotation.set(0, 0, 0);

    scene.add(model);
});

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();


