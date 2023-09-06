export const getBgClassName = (num: number) => {
  if (num >= 1 && num <= 10) return 'bg-clr1';
  else if (num >= 11 && num <= 20) return 'bg-clr2';
  else if (num >= 21 && num <= 30) return 'bg-clr3';
  else if (num >= 31 && num <= 40) return 'bg-clr4';
  else if (num >= 41 && num <= 45) return 'bg-clr5';
  return '';
};
