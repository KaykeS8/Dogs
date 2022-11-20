import React from "react";
import { Link } from "react-router-dom";
import { UseForm } from "../../hooks/useForm";
import { UserContext } from "../../context/UserContext";
import { Button } from "../Forms/Button/Button";
import { Input } from '../Forms/Input/Input';
import { Error } from '../Helpers/Error';
import Style from './LoginForm.module.css';
import StyleBtn from '../Forms/Button/Button.module.css';

export const LoginForm = () => {

  const username = UseForm();
  const password = UseForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={Style.form} onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="username" onBlur={username.onblur}{...username} />
        <Input type="password" label="senha" name="password" onBlur={password.onblur} {...password} />
        {loading ? <Button disabled={true} text="...carregando" /> : <Button text="Entrar" />}
        {error && <Error error={error} />}
      </form>
      <Link className={Style.perdeu} to="/login/perdeu">Perdeu a Senha?</Link>
      <div className={Style.cadastro}>
        <h2 className={Style.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={StyleBtn.button} to="/login/criar">Cadastrar</Link>
      </div>
    </section>
  );
};
