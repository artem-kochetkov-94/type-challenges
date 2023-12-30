type MyAwaited<T extends object> =
  T extends PromiseLike<infer R>
    ? R extends PromiseLike<any>
      ? MyAwaited<R>
      : R
    : never
