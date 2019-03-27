How-To Examples
===============

Aside from the documentation for [sphinx]_, here are some examples that people
ran into the most problems with when doing the writing last year.

Citation Example
----------------

For citations, we'll mostly try to follow the MLA format. You should include
in-text citations. At the end of a phrase, paragraph, or section where you use
the information, include the citation. [PurdueMLA]_

This is a standard order for a text citation. [TextCitation]_

If you use an autogenerator for your reference, watch for "nd" and "np". You
Sometimes I see student citations that have both np and a publisher listed. That
makes no sense. Sometimes the URL includes the date in it. You can use
that.

Don't list "espn.com" as the publisher. Make it "ESPN". Search for an
"about" page if you aren't sure who published.

Watch out for: Don't use Google as a source, unless it actually came from
Google. Google indexes documents and images on the web. Find  the original
locaiton.

Watch out for: A URL is not a citation. Repeat after me. A URL is not a citation.
Do not every, in this class or any other, use a simple URL as a citation.


Example
~~~~~~~

Wikipedia says that the Directory Traversal Attack [dta]_ is a kind of
attack that involves traversing directories.

If I forgot how to do reStructuredText I could look at the Sphinx website [sphinx]_.

.. [PurdueMLA] "`MLA In-Text Citations: The Basics <https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_in_text_citations_the_basics.html>`_" Purdue University. Purdie Online Writing Lab, 3/27/2019.

.. [TextCitation] Author's Last name, First name. "Title of Source." Title of Container, other contributors, version, numbers, publisher, publication date, location.

http://www.bibme.org/mla

.. [dta] "`Directory traversal attack <https://en.wikipedia.org/wiki/Directory_traversal_attack>`_." Wikipedia. Wikimedia Foundation, 07 Feb. 2017. Web. 15 Feb. 2017.
.. [sphinx] Georg Brandl. "`reStructuredText Primer <http://www.sphinx-doc.org/en/stable/rest.html>`_" Sphinx Team, Web. 15 Feb. 2017.



Code Samples
------------

Need code in your program? Here's how.

In-line code sample
~~~~~~~~~~~~~~~~~~~

You can do an in-line code example of how a
for loop works, such as ``for (int i=0; i < 10; i++) {``, by surrounding it
with back-tics.

In-document code sample
~~~~~~~~~~~~~~~~~~~~~~~

Here, I have a longer code block in the document.

.. code-block:: javascript
	:caption: Const Declaration

	const constant = 5
	print(constant) // 5

Including an external file
~~~~~~~~~~~~~~~~~~~~~~~~~~

This loads a file OUTSIDE the document. I love this because I can run the
file to make sure it works. I am also highlighting a line and adding line
numbers.

.. literalinclude:: example.js
    :linenos:
    :language: JavaScript
    :caption: example.js
    :emphasize-lines: 5

Image Examples
--------------

You can do images as a figure with a caption:

.. figure:: corgi.jpg
    :width: 50%

    Corgi image from [freeclassifieds]_.

Or just as an image:

.. image:: corgi.jpg
    :width: 25%

.. [freeclassifieds] Chris White. "`Pembroke Welsh Corgi Puppies Available <https://free-classifieds-usa.com/for-sale/animals/pembroke-welsh-corgi-puppies-available_i111176>`_" Free Classifieds USA, Web. 14 Jul. 2018.

Call-outs
---------

You can create your own call-outs.

.. warning::

    Make sure you match case with images! It may work on your computer, but
    it won't work when you deploy it.

But they don't have to be so angry.

.. note::

    Only you can prevent forest fires. Really. Because we cut back on
    the budget and there isn't anyone else.

