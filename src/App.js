import React from 'react'
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from "react-router-dom"
//import { connect } from 'react-redux'
import history from './helpers/history'
import * as routes from './routes'
import SignInPage from './pages/SignIn'
import DefaultLayout from "./layouts/DefaultLayout"



class App extends React.Component {

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path={routes.SIGN_IN} component={SignInPage} />
                    <Route path={routes.LANDING} component={DefaultLayout} />
                </Switch>
            </Router>
        )
    }
}


/*function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}*/


//const connectedApp = connect(mapStateToProps)(App);
//export default connectedApp;
    
export default hot(module)(App);


