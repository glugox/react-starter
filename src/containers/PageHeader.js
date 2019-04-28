import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class PageHeader extends Component{
    
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    static defaultProps = {
        //
    }
    
    render(){
        return (
            <Card.Group>
                <Card fluid header={this.props.title} />
            </Card.Group>
        )
    }
    
}

export default PageHeader
