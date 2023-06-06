import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'

function App() {
  const [nombre, setNombre] = useState("")
  const [apellidos, setApellidos] = useState("")
  const [email, setEmail] = useState("")
  const [data, setData] = useState([])

  const push = (e) => {
    let copy = [...data]
    copy.push(e)
    setData(copy)
  }
  return (
    <>
      <h1 className='mb-4 font-bold leading-9 text-white text-4x2'>Simple Form</h1>
      <div className='w-6/12 overflow-auto max-h-60'>
      {data.map((item,index) => 
      <p key={index} className='mt-2 mb-0 font-bold text-white sent sm:text-1xl'>
        {(index+1)+" - "}{item}
      </p>)}
      </div>
      <UserForm setNombre={setNombre} setApellidos={setApellidos} setEmail={setEmail} setData={push} />
      <div className='mt-6 sm:mx-auto text-start results'>
        <p><strong className='font-bold text-white sent sm:text-1xl'>
          Nombre: </strong>{nombre}</p>
        <p><strong className='font-bold text-white sent sm:text-1xl'>
          Apellidos: </strong>{apellidos}</p>
        <p><strong className='font-bold text-white sent sm:text-1xl'>
          Correo electrónico: </strong>{email}</p>
      </div>
    </>
  )
}

export default App
