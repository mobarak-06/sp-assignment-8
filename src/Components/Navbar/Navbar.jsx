import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li className="md:ml-5"><NavLink to='/' className={({isActive})=> isActive ? 'text-[#23BE0A] font-bold border-2 border-[#23BE0A]' : 'font-bold'}>Home</NavLink></li>
        <li className="md:ml-5"><NavLink to='/listed book' className={({isActive})=> isActive ? 'font-bold text-[#23BE0A] border-2 border-[#23BE0A]' : 'font-bold'}>Listed Books</NavLink></li>
        <li className="md:ml-5"><NavLink to='/page-to-read' className={({isActive})=> isActive ? 'font-bold text-[#23BE0A] border-2 border-[#23BE0A]' : 'font-bold'}>Pages to Read</NavLink></li>
    </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
