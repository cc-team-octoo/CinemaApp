import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import FilmsNowInTheatres from './FilmsNowInTheatres';
import Film from './Film';
import SeanceRoom from './SeanceRoom';

const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
                    <Route path="/" exact component={FilmsNowInTheatres} />
                    <Route path="/film" exact component={Film} />
                    <Route path="/seats" exact component={SeanceRoom} />
                </div>
            </HashRouter>
        </div>
    );
};

export default App;
