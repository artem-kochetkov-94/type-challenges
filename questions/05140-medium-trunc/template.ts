type Trunc<T extends string | number> =
  `${T}` extends `${infer Head}.${string}`
    ? Head extends ''
      ? '0'
      : `${Head}`
    : `${T}`
