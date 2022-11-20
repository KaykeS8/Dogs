import React, { FocusEventHandler } from "react";
import Styles from './Input.module.css';
import { InputProps } from "./TypeInput";

export const Input = ({ type, label, name, value, setValue, onChange, error, onBlur }: InputProps) => {
  return (
    <div className={Styles.wrapper}>
      <label className={Styles.label} htmlFor={name}>{label}</label>
      <input className={Styles.input} type={type} id={name} value={value} onChange={onChange} onBlur={onBlur} />
      {error && <p className={Styles.error}>{error}</p>}
    </div>
  );
};
