import tw from 'twin.macro';

const Wrapper = tw.div`flex flex-col py-3 bg-gray-900`;
const Copyright = tw.p`text-sm text-gray-100 text-center`;

const Footer = () => (
  <Wrapper>
    <Copyright>© 2020 Takayuki Cho</Copyright>
  </Wrapper>
);

export default Footer;
