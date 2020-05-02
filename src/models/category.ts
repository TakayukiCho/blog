import EssayIcon from '../images/categories/essay.svg';

export const categories = [
  {
    name: 'essay',
    label: 'エッセイ',
    icon: EssayIcon,
  },
] as const;

export function getCategoryByName(name: string) {
  // FIXME: nullが本番で出ないようになにかする(customSchemeとかでbuildのタイミングでおとすようにする？)
  return categories.find(category => category.name === name);
}
