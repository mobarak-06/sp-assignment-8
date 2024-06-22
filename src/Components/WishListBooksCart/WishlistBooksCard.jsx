import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { PiNotebookLight } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";


const WishlistBooksCard = ({wishlistBook}) => {
  const {
    bookId,
    image,
    bookName,
    tags,
    author,
    category,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
  } = wishlistBook;
  return (
    <div>
      <div className="border max-[1280px] h-72 rounded-md flex justify-between p-6 mb-5 shadow-md hover:shadow-lg mt-8">
        <div className="flex gap-8">
          <div className="w-64 h-64 bg-[#F4F4F4] p-5">
            <img className="w-56 h-56" src={image} alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-bold playfair-display mb-3">
              {bookName}
            </h1>
            <p className="text-[#131313CC] font-medium work-sans mb-5">
              By: {author}
            </p>
            <div className="flex gap-6 text-[#23BE0A] font-medium text-base mb-6">
              <p>#{tags[0]}</p>
              <p>#{tags[1]}</p>
              <p>#{tags[2]}</p>
              <span className="flex text-[#131313CC]">
                <IoLocationOutline size={20} /> Year of Publishing:{" "}
                {yearOfPublishing}
              </span>
            </div>
            <div className="text-[#13131399] text-base flex gap-5 mb-4">
              <h2 className="flex gap-2">
                <IoIosContact size={20} className="mt-0.5" /> Publisher:{" "}
                {publisher}
              </h2>
              <h2 className="flex gap-2">
                <PiNotebookLight size={20} className="mt-0.5" /> Page:{" "}
                {totalPages}
              </h2>
            </div>
            <hr />
            <div className="mt-4">
              <button className="btn border bg-[#328EFF26] rounded-full text-[#328EFF] work-sans">
                Category: {category}
              </button>
              <button className="btn border bg-[#FFAC3326] rounded-full text-[#FFAC33] work-sans ml-3">
                Rating: {rating}
              </button>
              <Link
                to={`/book/${bookId}`}
                className="btn border bg-[#23BE0A] rounded-full text-white work-sans ml-3"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WishlistBooksCard.propTypes = {
    wishlistBook: PropTypes.object,
  };

export default WishlistBooksCard;
