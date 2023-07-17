import styled from "styled-components";
import NotePayment from "../components/NotePayment";

export default function ConclusionPage() {
  return (<>
    <StyledDiv>
      <NotePayment />
    </StyledDiv>

  </>)
}


const StyledDiv = styled.div`
  width: auto;
  height: auto;
  margin-top: 150px;
`