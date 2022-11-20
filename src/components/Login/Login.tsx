import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { LoginCreate } from "./LoginCreate";
import { LoginPasswordLost } from "./LoginPasswordLost";
import { LoginPasswordReset } from "./LoginPasswordReset";
import { UserContext } from "../../context/UserContext";
import Styles from './Login.module.css';
import { NotFoundPage } from "../Helpers/NotfoudPage";
import { Head } from "../Helpers/Head";

export const Login = () => {

  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to={'/conta'} />
  return (
    <section className={Styles.login}>
      <Head title="Login" description="Página de login do site"/>
      <div className={Styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </section>
  );
};
