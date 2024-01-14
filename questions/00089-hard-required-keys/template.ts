type RequiredKeys<T> = keyof {
  [P in keyof T as (
    T[P] extends Required<T>[P]
      ? P
      : never
  )]: T[P]
}
