import styled from "styled-components";
import { ChevronDown } from "styles/icons";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  position: relative;
`;

export const AntdWrapper = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.clearBorder};
  border-radius: 4px;

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

  .ant-table-thead > tr > th {
    color: ${({ theme }) => theme.colors.subTitle};
  }

  .ant-table {
    color: ${({ theme }) => theme.colors.subTitle};
  }

  .ant-table.ant-table-small {
    font-size: 16px;
  }

  .ant-table-small .ant-table-thead > tr > th {
    background-color: white;
    font-size: 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.subTitle};
  }

  .ant-table-column-sorter {
    display: none;
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.title};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`;

export const ArrowDown = styled(ChevronDown)`
  width: 15px;
  height: 15px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 5px;
`;

export const FooterInformation = styled.div`
  color: ${({ theme }) => theme.colors.subTitle};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
