import React from 'react'
import './styles/AddButton.css'
import buttomImg from '../images/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => (
    <Link to="/users/new">
        <img src={buttomImg} className="Button-Add" alt="users"/>
    </Link>
)

export default AddButton