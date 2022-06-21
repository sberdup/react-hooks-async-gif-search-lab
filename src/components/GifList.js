import React from 'react'

export default function GifList({gifs}) {
    console.log(gifs)
  return (
    <ul>
        {(gifs === []) ? 'No GIFs!' : 
        gifs.map(gif => (
            <li style={{margin:'1%'}} key={gif.id}>
                <img alt='description' src={gif.images.original.url}/>
            </li>
        ))}
    </ul>
  )
}
