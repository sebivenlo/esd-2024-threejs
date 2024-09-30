# ThreeJS Cheat Sheet

For more information see: https://threejs.org/docs/#manual/en/introduction/Installation


| Action                                                                                                          | command |
|--------------------------------------------------------------------------------------------------------------------|------|
| Run vite localhost | npx vite     |
| Create Scene                                            | new THREE.Scene()     |
| Create Camera                                                        |  new THREE.PerspectiveCamera( fieldOfView, aspectRatio, nearClippingPlane, farClippingPlane )     |
| Create Renderer                                 | new THREE.WebGLRenderer()    |
| Center camera at origin                                         | camera.lookAt(0,0,0)    |
| Create OrbitControls                                        | new OrbitControls(camera, renderer.domElement)    |
|                                            |     |
