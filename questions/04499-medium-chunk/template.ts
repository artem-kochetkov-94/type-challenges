type Chunk<
  T extends unknown[],
  U extends number,
  Acc extends unknown[] = [],
  _Acc extends unknown[] = [],
> =
  _Acc['length'] extends U
    ? Chunk<T, U, [...Acc, _Acc], []>
    : T extends [infer Head, ...infer Tail]
      ? Chunk<Tail, U, Acc, [..._Acc, Head]>
      : _Acc extends []
        ? Acc
        : [...Acc, _Acc]
