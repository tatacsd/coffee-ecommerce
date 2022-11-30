import {
  CartContainer,
  HeaderContainer,
  HeaderMenu,
  LocationContainer,
} from './styles';

import { NavLink } from 'react-router-dom';
import cartIcon from '../../assets/icons/cart.svg';
import pinIcon from '../../assets/icons/pin.svg';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="coffee mug with a text coffee delivery" />

      <nav>
        <HeaderMenu>
          <NavLink to="/" title="Home">
            <LocationContainer>
              <img src={pinIcon} />
              Vancouver, BC
            </LocationContainer>
          </NavLink>
          <NavLink to="/cart" title="Cart">
            <CartContainer>
              <img src={cartIcon} alt="Cart icon" />
            </CartContainer>
          </NavLink>
        </HeaderMenu>
      </nav>
    </HeaderContainer>
  );
}
