
import SingleBook from "../SingleBook/SingleBook";
import { useEffect, useState } from "react";


const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    fetch('books.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  } ,[])
  return (
    <div className="mt-28">
      <h1 className="text-[#131313] font-bold text-4xl text-center mb-16">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {
        books.map(book => <SingleBook key={book.id} book={book}></SingleBook>)
      }
      </div>
    </div>
  );
};

export default Books;
