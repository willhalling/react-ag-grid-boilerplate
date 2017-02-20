import React from 'react';
import {render} from 'react-dom';

import AgGridComponent from './grid.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <p>Hello React!</p>
                <AgGridComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));