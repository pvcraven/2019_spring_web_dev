Three.js
========
Three.js is a 3D graphics API for JavaScript [Threejs]_. It is meant as a tool
for higher-level programming compared to WebGL [Mozilla]_. It has gained
popularity in a variety of projects, including online games, demonstrations,
and models. Three.js gives programmers an opportunity to develop 3D programs
that are organized and readable, while also offering a significant amount
of features to create fantastic projects. This document will provide the benefits
of the Three.js library, along with a basic example and explanation of how to use
Three.js.

History
-------
* Explain Ricardo Cabello's timeline up to first Github release [Github]_
* Ricardo Cabello released in April 2010
* A few people added to the project [Github]_
* Many contributors help in updating and supporting this project now

What WebGL does
---------------
* WebGL is used to create 2D and 3D graphics in a web browser [Mozilla]_
* Created by Mozilla

What Three.js adds
------------------
Three.js is significantly easier to learn than pure WebGL. The lower barrier
to entry is incredibly helpful for users who are new to developing 3D projects.
For experiences developers, three.js makes it easier to create the same
projects in less time and with less effort. Three.js is specifically meant for
developers who want to work with graphics and animation without having to worry
about how it will interact with hardware. A new developer does not have to learn
any WebGL if they want to start developing a 3D application. Instead, they can
create the same projects with Three.js.

* Don't need to know WebGL [Threejs]_
* Lower learning curve (WebGL is higher-level)

Three.js Example
----------------
.. raw:: html
	<embed>
	
        <html>
			<head>
				<style>
					#threejscanvas
					{
						width: 100%;
						height: 300px;
						margin: 0 auto;
					}

					#main3d
					{
						position: absolute;
						left: 0;
						top: 0;
						text-align: center;
					}

					#gui_container
					{
						position: absolute;
						left: 0;
						top: 0;
						text-align: center;
					}

					#sliders
					{
						text-align: left;
						width: 100%;
					}
		   </style>
				<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>Example</title>
			</head>
			<body>
				<div id="threejscanvas">
					<script src="js/lib/three.js"></script>
					<script src="js/lib/dat.gui.js"></script>
					<div id="gui_container"></div>
					<script src="js/Main.js" id="main3d">
					</script>
				</div>
				<div id="sliders">
					<br>
					X Rotation:
					<input type="range" min="0" max=".2" step=".01" value="0.1" class="slider" id="xRotation">
					<br>
					Y Rotation:
					<input type="range" min="0" max=".2" step=".01" value="0.1" class="slider" id="yRotation">
					<br>
					Z Rotation:
					<input type="range" min="0" max=".2" step=".01" value="0.1" class="slider" id="zRotation">
				</div>
			</body>
		</html>
    </embed>
	
Three.js Example Code
----------------------------
.. code-block:: javascript

    var camera;
	var scene;
	var renderer;

	var innerDiv = document.getElementById("threejscanvas");

	var CANVAS_WIDTH = innerDiv.offsetWidth;
	var CANVAS_HEIGHT = innerDiv.offsetHeight;

	camera = new THREE.PerspectiveCamera(70, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000);
	camera.position.z = 400;

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
		}
	}



Benefits of Three.js
--------------------
Three.js provides fantastic examples of how to use their library [Threejs]_. 

* Lots of examples on the website [Threejs]
* Project health is strong (Lots of commits, questions answered, etc) [Github]
* Lightweight but has the option of adding extensions

Problems with Three.js
----------------------
* No versioning system, meaning API changes more often [Github]
* The online editor is not good
* Lots of examples, but specific documentation is not great [Threejs]

Conclusion
----------

Citations
---------
.. [Github] "`GitHub - mrdoob/three.js: JavaScript 3D library <https://github.com/mrdoob/three.js/>`_", r103, Ricardo Cabello, Web 2 April, 2019.
.. [Mozilla] "`WebGL: 2D and 3D graphics for the web <https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API>`_", Scholz, Florian, Mozilla, Web 2 April, 2019.				
.. [Threejs] "`three.js - Javascript 3D library <https://threejs.org/>`_" Cabello, Ricardo, Web 2 April, 2019.