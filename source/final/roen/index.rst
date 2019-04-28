Three.js
========
Three.js is a 3D graphics API (application programming interface) for
JavaScript [Threejs]_. It is meant as a tool for higher-level programming in
comparison to pure WebGL. It has gained popularity in a variety of projects,
including online games, demonstrations, and models. Three.js gives programmers
an opportunity to develop 3D programs that are organized and readable, while
also offering a significant amount of features to create fantastic projects.
This document will provide the benefits of the Three.js library, along with a
basic example and explanation of how to use Three.js.

History
-------
Ricardo Cabello's first release of Three.js on Github was on April 23, 2010
[Github]_. Two other contributors, Branislav Ulicny and Joshua Koo, were quick
to contribute with their own progress to the project by contributing to
geometry, materials, and post-processing. In the last nine years since Cabello's
first release, there have been over 25,000 commits with assistance from over
1,000 individual contributors.


What Three.js Adds
------------------
Three.js is significantly easier to learn than pure WebGL [Mozilla]_. The lower
barrier to entry is incredibly helpful for users who are new to developing 3D
projects. For experienced developers, Three.js makes it easier to create the
same projects in less time and with less effort. Three.js is specifically meant
for developers who want to work with graphics and animation without having to
worry about how it will interact with hardware. A new developer does not have to
learn any WebGL if they want to start developing a 3D application [Threejs]_.
Instead, they can create the same projects with Three.js in less code and time.

Three.js Example
----------------
The following is a basic example of what can be done using Three.js. There are
three sliders that allow the user to change how the cube rotates on the three
different axes.

.. raw:: html
	<embed>
	
        <html>
			<head>
				<style>
					#threejscanvas
					{
						width: 100%;
						height: 300px;
						margin-bottom: 36px;
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
					}
		   </style>
				<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>Example</title>
				</head>
			<body>
				<div id="sliders">
					<br>
					X Rotation:
					<input type="range" min='-0.1' max=".1" step=".01" value="0.0" class="slider" id="xRotation">
					<br>
					Y Rotation:
					<input type="range" min='-0.1' max=".1" step=".01" value="0.0" class="slider" id="yRotation">
					<br>
					Z Rotation:
					<input type="range" min=-0.1 max=.1 step=.01 value=0.0 class="slider" id="zRotation">
				</div>
				<div id="threejscanvas">
					<div id="gui_container"></div>
					<script src="https://threejs.org/build/three.min.js"></script>
					<script>
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
					</script>
				</div>
			</body>
		</html>


    </embed>
	
	
	
Explaining the Code
-------------------
There are a lot of pieces of this code, but when broken down, it is much easier
to understand what is going on to create this project. To start, we create the
camera, the scene, and the renderer. 

.. code-block:: javascript
	:linenos:
	
	//We use this to set how big of a screen we want our camera to see.
	var innerDiv = document.getElementById("threejscanvas");	
	
	//Creates a new camera.
	var camera = new THREE.PerspectiveCamera(70, innerDiv.offsetWidth / innerDiv.offsetHeight, 1, 1000);
	
	//Sets the "z" coordinate of the camera to 500. By default, the x, y, and z coordinates are 0.
	camera.position.z = 500;

The camera is the same as a camera in real life; it is used to view the project
we are creating. Depending on the angle and position we place the camera, we
can see different parts of our project. In this example, we will not be
modifying the camera any more after this.

When initializing the camera, we set field of view, aspect ratio, near plane,
and far plane values. In this example, we don't utilize any of these besides
the aspect ratio, which we ensure is the ratio our canvas is. The default
location of the camera is (0, 0, 0), so we change the z value to 500. This
will allow us to see our cube that we will be positioning at (0, 0, 0).

.. code-block:: javascript
	:linenos:
	
	//Creates a new scene for adding objects
	var scene = new THREE.Scene();
	
The scene is where we place all of our objects. In our scene, for example, we
will be adding one cube with a specific size and position. If our camera is
pointing at the objects in our scene, then they will be displayed to the user.
We will eventually be modifying the object in our scene by rotating the cube,
which will be updated within our scene.

.. code-block:: javascript
	:linenos:
	
	//Creates a new renderer for creating the visuals
	var renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(innerDiv.offsetWidth, innerDiv.offsetHeight);

Finally, the renderer is used to process our scene. This is the part that uses
WebGL to actually display the scene within our project. Without the renderer,
the scene and project are data that cannot be visualized. We also need to make
sure to set the pixel ratio and size, in order to render the objects in a way
that they aren't distorted in browsers of different size.

.. code-block:: javascript
	:linenos:
		
	//Creates the cube shape
	var geometry = new THREE.CubeGeometry(200, 200, 200);
	
	//Creates the material, or texture, for the shape
	var material = new THREE.MeshNormalMaterial();
	
	//Puts the shape and material together
	var mesh = new THREE.Mesh(geometry, material);

	//Adds the newly created cube with a material into the scene to be displayed
	scene.add(mesh);

Creating an object requires three parts: The geometry, the material, and the
mesh. The geometry is the shape of the object we want. It also stores the
location of the object. In this case, the object's location is the default
(0, 0, 0). In this example, we've created a 200x200x200 cube for our geometry.
The material is the texture of the object. For this example, we are using
MeshNormalMaterial, which is a basic material that shows a simple color spectrum
across the object. However, we could have also added a custom texture in a
similar way. Finally, we put them together in the mesh. The mesh is what we add
to the scene to be displayed.
	
.. code-block:: javascript
	:linenos:
		
	//Adds the scene to our HTML page
	document.getElementById("threejscanvas").appendChild(renderer.domElement);

	//Begins animating the scene
	animate();

These next two lines are incredibly important. The first line adds the scene we
have created into our HTML file using the renderer we created before. This is
what lets us see the project within our HTML page. 

The animate function is used to constantly update our scene. This is where we
begin to add animations; in our case, these animations are rotations of the
cube. However, we could change anything we wanted within our animate function,
whether it be the shape, the material, or the location.
	
.. code-block:: javascript
	:linenos:
		
	//If the window ever gets resized, the size and aspect of the scene will change
	window.addEventListener('resize', onWindowResize);

	function onWindowResize()
	{
		camera.aspect = innerDiv.offsetWidth / innerDiv.offsetHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(innerDiv.offsetWidth, innerDiv.offsetHeight);
	}

This function is not necessary in all cases, but is important in order to have
a responsive webpage. If the window is resized, this function will change the
size and aspect ratio. The updateProjectionMatrix function is necessary after
changing the aspect ratio of the camera so that it can refresh correctly.
	
.. code-block:: javascript
	:linenos:
		
	function animate() {
		//Used to call animate again
		requestAnimationFrame(animate);
		
		//Renders the scene based on the view of the camera
		renderer.render(scene, camera);

		//Gets the rotaion in all three axes directions based on the HTML sliders
		xRotation = document.getElementById("xRotation").value;
		yRotation = document.getElementById("yRotation").value;
		zRotation = document.getElementById("zRotation").value;

		//Adds the rotation value to the cube to allow it to rotate.
		mesh.rotation.x += parseFloat(xRotation);
		mesh.rotation.y += parseFloat(yRotation);
		mesh.rotation.z += parseFloat(zRotation);
	}

Finally, we add the animations that allow the cube to rotate. This is done by
calling the animate function each frame, then modifying the values of the mesh
we created. In this example, we first take the values from the HTML sliders and
put them into three variables: xRotation, yRotation, and zRotation. Next, we add
them to the corresponding rotation values of the mesh. This gets updated every
time animate is called by rendering the scene again, which we also do within
this function. Anything pertaining to modifying the scene can be done within
this function.

Benefits of Three.js
--------------------
Besides the ability for users to develop WebGL programs in an easier,
higher-level language, there are many other benefits to using Three.js. First,
Three.js provides fantastic examples of how to use their library, making the
barrier for entry even easier [Threejs]_. With hundreds of examples available,
it is very likely a developer can find the feature they are looking to add. In
addition, Three.js continues to be constantly updated, meaning there won't be
any issues of the library being outdated in the near future [Github]_. Finally,
the main Three.js package is very light; developers have the option to add other
libraries they may need later on.

Problems with Three.js
----------------------
While this library excels in a variety of ways, there are still some downsides to
using Three.js. There is no official versioning system at this time, meaning the
API still ocasionally changes [Github]_. This could mean an update to a
developer's Three.js library has the potential to completely break any current
projects. While it is unlikely this would occur, it is still something that must be acknowledged.
Three.js also has an online editor [Threejs]_; however, it is poorly implemented
and considered by many to be useless. Developers are better off using the examples
on the website or generating something themselves. Finally, the documentation
for this library is not written very well. It lacks a lot of description that would be
helpful to developers who have just started with developing 3D projects.
Fortunately, the examples provided on the website do a decent job of making up
for the lack of documentation. While there is a lot that Three.js offers in their API, they could ultimately do some more work on how they showcase this work to the developers using it.

Conclusion
----------
Three.js is a great library for users who are beginning their journey into 3D
development, as well as experienced users who are looking for a powerful
library. The higher-level programming makes it significantly easier to create
projects in comparison to pure WebGL [Mozilla]_. Despite a few fallbacks, it is
a great library that I would highly recommend to anyone looking to begin
developing in three dimensions.

Citations
---------
.. [Github] "`GitHub - mrdoob/three.js: JavaScript 3D library <https://github.com/mrdoob/three.js/>`_", r103, Ricardo Cabello, Web 2 April, 2019.
.. [Mozilla] "`WebGL: 2D and 3D graphics for the web <https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API>`_", Scholz, Florian, Mozilla, Web 2 April, 2019.				
.. [Threejs] "`three.js - Javascript 3D library <https://threejs.org/>`_" Cabello, Ricardo, Web 2 April, 2019.