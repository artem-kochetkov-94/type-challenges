declare function PromiseAll<T extends readonly unknown[]>
    (values: readonly [...T]): Promise<{
        [P in keyof T]: Awaited<T[P]>
    }>
