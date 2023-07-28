import { useDispatch } from 'react-redux';
import './App.css';
import { useState } from 'react';
import {addUser} from './slices/reservationSlice'
import { useSelector } from 'react-redux'
import Reservation from './Components/Reservation';
import Dishes from './Components/Dishes';


function App() {

  const [userName,setUserName] = useState('')

  const dispatch = useDispatch()

  const reservationData = useSelector((state)=>{
    // console.log(state.reservation)
    return state.reservation
  })

  const customerData = useSelector((state)=>{
    // console.log(state.customer)
    return state.customer
  })


  const handleChange = (e) => {
    setUserName(e.target.value)
  }

  const handleAddReservation = (e) => {
    e.preventDefault()
    dispatch(addUser(userName))
    setUserName('')
  }

  return (
      <div className="container">
        <div className="people">
          <h1>Reservations</h1>
          <div className="names">
            {/* dynamically add people */}
            {
              reservationData.map((person,id)=>{
                return <Reservation key={id} id={id} name={person}/>
              })
            }
            {/*  */}
          </div>
          <div className="input">
            <input type="text" value={userName} onChange={handleChange}/>
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="hr"></div>
        <div className="reservation">
          {/* to be added dynamically */}
          {
            customerData.map((customer)=>{
              // console.log('customer.id:',customer.id)
              return <Dishes id={customer.id} customerName={customer.customerName}/>
            })
          }
          {/*  */}
        </div>
      </div>
  )
}

export default App;
