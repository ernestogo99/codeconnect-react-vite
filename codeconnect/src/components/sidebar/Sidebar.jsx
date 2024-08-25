import logo from "./Assets/Logo.svg";
import feed from "./Assets/feed.svg";
import perfil from "./Assets/account_circle.svg";
import info from "./Assets/info.svg";
import logout from "./Assets/logout.svg";
import "./styles.css";

const Sidebar = () => {
  return (
    <aside>
      <img src={logo} alt="logo do codeconnect"></img>
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item_link_publicar">
              Publicar
            </a>
          </li>
          <li>
            <a href="#" className="item_link item_link_ativo">
              <img src={feed} alt=""></img>
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className="item_link">
              <img src={perfil} alt=""></img>
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item_link">
              <img src={info} alt=""></img>
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href="#" className="item_link">
              <img src={logout} alt=""></img>
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
