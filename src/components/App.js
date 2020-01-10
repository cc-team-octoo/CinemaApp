import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import FilmsNowInTheatres from './FilmsNowInTheatres';
import Film from './Film';
import SeanceRoom from './SeanceRoom';
import { useSelector } from 'react-redux';

const App = () => {
    const currentFilms = useSelector(state => state.currentFilms);

    return (
        <div>
            <HashRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={FilmsNowInTheatres} />
                        <Route path="/film" exact component={Film} />
                        {/* <Route path="/seats/:id" exact component={SeanceRoom} /> */}
                        {currentFilms.map((film, i) => {
                            let path = `/seats/${film.id}/:hour`;
                            return <Route key={i} path={path} exact component={SeanceRoom} />
                        })}
                    </Switch>
                </div>
            </HashRouter>
        </div>
    );
};

export default App;
