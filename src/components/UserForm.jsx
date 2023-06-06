
// eslint-disable-next-line react/prop-types
function UserForm({setNombre, setApellidos, setEmail, setData}) {

  let label = "block text-sm font-bold leading-6 text-white-900"
  let input = "block w-full rounded-md border-0 p-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
  const submit = (e) => {
    e.preventDefault()
    setData(e.target.nombre.value+" "+e.target.apellidos.value+" ("+e.target.email.value+")")
  }
  const changeNombre = (e) => {
    setNombre(e.target.value)
  }
  const changeApellidos = (e) => {
    setApellidos(e.target.value)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  return (
    <>
      <form className="mt-6 space-y-4 sm:w-full sm:max-w-2xl" action="#" onSubmit={submit}>
        <div>
          <label className={label} htmlFor="nombre">Nombre</label>
          <input className={input} type="text" name="nombre" id="nombre" onChange={changeNombre}/>
        </div>
        <div>
          <label className={label} htmlFor="apellidos">Apellidos</label>
          <input className={input} type="text" name="apellidos" id="apellidos" onChange={changeApellidos}/>
        </div>
        <div>
          <label className={label} htmlFor="email">Correo electrónico</label>
          <input className={input} type="email" name="email" id="email" onChange={changeEmail}/>
        </div>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Enviar</button>
      </form>
    </>
  )
}

export default UserForm