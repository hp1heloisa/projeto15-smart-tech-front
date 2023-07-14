import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import NavbarSec from "../components/NavBarSec";

export default function SignUpPage() {

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirma, setConfirma] = useState('');
  let [adress, setAdress] = useState('');
  const navigate = useNavigate();

  function singUp(e) {
    e.preventDefault();
    if (password != confirma){
      alert('As senhas devem ser iguais!');
    } else {
      const cadastro = {name, email, password, adress};
      console.log(cadastro);
      axios.post(`${import.meta.env.VITE_API_URL}/cadastro`, cadastro)
            .then(res => navigate('/login'))
            .catch(erro => alert(erro.response.data));
    }

  }

  return (
    <SingUpContainer>
      <NavbarSec />
      <h1>CRIAR CONTA</h1>
      <form onSubmit={e => singUp(e)}>
        <input placeholder="Nome" type="text" value={name} onChange={e => setName(e.target.value)} required/>
        <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
        <input placeholder="Senha" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} required/>
        <input placeholder="Confirme a senha" type="password" autoComplete="new-password" value={confirma} onChange={e => setConfirma(e.target.value)} required/>
        <input placeholder="Endereço" type="text" value={adress} onChange={e => setAdress(e.target.value)} required/>
        <button type="submit">CRIAR</button>
      </form>
      <Link to={"/login"} >
        Já tem uma conta? Entre agora!
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
    font-weight: 700;
    font-size: 26px;
  }
  a {
    color: #ED8811;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    padding-top: 10px;
  }
`

