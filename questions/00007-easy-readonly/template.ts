type MyReadonly<T> = {
    readonly [P in (keyof T)]: T[P]
}

type MyDeepReadonly<T> = {
    readonly [P in (keyof T)]: T[P] extends {} ? MyReadonly<T[P]> : T[P]
}
