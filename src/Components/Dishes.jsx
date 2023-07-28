import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCustomer } from '../slices/customerSlice'
import '../App.css'


const Dishes = (props) => {

  // const {customerId,customerName} = props
  // console.log('customerId:',props.id)
  // console.log('customerName:',props.customerName)
  // console.log('customerId destructured:',customerId)
  // console.log('customerName destructured:',customerName)

  const dispatch = useDispatch()

  const [userDish,setUserDish] = useState('')
  const [dishArr,setDishArr] = useState([])

  const handleChange = (e) => {
    setUserDish(e.target.value)
  }

  const handleAddDish = (e) => {
    e.preventDefault()
    setDishArr([...dishArr,userDish])
    dispatch(updateCustomer({ customerId:props.id, dish:userDish }))
    setUserDish('')
  }

  return (
    <div className="dishes">
        <h3>{props.customerName}</h3>
        <div>
          {
            dishArr.map((dish,id)=>{
              return <span className="dish" key={id}>{dish}</span>
            })
          }
        </div>
        <div>
            <input type="text" value={userDish} onChange={handleChange}/>
            <button onClick={(e)=>handleAddDish(e)}>Add</button>
        </div>
    </div>
  )
}

export default Dishes
