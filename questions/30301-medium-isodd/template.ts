type isOdd = '1' | '3' | '5' | '7' | '9'

type CheckOddString<T extends string>
  = `${T}` extends `${infer Head}${infer Tail}`
    ? Tail extends ''
      ? Head extends isOdd
        ? true
        : false
      : CheckOddString<Tail>
    : never

type IsOdd<T extends number> = CheckOddString<`${T}`>
