type CapitalizeWords<
  S extends string,
  Prev extends string = '',
> =
  S extends `${infer Head}${infer Tail}`
    ? Head extends Capitalize<Head>
      ? `${Capitalize<Prev>}${Head}${CapitalizeWords<Tail>}`
      : CapitalizeWords<Tail, `${Prev}${Head}`>
    : Capitalize<Prev>
