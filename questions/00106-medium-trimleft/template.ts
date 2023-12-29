type SpaceLeft = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${SpaceLeft}${infer R}`
  ? TrimLeft<R>
  : S
