import React from 'react'
import UserForm from '../components/UserForm'
import Card from '../components/Card'

const UserNew = ({form, onChange, onSubmit}) => (
    <div className="UserNew_Lateral_Spaces row">
        <div className="col-sm UserNew_Card_Space">
            <Card 
                {...form}
                shouldHide={true}
            />
        </div>
        <div className="col-sm UserNew_Form_Space">
            <UserForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
            />            
        </div>
    </div>
)

export default UserNew