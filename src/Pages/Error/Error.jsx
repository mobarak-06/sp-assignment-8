/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const Error = () => {
  return (
    <div>
      <section className="flex items-center h-full p-16  text-gray-100 ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-red-600 ">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl text-gray-900">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-20">
            <Link
              to='/'
              className="px-8 py-3 font-semibold rounded bg-violet-400  text-gray-900 "
            >
              Back to homepage
            </Link>
            </p>
            
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default Error;
