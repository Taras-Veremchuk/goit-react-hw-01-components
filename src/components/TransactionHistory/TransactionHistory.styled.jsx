import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;
export const HeadEl = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #f78536;
  font-weight: bold;
`;
export const BodyLine = styled.tr`
:nth-of-type(even) {
  background-color: #f1d18a;
}
:hover {
  background-color: #fffe9a`;
export const BodyEl = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;
