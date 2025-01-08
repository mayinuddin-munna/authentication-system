import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const userInfo = useSelector((state) => state?.userSlice?.userInfo);
  // console.log(userInfo);

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const [signOut, { isLoading: isLoadingSignOut }] = useSignOutMutation();

  // const handleSignOut = async () => {
  //   try {
  //     await signOut().unwrap();
  //     dispatch(logout());
  //     navigate("/sign-in");
  //     toast.success("logged Out Successfully");
  //     console.log("logged Out Successfully");
  //   } catch (error) {
  //     toast.error(error?.data?.message || error?.error);
  //     console.log(error?.data?.message || error?.error);
  //   }
  // };

  return (
    <div className="bg-gray-100 px-4 py-5">
      <div className="relative flex items-center justify-between  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <Link to="/" className="inline-flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            NAME
          </span>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            {userInfo ? (
              <button className="font-medium" onClick={handleSignOut}>
                Log Out
              </button>
            ) : (
              <NavLink
                to="/sign-in"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Login
              </NavLink>
            )}
          </li> */}
          {/* {user && (
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Dashboard
              </NavLink>
            </li>
          )} */}
          {/* {userInfo && (
            <li>
              <div className="avatar">
                <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img alt="ima-ge" src={userInfo?.profilePicture} />
                </div>
              </div>
            </li>
          )} */}
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <BoltIcon className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        NAME
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sign-in"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Login
                      </Link>
                    </li>
                    {/* {user && (
                      <li>
                        <Link
                          to="/dashboard"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Dashboard
                        </Link>
                      </li>
                    )} */}
                    {/* <li>
                      {userInfo ? (
                        <button className="font-medium" onClick={handleSignOut}>
                          LogOut
                        </button>
                      ) : (
                        <NavLink
                          to="/sign-in"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Login
                        </NavLink>
                      )}
                    </li> */}
                    {/* {userInfo && (
                      <li>
                        <div className="avatar">
                          <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt="im-age" src={userInfo?.profilePicture} />
                          </div>
                        </div>
                      </li>
                    )} */}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
