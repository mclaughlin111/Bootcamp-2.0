import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.text} !important;`;

export const Warning = styled.div`
  margin-top: 5px;
  margin-bottom: 0px;
  height: 5px;
  color: #fb4c4c;
`;

export const LoginHeading = styled.h2`
  margin-left: 10px;
`;
