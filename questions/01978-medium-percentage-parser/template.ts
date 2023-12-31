type ParseSign<T> =
  T extends `${infer Sign extends '+' | '-'}${infer _Tail}`
    ? Sign
    : ''

type ParseNumber<T> = T extends `${ParseSign<T>}${infer N}${ParsePercent<T>}`
  ? N
  : ''

type ParsePercent<T> = T extends `${string}${infer Tail extends '%'}`
  ? Tail
  : ''

type PercentageParser<T extends string> = 
  [
    ParseSign<T>,
    ParseNumber<T>,
    ParsePercent<T>,
  ]
