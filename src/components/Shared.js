import styled from "@emotion/styled";

export const LogoText = styled.h3`
  margin: 0;
`;

export const Container = styled.div`
  max-width: 960px;
  padding: 15px;
  margin: auto;
`;

export const Header = styled.header`
  border-bottom: 1px solid gray;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  algin-items: center;
  @media (max-width: 778px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;