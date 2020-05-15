import { MouseEvent } from 'react';
import HamburgerMenu from '../../images/hamburgerMenu.svg';

type Props = {
  onClick: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
};

const HumberOpenButton = ({ onClick }: Props) => (
  <button onClick={onClick} type="button">
    <img src={HamburgerMenu} alt="menu" />
  </button>
);

export default HumberOpenButton;
