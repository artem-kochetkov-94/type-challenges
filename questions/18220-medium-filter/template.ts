type Filter<
  T extends unknown[],
  P,
  Acc extends unknown[] = [],
> =
  T extends [infer Head, ...infer Tail]
    ? Head extends P
      ? Filter<Tail, P, [...Acc, Head]>
      : Filter<Tail, P, Acc>
    : Acc
