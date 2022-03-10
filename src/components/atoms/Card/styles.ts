import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 257px;
  min-height: 218.81px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 13px;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px 0;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.title};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`;

export const Subtitle = styled.h5`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.subTitle};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 0 0;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.gray};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: left;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;
