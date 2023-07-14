import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import NavbarSec from "../components/NavBarSec";

export default function LogInPage() {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const navigate = useNavigate();

  function singIn(e) {
    e.preventDefault();
    const entrar = {email, password};
      console.log(entrar);
      axios.post(`${import.meta.env.VITE_API_URL}/login`, entrar)
            .then(res => {
                localStorage.setItem("dataSmartTech", JSON.stringify(res.data));
                navigate("/");
            })
            .catch(erro => alert(erro.response.data));

  }

  return (
    <SingUpContainer>
      <NavbarSec />
      <h1>FAZER LOGIN</h1>
      <form onSubmit={e => singIn(e)}>
        <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
        <input placeholder="Senha" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} required/>
        <button type="submit">ENTRAR</button>
      </form>
      <Link to={"/cadastro"} >
        Primeira vez? Cadastre-se!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  h1{
    color: #ff6500; 
    margin-bottom: 15px;
  }
  a {
    color: #ff6500;
  }
`

