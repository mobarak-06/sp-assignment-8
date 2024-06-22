import { useLoaderData, useParams } from "react-router-dom";
import { saveBook } from "../../Utils";
import { saveWishlistBook } from "../../Utils/wishlist";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    tags,
    author,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleRead = (book) => {
    saveBook(book);
  };
  const handleWishlistBook = (book) => {
    saveWishlistBook(book);
  };
  return (
    <div className="mt-16 flex gap-12">
      <div className="bg-[#1313130D] w-[510px] h-[600px] p-14 rounded-xl">
        <img className="w-[400px] h-[500px]" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-[#131313] text-4xl font-bold mb-5 playfair-display">
          {bookName}
        </h1>
        <p className="text-[#131313CC] text-xl font-medium mb-5 work-sans">
          {" "}
          By: {author}{" "}
        </p>
        <hr />
        <p className="text-[#131313CC] text-xl font-medium my-5 work-sans">
          {" "}
          {category}{" "}
        </p>
        <hr />
        <h2 className="text-[#131313B3] my-6">
          <span className="text-base font-bold text-[#131313]">Review:</span>{" "}
          {review}
        </h2>
        <div className="flex gap-6 mb-7">
          <h3 className="text-base font-bold text-[#131313]">Tag:</h3>
          <div className="flex gap-6 text-[#23BE0A] font-medium text-base">
            <p>#{tags[0]}</p>
            <p>#{tags[1]}</p>
            <p>#{tags[2]}</p>
          </div>
        </div>
        <hr />
        <div className="mt-6 work-sans">
          <h4 className="text-[#131313B3] mb-3">
            Number of Pages:{" "}
            <span className="text-[#131313] font-semibold text-base">
              {totalPages}
            </span>
          </h4>
          <h4 className="text-[#131313B3] mb-3">
            Publisher:{" "}
            <span className="text-[#131313] font-semibold text-base">
              {publisher}
            </span>
          </h4>
          <h4 className="text-[#131313B3] mb-3">
            Year of Publishing:{" "}
            <span className="text-[#131313] font-semibold text-base">
              {yearOfPublishing}
            </span>
          </h4>
          <h4 className="text-[#131313B3] mb-3">
            Rating:{" "}
            <span className="text-[#131313] font-semibold text-base">
              {rating}
            </span>
          </h4>
        </div>
        <div className="flex gap-6 mt-8">
          <button
            onClick={() => handleRead(book)}
            className="btn border border-[#1313134D] bg-white hover:bg-[#23BE0A] hover:text-white"
          >
            Read
          </button>
          <button
            onClick={() => handleWishlistBook(book)}
            className="btn bg-[#50B1C9] hover:bg-[#23BE0A] text-white "
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
