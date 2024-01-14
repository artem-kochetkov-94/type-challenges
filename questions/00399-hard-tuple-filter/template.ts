type FilterOut<
  T extends unknown[],
  F,
  Acc extends unknown[] = [],
> =
  T extends [infer Head, ...infer Tail]
    ? Equal<Head, F> extends true
      ? FilterOut<Tail, F, Acc>
      : [Head] extends [F]
          ? FilterOut<Tail, F, Acc>
          : FilterOut<Tail, F, [...Acc, Head]>
    : Acc
