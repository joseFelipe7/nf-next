import InputMask from "react-input-mask";
import { MaskedInputProps } from "./types";

const MaskedInput: React.FC<MaskedInputProps> = ({ children, ...props }) => {
  return <InputMask {...props}>{children}</InputMask>;
};

export default MaskedInput;
