import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import { Container, Table, Button, Icon, Checkbox, Image, Menu, Pagination, Dimmer, Loader, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { humanize, parseDatatype } from '../../helpers/string'
import TableCellFormatter from './formatters/TableCellFormatter'

class EloquentTable extends Component {

    static propTypes = {
        //model   : PropTypes.string.isRequired,
        columns : PropTypes.array.isRequired,
        action  : PropTypes.func.isRequired,
        reducer : PropTypes.string.isRequired
    }

    static defaultProps = {
        items: []
    }

    componentDidMount(){
        this.props.load(1)
    }
    
    handleCheckboxChange = (e, { checked, name }) => this.setState({ [name]: checked })
    handleRowClick = (e) => alert("OK!")
    
    render(){
        
        let reducedData = this.props[this.props.reducer];
        let totalPages = Math.ceil( reducedData.meta.total / reducedData.meta.per_page ) || 0;
        let activePage = parseInt(reducedData.meta.current_page) || 1;
        let loading = reducedData.loading;
        
        return(
             <Dimmer.Dimmable dimmed={loading}>
                    <Dimmer  active={loading} inverted>
                      <Loader>Loading</Loader>
                    </Dimmer>
                    <Table  selectable celled striped definition>
                      <Table.Header fullWidth>
                        <Table.Row>
                        <Table.HeaderCell />
                        {
                            this.props.columns.map((column) => (
                              <Table.HeaderCell key={column.name}>{column.label || humanize(column.name)}</Table.HeaderCell>
                            ))
                        }
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                      {
                            reducedData.data.map((o) => (
                              <Table.Row key={'entity-'+o.id} onDoubleClick = {this.handleRowClick}>
                                <Table.Cell collapsing>
                                  <Checkbox  />
                                </Table.Cell>
                                {
                                    this.props.columns.map((column) => (
                                        <TableCellFormatter key={'entity-field-'+o.id + '-'+column.name} data_type={parseDatatype(column.name,column.data_type)}>{o[column.name]}</TableCellFormatter>
                                    ))
                                }
                                </Table.Row>
                            ))
                        }
                      </Table.Body>
                      <Table.Footer fullWidth>
                        <Table.Row>
                          <Table.HeaderCell />
                          <Table.HeaderCell colSpan='4'>
                            <Pagination
                              activePage={activePage}
                              onPageChange={this.props.gotoPage}
                              size='mini'
                              totalPages={totalPages}
                            />
                          </Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                          <Table.HeaderCell />
                          <Table.HeaderCell colSpan='4'>
                            <Button floated='right' icon labelPosition='left' primary size='small'>
                              <Icon name='user' /> Add Product
                            </Button>
                            <Button size='small'>Approve</Button>
                            <Button disabled size='small'>
                              Approve All
                            </Button>
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Footer>
                    </Table>
                </Dimmer.Dimmable>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const stateReduced = state[ownProps.reducer];
    return {
        [ownProps.reducer]: stateReduced
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        load: (p=1) => dispatch(ownProps.action({page:p})),
        gotoPage: (o,e) => dispatch(ownProps.action({page:e.activePage}))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(EloquentTable);