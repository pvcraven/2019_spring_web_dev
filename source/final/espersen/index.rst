Responsive Web
======================

* Introduction - This is what Responsive Web is about.  This is where the thesis
  should be as well.
  A few of the main topics I will be diving into are:

    * CSS
    * Bootstrap
    * Stylebot

Introduction
~~~~~~~~~~~~

* When it comes to styling a web page or a mobile app or even being able to print
  out a web page, there are many tools that you can use.  The main idea here is
  the CSS or a cascading style sheet.  This special document usually holds all of
  the styling and formatting for the web page or mobile app you are designing.
  This could include anything that applies to the presentation of the content on
  the page; layout, colors, and even fonts.  With a CSS file, it is easier to change
  the presentation of the content and allows the programmer to quickly change
  multiple aspects of the web page or app at once.

History of topic / library of code
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* There was not always CSS and the ability to change the styling and other aspects
  of the web browser.  In the early web browsing days, when Mosaic and and other
  early stage web clients were out, the only things you could change were the color
  and style of the font you see.  Eventually, the people complained about custom
  touches and that they wanted more from their browsing clients.  That is when a few
  people teamed up and made CSS.  The first CSS idea was brought to attention by
  Bert Bos and Håkon Wium Lie. [CSSHistory]_

Responsive Web Design
~~~~~~~~~~~~~~~~~~~~~
* We know that CSS can change the look or application to different things within
  a webpage or app, but what can it change or do?

* The CSS can change many things very simply.  A few of the easier things that
  you can change in the CSS are the colors and the fonts.

* The background color is easily changeable with a simple selector tag and a few
  adjustments. Here is how the selector tags are done:
  ``#p1 {background-color:rgba(255,0,0,1);}``
  ``#p2 {background-color:rgba(0,255,0,1);}``
  Here is how the selector tags are applied to paragraph tags:
  ``<p id="p1">Red</p>``
  ``<p id="p2">Green</p>``
  Once these tags are applied to the <p> tags above the background of those words will
  appear red and green like this:
  .. image:: ColorDemo.PNG
    :width: 25%

 [w3SchoolsRef]_
Media Queries
~~~~~~~~~~~~~

* Example of code:
  ``<meta name="viewport" content="width=device-width, initial-scale=1">``

.. code-block:: html
    :caption: viewport

    <meta name="viewport" content="width=device-width, initial-scale=1">

[MediaQueries]_
[w3SchoolsMediaQueries]_

Bootstrap
~~~~~~~~~
    * what is Bootstrap?

    * what does Boostrap do?

Stylebot
~~~~~~~~
    * what is Stylebot?
    * how to use Stylebot
    * The power to Stylebot (its capabilities)

[diviSpace]_

Print CSS
~~~~~~~~~~~~

[SmashingMagazine]_

Conclusion
~~~~~~~~~~

Sources
------------
.. [w3SchoolsRef] "`HTML Responsive Web Design <https://www.w3schools.com/html/html_responsive.asp>`_" w3Schools. w3Schools.com, 4/4/2019.
.. [diviSpace] John Anderson. "`How to use Stylebot: <https://divi.space/css-course/how-to-use-stylebot-to-manipulate-css-on-the-fly/>`_" divi.space, Web. 18 Dec. 2017.
.. [MediaQueries] "`Media Queries <https://www.w3schools.com/css/css_rwd_mediaqueries.asp>`_" w3Schools. w3Schools.com, 4/16/2019.
.. [SmashingMagazine] Christian Krammer. "`How To Setup A Print Style Sheet <https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/>`_" SmashingMagazine. smashingmagazine.com, 4/16/2019.
.. [CSSHistory] Bert Bos. "`History on CSS <https://www.w3.org/Style/CSS20/history.html>`_" Style Activity Lead, Web. 17 Dec. 2016.
.. [w3SchoolsMediaQueries] "`More on Media Queries <https://www.w3schools.com/cssref/css3_pr_mediaquery.asp>`_" w3Schools. w3Schools.com, 4/17/2019.




