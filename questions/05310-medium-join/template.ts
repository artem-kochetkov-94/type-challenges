type Join<
  T extends string[],
  U extends string | number
> = T extends [infer First extends string, ...infer R extends string[]]
  ? R extends []
    ? `${First}`
    : `${First}${U}${Join<R, U>}`
  : ''