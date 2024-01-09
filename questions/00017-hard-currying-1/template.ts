declare function Currying<Fn extends Function>(fn: Fn):
Fn extends (...args: infer Args) => infer R
  ? Args extends []
    ? () => R
    : Curry<Args, R>
  : never

type Curry<Args extends unknown[], R> =
  Args extends [infer Head, ...infer Tail]
    ? (arg: Head) => Curry<Tail, R>
    : R
