import tw from 'twin.macro';
import Copyright from '../elements/Copyrighit';

const Wrapper = tw.div`flex flex-col py-3 bg-gray-900`;

const Footer = () => (
  <Wrapper>
    <Copyright>© 2020 Takayuki Cho</Copyright>
  </Wrapper>
);

export default Footer;
