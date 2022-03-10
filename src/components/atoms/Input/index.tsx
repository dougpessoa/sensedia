import * as S from "./styles";

export type InputTypes = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const Input = ({ placeholder, value, onChange }: InputTypes) => {
  return (
    <S.Wrapper
      data-testid="sensedia-input"
      placeholder={placeholder}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange && onChange(e.target.value)
      }
      value={value}
    />
  );
};

export default Input;
