import capa from "./assets/capa.png";
import code from "./assets/code.svg";
import chat from "./assets/chat.svg";
import share from "./assets/share.svg";
import icone from "./assets/icone.png";
import "./styles.css";
const Card = ({
  id,
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuario,
}) => {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={imagemUrl} alt="imagem do post"></img>
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>

        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={code} alt="codigos"></img>
              {linhasDeCodigo}
            </li>
            <li>
              <img src={share} alt="compartilhamentos"></img>
              {compartilhamentos}
            </li>
            <li>
              <img src={chat} alt="chat"></img>
              {comentarios}
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="imagem do perfil"></img>
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
