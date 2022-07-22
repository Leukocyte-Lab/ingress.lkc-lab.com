export const stringToRegexp = (raw: string) => {
  const [_, rule, options] =
    raw.match(/\/(.+)\/(.*)/) ?? ([null, '', ''] as [never, string, string]);

  return new RegExp(rule, options);
};
