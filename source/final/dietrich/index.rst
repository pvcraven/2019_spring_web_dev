Data-Driven Documents
=====================

Outline
-------

* Introduction
* History
    * Who created it
    * What does it do
    * What is it used for
* Examples
    * How to use in project
    * Dynamic Properties
    * Selection
    * SVG
    * Graphs
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

How to Use
----------

Selection
---------

.. code-block:: javascript
    :Caption: Randomly colored paragraphs

    d3.selectAll("p").style("color", function() {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
    })

SVG
---

Graphs
------

.. [Bostock1] Bostock, Mike. “`Data-Driven Documents <https://d3js.org/>`_.” D3.Js.

.. [Tutorialspoint] Tutorialspoint.com. “`D3.Js Quick Guide <https://www.tutorialspoint.com/d3js/d3js_quick_guide.htm>`_.” tutorialspoint.com, Tutorialspoint.

.. [Bostock2] Bostock, Mike. "`How Selections Work <https://bost.ocks.org/mike/selection>`_." 26 Apr. 2013.

.. [Murray] Murray, Scott, et al. “`Data Driven Documents <http://www.jeromecukier.net/presentations/d3-tutorial/S01%20-%20introduction.pdf>`_.” VisWeek 2012, 2012.