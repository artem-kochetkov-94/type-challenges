type Flatten<T extends any[]> =
  T extends []
    ? []
    : T extends [infer Head, ...infer Tail]
      ? Head extends unknown[]
        ? [...Flatten<Head>, ...Flatten<Tail>]
        : [Head, ...Flatten<Tail>]
      : never
