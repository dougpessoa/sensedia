import styled from "styled-components";

import { ListUl } from "styles/icons";
export { GridIcon } from "styles/icons";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.fieldBackground};
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray};

  display: flex;
  align-items: center;
  padding-right: 5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 20px 10px 3px;
  appearance: none;
  background-image: url("/icons/selectArrow.svg");
  background-position: 99% 50%;
  background-repeat: no-repeat;
  outline: none;
  border: none;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.title};
  background-color: transparent;
`;

export const ListIcon = styled(ListUl)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
