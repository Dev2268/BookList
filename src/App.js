import Book from './book';
import { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    {
      "id":1,
      "name": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Classic",
      "description": "A tragic love story set in the Jazz Age, portraying the American Dream and the corruption of wealth and privilege."
    },
    {
      "id":2,
      "name": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Fiction",
      "description": "A coming-of-age story set in the racially divided Southern United States, tackling themes of prejudice, injustice, and the loss of innocence."
    },
    {
      "id":3,
      "name": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "description": "A chilling portrayal of a totalitarian society where individualism is suppressed, and surveillance and propaganda are pervasive."
    },
    {
      "id":4,
      "name": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Romance",
      "description": "A classic tale of love, manners, and social hierarchy, focusing on the spirited Elizabeth Bennet and her relationship with the brooding Mr. Darcy."
    },
    {
      "id":5,
      "name": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": "Coming-of-age",
      "description": "A rebellious teenager, Holden Caulfield, narrates his experiences and observations while dealing with his alienation and the hypocrisy he perceives in society."
    },
    {
      "id":6,
      "name": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "genre": "Fantasy",
      "description": "The first book in the beloved Harry Potter series, following the adventures of a young wizard and his friends as they uncover the truth about his magical heritage."
    },
    {
      "id":7,
      "name": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "description": "A captivating adventure about Bilbo Baggins, a hobbit who joins a group of dwarves on a quest to reclaim their homeland from a fearsome dragon."
    },
    {
      "id":8,
      "name": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "description": "An epic trilogy chronicling the journey of Frodo Baggins and the Fellowship of the Ring to destroy the One Ring and save Middle-earth from darkness."
    },
    {
      "id":9,
      "name": "The Alchemist",
      "author": "Paulo Coelho",
      "genre": "Philosophical",
      "description": "A mystical tale following the journey of a young Andalusian shepherd named Santiago, who seeks his personal legend and discovers the importance of following one's dreams."
    },
    {
      "id":10,
      "name": "The Chronicles of Narnia",
      "author": "C.S. Lewis",
      "genre": "Fantasy",
      "description": "A series of seven books transporting readers to the magical land of Narnia, where animals talk, mythical creatures exist, and battles between good and evil unfold."
    }
  ]
  );
  
  const handleButtonClick = (id)=>{
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  }
  return (
    books.map((item)=>{
      return <Book key={item.id} data={item} onDelete={handleButtonClick}/>
    })
    // <Book/>
  );
}

export default App;
