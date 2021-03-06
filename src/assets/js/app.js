import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const canvasContainer = document.getElementById('ps5-canvas')

const renderer = new THREE.WebGLRenderer({alpha:true})
renderer.setClearColor(0x000000, 0)
renderer.setSize(canvasContainer.clientWidth,canvasContainer.clientHeight)
document.getElementById('ps5-canvas').appendChild(renderer.domElement);


// Create Camera
const fov = 100;
const aspect = canvasContainer.clientWidth/canvasContainer.clientHeight;
const near = 1;
const far = 500;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.set(-250,50,200);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement)

// GLTF Loader
const loader = new GLTFLoader
loader.load('assets/models/ps5/scene.gltf', function(model) {
    scene.add(model.scene)
    console.log(model.scene.id)
    model.scene.position.y = -150
    gsap.from(model.scene.rotation, {
        y: -3,
        ease: "expo.out",
        duration: 4,
    })
}, undefined, function(error) {
    console.error(error)
})

// Light 
const light = new THREE.DirectionalLight(0xffffff);
light.position.set( 100,0,0 );
scene.add( light );

const light2 = new THREE.DirectionalLight(0xffffff);
light2.position.set( -100,0,0 );
scene.add( light2 );


function render(time) {
    renderer.render(scene,camera);
    requestAnimationFrame(render)
}
if(document.body.clientWidth > 992) {
    requestAnimationFrame(render);
}

gsap.from("#hero-text h1", {
    translateX: '70px',
    duration: 1.5,
    ease: "circ.out",
    opacity: 0,
    delay:.5,
})
gsap.from("#hero-text p", {
    translateX: '50px',
    duration: 1,
    ease: "circ.out",
    opacity: 0,
    delay: 1.5,
})