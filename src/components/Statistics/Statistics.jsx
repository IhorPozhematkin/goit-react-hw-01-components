import {Section, Title, StatList, Item, Label, Percentage
} from "./Statistics.styled";
import { getRandomHexColor } from 'helpers/getRandomColor';

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
   {title && <Title>{title}</Title>}

  <StatList>
  {stats.map(item => (
          <Item key={item.id} color={getRandomHexColor()}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </Item>
        ))}
  </StatList>
</Section>
    )
}