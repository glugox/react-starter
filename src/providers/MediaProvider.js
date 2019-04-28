
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Image} from 'semantic-ui-react'


export default class MediaProvider extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        model: PropTypes.string.isRequired
    }
    static defaultProps = {
    }

    render() {
        return(
            <Image avatar src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg" />
        )
    }
}


