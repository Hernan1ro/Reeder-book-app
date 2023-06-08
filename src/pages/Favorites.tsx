import Layout from "../layout";
import useFavs from "../hooks/useFavs";

const Favorites = () => {
  const { favBooks, setFavBooks } = useFavs();

  const deleteFav = (url: string) => {
    const updateFavBooks = favBooks.filter((book) => book.url !== url);
    setFavBooks(updateFavBooks);
  };
  return (
    <Layout page_title={"Mis favoritos"}>
      <div className="activity-section w-full animate-fadeInUp flex flex-col items-center shadow-md p-8 rounded-lg bg-white">
        {favBooks.length === 0 ? (
          <div className=" text-center">
            <h4 className="text-3xl  text-pink">No tienes favoritos aún</h4>
            <img src="/public/reading.svg" alt="No hay favoritos" />
          </div>
        ) : (
          <h2 className="text-3xl text-cyan text-center font-bold mb-6">
            Mis lecturas favoritas
          </h2>
        )}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 w-full  place-items-center">
          {favBooks.map((book) => {
            const { name, url, authors, country, publisher } = book;
            return (
              <div
                className="grid w-full shadow-lg p-4 rounded-md text-center relative"
                key={url}
              >
                <span className="text-xl font-bold text-teal">{name}</span>
                <span>{authors}</span>
                <span>{country}</span>
                <span>{publisher}</span>
                <img
                  onClick={() => deleteFav(url)}
                  width="20px"
                  className="absolute right-0 cursor-pointer"
                  src="/public/icons/close.svg"
                  alt="Remover libro de favoritos"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Favorites;
