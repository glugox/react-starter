import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Card, Icon, Checkbox, Image, Feed, Menu, Pagination, Dimmer, Loader, Segment } from 'semantic-ui-react'
import { usersListRequest } from '../actions/users'
import PropTypes from 'prop-types'
import PageHeader from '../containers/PageHeader'


class Users extends Component {
    
    static propTypes = {
        users: PropTypes.object
    }

    static defaultProps = {
        users: {
            data: [],
            meta: {
                current_page: 1,
                per_page: 0,
                total: 0
            },
        }
    }
      
    handleCheckboxChange = (e, { checked, name }) => this.setState({ [name]: checked })
    handleRowClick = (e) => alert("OK!")
    
    componentDidMount(){
        this.props.load()
    }
    
    render() {
          
        let totalPages = Math.ceil( this.props.users.meta.total / this.props.users.meta.per_page ) || 0;
        let activePage = parseInt(this.props.users.meta.current_page) || 1;
        let loading = this.props.users.loading;
         
        return (
   
            <Fragment>
        

                <PageHeader title="Users" />
                
                <Dimmer.Dimmable  dimmed={loading}>
                    

                    <Table  celled striped definition>
                      <Table.Header fullWidth>
                        <Table.Row>
                          <Table.HeaderCell />
                          <Table.HeaderCell>First Name</Table.HeaderCell>
                          <Table.HeaderCell>Last Name</Table.HeaderCell>
                          <Table.HeaderCell>E-mail</Table.HeaderCell>
                          <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>

                        {
                            this.props.users.data.map((user) => (
                              <Table.Row key={user.id} onDoubleClick = {this.handleRowClick}>
                                <Table.Cell collapsing>
                                  <Checkbox />
                                </Table.Cell>
                                <Table.Cell>{user.first_name}</Table.Cell>
                                <Table.Cell>{user.last_name}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>No</Table.Cell>
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
                              <Icon name='user' /> Add User
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
                
            </Fragment>

    )
}
}


function mapStateToProps(state) {
    const {  users } = state;
    return {
        users
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        load: (p=1) => dispatch(usersListRequest({page:p})),
        gotoPage: (o,e) => dispatch(usersListRequest({page:e.activePage}))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Users);