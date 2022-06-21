import React, {useState} from 'react'

export default function GifSearch({handleSubmit}) {
    const [search, setSearch] = useState('')

  return (
    <div style={{float:'right', margin:'2%'}}>
        <b>Enter a Search Term:</b>
        <form onSubmit={e => {
            e.preventDefault()
            handleSubmit(search)
            setSearch('')
        }}>
            <input type='text' placeholder='search up a GIF' value={search} onChange={e => setSearch(e.target.value)}/>
            <br/>
            <input type='submit' value='Find Gifs'/>
        </form>
    </div>
  )
}
