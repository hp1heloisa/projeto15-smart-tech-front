import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Welcome() {

    const navigate = useNavigate(true);
    let data = JSON.parse(localStorage.getItem("dataSmartTech"));
    if (!data) {
        return(
            <div className="signIn-Out" onClick={() => navigate('/cadastro')}>
                <Profile>
                    <ion-icon name="person-sharp"></ion-icon>
                </Profile>
                <p>
                    Faça <span>LOGIN</span> ou <br />
                    crie seu <span>CADASTRO</span>
                </p>
            </div>
        )
    } else {
        return(
            <div className="signIn-Out" onClick={() => navigate('/cadastro')}>
                <Profile>
                    <ion-icon name="person-sharp"></ion-icon>
                </Profile>
                <p>
                    Bem-vindo(a), <span>{data.name.toUpperCase()}</span>
                </p>
            </div>
        )
    }
}

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