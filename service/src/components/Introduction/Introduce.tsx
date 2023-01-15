import styled from '@emotion/styled';
import { theme, Typography } from 'gdsc-uos-design-system';

interface Props {
  desc: string;
}

function Introduce({ desc }: Props) {
  return (
    <Wrapper>
      <Typography type="h5" color={theme.colors.text.bold}>
        소개
      </Typography>
      <Typography type="body3">{desc}</Typography>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default Introduce;
