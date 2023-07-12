import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import logo from "../assets/logo-sem-fundo.png";

export default function SignUpPage() {

  let [nome, setNome] = useState('');
  let [email, setEmail] = useState('');
  let [senha, setSenha] = useState('');
  let [confirma, setConfirma] = useState('');
  let [endereco, setEndereco] = useState('');
  const navigate = useNavigate();


  return (
    <SingUpContainer>
      <img src={logo} alt="logo" /> 
      <form>
        <input placeholder="Nome" type="text" value={nome} onChange={e => setNome(e.target.value)} required/>
        <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
        <input placeholder="Senha" type="password" autoComplete="new-password" value={senha} onChange={e => setSenha(e.target.value)} required/>
        <input placeholder="Confirme a senha" type="password" autoComplete="new-password" value={confirma} onChange={e => setConfirma(e.target.value)} required/>
        <input placeholder="Endereço" type="text" value={endereco} onChange={e => setEndereco(e.target.value)} required/>
        <button type="submit">Cadastrar</button>
      </form>
      <Link to={"/"} >
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
  img {
    width: 300px;
    margin: none;
  }
`
