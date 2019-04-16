NodeJS
======

Outline
-------
* Intro - What is NodeJS and how it works
* History
* Why NodeJS?
* How to install?
* Starting Node JS - making
* Connecting NodeJS with MySQL
* Event Loops
* What companies use NodeJS
* Adoption and Application
* Common Practices of NodeJS
* Advantages and disadvantages of NodeJS
* Node vs Angular
* Debugging
* Conclusion

Intro
-----
[Tod]_
[Capan]_
[Moore]_
[Shah]_
[Goldspink]_
[Thinkmobiles]_
[Tutorialspoint]_

Node.js is a server-side platform thats build from Google Chrome's JavaScript Engine.
Node.js is open source, cross-platform runtime environment for developing on the
server-side. Node.js is written in JavaScript and can be ran on OS X, Microsoft,
Windows, and Linux. [Tutorialspoint]_

Node.js also priveds a library with many JavaScript modules which simplifies the
creation of web applications.

Node.js uses non-blocking, even-driven input/output to remain efficient in data-
intensive real-time applications that runs across many devices.

History
-------
Node.js was first created by Ryan Dahl and was developed and maintained by Dahl
which later got sponsored and supported by Joyent(What is joyent). Dahl created
Node.js because he had a distaste about the way Apache Http server used to handle
a lot of concurrent connections and how the code being created was either
blocked by the entire process or implied multiple execution stacks.[Thinkmobiles]_

Getting starting on installing Node.js
--------------------------------------

Starting off, if you're installing Node.js on Windows then you can just go to
nodejs.org and download, follow the prompts and you're set. A thing to take note
is that the default path that it is installed at is ``C:\Program Files\nodejs\bin``
that will be the Node.js directory.

On the other hand if you're installing on UNIX/Linux/Mac OS X or SunOS you'll
first need to download and extract the archive into /temp, and move the extracted
files into a specified directory directory for Node.js.

.. code-block:: text
    :Caption: Command Code

    $ cd /temp
    $ wget http://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz
    $ tar xvfz node-v10.15.3-linux-x64.tar.xz
    $ mkdir - /usr/local/nodejs
    $ mv node-v10.15.3-linux-x64/* /user/local/nodejs

After it is installed, just to make sure its installed in working validate it by
executing a file. You can easily do this by making a file like test.js on your machine
and have some test code like following.

.. code-block:: javascript
    :Caption: Test for Installation

    console.log("This is a test.")

After that execute test.js on the Node.js interpreter to see the result.

.. code-block:: text
    :Caption: Executing test

    $ node test.js

If it is installed correctly it should print.

.. code-block:: text
    :Caption: Executing test

    This is a test.

Getting an application started
------------------------------
Next up to create the server you will have to call on the http module and then use
that to create a server and bind it to a port.

.. code-block:: javascript
    :Caption: First Application

    var http = require("http");

    http.createServer(function(request, response){
    response.writeHead(500, {'Content-Type': 'text/plain'});
    response.end('Test');
    }).listen(8080);
    console.log("First application instance");

Line one uses the require directive to store the returned HTTP instance into an
http variable from http module. On line three is where you create an http instance,
this is done by calling the ``http.createServer()`` method that creates the server
instance and then on line six you bind it to port 8080. By default, once you start
the server it'll automatically go to ``http://127.0.0.1:8080`` in a web browser.
What should show is what you put into ``response.end()`` on line five. To stop the
server instance, just hit ``Ctrl+c`` in the command line.

Node.js virtual environment
---------------------------
Node.js comes with a virtual environment called REPL (also Node shell). REPL is
the abbreviation of Read-Eval-Print-Loop. Its a way to quickly test simple
Node.js/JavaScript code.

To start up REPL is as easy as just typing node into the command console. After
typing node and hitting enter, you're able to run JavaScript, use variables and
multiline expressions.

REPL Commands
~~~~~~~~~~~~~
================    ================================================
Command             Action
================    ================================================
ctrl+c              Terminates current command
ctrl+c twice        Terminate the Node REPL
ctrl+d              Terminate Node REPL
up & down keys      See command history and modify previous commands
tab Keys            List of current commands
.help               List all commands
.break              Exit from multiline expression
.clear              Exit multiline expression
.save "filename"    Save current Node REPL session
.load "filename"    Load file content into current Node REPL session
================    ================================================

.. note::

    As an add on to get the last result ``_`` can be used to get that.

Node Package Manager (NPM)
--------------------------
NPM has two main functionalities, online repositories for node.js pakcages and
modules, and command line utility to install Node.js packages, do version 
management and dependency management.

To check the current version of NPM just do the type the following in the command
console-

.. code-block:: text
    :Caption: Checking Version

    npm --version

If it is an old version of NPM you can update the following command-

.. code-block:: text
    :Caption: Update NPM Version

    $ sudo npm install npm -g
    /usr/bin/npm -> /usr/lib/node_modules/npm/bin/npm-cli.js
    npm@6.4.1 /usr/lib/node_modules/npm

Code used from [Tutorialspoint]_

Installing Modules
~~~~~~~~~~~~~~~~~~
Next up to install a module and use it in a JavaScript file, in the command line
type-

.. code-block:: text
    :Caption: Install prompt

    npm install <Module Name>

Next go to JavaScript and type in the following-

.. code-block:: javascript
    :Caption: Using the Module

    var variableName = require('/path/to/file')

In the code above we use the require function which is a module in Node that is 
on a global scope so it's always available. The require is the command that calls
on the modules where they're located locally. [Buna]_

By default NPMs installs any dependency in the local mode. Where the local mode
refers to the package installation in node_modles directory in the folder where 
Node is present. To globally install a module use-

.. code-block:: text

    npm install "modulename" -g

This will store the packages and dependencies in system directory and cannot be 
imported using require() in the Node application directly.

.. note::

    To check all modules installed us ``npm ls`` and ``npm ls -g`` to check globally
    installed packages.

Uninstalling, Updating, Searching a Module
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Uninstalling, updating and searching a module is simple and can easily be done by
doing the following -

.. code-block:: text
    :linenos:
    :Caption: Update, uninstall, search

    $ npm uninstall "ModuleName"

    $ npm update "ModuleName"

    $ npm search "ModuleName"

Creating Modules
~~~~~~~~~~~~~~~~
Now that the basics are done, the user can also create a module. This requires
that package.json to be generated and using NPM will generate a basic skeleton
of package.json.


=================

Sources
-------
.. [Tod] Robert Tod "`Tutorial: Setting up Node.js with a database <https://hackernoon.com/setting-up-node-js-with-a-database-part-1-3f2461bdd77f>`_" Hackernoon, Web. 07 May, 2017
.. [Capan] Tomislav Capan "`Why the hell would I use Node.js? <https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js>`_" Topical, Web. 13 Aug. 2013
.. [Moore] Mark Ronald Moore "`Top-10 Code examples for Node.js developers <https://bytescout.com/blog/node-js-code-examples.html>`_" Bytescout, Web. 04 Apr, 2019
.. [Buna] Samer Buna "`Requiring modules in Node.js: Everything you need to know <https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8>`_" Freecodecamp, Web. 19 Mar, 2017
.. [Shah] Hezbullah Shah & Tariq Soomro. Node.js Challenges in Implementation, 2017
.. [Goldspink] Matt Goldspink "`Node.js Best Practices <https://www.codementor.io/mattgoldspink/nodejs-best-practices-du1086jja>`_" Codementor, Web. 28 Aug, 2016
.. [Thinkmobiles] "`Why use Node.js - look behind the scenes of web development <https://thinkmobiles.com/blog/why-use-nodejs/>`_" Thinkmobiles, Web. 04 Apr, 2019
.. [Tutorialspoint] "`Node.js Tutorial <https://www.tutorialspoint.com/nodejs/>`_" Tutorialspoint, Web. 02 Apr. 2019