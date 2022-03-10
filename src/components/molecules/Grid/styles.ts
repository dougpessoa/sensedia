import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Cards = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  .ant-pagination-item-active {
    border: none;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 10px;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-pagination {
    display: flex;
  }

  .ant-pagination-item a {
    color: ${({ theme }) => theme.colors.subTitle};
  }

  .ant-pagination-item-active a {
    color: white;
  }
`;

export const FooterInformation = styled.div`
  color: ${({ theme }) => theme.colors.subTitle};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
`;
