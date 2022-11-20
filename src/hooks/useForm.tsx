import React from "react";

const types: typeRegex = {
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: 'A senha precisa ter 1 caracter maísculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres'
  },
  number: {
    regex: /^\d+$/,
    message: 'Digite apenas numeros'
  }
};

type typeRegex = {
  email: {
    regex: RegExp;
    message: string;
  };
  password: {
    regex: RegExp;
    message: string;
  };
  number: {
    regex: RegExp;
    message: string;
  }
};

type FormProps = "email" | "password" | "number" | boolean;

export const UseForm = (type?: FormProps) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string>('');

  function validate(value: string) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha uma valor valido");
      return false;
    } else if (
      types[type as keyof typeRegex] &&
      !types[type as keyof typeRegex].regex.test(value)
    ) {
      setError(types[type as keyof typeRegex].message);
      return false;
    } else {
      setError('');
      return true;
    }
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) {
      validate(target.value)
    }
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onblur: () => validate(value),
    error
  };
};
