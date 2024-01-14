type Split<S extends string, SEP extends string = never> =
  string extends S
    ? string[]
    : [SEP] extends [never]
        ? [S]
        : S extends `${infer Head}${SEP}${infer Tail}`
          ? [Head, ...Split<Tail, SEP>]
          : SEP extends ''
            ? []
            : [S]
