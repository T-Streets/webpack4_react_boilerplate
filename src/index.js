import React from 'react';
import { render } from 'react-dom';
import '../styles.scss';

const App = () => {
    return (
        <div>
            <h2>See you space Cowboy</h2>
        </div>
    );
}

render(<App />, document.getElementById('app'));