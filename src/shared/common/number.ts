export const padding = (num: number, padding: number, radix = 10) =>
  `${'0'.repeat(
    greater(padding - num.toString(radix).length, 0)
  )}${num.toString(radix)}`;
export const paddingObj = (num: number, padding: number, radix = 10) => ({
  prefix: '0'.repeat(greater(padding - num.toString(radix).length, 0)),
  number: num.toString(radix)
});

export const greater = (num: number, limit: number): number =>
  num > limit ? num : limit;
