type Space = ' ' | '\n' | '\t'

type Trim<S extends string> =
  S extends `${Space}${infer M}`
    ? Trim<M>
    : S extends `${infer M2}${Space}`
      ? Trim<M2>
      : S
