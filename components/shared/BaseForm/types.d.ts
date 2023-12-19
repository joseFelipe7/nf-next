import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from "react";
import { UseFormProps } from "react-hook-form";

export type BaseFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement, HTMLFormElement>
> & {
  children: ReactNode;
  config?: UseFormProps;
  initialValues: any;
};
