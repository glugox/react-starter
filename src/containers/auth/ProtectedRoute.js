import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

class ProtectedRoute extends React.Component {

    constructor(props) {
        super(props);
    }

    isLoggedIn = () => {
        return this.props.auth.loggedIn;
    }

    render = () => {

        let { component: Component, ...rest } = this.props;

        return (

            <Route {...rest} render={(props) => (
                this.isLoggedIn() ? (
                    <Component {...props} />
                ) : (
                        <Redirect to='/login' />
                    )
            )} />

        )

    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(ProtectedRoute));