type DropString<S extends string, R extends string> =
  S extends `${infer Head}${infer Tail}`
    ? R extends `${string}${Head}${string}`
      ? DropString<Tail, R>
      : `${Head}${DropString<Tail, R>}`
    : S
