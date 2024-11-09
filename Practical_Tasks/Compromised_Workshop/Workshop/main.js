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

// 4. Create a Box Geometry and material-> MeshNormalMaterial 
// 5. Use elements from 4. to create Mesh
// 6. Add Mesh to Scene 
// 7. Render scene and the camera with Renderer



// Task 2: Animation

//PART 1 - Object animation
// 1. Copy/paste your own solution or use the sample solution for task 1
// 2. Declare a function animateCube() (after adding the cube mesh to the scene)
// 3. Animate the cube by changing (increasing) its x and y rotation 
// 4. Move the rendering of the scene and camera into the function
// 5. Set renderer AnimationLoop to the function animateCube()
//PART 2 - Camera Animation
// 6. Create new OrbitControls object below the animateCube function
// 7. Set OrbitControls auto rotate to true and the speed to 1 or your own value; do controls.update()
// 8. Declare a function animateCamera()
// 9. Update OrbitControls and render with scene and camera (inside new function)
// 10. Change step 5 to use the function animateCamera()



//Task 3: Load External Model

//1. Remove everything below the line containing "document.body.appendChild( renderer.domElement );"
//2. Load provided GLTF file from model folder (Use GLTFLoader) and add it to the scene (you can also try your own file later)
//3. Add the OrbitControls again
//4. Add an animate function that contains
    //requestAnimationFrame
    //update Orbit controls
    //render with renderer
//5. Call the animate function



//Task 4: Add loading screen

//0. Keep solution for Task 3; Put this below the imports: 
var loadingScreen = {
	scene: new THREE.Scene(),
	camera: new THREE.PerspectiveCamera(90, 1280/720, 0.1, 100),
	box: new THREE.Mesh(
		new THREE.BoxGeometry(0.5,0.5,0.5),
		new THREE.MeshBasicMaterial({ color:0x4444ff })
	)
};

// 1 Create a Loading Manager 
// 2 create a boolean resources_loaded and set it to false
// 3 Set loadingScreen box position; Set camera to look at that box position; Set scene with loadingScreen box 
// 4 Create function for loadingmanager.onLoad that sets resources_loaded to true
// 5 Make sure to pass the loadingManager when using the GLTF Loader
// 6 Inside the animate function, add an if statement thats true when the resources are not loaded. Request animation frame and render the loadingscreen scene and camera.
