import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;

  img {
    width: 5rem;
    height: 2.5rem;
  }
`;

export const HeaderMenu = styled.div`
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LocationContainer = styled.div`
  width: 143px;
  height: 38px;
  padding: 0.5rem;

  /* text shrink to fit */
  font-size: 0.875rem;
  line-height: 1.13rem;
  white-space: nowrap;

  border-radius: 6px;

  background-color: ${(props) => props.theme.product['purple-light']};
  color: ${(props) => props.theme.product['purple-dark']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  img {
    width: 22px;
    height: 22px;
  }
`;

export const CartContainer = styled.div`
  height: 38px;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme.product['yellow-light']};

  img {
    width: 22px;
    height: 22px;
  }
`;
