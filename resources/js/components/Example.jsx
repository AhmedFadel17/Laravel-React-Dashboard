import React, { useState, useEffect  } from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return <div>
    <h1>El3b yla</h1>
</div>
}

export default Example;
if (document.getElementById('example')) {
    ReactDOM.render(<Example name="Messi"/>, document.getElementById('example'));
}
