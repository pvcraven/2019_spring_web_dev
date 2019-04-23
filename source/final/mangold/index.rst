AngularJS
=========
AngularJS is a JavaScript front-end framework program that helps with the
development process. Building dynamic single page applications that are
interactive and versatile and best for professionals. Angular might take people
longer to learn than other frameworks, but if you are developing a data-driven,
large-scale application with complex logic, it allows you to work on the logic
and get a great running page in the browser. Overall AngularJS is a program
that allows you to design large scale frameworks all while minimizing the code
the coder must write due to how the program works.

.. literalinclude:: example.html
    :linenos:
    :language: html
    :caption: example.html

What is AngularJS and the history of it
---------------------------------------


Change Detection
~~~~~~~~~~~~~~~~


General style
-------------



MVC Framework
-------------
Model view controller is a web application software made up of three parts. The
first level is simple script which maintains the data is called the model. The
view is how the data is presented on the screen and how that data changes by
the user moving on the screen. The controller interacts with both the model and
the view. It takes what happens in the view and checks it with the model, it
then updates the web application.

Interface HTML
~~~~~~~~~~~~~~
Using HTML for the user interface simplifies app development and keeps the code
easy to understand and well structured. HTML makes it easy to understand the
style of the tag. HTML is a declarative language that makes it easy to organize
and less likely to break unlike other app development software that uses
JavaScript Interfaces. AngularJS and HTML can find what you want with
dependencies making it a lot easier to understand program flow and loading.

POJO
~~~~
POJO stands for plain old JavaScript and this goes back to the model part of MVC
because AngularJS binds pieces together without using a getter or setter.
Objects can have loops created with properties and then developers can make
changes directly to the loop and adjust the reframe which will make the code
cleaner and more precise. POJO is different than traditional data models because
Angular’s data model has a middle holding area that works with the controller
and the view to collect data from the user. The middle area stores data and
looks for changes to the stored data and updates the view spontaneously.

Two-way binding
~~~~~~~~~~~~~~~
Two-way binding makes the application process simpler, along with difficult
manipulations and calculations. The view and the model work together with data
to make them sync automatically. With AngularJS you can bind different elements,
and the view and the model will still work together and keep the page updated
correctly.

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
With AngularJS, changing views becomes easier with single page applications.
Routing is what happens when the user changes the view on the screen and the new
page should load while changing the URL. This method should make the user think
they are interacting with the site. For example, when you are on a website and
you click the menu button it should be like you are interacting with the page
not loading a whole new page when you just want the menu button to come down on
part of the page. With AngularJS you can create multiple views for URLs making
the website transition from one view to another seamlessly.

Directory
~~~~~~~~~
Directives is creating a unique tag specific to your code and should be a
standalone element that’s separate from the app. This tag can be used anytime
once it’s defined and will work just like any other tag in HTML. To create new
element by putting the DOM manipulation code into directives and give them
custom attributes and class names. MVC app can now look directly and the new
data and update it with the view.

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

DOM
---
Document Object Model (DOM) adds behaviors, and with Angular it should be inside
directives. Therefore, the user interface designers can see the view without all
the behaviors.


.. [w3schools] "`AngularJS Tutorial <https://www.w3schools.com/angular/default.asp>`_" W3Schools, Web. 4 Apr. 2019

.. [Lau] "`sitepoint <https://www.sitepoint.com/10-reasons-use-angularjs/>`_" sitepoint, 05 Sept. 2013. Web. 4 Apr. 2019
.. [Ray] "`Why AngularJS is my preferred framework for software development <https://medium.freecodecamp.org/why-is-angularjs-the-most-preferred-framework-for-software-development-5253c2c569c9/>`_" freeCodeCamp, 16 Jul. 2018. Web. 4 Apr. 2019

