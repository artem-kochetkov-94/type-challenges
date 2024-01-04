type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> =
  | (
    M['length'] extends 0
      ? BemClass<B, E, '__'>
      : never
    )
  | (
    E['length'] extends 0
      ? BemClass<B, M, '--'>
      : BemClass<B, M, `__${E[0]}--`>
    )

type BemClass<
  Base extends string,
  Items extends string[],
  Divider extends string
> = `${Base}${Divider}${Items[number]}`

type BEM2<
  B extends string,
  E extends string[],
  M extends string[]
> =
  `${B}${E extends [] ? '' : `__${E[number]}`}${M extends [] ? '' : `--${M[number]}`}`