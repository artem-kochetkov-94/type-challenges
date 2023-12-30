type LastIndexOf<T, U> = T extends [...infer L, infer R]
  ? Equal<U, R> extends true
    ? L['length']
    : LastIndexOf<L, U>
  : -1

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

