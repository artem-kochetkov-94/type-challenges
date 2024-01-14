type Camelize<T> = {
  [P in keyof T as P extends string ? CamelCase<P> : P]:
  T[P] extends unknown[]
    ? CamelizeArray<T[P]>
    : T[P] extends Record<PropertyKey, any>
      ? Camelize<T[P]>
      : T[P]
}

type CamelizeArray<T extends unknown[]> =
  T extends [infer Head, ...infer Tail]
    ? Head extends string
      ? [CamelCase<Head>, ...CamelizeArray<Tail>]
      : Head extends object
        ? [Camelize<Head>, ...CamelizeArray<Tail>]
        : Head extends unknown[]
          ? [CamelizeArray<Head>, ...CamelizeArray<Tail>]
          : never
    : T
