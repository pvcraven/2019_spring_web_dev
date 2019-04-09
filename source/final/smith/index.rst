AngularJS
======================

Introduction
------------

  * What topic is about, cover highlights, thesis for the last sentence
  * History of framework
  * Use this article [Austin]_

MVC (Model, View, Controller)
-----------------------------

A Model-View-Controller architecture is a design pattern for software engineers
to help separate the functionality of a application. The application can be
separated into 3 main sections.

Model
~~~~~

This section handles how the user data is handled. The data could come from
the user or a database. The Model could be considered the javascript or any
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
other source and send it back to the model and view [Tutorialspoint]_.

AngularJS MVC
~~~~~~~~~~~~~

.. image:: pictures/AngularJSwebsite.PNG
    :width: 800
    :alt: Download Button for AngularJS [Angular]_

Starting development in AngularJS is simple and easy. Going to `Angularjs.org <https://angularjs.org>`_
and finding what version of AngularJS you want is simple. When you find the version you
want to start developing in all you need to do is grab the URL of the file and stick it
in your HTML file.

.. code-block:: html
	:caption: Adding the script for AngularJS

	<script type="text/javascript" src="code.angularjs.org/1.7.8/angular.min.js"></script>

Then you need to be worried about the global namespace that Angular uses. The
framework has tons of preset global variables which could interfere with your
javascript.

Global Namespace
~~~~~~~~~~~~~~~~

While creating a HTML document you can incorperate many javascript libraries
to enhance the document. One fear is that the javascript can override each other
if they share similar named variables in their global namespace. consider the
following examples:

.. code-block:: javascript
    :caption: Global Namespace Example 1

    var person = 'Adam';
    var class = 'Advanced Web Development';

    function getInfo(){
        return person + ' ' + class;
    }

.. code-block:: javascript
    :caption: Global Namespace Example 2

    var person = 'Mike';

    getInfo();



The function in the beginning declares person as 'Adam' but prints 'Mike' when the
function is called in the 2nd file. This is because of the global namespace.
This is very important to know and understand before delving to far into AngularJS.
As mentioned before AngularJS comes with a ton of pre-defined variables in the
global namespace which can get messy and cause errors and bugs. To combat this
the user will have to create their own namespace. One way is to create your own
namespace by treating globals you may want to use as a JSON variable.

.. code-block:: javascript
    :caption: JSON namespace

    var myNamespace = {};

    myNamespace.person = 'Mike';

    getInfo();

This Example will no longer use the global namespace in the first example and
the function should now return 'Adam' as intended. This concept will be very
important for dealing with AngularJS. [Alicea]_

Bring in AngularJS Features
~~~~~~~~~~~~~~~~~~~~~~~~~~~




Advantages
----------

  * Show Examples [Tutorialspoint]_ [Angular]_
  * Data Binding

    * Give Code examples
    * Why Angular makes Data Binding Easy

  * SPA (Single Page Application)

    * Why AngularJS is nice for SPA programming
    * Maybe include code examples on how this is or a diagram

Disadvantages
-------------

  * Explain the learning curve to creating AngularJS Application
  * Discuss why Angular is costly
  * User must enable JS or page doesnt really do anything or show anything



Sources
-------

.. [Alicea] Anthony, Alicea “`Master AngularJS (Essential JavaScript Concepts) <https://www.udemy.com/learn-angularjs>`_ ” Udemy, Anthony Alicea, Web 4/9/2019

.. [Angular] Angular.io "`Architecture overview <https://angular.io/guide/architecture>`_ "version 7.2.12-local+sha.d727561, Google, Web 4/2/2019

.. [Tutorialspoint] Tutorialspoint.com "`AngularJS - Overview <https://www.tutorialspoint.com/angularjs/angularjs_overview.htm>`_ "Web 4/2/2019

.. [Tutorialspoint] Tutorialspoint.com "`MVC Framework - Introduction <https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm>`_ "Web 4/4/2019

.. [Austin] Andrew Austin “`An Overview of AngularJS for Managers. <https://andrewaustin.com/an-overview-of-angularjs-for-managers/>`_” Andrew Austin, 14 Aug. 2014

.. [Chansuwath] W. Chansuwath and T. Senivongse "`A model-driven development of web applications using AngularJS framework <https://ieeexplore.ieee.org/document/7550838/>`_ "2016 IEEE/ACIS 15th International Conference on Computer and Information Science (ICIS), Okayama, 2016, pp. 1-6.
