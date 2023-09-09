export const getLottoDrawDate = async (draw: number) => {
  const res = await fetch(`/api/${draw}`);
  const data = (await res.json()) as LottoData;

  if (data.returnValue === 'fail') throw new Error('data is invalid');
  return data;
};
