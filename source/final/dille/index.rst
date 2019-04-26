NodeJS
======

Introduction
------------
Node.js runs on a cross-platform of JavaScript’s runtime environment. It was
made to fix many problems like platforms and the performance in network
communication time, and helps to reduce the time it takes to process web requests
and responses. Node.js runs the V8 JavaScript engine which can leverage the work
of engineers which makes this software perfect for real-time applications that
run across distributed devices. This examination of Node.js highlights the
details about Node.js and why you should use it and sample code to help you
better understand why Node.js is growing in popularity. [IntroNodeJS]_


History of topic
----------------
Node JS was made in 2010, which makes it only 10 years old. JavaScript, on the
other hand, is 24 years old. Node.js was written by Ryan Dahl and other developers
working at Joyent, a software company that specializes in application virtualization
and cloud computing, in 2009. The first release of Node.js only supported Linux and
Mac OS. Two years later the Node Package Manager, or NPM, was released which
allowed for the sharing of open source libraries. Dahl was not happy with the
way Apache Http servers handled concurrent connections and the way code was
being created. This inspired him to create the Node.js project which he publicly
showed at the inaugural European JSConf on November 8, 2009. This showing gave
him and Node.js a lot of publicity and won him a standing ovation. [IntroNodeJS]_

In June 2011, Microsoft worked with Joyent to implement a Windows version of
Node.js. In 2012, Dahl stepped aside and promoted the creator of NPM Isaac
Schlueter to take over the project. Two years later, Fedor Indutny started a
fork of Node.js called io.js. This caused much conflict at Joyent so a neutral
Node.js foundation was created. In June 2015, the Node.js and io.js communities
decided to work together under this newly formed Node.js foundation. [IntroNodeJS]_

What is nodeJS
--------------

Based on the official Node.js documentation, Node.js is defined as “a platform
built on Chrome's JavaScript runtime for easily building fast and scalable
network applications. Node.js uses an event-driven, non-blocking I/O model
that makes it lightweight and efficient, perfect for data-intensive real-time
applications that run across distributed devices.” This server-side platform
is built on Google Chrome’s JavaScript V8 Engine. Node.js is an open source,
cross-platform runtime environment for developing server-side and networking
applications. Most Node.js applications are written in JavaScript but can run on
multiple operating systems like Windows, Linux, and X. [Node.jsIntroduction]_

Features
--------

There are many features and reasons that software architects should make
Node.js their first choice of software to use. Being built on Google Chrome’s V8
JavaScript Engine makes the library and code execute very fast. Its I/O is
Asynchronous and Event Driven which makes the APIs of Node.js all asynchronous
and non-blocking. This makes it so a Node.js server will never have to wait for
an API to return data. Since Node.js has the event mechanism that helps the
server respond in a non-blocking way it makes Node.js very scalable. [WhyUseNodeJS]_

Along with these features of Node.js, it is also single threaded, has no
buffering, and is open source. All of these are great features that give Node.js
the leg up against its competitors and ultimately is a top choice for this kind
of software. [Node.jsIntroduction]_

Who uses it
-----------

Node.js is used by some of the largest corporations in the world. It is used
by applications and businesses that you use in your everyday life like Netflix,
Walmart, Microsoft, Uber, PayPal, LinkedIn, EBAY, NASA, and much more.

Advantages and disadvantages
----------------------------

As stated before, there are many benefits to using Node.js opposed to the
other popular server-side programming languages. Node.js offers easy scalability.
Applications can be scaled easily in horizontal and vertical directions and
makes it very easy to add nodes to the existing system. Node.js is also very
easy to learn. Since JavaScript is such a popular programming language, most
developers already have knowledge on it and makes it much easier to start using
Node.js at the back-end. This saves a lot of time learning how to use Node.js
because most people will already have experience with JavaScript. [NodeJSWebApp]_

Node.js includes other benefits like Fullstack JS, which offers a high
performance, support from a large and active community, caching, freedom
to develop apps, commonly used tools, handles requests simultaneously, and is
highly extensible.

These are just some of the reasons that make Node.js stand out to its
competition, but not every aspect of Node.js is a positive. One of the main problems
that developers face is that the Application Programming Interface (API) keeps on
changing and is not stable. This can result in the developers being forced to
make changes to accessible code bases to match the latest version of the Node.js
API which is a waste of time and very repetitive and inefficient. Node.js also
does not have a strong library support system. Node.js has also adapted an
asynchronous programming model. With there being more advantages for
developers in comparison to other languages, Node.js is being adopted by more
and more business organizations and is gaining extreme popularity. [NodeJSWebApp]_

Before NodeJS
-------------

Before Node.js, the way JavaScript ran on servers was very inefficient.
Users would have to use Netscape’s LiveWire Server or Microsoft’s Active
Server Pages (ASP). If they were not using one of these two then they would have
to use other third-party server products that supported JavaScript. [BeforeNodeJS]_

Microsoft’s software started dying out in 2002, when Microsoft replaced ASP
with ASP.NET. This replacement software favored using C# instead of JavaScript
which made it lose popularity at a very rapid rate. Before Node.js, JavaScript
never communicated with the database. The only option at this time was to have a
backend language like PHP, ASP, JSP, and others retrieve data from the database
and send the data to JavaScript. [BeforeNodeJS]_

How it works
------------

Node.js operates asynchronously and uses event-loop mechanisms to function. If
you look at the example below, you will see that when socket.listen(4000)
executes, a Web-Socket server is created on a single thread event loop which
listens continuously on port 4000 until told otherwise. When you connect to the
server, the program runs the “onConnection” event which the loop picks up and
publishes the data to the thread pool. This is the main difference between
Node.js and other servers. Other servers have to create a new thread every
time you want to connect to a server. With Node.js, it receives all the
requests on a single thread and then delegates them to be handled by
background workers. [SingleThreadMechanism]_

Single thread mechanism code example
------------------------------------

.. code-block:: JavaScript
    :caption: Single Thread Mechanism Code

    var sockets = require('websocket.io'), httpServer = sockets.listen(4000);
    httpServer.on('onConnection', function (socket) {
    console.log('connected……');
    httpServer.send('Web socket connected.');
    httpServer.on('message', function (data) {
    console.log('message received:', data);
    });
    httpServer.on('close', function () {
    console.log('socket closed!');
    });
    });



What makes it unique
--------------------

Node.js has a unique advantage compared to its competitors. Millions of frontend
developers that write JavaScript for the browser are not able to write the
server-side code and the client-side code without needing to learn and implement
a different programing language or software. Node.js is also able to handle
thousands of connections with a single server without having to manage thread
concurrency. This is significantly more efficient and reduces a large number of
bugs that would occur if managing thread concurrency was implemented. [IntroNodeJS]_

Sample code
-----------

.. code-block:: JavaScript
    :caption: Example Code

    //server.js
	const http = require('http'),
	      url = require('url'),

	makeServer = function (request,response){
	   let path = url.parse(request.url).pathname;
	   console.log(path);

	   if(path === '/'){
	      response.writeHead(200,{'Content-Type':'text/plain'});
	      response.write('Hello world');
	   }
	   else if(path === '/about'){
	     response.writeHead(200,{'Content-Type':'text/plain'});
	     response.write('About page');
	   }
	   else if(path === '/blog'){
	     response.writeHead(200,{'Content-Type':'text/plain'});
	     response.write('Blog page');
	   }
	   else{
	     response.writeHead(404,{'Content-Type':'text/plain'});
	     response.write('Error page');
	   }
	   response.end();
	 },
	server = http.createServer(makeServer);
	server.listen(3000,()=>{
	 console.log('Node server created at port 3000');
	});

As you can see in the example above, this is a simple example of Node.js code.
If you go to “localhost:3000” and then go to “localhost:3000/about” or any of
the other examples above, it will take you to separate pages with different
messages. If you do something like “localhost:3000/pagedoesntexist” it will
give you an error page because we did not make this above in the code. This
makes it so we can easily start a server, but this is inefficient to do every
time you need a new web page on your server. This is just a simple example of
how to get things started. [NodeJSTutorials]_


Conclusion
----------

Node.js has transformed the usability of JavaScript, making Node.js a complete
and efficient programming langauge. Its I/O is Asynchronous and Event Driven
which makes the APIs of Node.js all asynchronous and non-blocking and increases
its overall efficiency. With all the advantages that Node.js brings to programming,
its obvious to see why many large corporations take advantage of its benefits.
All things considered, Node.js is an amazing open source, cross-platform runtime
environment that excels at developing server-side and networking applications
and continues to show why it is so efficient and popular in so many real world
scenarios.


Sources
-------

.. [IntroNodeJS] Node.JS Intro "`Introduction <https://nodejs.dev/introduction-to-nodejs>`_" Google, Web 4/2/2019

.. [Node.jsIntroduction] Node.JS Introduction "`Introductions <https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm>`_" Google, Web 4/4/2019

.. [NodeJSwebapp] Node.JS Advantages "`Advantages and disadvantages <https://www.mindinventory.com/blog/pros-and-cons-of-node-js-web-app-development/>`_" Google,Web 4/4/2019

.. [WhyUseNodeJS] Why use Node.JS "`Why use NodeJS <https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js>`_" Google, Web 4/4/2019

.. [NodeJSTutorials] Node.JS Tutorials "`Tutorials <https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219>`_" Google, Web 4/4/2019

.. [BeforeNodeJS] Before Node.JS "`Before NodeJS <https://www.quora.com/Before-Node-js-was-created-how-did-JavaScript-communicate-with-a-database>`_" Google, Web 4/4/2019

.. [SingleThreadMechanism] Node.JS Code "`Single Thread <https://codeburst.io/how-node-js-single-thread-mechanism-work-understanding-event-loop-in-nodejs-230f7440b0ea>`_" Google, Web 4/4/2019