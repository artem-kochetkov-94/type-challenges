type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<
  T extends string,
  Acc extends unknown[] = [],
> =
  T extends `${string}%${infer Head}${infer Tail}`
    ? Head extends keyof ControlsMap
      ? ParsePrintFormat<Tail, [...Acc, ControlsMap[Head]]>
      : ParsePrintFormat<Tail, Acc>
    : Acc
