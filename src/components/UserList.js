import React, { Fragment } from 'react'
import Card from './Card'

const onClickDelete =(id) =>{
   alert("it's not implemented the call, but you want to deleted  the id: >>> " + id)
}

const UserList = ({users}) => (
    <Fragment>
        {
         users.getUsers.map((user) => (
            <Card 
                key={user._id}
                {...user}
                onClickCallback={onClickDelete}
                shouldHide={false}
            />
        ))}
    </Fragment>    
)


export default UserList