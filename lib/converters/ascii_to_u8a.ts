export const ascii_to_u8a = (str: string): Uint8Array => {
  const result = new Uint8Array(str.length).map(
    (_, i) => str.codePointAt(i) ?? 0
  );

  return result;
};
