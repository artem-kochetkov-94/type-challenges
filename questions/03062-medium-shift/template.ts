type Shift<T extends unknown[]> =
    T extends [unknown, ...infer Tail]
        ? Tail
        : []
