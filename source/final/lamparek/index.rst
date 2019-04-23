Vue- KDL
========

Why use Vue.js?
---------------

Vue.js is a progressive framework built in Javascript that can build single paged application.
It is also versatile and can be integrated into existing webpages. One of the
biggest advantages of Vue is the ability to integrate and embed it into
existing web projects. It is used only for front end development and is easy to
learn using existing syntax pre-ES2015/ES6.
[WhatIsVue]_


* History

Vue is similar to other frameworks, such as React in terms of the utilization
of a virtual DOM and reactive components. Vue does perform better when it comes
to rendering. It will render sub-components automatically since components
are automatically tracked. In React, developers have to add additional keywords
to avoid renders of the whole DOM. Vue achieves will only render the necessary components
when changed.

* Why to use it (rising popularity)

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

``vue init webpack`` creates a webpack module. Webpack will make use of .vue files and makes it easier
to use both markup with Vue.js syntax. Vue files also organize the style within a component.
Examples will be given once in the hello vue example below.

``cd myVueProject`` changes the directory to the vue project that was just created.

``npm install`` checks the dependencies in package.json and installs any package that is missing.

``npm run dev`` runs the development server and will run the initial boilerplate Vue.js template.
Go to localhost on port 8080 to see the initial app. The tutorial will cover some of the
boilerplate code after it covers the basics of Vue.js
[Installation]_

How to use Vue.js
-----------------

Vue begins when a Vue instance is initialized.

.. code-block:: javascript
    :Caption: Initialize the Vue instance

    var vm = new Vue({
        // additional
    })

Many developers' use vm since Vue can be associated with the view model design
pattern.

The Vue instance takes in a JSON object as an argument. There are many options
that can be passed in. The first and most common option is the data object.


Data can be passed into a Vue instance like this:

.. code-block:: javascript
    :Caption: Data option

    var data = {fun: false}

    var vm = new Vue({
        data: data
    })

    // vm properties can be accessed like this now
    vm.fun == data.fun // when false == false, it returns true

Since the view is reactive, changing a data element will re-render the view model.
To access instance properties and methods, use the $ symbol like so:

.. code-block:: javascript
    :Caption: Instance Methods

    vm.$data === data // => true

Take advantage of all of Vue's instance methods using its API reference.

* Vue Templates

One of Vue's top highlights is the template syntax. Instead of using JSX like
React.js (which requires prior knowledge of ES6), Vue uses templates that mimic
HTML syntax. Data can be interpolated using the "double mustache" syntax.

.. code-block:: html
    :Caption: Templates

    //vm.title = "Hello World!";
    <h1>Title: {{ title}}</h1>

    //javascript can be executed inside the mustaches.
    //vm.counter = 0
    {{ counter + 1 }}

A powerful way of using templates is taking advantage of Vue directives.
A directive is a special HTML attribute using ``v-`` such as ``v-if``.
If data has a list, ``v-for`` can be used to iterate through it and easily
repeat HTML elements.

.. code-block:: html
    :Caption: v-for

    <ul id="example-1">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
    var example1 = new Vue({
      el: '#example-1',
      data: {
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ]
      }
    })

`Vue lists <https://vuejs.org/v2/guide/list.html/>`_

Using Vue components is the core of its framework. Components are created into
reusable HTML elements. Components usually consist of a template and optional
Vue functions. A Vue component can be created like this:

.. code-block:: html
    :Caption: Component

    Vue.component('root-app', {
    data: function () {
        return {
        message: "Hello World!"
    },
    template: "<h1> {{ message }}</h1>

    }})

    //Inside the html
    <div id="demo">
        <root-app></root-app>
    </div>

    // In the js
    new Vue({el: '#demo});

When initializing Vue instances, use the el option to associate the instance
with the div id inside the html.

* Computed Properties

* Event Handling

* Animations [Tutorial]_

* Basic Hello Vue Example

In this example, the project structure will be covered and some basic syntax will be explained.
First and foremost, here is a picture of what the directory structure should look like:

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
