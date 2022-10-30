import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    const name = "Ahmed Fadel";
    let age = 22;
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">{name}</div>

                        <div className="card-body">My age : {age}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
let counter = 0;
function show() {
    counter++;
    const el=<h1>{counter}</h1>;
    ReactDOM.render(el,document.getElementById("root"));
}
setInterval(show,1000);
export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
