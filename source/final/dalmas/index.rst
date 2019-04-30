Node.js
=======

.. figure:: img/node.svg

Outline
-------

* Introduction
* History
* Explanation of Node.js
	* Syntax

		* Only using JavaScript vs using Java and JavaScript
	* Single-threaded
	* Speed

		* Asynchronous
		* Chrome V8 JavaScript Engine
	* Libraries
	* How Node.js works.
	* Asynchronous Programming

		* What is Asynchronous Programming?
		* Advantages of asynchronous programming.
		* How does Node.js utilize Asynchronous Programming?
		* Asynchronous programming examples with Node.js.
		* Timers

			* Set Timeout
			* Next Tick
			* Event loop
* Use of Node.js
	* Issues & Solutions

		* Pyramid of Doom
		* Waterfall
	* REPL
	* Express
* Example project using Node.js

	* Screen-shots
	* Code samples
* Conclusion

Introduction
------------

Websites and web applications often require a consistent and secure way to 
distribute resources to its clients through a server for it to have any
meaningful functionality. However, JavaScript only handles client-side
programming. If you wanted to create a client-server network using JavaScript,
you would have to write the server-side code in Java. Node.js solves this issue
by bringing JavaScript to the server-side. Because of the asynchronous design
of Node.js and its Chrome V8 engine, it can be used to create efficient, and 
scalable web applications that have been and will continue to be updated with
additional functionality and libraries.

History
-------

Before Node.js, the most similar thing that allowed server-side JavaScript was
called, "NetScape LiveWire". Unfortunately, there wasn't a large demand for 
server-side JavaScript at the time and NetScape LiveWire was ultimately 
unsuccessful. As JavaScript became more advanced and efficient, the demand for
server-side JavaScript capabilities also increased. This lead to the 
introduction of Node.js in 2009, created by Ryan Dahl. Node.js allows developers 
to create server-side JavaScript through the Node.js runtime environment. 
Shortly after its creation, other important libraries and features were created. 
npm was created in 2009, and both express and socket.io were created in 2010. 
Node.js would continue to be updated with a new stable version every year, with 
Node.js 8 being released in 2017 and Node.js 10 being released in 2018 [NodejsDev]_. 
The odd numbered Node.js versions are considered to be betas and the even
numbered versions are considered as stable builds [LearningNode]_.

Explanation of Node.js
----------------------

What is it?
^^^^^^^^^^^

When creating web applications, most methods require you to utilize Java and 
JavaScript. However, Node.js allows you to make web applications using nothing 
but JavaScript. Node.js is also single-threaded. This is important because
multi-threaded networking tends to be less efficient and is difficult to
implement. Since Node.js is single-threaded it's far less likely to have
thread-related bugs or issues. Despite being single-threaded, Node.js will never
lock because everything is asynchronous. This also allows Node.js to handle 
thousands of requests at the same time. This combination of asynchronous
functions and the fact that Node.js is built on the Chrome V8
JavaScript engine makes it run very fast, even for even large scale 
applications. Node.js has a massive collection of libraries that can be easily
installed through npm. Some popular examples of these libraries are express,
socket.io, koa, Colors, and more. It also allows you to easily create and
implement you own modules. [Nodejs]_

How does it work?
^^^^^^^^^^^^^^^^^

Unlike traditional programming, Node.js doesn't run line by line, it can't
stall. Instead, Node.js relies on something called, "Asynchronous Programming".
Asynchronous Programming isn't necessarily new to Node.js, but Node.js uses it
nearly exclusively. For example, the ``$('#').on("click")`` function which is a
JQuery shortcut for another function in JavaScript, is an Asynchronous Function.
The program doesn't stall while waiting for that function call, rather it calls
that function when that event actually happens. Node.js is composed nearly
entirely of functions like those that are only called when the event happens.
Asynchronous Programming is advantageous because as mentioned earlier, it will
never stall. It allows the website the process multiple things concurrently 
and supports live updates. There are many examples of Asynchronous functions
in Node.js. For instance,

.. code-block:: javascript
	:caption: Hello World

	var http = require('http');

	http.createServer(function(req, res) {
		res.writeHead(200, {'content-type': 'text/plain'});
		res.end("Hello world!\n");
	}).listen(8124);

This is a basic Hello World program in Node.js. The listen method is
asynchronous, it is only called when the connection to the port is established.
[LearningNode]_

So how do these asynchronous functions work? Node.js relies on callbacks and 
operates with something called, "The Event Loop". The Event Loop operates in 
a series of phases. These phases can best be described with the following
picture:

.. figure:: img/event_loop.png
	
	[EventLoop]_

So, the data starts by going to the poll phase which simply receives input
or data. Next, it goes to the check phase which is where setImmediate() 
callbacks are executed. Then any callbacks involving disconnections or closings 
are called in the close callbacks phase. Then it runs all the callbacks defined 
by the timers. For example, through setTimeout() or setInterval(). Lastly, it 
runs any other callbacks that are still pending in the pending callbacks phase.
There's also the idle, prepare phase but these can't be influenced since they
run internally. [EventLoop]_

Timers can be used to delay the execution of some function. The most common way
to accomplish this is through setTimeout() or setInterval(). The difference
between these two is that setTimeout() runs once after the designated time, and 
setInterval() will continue running indefinitely with the interval as the
designated time. For example, the following code will print out, "Hello World!"
to the Node.js server console 1000 milliseconds after the program starts.

.. code-block:: javascript
	:caption: Hello World

	function hello(res) {
		console.log("Hello World!");
	}

	setTimeout(hello, 1000);

The following uses setInterval() instead, in this example it prints out, "Hello
World!" every 1000 milliseconds indefinitely.

.. code-block:: javascript
	:caption: Hello World

	function hello(res) {
		console.log("Hello World!");
	}

	setInterval(hello, 1000);

[LearningNode]_

Use of Node.js
--------------

What are its disadvantages?
^^^^^^^^^^^^^^^^^^^^^^^^^^^

While Node.js has many advantages, it also has some issues. One major issue with
Node.js is that by design, it does not fair well with applications that are
computationally expensive. For example, Node.js would not be a good choice for
optimization problems, or a GPS navigation application that has to calculate the 
best path to some destination. Due to the asynchronous nature of Node.js, the 
code structure can quickly become a mess of nested callbacks sometimes refered 
to as, "The Pyramid of Doom". However, this issue can be easily fixed by having 
callbacks call outside functions rather than putting the code inside the actual 
callback. An even better solution is to use the Waterfall feature of the Async 
module. [LearningNode]_

REPL
^^^^

There's a more efficient way to develop or test Node.js by using an interactive
component called, "REPL". You can start REPL by simply typing, "node" into the
Node.js console. REPL is very similar to the console found in Google Chrome's
development console. You can simply type in some JavaScript and run it, with no
need to mess with files. The following example demonstrates how REPL works.

.. code-block:: javascript
	:caption: Example Node.js console using REPL

	> var example = 10;
	undefined
	> console.log(example);
	10
	undefined
	>

The > designates a new lines, so in this example the user enters 
``var example = 10;`` and later types ``console.log(example);`` in another line
which returns the result of the variable ``example``. [LearningNode]_

REPL is a great tool for debugging and figuring out what's happening with your
Node.js code. It also supports various libraries such as rlwrap which allows you
to change the color of the text, along with other useful modifications. REPL
also has custom commands such as .save which saves your REPL session into a
file, allowing you to develop entire projects in REPL. Some other commands
include the following, [LearningNode]_

* .break Resets multi-line entries.
* .clear Resets everything.
* .exit Exits REPL.
* .help Lists all REPL commands.
* .load Loads a previously saved REPL session.

Node.js also supports the capability to create custom REPL. You create it like
a normal Node.js file but start it with ``var repl = require("repl");``.
Then you can create the custom REPL by using 
``repl.start([prompt], [stream], [eval], [useGlobal], [ignoreUndefined])``.
Doing this will run everything defined in repl.start after running the file.
[LearningNode]_

*Always save often while using REPL*

Example Project
---------------

This is a project that was created with Node.js, socket.io, and express. It's
called, "Public Pixel Art" and is a web app that allows multiple people to all
connect to a single chat where they can all draw pixel art on the same canvas. 
The following is the client-side code for the HTML page:

.. literalinclude:: node/index.html
    :linenos:
    :language: HTML
    :caption: Client Side Code for Public Pixel Art
    :emphasize-lines: 5

The following is the server-side Node.js code:

.. literalinclude:: node/index.js
    :linenos:
    :language: JavaScript
    :caption: Server Side Code for Public Pixel Art
    :emphasize-lines: 5

Conclusion
----------

In Conclusion, Node.js is a great tool for full-stack developers and for 
creating efficient, fast, and scalable web applications. Its support through 
libraries such as socket.io, express, and more allow you to easily implement 
features that would be complicated to create in other languages. Node.js is 
constantly being updated and it is continuing to advance. Its asynchronous
design prevents it from stalling or blocking through I/O. All around, Node.js
is a great runtime environment if you want to quickly create a quality web 
application.

Citations
---------

.. [Nodejs] Node.js Foundation. "`Node.js <https://nodejs.org/en/>`_" Joyent Inc, Web. 2 April. 2019.

.. [NodejsDev] Node.js Foundation. "`Node.js Dev <https://nodejs.dev/a-brief-history-of-nodejs>`_" Joyent Inc, Web. 2 April. 2019.

.. [LearningNode] Powers, Shelly, *Learning Node*. Sebastopol, O'Reilly, 2015.

.. [EventLoop] Node.js Foundation. "`Node.js Event Loop <https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/>`_" Joyent Inc, Web. 19 April. 2019.

