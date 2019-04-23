ReactJS Scott
==============

React js is a javascript library used for building user interfaces. [React_OS]_ [React_hackernoon]_

Preface
-------

What is React JS?  What will I cover in this assessment.  Thesis *To the point*


History
-------

Early signs of react can be traced back to 2010 in the form of XHP which was
a type of PHP released by Facebook with the intention of combating the
problematic occurrences of Cross Site Scripting (XSS) attacks.  Later down
the line a facebook engineer, [name here], attempted to fix the issue of
web applications making too many round-trips to the server by taking the XHP
into the browser using Javascript.  This resulted in ReactJS. [TheNewStack]_

Place something here
~~~~~~~~~~~~~~~~~~~~


Why ReactJS is important
------------------------

In usual cases, rendering javascript App Data to a browser is very costly.
With React JS being a library that enables web applications that requires
very little code to implement, this user interface creator and editor is a
very convenient and time saving library to use, not to mention its relatively
new presence in the world of technology. [RisingStack]_


How to use/ Tutorial
--------------------

React updates and re-renders automatically without having to reload the
page. (Add more of a description first)
XML like syntax called JSX (edit and/or change)
(Define ReactDOM and React library and also Babel importance)

(Add code in this section)
.. code-block:: javascript
	:Caption: First, import React and ReactDOM libraries.  I did this through an HTML file

    <html>
    <head>
    <script src="https://unpkg.com/react@15/dist/react.min.js"> </script><script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js">
    </script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel">

        /*
        ADD REACT CODE HERE........................................
        function formatAudience(user) {
          return user.firstName + ' ' + user.lastName;
        }

        function formatGreeting(owner){
          return 'Welcome to ' + owner.name
          + ' presentation on ReactJS'
        };

        const user = {
          firstName: 'Simpson',
          lastName: 'Students',
        };

        const owner = {
          name: 'my'
        };

        function greetingStatus() {

        const element = (
          <div>
            <h1>Hello, {formatAudience(user)}.</h1>
            <h2>{formatGreeting(owner)}!</h2>
            <h3>It is Currently {new Date().toLocaleTimeString()}.</h3>
          </div>);

        ReactDOM.render(element, document.getElementById('root'));
        }

        setInterval(greetingStatus, 1000);
        ADD REACT CODE HERE........................................
        */

        </script>
    </body>
    </html>



Notable Uses/Examples
---------------------

ReactJS is a JS library used by various popular


Future potential (optional)
---------------------------


Conclusion
----------


Sources
-------

.. [React_OS] "`React, A Javascript library for building user interfaces. <https://reactjs.org/>`" reactjs, Facebook Open Source, 2019

.. [React_hackernoon] hackernoon, Llya Suzdalnitski. "`React.js: a better introduction to the most powerful UI library ever created. <https://hackernoon.com/react-js-a-better-introduction-to-the-most-powerful-ui-library-ever-created-ecd96e8f4621>`" Medium, 03 Sep. 2018

.. [RisingStackScott] Papp, Andrea. "`The History of React.js on a Timeline. <https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/>`" RisingStack, March. 2018

.. [TheNewStackScott] Dawson, Chris. "`JavaScript's History and How it Led To ReactJS. <https://thenewstack.io/javascripts-history-and-how-it-led-to-reactjs/>`" TheNewStack, 25 Jul. 2014

https://brainhub.eu/blog/10-famous-apps-using-reactjs-nowadays/

https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4 --> (intro tutorial)


