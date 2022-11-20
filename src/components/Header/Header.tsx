import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Header.module.css";
import Dogs from "../../Assets/dogs.svg";
import { UserContext } from "../../context/UserContext";
import { Button } from "../Forms/Button/Button";

export const Header = () => {

  const { data } = React.useContext(UserContext)

  return (
    <header className={Styles.header}>
      <nav className={`${Styles.nav} container`}>
        <Link className={Styles.logo} to={"/"} aria-label="Dogs - Home">
          <img src={Dogs} alt="Logo" />
        </Link>
        {data ?
          <div>
            <Link className={Styles.login} to={"/conta"}>
              {data.nome}
            </Link>
          </div>
          :
          <Link className={Styles.login} to={"/login"}>
            Login / Criar
          </Link>
        }
      </nav>
    </header>
  );
};
