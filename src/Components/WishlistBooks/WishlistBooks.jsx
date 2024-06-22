import { useEffect, useState } from "react";
import { getWishlistBooks } from "../../Utils/wishlist";
import WishlistBooksCard from "../WishListBooksCart/WishlistBooksCard";

const WishlistBooks = () => {
    const [wishlistBooks, setWishlistBooks] = useState([]);
  useEffect(()=>{
    const storedBooks = getWishlistBooks()
    setWishlistBooks(storedBooks)
  },[])
    return (
        <div>
           {
            wishlistBooks.map(wishlistBook => <WishlistBooksCard key={wishlistBook.bookId} wishlistBook={wishlistBook}/>)
           }
        </div>
    );
};

export default WishlistBooks;