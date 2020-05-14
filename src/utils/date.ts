import dayjs from 'dayjs';

export function isoDateToJaFormat(isoDate: string) {
  return dayjs(isoDate).format('YYYY年M月D日');
}
