import logo from './assests/logo-nlw.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'
export function App() {
  return (

    <div className="mx-auto max-w-6xl my-12 space-y-6 " >
      <img src={logo} alt="NLW Expert" />

      <form className="w-full ">
        <input
          type="text"
          placeholder='Busque em suas notas'
          className='w-full bg-transparent text-3xl font-semibold tracking placeholder:text-slate-500'
        />
      </form>

      <div className='h-px bg-slate-700 ' ></div>
      <div className='grid  grid-cols-3 auto-rows-[250px] gap-6 ' >

        <NewNoteCard></NewNoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
      </div>
    </div>

  )
}
