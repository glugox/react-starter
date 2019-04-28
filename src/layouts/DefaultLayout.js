
import React, {Component, PureComponent} from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import ProtectedRoute from '../containers/auth/ProtectedRoute'
import Dashboard from '../pages/Dashboard'
import SideMenu from '../containers/SideMenu'
import TopMenu from '../containers/TopMenu'
import navigationData, { navigationFlat } from '../config/navigation'
import Loadable from 'react-loadable'
import { Loader } from 'semantic-ui-react'


function Loading() {
    return (
            <Loader active inline />
            )
}

function getLoadablePage(item) {
    let fileName = item.component
    return Loadable({
        loader: () => import(`../pages/${fileName}`),
        loading: Loading
    });
}

class DefaultLayout extends Component  {

    render() {

        return (
                <div className="grid">
                    <div className="menu">
                        <TopMenu/>
                    </div>
                    <div className="content">
                        <SideMenu>
                            <Switch>             
                                {navigationFlat.map((item, idx) => {
                                        return item.component ?
                                            (<ProtectedRoute key={idx} path={item.path} exact={item.exact} name={item.label} component={getLoadablePage(item)} />) :
                                            (null);
                                    },
                                )}              
                                <ProtectedRoute key={navigationFlat.length+1} path="/" exact={true} name="home" component={Dashboard} />               
                            </Switch>
                        </SideMenu>
                    </div>
                </div>
        )
    }
}


function mapStateToProps(state) {
    const {  modals } = state;
    return {
        //modals: modals.data
    };
}

const connectedDefaultLayout = connect(mapStateToProps)(DefaultLayout);
export default connectedDefaultLayout
