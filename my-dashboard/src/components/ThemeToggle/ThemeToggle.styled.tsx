import { Select, FormControl, InputLabel } from "@mui/material";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
  color: ${({ theme }) => theme.text} !important;
  background-color: ${({ theme }) => theme.border} !important;
`;

export const StyledFormControl = styled(FormControl)`
  color: ${({ theme }) => theme.text} !important;
`;

export const StyledInputLabel = styled(InputLabel)`
  color: ${({ theme }) => theme.text} !important;
`;
