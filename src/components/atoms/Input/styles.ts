import styled from "styled-components";

export const Wrapper = styled.input`
  width: 100%;
  font-size: 16px;
  outline: none;
  border-width: 0 0 1px 0;
  border-style: solid;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.fieldBackground};
  border-color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.title};
  transition: background-color 1s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.grayHover};
    background-color: ${({ theme }) => theme.colors.fieldBackgroundHover};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.fieldBackgroundHover};
  }
`;
