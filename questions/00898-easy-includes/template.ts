type Includes<T extends readonly any[], U> =
  T extends [infer L, ...infer Rest]
    ? Equal<L, U> extends true
      ? true
      : Includes<Rest, U>
    : false
