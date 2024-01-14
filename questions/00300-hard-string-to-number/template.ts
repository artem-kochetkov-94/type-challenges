type ToNumber<S extends string> =
  S extends `${infer Head extends number}`
    ? Head
    : never
