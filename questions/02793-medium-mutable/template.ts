type Mutable<T extends object> = {
    -readonly [P in keyof T]: T[P]
}
