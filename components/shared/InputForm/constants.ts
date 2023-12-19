import { InputStateType } from "./types";

export const styleMapper: Record<InputStateType, any> = {
  success: {
    border: "1px solid #00C643;",
    color: "#00C643",
    backgroundColor: " rgba(0, 198, 67, 0.05);",
  },
  error: {
    border: "1px solid #E93B5A",
    color: "#E93B5A",
    backgroundColor: "rgba(233, 59, 90, 0.05);",
  },
};
