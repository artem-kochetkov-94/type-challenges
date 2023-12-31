type KebabCase<S> = 
  S extends
    `${infer Head}${infer Tail}`
      ? Tail extends Uncapitalize<Tail>
        ? `${Uncapitalize<Head>}${KebabCase<Tail>}`
        : `${Uncapitalize<Head>}-${Uncapitalize<KebabCase<Tail>>}`
      : S 
