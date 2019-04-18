Vue- KDL
========

Why use Vue.js?
---------------
* What is Vue.js [WhatIsVue]_
Vue.js is a progressive framework built in Javascript that can build single paged application. It is also versatile and can be integrated into existing webpages.


* History
* How it differs from other frameworks
* How to install [Installation]_
It is possible to use Vue.js without installing it by using their CDN in a <script> tag:

``https://cdn.jsdelivr.net/npm/vue/dist/vue.js``

However, for larger applications, I recommend using npm to download the framework.
To use npm, download `Node.js <https://nodejs.org/en/download/>`_ first.
After installing npm, execute the following in a terminal:

.. code-block:: javascript
    :Caption: Installing Vue.js

    npm install vue
    npm install --global vue-cli

The CLI will be useful for initializing Vue.js projects and running our application server.
To get started, type in these commands into the terminal:

.. code-block:: javascript
    :Caption: Getting Started

    vue init webpack myVueProject
    cd myVueProject
    npm install
    npm run dev

``vue init webpack`` creates a webpack module. Webpack will add .vue files the the module and makes it easier
to use both markup with Vue.js syntax. Examples will be given once in the hello vue example below.

``cd myVueProject`` changes the directory to the vue project that was just created.

``npm install`` checks the dependencies in package.json and installs any package that is missing.

``npm run dev`` runs the development server and will run the initial boilerplate Vue.js template.
Go to localhost on port 8080 to see the initial app.

Now that Vue.js is installed, it is now possible to start the hello vue example.


* Basic Hello Vue Example
In this example, the project structure will be covered and some basic syntax will be explained.
First and foremost, here is a picture of what the directory structure should look like:

How to use Vue.js
-----------------
* The Vue Instance
* Reactive
* Vue Components
* Vue Templates
* Computed Properties
* Event Handling
* Animations [Tutorial]_

A Calculator App
------------------
* Requirements [Tutorial]_
* Implementation
* Conclusion

Citations
---------
.. [WhatIsVue] “`Introduction - Vue.js. <http://www.vuejs.org/v2/guide/index.html#What-is-Vue-js>`_” Vue.js, n.d. Web. 11 Apr. 2019.

.. [Installation] “`VueJS Environment Setup. <https://www.tutorialspoint.com/vuejs/vuejs_environment_setup.htm>`_”,
   Tutorials Point, n.d. Web. 4 Apr. 2019.

.. [Tutorial] Eschweiler, Sebastian. “`Vue.js 2 Quickstart Tutorial 2017. <https://medium.com/codingthesmartway-com-blog/vue-js-2-quickstart-tutorial-2017-246195cfbdd2>`_”,
   CodingTheSmartWay, Medium, 7 Jan. 2017, Web. 11 Apr. 2019.
