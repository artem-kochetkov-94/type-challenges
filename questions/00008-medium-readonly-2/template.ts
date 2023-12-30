type MyReadonly2<T, K extends keyof T = never> =
  Equal<K, never> extends true
    ? Readonly<T>
    : Readonly<Pick<T, K>> & Omit<T, Extract<keyof T, K>>

    