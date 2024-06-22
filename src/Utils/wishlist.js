import toast from "react-hot-toast";

const getWishlistBooks = () => {
    let books = [];
    const storedBook = localStorage.getItem('wishlist');
    if(storedBook){
        books = JSON.parse(storedBook);
    }
    return books
};


const saveWishlistBook = (book) =>{
    let books = getWishlistBooks();
    const isExist = books.find(b=> b.bookId === book.bookId)
    if (isExist) {
       return toast.error('Already Added Wishlist') 
    }
    books.push(book)
    localStorage.setItem('wishlist', JSON.stringify(books));
    toast.success('books added to wishlist')
}

export { getWishlistBooks, saveWishlistBook };
