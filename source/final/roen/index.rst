Three.js
========

Introduction to Three.js
------------------------
Three.js is a 3D graphics API for JavaScript [Threejs]_. It is meant as a tool for
higher-level programming compared to WebGL [Mozilla]_. It has gained
popularity in a variety of projects, including online games, demonstrations,
and models. Three.js gives programmers an opportunity to develop 3D programs
that are organized and readable, while also offering a significant amount
of features to create fantastic projects.

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
				</div>
			</body>
		</html>
    </embed>

|
|
|
|
|
|	
	
	
Three.js Example Explanation
----------------------------

Benefits of Three.js
--------------------
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