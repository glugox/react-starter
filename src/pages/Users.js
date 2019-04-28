import React, { Component, Fragment } from 'react';
import { usersListRequest } from '../actions/users'
import PageHeader from '../containers/PageHeader'
import EloquentTable from '../containers/table/EloquentTable'


class Users extends Component {
    

    render() {
          
        let columns = [
            {name:'id'},
            {name:'first_name'},
            {name:'last_name'},
            {name:'email'}
        ]

        return (
   
            <Fragment>
                <PageHeader title="Users" />
                <EloquentTable model="users" columns={columns} action={usersListRequest} reducer="users"  />
            </Fragment>
        )
    }
}

export default Users