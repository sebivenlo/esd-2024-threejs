// Basic Elements
import * as THREE from 'three';

//TODO:
// 1. Create Scene, Camera and Renderer
// 2. Set renderer size to correct window size

// This line inserts the Three.JS object (Canvas) into the web pages HTML Body. renderer.domElement creates a <Canvas> 
document.body.appendChild( renderer.domElement );

// 3. Create a Box Geometry, MeshBasicMaterial 
// 4. Use elements from 3. to create Mesh
// 5. Add Mesh to Scene 

camera.position.z = 4;


// 6. Render scene and the camera with Renderer