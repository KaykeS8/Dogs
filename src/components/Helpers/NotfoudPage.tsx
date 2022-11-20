import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Forms/Button/Button";
import { Head } from "./Head";

export const NotFoundPage = () => {
  return (
    <div className="container mainContainer">
      <Head title="PageNotFound" description="Página de error 404"/>
      <h1 className="title">Error: 404</h1>
      <p>Página não encontarada</p>
      <Link to={'/'} className={'linkNotFound'}>Voltar a home</Link>
    </div>
  )
}