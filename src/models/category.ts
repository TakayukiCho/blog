import EssayIcon from '../images/categories/essay.svg';
import HistoryIcon from '../images/categories/history.svg';

export const categories = [
  {
    name: 'essay',
    label: 'エッセイ',
    icon: EssayIcon,
  },
  {
    name: 'history',
    label: '歴史',
    icon: HistoryIcon,
  },
] as const;

export function getCategoryByName(name: string) {
  // FIXME: nullが本番で出ないようになにかする(customSchemeとかでbuildのタイミングでおとすようにする？)
  return categories.find(category => category.name === name);
}
