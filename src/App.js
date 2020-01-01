import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import  Header from './components/Header';
import Search from './components/Search';
import CakeContainer from './components/CakeContainer';



const App = () => {
    return (
        <>
            <Provider store={store}>

                <Header />
                <Search />
                <CakeContainer />
                
            </Provider>

        </>
    );
}


export default App;