type LookUp<
  U extends { type: PropertyKey },
  T extends PropertyKey
> = {
    [P in T]: U extends { type: T }
              ? U
              : never
}[T]

type LookUp2<
  U extends { type: PropertyKey },
  T
> = Extract<U, { type: T}>
