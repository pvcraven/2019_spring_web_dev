
class Example extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            submittedName: props.name
        };

        this.submitName = this.submitName.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    submitName(){
        this.setState({submittedName: this.state.name});
    }

    changeName(event){
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <div>
                <label>
                  Name:
                  <input type="text" value={this.state.name} onChange={this.changeName} />
                </label>

                <button type="button" onClick={this.submitName}>Submit</button>
                <br></br>

                <h1>My name is {this.state.submittedName}!</h1>
            </div>
    );
    }
}

ReactDOM.render(
    <Example name="Edward"/>,
    document.getElementById("root")
);



