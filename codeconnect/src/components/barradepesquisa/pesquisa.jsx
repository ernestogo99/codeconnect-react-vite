import { useState } from "react";
import "./styles.css";

const BarraDePesquisa = () => {
  const [pesquisa, setpesquisa] = useState("");
  console.log(pesquisa);

  return (
    <input
      type="search"
      className="barra-pesquisa"
      placeholder="Digite o que vc procura"
      value={pesquisa}
      onChange={(event) => setpesquisa(event.target.value)}
    ></input>
  );
};

export default BarraDePesquisa;
