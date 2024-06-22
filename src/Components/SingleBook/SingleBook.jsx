import PropTypes from "prop-types";
import { MdOutlineStarBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleBook = ({ book }) => {
    // console.log(book);
  const { image, bookName, tags, author, category, rating, bookId } = book;
//   console.log(bookId);
  return (
    <div>
      <Link to={`/book/${bookId}`} className="card w-96 bg-base-100 shadow-xl border border-[#13131326] p-6 hover:shadow-2xl">
        <figure>
          <img
            className="h-96 w-[300px] rounded-lg"
            src={image}
            alt={bookName}
          />
        </figure>
        <div className="card-body">
          <div className="flex text-[#23BE0A] font-medium text-base">
            <p>{tags[0]}</p>
            <p>{tags[1]}</p>
            <p>{tags[2]}</p>
          </div>
          <h2 className="card-title playfair-display">{bookName}</h2>
          <p className="work-sans text-[#131313CC]">
            By: <span>{author}</span>
          </p>
          <hr />
          <div className="flex justify-between text-[#131313CC]">
            <h3 className="font-medium">{category}</h3>
            <h4 className="flex gap-2">{rating}<MdOutlineStarBorder size={20} className="mt-[2px]"/></h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

SingleBook.propTypes = {
  book: PropTypes.object,
};
export default SingleBook;
