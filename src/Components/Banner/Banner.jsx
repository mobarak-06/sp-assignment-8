import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex justify-between bg-[#1313130D] max-w-7xl h-[554px] px-32 py-8 rounded-3xl mt-8 ">
           <div>
            <h1 className="text-6xl font-bold text-center md:mt-24 playfair-display">Books to freshen </h1>
            <h1 className="text-6xl font-bold text-center mt-5 playfair-display">up your bookshelf</h1>
            <Link to="/listed book" className="btn bg-[#23BE0A] text-xl font-bold w-44 h-16 mt-12 rounded-lg text-white hover:bg-green-500">View The List</Link>
           </div>
           <div className="w-80 h-96">
            <img  src="https://i.ibb.co/92g3SPV/to-kill-a-mockingbird-book-cover-by-darkknight1986-dbms9xp.jpg" alt="" />
            </div> 
        </div>
    );
};

export default Banner;