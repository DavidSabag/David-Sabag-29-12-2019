import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import Header from './components/Header';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CakeContainer from './components/CakeContainer';



const App = () => {
    return (
        <>
            <Router >
                <Provider store={store}>
                    <Header />

                    <Switch>
                        <Redirect exact from="/" to="/Home" />
                        <Route exact path="/Home" component={Search} />
                        <Route path="/Favorites" component={CakeContainer} />

                    </Switch>


                </Provider>
            </Router>

        </>
    );
}


export default App;