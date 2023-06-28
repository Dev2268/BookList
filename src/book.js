import React from 'react'
import "./App.css"

const Book = ({data, onDelete}) => {
    const handleDelete = () => {
        onDelete(data.id);
      };
    
  return (
    <div className='main'>
    <div className='book'>
        <h3 className='title'>{data.name}</h3>
        <p className='author'> by {data.author} </p>
        <p>{data.description}</p>
        <p><strong>Genre :-</strong>{data.genre}</p>
    </div>
    <button onClick={handleDelete} className='delete'>Delete</button>
    </div>
  )
}

export default Book