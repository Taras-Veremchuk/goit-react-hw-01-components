import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 2px solid #f1d18a;
  padding: 10px;
  :last-child {
  margin-bottom: 0;
  border-bottom: none

`;
export const Span = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const Avatar = styled.img`
  margin-right: 10px;
`;
export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
