import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo-sem-fundo.png"
import Welcome from "./Welcome";

export default function NavbarSec() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={logo} alt="logo smart tech" onClick={() => navigate('/')}/>
      <Welcome />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 78px;
  border-bottom: 3px solid #ff6500;
  background: #004d8e;

  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;

  img {
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .signIn-Out {
    display: flex;
    align-items: center;
    gap: 10px;

    font-family: "Poppins";
    font-size: 15px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    span {
      font-weight: 600;
    }
  }
`;

const Profile = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #f3f3f3;
  border-radius: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  ion-icon {
    width: 15px;
    height: 15px;
    color: #f3f3f3;
  }
`;
