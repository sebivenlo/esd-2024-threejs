// Basic Elements
import * as THREE from 'three';

//TODOS:
// 1. Create Scene, Camera and Renderer

scene.background = new THREE.Color("#ffffff")

// 2. Set position of camera and have it look at the origin (0,0,0)

// 3. Set renderer size to correct window size

// This line inserts the Three.JS object (Canvas) into the web pages HTML Body. renderer.domElement creates a <Canvas> 
document.body.appendChild( renderer.domElement );

// 4. Create a Box Geometry, MeshNormalMaterial 

// 5. Use elements from 4. to create Mesh

// 6. Add Mesh to Scene 

// 7. Render scene and the camera with Renderer