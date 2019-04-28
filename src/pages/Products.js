import React, { Component, Fragment } from 'react';
import { productsListRequest } from '../actions/products'
import PageHeader from '../containers/PageHeader'
import EloquentTable from '../containers/table/EloquentTable'


class Products extends Component {
    

    render() {
          
        let columns = [
            {name:'id'},
            {name:'name'},
            {name:'is_featured'}]

        return (
   
            <Fragment>
                <PageHeader title="Products" />
                <EloquentTable model="products" columns={columns} action={productsListRequest} reducer="products"  />
            </Fragment>
        )
    }
}

export default Products