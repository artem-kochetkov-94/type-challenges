type StringToUnion<T extends string> = 
  T extends `${infer Left}${infer Right}`
    ? Left | StringToUnion<Right>
    : never;
