type MutableKeys<T> = keyof {
  [P in keyof T as (
    Equal<Pick<T, P>, Readonly<Pick<T, P>>> extends true ? never : P
  )]: T[P]
}

type FSD = MutableKeys<{ a: number, readonly b: string }>
