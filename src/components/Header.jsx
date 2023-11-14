import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };

  return (
    <header className="bg-neutral py-5 text-neutral-content">
      <div className="container-custom flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center ">
            <p className="text-sm sm:text-base ">Hello, {user.userName}</p>
            <button
              className="btn btn-sm btn-outline btn-primary capitalize"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-sm sm:text-base">
              Sign in / Guest
            </Link>
            <span>|</span>
            <Link
              to="/register"
              className="link link-hover text-sm sm:text-base"
            >
              Create Account
            </Link>
          </div>
        )}
        {/* USER */}
        {/* Links */}
      </div>
    </header>
  );
};

export default Header;
