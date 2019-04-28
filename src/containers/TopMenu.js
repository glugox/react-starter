
import React, {Component} from 'react'
import {Icon,
        Image,
        Input, 
        Label, 
        Menu,  
       } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { toggleMenu } from '../actions'
import UserMenu from './UserMenu.jsx'

class TopMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  doSearch(event) {
      this.props.actions.search(event.target.value);  
  }

  render() {
      
   

    return (
      <Menu fixed="top" className="top-menu">
        <Menu.Item className="logo-space-menu-item">
          <div className="display-inline">
            <h3>Glugate</h3>
          </div>
        </Menu.Item>

        <Menu.Item
          className="no-border"
          onClick={this.props.toggleMenu}
        >
          <Icon name="bars" />
        </Menu.Item>

        <Menu.Item className="no-border drop-left-padding">
          <Input
            className="icon"
            icon="search"
            placeholder="Search..."
            onChange={this.doSearch.bind(this)}
          />
        </Menu.Item>

        <Menu.Menu position="right">
          
          <Menu.Item className="no-border" position="right">
            <UserMenu />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}


function mapStateToProps(state) {
    return { 
    }
}
function mapDispatchToProps(dispatch,ownProps){
    return {
        toggleMenu: () => dispatch(toggleMenu()),
    }
}
const connectedTopMenu = connect(mapStateToProps,mapDispatchToProps)(TopMenu);
export default connectedTopMenu;
    
