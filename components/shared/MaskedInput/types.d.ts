import { Props as InputMaskProps } from "react-input-mask";

export type MaskedInputProps = Omit<InputMaskProps, "children"> & {
  children: any;
};
