class Example extends React.Component {
        render() {
            return <h1>Hi, my name is {this.props.name}!</h1>;
        }
    }

ReactDOM.render(
    <Example name="Edward"/>,
    document.getElementById("root")
);

