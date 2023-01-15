import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Planet, theme, Typography } from 'gdsc-uos-design-system';

interface Props {
  banner: string;
}

function MainBanner({ banner }: Props) {
  return (
    <Wrapper>
      <ContentsWrapper>
        <TitleWrapper>
          <Typography type="h1" color={theme.colors.primary.red}>
            Google
          </Typography>
          <Typography type="h1" color={theme.colors.primary.yellow}>
            Developer
          </Typography>
          <Typography type="h1" color={theme.colors.primary.green}>
            Student
          </Typography>
          <Typography type="h1" color={theme.colors.primary.blue}>
            Clubs
          </Typography>
        </TitleWrapper>
        <Typography type="h2">University of Seoul</Typography>
        <DescWrapper type="h6">{banner}</DescWrapper>
      </ContentsWrapper>
      <Planet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 100vh;

  @media (max-width: ${theme.size.tabletL}px) {
    height: 110vh;
  }
`;

const ContentsWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 0%;
    bottom: 15%;

    z-index: ${theme.zIndex.body};
  `}
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
`;

const DescWrapper = styled(Typography)`
  margin-top: 16px;
`;

export default MainBanner;
