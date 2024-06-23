import { useEffect, useState } from "react";
import { getBooks} from "../../Utils";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";
import { useSearchParams } from "react-router-dom";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort'); 
  // console.log(sort);
  useEffect(()=>{
    const storedBooks = getBooks();
    if (sort === 'rating') {
      const sorted = storedBooks?.sort((a,b) => b.rating - a.rating)
    setReadBooks(sorted)
    }
    else if (sort === 'totalPages') {
      const sorted = storedBooks?.sort((a,b) => b.totalPages - a.totalPages)
    setReadBooks(sorted)
    }
    else if (sort === 'yearOfPublishing') {
      const sorted = storedBooks?.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing)
    setReadBooks(sorted)
    }
    setReadBooks(storedBooks)

  },[sort])
  // useEffect(() => {
  //   const sorted = readBooks?.sort((a,b) => b.rating - a.rating)
  //   setReadBooks(sorted)
  //   }, [sort])
    console.log(readBooks);
    return (
        <div>
           {
            readBooks.map(readBook => <ReadBooksCard key={readBook.bookId} readBook={readBook}></ReadBooksCard>)
           }
        </div>
    );
};

export default ReadBooks;