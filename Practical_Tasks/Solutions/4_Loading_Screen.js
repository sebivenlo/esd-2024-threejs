
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// An object to hold all the things needed for our loading screen
var loadingScreen = {
	scene: new THREE.Scene(),
	camera: new THREE.PerspectiveCamera(90, 1280/720, 0.1, 100),
	box: new THREE.Mesh(
		new THREE.BoxGeometry(0.5,0.5,0.5),
		new THREE.MeshBasicMaterial({ color:0x4444ff })
	)
};
var loadingManager = new THREE.LoadingManager();
var RESOURCES_LOADED = false;

// Set up the loading screen's scene.
	// It can be treated just like our main scene.
	loadingScreen.box.position.set(0,0,5);
	loadingScreen.camera.lookAt(loadingScreen.box.position);
	loadingScreen.scene.add(loadingScreen.box);
	
	// Create a loading manager to set RESOURCES_LOADED when appropriate.
	loadingManager.onLoad = function(){
		RESOURCES_LOADED = true;
	};


const scene = new THREE.Scene()
scene.background = new THREE.Color("#ffffff")

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(1.5, 0.75, 2)

const renderer = new THREE.WebGLRenderer({ antialias: true })

renderer.shadowMap.enabled = true
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

var loader = new GLTFLoader(loadingManager)
loader.load('src/Model/shiba/scene.gltf', (gltf) => {
  console.log(gltf)

  scene.add(gltf.scene)

})

function animate() {
  // This block runs while resources are loading.
	if( RESOURCES_LOADED == false ){
		requestAnimationFrame(animate);
		renderer.render(loadingScreen.scene, loadingScreen.camera);
		return; // Stop the function here.
	}
  
  requestAnimationFrame(animate)

  controls.update()

  renderer.render(scene, camera)

}

animate()