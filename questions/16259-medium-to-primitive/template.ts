type ToPrimitive<T> = {
  [P in keyof T]: T[P] extends number
    ? number
    : T[P] extends string
      ? string
      : T[P] extends Function
        ? Function
        : T[P] extends boolean
          ? boolean
          : T[P] extends {}
            ? ToPrimitive<T[P]>
            : never
}
