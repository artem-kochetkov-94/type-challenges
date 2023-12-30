type LengthOfString<
  S extends string,
  A extends string[] = []
> = 
  S extends `${infer Left}${infer Right}`
    ? LengthOfStringMedium<Right, [...A, Left]>
    : A['length']
