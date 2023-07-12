import { useState } from "react";
import styled from "styled-components";

export default function NavBar() {

    const [pesquisa, setPesquisa] = useState('');

    return(
        <ContainerGeral>
            <div>
                <input placeholder="Pesquisar" type="text" value={pesquisa} onChange={e => setPesquisa(e.target.value)} required/>
            </div>
        </ContainerGeral>
    )
}

const ContainerGeral = styled.div`
    width: 100%;
    background-color: #0060b1;
    height: 70px;
    display: flex;
    justify-content: space-between;

`