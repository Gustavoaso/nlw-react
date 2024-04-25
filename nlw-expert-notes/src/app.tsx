import logo from './assests/logo-nlw.svg'
export function App() {
  return (

    <div className="mx-auto max-w-6xl my-12 " >
      <img src={logo} alt="NLW Expert" />

      <form className="w-full mt-6">
        <input
          type="text"
          placeholder='Busque em suas notas'
          className='w-full bg-transparent text-3xl font-semibold tracking placeholder:text-slate-500'
        />
      </form>

      <div className='h-px bg-slate-700 mt-6' ></div>
    </div>
  )
}
