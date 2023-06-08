import { ReactNode, useEffect } from "react";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  page_title: string | undefined;
}

const Layout = ({ children, page_title }: Props) => {
  useEffect(() => {
    if (page_title !== undefined) {
      document.title = page_title;
    }
  }, [page_title]);

  return (
    <>
      <nav className="main-nav h-24 bg-white shadow-md animate-fadeInDown">
        <div className="main-nav__container container flex items-center justify-between h-full px-4">
          <Link to="/">
            <img src={logo} alt="Reeder app" className="h-20 cursor-pointer" />
          </Link>
          <div className="account-options flex items-center gap-4">
            <a className="font-normal text-lg text-cyan cursor-pointer">
              Cerrar sesión
            </a>
          </div>
        </div>
      </nav>
      <main className="main-content container  mx-auto  py-16 animate-fade duration-2">
        {children}
      </main>
    </>
  );
};

export default Layout;
