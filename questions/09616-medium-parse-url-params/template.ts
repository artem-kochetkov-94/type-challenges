type ParseUrlParams<T> =
  T extends `${string}:${infer Head}/${infer Tail}`
    ? Head | ParseUrlParams<Tail>
    : T extends `${string}:${infer Head}`
      ? Head
      : never
