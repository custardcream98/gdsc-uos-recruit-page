import styled from '@emotion/styled';
import { theme } from '@gdsc-uos-recruit-page/design-system/theme';
import Typography from '@gdsc-uos-recruit-page/design-system/components/Typography';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import CustomLink from './CustomLink';

function Header() {
  const router = useRouter();

  const handleLinkToPage = useCallback(
    (url: string) => {
      router.push(url);
    },
    [router]
  );

  return (
    <Wrapper>
      <NavigationWrapper>
        <CustomLink href='/'>
          <Logo>
            <picture>
              <source
                media={`(max-width: ${theme.size.mobile}px)`}
                srcSet='/logo_small.png'
              />
              <img src='/logo.png' />
            </picture>
          </Logo>
        </CustomLink>
        <Navigation>
          <Typography type='body4' onClick={() => handleLinkToPage('/')}>
            모집 공고
          </Typography>
          <Typography
            type='body4'
            onClick={() => handleLinkToPage('/qna/common')}
          >
            자주 묻는 질문
          </Typography>
          <Typography
            type='body4'
            onClick={() => handleLinkToPage('/qna/common')}
          >
            지원 하기
          </Typography>
        </Navigation>
      </NavigationWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  margin: 0 auto;

  position: fixed;
  top: 0;
  z-index: ${theme.zIndex.header};

  display: flex;
  align-items: center;

  -webkit-backdrop-filter: saturate(50%) blur(4px);
  backdrop-filter: blur(4px);
`;

const NavigationWrapper = styled.header`
  width: 80%;
  margin: 0 auto;
`;

const Navigation = styled.nav`
  display: flex;
  float: right;

  gap: ${theme.padding.md}px;
  @media (max-width: ${theme.size.mobile}px) {
    gap: 8px;
  }

  .body4 {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  width: 300px;
  height: 40px;

  position: absolute;
  top: 10px;

  cursor: pointer;

  picture,
  picture img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.size.mobile}px) {
    width: 40px;
    height: 20px;
    top: 20px;
  }
`;

export default Header;
