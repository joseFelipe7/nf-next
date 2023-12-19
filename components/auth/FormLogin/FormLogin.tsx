import { yupResolver } from "@hookform/resolvers/yup";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "../../../src/plugins/_core/axiosInstance";

import { loginFormSchema } from "./schemas";
import { LoginFormPayload } from "./types";

import * as S from "./styles";
import { InputPass } from "./InputPass/InputPass";
import { InputEmail } from "./InputEmail/InputEmail";
import { BaseForm } from "@/components/shared/BaseForm/BaseForm";

export function FormLogin() {
  const router = useRouter();

  async function handleSubmit(payload: LoginFormPayload) {
    try {
      const { data: responseData } = await api.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        payload
      );
      const { token } = responseData;
      const { data: decryptData }: any = jwtDecode(token);

      if (decryptData.partnerSettings)
        sessionStorage.setItem("partnerSettings", decryptData.partnerSettings);
      if (decryptData.partnerModalities)
        sessionStorage.setItem(
          "partnerModalities",
          decryptData.partnerModalities
        );
      if (decryptData.id) sessionStorage.setItem("userId", decryptData.id);
      if (decryptData.fullName)
        sessionStorage.setItem("name", decryptData.fullName);
      if (decryptData.logo) sessionStorage.setItem("logo", decryptData.logo);
      if (decryptData.tradeName)
        sessionStorage.setItem("tradeName", decryptData.tradeName);
      if (decryptData.email) sessionStorage.setItem("email", decryptData.email);
      if (decryptData.partnerId)
        sessionStorage.setItem("partnerId", decryptData.partnerId);

      router.push("/agendamentos");
    } catch (err: any) {
      const { message } = err.response?.data;
    } finally {
    }
  }

  return (
    <S.Container>
      <S.ContentContainer>
        <Image
          src="/assets/isaSimpleLogo.svg"
          width={73}
          height={38}
          alt="isa logo image"
        />
        <S.LogoContainer>
          <Image
            src="/assets/isaConcierge.svg"
            width={236}
            height={44}
            alt="isa logo image"
          />
        </S.LogoContainer>
        <BaseForm
          onSubmit={handleSubmit}
          config={{
            mode: "onBlur",
            reValidateMode: "onBlur",
            resolver: yupResolver(loginFormSchema),
          }}
        >
          <S.InputContainer>
            <InputEmail />
          </S.InputContainer>
          <S.InputContainer>
            <InputPass />
          </S.InputContainer>
          <S.Subtitle>
            <Link href="/alterar-senha">
              <S.StyledLink>CLIQUE AQUI</S.StyledLink>
            </Link>
            {""} E REDEFINA SUA SENHA
          </S.Subtitle>
          <S.SubmitButton color="primary" variant="contained" type="submit">
            Entrar
          </S.SubmitButton>
        </BaseForm>
      </S.ContentContainer>
    </S.Container>
  );
}
