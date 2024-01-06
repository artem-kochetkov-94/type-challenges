// type GreaterThan<T extends number, U extends number> =
//   U extends 0
//     ? T extends 0
//       ? false
//       : true
//     : T extends 0
//       ? false
//       : GreaterThan<MinusOne<T>, MinusOne<U>>

type GreaterThan<
  T extends number,
  U extends number,
  Count extends 1[] = [],
> =
  Count['length'] extends T
    ? false
    : Count['length'] extends U
      ? true
      : GreaterThan<T, U, [...Count, 1]>
