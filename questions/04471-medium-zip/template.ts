type Zip<
  T extends unknown[],
  U extends unknown[],
  Acc extends unknown[] = [],
>
  = T extends [infer Head, ...infer Tail]
    ? U extends [infer Head2, ...infer Tail2]
      ? Zip<Tail, Tail2, [...Acc, [Head, Head2]]>
      : Acc
    : Acc
