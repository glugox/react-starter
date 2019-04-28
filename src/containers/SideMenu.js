
import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import TextIcon from "../components/TextIcon"
import {connect} from "react-redux"
import navigationData, { navigationFlat } from '../config/navigation'

class SideMenu extends Component {
    state = {
        activeItem: 'Dashboard',
    };

    handleItemClick = (e, {name}) => this.setState({activeItem: name});
    changeSize = () => this.setState({smallSidebar: !this.props.smallMenu});

    getMenu() {
        const {activeItem} = this.state;
        return (
            <Menu fixed='left' borderless inverted className={(this.props.smallMenu ? 'small-side' : '') + ' side'} vertical>
                {
                    navigationData.map((item) => (
                        <Menu.Item as={Link} to={item.path} key={item.id} name={item.label} active={activeItem === item.label}
                           onClick={this.handleItemClick}>
                           <TextIcon hideText={this.props.smallMenu} name={item.icon}>{item.label}</TextIcon>
                        </Menu.Item>
                    ))
                }
            </Menu>
        )
    }

    render() {
        return (
            <div className='parent'>
                <div className={(this.props.smallMenu ? 'small-side ' : '') + 'side'}>
                    {this.getMenu()}
                </div>
                <div className={(this.props.smallMenu ? 'small-content ' : '') + 'layout-content'}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { 
        smallMenu: state.layout.smallMenu
    };
}
const connectedSideMenu = connect(mapStateToProps)(SideMenu);
export default connectedSideMenu;