type NumberToArray<N, Acc extends unknown[] = []> =
  1 extends 0
    ? never
    : Acc['length'] extends N
      ? Acc
      : NumberToArray<N, [...Acc, unknown]>

type MinusOne<T extends number> =
  NumberToArray<T> extends [unknown, ...infer R]
    ? R['length']
    : -1