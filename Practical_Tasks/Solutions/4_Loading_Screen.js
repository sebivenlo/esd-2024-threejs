
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

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


new GLTFLoader().load('Model/old_pc.glb', (gltf) => {
  console.log(gltf)

  scene.add(gltf.scene)

})


function animate() {
  requestAnimationFrame(animate)

  controls.update()

  renderer.render(scene, camera)

}

animate()