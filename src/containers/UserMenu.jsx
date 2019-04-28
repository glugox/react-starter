
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dropdown, Image} from 'semantic-ui-react'
import MediaProvider from '../providers/MediaProvider'


class UserMenu extends Component {

    static propTypes = {
    }
    static defaultProps = {
    }

    render() {
        
         const trigger = (
            <span>
                <MediaProvider />Glugox Lara
            </span>
        )

        const options = [
            { key: 'user', text: 'Account', icon: 'user' },
            { key: 'settings', text: 'Settings', icon: 'settings' },
            { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
        ]
    
        return(
                <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} />
        )
    }
}

export default UserMenu
