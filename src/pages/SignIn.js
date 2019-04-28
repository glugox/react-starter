import React, { Component } from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';

//import { SignUpLink } from './SignUp';
import { connect } from 'react-redux';
import * as routes from '../routes';

//import { ForgotPasswordLink } from './ForgotPassword';
import {FormPageLayout} from "../layouts/FormPageLayout";
import { login } from '../actions';


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};


class SignInPage extends Component {
    constructor(props){
        super(props);

        this.state = { ...INITIAL_STATE };
        console.log(this.props);
    }

    componentDidMount(){
        //
    }

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const { dispatch } = this.props;
        if (email && password) {
            dispatch(login({email, password}));
        }
        event.preventDefault();
    }

    render() {

        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '' || this.props.loggingIn;

        return(
            this.props.loggedIn ? (
                    <Redirect to='/dashboard' />
                ) : (
                        
                    
            <FormPageLayout>
                <div>LOGIN HERE</div>
            </FormPageLayout>
            )
        )
    }
}


const SignInLink = () =>
    <p>
        <Link to={routes.SIGN_IN}>Login</Link>
    </p>


function mapStateToProps(state) {
    const { loggingIn, loggedIn } = state.auth;
    return {
        loggingIn,
        loggedIn
    };
}

const connectedSignInPage = connect(mapStateToProps)(SignInPage);

export { SignInLink }
export default connectedSignInPage;