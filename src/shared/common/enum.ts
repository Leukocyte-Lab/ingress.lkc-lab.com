export function enumMapping<Payload, Enum>(
  item: Payload,
  type: Enum,
  key: keyof Payload
): Payload {
  return {
    ...item,
    [key]: type[item[key] as unknown as keyof Enum],
  };
}
