import * as S from "./styles";
import { SelectOptions } from "./options";
import React, { useState } from "react";

export type OptionTypes = {
  label: string;
  value: number;
  icon?: React.ReactNode;
};

export type SelectTypes = {
  options?: OptionTypes[];
  onChange?: (value: number) => void;
};

const Select = ({ options = SelectOptions, onChange }: SelectTypes) => {
  const [selected, setSelected] = useState<number | undefined>(1);

  const handleSelection = (value: number) => {
    setSelected(value);
    onChange && onChange(value);
  };

  const getIcon = (value: number): React.ReactNode => {
    return options.find((option) => option.value === value).icon;
  };

  return (
    <S.Wrapper>
      <S.IconWrapper>{selected && getIcon(selected)}</S.IconWrapper>
      <S.Select
        data-testid="sensedia-select"
        onChange={(e: React.FormEvent<HTMLSelectElement>) =>
          handleSelection(Number(e.currentTarget.value))
        }
        defaultValue="1"
      >
        {options.map((option) => (
          <option
            data-testid="sensedia-options"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </S.Select>
    </S.Wrapper>
  );
};

export default Select;
