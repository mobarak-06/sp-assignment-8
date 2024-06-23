import { useEffect, useState } from "react";
import { getWishlistBooks } from "../../Utils/wishlist";
import WishlistBooksCard from "../WishListBooksCart/WishlistBooksCard";
import { useSearchParams } from "react-router-dom";

const WishlistBooks = () => {
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  console.log(sort);
  useEffect(() => {
    const storedBooks = getWishlistBooks();
    if (sort === "rating") {
      const sorted = storedBooks?.sort((a, b) => b.rating - a.rating);
      setWishlistBooks(sorted);
    } else if (sort === "totalPages") {
      const sorted = storedBooks?.sort((a, b) => b.totalPages - a.totalPages);
      setWishlistBooks(sorted);
    } else if (sort === "yearOfPublishing") {
      const sorted = storedBooks?.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setWishlistBooks(sorted);
    }
    setWishlistBooks(storedBooks);
  }, [sort]);
  return (
    <div>
      {wishlistBooks.map((wishlistBook) => (
        <WishlistBooksCard
          key={wishlistBook.bookId}
          wishlistBook={wishlistBook}
        />
      ))}
    </div>
  );
};

export default WishlistBooks;
