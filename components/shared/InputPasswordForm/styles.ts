import { Typography, Box } from "@mui/material";
import styled from "styled-components";

export const ErrorMessage = styled(Typography)`
  font-size: 0.75rem;
`;

export const FieldContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled(Typography)`
  color: #666666;
  font-weight: 700;
`;
