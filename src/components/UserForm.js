import React from 'react'

const UserForm = ({ onChange, onSubmit, form }) => (
    <div className="container">
        <form 
            onSubmit={onSubmit}
        >
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="firstname" 
                    name="firstname"
                    onChange={onChange}
                    value={form.firstname}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="lastname" 
                    name="lastname"
                    onChange={onChange}
                    value={form.lastname}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="age" 
                    name="age"
                    onChange={onChange}
                    value={form.age}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="img" 
                    name="img"
                    onChange={onChange}
                    value={form.img}
                />
            </div>
            <div className="form-row">
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="leftcolor" 
                        name="leftcolor"
                        onChange={onChange}
                        value={form.leftcolor}
                    />
                </div>
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="rigthcolor" 
                        name="rigthcolor"
                        onChange={onChange}
                        value={form.rigthcolor}
                    />    
                </div>
            </div>
            
            <button 
                type="submit" 
                className="btn btn-primary float-right"
            >
                Submit
            </button>
        </form>
    </div>
)

export default UserForm