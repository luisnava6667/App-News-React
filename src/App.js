import React, { Fragment, useEffect, useState } from "react";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import ListadoNoticias from "./Components/ListadoNoticias";

function App() {
  //definir la categoria
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);
  useEffect(() => {}, []);
  useEffect(() => {
    const consultarAPI = async () => {
      const key = process.env.REACT_APP_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${key}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
