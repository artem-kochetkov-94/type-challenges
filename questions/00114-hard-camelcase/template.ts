type CamelCase<S extends string> =
  S extends `${infer Head}_${infer Tail}`
    ? Uppercase<Tail> extends Lowercase<Tail>
      ? Lowercase<S>
      : Head extends ''
        ? `_${Lowercase<Head>}${Capitalize<CamelCase<Tail>>}`
        : `${Lowercase<Head>}${Capitalize<CamelCase<Tail>>}`
    : Lowercase<S>
