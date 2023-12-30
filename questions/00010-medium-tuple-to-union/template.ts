type TupleToUnion<T> = T extends [infer L, ...infer R]
  ? L | TupleToUnion<R>
  : never
