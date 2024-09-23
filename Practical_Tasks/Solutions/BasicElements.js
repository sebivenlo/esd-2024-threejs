import * as THREE from 'three';

//Scene, camera and renderer are mandatory to render the scene with a camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

// This line inserts the Three.JS object (Canvas) into the web pages HTML Body. renderer.domElement creates a <Canvas> 
document.body.appendChild( renderer.domElement );

//An object required a geometrical form, a material to color it and a mesh which is an object that takes a geometry and applies a material to it
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 4;

renderer.render( scene, camera );