Data-Driven Documents
=====================

D3.js is a JavaScript library that allows developers to easily manipulate
documents based on data. It does this through a combination of HTML, CSS, and
SVG creation and manipulation. The main point of D3 is providing a simple way to
create powerful visualizations in a web page from data. It does not attempt to
solve every problem with front-end development, but rather focuses on providing
a solution for efficiently manipulating documents based on the data provided. D3
is extremely fast and is able to support large datasets being manipulated
because it has little overhead. D3 allows developers to more easily integrate
the use of data into their web page without hurting the performance of the page
itself.

[Bostock1]_

History
-------

D3.js was initially released in 2011 by Michael Bostock as well as a number of
his colleagues from the Stanford Visualization Group (Murray). It was created as
a successor to the Protovis framework, which was also created by the same group.
The main focus of D3 is to assist with data visualization on the web, and its
goal is to provide the functionality of tools like excel, while also giving the
efficiency of tools like OpenGL. It is still being maintained by Mike Bostock,
and currently it has an open source BSD-license and is widely adopted and used
at a professional level.

[Murray]_

Using D3.js
-----------

It is very easy to implement D3.js into any web development project that you may
be creating. All that needs to be done is include a link to the script in the
bottom of your body tag in order to access all the functionality that D3 has to
offer. The page will look like:

.. code-block:: html

    <!DOCTYPE html>
    <html>
        <head>
            <title>Title</title>
        </head>
        <body>
            <h1>Hello World!</h1>

            <script src="https://d3js.org/d3.v5.min.js"></script>
        </body>
    </html>

Once you have added this to the body of your project, any script, internal or
external, that is called and used within the webpage can use the d3 object to
access and utilize the multitude of capabilities provided by the D3 library.

Selection
~~~~~~~~~

Selections is the main functionality that is provided by D3 that leads to a
number of possibilities. These selections are used to simplify the process of
manipulating elements within a web page. They can be created by using anything
from element tags, class, id, or even containment, and is greatly simplified
through the use of the D3 library (Bostock2). For example, if you wanted to set
all of the header tags in a document to pink using the normal DOM, your code
would look like the following:

.. code-block:: javascript
    :Caption: DOM pink headers

    var headers = document.getElementsByTagName("h1");
    for(var i = 0; i < headers.length; i++) {
        var header = headers.item(i);
        header.style.setProperty("color", "pink", null);
    }

However, using the D3 library, this can all be handled within one line of code:

.. code-block:: javascript
    :Caption: D3 pink headers

    d3.selectAll("p").style("color", "pink");

[Bostock2]_

Dynamic Properties
~~~~~~~~~~~~~~~~~~

Using selections to change the style is only an introduction to the capabilities
of the D3 library. It can be further used to not just to change the style, but
to change it dynamically and manipulate it with actual data you want to display
on your web page. For example, say we have a basic web page that is
using the D3 library with 6 ``<div>`` tags, each using the class “col-4”, as
shown below.

.. code-block:: html
   :linenos:

    <!DOCTYPE html>
    <html>
        <head>
            <title>Selection</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        </head>
        <body>
            <div class="container-flex">
                <div class="row" style="height:300px">
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                </div>
                <div class="row" style="height:300px">
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                </div>
            </div>

            <script src="https://d3js.org/d3.v5.min.js"></script>
        </body>
    </html>

Once this page has been created it is easy to dynamically change the color of
these boxes using the selections that are shown above. All that would be needed
is a simple script being executed on the page similar to the one below:

.. code-block:: html

    <script>
        d3.selectAll(".col-4").style("background-color", function() {
            return "hsl(" + Math.random() * 360 + ",100%,50%)";
        });
    </script>

Likewise, to label each of the boxes with their corresponding number, you would
begin to add data as part of your selections and inject it onto the page.

.. code-block:: html

    <script>
        d3.selectAll(".col-4").data([1, 2, 3, 4, 5, 6]).append("h1").text(function(d) {
            return "Box " + d;
        });
    </script>

What this code does is create a set of data that becomes associated with the
selection made. Once the original selection is made, it injects an ``<h1>`` tag
within each of the ``<div>`` tags that are selected. Then, using the ``.text()``
function, it will manipulate the text contained within the ``<h1>`` tag using
the data being passed into the function. When all of this code is put together,
we end up with a web page that looks like the following.

:ref:`dynamic-properties-josh`

[Bostock1]_

Interactive SVGs
~~~~~~~~~~~~~~~~

Another benefit that D3 provides is that ability to create and manipulate SVGs
in real time. Not only this, but the SVGs can also be interactive with the user.
To do this, it uses the same selection and injection tools that have been used
in previous examples, but it uses them in a different way. In this process,
an ``<svg>`` is created to house the graphic, and then a ``<rect>`` is injected
inside of that to give the SVG a specific size. To create an interactive SVG,
you will also add a function call to ``.on()`` that will check for movement
within the ``<rect>`` and call the ``particle()`` function when there is, as
seen below.

.. code-block:: javascript
    :Caption: Creating an interactive SVG

    var width = innerWidth, height = 500;

    var svg = d3.select("#interactive-svg").append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

Once the ``<rect>`` has been created, then the ``particle()`` function must be
created. The function will use the method ``d3.mouse(this)`` to determine the
location of the cursor at that moment. Once it has the location, it creates a
``<circle>`` tag within the ``<rect>`` and places the center at the location of
the cursor. Once you have done this, you set the color of the circle, and then
call the ``.transition()`` function. This will begin an animation of the circle,
but it needs other data to determine how to transition. To begin, you set the
duration of the transition with the ``.duration(time)`` method. Then you set the
easing of the transition with the ``.ease(speed)`` method. Finally, you set the
final attributes that you want the object, in this case a circle, to have, and
then remove it with the ``.remove()`` method.

.. code-block:: javascript
    :Caption: Dynamically creating circles

    function particle() {
        var m = d3.mouse(this);

        svg.insert("circle", "rect")
            .attr("cx", m[0])
            .attr("cy", m[1])
            .attr("r", 1e-6)
            .style("stroke", function () {
                return "hsl(" + Math.random() * 360 + ",100%,50%)";
            })
            .style("stroke-opacity", 1)
            .transition()
            .duration(2000)
            .ease(Math.sqrt)
            .attr("r", 100)
            .style("stroke-opacity", 1e-6)
            .remove();

        d3.event.preventDefault();
    }

Shown below is this interactive SVG in action.

.. raw:: html

    <style type="text/css">
        rect {
            fill: none;
            pointer-events: all;
        }

        svg {
            border-style: solid;
            border-width: 3px;
            border-color: black;
        }

        circle {
            fill: none;
            stroke-width: 2.5px;
        }
    </style>

    <div id="interactive-svg"></div>

    <script src="https://d3js.org/d3.v5.min.js"></script>
    <script>
        var width = 700, height = 500;

        var svg = d3.select("#interactive-svg").append("svg")
            .attr("width", width)
            .attr("height", height);

        svg.append("rect")
            .attr("width", width)
            .attr("height", height)
            .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

        function particle() {
            var m = d3.mouse(this);

            svg.insert("circle", "rect")
                .attr("cx", m[0])
                .attr("cy", m[1])
                .attr("r", 1e-6)
                .style("stroke", function () {
                    return "hsl(" + Math.random() * 360 + ",100%,50%)";
                })
                .style("stroke-opacity", 1)
                .transition()
                .duration(2000)
                .ease(Math.sqrt)
                .attr("r", 100)
                .style("stroke-opacity", 1e-6)
                .remove();

            d3.event.preventDefault();
        }
    </script>

[Bostock3]_

Graphs
~~~~~~

Who uses D3?
------------

Since D3 is a JavaScript library designed specifically for simpler creation
and manipulation of graphics using data, it is not as popular as some of the
other JavaScript libraries and frameworks. However, it is still used by a number
of professional organizations to graphically display data to customers and
users. This is often achieved through a user dashboard or a data analytics tool
that is part of the application. Some of the better known organizations that
utilize the D3 library are given below.

* Acorns
* 23andMe
* Square
* Coursera
* Free Code Camp
* Weebly

[StackShare]_

Conclusion
----------

D3.js is a very beneficial library when it comes to data display and
manipulation on web pages. It also allows for the injection of dynamic graphics
and properties that allow you to greatly improve the interface of your
application. It can greatly increase the effectiveness and general look of any
data analytics tool and opens up a number of possibilities in regards to
graphics. It was been widely accepted and implemented in professional
development society, and allows for the efficient manipulation of web pages
while still creating a friendly user interface.

.. [Bostock1] Bostock, Mike. “`Data-Driven Documents <https://d3js.org/>`_.” D3.Js.

.. [Bostock2] Bostock, Mike. "`How Selections Work <https://bost.ocks.org/mike/selection>`_." 26 Apr. 2013.

.. [Bostock3] Bostock, Mike. “`OMG Particles! <https://bl.ocks.org/mbostock/1062544>`_” Popular Blocks, 20 Feb. 2019.

.. [Murray] Murray, Scott, et al. “`Data Driven Documents <http://www.jeromecukier.net/presentations/d3-tutorial/S01%20-%20introduction.pdf>`_.” VisWeek 2012, 2012.

.. [StackShare] “`Why Developers like D3.Js <stackshare.io/d3/in-stacks#/>`_.” StackShare, StackShare Inc.
