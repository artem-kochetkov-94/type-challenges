type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
    ? `${L}${To}${R}`
    : S

type Replace2<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${From}${infer Tail}`
    ? `${To}${Tail}`
    : S extends `${infer Head}${infer Tail}`
      ? `${Head}${Replace2<Tail, From, To>}`
      : S