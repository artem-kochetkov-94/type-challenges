type IndexOf<
  T extends unknown[],
  U,
  Acc extends unknown[] = [],
> = T extends [infer Head, ...infer Tail]
  ? Equal<Head, U> extends true
    ? Acc['length']
    : IndexOf<Tail, U, [...Acc, unknown]>
  : -1
