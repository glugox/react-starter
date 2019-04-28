import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Table, Icon } from 'semantic-ui-react'
import { getBoolean } from '../../../helpers/boolean'


class TableCellFormatter extends Component {
   
   static propTypes = {
        data_type: PropTypes.string
    }

    static defaultProps = {
        data_type: 'string'
    }
    
    format(str){
        return str
    }
    
    render() {
        
        let b = getBoolean(this.props.children);
        switch( this.props.data_type ){
            case 'boolean':
                return !b ? 
                    <Table.Cell ><Icon color='red' name='checkmark' size='large' /></Table.Cell> : 
                    <Table.Cell ><Icon color='green' name='checkmark' size='large' /></Table.Cell>
            default:
                return <Table.Cell >{this.format(this.props.children)}</Table.Cell>
        }
        

    }
}

export default TableCellFormatter