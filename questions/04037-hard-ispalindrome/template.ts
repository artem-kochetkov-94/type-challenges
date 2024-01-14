type IsPalindrome<T extends string | number> =
  `${T}` extends ReverseString<`${T}`>
    ? true
    : false

type ReverseString<T extends string, Acc extends string = ''> =
  T extends `${infer Head}${infer Tail}`
    ? ReverseString<Tail, `${Head}${Acc}`>
    : Acc
