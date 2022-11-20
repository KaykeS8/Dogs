import React from "react";
import Styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  disabled?: boolean;
}

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <button className={Styles.button} {...props}>
      {text}
    </button>
  );
};
