type MyAwaited<T extends object> =
  T extends PromiseLike<infer R>
    ? R extends Promise<any>
      ? MyAwaited<R>
      : R
    : never
