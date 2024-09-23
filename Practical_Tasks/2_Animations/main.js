import * as THREE from 'three';

//TODOS:
// 1. Copy/paste your own solution or use the sample solution

//Scene, camera and renderer are mandatory to render the scene with a camera
const scene = new THREE.Scene();
scene.background = new THREE.Color("#ffffff")

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(20,20,50)
camera.lookAt(0,0,0)

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

// This line inserts the Three.JS object (Canvas) into the web pages HTML Body. renderer.domElement creates a <Canvas> 
document.body.appendChild( renderer.domElement );

//An object required a geometrical form, a material to color it and a mesh which is an object that takes a geometry and applies a material to it
const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh( geometry, material );

scene.add( cube );

function animate() {
    cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
renderer.render( scene, camera );