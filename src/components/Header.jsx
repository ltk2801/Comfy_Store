import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral py-5 text-neutral-content">
      <div className="container-custom flex justify-center sm:justify-end">
        {/* USER */}
        {/* Links */}
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-sm sm:text-base">
            Sign in / Guest
          </Link>
          <span>|</span>
          <Link to="/register" className="link link-hover text-sm sm:text-base">
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
