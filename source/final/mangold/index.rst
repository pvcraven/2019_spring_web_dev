AngularJS
=========

.. literalinclude:: example.html
    :linenos:
    :language: html
    :caption: example.html
    

Heading 1
---------

Ut et erat vitae neque bibendum pellentesque quis quis nunc. Maecenas nisl orci,
sodales sit amet fermentum convallis, feugiat eu lacus. Nunc vel arcu accumsan,
laoreet diam in, elementum nisl. Maecenas elementum dapibus interdum. Morbi leo
libero, volutpat eu nisi nec, ultricies sollicitudin felis. Suspendisse id dui
nec felis blandit pellentesque vel quis metus. Curabitur non elit id tortor
scelerisque vestibulum. Nunc sapien felis, convallis quis mollis quis, mattis
sit amet quam. Maecenas rhoncus mauris vitae augue laoreet pharetra. In imperdiet
quam vel turpis gravida fermentum. [Lau]_

Heading 2
---------


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
* intro [w3schools]_

* History

* why and what to us AngularJS for.

* examples


.. [w3schools] "`AngularJS Tutorial <https://www.w3schools.com/angular/default.asp>`_" W3Schools, Web. 4 Apr. 2019
.. [Lau] "`10 Reasons Why You Should Use AngularJS <https://www.sitepoint.com/10-reasons-use-angularjs/>`_" SitePoint Pty. Ltd., 05 Sept. 2013. Web. 4 Apr. 2019
