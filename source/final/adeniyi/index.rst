React JS - STA
===============

* Introduction - What topic is about. Cover highlight points. End with thesis!


* Introduction & History of React

    React is a declarative, efficient and flexible JavaScript library. Created
    by facebook engineer Jordan Walke, it was meant to help build user interfaces
    React has really helped expand the way front end developers interact with
    various different user interfaces.

    React was first used by Facebook and has continued to grow over the years.
    In May 2013, Facebook announced that it would open source React and its
    popularity began to skyrocket. Fast forward to 2015 and many companies had
    begun to show real interest in React. Flipboard, Netflix and AirBnB were just
    a few of the earliest supporters.

* Fundamentals of React.js

    * Babel & JSX (Use references)

        Babel is a JavaScript compiler that is mainly used to convert codes into
        compatible versions of JavaScript in different browsers. Some of the main
        uses of Babel include:

        1) Transforming Syntax

        2) Polyfill features that are missing in your target environment

        3) Source Code Transformations

        JSX is a separate technology from React, and is completely optional in
        building a React Application. However, it does make everything much simpler
        when you combine the two.

        React uses JSX because it is fast. JSX performs optimization while it
        compiles code. It is also type-safe, allowing errors to be caught during
        compilation rather than at runtime. Finally it is easy to learn, especially
        for individuals who have worked with HTML [w3React]_

    * Components

        A component is a JavasScript class that may accept inputs(much like a
        Java function). This class then returns a React element telling how the
        UI should look. In React, everything is considered a component. They are
        the building blocks of any app in React. Here is an example of a Greeting
        component:

            ``const Greeting = () => <h1> Hello World! It is beautiful today!</h1>``

        This component returns a greeting that prints out "Hello World! It is a
        beautiful day today!"

    * Handling Data (Props vs State)
        In React there are 2 different types of data. The first is a prop. Props
        give us the ability to write a component one time and then reuse it for
        different cases. Here is how we would pass props to a component:

.. code-block:: text

        ReactDOM.render(
            <Hello message="Sam is cool" />,
            document.getElementId("root")
        );

    This prop has a message with the value "Sam is cool". In order to access
    this, we can reference 'this.props.message':

.. code-block:: text

        class Hello extends React.Component {
            render() {
                return <h1>Hello {this.props.message}!</h1>;
            }
        }
    This code would then produce a screen that prints out "Sam is cool"!

The second way of storing data in React is using the components state. This allows
for the component to be able to change its own data. This is useful for when you
want the data in your app to change based on something like user input.

.. code-block:: text

        class Hello extends React.Component {

            constructor(){
                super();
                this.state = {
                    message: "Sam is (from state)!"
                };
                this.updateMessage = this.updateMessage.bind(this);
           }
            updateMessage() {
                this.setState({
                    message: "Sam is (from changed state)!"
                });
            }

            render() {
                <div>
                <h1>Hello {this.state.message}!</h1>
                <button onClick={this.updateMessage}>Click me!</button>
                </div>
            }
        }

Here, we initialized state(line 88-92), modified the state using updateMessage()
(line 93-99), and added a button to call the updateMessage function. The button
then changes the message value when we click it [learnReact]_.


* Creating an Application in React

    Lets look at a React Tutorial to create a Tic Tac Toe Game.

    * React Code Example

To begin, we are provided a starter code that styles our board using CSS
and creates 3 components: Square, Board, Game.

The first thing we will have do is change the code in Board's renderSquare method,
which will allow us to place a value on each square in the board. We will also change
Square's render method to show the value in each square and fill it with an 'X'
when we click it. (We will use the arrow function syntax () => for event handlers).

.. code-block:: text

    class Board extends React.Component {
        renderSquare(i){
            return <Square value={i} />;

    class Square extends React.Component {
        render(){
            return(
                <button className="square" onClick={() => {
                    alert('click'); }}>
                    {this.props.value}
                </button>
            );
        }
    }


Next we will use state to help the Square component know that it got clicked and
fill it with an "X". We will also change the Squares render method to show the
state's value when we click it.

.. code-block:: text

    class Square extends React.Component {
          constructor(props) {
            super(props);
            this.state = {
              value: null,
            };
          }
          render() {
            return (
              <button
                className="square"
                onClick={() => this.setState({value: 'X'})}
              >
                {this.state.value}
              </button>
            );
          }
        }

By calling ``this.setState`` from onClick, we tell React to re-render the Square
when it's <button> is clicked.

Now, we want to be able to determine a winner. In order to do that, we need to add
a constructor to the Board and make Board's starting state have an array of 9 nulls
that correspond with the 9 squares of the board.

.. code-block:: text

    class Board extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
        };
      }
      renderSquare(i) {
        return <Square value={this.state.squares[i]} />;
        }

Each Square will not obtain a value of 'X', 'O', or null if it is empty.

Now in order for the Square to update the Board when clicked by the user, we need
to make a change in the renderSquare method of Board to include an onClick listener.
We will also need to change the Square component to accept the two props from Board,
``value`` and ``onClick``.

.. code-block:: text

     renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }
      class Square extends React.Component {
      render() {
        return (
          <button
            className="square"
            onClick={() => this.props.onClick()}
          >
            {this.props.value}
          </button>
        );
      }}

When you try and click Square now, you should get an error. This is because the
``handleClick()`` has not been defined yet in Board. Edit your code to look similar
to this:

.. code-block:: text

    class Board extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
        };
      }
      handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
      }
      renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }

You should now be allowed to click the Squares to fill them with an input. This
works because we are not storing the state in Squares, but sending it from Board
which allows Square to re-render automatically. The Board has control over the Square
components, which we can refer to as controlled components.

Ok by this point you're probably tired of reading all this code and making seemingly
redundant changes! We're almost done!

We want to change Square to be a function component. These components are simpler
for methods that only have a ``render`` method and dont have their own state. Change
the Square class to look like this function:

.. code-block:: text

    function Square(props) {
      return (
        <button className="square" onClick={props.onClick}>
          {props.value}
        </button>
      );
    }

Finally, we want to be able to take turns(alternate between X's and O's). By default
we can set the first move to be "X".

.. code-block:: text

    class Board extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
        };
      }

The boolean at the end of the constructor, ``xIsNext`` needs to flip each time a
user goes and stores the games state. We can edit this in Boards
``handleClick()`` function. In Board's ``render`` we will then change the
"status" text to display what players turn it is.

.. code-block:: text

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
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

Lastly (I promise!!), we want to declare a winner after the game is over. Put this
helper function at the end of the file to allow your program to calculate a winner.

.. code-block:: text
    function calculateWinner(squares) {
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
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

With the use of the ``calculateWinner`` function, we can replace the ``status``
in Board's ``render`` function. We can also now change Board's ``handleClick``
method to ignore a click if we have a winner, or that Square is filled already.

.. code-block:: text

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
      }

Now you should have a functional working tic tac toe game!! Hopefully you have
now learned a little more about the basics of React and why it works. Here's a
cleaned up version of the code I've shared: [TicTacReact]_ Now there's
other functionality that could be added(storing history of moves, showing past
moves etc), but that's for you to play with! However,this link will take you through
some more of the code if you wanted to explore further [reactTutorial]_.



* What is the ceiling of React?

React is a relatively new technology, only gaining popularity withing the last
5 years. With the amount of support React has and developers interested in using
it, I believe it will stick around for awhile. I don't see it expanding to the level
of other languages like Java or Python, but it definitely has its place in the
programming world [futureReact]_. Here are just a few of the companies that actively use React
today:
    * Facebook
    * WhatsApp
    * Uber
    * Netflix
    * Yahoo
    * Sberbank(#1 bank in Russia)

* Conclusion


Heading 1
---------

Heading 2
---------

Sub Heading
~~~~~~~~~~~

Works Cited
-----------

.. [React] "`React: A JavaScript library for building user interfaces <https://reactjs.org/>`_" Facebook Inc. Facebook Open Source, Web 2 April. 2019.
.. [w3React] "`What is React? <https://www.w3schools.com/whatis/whatis_react.asp>`_ " W3 Schools. Refnes Data, Web 4 April. 2019.
.. [learnReact] "`Borgen, Per Harald <https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4>`_" freeCodeCamp.org. A Medium Corparation. 4/10/18.
.. [reactTutorial] "`McGinnis Tyler <https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/>`_" TylerMcGinnis.com, np. March, 12. 2018._
.. [futureReact] "`Caliman, Diana <http://blog.creative-tim.com/web-design/the-future-of-react-2018/>`_" 2019 Creative Tim, Creative Tim's Blog. April 13,2018._
.. [TicTacReact] "`Dan Abramov <https://codepen.io/gaearon/pen/LyyXgK?editors=0010>`_" Facebook Inc. Facebook Open Source, Web 16 April. 2019.