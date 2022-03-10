import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import Select from "components/atoms/Select";
import { useHome } from "contexts/home";
import { useState } from "react";
import * as S from "./styles";

export type HeaderTypes = {
  selectionView: (value: number) => void;
};

const Header = ({ selectionView }: HeaderTypes) => {
  const [query, setQuery] = useState("");
  const { handleSearch } = useHome();

  const handleClear = () => {
    handleSearch("");
    setQuery("");
  };

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <Input
          value={query}
          onChange={(value: string) => setQuery(value)}
          placeholder="Type for search..."
        />
      </S.InputWrapper>
      <S.AsideWrapper>
        <Select onChange={selectionView} />
        <Button onClick={() => handleSearch(query)} buttonType="rounded">
          <S.SearchIcon /> SEARCH
        </Button>
        <Button onClick={() => handleClear()}>CLEAR</Button>
      </S.AsideWrapper>
    </S.Wrapper>
  );
};

export default Header;
