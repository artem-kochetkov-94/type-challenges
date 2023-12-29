type TrimLeft<S extends string> = S extends `${infer L extends ' ' | '\n' | '\t'}${infer R}`
  ? TrimLeft<R>
  : S
