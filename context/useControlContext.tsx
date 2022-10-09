import { useState } from "react";
import { AuthContext, AuthContextDefault } from "./AuthContext";
import { en } from "../languages/en";
import { ch } from "../languages/ch";
type optionType = "auth" | "config" | "lan";

const [authContext, setAuthContext] = useState(AuthContextDefault);
const [lanType, setLanType] = useState(en);

export const useControlContext = (option: optionType) => {
  switch (option) {
    case "auth":
      return setAuthContext;
    case "lan":
      if (lanType != en) {
        setLanType(ch);
      } else {
        setLanType(en);
      }
      return setLanType;
    default:
      console.log("missing option");
  }
};
