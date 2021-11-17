import { useEffect, useState } from "react";
import Form from "./components/Form";
import ImagesList from "./components/ImagesList";
import Paginator from "./components/Paginator";

function App() {
  // States
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (search === "") return;
    const callAPI = async () => {
      const imagesPerPage = 20;
      const keyAPI = "20592560-829e12987049b742d926200e5";
      const url = `https://pixabay.com/api/?key=${keyAPI}&q=${search}&per_page=${imagesPerPage}&page=${actualPage}`;
      const response = await fetch(url);
      const result = await response.json();
      setImages(result.hits);
      setTotalPages(Math.ceil(result.totalHits / imagesPerPage));

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };

    callAPI();
  }, [search, actualPage]);

  return (
    <div className="container">
      <div className="jumbotron bg-info">
        <p className="display-4 text-white text-center mb-4">Buscador de imágenes!</p>

        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ImagesList images={images} />

        <Paginator
          actualPage={actualPage}
          setActualPage={setActualPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default App;
