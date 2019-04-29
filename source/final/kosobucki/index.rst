Playing with ReactJS
====================

Introduction
------------

Javascript libraries and HTML coding has grown since the initial years of the
world wide internet. Companies had abided with using HTML for years as it works
and can be easily taught to people. One of the javascript libraries that exist 
is ReactJS, a free to use library developed by Facebook and released freely to
anyone. ReactJS, despite being free, must be looked into detail before used, to
understand what it is and how to use it.

ReactJS, What is it?
--------------------

ReactJS or [rjs] is a Javascript library geared towards designing and updating 
user interface on websites while removing the requirement to update already 
existing code. The library is meant to handle the front-end development for user 
friendly interfaces in a constant change of our world and the need to get up to 
date information on a website. The started implimentation of ReactJS was for one 
website, facebook, and recently changed from a company exclusive to an open 
source resourcewhich people have contributed over the years. It is still used 
today by plenty of websites for its ease of implimentation since its release.

Reactjs brief history.
----------------------

The way ReactJS had started out to achieve its user-friendly ease of use was 
through slow implimentation, taking two years according to RisingStack 
[rjs_history]_. The original purpose of ReactJS was the need for a better code. 
This was a result of Facebook having increased amount of added app features 
around 2010 rendered the app a update logistical nightmare. The issue hit its 
peak when engineers at Facebook could not keep up with the updates. At the third 
year, ReactJS became open source with initial rocky starts but it has been able 
to continue to today's world. Since its free release, more and more sites have 
used Reactjs to improve their sites' user experiences but that does not mean 
Reactjs will be used forever as our technology develops.

ReactJS, who uses it?
---------------------

Since Reactjs became open source, many websites have implimented ReactJS and 
some of the [built_sites]_ people use to this day. Its focus on a better user 
experience has drawn more and more users to sites using Reactjs with their code. 
One of the websites using this library, Imgur, an image sharing website, had 
increased its userbase significantly using ReactJS. Reactjs has shown to be a 
very effective tool for website development.

Reactjs with other libraries
----------------------------

Within web development there are times where sites do not exclusively use one 
library but multiple libraries. Reactjs seems to be one of the external 
libraries added onto existing code; which was the design purpose anyway. 
Reactjs is not what is cookie cut javascript library nor a framework, but both. 
Why [reactjs_classification]_ could be considered both is its flexibility and 
traits that define a library and framework.

Example/Experiment of Reactjs
-----------------------------

.. code-block:: text
	:caption: Fun with lines

	function Square(props) {
	return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
	);
	}

	class Board extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      squares: Array(16).fill(null),
      xIsNext: true,
    };
	}

	handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? '-' : '|';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
	}

	renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
	}

	render() {

    return (
      <div>
         <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
    );
	}
	}

	class Game extends React.Component {
	render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
	}
	}

	ReactDOM.render(
	<Game />,
	document.getElementById('root')
	);

The code above is a simple program that flips between a '-' and '|' on each mouse
click. The squares will not return to a blank square. How it is made is using 
two classes, one for displayiny the boxes and another to handle changing the
boxes when clicked. The box has functions to handle how many boxes are on 
screen, when the user clicks on a box, changing what the box contains, and 
swapping between '-' and '|' on each click. It is a small program which can be
entertaining for a little while.

.. code-block:: text
	:caption: Display
	
	class Game extends React.Component {
	render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
	}
	}

	ReactDOM.render(
	<Game />,
	document.getElementById('root')
	);
	
To break it down, this section of code above is the main display class. It 
simply calls the other class to output the boxes and their states constantly.
It automatically updates itself while in use.

.. code-block:: text
	:caption: Array Box
	
	class Board extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      squares: Array(16).fill(null),
      xIsNext: true,
    };
	}
	
This section of code above is for the initial array that is used by the squares.
It fills the squares with an empty null value that the user can see is empty
before they modify it by clicking on the boxes.

.. code-block:: text
	:caption: Square Functions
	
	function Square(props) {
	return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
	);
	}
	
	renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
	}

	render() {

    return (
      <div>
         <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
    );
	}
	}
	
The above code block, while it is quite large to interpet simply handle the
squares. The first two functions, square and render square, handles the 
interaction of the squares when the user clicks on one of the squares. 
The last function, render, handles the status of the squares and keeps them in
a standard array.

.. code-block:: text
	:caption: Click Action
	
	handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? '-' : '|';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
	}
	
This section of code handles the data which will update the previous two square
functions for changing between a - and a | to be displayed in each square. This
does not allow a null to be entered again. The only way to get blank squares
again is refreshing the page.

Reactjs Issues
--------------

There are some problems with Reactjs in comparing other libraries. Reactjs 
[versus]_ other libraries and reasons to [use_reactjs] and [not_use_reactjs] 
explain what those problems are. One of the key arguments is while it can be 
very flexible, it has a harder time being flexible in complex interactive web
projects.

Additional Problems by Code Design
----------------------------------

When the code was developed, there was difficulty finding an option to allow 
additional symbols to be possible when the user clicks. Research needs to be
done with testing to see if the program could have something added to cycle
between any number of symbols and letters even. The lack of research and time
left to develop the code further limited what it could do significantly.

Conclusion
----------

Reactjs is another library that has options. Some of these options are from its
intended use before it became free to use by anyone. Reactjs does not seem like 
a final soultion to all the problems coding in HTML can bring but it has been
used successfully on multiple websites. Reactjs is a quality optional library to
use for projects within reason.

Sources
-------

.. [rjs] "`Reactjs website <https://reactjs.org/>`_." Facbook Open Source, Facebook Inc, 04/09/2019. Web. ND.
.. [built_sitessites] "`Top 32 Sites Buit with ReactJS <https://medium.com/@coderacademy/32-sites-built-with-reactjs-172e3a4bed81>`_." Medium, Coder Academy, 04/09/2019. Web. 06/09/2016.
.. [rjs_historyhistory] "`The History of React.js on a Timeline <https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/>`_." RisingStack, Andrea Papp, 04/09/2019. Web. 04/04/2018.
.. [use_ractjs] "`What Is ReactJS and Why Should We Use It? <https://www.c-sharpcorner.com/article/what-and-why-reactjs/>`_." C-sharpcorner, Nitin Pandit, 04/09/2019. Web. 11/14/2018.
.. [versus] "`Comparison with Other Frameworks <https://vuejs.org/v2/guide/comparison.html>`_." Vue.js, Vue.js, 04/09/2019. Web. ND.
.. [not_use_reactjs] "`More Than React: Why You Shouldn't Use ReactJS for Complex Interactive Front-End Projects, part 1 <https://www.infoq.com/articles/more-than-react-part-i>`_." InfoQ, Yang Bo, 04/09/2019. Web. 01/30/2017.
.. [reactjs_classification] "Is React a library or framework and why? <https://www.quora.com/Is-React-a-library-or-a-framework-and-why>`_." Quora, Brian Engelhardt, 11/13/2017, 04/18/2019
