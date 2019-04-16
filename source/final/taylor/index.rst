ReactJS Project
======================

Outline
-------
* Introduction - What the topic is about. Cover highlight points.
* Last sentence should be a thesis statement!
* What is ReactJS, why the UI Library is popular?  

* History of ReactJS / Library of Code
    * Paragraph 1
    * Paragraph 2
    * Paragraph 3

* ReactJS Example Code
    * Paragraph 1
    * Paragraph 2
    * Paragraph 3

* ReactJS Notable Features
    * Paragraph 1
    * Paragraph 2
    * Paragraph 3

* Reception of ReactJS
    * Paragraph 1
    * Paragraph 2
    * Paragraph 3

* ReactJS Internationalization
    * Paragraph 1
    * Paragraph 2
    * Paragraph 3

* Conclusion

Introduction to ReactJS
-----------------------
ReactJS is a Javascript library that specializes in building user interfaces.
This JavaScript library makes it easy to create user interfaces for your programming
application or to update and render the proper components in your application
change correctly. In ReactJS, you are able to use declarative views which makes
your code easier to read and to debug. ReactJS is a component based Javascript
library that focuses on building encapsulated components that are able to manage
their own state which can help the user compose some of the most easiest or most
complex user interfaces.

History of ReactJS
------------------
ReactJS began with developer

ReactJS Example Code
-------------------
Tic-Tac-Toe Tutorial
~~~~~~~~~~~~~~~~~~~~
This particular block of code derives from the ReactJS tutorial. This code lets
the user create and interact with a tic-tac-toe board.

.. code-block:: javascript
    :caption: Starting Tic-Tac-Toe

    function Square(props)
    {
        return(
        <button className="square" onClick={props.onClick}>
        {props.value}
        </button>
        );
    }
    class Board extends React.Component
        {
            renderSquare(i)
            {
                return (
                <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                />
                 );
            }
        }
    }

    render()
        {
        return (
            <div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
            </div>
            );
        }

    class Game extends React.Component
        {
            constructor(props)
                {
                    super(props);
                    this.state =
                        {
                             history: [{
                                squares: Array(9).fill(null)
                                }],
                        xIsNext: true
                        };
                }
        }

Board Example
~~~~~~~~~~~~~
This particular chunk of code is able to create a game tic-tac-toe game board.
The code creates an array of nine different boxes.

.. image:: board.PNG
    :width: 25%

Player Input Code
~~~~~~~~~~~~~~~~~
This block of code is able to let the user click on the game board. This lets
the user click and place an X or an O.

.. code-block:: javascript
    :caption: Getting User Input

 handleClick(i)
    {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i])
            {
                return;
            }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState(
            {
                history: history.concat([
                    {
                        squares: squares
                    }]),
                xIsNext: !this.state.xIsNext,
            });
    }

 render()
    {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) =>
        {
            const desc = move ?
            'Go to move #' + move :
            'Go to game start';
          return (
            <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
            );
        });
    }

 let status;
    if (winner)
        {
            status = 'Winner: ' + winner;
        }
    else
    {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return
        (
        <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

 ReactDOM.render
    (
    <Game />,
     document.getElementById('root')
    );

function calculateWinner(squares)
    {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++)
      {
        const [a, b, c] = lines[i];
     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
         {
            return squares[a];
         }
    }
  return null;
}

Player Input Example
~~~~~~~~~~~~~~~~~~~~

.. image:: board1.PNG
    :width: 25%

ReactJS Notable Features
------------------------

Reception of ReactJS
--------------------

ReactJS Internationalization
----------------------------

Conclusion
----------
Sub Heading
~~~~~~~~~~~

Citations
---------
..[ReactJS] "`Tutorial: Intro to React <https://reactjs.org/tutorial/tutorial.html>`_"
React. Facebook Inc, Web. 4 Apr. 2019.

..[ReactJS] "`Components and Props <https://reactjs.org/docs/components-and-props.html#props-are-read-only>`_"
React. Facebook Inc, Web. 4 Apr. 2019.

..[ReactJS] "`Refs and the DOM <https://reactjs.org/docs/refs-and-the-dom.html>`_"
React. Facebook Inc, Web. 4 Apr. 2019.

..[ReactJS] "`Draft: JSX Specification <https://reactjs.org/docs/refs-and-the-dom.html>`_"
JSX, Facebook Inc, Web. 4 Apr. 2019.

..[InfoWorld] Krill, Paul. "`React: Making Faster, Smoother UIs for data-driven Web Apps <https://www.infoworld.com/article/2608181/react--making-faster--smoother-uis-for-data-driven-web-apps.html>`_"
InfoWorld Tech Watch, InfoWorld, Web. 15 May 2014.

..[TheNewStack] Dawson, Chris. "`JavaScript's History and How it Led to React JS <https://thenewstack.io/javascripts-history-and-how-it-led-to-reactjs/>`_"
The New Stack Technology, The New Stack, Web. 25 Jul. 2014.

..[InfoQ] Hemel, Zef. "`Facebook's React JavaScript User Interfaces Library Receives Mixed Reviews <https://www.infoq.com/news/2013/06/facebook-react>`_"
InfoQ News, InfoQ, Web. 3 Jun. 2013.

..[Medium] Berkana. "`A Compelling Reason Not to Use ReactJS <https://medium.com/bits-and-pixels/a-compelling-reason-not-to-use-reactjs-beac24402f7b>`_"
Bits and Pixels, A Medium Corporation, Web. 24 May 2015.

..[FacebookCode] Pearce, James. "`Updating Our Open Source Patent Grant <https://code.fb.com/open-source/updating-our-open-source-patent-grant/>`_"
Facebook Code, Facebook Inc, Web. 10 Apr. 2015.

..[TechCrunch] Lomas, Natasha. "`WordPress to Ditch React Library Over Facebook Patent Clause Risk <https://techcrunch.com/2017/09/15/wordpress-to-ditch-react-library-over-facebook-patent-clause-risk/>`_"
TechCrunch News, TechCrunch, Web. 8 Apr. 2017.
