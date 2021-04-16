import React, { Fragment } from 'react'
import Welcome from '../components/Welcome'
import AddButtom from '../components/AddButton'
import UserList from '../components/UserList'

const Users = ({data}) => (
    <Fragment>
        <Welcome 
            username="to the @Demo "
        />
        <UserList 
            users={data}
        />
        <AddButtom />
    </Fragment>
)

export default Users