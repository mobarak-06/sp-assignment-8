import { useEffect, useState } from "react";
import { getBooks} from "../../Utils";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  useEffect(()=>{
    const storedBooks = getBooks();
    setReadBooks(storedBooks)
  },[])
    return (
        <div>
           {
            readBooks.map(readBook => <ReadBooksCard key={readBook.bookId} readBook={readBook}></ReadBooksCard>)
           }
        </div>
    );
};

export default ReadBooks;