import React from 'react'
import './styles/Welcome.css'

const Welcome = ({username}) => (
    <div className="container">
        <div className="Welcome-User-Info">
            <h1>Welcome {username}!</h1>
            <p>CRUD information from the api exposed in Heroku!</p>
        </div>
    </div>
)

export default Welcome