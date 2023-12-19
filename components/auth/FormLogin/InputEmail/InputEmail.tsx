import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputEmail() {
  const { control } = useFormContext();
  return <InputForm controller={{ name: "email", control }} label="Email" />;
}
