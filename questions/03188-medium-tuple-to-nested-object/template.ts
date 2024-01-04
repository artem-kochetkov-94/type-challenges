type TupleToNestedObject<
  T extends string[],
  U
> =
  T extends [infer Head extends string, ...infer Tail extends string[]]
    ? { [P in Head]: TupleToNestedObject<Tail, U> }
    : U


type AAA = TupleToNestedObject<['a', 'b', 'c'], number>