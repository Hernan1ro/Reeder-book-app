import logo from "../../public/logo.jpg";

const Page404 = () => {
  return (
    <div className="page404 w-screen h-screen grid place-items-center text-center">
      <div>
        <img src={logo} alt="Aspasia logo" className="h-20 mb-8 m-auto" />
        <h1 className="text-8xl text-primary font-bold">Error 404</h1>
        <h2 className="text-2xl text-primary font-bold">
          Página no encontrada
        </h2>
      </div>
    </div>
  );
};

export default Page404;
