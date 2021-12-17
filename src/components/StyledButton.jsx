import styled from "styled-components";
import { css } from "styled-components";
// 오타가 나더라도 확인이 쉽지 않아서 주의가 필요함.
const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;
  text-decoration: none;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export default StyledButton;
