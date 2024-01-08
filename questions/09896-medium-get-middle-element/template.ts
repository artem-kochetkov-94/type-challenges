type GetMiddleElement<T extends unknown[]> =
  T extends []
    ? T
    : T['length'] extends 1
      ? [T[0]]
      : T['length'] extends 2
        ? [T[0], T[1]]
        : T extends [unknown, ...infer Tail, unknown]
          ? GetMiddleElement<Tail>
          : never

type FDSFSF = GetMiddleElement<[1, 2, 3, 4, 5]>
