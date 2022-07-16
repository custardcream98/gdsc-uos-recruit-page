import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';

function MainBanner() {
  return (
    <Wrapper>
      <ContentsWrapper>
        <TitleWrapper>
          <Typography type='h1' color={theme.colors.primary.red}>
            Google
          </Typography>
          <Typography type='h1' color={theme.colors.primary.yellow}>
            Developer
          </Typography>
          <Typography type='h1' color={theme.colors.primary.green}>
            Student
          </Typography>
          <Typography type='h1' color={theme.colors.primary.blue}>
            Club
          </Typography>
        </TitleWrapper>
        <Typography type='h2'>University of Seoul</Typography>
        <DescWrapper>
          <Typography type='h6'>2022년부터 함께 할 사람을 찾습니다.</Typography>
        </DescWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  min-height: 100vh;
  position: relative;

  margin: 60px auto;
`;

const ContentsWrapper = styled.div`
  position: absolute;
  left: 0%;
  bottom: 15%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
`;

const DescWrapper = styled.div`
  margin-top: 16px;
`;

export default MainBanner;
