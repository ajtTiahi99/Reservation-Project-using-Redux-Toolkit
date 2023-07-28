import React from 'react'
import '../../src/App.css'
import { useDispatch } from 'react-redux'
import { removeUser } from '../slices/reservationSlice'
import { AddCustomer } from '../slices/customerSlice'

const Reservation = (props) => {

    const dispatch = useDispatch()

    const handleRemoveUser = (e,id,name) => {
        e.preventDefault()
        dispatch(AddCustomer({name,dishes:[]}))
        // console.log('id,name:',id,name)
        dispatch(removeUser(id))
    }

    return (
            <div key={props.id} className="name" onClick={(e)=>handleRemoveUser(e,props.id,props.name)}>
                {/* {console.log(props.name)} */}
                <h3>{props.name}</h3>
            </div>    
    )
}

export default Reservation
