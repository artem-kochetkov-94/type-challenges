type Without<
  T extends unknown[],
  U,
  Acc extends unknown[] = [],
> =
  U extends number[]
    ? T extends [infer Head, ...infer Tail]
      ? Head extends U[number]
        ? Without<Tail, U, [...Acc]>
        : Without<Tail, U, [...Acc, Head]>
      : [...Acc]
    : U extends number
      ? T extends [infer Head, ...infer Tail]
        ? Head extends U
          ? Without<Tail, U, [...Acc]>
          : Without<Tail, U, [...Acc, Head]>
        : [...Acc]
      : T
