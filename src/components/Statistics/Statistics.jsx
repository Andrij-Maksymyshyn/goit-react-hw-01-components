import PropTypes from 'prop-types';
import {
  Caption,
  BoxMenu,
  SectionBox,
  ItemLi,
  LabelItem,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <SectionBox>
      {title && <Caption>{title}</Caption>}

      <BoxMenu>
        {stats.map(({ id, label, percentage }) => (
          <ItemLi key={id}>
            <LabelItem>{label}</LabelItem>
            <span className="percentage">{percentage}%</span>
          </ItemLi>
        ))}
      </BoxMenu>
    </SectionBox>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
  title: PropTypes.string,
};
