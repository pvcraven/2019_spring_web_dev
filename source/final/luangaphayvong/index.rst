NodeJS
======

* Intro
* History
* Getting started with Node.js installation
* Getting an application started
* Node.js virtual environment (REPL)
* Node Package Manager
* Setting up Node.js with MySQL
* Conclusion

Intro
-----
Node.js is a helpful run-time environment that is able to quickly and easily run
JavaScript code and this tutorial will show how to set up Node.js from with things
like, installation, REPL commands, Node package manager, and setting up Node.js 
with MySQL for database queries.

Node.js is a server-side platform built from Google Chrome's JavaScript Engine.
Node.js is open source, cross-platform runtime environment for developing on the
server-side. Node.js is written in JavaScript and can be ran on OS X, Microsoft,
Windows, and Linux. [Tutorialspoint]_

Node.js also provides a library with many JavaScript modules which simplifies the
creation of web applications.

Node.js uses non-blocking, even-driven input/output to remain efficient in data-
intensive real-time applications that runs across many devices.

History
-------
Node.js was first created by Ryan Dahl and was developed and maintained by Dahl
which later got sponsored and supported by Joyent. Dahl created Node.js because 
he had a distaste about the way Apache Http server used to handle a lot of 
concurrent connections and how the code being created was either blocked by the 
entire process or implied multiple execution stacks. [Thinkmobiles]_

Getting started on Installing Node.js
--------------------------------------

Starting off, if you're installing Node.js on Windows then you can just go to
nodejs.org and download, follow the prompts and you're set. A thing to take note
is that the default path that it is installed at is ``C:\Program Files\nodejs\bin``
that will be the Node.js directory.

On the other hand if the user installing on UNIX/Linux/Mac OS X or SunOS they'll
first need to download and extract the archive into /temp, and move the extracted
files into a specified directory directory for Node.js.

.. code-block:: text
    :Caption: Command Code

    $ cd /temp
    $ wget http://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz
    $ tar xvfz node-v10.15.3-linux-x64.tar.xz
    $ mkdir - /usr/local/nodejs
    $ mv node-v10.15.3-linux-x64/* /user/local/nodejs

To make sure it's installed and working validate it by
executing a file. The user can easily do this by making a file like test.js on 
their machine and have some test code like following.

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

Getting an Application Started
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
http variable from http module. On line three is where you create an http instance
by calling the ``http.createServer()`` method that creates the server
instance and then on line six you bind it to port 8080. By default, once the user
starts the server it'll automatically go to ``http://127.0.0.1:8080`` in a web 
browser. The result should be what you put into ``response.end()`` on line five. 
To stop the server instance, just hit ``Ctrl+c`` in the command line.

Node.js Virtual Environment
---------------------------
Node.js comes with a virtual environment called REPL (also Node shell). REPL is
the abbreviation of Read-Eval-Print-Loop. Its a way to quickly test simple
Node.js/JavaScript code.

To start up REPL is as easy as just typing node into the command console. After
typing node and hitting enter, the user will able to run JavaScript, use variables 
and multiline expressions.

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

    As an add on to get the last result, "``_``" can be used to get that.

Node Package Manager (NPM)
--------------------------
NPM has two main functionalities: online repositories for node.js packages and
modules, and command line utility to install Node.js packages, and do version 
management and dependency management.

To check the current version of NPM just do the type the following in the command
console-

.. code-block:: text
    :Caption: Checking Version

    npm --version

If it is an old version of NPM the user can update using the following command-

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


Package.json
~~~~~~~~~~~~
package.json is in the root directory of any Node application/module and is used
to define properties of a package.

Attributes of Package.json
~~~~~~~~~~~~~~~~~~~~~~~~~~

* Name - name of the package
* Version - version of the package
* Description - Description of the package
* Homepage - Homepage of the package
* Author - Author of the package
* Contributors - Name of contributors to the package
* Dependencies - List of dependencies
* Repository - Repository type and URL of the package
* Main - Entry point of the package
* Keywords - Keywords

Creating Modules
~~~~~~~~~~~~~~~~
Now that the basics are done, the user can also create a module. This requires
package.json to be generated. Using NPM will generate a basic skeleton
of package.json.

.. code-block:: text
    :Caption: Create modules

    $ npm init

    npm help json
    npm install <pkg> --save
    ^C
    Name:(webmaster)

After ``$ npm init`` is used, the command prompt will walk the user through making a 
package.json file that covers common items. For help for package.json documentation, 
``$ npm help json`` will show definitive documentation on the package.json 
fields and what they do. ``$ npm install <pkg> --save`` will install the package
and save it as a dependency in package.json file.

Next up is registering the user with the NPM repository site using a valid email
address. This can be done by doing the following-

.. code-block:: text
    :Caption: Publishing modules

    $ npm adduser
    Username: "Your username"
    Password: "Your password"
    Email: "Your email"
    $ npm publish

``npm publish`` is when the user actually publishes the modules, but before that
a valid account is needed. An important thing to note is that the email address
will be public and on the internet and in the fields where it says "Your ..." put
in the respective username, password, and email for the user that is publishing 
the module.

Setting up Node.js with MySQL
-----------------------------
There are many ways to set up Node.js with a database and it may seem complicated, 
but it's actually simple and this quick tutorial will show how to connect Node.js
with MySQL.

First up, how to install the MySQL module. This can be done in
the command console. After the module is installed, the next step is to make a 
JavaScript file that creates the connection and what will be used to query the 
database.

.. code-block:: text
    :Caption: Installing MySQL module

    npm install mysql

.. code-block:: javascript
    :linenos:
    :Caption: Connecting to a database

    var mysql = require('mysql')

    var con = mysql.createConnection({
        host: "localhost"
        user: "yourUserName"
        password: "yourPassword"
        });

        con.connect(function(err){
        if (err) throw err;
        console.log("Connected")

        con.query(sql, function (err, result){
        if(err) throw err;
        console.log("Result: " + result)
        })
    })

[W3Schools]_ used as reference code

Where the user made the variable ``con`` is where the user will create a connection, 
and this means you'll have to enter the correct information about the database, 
such as the host, user, and password. After that the function after will make the 
connection and handle any errors. With con.query() how the user makes the statement
they want is to replace is by replacing the part of the code where it says ``sql``
in the con.query() function. The whole sql statement will have to go before the
function is called.

Conclusion
----------
In conclusion, Node.js is a helpful tool for quick testing of a javascript file 
that can be helpful and reliable. The best thing about Node.js is the amount of 
modules a user can get to help the person do what they need.

Sources
-------
.. [Buna] Samer Buna "`Requiring modules in Node.js: Everything you need to know <https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8>`_" Freecodecamp, Web. 19 Mar, 2017

.. [Thinkmobiles] "`Why use Node.js - look behind the scenes of web development <https://thinkmobiles.com/blog/why-use-nodejs/>`_" Thinkmobiles, Web. 04 Apr, 2019

.. [Tutorialspoint] "`Node.js Tutorial <https://www.tutorialspoint.com/nodejs/>`_" Tutorialspoint, Web. 02 Apr. 2019

.. [W3Schools] "`Node.js MySQL <https://www.w3schools.com/nodejs/nodejs_mysql.asp>`_" W3Schools, Web. 18 Apr. 2019