import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Container = styled(Box)`
  width: 44.25rem;
  height: 40.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 64px;
  border-radius: 2;
  box-shadow: 0px 62px 97px rgba(32, 32, 32, 0.33),
    0px 13.8485px 21.6662px rgba(32, 32, 32, 0.196715),
    0px 4.12306px 6.4506px rgba(32, 32, 32, 0.133285);
`;

export const ContentContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const LogoContainer = styled(Box)`
  margin-top: 56px;
`;

export const SubmitButton = styled(Button)`
  width: 20.4375rem;
  height: 3rem;
  border-radius: 24px !important;
  margin-top: 24px;
  font-weight: 700;
`;

export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 118px;
`;

export const InputContainer = styled(Box)`
  margin: 16px 0px;
`;

export const Subtitle = styled(Typography)`
  font-weight: 700;
  font-size: 0.75rem;
  color: #666666;
  text-align: center;
`;

export const StyledLink = styled.a`
  color: #ed1e79;
  text-decoration: underline;
  cursor: pointer;
`;
