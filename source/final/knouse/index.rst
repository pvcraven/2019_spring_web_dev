Google Accelerated Mobile Pages
===============================

Outline
-------

* Introduction

    * What is AMP?

    * What benefits does it have?

* Paragraph 1: History & Development

    * Why was it made?

* Paragraph 2: How it works & Simple sample code

    * How AMP makes pages load quicker

    * Short Sample code block

* Paragraph 3: More Code Samples & Example GIF

    * Show code for a web page

    * Insert GIF of how fast it loads

* Conclusion

Introduction
------------
The **Accelerated Mobile Pages** (AMP) Project, is an open-source HTML framework
created by Google, used to create web pages that load smoothly and quickly. AMP
prioritizes end user experience, even if it is harder on the developer. It is
designed to "fix the web of today, not the web of tomorrow". This means that
when developers find optimizations that aren't possible with today's platforms,
they should participate in the development of standards to get these
optimizations implemented. Including components on your web page that can't
reliably load quickly, or perform at 60fps or higher, violates the reason that
AMP exists, to make mobile pages load faster. Using AMP is a must for many
websites, and the near instant loading allows for a great user experience.

History
-------
Google announce the AMP project on October 7, 2015. Their goal was to create a
tool to improve the performance of the mobile web. Over 30 news sites and
technology companies were announced as collaborators, including Twitter,
Pinterest, LinkedIn, and WordPress. The first AMP pages seen by the public were
viewed in February 2016 when Google began showing AMP versions of web pages in
its search results. Initially, AMP pages were only used for the "Top Stories"
section of Google's mobile search results. By September 2016, Google expanded
this to the main search results. AMP links are designated with a
lightning bolt symbol.

In September 2016, Microsoft announced AMP support in Bing apps for mobile
phones. A year after AMP was launched, Adobe reported that AMP pages accounted
for 7% of all web traffic for top US publishers. By May 2017 Google reported
that over two billion AMP pages had been published globally.

How It Works
------------

Optimization 1
~~~~~~~~~~~~~~
AMP has 7 optimizations it attributes to its success in loading mobile pages.
The first of these is to execute all JavaScript asynchronously. JavaScript is
powerful, but can cause delays to a page's rendering. To combat this, AMP only
allows asynchronous JS, and AMP pages cannot include any author written JS.
Instead of writing your own JS, interactive page features are handled by custom
AMP elements. These elements might run JS themselves, but it has been designed
to not cause performance issues.

Optimization 2
~~~~~~~~~~~~~~
The next optimization is to size all resources statically. Any external resource
like images and ads, must state their size in the HTML so AMP can layout each
element's size and position before anything else is loaded. This prevents pages
from jumping around and changing layouts after these resources are loaded.

Optimization 3
~~~~~~~~~~~~~~
The third optimization is not letting extension mechanisms block rendering. AMP
supports extensions for things like Instagram embeds and tweets. While these
require additional HTTP requests, these requests don't block page layout and
rendering. Any page that uses a custom script must tell the AMP system that they
will eventually add in a custom tag.

Optimization 4
~~~~~~~~~~~~~~
The fourth optimization is to keep all third-party JavaScript out of the
critical path. In most cases, third party JS uses synchronous JS loading. For
example, if you have five ads on your page, and each of them cause three
synchronous loads, each with a 1 second latency, that is 15 seconds of loading
just for JS. AMP pages allow third party JS but only in certain iframes. By only
allowing them in iframes, they can’t block the execution of the main page.

Optimization 5
~~~~~~~~~~~~~~
The fifth optimization is that all CSS must be inline and size bound. CSS blocks
all rendering, this causes the page load to get bloated. In AMP pages, only
inline styles are allowed. This helps reduce the number of HTTP requests.  The
inline style sheet has a max size of 50kb, which is big enough for good looking
pages, but still requires practice to keep things clean.

Optimization 6
~~~~~~~~~~~~~~
The sixth optimization is to only run GPU accelerated animations. The best way to
run fast optimizations, is to run them on the GPU. The GPU knows how to do
different animations quickly, but it can't update the page layout. AMP only
allows animating and transitioning with transforms and opacity so that the page
layout doesn’t need to be reloaded.

Optimization 7
~~~~~~~~~~~~~~
The seventh optimizations is to prioritize resource loading. AMP controls the
downloads for all resources and it loads only what is needed. When AMP
downloads resources, it optimizes them so the most important resources are
loaded first. Images and ads are only downloaded if they might be seen by the
user.

Code Examples
-------------

.. code-block:: html

	:caption: AMP Hello World

	<!doctype html>
    <!-- This is the AMP declaration. `<html amp>` works too.-->
    <html ⚡>

    <head>
      <meta charset="utf-8">
      <title> Hello World</title>
      <!-- The AMP runtime must be loaded as the second
      child of the `<head>` tag.-->
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <!--
        AMP HTML files require a link pointing to the regular HTML. If no HTML
        version exists, it should point to itself.
      -->
      <link rel="canonical" href="https://amp.dev/documentation/examples/introduction/hello_world/index.html">
      <!--AMP HTML files require a viewport declaration.-->
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <!--CSS must be embedded inline.-->
      <style amp-custom>
        h1 {
          color: blue;
        }
      </style>
      <!--The AMP boilerplate.-->
      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    </head>

    <body>
      <!--
        Most HTML tags can be used directly in AMP HTML.
      -->
      <h1>Hello World!</h1>
      <!--
        Certain tags, such as the `<img>` tag, are replaced with equivalent or
        slightly enhanced custom AMP HTML tags
      -->
      <amp-img src="/static/samples/img/amp.jpg" width="1080" height="610" layout="responsive"></amp-img>

    </body>
    </html>

The code above is a basic example for how to show text and images using
AMP. As you can see, AMP is very similar to HTML in its use of tags. For
anyone proficient in HTML, AMP would be fairly easy to pick up.

Conclusion
----------
AMP is a very useful tool for web developers of all skill levels. Websites
created using AMP put the user first, by creating pages that load quick and
don’t jump around when new ads or pictures load in. The optimizations that the
AMP team has put in place really speed up the loading process for all devices,
not just mobile devices. By using AMP, developers can create stunning pages with
only a bit of practice and a bit of creativity.
Sources
-------

.. _'Accelerated Mobile Pages Project.' Accelerated Mobile Pages Project – AMP, AMP Project: www.ampproject.org/.
.. _'Accelerated Mobile Pages.' Wikipedia, Wikimedia Foundation, 3 Apr. 2019: en.wikipedia.org/wiki/Accelerated_Mobile_Pages.