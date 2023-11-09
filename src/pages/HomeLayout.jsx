import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="container-custom py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
