
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// An object to hold all the things needed for the loading screen, you can experiment with it
var loadingScreen = {
	scene: new THREE.Scene(),
	camera: new THREE.PerspectiveCamera(90, 1280/720, 0.1, 100),
	box: new THREE.Mesh(
		new THREE.BoxGeometry(0.5,0.5,0.5),
		new THREE.MeshBasicMaterial({ color:0x4444ff })
	)
};

//TODOS
// 1 Create a Loading Manager 
// 2 create a boolean resources_loaded and set it to false
// 3 Set loadingScreen bcamera and scene and box position
// 4 create function for loadingmanager onLoad that sets resources_loaded to true
// 5 Copy/paste your own solution or use the sample solution for task 3
// 6 Make sure to pass the loadingManager when using the GLTF Loader
// 7 Inside the animate function, add an if statement thats true when the resources are not loaded. Request animation frame and render the loadingscreen scene and camera.
