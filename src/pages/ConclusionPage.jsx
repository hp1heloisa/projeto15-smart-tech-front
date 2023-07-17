import styled from "styled-components";
import NotePayment from "../components/NotePayment";

export default function ConclusionPage(props) {
  const {order} = props;

  return (<>
    <StyledDiv>
      <NotePayment order={order} />
    </StyledDiv>

  </>)
}


const StyledDiv = styled.div`
  width: auto;
  height: auto;
  margin-top: 150px;
`