import { FormProvider, useForm } from "react-hook-form";
import { BaseFormProps } from "./types";

export function BaseForm({
  onSubmit,
  children,
  config,
  ...props
}: BaseFormProps) {
  const methods = useForm({ ...config });

  function submitHandler(values: any) {
    if (onSubmit) onSubmit(values);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
}
