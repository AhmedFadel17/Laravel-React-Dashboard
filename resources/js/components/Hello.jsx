import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        return <h1>El3b yla</h1>;
    }
}

export default Hello;
if (document.getElementById('hello')) {
    ReactDOM.render(<Hello />, document.getElementById('hello'));
}