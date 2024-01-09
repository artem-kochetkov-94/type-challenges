type Unique<
  T extends unknown[] = [],
  Acc extends unknown[] = [],
> =
  T extends [infer Head, ...infer Tail]
    ? Includes<Acc, Head> extends true
      ? Unique<Tail, Acc>
      : Unique<Tail, [...Acc, Head]>
    : Acc

type FSDLJF = Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>
