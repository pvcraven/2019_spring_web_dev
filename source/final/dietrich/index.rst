Data-Driven Documents
=====================

Outline
-------

* Introduction
* History
* Using D3.js
    * Getting started
    * Selection
    * Dynamic Properties
    * SVG
    * Graphs
* Who uses D3?
* Conclusion

Introduction
------------

D3.js is a JavaScript library that allows developers to easily manipulate
documents based on data. It does this through a combination of HTML, CSS, and
SVG creation and manipulation. The main point of D3 is providing a simple way to
create powerful visualizations in a web page from data. It does not attempt to
solve every problem with front-end development, but rather focuses on providing
a solution for efficiently manipulating documents based on the data provided.
D3 is extremely fast, and is able to support large datasets being manipulated
because it has little overhead. D3 allows developers to more easily integrate
the use of data into their web page without hurting the performance of the page
itself.

[Bostock1]_

History
-------

D3.js was initially released in 2011 by Michael Bostock as well as a number of
his colleagues from the Stanford Visualization Group. It was created as a
successor to the Protovis framework, which was also created by the same group.
The main focus of D3 is to assist with data visualization on the web, and its
goal is to provide the perfect balance of efficiency and expressiveness.
Currently it has an open source BSD-license and is widely adopted and used at a
professional level.

[Murray]_

Using D3.js
-----------

It is very simple to include D3.js into and web development project that you may
be creating. All that you need to do is include the link to the script before
the closing tag for your body:

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

Once you have done this, you are able to easily begin using the library in both
internal and external JavaScript to utilize the number of capabilities that D3
has to offer.

Selection
~~~~~~~~~

In D3, selections are used to simplify the process of manipulating elements in
an HTML page. These selections can be created by selecting any tag, class, id,
and even containment, and much more easily achieved with the use of the D3
library. For example, if you wanted to set the color of all header tags to pink,
your code would look like the following.

.. code-block:: javascript
    :Caption: DOM pink headers

    var headers = document.getElementsByTagName("h1");
    for(var i = 0; i < headers.length; i++) {
        var header = headers.item(i);
        header.style.setProperty("color", "pink", null);
    }

However, using the D3 library, you are able to handle all of this without using
the for loop or extra lines.

.. code-block:: javascript
    :Caption: D3 pink headers

    d3.selectAll("p").style("color", "pink");

[Bostock2]_

Dynamic Properties
~~~~~~~~~~~~~~~~~~

Selection is just an introduction to the real capabilities of D3. It can be
farther utilized to manipulate your web pages with actual data that you are
trying to display on the page and to dynamically set the properties of any
element contained on the page. For example, say we set up a basic web page with
six different boxes:

.. code-block:: html

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

Once I have created these boxes, it is very easy to dynamically change their
characteristics using the D3 selection system. For example, to color all of the
boxes a randomly generated color, you would just need to add a script tag to the
bottom of your body with the following code:

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

:ref:`interactive-svg-josh`

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

.. [Bostock1] Bostock, Mike. “`Data-Driven Documents <https://d3js.org/>`_.” D3.Js.

.. [Bostock2] Bostock, Mike. "`How Selections Work <https://bost.ocks.org/mike/selection>`_." 26 Apr. 2013.

.. [Bostock3] Bostock, Mike. “`OMG Particles! <https://bl.ocks.org/mbostock/1062544>`_” Popular Blocks, 20 Feb. 2019.

.. [Tutorialspoint] Tutorialspoint.com. “`D3.Js Quick Guide <https://www.tutorialspoint.com/d3js/d3js_quick_guide.htm>`_.” tutorialspoint.com, Tutorialspoint.

.. [Murray] Murray, Scott, et al. “`Data Driven Documents <http://www.jeromecukier.net/presentations/d3-tutorial/S01%20-%20introduction.pdf>`_.” VisWeek 2012, 2012.

.. [StackShare] “`Why Developers like D3.Js <stackshare.io/d3/in-stacks#/>`_.” StackShare, StackShare Inc.