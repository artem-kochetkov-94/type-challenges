type All<T extends unknown[], U> =
  T extends [infer Head, ...infer Tail]
    ? Equal<Head, U> extends false
      ? false
      : All<Tail, U>
    : true
