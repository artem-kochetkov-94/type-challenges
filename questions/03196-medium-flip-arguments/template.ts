type FlipArguments<T extends (...args: any[]) => any> = 
  T extends (...args: infer Args) => infer R
    ? (...args: Reverse<Args>) => R
    : never

type FlipArguments2<T extends (...args: any[]) => any> = 
    (...args: Reverse<Parameters<T>>) => ReturnType<T>