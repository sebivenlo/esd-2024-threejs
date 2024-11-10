# ThreeJS Cheat Sheet
Click link -> hold control + left mouse click
For more information see: https://threejs.org/docs/#manual/en/introduction/Installation

Three.js Creating a scene - https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
Three.js Loading 3D model - https://threejs.org/docs/#manual/en/introduction/Loading-3D-models
Three.js OrbitControls - https://threejs.org/docs/#examples/en/controls/OrbitControls
MDN requestAnimationFrame - https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
LoadingManager https://threejs.org/docs/#api/en/loaders/managers/LoadingManager

| Action                                                                                                          | command |
|--------------------------------------------------------------------------------------------------------------------|------|
| Run vite localhost | npx vite     |
| Create Scene                                            | new THREE.Scene()     |
| Create Camera                                                        |  new THREE.PerspectiveCamera( fieldOfView, aspectRatio, nearClippingPlane, farClippingPlane )     |
| Create Renderer                                 | new THREE.WebGLRenderer()    |
| Center camera at origin                                         | camera.lookAt(0,0,0)    |
| Create OrbitControls                                        | new OrbitControls(camera, renderer.domElement)    |
|                                            |     |
