import styled, { css } from "styled-components";
import { ButtonTypes } from ".";

type ButtonStylesTypes = Omit<ButtonTypes, "children" | "onClick">;

export const Wrapper = styled.button<ButtonStylesTypes>`
  outline: none;
  border: none;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 1.25px;
  display: flex;
  gap: 5px;
  align-items: center;

  ${({ buttonType }) =>
    buttonType === "rounded"
      ? css`
          padding: 10px 20px;
          background-color: ${({ theme }) => theme.colors.primary};
          color: white;
          border-radius: 25px;
          transition: 0.5s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.primaryHover};
          }

          &:focus {
            box-shadow: 1px 0px 10px 0px
              ${({ theme }) => theme.colors.primaryFocus};
          }
        `
      : css`
          padding: 5px 10px;
          background-color: transparent;
          color: ${({ theme }) => theme.colors.primary};

          transition: color 1s;

          &:hover {
            color: ${({ theme }) => theme.colors.primaryHover};
          }
        `}

  &:active {
    transform: scale(0.99);
  }
`;
