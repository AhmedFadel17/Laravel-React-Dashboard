import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {

    state = {
        counter: 0
    }

    componentDidMount(){
        this.setState({
            counter:this.state.counter+50
        })
    }

    componentDidUpdate() {
        alert("Number of clicks: " + this.state.counter);
      }
    increament = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return <div>
            <h1>El3b yla {this.props.name} {this.state.counter}</h1>
            <button className='btn btn-primary' onClick={this.increament}>Increament ++++</button>
        </div>
    }
}

export default Hello;
if (document.getElementById('hello')) {
    ReactDOM.render(<Hello name="Messi" />, document.getElementById('hello'));
}