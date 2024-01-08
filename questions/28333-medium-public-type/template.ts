type PublicType<T extends object> = {
  [P in keyof T as (
    P extends `_${string}` ? never : P
  )]: T[P]
}
