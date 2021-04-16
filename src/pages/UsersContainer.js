import React from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Users from './Users'
import {gql, useQuery} from '@apollo/client'

const GET_USERS_INFO = gql`
query { 
    getUsers {
      _id
      firstname
      lastname
      age
      img
      leftcolor
      rigthcolor
    }
}`;

const UsersContainer = () => {
    const { data, loading, error } = useQuery(GET_USERS_INFO, {
        pollInterval: 100,
    });

    if(loading)
        return <Loading />
            
    if(error)
        return <FatalError />

    return <Users
        data={data}
    />
}

export default UsersContainer