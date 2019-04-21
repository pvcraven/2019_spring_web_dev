AngularJS
=========

.. literalinclude:: example.html
    :linenos:
    :language: html
    :caption: example.html
    




What is AngularJS and the history of it
---------------------------------------
AngularJS was created initially by two Google employees: Misko Hevery and Adam
Abrons. The two employees originally called the framework ‘GetAngular’ which
would give web programmers more interaction between the front and back end of
the application.

This drove Hevery to rewrite the software but this time using his part of the
GetAngular project from earlier. With GetAngular he was able to turn the initial
17,000 lines of code into just 1,500 in 3 weeks. With this massive rework and
elimination of lines of code his manager took interest in GetAngular which would
lead Google to start heavily development into Angular.js. AngularJS over the
years would turn into a framework monolith in the javascript community.The
ability to creat single page applications in just a couple hundred lines of
code is incredible. [Lau]_

Change Detection
~~~~~~~~~~~~~~~~


General style
-------------



MVC Framework
-------------


Interface HTML
~~~~~~~~~~~~~~


POJO
~~~~


Two-way binding
~~~~~~~~~~~~~~~
:

Filters
~~~~~~~
Fillers can be used to do formatting of numbers and arrays based on specific
parameters that can standalone. A standalone function is useful to have when
creating an app it keeps your code clean and organized.

Routing
~~~~~~~
Routing is important to the single page applications (SPA) and updating from one
view to the next. Developers don't want to load a whole new page when something
is clicked so they us the same page and just change the URL.

Directory
~~~~~~~~~


.. code-block:: html
    :caption: data-binding

    <!DOCTYPE html>
    <html lang="en-us" ng-app="myApp">
        <head>
            <title>AngularJS Example</title>
            <meta charset="UTF-8">
        </head>

        <body>
            <div class="container">
                <div ng-controller="mainController">
                        <label>Please enter your name:</label>
                        <input type="text" ng-model="name" />
                        <h1>Your name: {{name}}</h1>
                    </div>
                </div>
            </div>
        </body>

    <script type="text/javascript" src="https://code.angularjs.org/1.7.0-rc.0/angular.min.js"></script>
    </html>

Sub Heading
~~~~~~~~~~~

Heading 3
---------
.. [w3schools] "`AngularJS Tutorial <https://www.w3schools.com/angular/default.asp>`_" W3Schools, Web. 4 Apr. 2019

.. [Lau] "`sitepoint <https://www.sitepoint.com/10-reasons-use-angularjs/>`_" sitepoint, 05 Sept. 2013. Web. 4 Apr. 2019
.. [Ray] "`Why AngularJS is my preferred framework for software development <https://medium.freecodecamp.org/why-is-angularjs-the-most-preferred-framework-for-software-development-5253c2c569c9/>`_" freeCodeCamp, 16 Jul. 2018. Web. 4 Apr. 2019

