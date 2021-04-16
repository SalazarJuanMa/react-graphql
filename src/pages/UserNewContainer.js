import React, { useState } from 'react'
import '../components/styles/UserNew.css'
import Loading from '../components/Loading'
import FatalError from './500'
import UserNew from './UserNew'
import {  gql, useMutation } from '@apollo/client'

const UserNewContainer = ({history}) => {

const NEW_USER= gql`
mutation CreateUser(
        $firstname: String!, 
        $lastname:String!, 
        $age: Int, 
        $img: String, 
        $leftcolor: String, 
        $rigthcolor: String) {
              createUser (input: { 
                    firstname: $firstname
                    lastname:  $lastname
                    age: $age
                    img: $img
                    leftcolor:  $leftcolor
                    rigthcolor: $rigthcolor
              }) {
                    _id
                    firstname
                    lastname
                    age
                    img
                    leftcolor
                    rigthcolor
              }
            }
`;

    const [ form, setForm ] = useState({
                                firstname: '',
                                lastname: '',
                                age: '',
                                img: '',
                                leftcolor: '',
                                rigthcolor: ''
                            })
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const [createUser] = useMutation(NEW_USER)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()

        try {
            await createUser ({ variables: {  
                            firstname: form.firstname,
                            lastname: form.lastname,
                            age: form.age !== '' ? parseInt(form.age) : null,
                            img: form.img,
                            leftcolor: form.leftcolor,
                            rigthcolor: form.rigthcolor
                        }
                     });

            setLoading(false)
            history.push('/users')
        } catch (error) {
            setLoading(false)
            setError(error)          
         }
    }

    if(loading)
        return <Loading />

    if(error)
        return <FatalError />

    return <UserNew 
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
    />
}

export default UserNewContainer