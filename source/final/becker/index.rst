ReactJS
======================

Outline
--------

Introduction

* Introduction - What is react, why is it a big deal, what the article is
  going to talk about
* History - Talk through relatively new material [reactHistory]_
* Popularity - Who uses React? Is it a good thing to learn
  right now? [reactPopularity]_
* Advantages - Why use React? [reactPopularity]_
* Future - Is React a dying technology or will it be used for years?

About React.js

* What is Babel and JSX? [w3Schools]_
* Components - What is it, how is it used, what advantages?
* Data Storage - Props and State, what are they and how do they
  work? [reactSimple]_
* Best Practices - The best way to use components and data
  storage [bestPractices]_.
* When should React.js be used?

React Tutorial

* Show setup/how to get React in the project
* Use components
* Show how to use the two forms of data storage
* Create basic application/functionality using components and data storage

Conclusion


Introduction
-------------

React is a declarative, efficient, and flexible JavaScript library for building
user interfaces. Since React is fast and flexible, it allows developers to make
complex UIs from small and isolated pieces of code
called “components”. Components are essentially JavaScript
functions or classes that describe how certain segments of the user interface
should look [reactIntro]_.

History
~~~~~~~~

A software engineer at Facebook named Jordan Walke is the creator of React.
Around 2010, Facebook struggled with code maintenance. They were implementing
new features of Facebook Ads and it made the Facebook application increasingly
complex. The complexity of the application along with the increased team-members
necessary to maintain it caused Facebook to slow down as a company. They
eventually ran into many cascading updates with their user interface, and
software teams could not keep up. In 2011, Jordan Walke created the first
prototype of React called FaxJS to make everything more efficient.

In 2012, React started being used by Facebook. On April 9th 2012, Facebook
acquired Instagram. Instagram wanted to use Facebook's technology and this
eventually led to React being open-sourced in 2013. Initially people thought
of React as a big step backward, but over time it grew in reputation. In 2014,
Facebook started appealing to enterprises like Netflix instead of relying
on React's technical benefits as a selling point. Over the past few years
React has grown immensely and has become a leading JavaScript
library [reactHistory]_.

Popularity
~~~~~~~~~~~

React is arguably most popular JavaScript library on the market right now.
In June 2018, React was mentioned in over 28% of job postings across popular
languages. Vue and Angular were far behind, with under 10% of job postings
listing them. React also has significantly more NPM downloads than Vue or
Angular, which shows more people are using React for their websites than
these other competitors [reactPopularity]_. Popular websites using React are:

* Facebook
* Instagram
* Uber
* WhatsApp
* Khan Academy
* Netflix
* PayPal
* Airbnb
* and many more...

Advantages
~~~~~~~~~~~~

Why are so many people using React compared to other JavaScript libraries?
One reason is that it's very easy to use. Later, we will see how simple it is
to implement React into a project and use React's features. Another reason
for its popularity is because it breaks code down into reusable components.
Code is broken up into small sections which makes it more maintainable and
easier to change especially in larger projects. Along with technical
advantages, since React has a large amount of users there are a lot of people
ready to help when developers run into issues [reactPopularity]_.

Future
~~~~~~~~

React is a relatively new technology that has exploded in the last five years.
With React being by far the most popular
JavaScript library used right now, I don't see it going away in the next five to
ten years. Even if another better library comes along, it will take
awhile for React to dwindle into obscurity. With React's community
support and technical benefits for current technologies, it
has a continuing bright future ahead.

About React
-------------

What is Babel and JSX?
~~~~~~~~~~~~~~~~~~~~~~

React uses something called Babel to translate JSX code into JavaScript. Babel
is a JavaScript compiler that can translate markup or programming languages
into JavaScript. JSX stands for JavaScript XML. It takes elements from XML,
HTML, and JavaScript and combines it into one language [w3Schools]_. Example
JSX code looks something like this:
``var element = <h1>This is a Header Variable!</h1>``

React Components
~~~~~~~~~~~~~~~~~~~

Almost all code using React is in components. Components are basically
bite-sized pieces of code that perform one functionality. Components can be
either JavaScript functions or classes. Inside components there is often a
method called ``render()``. The ``render()`` method is used to display
HTML elements [reactSimple]_. Components use two types of data storage called
Props and State, which we will look at next.

Data Storage
~~~~~~~~~~~~~~

Props and State are how React handles data. Props are
essentially parameters passed into a component from a different component,
while state is private and can only be changed within the component itself.
If a component needs external data it will rely on props. Internal data
will be controlled by state [reactSimple]_. The difference between props and
state will be shown more clearly in the later tutorial.

Best Practices
~~~~~~~~~~~~~~~~

There are several helpful tips to know when using React that will make code
cleaner and more efficient:

* It is good programming practice
  to put most of the application's logic in a component's ``render()``
  method.
* It is best to avoid state as much as possible and pass data using
  props instead.
* When passing props into components the PropType should be
  defined to improve readability.
* Components should only be responsible
  for a single functionality.
* It is more maintainable to have many small
  components than a few large ones [bestPractices]_.

When Should React be used?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React is most helpful when building an advanced user interface. When developing
simple, static web pages React is pointless. React makes
complex interfaces easier to maintain and more efficient. By using JSX
components, it is usually easier to write and change than JavaScript and
other JavaScript libraries. React is also easy to learn and has a large
community to help with developing issues [reactPopularity]_.

React Tutorial
---------------
Talk about future a little bit to close [w3Schools]_.

Here is everything you need to get React into an HTML webpage:


.. code-block:: html
   :caption: Using React in Project

    <html>
        <head>
            <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
            <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
            <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
        </head>
        <body>
            <div id="root"></div>
            <script type="text/babel" src="reactCode.jsx"></script> <!–– refer to React JSX file here -->
        </body>
    </html>

In the reactCode.jsx file, put the following code to
simply print "Hello World".


.. code-block:: javascript
   :caption: Simple JSX Example

    class Hello extends React.Component {
        render() {
            return <h1>Hello world!</h1>;
        }
    }

    ReactDOM.render(
        <Hello />,
        document.getElementById("root")
    );

Awesome! We now have a working React webpage! Let's look at some of React's
features now.

Sources
---------
.. [reactIntro] "`Tutorial: Intro to React <https://reactjs.org/tutorial/tutorial.html>`_" React. Facebook Inc., 4/2/2019.
.. [reactSimple] Borgen, Per Harald. "`Learn React.js in 5 Minutes <https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4>`_" FreeCodeCamp.org, A Medium Corporation, 4/10/2018.
.. [reactHistory] Papp, Andrea. "`The History of React.js on a Timeline <https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/>`_" RisingStack, RisingStack Inc., 7/20/2018.
.. [w3Schools] "`What is React? <https://www.w3schools.com/whatis/whatis_react.asp>`_" w3schools.com, W3Schools, 4/3/2019.
.. [reactPopularity] Kostrzewa, Denis. "`Is React.js the Best Javascript Framework in 2018? <https://hackernoon.com/is-react-js-the-best-javascript-framework-in-2018-264a0eb373c8>`_" Hacker Noon, A Medium Corporation, 7/19/2018.
.. [bestPractices] "`ReactJS Best Practices. <https://www.tutorialspoint.com/reactjs/reactjs_best_practices.htm>`_" tutorialspoint.com, Tutorials Point, 4/4/2019.





