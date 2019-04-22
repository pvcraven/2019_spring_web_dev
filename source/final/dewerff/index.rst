React JS
========

Outline 
------- 
* Introduction - What is React JS? Overall important points. Thesis statement; 
  make it obvious.
* History
* How was it created? [ReactHistory]_. 

1. How React is used/Tutorial [FullStackReact]_

  * Facebook, Instagram
  * Basic code samples (Add example if-else, print statements) [ReactJS]_
  * Tutorial

2. Why use React?
  
  * Features - Virtual DOM, JSX, Ease of Use, one-way data binding [Hackernoon]_
  * Increase in Popularity
  * Virtual DOM
  
3. Future of React
  
  * Battle between other options (Angular, Vue). Differences and similarities 
    of the frameworks.	
  * Market Demand [Hackernoon]_

* Conclusion

Introduction
------------

History
-------
	ReactJS originally started as a Javascript port of XHP, a version of PHP created by Facebook. The problem was to have dynamic web applications, it requires many trips to the server, which is not ideal for XHP. So, a Facebook engineer, Jordan Wilke, took it to the browser using Javascript; the result being ReactJS. It was open sourced in May of 2013. At first, people were unsure of React, but the creators quickly tried to turn that around by having a "React Tour." [ReactHistory]_
	
How React is Used
-----------------
In simple terms, ReactJS works by storing the state of an application internally, then only re-rendering the content when the state changes. The largest piece of content in all React applicatioins are called components. It renders some sort of output such as a button or input field. To write these components, a javascript function or class can be used. These components will correspond and change other interface elements.  In the tutorial I have prepared, I will show how a simple form and button can be created using components and how these componenets can change interface elements. [FullStackReact]_ Another important aspect of React are States. These allow components to change the interfaced based on events such as a button click. 
	
Tutorial
--------

Advantages
----------
One of the biggest advantages React has over other frameworks is that is uses a Virtual Document Object Model (DOM). So, instead of changing the document in the browser, it does these changes on a DOM that is run from memory. Using the virtual DOM, React determines which components have changed and only sends those changes to the browser's DOM instead of reloading the entire page. [Hackernoon]_

Future of React
---------------

Conclusion
----------

Sources
-------
.. [FullStackReact] Lerner, Ari "`30 Days of React: What is React? <https://www.fullstackreact.com/30-days-of-react/day-1/>`_" Fullstack React, 2017. Web. 2 April 2019.

.. [ReactHistory] Dawson, Chris "`Javascript's History and How it led to ReactJS <https://thenewstack.io/javascripts-history-and-how-it-led-to-reactjs/>`_" The New Stack, 25 July 2014. Web. 4 April 2019. 

.. [ReactJS] "`Intro to React <https://reactjs.org/>`_" Facebook. Facebook Open Source, Web. 4 April 2019.

.. [Hackernoon] Kostrzewa, Denis "`Is React.js the Best Javascript Framework in 2018? <https://hackernoon.com/is-react-js-the-best-javascript-framework-in-2018-264a0eb373c8>`_" Hacker Noon. Hacker Noon, 19 July 2018. Web. 8 April 2019.
