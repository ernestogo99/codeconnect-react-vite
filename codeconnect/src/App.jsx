import { useEffect, useState } from "react";
import "./App.css";
import BarraDePesquisa from "./components/barradepesquisa/pesquisa";
import Card from "./components/card/card";
import Filtro from "./components/filtro/filtro";
import Ordenacao from "./components/ordenacao/ordenacao";
import Sidebar from "./components/sidebar/Sidebar";
import axios from "axios";

function App() {
  const [dados, setdados] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
      )
      .then((response) => {
        console.log(response.data);
        setdados(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <Sidebar></Sidebar>
      <div>
        <BarraDePesquisa></BarraDePesquisa>
        <Filtro></Filtro>
        <Ordenacao></Ordenacao>
        <ul className="lista-cards">
          {dados
            ? dados.map((item) => (
                <li key={item.id}>
                  <Card
                    id={item.id}
                    imagemUrl={item.imagem_capa}
                    titulo={item.titulo}
                    resumo={item.resumo}
                    linhasDeCodigo={item.linhas_de_codigo}
                    compartilhamentos={item.compartilhamentos}
                    comentarios={item.comentarios}
                    usuario={item.usuario}
                  ></Card>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
