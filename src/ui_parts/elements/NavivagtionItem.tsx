import tw from 'twin.macro';
import { Link } from 'gatsby';

type Props = {
  name: string;
  label: string;
  icon: string;
};

const Wrapper = tw.div`flex items-center`;
const Icon = tw.img`w-8 h-8 fill-current stroke-current text-white`;
const Label = tw.span`text-lg font-semibold tracking-wide`;

const NavigationItem = ({ name, label, icon }: Props) => (
  <Link to={`/${name}`}>
    <Wrapper>
      <Icon src={icon} alt={name} css={tw`mr-2`} />
      <Label>{label}</Label>
    </Wrapper>
  </Link>
);

export default NavigationItem;
