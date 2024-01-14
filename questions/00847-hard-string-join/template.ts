type Parts<
  A extends string[],
  D extends string = '',
> =
  A extends [infer Head extends string, ...infer Tail extends string[]]
    ? Tail extends []
      ? Head
      : `${Head}${D}${Parts<Tail, D>}`
    : ''

declare function join<D extends string>(delimiter: D):
  <Args extends string[]>(...parts: Args) => Parts<Args, D>
