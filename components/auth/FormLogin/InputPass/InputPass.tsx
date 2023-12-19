import { InputPasswordForm } from "@/components/shared/InputPasswordForm/InputPasswordForm";
import { useFormContext } from "react-hook-form";

export function InputPass() {
  const { control } = useFormContext();
  return (
    <InputPasswordForm
      controller={{ name: "password", control }}
      label="Senha"
      variant="outlined"
    />
  );
}
