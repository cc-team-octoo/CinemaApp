import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import SeanceRoom from './SeanceRoom';

const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
                    <Route path="/seats" exact component={SeanceRoom} />
                </div>
            </HashRouter>
        </div>
    );
};


export default App;
