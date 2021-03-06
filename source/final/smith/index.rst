AngularJS
=========

JavaScript is a programming language that is designed to enhance web applications.
Since it's release, programmers have been learning and contribute to the pool of
frameworks that make writing code easier. AngularJS is one of those
frameworks that has proven to be a very powerful. AngularJS that has the ability to two
way bind data, create beautiful single page applications, and provides tons of
functions for the programmer.

History
~~~~~~~

AngularJS was initially created by two Google employees: Misko Hevery and Adam
Abrons. The two employees originally called the framework 'GetAngular',
save web programmers more interaction between the front and back end of the
application.

Eventually Hevery had to work on a different project for Google called Feedback.
over the course of 6 months there was 17,000 lines of code written for this program,
making it increasingly difficult to test. This drove Hevery to rewrite the
software but this time using his part of the GetAngular project from earlier. With
GetAngular he was able to turn the initial 17,000 lines of code into just 1,500
in 3 weeks. With this massive rework and elimination of lines of code his manager
took interest in GetAngular which would lead Google to start heavily development
into Angular.js. [Austin]_ Over the years, AngularJS  would turn into a framework
monolith in the JavaScript community. The ability to create single page applications in
just a couple hundred lines of code was incredible.


MVC (Model, View, Controller)
-----------------------------

A Model-View-Controller architecture is a design pattern for software engineers
to help separate the functionality of a application. The application can be
separated into 3 main sections.

Model
~~~~~

This section handles how the user data is handled. The data could come from
the user or a database. The Model could be considered the JavaScript or any
language that will do logical manipulation.

View
~~~~

The view section is responsible for handling anything the user will visually see.
The user interface logic could get data from the controller and send data to the
model. The View is usually the HTML.

Controllers
~~~~~~~~~~~

The controllers of the MVC architecture act as a interface for the view and model
sections. The controller will manipulate data that has came from a model or some
other source and send it back to the model and view .
[TutorialspointAngularMVC]_ [TutorialspointAngular]_

AngularJS MVC
~~~~~~~~~~~~~

.. image:: pictures/AngularJSwebsite.PNG
    :width: 800
    :alt: Download Button for AngularJS [Angular]_

Starting development in AngularJS is simple and easy. Go to `Angularjs.org <https://angularjs.org>`_
and finding the version of AngularJS you want. When you find the version you
like then grab the URL of the file and stick it in your HTML file. [Angular]_

.. code-block:: html
   :caption: Adding the script for AngularJS

    <!-- The src= is where the URL goes-->
   <script type="text/JavaScript" src="code.angularjs.org/1.7.8/angular.min.js"></script>

Then you need to be worried about the global namespace that Angular uses. The
framework has tons of preset global variables which could interfere with your
JavaScript.

Global Namespace
~~~~~~~~~~~~~~~~

While creating a HTML document you can incorporate many JavaScript libraries
to enhance the document. One fear is that the JavaScript can override each other
if they share similar named variables in their global namespace. consider the
following examples:

.. code-block:: JavaScript
    :caption: Global Namespace Example 1

    var person = 'Adam';
    var class = 'Advanced Web Development';

    function getInfo(){
        return person + ' ' + class;
    }

.. code-block:: JavaScript
    :caption: Global Namespace Example 2

    //This will print log 'Mike' even though in the other
    //file 'Adam' was in the person variable

    var person = 'Mike';

    getInfo();



The function in the beginning declares person as 'Adam' but prints 'Mike' when the
function is called in the 2nd file. This is because of the global namespace.
This is very important to know and understand before delving to far into AngularJS.
As mentioned before, AngularJS comes with a ton of pre-defined variables in the
global namespace which can get messy, causing errors and bugs. To combat
this the user will have to create their own namespace. One way to create your
own namespace is by treating globals you may want to use as a JSON variable.

.. code-block:: JavaScript
    :caption: JSON namespace

    var myNamespace = {};

    myNamespace.person = 'Mike';

    getInfo();

This Example will no longer use the global namespace in the first example and
the function should now return 'Adam' as intended. This concept will be very
important for dealing with AngularJS. [Alicea]_

AngularJS Features
~~~~~~~~~~~~~~~~~~

AngularJS offer's so many features that it makes development easy. In Angular
the MVC is easy to understand with just a little example.

.. code-block:: html
    :caption: Making your HTML document a AngularJS Model

    <!--This is the View-->
    <html lang="en-us" ng-app="myApp">

Adding the 'ng-app' is Angular's way of specifying a model/module the programmer will
be able to control in JavaScript. You can name it what ever you want, it just
has to be the same name in the JavaScript.

.. code-block:: JavaScript
    :caption: JavaScript of declaring a AngularJS Module
    :linenos:

    // This is Model
    // The [] in the parameters is a array of dependencies for Angular to work
    // with. You can get other services from the AngularJS.org website and
    // include them in this array ex 'ngHttp' will allow you to use the
    // $http service in the module
    // The first parameter is the name you used in the HTML attribute ng-app
    var myApp = angular.module('myApp', []);

This code will create a variable which is linked to the DOM (Document Object Model).
This variable will be how you control the specified HTML document. Now you may
want to manipulate it somehow. This is where the controller part of the MVC
comes in.

.. code-block:: JavaScript
    :caption: JavaScript of declaring a Controller

    // This is the Controller
    myApp.controller('mainController', function(){});

And before this controller will work with anything you must hook it up somewhere
in the HTML.

.. code-block:: html
    :caption: HTML for connecting a Controller

    <!--This is where the controller in the myApp.js is connected to --->
    <div ng-controller="mainController">

Now you have a controller which you can write code in the function block in the
parameters and manipulate the DOM. This is a simplified version of the AngularJS
MVC model. Notice in the two code examples above that the ng-controller
attribute value matches the string in the 1st parameter in the JavaScript
code. [Alicea]_

Data-Binding
~~~~~~~~~~~~

AngularJS is a fantastic framework for binding data in the JavaScript and the
HTML DOM. The user of a website can change something in the HTML via a textbox
or some field and it will directly change the JavaScript too. AngularJS makes this
easy! consider the following:

.. code-block:: html
    :caption: Sample HTML for data-binding
    :linenos:

    <!DOCTYPE html>
    <html lang="en-us" ng-app="myApp">
        <head>
            <title>AngularJS Example</title>
            <meta charset="UTF-8">
        </head>

        <body>
            <div class="container">
                <div ng-controller="mainController">
                    <!-- Angular looks for {{}} and replaces it with anything
                    you want to put there. currently there is a
                    string called name in the middle of the curly braces
                    which will have to match name of the variable in the
                    JavaScript you wish to fill it with-->
                    <div>
                        <label>Please enter your name:</label>
                        <input type="text" ng-model="name" />
                        <h1>Your name: {{name}}</h1>
                    </div>
                </div>
            </div>
        </body>

    <script type="text/JavaScript" src="https://code.angularjs.org/1.7.0-rc.0/angular.min.js"></script>
    </html>

.. image:: pictures/Data-Binding_Not_connected.PNG
    :width: 800
    :alt: Picture of what the HTML Shows


There is a lot going on in this sample code. in the container div there is a
'ng-controller' attribute which we will link to the JavaScript so we can start
manipulating the DOM. This code will connect the two together:


.. code-block:: JavaScript
    :caption: Connecting to the DOM with AngularJS
    :linenos:

    myApp.controller('mainController', ['$scope','$timeout',function($scope,$timeout)
        $scope.name='';
        //$timeout is AngularJS service that can wait x amount of milliseconds
        //before performing a function, in this case I wanted to demo how
        //the two way data binding worked
        $timeout(function(){console.log($scope.name},5000);
    )]);

.. image:: pictures/Data-Binding_Connected.PNG
    :width: 800
    :alt: Picture of the HTML after connecting the JavaScript

A question that may arise is what is '$scope'. It is important to know that
AngularJS prefixes all their variables with either $ or $$ so that the programmer
can include more frameworks if they wish. This would help mitigate conflicting
names. The $scope variable represents a service offered by AngularJS. There are
a whole collection of services that are offered and can be found at `Angularjs.org <https://angularjs.org>`_
for documentation. The $scope is how Angular 'talks' to the DOM.


Single Page Application (SPA)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Creating a multi-page application can be difficult and costly on the client's
browser and the server serving the web pages. AngularJS solves this problem
by dynamically changing the users view in the same web page. This eliminates
the need to get another web page from the server and doesn't bring along the
annoying page stuttering when navigating to a different page.

AngularJS bundles all the code and views into one package and will dynamically
load code based on what view the user is currently in. This makes the work load
lighter on the server which speeds the website up significantly. Angular takes
advantage of the client's computer to load the information on the website.

Testing the web application also becomes much easier when there is only one page
to test. This will allow testing suites to more easily test the web application
when the development team deploys a new build. This also means rolling back
changes is also easy, since everything is bundled together.  [Rajput]_

Lets take a look on how AngularJS can dynamically change what the user will see.
We can add this snippet of code to our HTML file we have from above in the body.
It will create 3 links that will let the user change a field in the document.

.. code-block:: HTML
    :caption: Sample HTML for Routing in AngularJS
    :linenos:

    <a href="#/!">Default</a>
    <a href="#!Test1">Switch Routes!</a>
    <a href="#!Test2">Try a 3rd time</a>
    <div ng-view></div>

There is also another AngularJS script needed to make it all work.

.. code-block:: HTML
    :caption: CDN for AngularJS $routeProvider service

    <script type="text/JavaScript" src="https://code.angularjs.org/1.7.0-rc.0/angular-route.min.js"></script>


Next we need to add a route to our myApp module so AngularJS knows how to navigate
through the different potential html pages.

.. code-block:: JavaScript
    :caption: JavaScript to create AngularJS Routes
    :linenos:

    //Add "$ngRoute" into the [] when you create the module
    var myApp = angular.module('myApp', ["ngRoute"]);
    //This will inject the ngRoute dependency into the module which is not
    //included into the default AngularJS library

    myApp.config(function($routeProvider){
       $routeProvider
       .when("/", {
           template : "<h1>Default View</h1> <p> This is the default</p>"
       })
        .when("/Test1",{
           template : "<h1>Clicked 2nd link!</h1> <p> This is the 2nd sample page!</p>"
       })
        .when("/Test2", {
           template : "<h1>Clicked 3rd link!</h1> <p> This is the 3rd sample page!</p>"
       });
    });

.. image:: pictures/Routing1.PNG
    :width: 400
    :alt: Picture of the HTML no linked clicked

.. image:: pictures/Routing2.PNG
    :width: 400
    :alt: Picture of the HTML after 2nd linked clicked

.. image:: pictures/Routing3.PNG
    :width: 400
    :alt: Picture of the HTML after 3rd link clicked


Earlier when we declared our myApp module the empty array in the parameter list
was empty. This is how Angular will inject dependencies into the module (see
line 2). These dependencies are usually more services that do not come with
AngularJS by default. When working with the routing services we have
to get the service delivered through a content delivery network (CDN).Then
inject it into our application before we can use it.

Once we have our service we can connect the navigation links in the HTML DOM with
our JavaScript to make the magic happen. AngularJS will look at what the URL
and then manipulate the DOM based on what it finds. Lines 8 - 14 in listing 13
will look for those specific url extensions and will insert the string of HTML
that follows the template into the ng-view attribute in the HTML document.
[W3SchoolsAngular]_

Chaining Promises = Complicated
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

AngularJS has some really incredible services and features, one of them being
the ability to chain functions together with a concept called called promises.
This is important because JavaScript is asynchronous and you aren't really
guaranteed an order of operation in some parts of the code. AngularJS can handle
many events that may transpire while getting information over some kind of call
over the internet. Here is a very simple example:

.. code-block:: JavaScript
    :caption: Exmaple of Promise chaining
    :linenos:

    function returnStudentMajors(){
    return $http.get("Some url to get data")
        .success(function(data){
            //do something
        })
        .error(function(data){
            //do something
        })
    }

This is a simple use of a promise but it can get really complicated when you start
chaining them together as follows:

.. code-block:: JavaScript
    :caption: Exmaple of Promise chaining


    $http.get("Some url to get data").then(function(data){
        //do something
    }).then(function(data){
        //do something
    }).then(function(data){
        //do something
    });
    //You can chain this for as long as you have stuff to do on the data

It is not important to understand what the $http service is doing in this example,
but how the chaining can go on and on because every call returns an
object which the programmer can call methods from the returned object.
Some chains can get very complex but it can be very powerful. [Strahl]_

Disadvantages of AngularJS
--------------------------

AngularJS has a lot of complexity to the framework. One of the annoyances is
having to allow JavaScript on your browser to be able to see the AngularJS
application. With out JavaScript permissions the page will simply not load.
Another major complexity will be the hierarchy of directives that the programmer
will have to learn to make optimal use of AngularJS.

AngularJS uses a MVC concept to create single page applications which could be
very intimidating and hard if the programmer is not familiar with the concepts
before hand. Another confusing aspect is keeping the scopes organized between
the views in the web application. Each scope will contain different information
depending on what view the user is currently in. [Rajput]_

Conclusion
----------

Web development has become one of the hottest areas of tech in today's world.
With the increasing demand for web programming companies have spent tons of
money on developing frameworks that use JavaScript. AngularJS is one of those
frameworks that emerged because a company had some employees that found a
purpose from a small side project. Utilizing AngularJS's plethora of services
the programmer has everything they need to create a well designed and optimal
single page application.


Sources
-------

.. [Alicea] Anthony, Alicea “`Master AngularJS (Essential JavaScript Concepts) <https://www.udemy.com/learn-angularjs>`_ ” Udemy, Anthony Alicea, Web 4/9/2019

.. [Angular] Angular.io "`Architecture overview <https://angular.io/guide/architecture>`_ "version 7.2.12-local+sha.d727561, Google, Web 4/2/2019

.. [TutorialspointAngular] Tutorialspoint.com "`AngularJS - Overview <https://www.tutorialspoint.com/angularjs/angularjs_overview.htm>`_ "Web 4/2/2019

.. [TutorialspointAngularMVC] Tutorialspoint.com "`MVC Framework - Introduction <https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm>`_ " Web 4/4/2019

.. [W3SchoolsAngular] W3schools.com `"AngularJS Routing <https://www.w3schools.com/angular/angular_routing.asp>`_" Web 4/16/2019

.. [Austin] Andrew Austin “`An Overview of AngularJS for Managers. <https://andrewaustin.com/an-overview-of-angularjs-for-managers/>`_ ” Andrew Austin, 14 Aug. 2014

.. [Strahl] Strahl, Rick. “`AngularJs and Promises with the $Http Service. <https://ieeexplore.ieee.org/document/7550838/>`_ ” Rick Strahl's Web Log, Rick Strahl, Web 4/10/2019

.. [Rajput]  Rajput, Mehul “`The Pros and Cons of Choosing AngularJS. <https://jaxenter.com/the-pros-and-cons-of-choosing-angularjs-124850.html>`_ ” JAXenter, 21 Mar. 2016

