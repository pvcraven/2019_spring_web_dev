Vue
===

This is Vue
-----------

Vue.js is a progressive open-source JavaScript framework built for the purpose
of building user interfaces. The Vue library was designed to be easily
integrated with other libraries and existing projects. Vue.js architecture
focuses on declarative rendering and component composition which we will get
into in the later sections. [VueWiki]_ [VueIntroduction]_

To include Vue.js within an HTML document, add the following script:
``<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>``

Note that this is the development version of Vue.js. [VueIntroduction]_



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
~~~~~~~~~~~~~~

You have probably noticed that double braces ``{{ }}`` are used as place-holders
for the data that is rendered from the javascript. With Vue.js, you can also
call directives, which are HTML attributes, with the prefix ``v-`` [w3schoolsVue]_.
The ``v-`` prefix indicates that the directive is a special attribute provided by
the Vue.js library. The example below will walk you through a few examples of
different Vue.js directives.

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

The ``v-model`` directive creates a textbox for the user to interact with. In
the above example, the ``v-model`` directive is tied to the ``{{ message }}``
place-holder. Whatever the user types into the textbox changes what the user
sees above the textbox. The ``v-model`` directive is great with working with
user input.

The ``v-bind`` directive binds and HTML element to a Vue instance. In the
above example, ``title`` is bound to the vue instance of ``secretMessage``.
Whenever the user hovers over the title, the value of secretMessage appears to
them.

These are just a few examples of the many Vue.js directives. We will work with
a few more directives in the examples below.

Conditionals and Loops
~~~~~~~~~~~~~~~~~~~~~~

Using directives, Vue gives you the ability to write if statements and for loops
with ``v-if`` and ``v-for``. The following example walks you through how to do
conditionals and loops in Vue.js.

HTML Example

.. code-block:: HTML
	:caption: Vue Loops and Conditionals Example HTML

        <div id="app">
            <p v-if="happy">Hello there friend!</p>
            <p v-else>Go away.</p>
            <button v-on:click="changeMood">Change Mood</button>

            <p>Grocery List</p>
            <ol>
                <li v-for="groceries in foods">
                    {{groceries.text}}
                </li>
            </ol>
        </div>

JavaScript Example

.. code-block:: JavaScript
    :caption: Vue Loops and Conditionals Example JavaScript

        var app = new Vue({
            el: '#app',
            data: {
                happy: true,
                foods: [
                    {text: 'Bread'},
                    {text: 'Milk'},
                    {text: 'Spinach'}
                ]
            },
            methods:{
                changeMood: function(){
                    this.happy = !this.happy;
                }
            }
        })

The ``v-if`` directive and ``v-else`` directive, as you could guess, got
together to allow you to do if statements and if-else statements. In the above
example, the directive checks the value of the boolean variable ``happy`` and
sets the text accordingly.

The ``v-for`` directive, as you would assume, allows you to do a for loop. In
the example above, the for loops runs through the elements in ``food`` and
prints them on to the page.

Component Composition
---------------------

Another important concept to Vue is the Component System. The Component
System is this abstract idea that you can build large scale application with
small, self-contained, and reusable parts. [VueIntroduction]_ Let's take a
look at an example.

HTML Example

.. code-block:: HTML
	:caption: Vue Components Example HTML

        <div id="componentsExample">
            <button-counter></button-counter>
            <button-counter></button-counter>
            <button-counter></button-counter>
        </div>

JavaScript Example

.. code-block:: JavaScript
    :caption: Vue Loops and Conditionals Example JavaScript
        Vue.component('button-counter', {
            data: function () {
                return {
                    count: 0
                }
            },
            template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
        })

        new Vue({ el: '#componentsExample' })

In the above example, we have created a component called ``button-counter`` in
the JavaScript code. This component creates a button that keeps track of how
many times it has been pushed. In the HTML code, the component is called upon
three times which creates three separate buttons with the same funtion. Each
button keeps track of its own count and not the overall count.

Conclusion
----------

This has been a short introduction to Vue.js which has shown you some of the
key attribute of Vue.js. Declarative rendering makes the Document Object
Model(DOM) reactive to the data. Each time the data is changes, the DOM is
updated as well. Component composition is another big attribute of Vue.js.
Components allow you to make large scale applications with small, reusable
parts.

Citation
--------

.. [VueIntroduction] "`Introduction: What is Vue.js? <https://vuejs.org/v2/guide/>`_" Vue.js. Web. 2 Mar. 2019.
.. [VueWiki] "`Vue.js <https://en.wikipedia.org/wiki/Vue.js>`_" Wikipedia. Wikimedia Foundation, Web. 4 Apr. 2019.
.. [w3schoolsVue] "`What is Vue.js? <https://www.w3schools.com/whatis/whatis_vue.asp>`_" w3schools. Refsnes Data, Web. 4 Apr. 2019.
.. [Egghead] "`Evan You, creator of Vue.js <https://egghead.io/podcasts/evan-you-creator-of-vue-js>`_" Egghead.io. Egghead.io, Web. 9 Apr. 2019.