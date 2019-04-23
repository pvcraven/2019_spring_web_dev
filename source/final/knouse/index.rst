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
AMP has 7 optimizations it attributes to its success in loading mobile pages.
The first of these is to execute all JavaScript asynchronously. JavaScript is
powerful, but can cause delays to a page's rendering. To combat this, AMP only
allows asynchronous JS, and AMP pages cannot include any author written JS.
Instead of writing your own JS, interactive page features are handled by custom
AMP elements. These elements might run JS themselves, but it has been designed
to not cause performance issues.

The next optimization is to size all resources statically. Any external resource
like images and ads, must state their size in thr HTML so AMP can layout each
element's size and position before anything else is loaded. This prevents pages
from jumping around and changing layouts after these resources are loaded.

The third optimization is not letting extension mechanisms block rendering. AMP
supports extensions for things like Instagram embeds and tweets. While these
require additional HTTP requests, these requests don't block page layout and
rendering. Any page that uses a custom script must tell the AMP system that they
will eventually add in a custom tag.

The fourth optimization is to keep all third-party JavaScript out of the
critical path.

Sources
-------

.. _'Accelerated Mobile Pages Project.' Accelerated Mobile Pages Project – AMP, AMP Project: www.ampproject.org/.
.. _'Accelerated Mobile Pages.' Wikipedia, Wikimedia Foundation, 3 Apr. 2019: en.wikipedia.org/wiki/Accelerated_Mobile_Pages.