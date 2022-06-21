import React, {useState, useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default function GifListContainer() {
    const [gifs, setGifs] = useState([])
    
    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=JhtDJ0MrxneVrEdg51UkzTXYJT7502YK&rating=g')
        .then(r => r.json())
        .then(obj => {
            setGifs(obj.data.slice(0,3))
        })
    }, [])
    
    console.log(gifs)
    function handleSubmit(search){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=JhtDJ0MrxneVrEdg51UkzTXYJT7502YK&rating=g`)
        .then(r => r.json())
        .then(obj => setGifs(obj.data.slice(0,3)))
    }
  return (
    <>
        <GifSearch handleSubmit={handleSubmit}/>
        <GifList gifs={gifs}/>
    </>
  )
}
