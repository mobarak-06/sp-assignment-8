import toast from "react-hot-toast";

const getBooks = () => {
    let books = [];
    const storedBook = localStorage.getItem('books');
    if(storedBook){
        books = JSON.parse(storedBook);
    }
    return books
};


const saveBook = (book) =>{
    let books = getBooks();
    const isExist = books.find(b=> b.bookId === book.bookId)
    if (isExist) {
       return toast.error('Already Added This Book') 
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books));
    toast.success('books added to read list')
}

export { getBooks, saveBook };
