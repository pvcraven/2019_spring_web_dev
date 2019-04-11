Vue
===


* Bullet
* List


* Introduction
* History of Vue
* Declarative Rendering

    * Paragraph 1 [VueMastery]
    * Paragraph 2 [VueIntroduction]

* Conditionals and Loops
* User Input with Vue [w3schools]
* Composing with Components
* Conclusion

This is Vue
-----------

History of Vue
--------------

Vue was created and released in February of 2014 by Evan You [VueWiki]. You had
formally worked for Google in Google's Creative Lab. He heavily used Angular 1
working on different projects and found that many of the features he either did
not like or hardly used [Egghead]. Out of this, Vue was born.

You built a templating library for his own personal and later released it as
Vue.js. As the user community grew and addition features were added, Vue.js grew
from a small templating library into the open-source JavaScript framework that
it is today comparable to Angular which it grew out of [Egghead].

Declarative Rendering
---------------------

The Vue.js system allows users to declaratively render data to the Document
Object Model (DOM). From the surface, it appears like it is rendering a string
template. However, Vue has done a lot of the work behind the scene. The data and
the DOM have been linked making everything reactive [VueIntroduction]. Let's
take a look at an example to get a better understanding.

.. code-block:: HTML
	:caption: Vue Example HMTL

        <div id="app">
            <h1>{{ title }}</h1>
            <h2>{{ author }}</h2>
        </div>

.. code-block:: JavaScript
    :caption: Vue Example JavaScript

        var app = new Vue({
            el: '#app',
            data: {
                title: 'Moby Dick',
                author: 'Herman Melville'
            }
        })


Heading 2
---------

Sub Heading
~~~~~~~~~~~

Citation
--------

.. [VueIntroduction] "`Introduction: What is Vue.js? <https://vuejs.org/v2/guide/>`_" Vue.js. Web. 2 Mar. 2019.
.. [VueWiki] "`Vue.js <https://en.wikipedia.org/wiki/Vue.js>`_" Wikipedia. Wikimedia Foundation, Web. 4 Apr. 2019.
.. [w3schools] "`What is Vue.js? <https://www.w3schools.com/whatis/whatis_vue.asp>`_" w3schools. Refsnes Data, Web. 4 Apr. 2019.
.. [VueMastery] "`The Ultimate Learning Resource for Vue Developers <https://www.vuemastery.com/>`_" Vue Mastery.  Vue Mastery, Web. 4 Apr. 2019.
.. [Egghead] "`Evan You, creator of Vue.js <https://egghead.io/podcasts/evan-you-creator-of-vue-js>`_" Egghead.io. Egghead.io, Web. 9 Apr. 2019.