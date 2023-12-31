type Permutation<T, Acc = T> = 
  [T] extends [never]
    ? []
    : Acc extends Acc
      ? [Acc, ...Permutation<Exclude<T, Acc>>]
      : []
