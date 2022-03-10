import { useEffect, useState } from "react";
import * as S from "./styles";

export type InputTypes = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const Input = ({ placeholder, value, onChange }: InputTypes) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <S.Wrapper
      data-testid="sensedia-input"
      placeholder={placeholder}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value);
        setInputValue(e.target.value);
      }}
      value={inputValue}
    />
  );
};

export default Input;
