import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
const ListedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <div className="bg-[#1313130D] h-24 rounded-2xl py-8 mt-9">
        <h1 className="text-[#131313] font-bold text-center text-3xl">Book</h1>
      </div>
      {/* drop down */}
      <div className="flex flex-col justify-center items-center mt-8 ">
        <details className="dropdown ">
          <summary className="m-1 btn text-white bg-[#23BE0A] hover:bg-[#59C6D2]">
            Sort By <RiArrowDropDownLine size={20} />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </details>
      </div>
      {/* tab */}
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 mt-14">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-600`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to={"wishlistBook"}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBook;
