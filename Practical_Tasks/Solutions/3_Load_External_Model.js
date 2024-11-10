import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

//Scene, camera and renderer are mandatory to render the scene with a camera
const scene = new THREE.Scene();
scene.background = new THREE.Color("#ffffff")

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(1.5,0.75,2)
camera.lookAt(0,0,0)

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );

// This line inserts the Three.JS object (Canvas) into the web pages HTML Body. renderer.domElement creates a <Canvas> 
document.body.appendChild( renderer.domElement );

new GLTFLoader().load('Model/shiba/scene.gltf', (gltf) => {
    console.log(gltf)
  
    scene.add(gltf.scene)
  
  })

const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 1;
controls.update();

function animate() {
    requestAnimationFrame(animate)
  
    controls.update()
  
    renderer.render(scene, camera)
  
  }
  
  animate()