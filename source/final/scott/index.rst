ReactJS Scott
==============

React js is a javascript library used for building user interfaces.
Within this informational document, I will go over he short history
of React as well as its importance, how to use it and its basic
funtions and lastly its future opportunity and potential in the
world of technology.  [React_OS]_ [React_hackernoon]_

History
-------

Early signs of react can be traced back to 2010 in the form of XHP which was
a type of PHP released by Facebook with the intention of combating the
problematic occurrences of Cross Site Scripting (XSS) attacks.  Later down
the line a facebook engineer, Jordan Walke, attempted to fix the issue of
web applications making too many round-trips to the server by taking the XHP
into the browser using Javascript.  This resulted in ReactJS. [TheNewStack]_


Why ReactJS is important
------------------------

In usual cases, rendering javascript App Data to a browser is very costly.
With React JS being a library that enables web applications that requires
very little code to implement, this user interface creator and editor is a
very convenient and time saving library to use, not to mention its relatively
new presence in the world of technology. [RisingStack]_


How to use/ Tutorial
--------------------

An important thing to note about React is that it updates
and re-renders automatically without having to reload the
page and uses an XML like syntax called JSX.  React and
ReactDom are essential in using ReactJS.  ReactDom is
an essential element in creating React code and running it.
It basically serves as the bridge between the document object
model and React. [React_hackernoon]_

Laying Down The Foundation
~~~~~~~~~~~~~~~~~~~~~~~~~~

    First and foremost, when coding in ReactJS you want to import the React and ReactDOM libraries along with the
    initial HTML setup.

.. code-block:: text

        <html>
        <head>
        <script src="https://unpkg.com/react@15/dist/react.min.js"> </script><script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js">
        </script>
        <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
        </head>

    As you can see we import the React and React DOM Library through an HTML-like syntax.

The next import is named babel, what is that?  Babel is actually
just as important as the other two imported libraries.  What Babel does is
compile JavaScript code into a compatible version of the web browser it is
being ran on.  In doing this, Babel correctly transforms the syntax and adjusts
your code to the right format.


.. code-block:: text

        <body>
            <div id="root"></div>
            <script type="text/babel">

An important step in any web application is the implementation of the <div>
tag, we set this id to the "root" which is a DOM node and will be managed by
our React DOM which was previously imported.  This all basically serves as
the "on" button to our React application.  Here is where we actually implement
Babel after importing it into the program, ensuring that it will correctly
adjust the JavaScript to the correct format.

Importance Of Components
~~~~~~~~~~~~~~~~~~~~~~~~

    React runs off of the uses of components, it serves as the
    Javascript equivalent to a class.  In order to initialize a
    component you have to extend from the "React-Component" class


.. code-block:: text

        class Welcoming extends React.Component {
            render() {
                return <h1>Welcome to DC's introduction to React!</h1>;
            }
        }

        ReactDOM.render(
            <Hello />,
            document.getElementById("root")
        );

Here we create our class named Welcoming which returns a statement by extending it
through another class that is called the React.Component.  All we do within that
is specify what our class we are extending it from will do, simple stuff.
This brings us to the relevance of what render() does, render is a method for
the React component that basically renders on the page whatever the user puts within the
ReactDOM.render() application.  All document.getElementById "root" entails is the
linking from our class extending React.component to the div tag.


Data Types
~~~~~~~~~~

.. code-block:: text

        ReactDOM.render(
            <Welcoming status="at Simpson College in the Spring" />,
            document.getElementById("root")
        );

One of the most notable aspects of React are its use of Props.  Props are one of the two
types of data in React.  A prop is acts mostly as any class that can be reused.  The code
above is how you initialize a prop, in this case my prop details the when and where of the
person giving the welcoming statement.


.. code-block:: text

    class Welcoming extends React.Component {
        render() {
            return <h1>Welcoming {this.props.status}!</h1>;
        }
    }

As you can see we can call our prop via this.props then the prop we initialized earlier.  What
is rendered on the page is a concatenation of our initial Welcoming message as well as the text
returned by our prop, in doing this you can see that our prop is interchangeable.

.. code-block:: text

    class Welcoming extends React.Component {

        constructor(){
            super();
            this.state = {
                status: "at Simpson College in the Spring (from state)!"
            };
        }

        render() {
            return <h1>Hello {this.state.message}!</h1>;
        }
    }

One downside to a Prop is that it cannot be changed directly by a component.  This is doable when
using a State which is the second of the two data types used in React.  In the code above we use the
constructor method to setup this.state with our preset "key" which is what we already have as status.
Doing what we have so far, the state is initialized.

This is all there is to initializing and using the bare basics of ReactJS. [React_code_tutScott]_

Notable Uses/Examples
---------------------

ReactJS is a JS library used within various popular social networking applications such as Instagram
and of course Facebook.  A similarity these applications share are its ability to consistently
stay up to date by the use of reusable data in combination with ever changing user input.  There is
a lot of opportunity for future potential with ReactJS especially given its support with the
many apps that use it very noticeably the convenient and easily accessible Uber.  ReactJS is a
simple tool that will likely stay relevant within the world of technology and within the
topic of technological growth. [React_FutureScott]_


Conclusion
----------

React is a helpful JavaScript Library that stresses convenience and ease of access.
That is, in my opinion, what makes React so prevelant and why I believe that it is
on the rise.  It makes writing complex code for applications more simple and less
time consuming.  From learning about this Library and what it has to offer I can
confidently say that this will definently continue stay relevant in the future.


Sources
-------

.. [React_OS] "`React, A Javascript library for building user interfaces. <https://reactjs.org/>`_" reactjs, Facebook Open Source, 2019
.. [React_hackernoon] "`React.js: a better introduction to the most powerful UI library ever created. <https://hackernoon.com/react-js-a-better-introduction-to-the-most-powerful-ui-library-ever-created-ecd96e8f4621>`_" Medium, 03 Sep. 2018
.. [RisingStackScott] "`The History of React.js on a Timeline. <https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/>`_" RisingStack, March. 2018
.. [TheNewStackScott] "`JavaScript's History and How it Led To ReactJS. <https://thenewstack.io/javascripts-history-and-how-it-led-to-reactjs/>`_" TheNewStack, 25 Jul. 2014
.. [React_FutureScott] "`10 Famous Apps Using ReactJS Nowadays. <https://brainhub.eu/blog/10-famous-apps-using-reactjs-nowadays/>`_" Brainhub.
.. [React_code_tutScott] "`Learn React.js in 5 minutes. <https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4>`_" freecodecamp, 10 Apr. 2018

