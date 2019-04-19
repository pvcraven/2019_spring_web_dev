var camera;
var scene;
var renderer;

var innerDiv = document.getElementById("threejscanvas");

var CANVAS_WIDTH = innerDiv.offsetWidth;
var CANVAS_HEIGHT = innerDiv.offsetHeight;

camera = new THREE.PerspectiveCamera(70, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000);
camera.position.z = 800;

scene = new THREE.Scene();
var geometry = new THREE.CubeGeometry(200, 200, 200);
var material = new THREE.MeshNormalMaterial();
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
innerDiv.appendChild(renderer.domElement);

var rotation = {
	x: 0.0,
	y: 0.0,
	z: 0.0,
	reset: function(){rotation.x = 0; rotation.y = 0; rotation.z = 0; mesh.rotation.x = 0; mesh.rotation.y = 0; mesh.rotation.z = 0;}
};

animate();

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = innerDiv.offsetWidth / innerDiv.offsetHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(innerDiv.offsetWidth, innerDiv.offsetHeight);

}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);

	if(document.getElementById("sliders"))
	{
		var xRotation = document.getElementById("xRotation").value;
		var yRotation = document.getElementById("yRotation").value;
		var zRotation = document.getElementById("zRotation").value;

		mesh.rotation.x += parseFloat(xRotation) - .1;
		mesh.rotation.y += parseFloat(yRotation) - .1;
		mesh.rotation.z += parseFloat(zRotation) - .1;

		console.log(mesh.rotation.z);
	}
}
