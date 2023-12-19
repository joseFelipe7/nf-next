import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled, { css } from "styled-components";
import { styleMapper } from "./constants";
import { CustomInputProps } from "./types";

export const ErrorMessage = styled(Typography)`
  font-size: 0.75rem;
`;

export const Label = styled(Typography)`
  color: #666666;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const FieldContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled(TextField)<CustomInputProps>`
  border-radius: 4px;
  ${({ state }) => {
    if (state)
      return css`
        color: ${styleMapper[state.type].color};
        border: ${styleMapper[state.type].border};
        background-color: ${styleMapper[state.type].backgroundColor};
      `;
  }}
  &:focus {
    border: none !important;
  }
  div {
    border: ${({ error }) => error && "1px solid red;"};
  }
  input {
    padding: 15px;
  }
`;
