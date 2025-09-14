import * as THREE from 'three';

//##########################################################################################################THREE

//-Colors--------------------------------------------------------------------------------------------------------

const starColor = new THREE.Color(0x000000);
const redColor = new THREE.Color(0xBE1522);
const bgColor = new THREE.Color(0xffffff);

//-Scene---------------------------------------------------------------------------------------------------------

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);


//-Camera--------------------------------------------------------------------------------------------------------

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.setZ(30);
camera.position.setX(-3);

//-Render--------------------------------------------------------------------------------------------------------

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas-id'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);


//-Lights--------------------------------------------------------------------------------------------------------

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//-Cubo----------------------------------------------------------------------------------------------------------

const box_geometry = new THREE.BoxGeometry(5, 5, 5);
const box_material = new THREE.MeshStandardMaterial({ color: redColor, roughness: 1, wireframe: true });

const box_mesh = new THREE.Mesh(box_geometry, box_material);
const box_mesh1 = new THREE.Mesh(box_geometry, box_material);
const box_mesh2 = new THREE.Mesh(box_geometry, box_material);
const box_mesh3 = new THREE.Mesh(box_geometry, box_material);

scene.add(box_mesh);

box_mesh1.scale.set(2.5, 2.5, 2.5);
box_mesh1.position.set(62, 6, -50);

scene.add(box_mesh1);

box_mesh2.scale.set(.8, .8, .8);
box_mesh2.position.set(-48, -8, -20);

scene.add(box_mesh2);

box_mesh3.scale.set(.7, .7, .7);
box_mesh3.position.set(-18, -25, -20);

scene.add(box_mesh3);

//-Stars---------------------------------------------------------------------------------------------------------

function addStar() {
  const star_geometry = new THREE.BoxGeometry(.2, .2, .2);
  const star_material = new THREE.MeshStandardMaterial({ color: 0x000000, transparent: true, opacity: 0.2, wireframe: true });
  const star_mesh = new THREE.Mesh(star_geometry, star_material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star_mesh.position.set(x, y, z);
  star_mesh.rotation.set(x, y, z);

  scene.add(star_mesh);
}

Array(200).fill().forEach(addStar);

//-Random_Stars--------------------------------------------------------------------------------------------------

function RandomStars() {
  const randomStar_geometry = new THREE.BoxGeometry(.1, .5, .1);
  const randomStar_material = new THREE.MeshPhongMaterial({ color: 0x000000 });
  const randomStar_mesh = new THREE.Mesh(randomStar_geometry, randomStar_material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  randomStar_mesh.position.set(x, y, z);
  scene.add(randomStar_mesh);
}

Array(300).fill().forEach(RandomStars);


//-Animation_Loop------------------------------------------------------------------------------------------------

function animate() {
  requestAnimationFrame(animate);
  
  box_mesh.rotation.x += 0.001;
  box_mesh.rotation.y += 0.002;
  box_mesh.rotation.z += 0.011;
  
  box_mesh1.rotation.x += 0.002;
  box_mesh1.rotation.y -= 0.001;
  box_mesh1.rotation.z += 0.014;
  
  box_mesh2.rotation.x -= 0.003;
  box_mesh2.rotation.y -= 0.001;
  box_mesh2.rotation.z -= 0.012;
  
  box_mesh3.rotation.x += 0.002;
  box_mesh3.rotation.y -= 0.001;
  box_mesh3.rotation.z += 0.014;
   
  renderer.render(scene, camera);
}

animate();

window.scene = scene;
window.starColor = starColor;
window.bgColor = bgColor;

//-Responsive-----------------------------------------------------------------------------------------------------

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.updateColors = (newStarColor, newBgColor) => {
  // cambiar color de fondo
  scene.background = new THREE.Color(newBgColor);

  // recorrer todos los objetos de la escena
  scene.traverse((obj) => {
    if (obj.isMesh && obj.material) {
      if (obj.material.color) {
        // si es estrella la pintamos con starColor
        if (obj.geometry.parameters.width === 0.2) {
          obj.material.color.set(newStarColor);
        }
      }
    }
  });
};
