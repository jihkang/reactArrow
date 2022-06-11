
import styled from "styled-components";

const MoveContainer = styled.div`
  width : 200px;
  height : 200px;
  position : absolute;
  bottom : 0;
  right : 10px;
`;

const Btn = styled.button`
  position :absolute;
  width : 60px;
  height : 60px;
  top : ${props => props.where.top};
  left : ${props => props.where.left};
  right : ${props => props.where.right};
  bottom : ${props => props.where.bottom};
  font-size : 42px;
  border:none;
  &:hover {
    color : blue;
  }
`;

export default function Controller() {

  const onKeyPress = (e) => {
    console.log(e);
  }
  const onClick = (e) => {
    console.log(e.target);
  }
  return (
    <MoveContainer onKeyPress={onKeyPress}>
      <Btn where={{ top: "80px", left: "10px" }} onClick={onClick}>
        ◀︎
      </Btn>
      <Btn where={{ top: "45px", left: "70px" }} onClick={onClick}>
        ▲
      </Btn>
      <Btn where={{ left: "70px", bottom: "30px" }} onClick={onClick}>
        ▼
      </Btn>
      <Btn where={{ right: "10px", top: "80px" }} onClick={onClick}>
        ▶︎
      </Btn>
    </MoveContainer >
  );
}
