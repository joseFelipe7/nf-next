import { Fragment, useState } from "react";
import { Controller } from "react-hook-form";
import { componentMapper } from "./constants";
import { InputPasswordFormProps } from "./types";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

import * as S from "./styles";

export function InputPasswordForm({
  variant = "default",
  controller,
  input,
  fieldHeader,
  label,
}: InputPasswordFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword((oldState) => !oldState);
  }

  function renderIcon() {
    if (!showPassword) return <Visibility />;
    return <VisibilityOff />;
  }

  function renderHeader() {
    if (fieldHeader) return fieldHeader;
    if (label) return <S.Label>{label}</S.Label>;
    return null;
  }

  const Component = componentMapper[variant];

  return (
    <S.FieldContainer>
      {renderHeader()}
      <Controller
        {...controller}
        render={({ field, formState }) => {
          const { errors } = formState;
          const { name } = controller;
          const { [name]: fieldError } = errors;
          return (
            <Fragment>
              <Component
                {...input}
                {...field}
                style={{ height: "49px" }}
                size="small"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      arial-label="toggle password visibility"
                      onClick={togglePassword}
                      edge="end"
                    >
                      {renderIcon()}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {fieldError && (
                <S.ErrorMessage color="error" variant="body1">
                  {fieldError.message as string}
                </S.ErrorMessage>
              )}
            </Fragment>
          );
        }}
      />
    </S.FieldContainer>
  );
}
