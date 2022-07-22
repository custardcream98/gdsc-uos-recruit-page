import styled from '@emotion/styled';
import {
  Circle,
  TeamCard,
  theme,
  Title,
  Typography,
} from '@gdsc-uos-recruit-page/design-system';
import { defaultDuration } from '@gdsc-uos-recruit-page/hooks/useAOS';
import { StyledAOSEmptyWrapper } from '.';

function MainProcess() {
  return (
    <Wrapper>
      <TitleWrapper data-aos='fade-up' data-aos-duration={defaultDuration}>
        <Typography type='h1' textAlign='center'>
          Process
        </Typography>
      </TitleWrapper>
      <StyledAOSEmptyWrapper
        data-aos='fade-up'
        data-aos-duration={defaultDuration}
      >
        <Title
          title='Process for Recruit'
          desc1='저희와 함께할 새로운 멤버를 구합니다.'
          desc2='많은 지원 부탁드립니다.'
          data-aos='fade-up'
          data-aos-duration={defaultDuration}
        />
      </StyledAOSEmptyWrapper>
      <CircleList>
        <CircleItem data-aos='fade-up' data-aos-duration={defaultDuration}>
          <Circle type='first' title='서류 접수1' date='2022.08.04 월요일' />
        </CircleItem>
        <CircleItem data-aos='fade-up' data-aos-duration={defaultDuration}>
          <Circle type='second' title='서류 접수2' date='2022.08.04 월요일' />
        </CircleItem>
        <CircleItem data-aos='fade-up' data-aos-duration={defaultDuration}>
          <Circle type='third' title='서류 접수4' date='2022.08.04 월요일' />
        </CircleItem>
        <CircleItem data-aos='fade-up' data-aos-duration={defaultDuration}>
          <Circle type='fourth' title='서류 접수5' date='2022.08.04 월요일' />
        </CircleItem>
        {/* <CircleItem data-aos='fade-up' data-aos-duration={defaultDuration}>
          <Circle type='third' title='서류 접수3' date='2022.08.04 월요일' />
        </CircleItem> */}
      </CircleList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  position: relative;

  margin: 60px auto;
`;

const CircleList = styled.ul`
  display: flex;
  justify-content: space-between;

  padding: 0;
  margin-top: 3em;

  @media (min-width: ${theme.size.tabletL + 300}px) {
    margin-top: 8em;
  }

  @media (max-width: ${theme.size.tabletL}px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${theme.size.tabletS}px) {
    width: 53.6rem;
  }

  @media (max-width: ${theme.size.mobile}px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;

const CircleItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.size.tabletL}px) {
      width: 100%;

      &:first-of-type {
        grid-row: 1/2;
        grid-column: 1/1;
      }

      &:nth-of-type(2) {
        grid-row: 2/2;
        grid-column: 4/1;
      }

      &:nth-of-type(3) {
        grid-row: 1/2;
        grid-column: 8/2;
      }

      &:nth-of-type(4) {
        grid-row: 2/2;
        grid-column: 12/4;
      }

      &:nth-of-type(5) {
        grid-column: 5/7;
      }
    }

    @media (max-width: ${theme.size.tabletS}px) {
      &:nth-of-type(1) {
        grid-row: 1/3;
        grid-column: 1/2;
      }

      &:nth-of-type(2) {
        grid-row: 2/4;
        grid-column: 2/3;
      }

      &:nth-of-type(3) {
        grid-row: 3/5;
        grid-column: 1/2;
      }

      &:nth-of-type(4) {
        grid-row: 4/6;
        grid-column: 2/3;
      }

      &:nth-of-type(5) {
        grid-row: 5/7;
        grid-column: 2/3;
      }
    }
  };
`;

const TitleWrapper = styled.div`
  margin-bottom: 5em;

  @media (max-width: ${theme.size.mobile}px) {
    margin-bottom: 2em;
  }
`;

export default MainProcess;
