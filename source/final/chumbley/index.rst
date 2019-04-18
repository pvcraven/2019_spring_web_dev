Vue
===

* Introduction



* Conditionals and Loops
* Conclusion

This is Vue
-----------



History of Vue
--------------

Vue was created and released in February of 2014 by Evan You [VueWiki]_. You had
formally worked for Google in Google's Creative Lab. He heavily used Angular 1
working on different projects and found that many of the features he either did
not like or hardly used [Egghead]. Out of this, Vue was born.

You built a templating library for his own personal and later released it as
Vue.js. As the user community grew and addition features were added, Vue.js grew
from a small templating library into the open-source JavaScript framework that
it is today comparable to Angular which it grew out of [Egghead]_.

Declarative Rendering
---------------------

The Vue.js system allows users to declaratively render data to the Document
Object Model (DOM). From the surface, it appears like it is rendering a string
template. However, Vue has done a lot of the work behind the scene. The data and
the DOM have been linked making everything reactive [VueIntroduction]_. Let's
take a look at an example to get a better understanding.


HTML Example

.. code-block:: HTML
	:caption: Vue Example HTML

        <!DOCTYPE html>

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <title>Vue Page</title>
        </head>

        <body>

        <div id="app">
            <h1>{{ title }}</h1>
            <h2>{{ author }}</h2>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script type="text/javascript" src="vue.js"></script>
        </body>
        </html>

JavaScript Example

.. code-block:: JavaScript
    :caption: Vue Example JavaScript

        var app = new Vue({
            el: '#app',
            data: {
                title: 'Moby Dick',
                author: 'Herman Melville'
            }
        })

What does it mean for everything to be reactive? Run the above HTML and open the
browser's JavaScript console. You can now set title and author to different
values by typing ``app.title = "Something"`` or ``app.author = "SomethingElse"``.
The text should then render to whatever you set the new value to be.


Vue Directives
--------------

You have probably noticed that double braces ``{{ }}`` are used as place-holders
for the data that is rendered from the javascript. With Vue.js, you can also
call directives, which are HTML attributes, with the prefix ``v-`` [w3schools]_.
The example below will walk you through a few examples of different Vue.js
directives.

HTML Example

.. code-block:: HTML
	:caption: Vue Directive Example HTML

        <div id="app">
            <p>{{ message }}</p>
            <p><input v-model="message"></p>

            <span v-bind:title="secretMessage">
                Hover over me!
            </span>
        </div>

JavaScript Example

.. code-block:: JavaScript
    :caption: Vue Directive Example JavaScript

        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello there',
                secretMessage: 'This is a secret message'
            }
        })

This example shows the v-model and the v-bind directive. Like before, everything
is reactive and both the message and the secretMessage can be changed with
``app.message = "Something"`` or ``app.secretMessage = "Something"``.



Sub Heading
~~~~~~~~~~~

Citation
--------

.. [VueIntroduction] "`Introduction: What is Vue.js? <https://vuejs.org/v2/guide/>`_" Vue.js. Web. 2 Mar. 2019.
.. [VueWiki] "`Vue.js <https://en.wikipedia.org/wiki/Vue.js>`_" Wikipedia. Wikimedia Foundation, Web. 4 Apr. 2019.
.. [w3schools] "`What is Vue.js? <https://www.w3schools.com/whatis/whatis_vue.asp>`_" w3schools. Refsnes Data, Web. 4 Apr. 2019.
.. [Egghead] "`Evan You, creator of Vue.js <https://egghead.io/podcasts/evan-you-creator-of-vue-js>`_" Egghead.io. Egghead.io, Web. 9 Apr. 2019.