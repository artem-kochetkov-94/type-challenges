type AppendArgument<Fn extends (...args: any[]) => any, A> =
  Fn extends (...args: infer Args) => infer Return
    ? (...args: [...Args, A]) => Return
    : never
