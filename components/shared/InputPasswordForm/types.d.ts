import { OutlinedInputProps } from "@mui/material";
import { ControllerProps } from "react-hook-form";
import { componentMapper } from "./constants";

export type InputPasswordFormProps = {
  variant?: keyof typeof componentMapper;
  controller: Omit<ControllerProps, "render">;
  input?: OutlinedInputProps;
  label?: string;
  fieldHeader?: ReactNode;
};
