var innerDiv = document.getElementById("threejscanvas");

var camera = new THREE.PerspectiveCamera(70, innerDiv.offsetWidth / innerDiv.offsetHeight, 1, 1000);
camera.position.z = 500;

var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(innerDiv.offsetWidth, innerDiv.offsetHeight);

var geometry = new THREE.CubeGeometry(200, 200, 200);
var material = new THREE.MeshNormalMaterial();
var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

document.getElementById("threejscanvas").appendChild(renderer.domElement);

animate();

window.addEventListener('resize', onWindowResize);

function onWindowResize()
{
    camera.aspect = innerDiv.offsetWidth / innerDiv.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerDiv.offsetWidth, innerDiv.offsetHeight);
}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);

	xRotation = document.getElementById("xRotation").value;
	yRotation = document.getElementById("yRotation").value;
	zRotation = document.getElementById("zRotation").value;

	mesh.rotation.x += parseFloat(xRotation);
	mesh.rotation.y += parseFloat(yRotation);
	mesh.rotation.z += parseFloat(zRotation);
}
