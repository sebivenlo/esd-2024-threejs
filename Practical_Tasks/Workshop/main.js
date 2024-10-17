import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// Task 1: Basic Elements
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



// Task 2: Animation

//PART 1 - Object animation
// 1. Copy/paste your own solution or use the sample solution
// 2. Declare a function animateCube()
// 3. Animate the cube by changing (increasing) its x and y rotation 
// 4. Move the rendering of the scene and camera into the function
// 5. Set renderer AnimationLoop to the function animateCube
//PART 2 - Camera Animation
// 6. Create new OrbitControls object below the animateCube function
// 7. Set OrbitControls auto rotate to true and the speed to 1 or your own value; do controls.update()
// 8. Declare a function animateCamera()
// 9. Update controls and render with scene and camera (inside function)
// 10. Change the name of an animate function inside the AnimationLoop to animateCamera



//Task 3: Load External Model

//1. Setup scene, light, camera, renderer and controls
//2. Load provided GLTF file from model folder and add it to the scene (you can also use your own file)
//3. Animate the model



//Task 4: Add loading screen

// 1 Create a Loading Manager 
// 2 create a boolean resources_loaded and set it to false
// 3 Set loadingScreen bcamera and scene and box position
// 4 create function for loadingmanager onLoad that sets resources_loaded to true
// 5 Copy/paste your own solution or use the sample solution for task 3
// 6 Make sure to pass the loadingManager when using the GLTF Loader
// 7 Inside the animate function, add an if statement thats true when the resources are not loaded. Request animation frame and render the loadingscreen scene and camera.
