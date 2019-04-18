Responsive Web
==============

When it comes to styling a web page or a mobile app or even being able to print
out a web page, there are many tools that you can use.  The main idea here is
the CSS or a cascading style sheet.  This special document usually holds all of
the styling and formatting for the web page or mobile app you are designing.
This could include anything that applies to the presentation of the content on
the page; layout, colors, and even fonts.  With a CSS file, it is easier to change
the presentation of the content and allows the programmer to quickly change
multiple aspects of the web page or app at once.

History of topic / library of code
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
There was not always CSS and the ability to change the styling and other aspects
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

  .. code-block:: html
      :caption: Selector Example

      #p1 {background-color:rgba(255,0,0,1);}
      #p2 {background-color:rgba(0,255,0,1);}

* Here is how the selector tags are applied to paragraph tags:

  .. code-block:: html
      :caption: Applying Selectors

      <p id="p1">Red</p>
      <p id="p2">Green</p>

* Once these tags are applied to the <p> tags above, the background of those words will
  appear red and green like this:

  .. image:: ColorDemo.PNG
    :width: 25%


 [w3SchoolsRef]_

* You can also change the colors using hexadecimal color codes, something like this:

  .. code-block:: html
        :caption: Hexadecimal Color Code Changes

        #p3 {background-color: #FF0000;opacity:1;}
        <p id="p3">Red</p>

  This will do the same thing as above however using that special code.  You can
  find these codes at this website, `Hexadecimal Codes`_.





Media Queries
~~~~~~~~~~~~~


* Example of code:

  .. code-block:: html
      :caption: viewport

      <meta name="viewport" content="width=device-width, initial-scale=1">

* When it comes to Media Queries this is where format of the web page really comes
  into play.  The media query is a rule that uses the identifier @media and only
  applies the CSS to a code block if a certain condition is true.

* One quick example would be to make the background of the <b> (body) tag a different
  color using the @media selector.  This is easy, all you have to do is set what
  you want to happen with a condition.  So something like this:

  .. code-block:: html
      :caption: @media example

      @media only screen and (max-width: 600px) {
            body {
               background-color: blue;
            }
      }

* So in this example, if the screen was 600 pixels or smaller then the background
  of the body would change to blue from whatever it was before.

* How to change the font size of your text based on screen size:

  .. code-block:: html
      :caption: Change in font size

      @media only screen and (min-width: 601px){
            div.whateverTextYouWantToChange {
                  font-size: 80px;
            }
      }

      @media only screen and (max-width: 600px){
            div.whateverTextYouWantToChange {
                  font-size: 30px;
            }
      }

* Another cool thing you can do is hide images.  If the screen is too small to
  view them or you do not want a smaller device to render in a large picture,
  for example.

  .. code-block:: html
      :caption: How to make an item disappear! (TA-DA)

      @media only screen and (max-width: 600px){
            div.itemNotShown {
                  display: none;
            }
      }

* One thing that was mentioned on many of the sites I looked through, was you
  should always code for the smaller screens first.  Scale up rather than down.
  So for example, instead of saying if the screen gets too small then change it.
  Make it so if it gets too big then change it.  This way your website or app will
  load faster on the smaller screens.



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
blah blah blah


Sources
------------
.. [w3SchoolsRef] "`HTML Responsive Web Design <https://www.w3schools.com/html/html_responsive.asp>`_" w3Schools. w3Schools.com, 4/4/2019.
.. [diviSpace] John Anderson. "`How to use Stylebot: <https://divi.space/css-course/how-to-use-stylebot-to-manipulate-css-on-the-fly/>`_" divi.space, Web. 18 Dec. 2017.
.. [MediaQueries] "`Media Queries <https://www.w3schools.com/css/css_rwd_mediaqueries.asp>`_" w3Schools. w3Schools.com, 4/16/2019.
.. [SmashingMagazine] Christian Krammer. "`How To Setup A Print Style Sheet <https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/>`_" SmashingMagazine. smashingmagazine.com, 4/16/2019.
.. [CSSHistory] Bert Bos. "`History on CSS <https://www.w3.org/Style/CSS20/history.html>`_" Style Activity Lead, Web. 17 Dec. 2016.
.. [w3SchoolsMediaQueries] "`More on Media Queries <https://www.w3schools.com/cssref/css3_pr_mediaquery.asp>`_" w3Schools. w3Schools.com, 4/17/2019.


.. _Hexadecimal Codes: https://www.rapidtables.com/web/color/html-color-codes.html

