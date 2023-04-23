import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 30px;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  background-color: white;
  margin-bottom: 35px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;
export const SectionList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  :last-child {
    border-radius: 0 0 10px;
  }
  :first-of-type {
    border-radius: 0 0 0 10px;
  }
`;
export const Label = styled.span`
  width: 100px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
export const Percentage = styled.span`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;
