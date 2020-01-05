import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import Header from './components/Header';
import Search from './components/Search';
import CloudsAnimation from './components/CloudsAnimation'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Favorites from './components/Favorites';



const App = () => {
    return (
        <>
        
        <CloudsAnimation />
        
            <Router >
                <Provider store={store}>
                    <Header />
                   
                        <Switch>
                            <Redirect exact from="/" to="/Home" />
                            <Route exact path="/Home" component={Search} />
                            <Route path="/Favorites" component={Favorites} />

                        </Switch>
                        
                    
                </Provider>
                
            </Router>

        </>
    );
}


export default App;