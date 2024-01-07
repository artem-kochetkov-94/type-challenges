type Integer<T> =
  number extends T
    ? never
    : T extends number
      ? `${T}` extends `${infer Base}.${infer Tail}`
        ? IsZeroString<Tail> extends true
          ? Base
          : never
        : T
      : never

type IsZeroString<T> =
  T extends `${infer Head}${infer Tail}`
    ? Head extends '0'
      ? IsZeroString<Tail>
      : false
    : true

type Integer2<T> =
  `${T & number}` extends `${string}.${string}`
    ? never
    : number extends T ? never : T
