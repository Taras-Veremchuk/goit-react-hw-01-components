import PropTypes from 'prop-types';
import {
  Section,
  Title,
  SectionList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import { createColor } from 'utils/createColor';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <SectionList>
        {stats.map(stat => (
          <Item key={stat.id} style={{ backgroundColor: createColor() }}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}</Percentage>
          </Item>
        ))}
      </SectionList>
    </Section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
