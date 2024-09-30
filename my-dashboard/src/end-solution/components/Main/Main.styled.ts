import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledMain = styled(Box)`
  padding: 20px;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  transition: background-color 300ms linear;
`;

export const StyledParagraph = styled.p`
  padding: 20px;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;
