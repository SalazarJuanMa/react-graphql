import React from 'react'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './styles/Card.css'

const Card = ({ _id, firstname, lastname, age, img, leftcolor, rightcolor, onClickCallback, shouldHide }) => (    
    <div className="card mx-auto User-Card"
    style={{
        backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftcolor || '#56CCF2'}  , ${rightcolor|| '#2F80ED'}) `
    }}
    >
        <div className="card-body">
            <div className="row center">
                <div className="col-3">
                    <img src={img || emptyImg} className="float-right" alt="img" width="80"/>
                </div> 
                <div className="col-6 User-Card-Info">
                    <h1>{firstname}</h1>
                    <h2>{lastname}</h2>
                    <p>{age}</p>
                </div>
                <div  className={shouldHide ? 'hidden' : 'col-3'} >
                    <button  onClick={() => onClickCallback(_id)}
                     className="btn btn-danger"> Delete</button>
                </div> 
            </div>
        </div>
    </div>
)

export default Card